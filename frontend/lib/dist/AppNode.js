/**
 * Copyright (c) Streamlit Inc. (2018-2022) Snowflake Inc. (2022-2024)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { produce } from "immer";
import { Block as BlockProto, ForwardMsgMetadata } from "./proto";
import { Quiver } from "./dataframes/Quiver";
import { ensureError } from "./util/ErrorHandling";
import { getLoadingScreenType, LoadingScreenType, makeElementWithErrorText, makeElementWithInfoText, makeAppSkeletonElement, notUndefined } from "./util/utils";
const NO_SCRIPT_RUN_ID = "NO_SCRIPT_RUN_ID";

/**
 * An immutable node of the "App Data Tree".
 *
 * Trees are composed of `ElementNode` leaves, which contain data about
 * a single visual element, and `BlockNode` branches, which determine the
 * layout of a group of children nodes.
 *
 * A simple tree might look like this:
 *
 *   AppRoot
 *   ├── BlockNode ("main")
 *   │   ├── ElementNode (text: "Ahoy, Streamlit!")
 *   │   └── ElementNode (button: "Don't Push This")
 *   └── BlockNode ("sidebar")
 *       └── ElementNode (checkbox: "Batten The Hatches")
 *
 * To build this tree, the frontend receives `Delta` messages from Python,
 * each of which corresponds to a tree mutation ("add an element",
 * "add a block", "add rows to an existing element"). The frontend builds the
 * tree bit by bit in response to these `Delta`s.
 *
 * To render the app, the `AppView` class walks this tree and outputs
 * a corresponding DOM structure, using React, that's essentially a mapping
 * of `AppElement` -> `ReactNode`. This rendering happens "live" - that is,
 * the app is re-rendered each time a new `Delta` is received.
 *
 * Because the app gets re-rendered frequently, updates need to be fast.
 * Our React components - the building blocks of the app - are "pure"
 * (see https://reactjs.org/docs/react-api.html#reactpurecomponent), which
 * means that React uses shallow comparison to determine which ReactNodes to
 * update.
 *
 * Thus, each node in our tree is _immutable_ - any change to a `AppNode`
 * actually results in a *new* `AppNode` instance. This occurs recursively,
 * so inserting a new `ElementNode` into the tree will also result in new
 * `BlockNode`s for each of that Element's ancestors, all the way up to the
 * root node. Then, when React re-renders the app, it will re-traverse the new
 * nodes that have been created, and rebuild just the bits of the app that
 * have changed.
 */

/**
 * A leaf AppNode. Contains a single element to render.
 */
export class ElementNode {
  // The hash of the script that created this element.

  /** Create a new ElementNode. */
  constructor(element, metadata, scriptRunId, activeScriptHash, fragmentId) {
    this.element = void 0;
    this.metadata = void 0;
    this.scriptRunId = void 0;
    this.fragmentId = void 0;
    this.lazyQuiverElement = void 0;
    this.lazyVegaLiteChartElement = void 0;
    this.activeScriptHash = void 0;
    this.element = element;
    this.metadata = metadata;
    this.scriptRunId = scriptRunId;
    this.activeScriptHash = activeScriptHash;
    this.fragmentId = fragmentId;
  }
  get quiverElement() {
    if (this.lazyQuiverElement !== undefined) {
      return this.lazyQuiverElement;
    }
    if (this.element.type !== "arrowTable" && this.element.type !== "arrowDataFrame") {
      throw new Error("elementType '".concat(this.element.type, "' is not a valid Quiver element!"));
    }
    const toReturn = new Quiver(this.element[this.element.type]);
    // TODO (lukasmasuch): Delete element from proto object?
    this.lazyQuiverElement = toReturn;
    return toReturn;
  }
  get vegaLiteChartElement() {
    if (this.lazyVegaLiteChartElement !== undefined) {
      return this.lazyVegaLiteChartElement;
    }
    if (this.element.type !== "arrowVegaLiteChart") {
      throw new Error("elementType '".concat(this.element.type, "' is not a valid VegaLiteChartElement!"));
    }
    const proto = this.element.arrowVegaLiteChart;
    const modifiedData = proto.data ? new Quiver(proto.data) : null;
    const modifiedDatasets = proto.datasets.length > 0 ? wrapDatasets(proto.datasets) : [];
    const toReturn = {
      data: modifiedData,
      spec: proto.spec,
      datasets: modifiedDatasets,
      useContainerWidth: proto.useContainerWidth,
      vegaLiteTheme: proto.theme,
      id: proto.id,
      selectionMode: proto.selectionMode,
      formId: proto.formId
    };
    this.lazyVegaLiteChartElement = toReturn;
    return toReturn;
  }

