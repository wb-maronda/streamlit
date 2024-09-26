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

import React, { useContext, useEffect, useMemo, useRef } from "react";
import classNames from "classnames";
import { useTheme } from "@emotion/react";
import { LibContext } from "../LibContext";
import { BlockNode, ElementNode } from "../../../AppNode";
import { getElementId, notNullOrUndefined } from "../../../util/utils";
import { Form } from "../../widgets/Form";
import Tabs from "../../elements/Tabs";
import Popover from "../../elements/Popover";
import ChatMessage from "../../elements/ChatMessage";
import Dialog from "../../elements/Dialog";
import Expander from "../../elements/Expander";
import { useScrollToBottom } from "../../../hooks/useScrollToBottom";
import { assignDividerColor, convertKeyToClassName, getKeyFromId, isComponentStale, shouldComponentBeEnabled } from "./utils";
import ElementNodeRenderer from "./ElementNodeRenderer";
import { StyledColumn, StyledHorizontalBlock, StyledVerticalBlock, StyledVerticalBlockBorderWrapper, StyledVerticalBlockWrapper } from "./styled-components";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
// Render BlockNodes (i.e. container nodes).
const BlockNodeRenderer = props => {
  const {
    node
  } = props;
  const {
    fragmentIdsThisRun
  } = useContext(LibContext);
  if (node.isEmpty && !node.deltaBlock.allowEmpty) {
    return /*#__PURE__*/_jsx(_Fragment, {});
  }
  const enable = shouldComponentBeEnabled("", props.scriptRunState);
  const isStale = isComponentStale(enable, node, props.scriptRunState, props.scriptRunId, fragmentIdsThisRun);
  const childProps = {
    ...props,
    ...{
      node
    }
  };
  const disableFullscreenMode = props.disableFullscreenMode || notNullOrUndefined(node.deltaBlock.dialog) || notNullOrUndefined(node.deltaBlock.popover);
  const child = /*#__PURE__*/_jsx(LayoutBlock, {
    ...childProps,
    disableFullscreenMode: disableFullscreenMode
  });
  if (node.deltaBlock.dialog) {
    return /*#__PURE__*/_jsx(Dialog, {
      element: node.deltaBlock.dialog,
      deltaMsgReceivedAt: node.deltaMsgReceivedAt,
      children: child
    });
  }
  if (node.deltaBlock.expandable) {
    return /*#__PURE__*/_jsx(Expander, {
      empty: node.isEmpty,
      isStale: isStale,
      element: node.deltaBlock.expandable,
      children: child
    });
  }
  if (node.deltaBlock.popover) {
    return /*#__PURE__*/_jsx(Popover, {
      empty: node.isEmpty,
      element: node.deltaBlock.popover,
      width: props.width,
      children: child
    });
  }
  if (node.deltaBlock.type === "form") {
    const {
      formId,
      clearOnSubmit,
      enterToSubmit,
      border
    } = node.deltaBlock.form;
    const submitButtons = props.formsData.submitButtons.get(formId);
    const hasSubmitButton = submitButtons !== undefined && submitButtons.length > 0;
    return /*#__PURE__*/_jsx(Form, {
      formId: formId,
      clearOnSubmit: clearOnSubmit,
      enterToSubmit: enterToSubmit,
      width: props.width,
      hasSubmitButton: hasSubmitButton,
      scriptRunState: props.scriptRunState,
      widgetMgr: props.widgetMgr,
      border: border,
      children: child
    });
  }
  if (node.deltaBlock.chatMessage) {
    return /*#__PURE__*/_jsx(ChatMessage, {
      element: node.deltaBlock.chatMessage,
      endpoints: props.endpoints,
      children: child
    });
  }
  if (node.deltaBlock.column) {
    return /*#__PURE__*/_jsx(StyledColumn, {
      weight: node.deltaBlock.column.weight ?? 0,
      gap: node.deltaBlock.column.gap ?? "",
      verticalAlignment: node.deltaBlock.column.verticalAlignment ?? undefined,
      className: "stColumn",
      "data-testid": "stColumn",
      children: child
    });
  }
  if (node.deltaBlock.tabContainer) {
    const renderTabContent = mappedChildProps => {
      // avoid circular dependency where Tab uses VerticalBlock but VerticalBlock uses tabs
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      return /*#__PURE__*/_jsx(VerticalBlock, {
        ...mappedChildProps
      });
    };
    const tabsProps = {
      ...childProps,
      isStale,
      renderTabContent
    };
    return /*#__PURE__*/_jsx(Tabs, {
      ...tabsProps
    });
  }
  return child;
};
const ChildRenderer = props => {
  const {
    libConfig
  } = useContext(LibContext);

  // Handle cycling of colors for dividers:
  assignDividerColor(props.node, useTheme());

  // Capture all the element ids to avoid rendering the same element twice
  const elementKeySet = new Set();
  return /*#__PURE__*/_jsx(_Fragment, {
    children: props.node.children && props.node.children.map((node, index) => {
      const disableFullscreenMode = libConfig.disableFullscreenMode || props.disableFullscreenMode;

      // Base case: render a leaf node.
      if (node instanceof ElementNode) {
        // Put node in childProps instead of passing as a node={node} prop in React to
        // guarantee it doesn't get overwritten by {...childProps}.
        const childProps = {
          ...props,
          disableFullscreenMode,
          node: node
        };
        const key = getElementId(node.element) || index.toString();
        // Avoid rendering the same element twice. We assume the first one is the one we want
        // because the page is rendered top to bottom, so a valid widget would be rendered
        // correctly and we assume the second one is therefore stale (or throw an error).
        // Also, our setIn logic pushes stale widgets down in the list of elements, so the
        // most recent one should always come first.
        if (elementKeySet.has(key)) {
          return null;
        }
        elementKeySet.add(key);
        return /*#__PURE__*/_jsx(ElementNodeRenderer, {
          ...childProps
        }, key);
      }

      // Recursive case: render a block, which can contain other blocks
      // and elements.
      if (node instanceof BlockNode) {
        // Put node in childProps instead of passing as a node={node} prop in React to
        // guarantee it doesn't get overwritten by {...childProps}.
        const childProps = {
          ...props,
          disableFullscreenMode,
          node: node
        };
        return /*#__PURE__*/_jsx(BlockNodeRenderer, {
          ...childProps
        }, index);
      }

      // We don't have any other node types!
      throw new Error(`Unrecognized AppNode: ${node}`);
    })
  });
};
// A wrapper for Vertical Block that adds scrolling with pinned to bottom behavior.
function ScrollToBottomVerticalBlockWrapper(props) {
  const {
    border,
    height,
    children
  } = props;
  const scrollContainerRef = useScrollToBottom();
  return /*#__PURE__*/_jsx(StyledVerticalBlockBorderWrapper, {
    border: border,
    height: height,
    "data-testid": "stVerticalBlockBorderWrapper",
    "data-test-scroll-behavior": "scroll-to-bottom",
    ref: scrollContainerRef,
    children: children
  });
}

