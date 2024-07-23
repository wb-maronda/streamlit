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
import { isErrorCell } from "./utils";
import ProgressColumn from "./ProgressColumn";
const PROGRESS_COLUMN_TEMPLATE = {
  id: "1",
  name: "progress_column",
  title: "Progress column",
  indexNumber: 0,
  isEditable: false,
  isHidden: false,
  isIndex: false,
  isStretched: false,
  arrowType: {
    // The arrow type of the underlying data is
    // not used for anything inside the column.
    pandas_type: "float64",
    numpy_type: "float64"
  }
};
function getProgressColumn(params) {
  return ProgressColumn({
    ...PROGRESS_COLUMN_TEMPLATE,
    columnTypeOptions: params
  });
}
describe("ProgressColumn", () => {
  it("creates a valid column instance", () => {
    var _data, _data2;
    const mockColumn = getProgressColumn();
    expect(mockColumn.kind).toEqual("progress");
    expect(mockColumn.title).toEqual(PROGRESS_COLUMN_TEMPLATE.title);
    expect(mockColumn.id).toEqual(PROGRESS_COLUMN_TEMPLATE.id);
    expect(mockColumn.sortMode).toEqual("smart");

    // Column should be readonly:
    expect(mockColumn.isEditable).toEqual(false);
    const mockCell = mockColumn.getCell(0.5);
    expect(mockCell.kind).toEqual(GridCellKind.Custom);
    expect((_data = mockCell.data) === null || _data === void 0 ? void 0 : _data.value).toEqual(0.5);
    expect((_data2 = mockCell.data) === null || _data2 === void 0 ? void 0 : _data2.label).toEqual("50.00%");
  });
  it("supports configuring min/max scale", () => {
    var _data3, _data4;
    const mockColumn = getProgressColumn();
    const mockCell = mockColumn.getCell(50);
    // Default min/max scale is 0/1 so the value should be at the maximum
    expect((_data3 = mockCell.data) === null || _data3 === void 0 ? void 0 : _data3.value).toEqual(1);

    // Use a different scale
    const mockColumn1 = getProgressColumn({
      min_value: -100,
      max_value: 100
    });
    const mockCell1 = mockColumn1.getCell(50);
    // The value fits into the scale, so don't do anything:
    expect((_data4 = mockCell1.data) === null || _data4 === void 0 ? void 0 : _data4.value).toEqual(50);

    // Use a different scale
    const mockColumn2 = getProgressColumn({
      min_value: 100,
      max_value: -100
    });
    const mockCell2 = mockColumn2.getCell(50);
    // min needs to be bigger than max, so this should be an error cell:
    expect(isErrorCell(mockCell2)).toEqual(true);

    // Use a different scale
    const mockColumn3 = getProgressColumn({
      min_value: undefined,
      max_value: -100
    });
    const mockCell3 = mockColumn3.getCell(50);
    // min and max need to be defined, so this should be an error cell:
    expect(isErrorCell(mockCell3)).toEqual(true);
  });
  it.each([
  // Supports almost the same as toSafeNumber
  [null, null], [undefined, null], ["", null], [[], null], ["0.1", 0.1], [0.1234, 0.1234]])("supports number-compatible value (%p parsed as %p)", (input, value) => {
    const mockColumn = getProgressColumn();
    const cell = mockColumn.getCell(input);
    expect(mockColumn.getCellValue(cell)).toEqual(value);
  });
  it.each([["foo"], [[]], ["foo"], [[1, 2]], ["123.124.123"], ["--123"], ["2,,2"]])("%p results in error cell", input => {
    const mockColumn = getProgressColumn();
    const cell = mockColumn.getCell(input);
    expect(isErrorCell(cell)).toEqual(true);
  });
  it.each([
  // This should support everything that is supported by formatNumber
  // So we are not testing all the cases here, just a few to make sure it works
  // All other cases are tested for formatNumber in utils.test.ts
  [10.123, "%d", "10"], [10.123, "%i", "10"], [10.123, "%u", "10"], [10.123, "%f", "10.123"], [10.123, "%g", "10.123"], [10, "$%.2f", "$10.00"], [10.126, "$%.2f", "$10.13"], [10.123, "%.2f€", "10.12€"], [10.126, "($%.2f)", "($10.13)"], [65, "%d years", "65 years"], [1234567898765432, "%d ⭐", "1234567898765432 ⭐"], [72.3, "%.1f%%", "72.3%"], [-5.678, "%.1f", "-5.7"], [0.12, "percent", "12.00%"], [1100, "compact", "1.1K"]])("formats %p with sprintf format %p to %p", (input, format, displayValue) => {
    const mockColumn = getProgressColumn({
      format
    });
    const cell = mockColumn.getCell(input);
    expect(cell.data.label).toEqual(displayValue);
  });
  it("shows an error cell if the numeric value is too large", () => {
    const mockColumn = getProgressColumn();
    const unsafeCell = mockColumn.getCell("1234567898765432123");
    expect(isErrorCell(unsafeCell)).toEqual(true);
    expect(unsafeCell === null || unsafeCell === void 0 ? void 0 : unsafeCell.data).toEqual("⚠️ 1234567898765432123\n\nThe value is larger than the maximum supported integer values in number columns (2^53).\n");
  });
  it.each([[10, "%d %d"], [1234567.89, "%'_,.2f"], [1234.5678, "%+.2E"], [0.000123456, "%+.2E"], [-0.000123456, "%+.2E"], [255, "%#x"], [4096, "%#X"], [42, "% d"], [1000, "%,.0f"], [25000.25, "$%,.2f"], [9876543210, "%,.0f"]])("cannot format %p using the sprintf format %p", (input, format) => {
    const mockColumn = getProgressColumn({
      format
    });
    const cell = mockColumn.getCell(input);
    expect(isErrorCell(cell)).toEqual(true);
  });
  it("correctly formats float values to percentage", () => {
    var _data5, _data6, _data7, _data8, _data9;
    const mockColumn = getProgressColumn();
    const mockCell = mockColumn.getCell(0.52356);
    expect((_data5 = mockCell.data) === null || _data5 === void 0 ? void 0 : _data5.min).toEqual(0);
    expect((_data6 = mockCell.data) === null || _data6 === void 0 ? void 0 : _data6.max).toEqual(1);
    expect((_data7 = mockCell.data) === null || _data7 === void 0 ? void 0 : _data7.step).toEqual(0.01);
    // Correctly formats float values to percentage:
    expect((_data8 = mockCell.data) === null || _data8 === void 0 ? void 0 : _data8.value).toEqual(0.52356);
    expect((_data9 = mockCell.data) === null || _data9 === void 0 ? void 0 : _data9.label).toEqual("52.36%");
  });
  it("correctly formats int values to percentage", () => {
    var _data10, _data11, _data12, _data13, _data14;
    const mockColumn = ProgressColumn({
      ...PROGRESS_COLUMN_TEMPLATE,
      arrowType: {
        pandas_type: "int64",
        numpy_type: "int64"
      }
    });
    const mockCell = mockColumn.getCell(52);
    expect((_data10 = mockCell.data) === null || _data10 === void 0 ? void 0 : _data10.min).toEqual(0);
    expect((_data11 = mockCell.data) === null || _data11 === void 0 ? void 0 : _data11.max).toEqual(100);
    expect((_data12 = mockCell.data) === null || _data12 === void 0 ? void 0 : _data12.step).toEqual(1);
    // Correctly formats int values to percentage:
    expect((_data13 = mockCell.data) === null || _data13 === void 0 ? void 0 : _data13.value).toEqual(52);
    expect((_data14 = mockCell.data) === null || _data14 === void 0 ? void 0 : _data14.label).toEqual(" 52%");
  });
});
//# sourceMappingURL=ProgressColumn.test.js.map