  // eslint-disable-next-line class-methods-use-this
  getIn() {
    return undefined;
  }

  // eslint-disable-next-line class-methods-use-this
  setIn() {
    throw new Error("'setIn' cannot be called on an ElementNode");
  }
  filterMainScriptElements(mainScriptHash) {
    if (this.activeScriptHash !== mainScriptHash) {
      return undefined;
    }
    return this;
  }
  clearStaleNodes(currentScriptRunId, fragmentIdsThisRun, fragmentIdOfBlock) {
    if (fragmentIdsThisRun && fragmentIdsThisRun.length) {
      // If we're currently running a fragment, nodes unrelated to the fragment
      // shouldn't be cleared. This can happen when,
      //   1. This element doesn't correspond to a fragment at all.
      //   2. This element corresponds to a fragment, but not one that's
      //      currently being run.
      //   3. This element was added by a fragment, but the element's
      //      *parent block* does not correspond to the same fragment. This is
      //      possible when a fragment writes to a container defined outside of
      //      itself. We don't clear out these types of elements in this case
      //      as we don't want fragment runs to result in changes to externally
      //      defined containers.
      if (!this.fragmentId || !fragmentIdsThisRun.includes(this.fragmentId) || this.fragmentId != fragmentIdOfBlock) {
        return this;
      }
    }
    return this.scriptRunId === currentScriptRunId ? this : undefined;
  }
  getElements(elements) {
    if (elements == null) {
      elements = new Set();
    }
    elements.add(this.element);
    return elements;
  }
  arrowAddRows(namedDataSet, scriptRunId) {
    const elementType = this.element.type;
    const newNode = new ElementNode(this.element, this.metadata, scriptRunId, this.activeScriptHash, this.fragmentId);
    switch (elementType) {
      case "arrowTable":
      case "arrowDataFrame":
        {
          newNode.lazyQuiverElement = ElementNode.quiverAddRowsHelper(this.quiverElement, namedDataSet);
          break;
        }
      case "arrowVegaLiteChart":
        {
          newNode.lazyVegaLiteChartElement = ElementNode.vegaLiteChartAddRowsHelper(this.vegaLiteChartElement, namedDataSet);
          break;
        }
      default:
        {
          // This should never happen!
          throw new Error("elementType '".concat(this.element.type, "' is not a valid arrowAddRows target!"));
        }
    }
    return newNode;
  }
  static quiverAddRowsHelper(element, namedDataSet) {
    if (namedDataSet.hasName) {
      throw new Error("Add rows cannot be used with a named dataset for this element.");
    }
    const newQuiver = new Quiver(namedDataSet.data);
    return element.addRows(newQuiver);
  }
  static vegaLiteChartAddRowsHelper(element, namedDataSet) {
    const newDataSetName = namedDataSet.hasName ? namedDataSet.name : null;
    const newDataSetQuiver = new Quiver(namedDataSet.data);
    return produce(element, draft => {
      const existingDataSet = getNamedDataSet(draft.datasets, newDataSetName);
      if (existingDataSet) {
        existingDataSet.data = existingDataSet.data.addRows(newDataSetQuiver);
      } else {
        draft.data = draft.data ? draft.data.addRows(newDataSetQuiver) : newDataSetQuiver;
      }
    });
  }
}

/**
 * If there is only one NamedDataSet, return it.
 * If there is a NamedDataset that matches the given name, return it.
 * Otherwise, return `undefined`.
 */
function getNamedDataSet(namedDataSets, name) {
  if (namedDataSets.length === 1) {
    return namedDataSets[0];
  }
  return namedDataSets.find(dataset => dataset.hasName && dataset.name === name);
}

