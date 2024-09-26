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
import { HelpCircle as HelpCircleIcon } from "react-feather";
import { useTheme } from "@emotion/react";
import Tooltip, { Placement } from "../Tooltip";
import StreamlitMarkdown from "../StreamlitMarkdown";
import { StyledLabelHelpInline, StyledTooltipIconWrapper } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
function TooltipIcon(_ref) {
  let {
    placement = Placement.AUTO,
    iconSize = "16",
    isLatex = false,
    content,
    children,
    markdownProps,
    onMouseEnterDelay
  } = _ref;
  const theme = useTheme();
  return /*#__PURE__*/_jsx(StyledTooltipIconWrapper, {
    className: "stTooltipIcon",
    "data-testid": "stTooltipIcon",
    isLatex: isLatex,
    children: /*#__PURE__*/_jsx(Tooltip, {
      content: /*#__PURE__*/_jsx(StreamlitMarkdown, {
        style: {
          fontSize: theme.fontSizes.sm
        },
        source: content,
        allowHTML: false,
        ...(markdownProps || {})
      }),
      placement: placement,
      onMouseEnterDelay: onMouseEnterDelay,
      inline: true,
      children: children || /*#__PURE__*/_jsx(HelpCircleIcon, {
        className: "icon",
        size: iconSize
      })
    })
  });
}
export const InlineTooltipIcon = _ref2 => {
  let {
    placement = Placement.TOP_RIGHT,
    iconSize = "16",
    isLatex = false,
    content,
    children,
    markdownProps
  } = _ref2;
  return /*#__PURE__*/_jsx(StyledLabelHelpInline, {
    children: /*#__PURE__*/_jsx(TooltipIcon, {
      placement: placement,
      iconSize: iconSize,
      isLatex: isLatex,
      content: content,
      markdownProps: markdownProps,
      children: children
    })
  });
};
export default TooltipIcon;
//# sourceMappingURL=TooltipIcon.js.map