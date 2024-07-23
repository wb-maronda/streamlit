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
import moment from "moment";
import "moment-timezone";
import { notNullOrUndefined, isNullOrUndefined } from "../../../../util/utils";
import { mergeColumnParameters, toSafeDate, getErrorCell, toSafeString, formatMoment } from "./utils";

/**
 * Apply a timezone to a MomentJS date.
 *
 * @param momentDate The date to apply the timezone to
 * @param timezone The timezone to apply. This can be a timezone name
 * (e.g. "America/New_York" or "UTC") or a UTC offset (e.g. "+05:00" or "-08:00")
 * @returns The date with the timezone applied
 */
function applyTimezone(momentDate, timezone) {
  if (timezone.startsWith("+") || timezone.startsWith("-")) {
    // Timezone is a UTC offset (e.g. "+05:00" or "-08:00")
    momentDate = momentDate.utcOffset(timezone, false);
  } else {
    // Timezone is a timezone name (e.g. "America/New_York" or "UTC")
    momentDate = momentDate.tz(timezone);
  }
  return momentDate;
}
/**
 * Base class for datetime columns. This class is not meant to be used directly.
 * Instead, use the DateColumn, TimeColumn, or DateTimeColumn classes.
 *
 * @param kind The kind of column. This should be one of "date", "time", or "datetime".
 * @param props The column properties
 * @param defaultFormat The default format to use for rendering and copy data
 * @param defaultStep The default step to use, can be overridden by the user
 * @param inputType The type of input to use for editing. This should be one of "datetime-local", "time", or "date".
 * @param toISOString A function that converts a Date object to an ISO formatted string
 * @param timezone The timezone to use to make the datetime values timezone aware.
 *
 * @returns A BaseColumn object
 */
function BaseDateTimeColumn(kind, props, defaultFormat,
// used for rendering and copy data
defaultStep, inputType, toISOString, timezone) {
  var _parameters$step;
  const parameters = mergeColumnParameters(
  // Default parameters:
  {
    format: defaultFormat,
    step: defaultStep,
    timezone
  },
  // User parameters:
  props.columnTypeOptions);
  let defaultTimezoneOffset = undefined;
  if (notNullOrUndefined(parameters.timezone)) {
    // We try to determine the timezone offset based on today's date
    // This is needed for the date picker to work correctly when the value is null
    // TODO(lukasmasuch): But this might not be correct for dates in the past or future
    // since the timezone offset might have changed based on a timezone name.
    try {
      var _applyTimezone;
      defaultTimezoneOffset = ((_applyTimezone = applyTimezone(moment(), parameters.timezone)) === null || _applyTimezone === void 0 ? void 0 : _applyTimezone.utcOffset()) || undefined;
    } catch (error) {
      // Do nothing
    }
  }
  let minDate = undefined;
  if (notNullOrUndefined(parameters.min_value)) {
    minDate = toSafeDate(parameters.min_value) || undefined;
  }
  let maxDate = undefined;
  if (notNullOrUndefined(parameters.max_value)) {
    maxDate = toSafeDate(parameters.max_value) || undefined;
  }
  const cellTemplate = {
    kind: GridCellKind.Custom,
    allowOverlay: true,
    copyData: "",
    readonly: !props.isEditable,
    contentAlign: props.contentAlignment,
    style: props.isIndex ? "faded" : "normal",
    data: {
      kind: "date-picker-cell",
      date: undefined,
      displayDate: "",
      step: ((_parameters$step = parameters.step) === null || _parameters$step === void 0 ? void 0 : _parameters$step.toString()) || "1",
      format: inputType,
      min: minDate,
      max: maxDate
    }
  };
  const validateInput = data => {
    const cellData = toSafeDate(data);
    if (cellData === null) {
      if (props.isRequired) {
        return false;
      }
      return true;
    }
    if (cellData === undefined) {
      // Input cannot be interpreted as a date
      return false;
    }

    // Apply min_value configuration option:
    if (notNullOrUndefined(minDate) &&
    // We compare on a string level so that it also works correctly for time and date values
    toISOString(cellData) < toISOString(minDate)) {
      return false;
    }

    // Apply min_value configuration option:
    if (notNullOrUndefined(maxDate) && toISOString(cellData) > toISOString(maxDate)) {
      return false;
    }

    // TODO: validate step size

    return true;
  };
  return {
    ...props,
    kind,
    sortMode: "default",
    validateInput,
    getCell(data, validate) {
      if (validate === true) {
        const validationResult = validateInput(data);
        if (validationResult === false) {
          // The input is invalid, we return an error cell which will
          // prevent this cell to be inserted into the table.
          return getErrorCell(toSafeString(data), "Invalid input.");
        } else if (validationResult instanceof Date) {
          // Apply corrections:
          data = validationResult;
        }
      }
      const cellData = toSafeDate(data);
      let copyData = "";
      let displayDate = "";
      // Initialize with default offset base on today's date
      let timezoneOffset = defaultTimezoneOffset;
      if (cellData === undefined) {
        return getErrorCell(toSafeString(data), "The value cannot be interpreted as a datetime object.");
      }
      if (cellData !== null) {
        // Convert to moment object
        let momentDate = moment.utc(cellData);
        if (!momentDate.isValid()) {
          // The moment date should never be invalid here.
          return getErrorCell(toSafeString(cellData), "This should never happen. Please report this bug. \nError: ".concat(momentDate.toString()));
        }
        if (parameters.timezone) {
          try {
            momentDate = applyTimezone(momentDate, parameters.timezone);
          } catch (error) {
            return getErrorCell(momentDate.toISOString(), "Failed to adjust to the provided timezone: ".concat(parameters.timezone, ". \nError: ").concat(error));
          }
          timezoneOffset = momentDate.utcOffset();
        }
        try {
          displayDate = formatMoment(momentDate, parameters.format || defaultFormat);
        } catch (error) {
          return getErrorCell(momentDate.toISOString(), "Failed to format the date for rendering with: ".concat(parameters.format, ". \nError: ").concat(error));
        }
        // Copy data should always use the default format
        copyData = formatMoment(momentDate, defaultFormat);
      }
      return {
        ...cellTemplate,
        copyData,
        isMissingValue: isNullOrUndefined(cellData),
        data: {
          ...cellTemplate.data,
          date: cellData,
          displayDate,
          timezoneOffset
        }
      };
    },
    getCellValue(cell) {
      var _cell$data;
      return isNullOrUndefined(cell === null || cell === void 0 ? void 0 : (_cell$data = cell.data) === null || _cell$data === void 0 ? void 0 : _cell$data.date) ? null : toISOString(cell.data.date);
    }
  };
}