/**
 * A container AppNode that holds children.
 */
export class BlockNode {
  // The hash of the script that created this block.

  constructor(activeScriptHash, children, deltaBlock, scriptRunId, fragmentId) {
    this.children = void 0;
    this.deltaBlock = void 0;
    this.scriptRunId = void 0;
    this.fragmentId = void 0;
    this.activeScriptHash = void 0;
    this.activeScriptHash = activeScriptHash;
    this.children = children !== null && children !== void 0 ? children : [];
    this.deltaBlock = deltaBlock !== null && deltaBlock !== void 0 ? deltaBlock : new BlockProto({});
    this.scriptRunId = scriptRunId !== null && scriptRunId !== void 0 ? scriptRunId : NO_SCRIPT_RUN_ID;
    this.fragmentId = fragmentId;
  }

  /** True if this Block has no children. */
  get isEmpty() {
    return this.children.length === 0;
  }
  getIn(path) {
    if (path.length === 0) {
      return undefined;
    }
    const childIndex = path[0];
    if (childIndex < 0 || childIndex >= this.children.length) {
      return undefined;
    }
    if (path.length === 1) {
      return this.children[childIndex];
    }
    return this.children[childIndex].getIn(path.slice(1));
  }
  setIn(path, node, scriptRunId) {
    if (path.length === 0) {
      throw new Error("empty path!");
    }
    const childIndex = path[0];
    if (childIndex < 0 || childIndex > this.children.length) {
      throw new Error("Bad 'setIn' index ".concat(childIndex, " (should be between [0, ").concat(this.children.length, "])"));
    }
    const newChildren = this.children.slice();
    if (path.length === 1) {
      // Base case
      newChildren[childIndex] = node;
    } else {
      // Pop the current element off our path, and recurse into our children
      newChildren[childIndex] = newChildren[childIndex].setIn(path.slice(1), node, scriptRunId);
    }
    return new BlockNode(this.activeScriptHash, newChildren, this.deltaBlock, scriptRunId, this.fragmentId);
  }
  filterMainScriptElements(mainScriptHash) {
    if (this.activeScriptHash !== mainScriptHash) {
      return undefined;
    }

    // Recursively clear our children.
    const newChildren = this.children.map(child => child.filterMainScriptElements(mainScriptHash)).filter(notUndefined);
    return new BlockNode(this.activeScriptHash, newChildren, this.deltaBlock, this.scriptRunId, this.fragmentId);
  }
  clearStaleNodes(currentScriptRunId, fragmentIdsThisRun, fragmentIdOfBlock) {
    if (!fragmentIdsThisRun || !fragmentIdsThisRun.length) {
      // If we're not currently running a fragment, then we can remove any blocks
      // that don't correspond to currentScriptRunId.
      if (this.scriptRunId !== currentScriptRunId) {
        return undefined;
      }
    } else {
      // Otherwise, we are currently running a fragment, and our behavior
      // depends on the fragmentId of this BlockNode.

      if (this.fragmentId) {
        if (!fragmentIdsThisRun.includes(this.fragmentId)) {
          // This BlockNode corresponds to a different fragment, so we know we
          // won't be modifying it and can return early.
          return this;
        }

        // If this BlockNode *does* correspond to a currently running fragment,
        // we recurse into it below and set the fragmentIdOfBlock parameter to
        // keep track of which fragment this BlockNode belongs to.
        fragmentIdOfBlock = this.fragmentId;
      }

      // If this BlockNode doesn't correspond to a fragment at all, we recurse
      // into it below as one of its children might.
    }

    // Recursively clear our children.
    const newChildren = this.children.map(child => child.clearStaleNodes(currentScriptRunId, fragmentIdsThisRun, fragmentIdOfBlock)).filter(notUndefined);
    return new BlockNode(this.activeScriptHash, newChildren, this.deltaBlock, currentScriptRunId, this.fragmentId);
  }
  getElements(elementSet) {
    if (elementSet == null) {
      elementSet = new Set();
    }
    for (const child of this.children) {
      child.getElements(elementSet);
    }
    return elementSet;
  }
}

/**
 * The root of our data tree. It contains the app's top-level BlockNodes.
 */
