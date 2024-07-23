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

// Private members use _.
/* eslint-disable no-underscore-dangle */

import { Vector, tableFromIPC, Null, Dictionary, Struct, util } from "apache-arrow";
import { immerable, produce } from "immer";
import range from "lodash/range";
import unzip from "lodash/unzip";
import zip from "lodash/zip";
import trimEnd from "lodash/trimEnd";
import moment from "moment-timezone";
import numbro from "numbro";
import { notNullOrUndefined } from "../util/utils";
import { logWarning } from "../util/log";

/** Data types used by ArrowJS. */

// period

/**
 * A row-major grid of DataFrame index header values.
 */

/**
 * A row-major grid of DataFrame index header values.
 */

/**
 * A row-major grid of DataFrame column header values.
 * NOTE: ArrowJS automatically formats the columns in schema, i.e. we always get strings.
 */

/**
 * A row-major grid of DataFrame data.
 */

// This type should be recursive as there can be nested structures.
// Example: list[int64], list[list[unicode]], etc.
// NOTE: Commented out until we can find a way to properly define recursive types.
//
// enum DataTypeName {
//   Empty = "empty",
//   Boolean = "bool",
//   Number = "int64",
//   Float = "float64",
//   String = "unicode",
//   Date = "date", // "datetime", "datetimetz"
//   Bytes = "bytes",
//   Object = "object",
//   List = "list[int64]",
// }

/** DataFrame index and data types. */

/** Type information for single-index columns, and data columns. */

// The frequency strings defined in pandas.
// See: https://pandas.pydata.org/docs/user_guide/timeseries.html#period-aliases
// Not supported: "N" (nanoseconds), "U" & "us" (microseconds), and "B" (business days).
// Reason is that these types are not supported by moment.js, but also they are not
// very commonly used in practice.

const WEEKDAY_SHORT = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const formatMs = duration => moment("19700101", "YYYYMMDD").add(duration, "ms").format("YYYY-MM-DD HH:mm:ss.SSS");
const formatSec = duration => moment("19700101", "YYYYMMDD").add(duration, "s").format("YYYY-MM-DD HH:mm:ss");
const formatMin = duration => moment("19700101", "YYYYMMDD").add(duration, "m").format("YYYY-MM-DD HH:mm");
const formatHours = duration => moment("19700101", "YYYYMMDD").add(duration, "h").format("YYYY-MM-DD HH:mm");
const formatDay = duration => moment("19700101", "YYYYMMDD").add(duration, "d").format("YYYY-MM-DD");
const formatMonth = duration => moment("19700101", "YYYYMMDD").add(duration, "M").format("YYYY-MM");
const formatYear = duration => moment("19700101", "YYYYMMDD").add(duration, "y").format("YYYY");
const formatWeeks = (duration, freqParam) => {
  if (!freqParam) {
    throw new Error('Frequency "W" requires parameter');
  }
  const dayIndex = WEEKDAY_SHORT.indexOf(freqParam);
  if (dayIndex < 0) {
    throw new Error("Invalid value: ".concat(freqParam, ". Supported values: ").concat(JSON.stringify(WEEKDAY_SHORT)));
  }
  const startDate = moment("19700101", "YYYYMMDD").add(duration, "w").day(dayIndex - 6).format("YYYY-MM-DD");
  const endDate = moment("19700101", "YYYYMMDD").add(duration, "w").day(dayIndex).format("YYYY-MM-DD");
  return "".concat(startDate, "/").concat(endDate);
};
const formatQuarter = duration => moment("19700101", "YYYYMMDD").add(duration, "Q").endOf("quarter").format("YYYY[Q]Q");
const PERIOD_TYPE_FORMATTERS = {
  L: formatMs,
  ms: formatMs,
  S: formatSec,
  s: formatSec,
  T: formatMin,
  min: formatMin,
  H: formatHours,
  h: formatHours,
  D: formatDay,
  M: formatMonth,
  W: formatWeeks,
  Q: formatQuarter,
  Y: formatYear,
  A: formatYear
};

/** Interval data type. */

export let IndexTypeName;

/**
 * The Arrow table schema. It's a blueprint that tells us where data
 * is stored in the associated table. (Arrow stores the schema as a JSON string,
 * and we parse it into this typed object - so these member names come from
 * Arrow.)
 */
(function (IndexTypeName) {
  IndexTypeName["CategoricalIndex"] = "categorical";
  IndexTypeName["DatetimeIndex"] = "datetime";
  IndexTypeName["Float64Index"] = "float64";
  IndexTypeName["Int64Index"] = "int64";
  IndexTypeName["RangeIndex"] = "range";
  IndexTypeName["UInt64Index"] = "uint64";
  IndexTypeName["UnicodeIndex"] = "unicode";
  IndexTypeName["TimedeltaIndex"] = "time";
})(IndexTypeName || (IndexTypeName = {}));
/** Metadata for the "range" index type. */
/**
 * Metadata for a single column in an Arrow table.
 * (This can describe an index *or* a data column.)
 */
