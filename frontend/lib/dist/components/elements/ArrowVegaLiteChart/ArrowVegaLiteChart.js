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

import React, { PureComponent } from "react";
import { withTheme } from "@emotion/react";
import embed from "vega-embed";
import * as vega from "vega";
import { expressionInterpreter } from "vega-interpreter";
import isEqual from "lodash/isEqual";
import { debounce, notNullOrUndefined, isNullOrUndefined } from "../../../util/utils";
import { logWarning, logMessage } from "../../../util/log";
import { withFullScreenWrapper } from "../../shared/FullScreenWrapper";
import { ensureError } from "../../../util/ErrorHandling";
import { FormClearHelper } from "../../widgets/Form";
import "../../../assets/css/vega-embed.css";
import "../../../assets/css/vega-tooltip.css";
import { getDataSets, getDataArray, dataIsAnAppendOfPrev, getDataArrays, getInlineData } from "./arrowUtils";
import { applyStreamlitTheme, applyThemeDefaults } from "./CustomTheme";
import { StyledVegaLiteChartContainer } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
const DEFAULT_DATA_NAME = "source";

/**
 * Fix bug where Vega Lite was vertically-cropping the x-axis in some cases.
 * For example, in e2e/scripts/add_rows.py
 */
const BOTTOM_PADDING = 20;

/**
 * Debounce time for triggering a widget state update
 * This prevents to rapid updates to the widget state.
 */
const DEBOUNCE_TIME_MS = 150;

/** This is the state that is sent to the backend
 * This needs to be the same structure that is also defined
 * in the Python code.
 */

/**
 * Prepares the vega-lite spec for selections by transforming the select parameters
 * to a full object specification and by automatically adding encodings (if missing)
 * to point selections.
 *
 * The changes are applied in-place to the spec object.
 *
 * @param spec The Vega-Lite specification of the chart.
 */
