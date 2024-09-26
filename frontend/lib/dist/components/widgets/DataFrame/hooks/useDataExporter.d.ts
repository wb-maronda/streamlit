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
import { DataEditorProps } from "@glideapps/glide-data-grid";
import { BaseColumn } from "@streamlit/lib/src/components/widgets/DataFrame/columns";
export declare function toCsvRow(rowValues: any[]): string;
type DataExporterReturn = {
    exportToCsv: () => void;
};
/**
 * Custom hook that handles all the data export/download logic.
 *
 * @param getCellContent - The cell content getter compatible with glide-data-grid.
 * @param columns - The columns of the table.
 * @param numRows - The number of rows of the current state.
 *
 * @returns a callback to trigger the data download as CSV.
 */
declare function useDataExporter(getCellContent: DataEditorProps["getCellContent"], columns: BaseColumn[], numRows: number, enforceDownloadInNewTab: boolean): DataExporterReturn;
export default useDataExporter;
