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
import { DataEditorProps, GridCell } from "@glideapps/glide-data-grid";
import { BaseColumn } from "@streamlit/lib/src/components/widgets/DataFrame/columns";
import EditingState from "@streamlit/lib/src/components/widgets/DataFrame/EditingState";
/**
 * Create return type for useDataLoader hook based on the DataEditorProps.
 */
type DataEditorReturn = Pick<DataEditorProps, "onCellEdited" | "onPaste" | "onRowAppended" | "onDelete" | "validateCell">;
/**
 * Custom hook to handle all aspects related to data editing. This includes editing cells,
 * pasting from clipboard, and appending & deleting rows.
 *
 * @param columns - The columns of the table.
 * @param fixedNumRows - Whether the number of rows is fixed. This means that rows cannot be added or deleted.
 * @param editingState - The editing state of the data editor.
 * @param getCellContent - Function to get a specific cell.
 * @param getOriginalIndex - Function to map a row ID of the current state to the original row ID.
 *                           This mainly changed by sorting of columns.
 * @param updateNumRows - Callback to sync the number of rows from editing state with the component state.
 * @param refreshCells - Callback that allows to trigger a UI refresh of a selection of cells.
 * @param syncEditState - Callback that needs to be called on all edits. This will also trigger a rerun
 *                     and send widget state to the backend.
 *
 * @returns Glide-data-grid compatible functions for editing capabilities.
 */
declare function useDataEditor(columns: BaseColumn[], fixedNumRows: boolean, editingState: React.MutableRefObject<EditingState>, getCellContent: ([col, row]: readonly [number, number]) => GridCell, getOriginalIndex: (index: number) => number, refreshCells: (cells: {
    cell: [number, number];
}[]) => void, updateNumRows: () => void, syncEditState: () => void, clearSelection: () => void): DataEditorReturn;
export default useDataEditor;
