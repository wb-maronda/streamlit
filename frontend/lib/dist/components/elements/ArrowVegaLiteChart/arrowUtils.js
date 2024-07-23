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

import { IndexTypeName, Quiver } from "../../../dataframes/Quiver";
const MagicFields = {
  DATAFRAME_INDEX: "(index)"
};

/** Types of dataframe-indices that are supported as x axis. */
const SUPPORTED_INDEX_TYPES = new Set([IndexTypeName.DatetimeIndex, IndexTypeName.Float64Index, IndexTypeName.Int64Index, IndexTypeName.RangeIndex, IndexTypeName.UInt64Index]);

/** All of the data that makes up a VegaLite chart. */

/** A mapping of `ArrowNamedDataSet.proto`. */

export function getInlineData(el) {
  const dataProto = el.data;
  if (!dataProto || dataProto.data.numRows === 0) {
    return null;
  }
  return getDataArray(dataProto);
}
export function getDataArrays(el) {
  const datasets = getDataSets(el);
  if (datasets == null) {
    return null;
  }
  const datasetArrays = {};
  for (const [name, dataset] of Object.entries(datasets)) {
    datasetArrays[name] = getDataArray(dataset);
  }
  return datasetArrays;
}
export function getDataSets(el) {
  var _el$datasets;
  if (((_el$datasets = el.datasets) === null || _el$datasets === void 0 ? void 0 : _el$datasets.length) === 0) {
    return null;
  }
  const datasets = {};
  el.datasets.forEach(x => {
    if (!x) {
      return;
    }
    const name = x.hasName ? x.name : null;
    datasets[name] = x.data;
  });
  return datasets;
}

/**
 * Retrieves an array of data from Quiver starting from a specified index.
 * Converts data values to a format compatible with VegaLite visualization.
 *
 * @param {Quiver} dataProto - The Quiver data object to extract data from.
 * @param {number} [startIndex=0] - The starting index for data extraction.
 * @returns {Array.<{ [field: string]: any }>} An array of data objects for visualization.
 */
export function getDataArray(dataProto) {
  let startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  if (dataProto.isEmpty()) {
    return [];
  }
  const dataArr = [];
  const {
    dataRows: rows,
    dataColumns: cols
  } = dataProto.dimensions;
  const indexType = Quiver.getTypeName(dataProto.types.index[0]);
  const hasSupportedIndex = SUPPORTED_INDEX_TYPES.has(indexType);
  for (let rowIndex = startIndex; rowIndex < rows; rowIndex++) {
    const row = {};
    if (hasSupportedIndex) {
      const indexValue = dataProto.getIndexValue(rowIndex, 0);
      // VegaLite can't handle BigInts, so they have to be converted to Numbers first
      row[MagicFields.DATAFRAME_INDEX] = typeof indexValue === "bigint" ? Number(indexValue) : indexValue;
    }
    for (let colIndex = 0; colIndex < cols; colIndex++) {
      const dataValue = dataProto.getDataValue(rowIndex, colIndex);
      const dataType = dataProto.types.data[colIndex];
      const typeName = Quiver.getTypeName(dataType);
      if (typeName !== "datetimetz" && (dataValue instanceof Date || Number.isFinite(dataValue)) && (typeName.startsWith("datetime") || typeName === "date")) {
        // For dates that do not contain timezone information.
        // Vega JS assumes dates in the local timezone, so we need to convert
        // UTC date to be the same date in the local timezone.
        const offset = new Date(dataValue).getTimezoneOffset() * 60 * 1000; // minutes to milliseconds
        row[dataProto.columns[0][colIndex]] = dataValue.valueOf() + offset;
      } else if (typeof dataValue === "bigint") {
        row[dataProto.columns[0][colIndex]] = Number(dataValue);
      } else {
        row[dataProto.columns[0][colIndex]] = dataValue;
      }
    }
    dataArr.push(row);
  }
  return dataArr;
}

/**
 * Checks if data looks like it's just prevData plus some appended rows.
 */
export function dataIsAnAppendOfPrev(prevData, prevNumRows, prevNumCols, data, numRows, numCols) {
  // Check whether dataframes have the same shape.

  // not an append
  if (prevNumCols !== numCols) {
    return false;
  }

  // Data can be updated, but still have the same number of rows.
  // We consider the case an append only when the number of rows has increased
  if (prevNumRows >= numRows) {
    return false;
  }

  // if no previous data, render from scratch
  if (prevNumRows === 0) {
    return false;
  }
  const c = numCols - 1;
  const r = prevNumRows - 1;

  // Check if the new dataframe looks like it's a superset of the old one.
  // (this is a very light check, and not guaranteed to be right!)
  if (prevData.getDataValue(0, c) !== data.getDataValue(0, c) || prevData.getDataValue(r, c) !== data.getDataValue(r, c)) {
    return false;
  }
  return true;
}
//# sourceMappingURL=arrowUtils.js.map