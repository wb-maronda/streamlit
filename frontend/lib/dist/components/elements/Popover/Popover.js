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
import { ExpandMore, ExpandLess } from "@emotion-icons/material-outlined";
import { hasLightBackgroundColor } from "../../../theme";
import { StyledIcon } from "../../shared/Icon";
import BaseButton, { BaseButtonTooltip, BaseButtonKind, BaseButtonSize } from "../../shared/BaseButton";
import StreamlitMarkdown from "../../shared/StreamlitMarkdown";
import IsSidebarContext from "../../core/IsSidebarContext";
import { Popover as UIPopover, TRIGGER_TYPE, PLACEMENT } from "baseui/popover";
import { StyledPopoverButtonIcon } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const Popover = _ref => {
  let {
    element,
    empty,
    width,
    children
  } = _ref;
  const [open, setOpen] = React.useState(false);
  const isInSidebar = React.useContext(IsSidebarContext);
  const theme = useTheme();
  const lightBackground = hasLightBackgroundColor(theme);

  // When useContainerWidth true & has help tooltip,
  // we need to pass the container width down to the button
  const fluidButtonWidth = element.help ? width : true;
  return /*#__PURE__*/_jsx("div", {
    "data-testid": "stPopover",
    children: /*#__PURE__*/_jsx(UIPopover, {
      triggerType: TRIGGER_TYPE.click,
      placement: PLACEMENT.bottomLeft,
      content: () => children,
      isOpen: open,
      onClickOutside: () => setOpen(false)
      // We need to handle the click here as well to allow closing the
      // popover when the user clicks next to the button in the available
      // width in the surrounding container.
      ,
      onClick: () => open ? setOpen(false) : undefined,
      onEsc: () => setOpen(false),
      ignoreBoundary: isInSidebar
      // TODO(lukasmasuch): We currently use renderAll to have a consistent
      // width during the first and subsequent opens of the popover. Once we ,
      // support setting an explicit width we should reconsider turning this to
      // false for a better performance.
      ,
      renderAll: true,
      overrides: {
        Body: {
          props: {
            "data-testid": "stPopoverBody"
          },
          style: () => ({
            marginRight: theme.spacing.lg,
            marginBottom: theme.spacing.lg,
            maxHeight: "70vh",
            overflow: "auto",
            maxWidth: "calc(".concat(theme.sizes.contentMaxWidth, " - 2*").concat(theme.spacing.lg, ")"),
            minWidth: element.useContainerWidth ? // If use_container_width==True, we use the container width as minimum:
            "".concat(Math.max(width, 160), "px") // 10rem ~= 160px
            : "20rem",
            ["@media (max-width: ".concat(theme.breakpoints.sm, ")")]: {
              maxWidth: "calc(100% - 2rem)"
            },
            borderTopLeftRadius: theme.radii.xl,
            borderTopRightRadius: theme.radii.xl,
            borderBottomRightRadius: theme.radii.xl,
            borderBottomLeftRadius: theme.radii.xl,
            borderLeftWidth: theme.sizes.borderWidth,
            borderRightWidth: theme.sizes.borderWidth,
            borderTopWidth: theme.sizes.borderWidth,
            borderBottomWidth: theme.sizes.borderWidth,
            paddingRight: "calc(".concat(theme.spacing.twoXL, " - 1px)"),
            // 1px to account for border.
            paddingLeft: "calc(".concat(theme.spacing.twoXL, " - 1px)"),
            paddingBottom: "calc(".concat(theme.spacing.twoXL, " - 1px)"),
            paddingTop: "calc(".concat(theme.spacing.twoXL, " - 1px)"),
            borderLeftStyle: "solid",
            borderRightStyle: "solid",
            borderTopStyle: "solid",
            borderBottomStyle: "solid",
            borderLeftColor: theme.colors.fadedText10,
            borderRightColor: theme.colors.fadedText10,
            borderTopColor: theme.colors.fadedText10,
            borderBottomColor: theme.colors.fadedText10,
            boxShadow: lightBackground ? "0px 4px 16px rgba(0, 0, 0, 0.16)" : "0px 4px 16px rgba(0, 0, 0, 0.7)"
          })
        }
      },
      children: /*#__PURE__*/_jsx("div", {
        children: /*#__PURE__*/_jsx(BaseButtonTooltip, {
          help: element.help,
          children: /*#__PURE__*/_jsxs(BaseButton, {
            kind: BaseButtonKind.SECONDARY,
            size: BaseButtonSize.SMALL,
            disabled: empty || element.disabled,
            fluidWidth: element.useContainerWidth ? fluidButtonWidth : false,
            "data-testid": "stPopoverButton",
            onClick: () => setOpen(!open),
            children: [/*#__PURE__*/_jsx(StreamlitMarkdown, {
              source: element.label,
              allowHTML: false,
              isLabel: true,
              largerLabel: true,
              disableLinks: true
            }), /*#__PURE__*/_jsx(StyledPopoverButtonIcon, {
              children: /*#__PURE__*/_jsx(StyledIcon, {
                as: open ? ExpandLess : ExpandMore,
                color: "inherit",
                "aria-hidden": "true",
                size: "lg",
                margin: "",
                padding: ""
              })
            })]
          })
        })
      })
    })
  });
};
export default Popover;
//# sourceMappingURL=Popover.js.map