export class AppRoot {
  /* The hash of the main script that creates this AppRoot. */

  /**
   * Create an empty AppRoot with a placeholder "skeleton" element.
   */
  static empty() {
    let mainScriptHash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    let isInitialRender = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    let sidebarElements = arguments.length > 2 ? arguments[2] : undefined;
    const mainNodes = [];
    let waitElement;
    switch (getLoadingScreenType()) {
      case LoadingScreenType.NONE:
        break;
      case LoadingScreenType.V1:
        // Only show the v1 loading state when it's the initial render.
        // This is how v1 used to work, and we don't want any backward
        // incompatibility.
        if (isInitialRender) {
          waitElement = makeElementWithInfoText("Please wait...");
        }
        break;
      default:
        waitElement = makeAppSkeletonElement();
    }
    if (waitElement) {
      mainNodes.push(new ElementNode(waitElement, ForwardMsgMetadata.create({}), NO_SCRIPT_RUN_ID, mainScriptHash));
    }
    const main = new BlockNode(mainScriptHash, mainNodes, new BlockProto({
      allowEmpty: true
    }), NO_SCRIPT_RUN_ID);
    const sidebar = sidebarElements || new BlockNode(mainScriptHash, [], new BlockProto({
      allowEmpty: true
    }), NO_SCRIPT_RUN_ID);
    const event = new BlockNode(mainScriptHash, [], new BlockProto({
      allowEmpty: true
    }), NO_SCRIPT_RUN_ID);
    const bottom = new BlockNode(mainScriptHash, [], new BlockProto({
      allowEmpty: true
    }), NO_SCRIPT_RUN_ID);
    return new AppRoot(mainScriptHash, new BlockNode(mainScriptHash, [main, sidebar, event, bottom]), null);
  }
  constructor(mainScriptHash, root) {
    let appLogo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    this.root = void 0;
    this.mainScriptHash = void 0;
    this.appLogo = void 0;
    this.mainScriptHash = mainScriptHash;
    this.root = root;
    this.appLogo = appLogo;

    // Verify that our root node has exactly 4 children: a 'main' block,
    // a 'sidebar' block, a `bottom` block and an 'event' block.
    if (this.root.children.length !== 4 || this.main == null || this.sidebar == null || this.event == null || this.bottom == null) {
      throw new Error("Invalid root node children! ".concat(root));
    }
  }
  get main() {
    const [main] = this.root.children;
    return main;
  }
  get sidebar() {
    const [, sidebar] = this.root.children;
    return sidebar;
  }
  get event() {
    const [,, event] = this.root.children;
    return event;
  }
  get bottom() {
    const [,,, bottom] = this.root.children;
    return bottom;
  }
  get logo() {
    var _this$appLogo$logo, _this$appLogo;
    return (_this$appLogo$logo = (_this$appLogo = this.appLogo) === null || _this$appLogo === void 0 ? void 0 : _this$appLogo.logo) !== null && _this$appLogo$logo !== void 0 ? _this$appLogo$logo : null;
  }
  appRootWithLogo(logo, metadata) {
    const {
      activeScriptHash
    } = metadata;
    return new AppRoot(this.mainScriptHash, this.root, {
      logo,
      activeScriptHash
    });
  }
  applyDelta(scriptRunId, delta, metadata) {
    // The full path to the AppNode within the element tree.
    // Used to find and update the element node specified by this Delta.
    const {
      deltaPath,
      activeScriptHash
    } = metadata;
    switch (delta.type) {
      case "newElement":
        {
          const element = delta.newElement;
          return this.addElement(deltaPath, scriptRunId, element, metadata, activeScriptHash, delta.fragmentId);
        }
      case "addBlock":
        {
          return this.addBlock(deltaPath, delta.addBlock, scriptRunId, activeScriptHash, delta.fragmentId);
        }
      case "arrowAddRows":
        {
          try {
            return this.arrowAddRows(deltaPath, delta.arrowAddRows, scriptRunId);
          } catch (error) {
            const errorElement = makeElementWithErrorText(ensureError(error).message);
            return this.addElement(deltaPath, scriptRunId, errorElement, metadata, activeScriptHash);
          }
        }
      default:
        {
          throw new Error("Unrecognized deltaType: '".concat(delta.type, "'"));
        }
    }
  }
  filterMainScriptElements(mainScriptHash) {
    var _this$appLogo2;
    // clears all nodes that are not associated with the mainScriptHash
    // Get the current script run id from one of the children
    const currentScriptRunId = this.main.scriptRunId;
    const main = this.main.filterMainScriptElements(mainScriptHash) || new BlockNode(mainScriptHash);
    const sidebar = this.sidebar.filterMainScriptElements(mainScriptHash) || new BlockNode(mainScriptHash);
    const event = this.event.filterMainScriptElements(mainScriptHash) || new BlockNode(mainScriptHash);
    const bottom = this.bottom.filterMainScriptElements(mainScriptHash) || new BlockNode(mainScriptHash);
    const appLogo = ((_this$appLogo2 = this.appLogo) === null || _this$appLogo2 === void 0 ? void 0 : _this$appLogo2.activeScriptHash) === mainScriptHash ? this.appLogo : null;
    return new AppRoot(mainScriptHash, new BlockNode(mainScriptHash, [main, sidebar, event, bottom], new BlockProto({
      allowEmpty: true
    }), currentScriptRunId), appLogo);
  }
  clearStaleNodes(currentScriptRunId, fragmentIdsThisRun) {
    const main = this.main.clearStaleNodes(currentScriptRunId, fragmentIdsThisRun) || new BlockNode(this.mainScriptHash);
    const sidebar = this.sidebar.clearStaleNodes(currentScriptRunId, fragmentIdsThisRun) || new BlockNode(this.mainScriptHash);
    const event = this.event.clearStaleNodes(currentScriptRunId, fragmentIdsThisRun) || new BlockNode(this.mainScriptHash);
    const bottom = this.bottom.clearStaleNodes(currentScriptRunId, fragmentIdsThisRun) || new BlockNode(this.mainScriptHash);
    return new AppRoot(this.mainScriptHash, new BlockNode(this.mainScriptHash, [main, sidebar, event, bottom], new BlockProto({
      allowEmpty: true
    }), currentScriptRunId), this.appLogo);
  }