/** DataFrame's Styler information. */
/** Dimensions of the DataFrame. */
/**
 * There are 4 cell types:
 *  - blank, cells that are not part of index headers, column headers, or data
 *  - index, index header cells
 *  - columns, column header cells
 *  - data, data cells
 */
export let DataFrameCellType;

/** Data for a single cell in a DataFrame. */
(function (DataFrameCellType) {
  DataFrameCellType["BLANK"] = "blank";
  DataFrameCellType["INDEX"] = "index";
  DataFrameCellType["COLUMNS"] = "columns";
  DataFrameCellType["DATA"] = "data";
})(DataFrameCellType || (DataFrameCellType = {}));
/**
 * Parses data from an Arrow table, and stores it in a row-major format
 * (which is more useful for our frontend display code than Arrow's columnar format).
 */
export class Quiver {
  /**
   * Plain objects (objects without a prototype), arrays, Maps and Sets are always drafted by Immer.
   * Every other object must use the immerable symbol to mark itself as compatible with Immer.
   * When one of these objects is mutated within a producer, its prototype is preserved between copies.
   * Source: https://immerjs.github.io/immer/complex-objects/
   */

  /** DataFrame's index (matrix of row names). */

  /** DataFrame's column labels (matrix of column names). */

  /** DataFrame's index names. */

  /** DataFrame's data. */

  /** Definition for DataFrame's fields. */

  /** Types for DataFrame's index and data. */

  /** [optional] DataFrame's Styler data. This will be defined if the user styled the dataframe. */

  constructor(element) {
    this[immerable] = true;
    this._index = void 0;
    this._columns = void 0;
    this._indexNames = void 0;
    this._data = void 0;
    this._fields = void 0;
    this._types = void 0;
    this._styler = void 0;
    const table = tableFromIPC(element.data);
    const schema = Quiver.parseSchema(table);
    const rawColumns = Quiver.getRawColumns(schema);
    const fields = Quiver.parseFields(table.schema);
    const index = Quiver.parseIndex(table, schema);
    const columns = Quiver.parseColumns(schema);
    const indexNames = Quiver.parseIndexNames(schema);
    const data = Quiver.parseData(table, columns, rawColumns);
    const types = Quiver.parseTypes(table, schema);
    const styler = element.styler ? Quiver.parseStyler(element.styler) : undefined;

    // The assignment is done below to avoid partially populating the instance
    // if an error is thrown.
    this._index = index;
    this._columns = columns;
    this._data = data;
    this._types = types;
    this._fields = fields;
    this._styler = styler;
    this._indexNames = indexNames;
  }

  /** Parse Arrow table's schema from a JSON string to an object. */
  static parseSchema(table) {
    const schema = table.schema.metadata.get("pandas");
    if (schema == null) {
      // This should never happen!
      throw new Error("Table schema is missing.");
    }
    return JSON.parse(schema);
  }

  /** Get unprocessed column names for data columns. Needed for selecting
   * data columns when there are multi-columns. */
  static getRawColumns(schema) {
    return schema.columns.map(columnSchema => columnSchema.field_name)
    // Filter out all index columns
    .filter(columnName => !schema.index_columns.includes(columnName));
  }

  /** Parse DataFrame's index header values. */
  static parseIndex(table, schema) {
    return schema.index_columns.map(indexName => {
      // Generate a range using the "range" index metadata.
      if (Quiver.isRangeIndex(indexName)) {
        const {
          start,
          stop,
          step
        } = indexName;
        return range(start, stop, step);
      }

      // Otherwise, use the index name to get the index column data.
      const column = table.getChild(indexName);
      if (column instanceof Vector && column.type instanceof Null) {
        return null;
      }
      return column;
    }).filter(column => column !== null);
  }

  /** Parse DataFrame's index header names. */
  static parseIndexNames(schema) {
    return schema.index_columns.map(indexName => {
      // Range indices are treated differently since they
      // contain additional metadata (e.g. start, stop, step).
      // and not just the name.
      if (Quiver.isRangeIndex(indexName)) {
        const {
          name
        } = indexName;
        return name || "";
      }
      if (indexName.startsWith("__index_level_")) {
        // Unnamed indices can have a name like "__index_level_0__".
        return "";
      }
      return indexName;
    });
  }

