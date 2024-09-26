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
import { useTheme } from "@emotion/react";
import { ACCESSIBILITY_TYPE, PLACEMENT, StatefulTooltip } from "baseui/tooltip";
import { hasLightBackgroundColor } from "../../../theme";
import { StyledTooltipContentWrapper } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
export let Placement;
(function (Placement) {
  Placement["AUTO"] = "auto";
  Placement["TOP_LEFT"] = "topLeft";
  Placement["TOP"] = "top";
  Placement["TOP_RIGHT"] = "topRight";
  Placement["RIGHT_TOP"] = "rightTop";
  Placement["RIGHT"] = "right";
  Placement["RIGHT_BOTTOM"] = "rightBottom";
  Placement["BOTTOM_RIGHT"] = "bottomRight";
  Placement["BOTTOM"] = "bottom";
  Placement["BOTTOM_LEFT"] = "bottomLeft";
  Placement["LEFT_BOTTOM"] = "leftBottom";
  Placement["LEFT"] = "left";
  Placement["LEFT_TOP"] = "leftTop";
})(Placement || (Placement = {}));
function Tooltip(_ref) {
  let {
    content,
    placement,
    children,
    inline,
    style,
    onMouseEnterDelay
  } = _ref;
  const theme = useTheme();
  const {
    colors,
    fontSizes,
    radii
  } = theme;
  return /*#__PURE__*/_jsx(StatefulTooltip, {
    content: content ? /*#__PURE__*/_jsx(StyledTooltipContentWrapper, {
      className: "stTooltipContent",
      "data-testid": "stTooltipContent",
      children: content
    }) : null,
    placement: PLACEMENT[placement],
    accessibilityType: ACCESSIBILITY_TYPE.tooltip,
    showArrow: false,
    popoverMargin: 10,
    onMouseEnterDelay: onMouseEnterDelay,
    overrides: {
      Body: {
        style: {
          // This is annoying, but a bunch of warnings get logged when the
          // shorthand version `borderRadius` is used here since the long
          // names are used by BaseWeb and mixing the two is apparently
          // bad :(
          borderTopLeftRadius: radii.default,
          borderTopRightRadius: radii.default,
          borderBottomLeftRadius: radii.default,
          borderBottomRightRadius: radii.default,
          paddingTop: "0 !important",
          paddingBottom: "0 !important",
          paddingLeft: "0 !important",
          paddingRight: "0 !important",
          backgroundColor: "transparent"
        }
      },
      Inner: {
        style: {
          backgroundColor: hasLightBackgroundColor(theme) ? colors.bgColor : colors.secondaryBg,
          color: colors.bodyText,
          fontSize: fontSizes.sm,
          fontWeight: "normal",
          // See the long comment about `borderRadius`. The same applies here
          // to `padding`.
          paddingTop: "0 !important",
          paddingBottom: "0 !important",
          paddingLeft: "0 !important",
          paddingRight: "0 !important"
        }
      }
    },
    children: /*#__PURE__*/_jsx("div", {
      style: {
        display: "flex",
        flexDirection: "row",
        justifyContent: inline ? "flex-end" : "",
        ...style
      },
      "data-testid": "stTooltipHoverTarget",
      className: "stTooltipHoverTarget",
      children: children
    })
  });
}
export default Tooltip;
//# sourceMappingURL=Tooltip.js.map