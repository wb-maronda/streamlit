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
import { toSafeString } from "../columns";
import { isNullOrUndefined } from "../../../../util/utils";
import { logError, logWarning } from "../../../../util/log";

// Delimiter between cells
const CSV_DELIMITER = ",";
// Quote character for cell values containing special characters
const CSV_QUOTE_CHAR = '"';
// The character used to escape the quote character within a cell
const CSV_ESCAPE_CHAR = '"';
// Delimiter between rows (newline)
const CSV_ROW_DELIMITER = "\n";
// Used to indicate Unicode encoding of a text file (for excel compatibility)
const CSV_UTF8_BOM = "\ufeff";
// Regex to check if a value contains special characters that need to be escaped
const CSV_SPECIAL_CHARS_REGEX = new RegExp(`[${[CSV_DELIMITER, CSV_QUOTE_CHAR, CSV_ROW_DELIMITER].join("")}]`);
export function toCsvRow(rowValues) {
  return rowValues.map(cell => escapeValue(cell)).join(CSV_DELIMITER) + CSV_ROW_DELIMITER;
}

/**
 * Escapes a cell value for CSV export.
 *
 * Makes sure that the value is a string, and special characters are escaped correctly.
 */
function escapeValue(value) {
  if (isNullOrUndefined(value)) {
    return "";
  }
  const strValue = toSafeString(value);

  // Special chars need to be escaped:
  if (CSV_SPECIAL_CHARS_REGEX.test(strValue)) {
    // Add quotes around the value:
    return `${CSV_QUOTE_CHAR}${strValue.replace(
    // Escape all quote chars if inside a quoted string:
    new RegExp(CSV_QUOTE_CHAR, "g"), CSV_ESCAPE_CHAR + CSV_QUOTE_CHAR)}${CSV_QUOTE_CHAR}`;
  }
  return strValue;
}
/**
 * Writes CSV data to a specified writable stream using provided data table parameters.
 * Initiates by writing a UTF-8 Byte Order Mark (BOM) for Excel compatibility, followed by
 * column headers and rows constructed from the cell values obtained through `getCellContent`.
 * The function handles encoding and CSV formatting, concluding by closing the writable stream.
 *
 * @param {WritableStreamDefaultWriter} writable - Target stream for CSV data.
 * @param {DataEditorProps["getCellContent"]} getCellContent - The cell content getter compatible with glide-data-grid.
 * @param {BaseColumn[]} columns - The columns of the table.
 * @param {number} numRows - The number of rows of the current state.
 *
 * @returns {Promise<void>} Promise that resolves when the CSV has been fully written.
 */
async function writeCsv(writable, getCellContent, columns, numRows) {
  const textEncoder = new TextEncoder();

  // Write UTF-8 BOM for excel compatibility:
  await writable.write(textEncoder.encode(CSV_UTF8_BOM));

  // Write headers:
  const headers = columns.map(column => column.name);
  await writable.write(textEncoder.encode(toCsvRow(headers)));
  for (let row = 0; row < numRows; row++) {
    const rowData = [];
    columns.forEach((column, col, _map) => {
      rowData.push(column.getCellValue(getCellContent([col, row])));
    });
    // Write row to CSV:
    await writable.write(textEncoder.encode(toCsvRow(rowData)));
  }
  await writable.close();
}
/**
 * Custom hook that handles all the data export/download logic.
 *
 * @param getCellContent - The cell content getter compatible with glide-data-grid.
 * @param columns - The columns of the table.
 * @param numRows - The number of rows of the current state.
 *
 * @returns a callback to trigger the data download as CSV.
 */
function useDataExporter(getCellContent, columns, numRows, enforceDownloadInNewTab) {
  const exportToCsv = React.useCallback(async () => {
    const timestamp = new Date().toISOString().slice(0, 16).replace(":", "-");
    const suggestedName = `${timestamp}_export.csv`;
    try {
      // Lazy import to prevent weird breakage in some niche cases
      // (e.g. usage within the replay.io browser). The package works well
      // in all of the common browser, but might cause some trouble in
      // less common browsers. To not crash the whole app, we just lazy import
      // this here.
      const nativeFileSystemAdapter = await import("native-file-system-adapter");
      const fileHandle = await nativeFileSystemAdapter.showSaveFilePicker({
        suggestedName,
        types: [{
          accept: {
            "text/csv": [".csv"]
          }
        }],
        excludeAcceptAllOption: false
      });
      const writer = await fileHandle.createWritable();
      await writeCsv(writer, getCellContent, columns, numRows);
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        // The user has canceled the save dialog. Do nothing.
        return;
      }
      try {
        logWarning("Failed to export data as CSV with FileSystem API, trying fallback method", error);
        // Simulated WritableStream that builds CSV content in-memory for the Blob fallback method
        let csvContent = "";
        const inMemoryWriter = new WritableStream({
          write: async chunk => {
            csvContent += new TextDecoder("utf-8").decode(chunk);
          },
          close: async () => {}
        });
        await writeCsv(inMemoryWriter.getWriter(), getCellContent, columns, numRows);

        // Fallback to the old browser download method:
        const blob = new Blob([csvContent], {
          type: "text/csv;charset=utf-8;"
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        // Open the download link in a new tab to ensure that this is working in embedded
        // setups that limit the URL that an iframe can navigate to (e.g. via CSP)
        if (enforceDownloadInNewTab) {
          link.setAttribute("target", "_blank");
        } else {
          link.setAttribute("target", "_self");
        }
        link.style.display = "none";
        link.href = url;
        link.download = suggestedName;
        document.body.appendChild(link); // Required for FF
        link.click();
        document.body.removeChild(link); // Clean up
        URL.revokeObjectURL(url); // Free up memory
      } catch (error) {
        logError("Failed to export data as CSV", error);
      }
    }
  }, [columns, numRows, getCellContent, enforceDownloadInNewTab]);
  return {
    exportToCsv
  };
}
export default useDataExporter;
//# sourceMappingURL=useDataExporter.js.map