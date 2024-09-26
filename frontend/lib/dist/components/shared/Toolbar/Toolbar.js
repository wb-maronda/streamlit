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
import { Fullscreen, FullscreenExit } from "@emotion-icons/material-outlined";
import StreamlitMarkdown from "../StreamlitMarkdown";
import Tooltip, { Placement } from "../Tooltip";
import Button, { BaseButtonKind } from "../BaseButton";
import Icon from "../Icon";
import { StyledToolbar, StyledToolbarWrapper } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export function ToolbarAction(_ref) {
  let {
    label,
    show_label,
    icon,
    onClick
  } = _ref;
  const theme = useTheme();
  const displayLabel = show_label ? label : "";
  return /*#__PURE__*/_jsx("div", {
    "data-testid": "stElementToolbarButton",
    children: /*#__PURE__*/_jsx(Tooltip, {
      content: /*#__PURE__*/_jsx(StreamlitMarkdown, {
        source: label,
        allowHTML: false,
        style: {
          fontSize: theme.fontSizes.sm
        }
      }),
      placement: Placement.TOP
      // The default tooltip delay (== how fast the tooltip is triggered) of 200ms
      // is a bit too fast for the toolbar use case. Therefore, we are setting it to 1000ms.
      ,
      onMouseEnterDelay: 1000,
      inline: true,
      children: /*#__PURE__*/_jsxs(Button, {
        onClick: event => {
          if (onClick) {
            onClick();
          }
          event.stopPropagation();
        },
        kind: BaseButtonKind.ELEMENT_TOOLBAR,
        children: [icon && /*#__PURE__*/_jsx(Icon, {
          content: icon,
          size: "md",
          testid: "stElementToolbarButtonIcon"
        }), displayLabel && /*#__PURE__*/_jsx("span", {
          children: displayLabel
        })]
      })
    })
  });
}
const Toolbar = _ref2 => {
  let {
    onExpand,
    onCollapse,
    isFullScreen,
    locked,
    children,
    target,
    disableFullscreenMode
  } = _ref2;
  return /*#__PURE__*/_jsx(StyledToolbarWrapper, {
    className: "stElementToolbar",
    "data-testid": "stElementToolbar",
    locked: locked || isFullScreen,
    target: target,
    children: /*#__PURE__*/_jsxs(StyledToolbar, {
      children: [children, onExpand && !disableFullscreenMode && !isFullScreen && /*#__PURE__*/_jsx(ToolbarAction, {
        label: "Fullscreen",
        icon: Fullscreen,
        onClick: () => onExpand()
      }), onCollapse && !disableFullscreenMode && isFullScreen && /*#__PURE__*/_jsx(ToolbarAction, {
        label: "Close fullscreen",
        icon: FullscreenExit,
        onClick: () => onCollapse()
      })]
    })
  });
};
export default Toolbar;
//# sourceMappingURL=Toolbar.js.map