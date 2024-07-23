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
import { DeckGL } from "deck.gl";
import JSON5 from "json5";
import isEqual from "lodash/isEqual";
import { MapContext, StaticMap, NavigationControl } from "react-map-gl";
import { withTheme } from "@emotion/react";
import { hasLightBackgroundColor } from "../../../theme";
// We don't have Typescript defs for these imports, which makes ESLint unhappy
/* eslint-disable import/no-extraneous-dependencies */
import { colorBins, colorCategories, colorContinuous, CartoLayer } from "@deck.gl/carto";
import * as layers from "@deck.gl/layers";
import { JSONConverter } from "@deck.gl/json";
import * as geoLayers from "@deck.gl/geo-layers";
import * as aggregationLayers from "@deck.gl/aggregation-layers";
import * as meshLayers from "@deck.gl/mesh-layers";
/* eslint-enable */

import { CSVLoader } from "@loaders.gl/csv";
import { GLTFLoader } from "@loaders.gl/gltf";
import { registerLoaders } from "@loaders.gl/core";
import { withFullScreenWrapper } from "../../shared/FullScreenWrapper";
import withMapboxToken from "./withMapboxToken";
import { StyledDeckGlChart, StyledNavigationControlContainer } from "./styled-components";
import "mapbox-gl/dist/mapbox-gl.css";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const configuration = {
  classes: {
    ...layers,
    ...aggregationLayers,
    ...geoLayers,
    ...meshLayers,
    CartoLayer
  },
  functions: {
    colorBins,
    colorCategories,
    colorContinuous
  }
};
registerLoaders([CSVLoader, GLTFLoader]);
const jsonConverter = new JSONConverter({
  configuration
});
export const DEFAULT_DECK_GL_HEIGHT = 500;
export class DeckGlJsonChart extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      viewState: {
        bearing: 0,
        pitch: 0,
        zoom: 11
      },
      initialized: false,
      initialViewState: {},
      id: undefined,
      pydeckJson: undefined,
      isFullScreen: false,
      isLightTheme: hasLightBackgroundColor(this.props.theme)
    };
    this.componentDidMount = () => {
      // HACK: Load layers a little after loading the map, to hack around a bug
      // where HexagonLayers were not drawing on first load but did load when the
      // script got re-executed.
      this.setState({
        initialized: true
      });
    };
    this.createTooltip = info => {
      const {
        element
      } = this.props;
      if (!info || !info.object || !element.tooltip) {
        return false;
      }
      const tooltip = JSON5.parse(element.tooltip);

      // NB: https://deckgl.readthedocs.io/en/latest/tooltip.html
      if (tooltip.html) {
        tooltip.html = this.interpolate(info, tooltip.html);
      } else {
        tooltip.text = this.interpolate(info, tooltip.text);
      }
      return tooltip;
    };
    this.interpolate = (info, body) => {
      const matchedVariables = body.match(/{(.*?)}/g);
      if (matchedVariables) {
        matchedVariables.forEach(match => {
          const variable = match.substring(1, match.length - 1);
          if (info.object.hasOwnProperty(variable)) {
            body = body.replace(match, info.object[variable]);
          } else if (info.object.hasOwnProperty("properties") && info.object.properties.hasOwnProperty(variable)) {
            body = body.replace(match, info.object.properties[variable]);
          }
        });
      }
      return body;
    };
    this.onViewStateChange = _ref => {
      let {
        viewState
      } = _ref;
      this.setState({
        viewState
      });
    };
  }
  static getDerivedStateFromProps(props, state) {
    const deck = DeckGlJsonChart.getDeckObject(props, state);

    // If the ViewState on the server has changed, apply the diff to the current state
    if (!isEqual(deck.initialViewState, state.initialViewState)) {
      const diff = Object.keys(deck.initialViewState).reduce((diff, key) => {
        // @ts-expect-error
        if (deck.initialViewState[key] === state.initialViewState[key]) {
          return diff;
        }
        return {
          ...diff,
          // @ts-expect-error
          [key]: deck.initialViewState[key]
        };
      }, {});
      return {
        viewState: {
          ...state.viewState,
          ...diff
        },
        initialViewState: deck.initialViewState
      };
    }
    return null;
  }
  render() {
    const deck = DeckGlJsonChart.getDeckObject(this.props, this.state);
    const {
      viewState
    } = this.state;
    return /*#__PURE__*/_jsx(StyledDeckGlChart, {
      className: "stDeckGlJsonChart",
      width: deck.initialViewState.width,
      height: deck.initialViewState.height,
      "data-testid": "stDeckGlJsonChart",
      children: /*#__PURE__*/_jsxs(DeckGL, {
        viewState: viewState,
        onViewStateChange: this.onViewStateChange,
        height: deck.initialViewState.height,
        width: deck.initialViewState.width,
        layers: this.state.initialized ? deck.layers : [],
        getTooltip: this.createTooltip,
        ContextProvider: MapContext.Provider,
        controller: true,
        children: [/*#__PURE__*/_jsx(StaticMap, {
          height: deck.initialViewState.height,
          width: deck.initialViewState.width,
          mapStyle: deck.mapStyle && (typeof deck.mapStyle === "string" ? deck.mapStyle : deck.mapStyle[0]),
          mapboxApiAccessToken: this.props.element.mapboxToken || this.props.mapboxToken
        }), /*#__PURE__*/_jsx(StyledNavigationControlContainer, {
          children: /*#__PURE__*/_jsx(NavigationControl, {
            className: "zoomButton",
            showCompass: false
          })
        })]
      })
    });
  }
}
DeckGlJsonChart.getDeckObject = (props, state) => {
  var _state$pydeckJson, _state$pydeckJson4;
  const {
    element,
    width,
    height,
    theme,
    isFullScreen
  } = props;
  const currFullScreen = isFullScreen !== null && isFullScreen !== void 0 ? isFullScreen : false;

  // Only parse JSON when not transitioning to/from fullscreen, the element id changes, or theme changes
  if (element.id !== state.id || state.isFullScreen !== currFullScreen || state.isLightTheme !== hasLightBackgroundColor(theme)) {
    state.pydeckJson = JSON5.parse(element.json);
    state.id = element.id;
  }

  // If unset, use either the Mapbox light or dark style based on Streamlit's theme
  // For Mapbox styles, see https://docs.mapbox.com/api/maps/styles/#mapbox-styles
  if (!((_state$pydeckJson = state.pydeckJson) !== null && _state$pydeckJson !== void 0 && _state$pydeckJson.mapStyle)) {
    state.pydeckJson.mapStyle = "mapbox://styles/mapbox/".concat(hasLightBackgroundColor(theme) ? "light" : "dark", "-v9");
  }

  // Set width and height based on the fullscreen state
  if (isFullScreen) {
    var _state$pydeckJson2;
    Object.assign((_state$pydeckJson2 = state.pydeckJson) === null || _state$pydeckJson2 === void 0 ? void 0 : _state$pydeckJson2.initialViewState, {
      width,
      height
    });
  } else {
    var _state$pydeckJson3, _state$pydeckJson3$in;
    if (!((_state$pydeckJson3 = state.pydeckJson) !== null && _state$pydeckJson3 !== void 0 && (_state$pydeckJson3$in = _state$pydeckJson3.initialViewState) !== null && _state$pydeckJson3$in !== void 0 && _state$pydeckJson3$in.height)) {
      state.pydeckJson.initialViewState.height = DEFAULT_DECK_GL_HEIGHT;
    }
    if (element.useContainerWidth) {
      state.pydeckJson.initialViewState.width = width;
    }
  }
  state.isFullScreen = isFullScreen;
  state.isLightTheme = hasLightBackgroundColor(theme);
  (_state$pydeckJson4 = state.pydeckJson) === null || _state$pydeckJson4 === void 0 ? true : delete _state$pydeckJson4.views; // We are not using views. This avoids a console warning.

  return jsonConverter.convert(state.pydeckJson);
};
export default withTheme(withMapboxToken("st.pydeck_chart")(withFullScreenWrapper(DeckGlJsonChart)));
//# sourceMappingURL=DeckGlJsonChart.js.map