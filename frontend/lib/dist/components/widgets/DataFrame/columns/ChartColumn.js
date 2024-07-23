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

import { GridCellKind } from "@glideapps/glide-data-grid";
import { isNullOrUndefined } from "../../../../util/utils";
import { getErrorCell, getEmptyCell, toSafeString, toSafeArray, mergeColumnParameters, toSafeNumber, formatNumber } from "./utils";
export const LINE_CHART_TYPE = "line_chart";
export const AREA_CHART_TYPE = "area_chart";
export const BAR_CHART_TYPE = "bar_chart";
/**
 * Base class for chart columns. This class is not meant to be used directly.
 * Instead, use the LineChartColumn and BarChartColumn classes.
 */
function BaseChartColumn(kind, props, chart_type) {
  const parameters = mergeColumnParameters(
  // Default parameters:
  {
    y_min: 0,
    y_max: 1
  },
  // User parameters:
  props.columnTypeOptions);
  const cellTemplate = {
    kind: GridCellKind.Custom,
    allowOverlay: false,
    copyData: "",
    contentAlign: props.contentAlignment,
    data: {
      kind: "sparkline-cell",
      values: [],
      displayValues: [],
      graphKind: chart_type,
      yAxis: [parameters.y_min, parameters.y_max]
    }
  };
  return {
    ...props,
    kind,
    sortMode: "default",
    isEditable: false,
    // Chart column is always read-only
    getCell(data) {
      if (isNullOrUndefined(parameters.y_min) || isNullOrUndefined(parameters.y_max) || Number.isNaN(parameters.y_min) || Number.isNaN(parameters.y_max) || parameters.y_min >= parameters.y_max) {
        return getErrorCell("Invalid min/max y-axis configuration", "The y_min (".concat(parameters.y_min, ") and y_max (").concat(parameters.y_max, ") configuration options must be valid numbers."));
      }
      if (isNullOrUndefined(data)) {
        // TODO(lukasmasuch): Use a missing cell?
        return getEmptyCell();
      }
      const chartData = toSafeArray(data);
      const convertedChartData = [];
      let normalizedChartData = [];
      if (chartData.length === 0) {
        return getEmptyCell();
      }

      // Initialize with smallest and biggest number
      let maxValue = Number.MIN_SAFE_INTEGER;
      let minValue = Number.MAX_SAFE_INTEGER;

      // Try to convert all values to numbers and find min/max
      for (let i = 0; i < chartData.length; i++) {
        const convertedValue = toSafeNumber(chartData[i]);
        if (Number.isNaN(convertedValue) || isNullOrUndefined(convertedValue)) {
          return getErrorCell(toSafeString(chartData), "The value cannot be interpreted as a numeric array. ".concat(toSafeString(convertedValue), " is not a number."));
        }
        if (convertedValue > maxValue) {
          maxValue = convertedValue;
        }
        if (convertedValue < minValue) {
          minValue = convertedValue;
        }
        convertedChartData.push(convertedValue);
      }
      if (convertedChartData.length > 0 && (maxValue > parameters.y_max || minValue < parameters.y_min)) {
        // Normalize values between the configured range
        normalizedChartData = convertedChartData.map(v => maxValue - minValue === 0 // Prevent division by zero
        ? maxValue > (parameters.y_max || 1) ? parameters.y_max || 1 // Use max value
        : parameters.y_min || 0 // Use min value
        : ((parameters.y_max || 1) - (parameters.y_min || 0)) * ((v - minValue) / (maxValue - minValue)) + (parameters.y_min || 0));
      } else {
        // Values are already in the configured range
        normalizedChartData = convertedChartData;
      }
      return {
        ...cellTemplate,
        copyData: convertedChartData.join(","),
        // Column sorting is done via the copyData value
        data: {
          ...cellTemplate.data,
          values: normalizedChartData,
          displayValues: convertedChartData.map(v => formatNumber(v))
        },
        isMissingValue: isNullOrUndefined(data)
      };
    },
    getCellValue(cell) {
      var _cell$data, _cell$data2;
      if (cell.kind === GridCellKind.Loading) {
        return null;
      }
      return ((_cell$data = cell.data) === null || _cell$data === void 0 ? void 0 : _cell$data.values) === undefined ? null : (_cell$data2 = cell.data) === null || _cell$data2 === void 0 ? void 0 : _cell$data2.values;
    }
  };
}

/**
 * A column type that renders the cell value as a line-chart.
 * The data is expected to be a numeric array.
 *
 * This column type is currently read-only.
 */
export function LineChartColumn(props) {
  return BaseChartColumn(LINE_CHART_TYPE, props, "line");
}
LineChartColumn.isEditableType = false;

/**
 * A column type that renders the cell value as a bar-chart.
 * The data is expected to be a numeric array.
 *
 * This column type is currently read-only.
 */
export function BarChartColumn(props) {
  return BaseChartColumn(BAR_CHART_TYPE, props, "bar");
}
BarChartColumn.isEditableType = false;

/**
 * A column type that renders the cell value as an area-chart.
 * The data is expected to be a numeric array.
 *
 * This column type is currently read-only.
 */
export function AreaChartColumn(props) {
  return BaseChartColumn(AREA_CHART_TYPE, props, "area");
}
AreaChartColumn.isEditableType = false;
//# sourceMappingURL=ChartColumn.js.map