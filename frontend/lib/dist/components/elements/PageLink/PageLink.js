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
import { DynamicIcon } from "../../shared/Icon";
import { Placement } from "../../shared/Tooltip";
import { BaseButtonTooltip } from "../../shared/BaseButton";
import StreamlitMarkdown from "../../shared/StreamlitMarkdown";
import { LibContext } from "../../core/LibContext";
import IsSidebarContext from "../../core/IsSidebarContext";
import { StyledNavLink, StyledNavLinkText, StyledNavLinkContainer } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
function shouldUseContainerWidth(useContainerWidth, isInSidebar) {
  if (useContainerWidth === null && isInSidebar) {
    return true;
  } else if (useContainerWidth === null && !isInSidebar) {
    return false;
  }
  return useContainerWidth === true ? true : false;
}
function PageLink(props) {
  const {
    onPageChange,
    currentPageScriptHash
  } = React.useContext(LibContext);
  const isInSidebar = React.useContext(IsSidebarContext);
  const {
    colors
  } = useTheme();
  const {
    disabled,
    element,
    width
  } = props;
  const style = {
    width
  };
  const useContainerWidth = shouldUseContainerWidth(element.useContainerWidth, isInSidebar);
  const isCurrentPage = currentPageScriptHash === element.pageScriptHash;
  const handleClick = e => {
    if (element.external) {
      // External Page Link
      if (disabled) {
        e.preventDefault();
      }
    } else {
      // MPA Page Link
      e.preventDefault();
      if (!disabled) {
        onPageChange(element.pageScriptHash);
      }
    }
  };
  return /*#__PURE__*/_jsx("div", {
    className: "row-widget stPageLink",
    "data-testid": "stPageLink",
    style: style,
    children: /*#__PURE__*/_jsx(BaseButtonTooltip, {
      help: element.help,
      placement: Placement.TOP_RIGHT,
      children: /*#__PURE__*/_jsx(StyledNavLinkContainer, {
        children: /*#__PURE__*/_jsxs(StyledNavLink, {
          "data-testid": "stPageLink-NavLink",
          disabled: disabled,
          isCurrentPage: isCurrentPage,
          fluidWidth: useContainerWidth ? width : false,
          href: element.page,
          target: element.external ? "_blank" : "",
          rel: "noreferrer",
          onClick: handleClick,
          children: [element.icon && /*#__PURE__*/_jsx(DynamicIcon, {
            size: "lg",
            color: colors.bodyText,
            iconValue: element.icon
          }), /*#__PURE__*/_jsx(StyledNavLinkText, {
            disabled: disabled,
            children: /*#__PURE__*/_jsx(StreamlitMarkdown, {
              source: element.label,
              allowHTML: false,
              isLabel: true,
              boldLabel: isCurrentPage,
              largerLabel: true,
              disableLinks: true
            })
          })]
        })
      })
    })
  });
}
export default PageLink;
//# sourceMappingURL=PageLink.js.map