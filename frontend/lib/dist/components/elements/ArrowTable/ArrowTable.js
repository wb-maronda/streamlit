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

import range from "lodash/range";
import React from "react";
import { Quiver } from "../../../dataframes/Quiver";
import { StyledEmptyTableCell, StyledTable, StyledTableCell, StyledTableCellHeader, StyledTableContainer } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export function ArrowTable(props) {
  const table = props.element;
  const {
    cssId,
    cssStyles,
    caption
  } = table;
  const {
    headerRows,
    rows,
    columns
  } = table.dimensions;
  const allRows = range(rows);
  const columnHeaders = allRows.slice(0, headerRows);
  const dataRows = allRows.slice(headerRows);
  return /*#__PURE__*/_jsxs(StyledTableContainer, {
    "data-testid": "stTable",
    children: [cssStyles && /*#__PURE__*/_jsx("style", {
      children: cssStyles
    }), /*#__PURE__*/_jsxs(StyledTable, {
      id: cssId,
      "data-testid": "stTableStyledTable",
      children: [caption && /*#__PURE__*/_jsx("caption", {
        children: /*#__PURE__*/_jsx("small", {
          children: caption
        })
      }), columnHeaders.length > 0 && /*#__PURE__*/_jsx("thead", {
        children: columnHeaders.map(rowIndex => generateTableRow(table, rowIndex, columns))
      }), /*#__PURE__*/_jsx("tbody", {
        children: dataRows.length === 0 ? /*#__PURE__*/_jsx("tr", {
          children: /*#__PURE__*/_jsx(StyledEmptyTableCell, {
            "data-testid": "stTableStyledEmptyTableCell",
            colSpan: columns || 1,
            children: "empty"
          })
        }) : dataRows.map(rowIndex => generateTableRow(table, rowIndex, columns))
      })]
    })]
  });
}
function generateTableRow(table, rowIndex, columns) {
  return /*#__PURE__*/_jsx("tr", {
    children: range(columns).map(columnIndex => generateTableCell(table, rowIndex, columnIndex))
  }, rowIndex);
}
function generateTableCell(table, rowIndex, columnIndex) {
  var _table$types$data;
  const {
    type,
    cssId,
    cssClass,
    content,
    contentType,
    displayContent,
    field
  } = table.getCell(rowIndex, columnIndex);
  const formattedContent = displayContent || Quiver.format(content, contentType, field);
  const {
    headerColumns
  } = table.dimensions;
  const cellDataType = (_table$types$data = table.types.data[columnIndex - headerColumns]) === null || _table$types$data === void 0 ? void 0 : _table$types$data.pandas_type;
  const isNumeric = cellDataType === "int64" || cellDataType === "float64";
  const style = {
    textAlign: isNumeric ? "right" : "left"
  };
  switch (type) {
    case "blank":
      {
        return /*#__PURE__*/_jsx(StyledTableCellHeader, {
          className: cssClass,
          children: "\xA0"
        }, columnIndex);
      }
    case "index":
      {
        return /*#__PURE__*/_jsx(StyledTableCellHeader, {
          scope: "row",
          id: cssId,
          className: cssClass,
          children: formattedContent
        }, columnIndex);
      }
    case "columns":
      {
        return /*#__PURE__*/_jsx(StyledTableCellHeader, {
          scope: "col",
          className: cssClass,
          style: style,
          children: formattedContent
        }, columnIndex);
      }
    case "data":
      {
        return /*#__PURE__*/_jsx(StyledTableCell, {
          id: cssId,
          style: style,
          children: formattedContent
        }, columnIndex);
      }
    default:
      {
        throw new Error("Cannot parse type \"".concat(type, "\"."));
      }
  }
}
export default ArrowTable;
//# sourceMappingURL=ArrowTable.js.map