export function prepareSpecForSelections(spec) {
  if ("params" in spec && "encoding" in spec) {
    spec.params.forEach(param => {
      if (!("select" in param)) {
        // We are only interested in transforming select parameters.
        // Other parameters are skipped.
        return;
      }
      if (["interval", "point"].includes(param.select)) {
        // The select object can be either a single string (short-hand) specifying
        // "interval" or "point" or an object that can contain additional
        // properties as defined here: https://vega.github.io/vega-lite/docs/selection.html
        // We convert the short-hand notation to the full object specification,
        // so that we can attach additional properties to this below.
        param.select = {
          type: param.select
        };
      }
      if (!("type" in param.select)) {
        // The type property is required in the spec.
        // But we check anyways and skip all parameters that don't have it.
        return;
      }
      if (param.select.type === "point" && !("encodings" in param.select) && isNullOrUndefined(param.select.encodings)) {
        // If encodings are not specified by the user, we add all the encodings from
        // the chart to the selection parameter. This is required so that points
        // selections are correctly resolved to a PointSelection and not an IndexSelection:
        // https://github.com/altair-viz/altair/issues/3285#issuecomment-1858860696
        param.select.encodings = Object.keys(spec.encoding);
      }
    });
  }
}
export class ArrowVegaLiteChart extends PureComponent {
  constructor() {
    super(...arguments);
    this.vegaView = void 0;
    this.vegaFinalizer = void 0;
    this.defaultDataName = DEFAULT_DATA_NAME;
    this.element = null;
    this.formClearHelper = new FormClearHelper();
    this.state = {
      error: undefined
    };
    this.finalizeView = () => {
      if (this.vegaFinalizer) {
        this.vegaFinalizer();
      }
      this.vegaFinalizer = undefined;
      this.vegaView = undefined;
    };
    this.generateSpec = () => {
      var _spec$usermeta, _spec$usermeta$embedO;
      const {
        element: el,
        theme,
        isFullScreen,
        width,
        height
      } = this.props;
      const spec = JSON.parse(el.spec);
      const {
        useContainerWidth
      } = el;
      if (el.vegaLiteTheme === "streamlit") {
        spec.config = applyStreamlitTheme(spec.config, theme);
      } else if (((_spec$usermeta = spec.usermeta) === null || _spec$usermeta === void 0 ? void 0 : (_spec$usermeta$embedO = _spec$usermeta.embedOptions) === null || _spec$usermeta$embedO === void 0 ? void 0 : _spec$usermeta$embedO.theme) === "streamlit") {
        spec.config = applyStreamlitTheme(spec.config, theme);
        // Remove the theme from the usermeta so it doesn't get picked up by vega embed.
        spec.usermeta.embedOptions.theme = undefined;
      } else {
        // Apply minor theming improvements to work better with Streamlit
        spec.config = applyThemeDefaults(spec.config, theme);
      }
      if (isFullScreen) {
        spec.width = width;
        spec.height = height;
        if ("vconcat" in spec) {
          spec.vconcat.forEach(child => {
            child.width = width;
          });
        }
      } else if (useContainerWidth) {
        spec.width = width;
        if ("vconcat" in spec) {
          spec.vconcat.forEach(child => {
            child.width = width;
          });
        }
      }
      if (!spec.padding) {
        spec.padding = {};
      }
      if (spec.padding.bottom == null) {
        spec.padding.bottom = BOTTOM_PADDING;
      }
      if (spec.datasets) {
        throw new Error("Datasets should not be passed as part of the spec");
      }
      if (el.selectionMode.length > 0) {
        prepareSpecForSelections(spec);
      }
      return spec;
    };
    this.maybeConfigureSelections = () => {
      if (this.vegaView === undefined) {
        // This check is mainly to make the type checker happy.
        // this.vegaView is guaranteed to be defined here.
        return;
      }
      const {
        widgetMgr,
        element
      } = this.props;
      if (!(element !== null && element !== void 0 && element.id) || element.selectionMode.length === 0) {
        // To configure selections, it needs to be activated and
        // the element ID must be set.
        return;
      }

      // Try to load the previous state of the chart from the element state.
      // This is useful to restore the selection state when the component is re-mounted
      // or when its put into fullscreen mode.
      const viewState = widgetMgr.getElementState(this.props.element.id, "viewState");
      if (notNullOrUndefined(viewState)) {
        try {
          this.vegaView = this.vegaView.setState(viewState);
        } catch (e) {
          logWarning("Failed to restore view state", e);
        }
      }

      // Add listeners for all selection events. Find out more here:
      // https://vega.github.io/vega/docs/api/view/#view_addSignalListener
      element.selectionMode.forEach((param, _index) => {
        var _this$vegaView;
        (_this$vegaView = this.vegaView) === null || _this$vegaView === void 0 ? void 0 : _this$vegaView.addSignalListener(param, debounce(DEBOUNCE_TIME_MS, (name, value) => {
          var _this$vegaView2;
          // Store the current chart selection state with the widget manager so that it
          // can be used for restoring the state when the component unmounted and
          // created again. This can happen when elements are added before it within
          // the delta path. The viewState is only stored in the frontend, and not
          // synced to the backend.
          const viewState = (_this$vegaView2 = this.vegaView) === null || _this$vegaView2 === void 0 ? void 0 : _this$vegaView2.getState({
            // There are also `signals` data, but I believe its
            // not relevant for restoring the selection state.
            data: (name, _operator) => {
              // Vega lite stores the selection state in a <param name>_store parameter
              // under `data` that can be retrieved via the getState method.
              // https://vega.github.io/vega/docs/api/view/#view_getState
              return element.selectionMode.some(mode => "".concat(mode, "_store") === name);
            },
            // Don't include subcontext data since it will lead to exceptions
            // when loading the state.
            recurse: false
          });
          if (notNullOrUndefined(viewState)) {
            widgetMgr.setElementState(element.id, "viewState", viewState);
          }

          // If selection encodings are correctly specified, vega-lite will return
          // a list of selected points within the vlPoint.or property:
          // https://github.com/vega/altair/blob/f1b4e2c84da2fba220022c8a285cc8280f824ed8/altair/utils/selection.py#L50
          // We want to just return this list of points instead of the entire object
          // since the other parts of the selection object are not useful.
          let processedSelection = value;
          if ("vlPoint" in value && "or" in value.vlPoint) {
            processedSelection = value.vlPoint.or;
          }

          // Get the current widget state
          const currentWidgetState = JSON.parse(widgetMgr.getStringValue(element) || "{}");

          // Update the component-internal selection state
          const updatedSelections = {
            selection: {
              ...((currentWidgetState === null || currentWidgetState === void 0 ? void 0 : currentWidgetState.selection) || {}),
              [name]: processedSelection || {}
            }
          };

          // Update the widget state if the selection state has changed
          // compared to the last update. This selection state will be synced
          // with the backend.
          if (!isEqual(currentWidgetState, updatedSelections)) {
            widgetMgr.setStringValue(element, JSON.stringify(updatedSelections), {
              fromUi: true
            }, this.props.fragmentId);
          }
        }));
      });

      /**
       * Callback to reset the selection and update the widget state.
       * This might also send the empty selection state to the backend.
       */
      const reset = () => {
        const emptySelectionState = {
          selection: {}
        };
        // Initialize all parameters defined in the selectionMode with an empty object.
        this.props.element.selectionMode.forEach(param => {
          emptySelectionState.selection[param] = {};
        });
        const currentWidgetStateStr = widgetMgr.getStringValue(element);
        const currentWidgetState = currentWidgetStateStr ? JSON.parse(currentWidgetStateStr) :
        // If there wasn't any selection yet, the selection state
        // is assumed to be empty.
        emptySelectionState;
        if (!isEqual(currentWidgetState, emptySelectionState)) {
          var _this$props$widgetMgr;
          (_this$props$widgetMgr = this.props.widgetMgr) === null || _this$props$widgetMgr === void 0 ? void 0 : _this$props$widgetMgr.setStringValue(this.props.element, JSON.stringify(emptySelectionState), {
            fromUi: true
          }, this.props.fragmentId);
        }
      };

      // Add the form clear listener if we are in a form (formId defined)
      if (this.props.element.formId) {
        this.formClearHelper.manageFormClearListener(this.props.widgetMgr, this.props.element.formId, reset);
      }
    };
  }
  /**
   * The Vega view object
   */
  /**
   * Finalizer for the embedded vega object. Must be called to dispose
   * of the vegaView when it's no longer used.
   */
  /**
   * The default data name to add to.
   */
  /**
   * The html element we attach the Vega view to.
   */
  /**
   * Helper to manage form clear listeners.
   * This is used to reset the selection state when the form is cleared.
   */
  async componentDidMount() {
    try {
      await this.createView();
    } catch (e) {
      const error = ensureError(e);
      this.setState({
        error
      });
    }
  }
  componentWillUnmount() {
    this.finalizeView();
  }

