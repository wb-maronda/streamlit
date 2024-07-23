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

import React from "react";
import ErrorElement from "../../../shared/ErrorElement";
import { MapboxTokenFetchingError, MapboxTokenNotProvidedError } from "./withMapboxToken";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
const MapboxTokenError = _ref => {
  let {
    error,
    width,
    deltaType
  } = _ref;
  if (error instanceof MapboxTokenNotProvidedError) {
    return /*#__PURE__*/_jsx(ErrorElement, {
      width: width,
      name: "No Mapbox token provided",
      message: /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsxs("p", {
          children: ["To use ", /*#__PURE__*/_jsxs("code", {
            children: ["st.", deltaType]
          }), " or ", /*#__PURE__*/_jsx("code", {
            children: "st.map"
          }), " you need to set up a Mapbox access token."]
        }), /*#__PURE__*/_jsxs("p", {
          children: ["To get a token, create an account at", " ", /*#__PURE__*/_jsx("a", {
            href: "https://mapbox.com",
            children: "https://mapbox.com"
          }), ". It's free for moderate usage levels!"]
        }), /*#__PURE__*/_jsxs("p", {
          children: ["Once you have a token, just set it using the Streamlit config option ", /*#__PURE__*/_jsx("code", {
            children: "mapbox.token"
          }), " and don't forget to restart your Streamlit server at this point if it's still running, then reload this tab."]
        }), /*#__PURE__*/_jsxs("p", {
          children: ["See", " ", /*#__PURE__*/_jsx("a", {
            href: "https://docs.streamlit.io/develop/api-reference/configuration/config.toml",
            children: "our documentation"
          }), " ", "for more info on how to set config options."]
        })]
      })
    });
  }
  if (error instanceof MapboxTokenFetchingError) {
    return /*#__PURE__*/_jsx(ErrorElement, {
      width: width,
      name: "Error fetching Streamlit Mapbox token",
      message: /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsx("p", {
          children: "This app requires an internet connection."
        }), /*#__PURE__*/_jsx("p", {
          children: "Please check your connection and try again."
        }), /*#__PURE__*/_jsxs("p", {
          children: ["If you think this is a bug, please file bug report", " ", /*#__PURE__*/_jsx("a", {
            href: "https://github.com/streamlit/streamlit/issues/new/choose",
            children: "here"
          }), "."]
        })]
      })
    });
  }
  return /*#__PURE__*/_jsx(ErrorElement, {
    width: width,
    name: "Error fetching Streamlit Mapbox token",
    message: error.message
  });
};
export default MapboxTokenError;
//# sourceMappingURL=MapboxTokenError.js.map