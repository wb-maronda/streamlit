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

import React, { useState, useEffect, memo } from "react";
import { StyledSkeleton, TitleSkeleton, ParagraphSkeleton, TextLineSkeleton, SquareSkeleton } from "./styled-components";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const SHOW_DELAY_MS = 500;
const RawAppSkeleton = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, SHOW_DELAY_MS);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  if (!visible) return /*#__PURE__*/_jsx(_Fragment, {});
  return /*#__PURE__*/_jsxs(StyledSkeleton, {
    "data-testid": "stAppSkeleton",
    children: [/*#__PURE__*/_jsx(TitleSkeleton, {}), /*#__PURE__*/_jsxs(ParagraphSkeleton, {
      children: [/*#__PURE__*/_jsx(TextLineSkeleton, {
        width: "98%"
      }), /*#__PURE__*/_jsx(TextLineSkeleton, {
        width: "100%"
      }), /*#__PURE__*/_jsx(TextLineSkeleton, {
        width: "96%"
      }), /*#__PURE__*/_jsx(TextLineSkeleton, {
        width: "65%"
      })]
    }), /*#__PURE__*/_jsx(SquareSkeleton, {
      width: "75%",
      height: "9rem"
    })]
  });
};
export const AppSkeleton = /*#__PURE__*/memo(RawAppSkeleton);
//# sourceMappingURL=AppSkeleton.js.map