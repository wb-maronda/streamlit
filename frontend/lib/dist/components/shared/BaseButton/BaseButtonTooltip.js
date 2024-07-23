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
import TooltipIcon from "../TooltipIcon";
import { Placement } from "../Tooltip";
import { StyledTooltipNormal, StyledTooltipMobile } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export function BaseButtonTooltip(_ref) {
  let {
    children,
    help,
    placement
  } = _ref;
  if (!help) {
    return children;
  }
  return /*#__PURE__*/_jsxs("div", {
    className: "stTooltipIcon",
    children: [/*#__PURE__*/_jsx(StyledTooltipNormal, {
      children: /*#__PURE__*/_jsx(TooltipIcon, {
        content: help,
        placement: placement || Placement.TOP,
        children: children
      })
    }), /*#__PURE__*/_jsx(StyledTooltipMobile, {
      children: children
    })]
  });
}
//# sourceMappingURL=BaseButtonTooltip.js.map