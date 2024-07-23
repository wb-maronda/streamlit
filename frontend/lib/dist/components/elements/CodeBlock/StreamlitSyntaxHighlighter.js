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
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import CopyButton from "./CopyButton";
import { StyledPre, StyledCopyButtonContainer, StyledCodeBlock } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default function StreamlitSyntaxHighlighter(_ref) {
  let {
    language,
    showLineNumbers,
    children
  } = _ref;
  return /*#__PURE__*/_jsxs(StyledCodeBlock, {
    className: "stCodeBlock",
    "data-testid": "stCodeBlock",
    isMarkdown: false,
    children: [/*#__PURE__*/_jsx(StyledPre, {
      children: /*#__PURE__*/_jsx(SyntaxHighlighter, {
        language: language,
        PreTag: "div",
        customStyle: {
          backgroundColor: "transparent"
        },
        style: {},
        lineNumberStyle: {},
        showLineNumbers: showLineNumbers,
        children: children
      })
    }), typeof children === "string" && children.trim() !== "" && /*#__PURE__*/_jsx(StyledCopyButtonContainer, {
      children: /*#__PURE__*/_jsx(CopyButton, {
        text: children
      })
    })]
  });
}
//# sourceMappingURL=StreamlitSyntaxHighlighter.js.map