  /** Parse DataFrame's column header values. */
  static parseColumns(schema) {
    // If DataFrame `columns` has multi-level indexing, the length of
    // `column_indexes` will show how many levels there are.
    const isMultiIndex = schema.column_indexes.length > 1;

    // Perform the following transformation:
    // ["('1','foo')", "('2','bar')", "('3','baz')"] -> ... -> [["1", "2", "3"], ["foo", "bar", "baz"]]
    return unzip(schema.columns.map(columnSchema => columnSchema.field_name)
    // Filter out all index columns
    .filter(fieldName => !schema.index_columns.includes(fieldName)).map(fieldName => isMultiIndex ? JSON.parse(fieldName.replace(/\(/g, "[").replace(/\)/g, "]").replace(/'/g, '"')) : [fieldName]));
  }

  /** Parse DataFrame's data. */
  static parseData(table, columns, rawColumns) {
    const numDataRows = table.numRows;
    const numDataColumns = columns.length > 0 ? columns[0].length : 0;
    if (numDataRows === 0 || numDataColumns === 0) {
      return table.select([]);
    }
    return table.select(rawColumns);
  }

  /** Parse DataFrame's index and data types. */
  static parseTypes(table, schema) {
    const index = Quiver.parseIndexType(schema);
    const data = Quiver.parseDataType(table, schema);
    return {
      index,
      data
    };
  }

  /** Parse types for each index column. */
  static parseIndexType(schema) {
    return schema.index_columns.map(indexName => {
      if (Quiver.isRangeIndex(indexName)) {
        return {
          pandas_type: IndexTypeName.RangeIndex,
          numpy_type: IndexTypeName.RangeIndex,
          meta: indexName
        };
      }

      // Find the index column we're looking for in the schema.
      const indexColumn = schema.columns.find(column => column.field_name === indexName);

      // This should never happen!
      if (!indexColumn) {
        throw new Error("".concat(indexName, " index not found."));
      }
      return {
        pandas_type: indexColumn.pandas_type,
        numpy_type: indexColumn.numpy_type,
        meta: indexColumn.metadata
      };
    });
  }

  /**
   * Returns the categorical options defined for a given data column.
   * Returns undefined if the column is not categorical.
   *
   * This function only works for non-index columns and expects the index at 0
   * for the first non-index data column.
   */
  getCategoricalOptions(dataColumnIndex) {
    var _this$_data$getChildA, _this$_data$getChildA2;
    const {
      dataColumns: numDataColumns
    } = this.dimensions;
    if (dataColumnIndex < 0 || dataColumnIndex >= numDataColumns) {
      throw new Error("Column index is out of range: ".concat(dataColumnIndex));
    }
    if (!(this._fields[String(dataColumnIndex)].type instanceof Dictionary)) {
      // This is not a categorical column
      return undefined;
    }
    const categoricalDict = (_this$_data$getChildA = this._data.getChildAt(dataColumnIndex)) === null || _this$_data$getChildA === void 0 ? void 0 : (_this$_data$getChildA2 = _this$_data$getChildA.data[0]) === null || _this$_data$getChildA2 === void 0 ? void 0 : _this$_data$getChildA2.dictionary;
    if (categoricalDict) {
      // get all values into a list
      const values = [];
      for (let i = 0; i < categoricalDict.length; i++) {
        values.push(categoricalDict.get(i));
      }
      return values;
    }
    return undefined;
  }

  /** Parse types for each non-index column. */
  static parseDataType(table, schema) {
    return schema.columns
    // Filter out all index columns
    .filter(columnSchema => !schema.index_columns.includes(columnSchema.field_name)).map(columnSchema => ({
      pandas_type: columnSchema.pandas_type,
      numpy_type: columnSchema.numpy_type,
      meta: columnSchema.metadata
    }));
  }

  /** Parse styler information from proto. */
  static parseStyler(styler) {
    return {
      uuid: styler.uuid,
      caption: styler.caption,
      styles: styler.styles,
      // Recursively create a new Quiver instance for Styler's display values.
      // This values will be used for rendering the DataFrame, while the original values
      // will be used for sorting, etc.
      displayValues: new Quiver({
        data: styler.displayValues
      })
    };
  }

  /** Concatenate the original DataFrame index with the given one. */
  concatIndexes(otherIndex, otherIndexTypes) {
    // If one of the `index` arrays is empty, return the other one.
    // Otherwise, they will have different types and an error will be thrown.
    if (otherIndex.length === 0) {
      return this._index;
    }
    if (this._index.length === 0) {
      return otherIndex;
    }

    // Make sure indexes have same types.
    if (!Quiver.sameIndexTypes(this._types.index, otherIndexTypes)) {
      const receivedIndexTypes = otherIndexTypes.map(index => Quiver.getTypeName(index));
      const expectedIndexTypes = this._types.index.map(index => Quiver.getTypeName(index));
      throw new Error("\nUnsupported operation. The data passed into `add_rows()` must have the same\nindex signature as the original data.\n\nIn this case, `add_rows()` received `".concat(JSON.stringify(receivedIndexTypes), "`\nbut was expecting `").concat(JSON.stringify(expectedIndexTypes), "`.\n"));
    }
    if (this._types.index.length === 0) {
      // This should never happen!
      throw new Error("There was an error while parsing index types.");
    }

    // NOTE: "range" index cannot be a part of a multi-index, i.e.
    // if the index type is "range", there will only be one element in the index array.
    if (this._types.index[0].pandas_type === IndexTypeName.RangeIndex) {
      // Continue the sequence for a "range" index.
      // NOTE: The metadata of the original index will be used, i.e.
      // if both indexes are of type "range" and they have different
      // metadata (start, step, stop) values, the metadata of the given
      // index will be ignored.
      const {
        step,
        stop
      } = this._types.index[0].meta;
      otherIndex = [range(stop,
      // End is not inclusive
      stop + otherIndex[0].length * step, step)];
    }

    // Concatenate each index with its counterpart in the other table
    const zipped = zip(this._index, otherIndex);
    // @ts-expect-error We know the two indexes are of the same size
    return zipped.map(a => a[0].concat(a[1]));
  }

  /** True if both arrays contain the same index types in the same order. */
  static sameIndexTypes(t1, t2) {
    // Make sure both indexes have same dimensions.
    if (t1.length !== t2.length) {
      return false;
    }
    return t1.every((type, index) => index < t2.length && Quiver.getTypeName(type) === Quiver.getTypeName(t2[index]));
  }

  /** Concatenate the original DataFrame data with the given one. */
  concatData(otherData, otherDataType) {
    // If one of the `data` arrays is empty, return the other one.
    // Otherwise, they will have different types and an error will be thrown.
    if (otherData.numCols === 0) {
      return this._data;
    }
    if (this._data.numCols === 0) {
      return otherData;
    }

    // Make sure `data` arrays have the same types.
    if (!Quiver.sameDataTypes(this._types.data, otherDataType)) {
      const receivedDataTypes = otherDataType.map(t => t.pandas_type);
      const expectedDataTypes = this._types.data.map(t => t.pandas_type);
      throw new Error("\nUnsupported operation. The data passed into `add_rows()` must have the same\ndata signature as the original data.\n\nIn this case, `add_rows()` received `".concat(JSON.stringify(receivedDataTypes), "`\nbut was expecting `").concat(JSON.stringify(expectedDataTypes), "`.\n"));
    }

    // Remove extra columns from the "other" DataFrame.
    // Columns from otherData are used by index without checking column names.
    const slicedOtherData = otherData.selectAt(range(0, this._data.numCols));
    return this._data.concat(slicedOtherData);
  }

  /** True if both arrays contain the same data types in the same order. */
  static sameDataTypes(t1, t2) {
    // NOTE: We remove extra columns from the DataFrame that we add rows from.
    // Thus, as long as the length of `t2` is >= than `t1`, this will work properly.
    // For columns, `pandas_type` will point us to the correct type.
    return t1.every((type, index) => {
      var _t2$index;
      return type.pandas_type === ((_t2$index = t2[index]) === null || _t2$index === void 0 ? void 0 : _t2$index.pandas_type);
    });
  }

  /** Concatenate index and data types. */
  concatTypes(otherTypes) {
    const index = this.concatIndexTypes(otherTypes.index);
    const data = this.concatDataTypes(otherTypes.data);
    return {
      index,
      data
    };
  }

  /** Concatenate index types. */
  concatIndexTypes(otherIndexTypes) {
    // If one of the `types` arrays is empty, return the other one.
    // Otherwise, an empty array will be returned.
    if (otherIndexTypes.length === 0) {
      return this._types.index;
    }
    if (this._types.index.length === 0) {
      return otherIndexTypes;
    }

    // Make sure indexes have same types.
    if (!Quiver.sameIndexTypes(this._types.index, otherIndexTypes)) {
      const receivedIndexTypes = otherIndexTypes.map(index => Quiver.getTypeName(index));
      const expectedIndexTypes = this._types.index.map(index => Quiver.getTypeName(index));
      throw new Error("\nUnsupported operation. The data passed into `add_rows()` must have the same\nindex signature as the original data.\n\nIn this case, `add_rows()` received `".concat(JSON.stringify(receivedIndexTypes), "`\nbut was expecting `").concat(JSON.stringify(expectedIndexTypes), "`.\n"));
    }

    // TL;DR This sets the new stop value.
    return this._types.index.map(indexType => {
      // NOTE: "range" index cannot be a part of a multi-index, i.e.
      // if the index type is "range", there will only be one element in the index array.
      if (indexType.pandas_type === IndexTypeName.RangeIndex) {
        const {
          stop,
          step
        } = indexType.meta;
        const {
          start: otherStart,
          stop: otherStop,
          step: otherStep
        } = otherIndexTypes[0].meta;
        const otherRangeIndexLength = (otherStop - otherStart) / otherStep;
        const newStop = stop + otherRangeIndexLength * step;
        return {
          ...indexType,
          meta: {
            ...indexType.meta,
            stop: newStop
          }
        };
      }
      return indexType;
    });
  }

  /** Concatenate types of data columns. */
  concatDataTypes(otherDataTypes) {
    if (this._types.data.length === 0) {
      return otherDataTypes;
    }
    return this._types.data;
  }

  /** True if the index name represents a "range" index. */
  static isRangeIndex(indexName) {
    return typeof indexName === "object" && indexName.kind === "range";
  }

  /** Formats an interval index. */
  static formatIntervalType(data, typeName) {
    const match = typeName.match(/interval\[(.+), (both|left|right|neither)\]/);
    if (match === null) {
      throw new Error("Invalid interval type: ".concat(typeName));
    }
    const [, subtype, closed] = match;
    return this.formatInterval(data, subtype, closed);
  }
  static formatInterval(data, subtype, closed) {
    const interval = data.toJSON();
    const leftBracket = closed === "both" || closed === "left" ? "[" : "(";
    const rightBracket = closed === "both" || closed === "right" ? "]" : ")";
    const leftInterval = Quiver.format(interval.left, {
      pandas_type: subtype,
      numpy_type: subtype
    });
    const rightInterval = Quiver.format(interval.right, {
      pandas_type: subtype,
      numpy_type: subtype
    });
    return "".concat(leftBracket + leftInterval, ", ").concat(rightInterval + rightBracket);
  }

  /**
   * Adjusts a time value to seconds based on the unit information in the field.
   *
   * The unit numbers are specified here:
   * https://github.com/apache/arrow/blob/3ab246f374c17a216d86edcfff7ff416b3cff803/js/src/enum.ts#L95
   */
  static convertToSeconds(value, unit) {
    let unitAdjustment;
    if (unit === 1) {
      // Milliseconds
      unitAdjustment = 1000;
    } else if (unit === 2) {
      // Microseconds
      unitAdjustment = 1000 * 1000;
    } else if (unit === 3) {
      // Nanoseconds
      unitAdjustment = 1000 * 1000 * 1000;
    } else {
      // Interpret it as seconds as a fallback
      return Number(value);
    }

    // Do the calculation based on bigints, if the value
    // is a bigint and not safe for usage as number.
    // This might lose some precision since it doesn't keep
    // fractional parts.
    if (typeof value === "bigint" && !Number.isSafeInteger(Number(value))) {
      return Number(value / BigInt(unitAdjustment));
    }
    return Number(value) / unitAdjustment;
  }
  static formatTime(data, field) {
    var _field$type$unit, _field$type;
    const timeInSeconds = Quiver.convertToSeconds(data, (_field$type$unit = field === null || field === void 0 ? void 0 : (_field$type = field.type) === null || _field$type === void 0 ? void 0 : _field$type.unit) !== null && _field$type$unit !== void 0 ? _field$type$unit : 0);
    return moment.unix(timeInSeconds).utc().format(timeInSeconds % 1 === 0 ? "HH:mm:ss" : "HH:mm:ss.SSS");
  }
  static formatDuration(data, field) {
    var _field$type$unit2, _field$type2;
    return moment.duration(Quiver.convertToSeconds(data, (_field$type$unit2 = field === null || field === void 0 ? void 0 : (_field$type2 = field.type) === null || _field$type2 === void 0 ? void 0 : _field$type2.unit) !== null && _field$type$unit2 !== void 0 ? _field$type$unit2 : 3), "seconds").humanize();
  }

  /**
   * Formats a decimal value with a given scale to a string.
   *
   * This code is partly based on: https://github.com/apache/arrow/issues/35745
   *
   * TODO: This is only a temporary workaround until ArrowJS can format decimals correctly.
   * This is tracked here:
   * https://github.com/apache/arrow/issues/37920
   * https://github.com/apache/arrow/issues/28804
   * https://github.com/apache/arrow/issues/35745
   */
  static formatDecimal(value, scale) {
    // Format Uint32Array to a numerical string and pad it with zeros
    // So that it is exactly the length of the scale.
    let numString = util.bigNumToString(new util.BN(value)).padStart(scale, "0");

    // ArrowJS 13 correctly adds a minus sign for negative numbers.
    // but it doesn't handle th fractional part yet. So we can just return
    // the value if scale === 0, but we need to do some additional processing
    // for the fractional part if scale > 0.

    if (scale === 0) {
      return numString;
    }
    let sign = "";
    if (numString.startsWith("-")) {
      // Check if number is negative, and if so remember the sign and remove it.
      // We will add it back later.
      sign = "-";
      numString = numString.slice(1);
    }
    // Extract the whole number part. If the number is < 1, it doesn't
    // have a whole number part, so we'll use "0" instead.
    // E.g for 123450 with scale 3, we'll get "123" as the whole part.
    const wholePart = numString.slice(0, -scale) || "0";
    // Extract the fractional part and remove trailing zeros.
    // E.g. for 123450 with scale 3, we'll get "45" as the fractional part.
    const decimalPart = trimEnd(numString.slice(-scale), "0") || "";
    // Combine the parts and add the sign.
    return "".concat(sign).concat(wholePart) + (decimalPart ? ".".concat(decimalPart) : "");
  }
  static formatPeriodType(duration, typeName) {
    const match = typeName.match(/period\[(.*)]/);
    if (match === null) {
      logWarning("Invalid period type: ".concat(typeName));
      return String(duration);
    }
    const [, freq] = match;
    return this.formatPeriod(duration, freq);
  }
  static formatPeriod(duration, freq) {
    const [freqName, freqParam] = freq.split("-", 2);
    const momentConverter = PERIOD_TYPE_FORMATTERS[freqName];
    if (!momentConverter) {
      logWarning("Unsupported period frequency: ".concat(freq));
      return String(duration);
    }
    const durationNumber = Number(duration);
    if (!Number.isSafeInteger(durationNumber)) {
      logWarning("Unsupported value: ".concat(duration, ". Supported values: [").concat(Number.MIN_SAFE_INTEGER, "-").concat(Number.MAX_SAFE_INTEGER, "]"));
      return String(duration);
    }
    return momentConverter(durationNumber, freqParam);
  }
  static formatCategoricalType(x, field) {
    // Serialization for pandas.Interval and pandas.Period is provided by Arrow extensions
    // https://github.com/pandas-dev/pandas/blob/235d9009b571c21b353ab215e1e675b1924ae55c/
    // pandas/core/arrays/arrow/extension_types.py#L17
    const extensionName = field.metadata.get("ARROW:extension:name");
    if (extensionName) {
      const extensionMetadata = JSON.parse(field.metadata.get("ARROW:extension:metadata"));
      if (extensionName === "pandas.interval") {
        const {
          subtype,
          closed
        } = extensionMetadata;
        return Quiver.formatInterval(x, subtype, closed);
      }
      if (extensionName === "pandas.Period") {
        const {
          freq
        } = extensionMetadata;
        return Quiver.formatPeriod(x, freq);
      }
    }
    return String(x);
  }

  /** Returns type for a single-index column or data column. */
  static getTypeName(type) {
    // For `PeriodType` and `IntervalType` types are kept in `numpy_type`,
    // for the rest of the indexes in `pandas_type`.
    return type.pandas_type === "object" ? type.numpy_type : type.pandas_type;
  }

  /** Takes the data and it's type and nicely formats it. */
  static format(x, type, field) {
    const typeName = type && Quiver.getTypeName(type);
    if (x == null) {
      return "<NA>";
    }

    // date
    const isDate = x instanceof Date || Number.isFinite(x);
    if (isDate && typeName === "date") {
      return moment.utc(x).format("YYYY-MM-DD");
    }
    // time
    if (typeof x === "bigint" && typeName === "time") {
      return Quiver.formatTime(Number(x), field);
    }

    // datetimetz
    if (isDate && typeName === "datetimetz") {
      const meta = type === null || type === void 0 ? void 0 : type.meta;
      let datetime = moment(x);
      if (meta !== null && meta !== void 0 && meta.timezone) {
        if (moment.tz.zone(meta === null || meta === void 0 ? void 0 : meta.timezone)) {
          // uses timezone notation
          datetime = datetime.tz(meta === null || meta === void 0 ? void 0 : meta.timezone);
        } else {
          // uses UTC offset notation
          datetime = datetime.utcOffset(meta === null || meta === void 0 ? void 0 : meta.timezone);
        }
      }
      return datetime.format("YYYY-MM-DD HH:mm:ssZ");
    }
    // datetime, datetime64, datetime64[ns], etc.
    if (isDate && typeName !== null && typeName !== void 0 && typeName.startsWith("datetime")) {
      return moment.utc(x).format("YYYY-MM-DD HH:mm:ss");
    }
    if (typeName !== null && typeName !== void 0 && typeName.startsWith("interval")) {
      return Quiver.formatIntervalType(x, typeName);
    }
    if (typeName !== null && typeName !== void 0 && typeName.startsWith("period")) {
      return Quiver.formatPeriodType(x, typeName);
    }
    if (typeName === "categorical") {
      return this.formatCategoricalType(x, field);
    }
    if (typeName !== null && typeName !== void 0 && typeName.startsWith("timedelta")) {
      return this.formatDuration(x, field);
    }
    if (typeName === "decimal") {
      var _field$type3;
      return this.formatDecimal(x, (field === null || field === void 0 ? void 0 : (_field$type3 = field.type) === null || _field$type3 === void 0 ? void 0 : _field$type3.scale) || 0);
    }

    // Nested arrays and objects.
    if (typeName === "object" || typeName !== null && typeName !== void 0 && typeName.startsWith("list")) {
      if ((field === null || field === void 0 ? void 0 : field.type) instanceof Struct) {
        // This type is used by python dictionary values

        // Workaround: Arrow JS adds all properties from all cells
        // as fields. When you convert to string, it will contain lots of fields with
        // null values. To mitigate this, we filter out null values.

        return JSON.stringify(x, (_key, value) => {
          if (!notNullOrUndefined(value)) {
            // Ignore null and undefined values ->
            return undefined;
          }
          if (typeof value === "bigint") {
            return Number(value);
          }
          return value;
        });
      }
      return JSON.stringify(x, (_key, value) => typeof value === "bigint" ? Number(value) : value);
    }
    if (typeName === "float64" && Number.isFinite(x)) {
      return numbro(x).format("0,0.0000");
    }
    return String(x);
  }

  /** DataFrame's index (matrix of row names). */
  get index() {
    return this._index;
  }

  /** DataFrame's index names. */
  get indexNames() {
    return this._indexNames;
  }

  /** DataFrame's column labels (matrix of column names). */
  get columns() {
    return this._columns;
  }

  /** DataFrame's data. */
  get data() {
    return this._data;
  }

  /** Types for DataFrame's index and data. */
  get types() {
    return this._types;
  }

  /**
   * The DataFrame's CSS id, if it has one.
   *
   * If the DataFrame has a Styler, the  CSS id is `T_${StylerUUID}`. Otherwise,
   * it's undefined.
   *
   * This id is used by styled tables and styled dataframes to associate
   * the Styler CSS with the styled data.
   */
  get cssId() {
    var _this$_styler;
    if (((_this$_styler = this._styler) === null || _this$_styler === void 0 ? void 0 : _this$_styler.uuid) == null) {
      return undefined;
    }
    return "T_".concat(this._styler.uuid);
  }

  /** The DataFrame's CSS styles, if it has a Styler. */
  get cssStyles() {
    var _this$_styler2;
    return ((_this$_styler2 = this._styler) === null || _this$_styler2 === void 0 ? void 0 : _this$_styler2.styles) || undefined;
  }

  /** The DataFrame's caption, if it's been set. */
  get caption() {
    var _this$_styler3;
    return ((_this$_styler3 = this._styler) === null || _this$_styler3 === void 0 ? void 0 : _this$_styler3.caption) || undefined;
  }

  /** The DataFrame's dimensions. */
  get dimensions() {
    var _this$_columns, _this$_columns$;
    const headerColumns = this._index.length || this.types.index.length || 1;
    const headerRows = this._columns.length || 1;
    const dataRows = this._data.numRows || 0;
    const dataColumns = this._data.numCols || ((_this$_columns = this._columns) === null || _this$_columns === void 0 ? void 0 : (_this$_columns$ = _this$_columns[0]) === null || _this$_columns$ === void 0 ? void 0 : _this$_columns$.length) || 0;
    const rows = headerRows + dataRows;
    const columns = headerColumns + dataColumns;
    return {
      headerRows,
      headerColumns,
      dataRows,
      dataColumns,
      rows,
      columns
    };
  }

  /** True if the DataFrame has no index, columns, and data. */
  isEmpty() {
    return this._index.length === 0 && this._columns.length === 0 && this._data.numRows === 0 && this._data.numCols === 0;
  }

  /** Return a single cell in the table. */
  getCell(rowIndex, columnIndex) {
    var _this$_styler5, _this$_styler6;
    const {
      headerRows,
      headerColumns,
      rows,
      columns
    } = this.dimensions;
    if (rowIndex < 0 || rowIndex >= rows) {
      throw new Error("Row index is out of range: ".concat(rowIndex));
    }
    if (columnIndex < 0 || columnIndex >= columns) {
      throw new Error("Column index is out of range: ".concat(columnIndex));
    }
    const isBlankCell = rowIndex < headerRows && columnIndex < headerColumns;
    const isIndexCell = rowIndex >= headerRows && columnIndex < headerColumns;
    const isColumnsCell = rowIndex < headerRows && columnIndex >= headerColumns;
    if (isBlankCell) {
      // Blank cells include `blank`.
      const cssClass = ["blank"];
      if (columnIndex > 0) {
        cssClass.push("level".concat(rowIndex));
      }
      return {
        type: DataFrameCellType.BLANK,
        cssClass: cssClass.join(" "),
        content: ""
      };
    }
    if (isIndexCell) {
      var _this$_styler4;
      const dataRowIndex = rowIndex - headerRows;
      const cssId = (_this$_styler4 = this._styler) !== null && _this$_styler4 !== void 0 && _this$_styler4.uuid ? "".concat(this.cssId, "level").concat(columnIndex, "_row").concat(dataRowIndex) : undefined;

      // Index label cells include:
      // - row_heading
      // - row<n> where n is the numeric position of the row
      // - level<k> where k is the level in a MultiIndex
      const cssClass = ["row_heading", "level".concat(columnIndex), "row".concat(dataRowIndex)].join(" ");
      const contentType = this._types.index[columnIndex];
      const content = this.getIndexValue(dataRowIndex, columnIndex);
      let field = this._fields["__index_level_".concat(String(columnIndex), "__")];
      if (field === undefined) {
        // If the index column has a name, we need to get it differently:
        field = this._fields[String(columns - headerColumns)];
      }
      return {
        type: DataFrameCellType.INDEX,
        cssId,
        cssClass,
        content,
        contentType,
        field
      };
    }
    if (isColumnsCell) {
      const dataColumnIndex = columnIndex - headerColumns;

      // Column label cells include:
      // - col_heading
      // - col<n> where n is the numeric position of the column
      // - level<k> where k is the level in a MultiIndex
      const cssClass = ["col_heading", "level".concat(rowIndex), "col".concat(dataColumnIndex)].join(" ");
      return {
        type: DataFrameCellType.COLUMNS,
        cssClass,
        content: this._columns[rowIndex][dataColumnIndex],
        // ArrowJS automatically converts "columns" cells to strings.
        // Keep ArrowJS structure for consistency.
        contentType: {
          pandas_type: IndexTypeName.UnicodeIndex,
          numpy_type: "object"
        }
      };
    }
    const dataRowIndex = rowIndex - headerRows;
    const dataColumnIndex = columnIndex - headerColumns;
    const cssId = (_this$_styler5 = this._styler) !== null && _this$_styler5 !== void 0 && _this$_styler5.uuid ? "".concat(this.cssId, "row").concat(dataRowIndex, "_col").concat(dataColumnIndex) : undefined;

    // Data cells include `data`.
    const cssClass = ["data", "row".concat(dataRowIndex), "col".concat(dataColumnIndex)].join(" ");
    const contentType = this._types.data[dataColumnIndex];
    const field = this._fields[String(dataColumnIndex)];
    const content = this.getDataValue(dataRowIndex, dataColumnIndex);
    const displayContent = (_this$_styler6 = this._styler) !== null && _this$_styler6 !== void 0 && _this$_styler6.displayValues ? this._styler.displayValues.getCell(rowIndex, columnIndex).content : undefined;
    return {
      type: DataFrameCellType.DATA,
      cssId,
      cssClass,
      content,
      contentType,
      displayContent,
      field
    };
  }
  getIndexValue(rowIndex, columnIndex) {
    const index = this._index[columnIndex];
    const value = index instanceof Vector ? index.get(rowIndex) : index[rowIndex];
    return value;
  }
  getDataValue(rowIndex, columnIndex) {
    var _this$_data$getChildA3;
    return (_this$_data$getChildA3 = this._data.getChildAt(columnIndex)) === null || _this$_data$getChildA3 === void 0 ? void 0 : _this$_data$getChildA3.get(rowIndex);
  }

  /**
   * Add the contents of another table (data + indexes) to this table.
   * Extra columns will not be created.
   */
  addRows(other) {
    if (this._styler || other._styler) {
      throw new Error("\nUnsupported operation. `add_rows()` does not support Pandas Styler objects.\n\nIf you do not need the Styler's styles, try passing the `.data` attribute of\nthe Styler object instead to concatenate just the underlying dataframe.\n\nFor example:\n```\nst.add_rows(my_styler.data)\n```\n");
    }

    // Don't do anything if the incoming DataFrame is empty.
    if (other.isEmpty()) {
      return produce(this, draft => draft);
    }

    // We need to handle this separately, as columns need to be reassigned.
    // We don't concatenate columns in the general case.
    if (this.isEmpty()) {
      return produce(other, draft => draft);
    }

    // Concatenate all data into temporary variables. If any of
    // these operations fail, an error will be thrown and we'll prematurely
    // exit the function.
    const index = this.concatIndexes(other._index, other._types.index);
    const data = this.concatData(other._data, other._types.data);
    const types = this.concatTypes(other._types);

    // If we get here, then we had no concatenation errors.
    return produce(this, draft => {
      draft._index = index;
      draft._data = data;
      draft._types = types;
    });
  }
  static parseFields(schema) {
    // None-index data columns are listed first, and all index columns listed last
    // within the fields array in arrow.
    return Object.fromEntries((schema.fields || []).map((field, index) => [field.name.startsWith("__index_level_") ? field.name : String(index), field]));
  }
}
//# sourceMappingURL=Quiver.js.map