/**
 * Creates a new datetime column.
 * A datetime column supports optimized rendering and editing for datetime values.
 *
 * @param props The column properties.
 * @returns The new column.
 */
export default function DateTimeColumn(props) {
  var _props$columnTypeOpti, _props$columnTypeOpti2, _props$arrowType, _props$arrowType$meta, _props$columnTypeOpti3;
  // Do a smart selection of the default format based on the step size
  let defaultFormat = "YYYY-MM-DD HH:mm:ss";
  if (((_props$columnTypeOpti = props.columnTypeOptions) === null || _props$columnTypeOpti === void 0 ? void 0 : _props$columnTypeOpti.step) >= 60) {
    defaultFormat = "YYYY-MM-DD HH:mm";
  } else if (((_props$columnTypeOpti2 = props.columnTypeOptions) === null || _props$columnTypeOpti2 === void 0 ? void 0 : _props$columnTypeOpti2.step) < 1) {
    defaultFormat = "YYYY-MM-DD HH:mm:ss.SSS";
  }
  const timezone = (_props$arrowType = props.arrowType) === null || _props$arrowType === void 0 ? void 0 : (_props$arrowType$meta = _props$arrowType.meta) === null || _props$arrowType$meta === void 0 ? void 0 : _props$arrowType$meta.timezone;
  const hasTimezone = notNullOrUndefined(timezone) ||
  // Timezone can also be configure by the user:
  notNullOrUndefined(props === null || props === void 0 ? void 0 : (_props$columnTypeOpti3 = props.columnTypeOptions) === null || _props$columnTypeOpti3 === void 0 ? void 0 : _props$columnTypeOpti3.timezone);
  return BaseDateTimeColumn("datetime", props, hasTimezone ? defaultFormat + "Z" : defaultFormat, 1, "datetime-local", date => {
    if (hasTimezone) {
      return date.toISOString();
    }
    return date.toISOString().replace("Z", "");
  }, timezone);
}
DateTimeColumn.isEditableType = true;

/**
 * Creates a new time column.
 * A time column supports optimized rendering and editing for time values.
 *
 * @param props The column properties.
 * @returns The new column.
 */
export function TimeColumn(props) {
  var _props$columnTypeOpti4, _props$columnTypeOpti5;
  // Do a smart selection of the default format based on the step size
  let defaultFormat = "HH:mm:ss";
  if (((_props$columnTypeOpti4 = props.columnTypeOptions) === null || _props$columnTypeOpti4 === void 0 ? void 0 : _props$columnTypeOpti4.step) >= 60) {
    defaultFormat = "HH:mm";
  } else if (((_props$columnTypeOpti5 = props.columnTypeOptions) === null || _props$columnTypeOpti5 === void 0 ? void 0 : _props$columnTypeOpti5.step) < 1) {
    defaultFormat = "HH:mm:ss.SSS";
  }
  return BaseDateTimeColumn("time", props, defaultFormat, 1, "time", date => {
    // Only return the time part of the ISO string:
    return date.toISOString().split("T")[1].replace("Z", "");
  });
}
TimeColumn.isEditableType = true;

/**
 * Creates a new date column.
 * A date column supports optimized rendering and editing for date values.
 *
 * @param props The column properties.
 * @returns The new column.
 */
export function DateColumn(props) {
  return BaseDateTimeColumn("date", props, "YYYY-MM-DD", 1, "date", date => {
    // Only return the date part of the ISO string:
    return date.toISOString().split("T")[0];
  });
}
DateColumn.isEditableType = true;
//# sourceMappingURL=DateTimeColumn.js.map