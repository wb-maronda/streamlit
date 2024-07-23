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
import { Quiver } from "../../../../dataframes/Quiver";
import { isNullOrUndefined, notNullOrUndefined } from "../../../../util/utils";
import { isIntegerType } from "../isIntegerType";
import { getErrorCell, getEmptyCell, toSafeString, mergeColumnParameters, formatNumber, toSafeNumber, countDecimals } from "./utils";
/**
 * A read-only column type to support rendering values that have a defined
 * range. This is rendered via a progress-bar-like visualization.
 */
function ProgressColumn(props) {
  const arrowTypeName = Quiver.getTypeName(props.arrowType);
  const isInteger = isIntegerType(arrowTypeName);
  const parameters = mergeColumnParameters(
  // Default parameters:
  {
    min_value: 0,
    max_value: isInteger ? 100 : 1,
    step: isInteger ? 1 : 0.01,
    format: isInteger ? "%3d%%" : "percent"
  },
  // User parameters:
  props.columnTypeOptions);

  // Measure the display value of the max value, so that all progress bars are aligned correctly:
  let measureLabel;
  try {
    measureLabel = formatNumber(parameters.max_value, parameters.format);
  } catch (error) {
    measureLabel = toSafeString(parameters.max_value);
  }
  const fixedDecimals = isNullOrUndefined(parameters.step) || Number.isNaN(parameters.step) ? undefined : countDecimals(parameters.step);
  const cellTemplate = {
    kind: GridCellKind.Custom,
    allowOverlay: false,
    copyData: "",
    contentAlign: props.contentAlignment,
    data: {
      kind: "range-cell",
      min: parameters.min_value,
      max: parameters.max_value,
      step: parameters.step,
      value: parameters.min_value,
      label: String(parameters.min_value),
      measureLabel,
      readonly: true
    }
  };
  return {
    ...props,
    kind: "progress",
    sortMode: "smart",
    isEditable: false,
    // Progress column is always readonly
    getCell(data) {
      if (isNullOrUndefined(data)) {
        // TODO(lukasmasuch): Use a missing cell?
        return getEmptyCell();
      }
      if (isNullOrUndefined(parameters.min_value) || isNullOrUndefined(parameters.max_value) || Number.isNaN(parameters.min_value) || Number.isNaN(parameters.max_value) || parameters.min_value >= parameters.max_value) {
        return getErrorCell("Invalid min/max parameters", "The min_value (".concat(parameters.min_value, ") and max_value (").concat(parameters.max_value, ") parameters must be valid numbers."));
      }
      if (isNullOrUndefined(parameters.step) || Number.isNaN(parameters.step)) {
        return getErrorCell("Invalid step parameter", "The step parameter (".concat(parameters.step, ") must be a valid number."));
      }
      const cellData = toSafeNumber(data);
      if (Number.isNaN(cellData) || isNullOrUndefined(cellData)) {
        return getErrorCell(toSafeString(data), "The value cannot be interpreted as a number.");
      }

      // Check if the value is larger than the maximum supported value:
      if (Number.isInteger(cellData) && !Number.isSafeInteger(cellData)) {
        return getErrorCell(toSafeString(data), "The value is larger than the maximum supported integer values in number columns (2^53).");
      }
      let displayData = "";
      try {
        displayData = formatNumber(cellData, parameters.format, fixedDecimals);
      } catch (error) {
        return getErrorCell(toSafeString(cellData), notNullOrUndefined(parameters.format) ? "Failed to format the number based on the provided format configuration: (".concat(parameters.format, "). Error: ").concat(error) : "Failed to format the number. Error: ".concat(error));
      }

      // If the value is outside the range, we scale it to the min/max
      // for the visualization.
      const normalizeCellValue = Math.min(parameters.max_value, Math.max(parameters.min_value, cellData));
      return {
        ...cellTemplate,
        isMissingValue: isNullOrUndefined(data),
        copyData: String(cellData),
        // Column sorting is done via the copyData value
        data: {
          ...cellTemplate.data,
          value: normalizeCellValue,
          label: displayData
        }
      };
    },
    getCellValue(cell) {
      var _cell$data, _cell$data2;
      if (cell.kind === GridCellKind.Loading) {
        return null;
      }
      return ((_cell$data = cell.data) === null || _cell$data === void 0 ? void 0 : _cell$data.value) === undefined ? null : (_cell$data2 = cell.data) === null || _cell$data2 === void 0 ? void 0 : _cell$data2.value;
    }
  };
}
ProgressColumn.isEditableType = false;
export default ProgressColumn;
//# sourceMappingURL=ProgressColumn.js.map