  /**
   * Finalize the view so it can be garbage collected. This should be done
   * when a new view is created, and when the component unmounts.
   */

  async componentDidUpdate(prevProps) {
    const {
      element: prevElement,
      theme: prevTheme
    } = prevProps;
    const {
      element,
      theme
    } = this.props;
    const prevSpec = prevElement.spec;
    const {
      spec
    } = element;
    if (!this.vegaView || prevSpec !== spec || prevTheme !== theme || prevProps.width !== this.props.width || prevProps.height !== this.props.height || prevProps.element.vegaLiteTheme !== this.props.element.vegaLiteTheme || !isEqual(prevProps.element.selectionMode, this.props.element.selectionMode)) {
      logMessage("Vega spec changed.");
      try {
        await this.createView();
      } catch (e) {
        const error = ensureError(e);
        this.setState({
          error
        });
      }
      return;
    }
    const prevData = prevElement.data;
    const {
      data
    } = element;
    if (prevData || data) {
      this.updateData(this.defaultDataName, prevData, data);
    }
    const prevDataSets = getDataSets(prevElement) || {};
    const dataSets = getDataSets(element) || {};
    for (const [name, dataset] of Object.entries(dataSets)) {
      const datasetName = name || this.defaultDataName;
      const prevDataset = prevDataSets[datasetName];
      this.updateData(datasetName, prevDataset, dataset);
    }

    // Remove all datasets that are in the previous but not the current datasets.
    for (const name of Object.keys(prevDataSets)) {
      if (!dataSets.hasOwnProperty(name) && name !== this.defaultDataName) {
        this.updateData(name, null, null);
      }
    }
    this.vegaView.resize().runAsync();
  }
  /**
   * Update the dataset in the Vega view. This method tried to minimize changes
   * by automatically creating and applying diffs.
   *
   * @param name The name of the dataset.
   * @param prevData The dataset before the update.
   * @param data The dataset to use for the update.
   */
  updateData(name, prevData, data) {
    if (!this.vegaView) {
      throw new Error("Chart has not been drawn yet");
    }
    if (!data || data.data.numRows === 0) {
      // The new data is empty, so we remove the dataset from the
      // chart view if the named dataset exists.
      try {
        this.vegaView.remove(name, vega.truthy);
      } finally {
        return;
      }
    }
    if (!prevData || prevData.data.numRows === 0) {
      // The previous data was empty, so we just insert the new data.
      this.vegaView.insert(name, getDataArray(data));
      return;
    }
    const {
      dataRows: prevNumRows,
      dataColumns: prevNumCols
    } = prevData.dimensions;
    const {
      dataRows: numRows,
      dataColumns: numCols
    } = data.dimensions;

    // Check if dataframes have same "shape" but the new one has more rows.
    if (dataIsAnAppendOfPrev(prevData, prevNumRows, prevNumCols, data, numRows, numCols)) {
      if (prevNumRows < numRows) {
        // Insert the new rows.
        this.vegaView.insert(name, getDataArray(data, prevNumRows));
      }
    } else {
      // Clean the dataset and insert from scratch.
      this.vegaView.data(name, getDataArray(data));
      logMessage("Had to clear the ".concat(name, " dataset before inserting data through Vega view."));
    }
  }

