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
import ErrorElement from "../ErrorElement";
import { logError } from "../../../util/log";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
/**
 * A component that catches errors that take place when React is asynchronously
 * rendering child components.
 */
class ErrorBoundary extends React.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      error: null
    };
    this.componentDidCatch = error => {
      logError("".concat(error.name, ": ").concat(error.message, "\n").concat(error.stack));
    };
  }
  render() {
    const {
      error
    } = this.state;
    if (error) {
      if (error.name === "ChunkLoadError") {
        return /*#__PURE__*/_jsx(ErrorElement, {
          width: this.props.width,
          name: "Network issue",
          message: /*#__PURE__*/_jsxs("p", {
            children: ["Cannot load Streamlit frontend code. This can happen when you update Streamlit while a Streamlit app is running.", /*#__PURE__*/_jsx("br", {}), "To fix this, simply reload this app by pressing ", /*#__PURE__*/_jsx("kbd", {
              children: "F5"
            }), ", ", /*#__PURE__*/_jsx("kbd", {
              children: "Ctrl+R"
            }), ", or ", /*#__PURE__*/_jsx("kbd", {
              children: "Cmd+R"
            }), ".", /*#__PURE__*/_jsx("br", {}), "If the error persists, try force-clearing your browser's cache as described", " ", /*#__PURE__*/_jsx("a", {
              href: "https://en.wikipedia.org/wiki/Wikipedia:Bypass_your_cache#Cache_clearing_and_disabling",
              rel: "noopener noreferrer",
              target: "_blank",
              children: "here"
            })]
          })
        });
      }
      return /*#__PURE__*/_jsx(ErrorElement, {
        width: this.props.width,
        name: error.name,
        message: error.message,
        stack: error.stack
      });
    }
    return this.props.children;
  }
}
ErrorBoundary.getDerivedStateFromError = error => {
  // Return the state update so the next render will show the fallback UI.
  return {
    error
  };
};
export default ErrorBoundary;
//# sourceMappingURL=ErrorBoundary.js.map