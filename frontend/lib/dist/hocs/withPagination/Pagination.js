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
import { ChevronLeft, ChevronRight } from "@emotion-icons/material-outlined";
import BaseButton, { BaseButtonKind } from "../../components/shared/BaseButton";
import Icon from "../../components/shared/Icon";
import { Small } from "../../components/shared/TextElements";
import { StyledPagination, StyledPaginators } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const Pagination = _ref => {
  let {
    className,
    currentPage,
    totalPages,
    onNext,
    onPrevious
  } = _ref;
  return /*#__PURE__*/_jsxs(StyledPagination, {
    className: className,
    "data-testid": "stPagination",
    children: [/*#__PURE__*/_jsx(Small, {
      children: "Showing page ".concat(currentPage, " of ").concat(totalPages)
    }), /*#__PURE__*/_jsxs(StyledPaginators, {
      children: [/*#__PURE__*/_jsx(BaseButton, {
        onClick: onPrevious,
        kind: BaseButtonKind.MINIMAL,
        children: /*#__PURE__*/_jsx(Icon, {
          content: ChevronLeft,
          size: "xl"
        })
      }), /*#__PURE__*/_jsx(BaseButton, {
        onClick: onNext,
        kind: BaseButtonKind.MINIMAL,
        children: /*#__PURE__*/_jsx(Icon, {
          content: ChevronRight,
          size: "xl"
        })
      })]
    })]
  });
};
export default Pagination;
//# sourceMappingURL=Pagination.js.map