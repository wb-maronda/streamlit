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
import AlertContainer, { Kind } from "../AlertContainer";
import { StyledPreError } from "./styled-components";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * A component that draws an error on the screen. This is for internal use
 * only. That is, this should not be an element that a user purposefully places
 * in a Streamlit app. For that, see st.exception / Exception.tsx or
 * st.error / Text.tsx.
 */
function ErrorElement(props) {
  const {
    name,
    message,
    stack,
    width
  } = props;

  // Remove first line from stack (because it's just the error message) and
  // trim indentation.
  const stackArray = stack ? stack.split("\n") : [];
  stackArray.shift();
  const cleanedStack = stackArray.map(s => s.trim()).join("\n");
  return /*#__PURE__*/_jsxs(AlertContainer, {
    kind: Kind.ERROR,
    width: width,
    children: [/*#__PURE__*/_jsxs("strong", {
      children: [name, ": "]
    }), message, stack ? /*#__PURE__*/_jsx(StyledPreError, {
      "data-testid": "stErrorElementStack",
      children: /*#__PURE__*/_jsx("code", {
        children: cleanedStack
      })
    }) : null]
  });
}
export default ErrorElement;
//# sourceMappingURL=ErrorElement.js.map