  /**
   * Configure the selections for this chart if the chart has selections enabled.
   */

  /**
   * Create a new Vega view and add the data.
   */
  async createView() {
    logMessage("Creating a new Vega view.");
    if (!this.element) {
      throw Error("Element missing.");
    }

    // Finalize the previous view so it can be garbage collected.
    this.finalizeView();
    const {
      element
    } = this.props;
    const spec = this.generateSpec();
    const options = {
      // Adds interpreter support for Vega expressions that is compliant with CSP
      ast: true,
      expr: expressionInterpreter,
      // Disable default styles so that vega doesn't inject <style> tags in the
      // DOM. We set these styles manually for finer control over them and to
      // avoid inlining styles.
      tooltip: {
        disableDefaultStyle: true
      },
      defaultStyle: false,
      forceActionsMenu: true
    };
    const {
      vgSpec,
      view,
      finalize
    } = await embed(this.element, spec, options);
    this.vegaView = view;
    this.maybeConfigureSelections();
    this.vegaFinalizer = finalize;
    const datasets = getDataArrays(element);

    // Heuristic to determine the default dataset name.
    const datasetNames = datasets ? Object.keys(datasets) : [];
    if (datasetNames.length === 1) {
      const [datasetName] = datasetNames;
      this.defaultDataName = datasetName;
    } else if (datasetNames.length === 0 && vgSpec.data) {
      this.defaultDataName = DEFAULT_DATA_NAME;
    }
    const dataObj = getInlineData(element);
    if (dataObj) {
      view.insert(this.defaultDataName, dataObj);
    }
    if (datasets) {
      for (const [name, data] of Object.entries(datasets)) {
        view.insert(name, data);
      }
    }
    await view.runAsync();

    // Fix bug where the "..." menu button overlaps with charts where width is
    // set to -1 on first load.
    this.vegaView.resize().runAsync();
  }
  render() {
    if (this.state.error) {
      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw this.state.error;
    }
    return (
      /*#__PURE__*/
      // Create the container Vega draws inside.
      _jsx(StyledVegaLiteChartContainer, {
        "data-testid": "stArrowVegaLiteChart",
        useContainerWidth: this.props.element.useContainerWidth,
        isFullScreen: this.props.isFullScreen,
        ref: c => {
          this.element = c;
        }
      })
    );
  }
}
export default withTheme(withFullScreenWrapper(ArrowVegaLiteChart));
//# sourceMappingURL=ArrowVegaLiteChart.js.map