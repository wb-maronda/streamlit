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
import ProgressBar from "../../shared/ProgressBar";
import { StyledCaptionText } from "./styled-components";
import StreamlitMarkdown from "../../shared/StreamlitMarkdown";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
function Progress(_ref) {
  let {
    element,
    width
  } = _ref;
  return /*#__PURE__*/_jsxs("div", {
    className: "stProgress",
    "data-testid": "stProgress",
    children: [/*#__PURE__*/_jsx(StyledCaptionText, {
      children: /*#__PURE__*/_jsx(StreamlitMarkdown, {
        source: element.text,
        allowHTML: false,
        isLabel: true
      })
    }), /*#__PURE__*/_jsx(ProgressBar, {
      value: element.value,
      width: width
    })]
  });
}
export default Progress;
//# sourceMappingURL=Progress.js.map