// Currently, only VerticalBlocks will ever contain leaf elements. But this is only enforced on the
// Python side.
const VerticalBlock = props => {
  const wrapperElement = useRef(null);
  const [width, setWidth] = React.useState(-1);
  const observer = useMemo(() => new ResizeObserver(_ref => {
    let [entry] = _ref;
    // Since the setWidth will perform changes to the DOM,
    // we need wrap it in a requestAnimationFrame to avoid this error:
    // ResizeObserver loop completed with undelivered notifications.
    window.requestAnimationFrame(() => {
      // We need to determine the available width here to be able to set
      // an explicit width for the `StyledVerticalBlock`.

      // The width should never be set to 0 since it can cause
      // flickering effects.
      setWidth(entry.target.getBoundingClientRect().width || -1);
    });
  }), [setWidth]);
  const border = props.node.deltaBlock.vertical?.border ?? false;
  const height = props.node.deltaBlock.vertical?.height || undefined;
  const activateScrollToBottom = height && props.node.children.find(node => {
    return node instanceof BlockNode && node.deltaBlock.type === "chatMessage";
  }) !== undefined;
  useEffect(() => {
    if (wrapperElement.current) {
      observer.observe(wrapperElement.current);
    }
    return () => {
      observer.disconnect();
    };
    // We need to update the observer whenever the scrolling is activated or deactivated
    // Otherwise, it still tries to measure the width of the old wrapper element.
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [observer, activateScrollToBottom]);

  // Decide which wrapper to use based on whether we need to activate scrolling to bottom
  // This is done for performance reasons, to prevent the usage of useScrollToBottom
  // if it is not needed.
  const VerticalBlockBorderWrapper = activateScrollToBottom ? ScrollToBottomVerticalBlockWrapper : StyledVerticalBlockBorderWrapper;
  const propsWithNewWidth = {
    ...props,
    ...{
      width
    }
  };
  // Extract the user-specified key from the block ID (if provided):
  const userKey = getKeyFromId(props.node.deltaBlock.id);

  // Widths of children autosizes to container width (and therefore window width).
  // StyledVerticalBlocks are the only things that calculate their own widths. They should never use
  // the width value coming from the parent via props.

  // To apply a border, we need to wrap the StyledVerticalBlockWrapper again, otherwise the width
  // calculation would not take the padding into consideration.
  return /*#__PURE__*/_jsx(VerticalBlockBorderWrapper, {
    border: border,
    height: height,
    "data-testid": "stVerticalBlockBorderWrapper",
    "data-test-scroll-behavior": "normal",
    children: /*#__PURE__*/_jsx(StyledVerticalBlockWrapper, {
      ref: wrapperElement,
      children: /*#__PURE__*/_jsx(StyledVerticalBlock, {
        width: width,
        className: classNames("stVerticalBlock", convertKeyToClassName(userKey)),
        "data-testid": "stVerticalBlock",
        children: /*#__PURE__*/_jsx(ChildRenderer, {
          ...propsWithNewWidth
        })
      })
    })
  });
};
const HorizontalBlock = props => {
  // Create a horizontal block as the parent for columns.
  // The children are always columns, but this is not checked. We just trust the Python side to
  // do the right thing, then we ask ChildRenderer to handle it.
  const gap = props.node.deltaBlock.horizontal?.gap ?? "";
  return /*#__PURE__*/_jsx(StyledHorizontalBlock, {
    gap: gap,
    className: "stHorizontalBlock",
    "data-testid": "stHorizontalBlock",
    children: /*#__PURE__*/_jsx(ChildRenderer, {
      ...props
    })
  });
};

// A container block with one of two types of layouts: vertical and horizontal.
function LayoutBlock(props) {
  if (props.node.deltaBlock.horizontal) {
    return /*#__PURE__*/_jsx(HorizontalBlock, {
      ...props
    });
  }
  return /*#__PURE__*/_jsx(VerticalBlock, {
    ...props
  });
}
export default VerticalBlock;
//# sourceMappingURL=Block.js.map