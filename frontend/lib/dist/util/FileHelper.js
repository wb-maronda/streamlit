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

import { isFromWindows } from "./utils";
export let FileSize;

// There is a shift towards displaying storage in base 10 vs base 2
// but Windows is still displaying things in base 2. This does not handle
// all cases but for simplicity general rule is to use base 2 for Windows.
(function (FileSize) {
  FileSize["Gigabyte"] = "gb";
  FileSize["Megabyte"] = "mb";
  FileSize["Kilobyte"] = "kb";
  FileSize["Byte"] = "b";
})(FileSize || (FileSize = {}));
export const BYTE_CONVERSION_SIZE = isFromWindows() ? 1024 : 1000;
const sizeUnitSequence = [FileSize.Gigabyte, FileSize.Megabyte, FileSize.Kilobyte, FileSize.Byte];
export const getSizeDisplay = function (size, unit) {
  let rounding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  if (!unit) {
    unit = FileSize.Byte;
  }
  if (rounding < 0) {
    rounding = 0;
  }
  if (size < 0) {
    throw new Error("Size must be greater than or equal to 0");
  }
  const sizeIndex = sizeUnitSequence.indexOf(unit);
  const nextUnitSize = size / BYTE_CONVERSION_SIZE;
  if (sizeIndex && size > BYTE_CONVERSION_SIZE / 2) {
    return getSizeDisplay(nextUnitSize, sizeUnitSequence[sizeIndex - 1], rounding);
  }
  return "".concat(size.toFixed(rounding)).concat(unit.toUpperCase());
};
export const sizeConverter = (size, inputUnit, outputUnit) => {
  if (size < 0) {
    throw Error("Size must be 0 or greater");
  }
  const inputLevel = sizeUnitSequence.findIndex(unit => unit === inputUnit);
  const outputLevel = sizeUnitSequence.findIndex(unit => unit === outputUnit);
  if (inputLevel === -1 || outputLevel === -1) {
    // Should not ever occur
    throw Error("Unexpected byte unit provided");
  }
  if (inputLevel === outputLevel) {
    return size;
  }
  const levelsBetween = Math.abs(inputLevel - outputLevel);
  const byteDifference = BYTE_CONVERSION_SIZE ** levelsBetween;
  if (inputLevel > outputLevel) {
    // Going from smaller to bigger
    return size / byteDifference;
  }
  // Going from bigger to smaller
  return size * byteDifference;
};
//# sourceMappingURL=FileHelper.js.map