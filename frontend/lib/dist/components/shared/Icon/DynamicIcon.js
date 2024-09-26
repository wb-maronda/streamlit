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

import React, { Suspense } from "react";
import { EmojiIcon } from "./Icon";
import MaterialFontIcon from "./Material/MaterialFontIcon";
import { StyledDynamicIcon, StyledImageIcon } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
function parseIconPackEntry(iconName) {
  // This is a regex to match icon pack and icon name from the strings of format
  // :pack/icon: like :material/settings_suggest:
  const matchResult = iconName.match(/^:(.+)\/(.+):$/);
  if (matchResult === null) {
    return {
      pack: "emoji",
      icon: iconName
    };
  }
  const iconPack = matchResult[1];
  const iconNameInPack = matchResult[2];
  return {
    pack: iconPack,
    icon: iconNameInPack
  };
}

/**
 *
 * @returns returns an img tag with a yellow filled star icon svg as base64 data
 */
export function getFilledStarIconSrc() {
  return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMTg2MF84NDMpIj48cGF0aCBkPSJNOS45OTk5NCAxNC4zOTE2TDEzLjQ1ODMgMTYuNDgzM0MxNC4wOTE2IDE2Ljg2NjYgMTQuODY2NiAxNi4zIDE0LjY5OTkgMTUuNTgzM0wxMy43ODMzIDExLjY1TDE2Ljg0MTYgOC45OTk5N0MxNy4zOTk5IDguNTE2NjMgMTcuMDk5OSA3LjU5OTk3IDE2LjM2NjYgNy41NDE2M0wxMi4zNDE2IDcuMTk5OTdMMTAuNzY2NiAzLjQ4MzNDMTAuNDgzMyAyLjgwODMgOS41MTY2MSAyLjgwODMgOS4yMzMyNyAzLjQ4MzNMNy42NTgyNyA3LjE5MTYzTDMuNjMzMjcgNy41MzMzQzIuODk5OTQgNy41OTE2MyAyLjU5OTk0IDguNTA4MyAzLjE1ODI3IDguOTkxNjNMNi4yMTY2MSAxMS42NDE2TDUuMjk5OTQgMTUuNTc1QzUuMTMzMjcgMTYuMjkxNiA1LjkwODI3IDE2Ljg1ODMgNi41NDE2MSAxNi40NzVMOS45OTk5NCAxNC4zOTE2WiIgZmlsbD0iI0ZBQ0EyQiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAwXzE4NjBfODQzIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IndoaXRlIi8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+";
}
const DynamicIconDispatcher = _ref => {
  let {
    iconValue,
    ...props
  } = _ref;
  const {
    pack,
    icon
  } = parseIconPackEntry(iconValue);
  switch (pack) {
    case "material":
      switch (icon) {
        case "star_filled":
          return /*#__PURE__*/_jsx(StyledDynamicIcon, {
            ...props,
            children: /*#__PURE__*/_jsx(StyledImageIcon, {
              src: getFilledStarIconSrc(),
              "data-testid": props.testid || "stImageIcon"
            })
          });
        default:
          return /*#__PURE__*/_jsx(StyledDynamicIcon, {
            ...props,
            children: /*#__PURE__*/_jsx(MaterialFontIcon, {
              pack: pack,
              iconName: icon,
              ...props
            })
          });
      }
    case "emoji":
    default:
      return /*#__PURE__*/_jsx(StyledDynamicIcon, {
        ...props,
        children: /*#__PURE__*/_jsx(EmojiIcon, {
          ...props,
          children: icon
        })
      });
  }
};
export const DynamicIcon = props => /*#__PURE__*/_jsx(Suspense, {
  fallback: /*#__PURE__*/_jsx(StyledDynamicIcon, {
    ...props,
    children: /*#__PURE__*/_jsx(EmojiIcon, {
      ...props,
      children: "\xA0"
    })
  }),
  children: /*#__PURE__*/_jsx(DynamicIconDispatcher, {
    ...props
  })
}, props.iconValue);
//# sourceMappingURL=DynamicIcon.js.map