  /** Return a Set containing all Elements in the tree. */
  getElements() {
    const elements = new Set();
    this.main.getElements(elements);
    this.sidebar.getElements(elements);
    this.event.getElements(elements);
    this.bottom.getElements(elements);
    return elements;
  }
  addElement(deltaPath, scriptRunId, element, metadata, activeScriptHash, fragmentId) {
    const elementNode = new ElementNode(element, metadata, scriptRunId, activeScriptHash, fragmentId);
    return new AppRoot(this.mainScriptHash, this.root.setIn(deltaPath, elementNode, scriptRunId), this.appLogo);
  }
  addBlock(deltaPath, block, scriptRunId, activeScriptHash, fragmentId) {
    const existingNode = this.root.getIn(deltaPath);

    // If we're replacing an existing Block, this new Block inherits
    // the existing Block's children. This prevents existing widgets from
    // having their values reset.
    const children = existingNode instanceof BlockNode ? existingNode.children : [];
    const blockNode = new BlockNode(activeScriptHash, children, block, scriptRunId, fragmentId);
    return new AppRoot(this.mainScriptHash, this.root.setIn(deltaPath, blockNode, scriptRunId), this.appLogo);
  }
  arrowAddRows(deltaPath, namedDataSet, scriptRunId) {
    const existingNode = this.root.getIn(deltaPath);
    if (existingNode == null) {
      throw new Error("Can't arrowAddRows: invalid deltaPath: ".concat(deltaPath));
    }
    const elementNode = existingNode.arrowAddRows(namedDataSet, scriptRunId);
    return new AppRoot(this.mainScriptHash, this.root.setIn(deltaPath, elementNode, scriptRunId), this.appLogo);
  }
}

/** Iterates over datasets and converts data to Quiver. */
function wrapDatasets(datasets) {
  return datasets.map(dataset => {
    return {
      hasName: dataset.hasName,
      name: dataset.name,
      data: new Quiver(dataset.data)
    };
  });
}
//# sourceMappingURL=AppNode.js.map