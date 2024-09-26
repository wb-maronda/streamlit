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
import { StyledEmojiIcon, StyledIcon } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
const getDefaultProps = _ref => {
  let {
    size,
    margin,
    padding
  } = _ref;
  return {
    size: size || "md",
    margin: margin || "",
    padding: padding || ""
  };
};
const Icon = _ref2 => {
  let {
    content,
    color,
    size,
    margin,
    padding,
    testid
  } = _ref2;
  return /*#__PURE__*/_jsx(StyledIcon, {
    as: content,
    color: color || "inherit",
    "aria-hidden": "true",
    "data-testid": testid,
    ...getDefaultProps({
      size,
      margin,
      padding
    })
  });
};
export const EmojiIcon = _ref3 => {
  let {
    size,
    margin,
    padding,
    children,
    testid
  } = _ref3;
  return /*#__PURE__*/_jsx(StyledEmojiIcon, {
    "data-testid": testid || "stIconEmoji",
    "aria-hidden": "true",
    ...getDefaultProps({
      size,
      margin,
      padding
    }),
    children: children
  });
};
export default Icon;
//# sourceMappingURL=Icon.js.map