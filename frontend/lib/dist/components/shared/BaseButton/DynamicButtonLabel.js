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
import { DynamicIcon } from "../Icon";
import StreamlitMarkdown from "../StreamlitMarkdown";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export const DynamicButtonLabel = _ref => {
  let {
    icon,
    label
  } = _ref;
  // Material icons need to be larger to render similar size of emojis, emojis need addtl margin
  const isMaterialIcon = icon.startsWith(":material");
  const iconMargin = isMaterialIcon ? "0 sm 0 0" : "0 md 0 0";
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [icon && /*#__PURE__*/_jsx(DynamicIcon, {
      size: isMaterialIcon ? "lg" : "base",
      margin: label ? iconMargin : "0",
      color: "inherit",
      iconValue: icon
    }), label && /*#__PURE__*/_jsx(StreamlitMarkdown, {
      source: label,
      allowHTML: false,
      isLabel: true,
      largerLabel: true,
      disableLinks: true
    })]
  });
};
//# sourceMappingURL=DynamicButtonLabel.js.map