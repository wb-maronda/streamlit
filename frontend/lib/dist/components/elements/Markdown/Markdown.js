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
import StreamlitMarkdown from "../../shared/StreamlitMarkdown";
import { Markdown as MarkdownProto } from "../../../proto";
import { InlineTooltipIcon, StyledLabelHelpWrapper } from "../../shared/TooltipIcon";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Functional element representing Markdown formatted text.
 */
export default function Markdown(_ref) {
  let {
    width,
    element
  } = _ref;
  const styleProp = {
    width
  };
  return /*#__PURE__*/_jsx("div", {
    className: "stMarkdown",
    "data-testid": "stMarkdown",
    style: styleProp,
    children: element.help ? /*#__PURE__*/_jsxs(StyledLabelHelpWrapper, {
      children: [/*#__PURE__*/_jsx(StreamlitMarkdown, {
        isCaption: element.isCaption,
        source: element.body,
        allowHTML: element.allowHtml
      }), /*#__PURE__*/_jsx(InlineTooltipIcon, {
        content: element.help,
        isLatex: element.elementType === MarkdownProto.Type.LATEX
      })]
    }) : /*#__PURE__*/_jsx(StreamlitMarkdown, {
      isCaption: element.isCaption,
      source: element.body,
      allowHTML: element.allowHtml
    })
  });
}
//# sourceMappingURL=Markdown.js.map