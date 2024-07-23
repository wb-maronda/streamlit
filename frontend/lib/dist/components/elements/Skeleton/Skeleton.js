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

import React, { memo } from "react";
import { Skeleton as SkeletonProto } from "../../../proto";
import { AppSkeleton } from ".";
import { SquareSkeleton } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
const RawSkeleton = _ref => {
  let {
    element
  } = _ref;
  if (element.style == SkeletonProto.SkeletonStyle.APP) {
    return /*#__PURE__*/_jsx(AppSkeleton, {}); // internal-only, does not use any of the element properties
  }
  return /*#__PURE__*/_jsx(SquareSkeleton, {
    "data-testid": "stSkeleton",
    height: element !== null && element !== void 0 && element.height ? element.height + "px" : undefined
  });
};
export const Skeleton = /*#__PURE__*/memo(RawSkeleton);
//# sourceMappingURL=Skeleton.js.map