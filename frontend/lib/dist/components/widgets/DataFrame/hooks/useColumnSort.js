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
import { useColumnSort as useGlideColumnSort } from "@glideapps/glide-data-grid-source";
import { toGlideColumn } from "../columns";

/**
 * Configuration type for column sorting hook.
 */

/**
 * Updates the column headers based on the sorting configuration.
 *
 * @param columns - The columns of the table.
 * @param sort - The current sorting configuration.
 *
 * @returns The updated list of columns.
 */
function updateSortingHeader(columns, sort) {
  if (sort === undefined) {
    return columns;
  }
  return columns.map(column => {
    if (column.id === sort.column.id) {
      return {
        ...column,
        title: sort.direction === "asc" ? `↑ ${column.title}` : `↓ ${column.title}`
      };
    }
    return column;
  });
}
/**
 * A React hook that provides column sorting functionality.
 *
 * @param numRows - The number of rows in the table.
 * @param columns - The columns of the table.
 *
 * @returns An object containing the following properties:
 * - `columns`: The updated list of columns.
 * - `sortColumn`: A function that sorts the column at the given index.
 * - `getOriginalIndex`: A function that returns the original index of the row at the given index.
 * - `getCellContent`: An updated function that returns the content of the cell at the given column and row indices.
 */
function useColumnSort(numRows, columns, getCellContent) {
  const [sort, setSort] = React.useState();
  const {
    getCellContent: getCellContentSorted,
    getOriginalIndex
  } = useGlideColumnSort({
    columns: columns.map(column => toGlideColumn(column)),
    getCellContent,
    rows: numRows,
    sort
  });
  const updatedColumns = React.useMemo(() => {
    return updateSortingHeader(columns, sort);
  }, [columns, sort]);
  const sortColumn = React.useCallback(index => {
    let sortDirection = "asc";
    const clickedColumn = updatedColumns[index];
    if (sort && sort.column.id === clickedColumn.id) {
      // The clicked column is already sorted
      if (sort.direction === "asc") {
        // Sort column descending
        sortDirection = "desc";
      } else {
        // Remove sorting of column
        setSort(undefined);
        return;
      }
    }
    setSort({
      column: toGlideColumn(clickedColumn),
      direction: sortDirection,
      mode: clickedColumn.sortMode
    });
  }, [sort, updatedColumns]);
  return {
    columns: updatedColumns,
    sortColumn,
    getOriginalIndex,
    getCellContent: getCellContentSorted
  };
}
export default useColumnSort;
//# sourceMappingURL=useColumnSort.js.map