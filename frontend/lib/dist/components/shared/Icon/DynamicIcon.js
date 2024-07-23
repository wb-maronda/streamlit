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
import { StyledDynamicIcon } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
function parseIconPackEntry(iconName) {
  // This is a regex to match icon pack and icon name from the strings of format
  // :pack/icon: like :material/settings_suggest:
  const iconRegexp = /^:(.+)\/(.+):$/;
  const matchResult = iconName.match(iconRegexp);
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
      return /*#__PURE__*/_jsx(StyledDynamicIcon, {
        ...props,
        children: /*#__PURE__*/_jsx(MaterialFontIcon, {
          pack: pack,
          iconName: icon,
          ...props
        })
      });
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