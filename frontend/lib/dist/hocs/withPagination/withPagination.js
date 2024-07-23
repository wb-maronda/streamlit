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

import React, { useEffect, useState } from "react";
import hoistNonReactStatics from "hoist-non-react-statics";
import Pagination from "./Pagination";
import { usePrevious } from "../../util/Hooks";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const calculateNumPages = (items, pageSize) => Math.ceil(items.length / pageSize);
const withPagination = WrappedComponent => {
  const WithPagination = _ref => {
    let {
      pageSize,
      items,
      resetOnAdd,
      ...props
    } = _ref;
    const [currentPage, updateCurrentPage] = useState(0);
    const [totalPages, updateTotalPages] = useState(calculateNumPages(items, pageSize));
    const prevItems = usePrevious(items);
    useEffect(() => {
      if (prevItems && prevItems.length !== items.length) {
        updateTotalPages(calculateNumPages(items, pageSize));
      }
      if (prevItems && prevItems.length < items.length) {
        if (resetOnAdd) {
          updateCurrentPage(0);
        }
      } else if (currentPage + 1 >= totalPages) {
        updateCurrentPage(totalPages - 1);
      }
    }, [items, currentPage, pageSize, prevItems, resetOnAdd, totalPages]);
    const onNext = () => {
      updateCurrentPage(Math.min(currentPage + 1, totalPages - 1));
    };
    const onPrevious = () => {
      updateCurrentPage(Math.max(0, currentPage - 1));
    };
    const paginatedItems = items.slice(currentPage * pageSize, currentPage * pageSize + pageSize);
    return /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsx(WrappedComponent, {
        items: paginatedItems,
        ...props
      }), items.length > pageSize ? /*#__PURE__*/_jsx(Pagination, {
        className: "streamlit-paginator",
        pageSize: pageSize,
        totalPages: totalPages,
        currentPage: currentPage + 1,
        onNext: onNext,
        onPrevious: onPrevious
      }) : null]
    });
  };
  return hoistNonReactStatics(WithPagination, WrappedComponent);
};
export default withPagination;
//# sourceMappingURL=withPagination.js.map