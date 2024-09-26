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
import { GridSelection } from "@glideapps/glide-data-grid";
import { BaseColumn } from "@streamlit/lib/src/components/widgets/DataFrame/columns";
import { Arrow as ArrowProto } from "@streamlit/lib/src/proto";
export type SelectionHandlerReturn = {
    gridSelection: GridSelection;
    isRowSelectionActivated: boolean;
    isMultiRowSelectionActivated: boolean;
    isColumnSelectionActivated: boolean;
    isMultiColumnSelectionActivated: boolean;
    isRowSelected: boolean;
    isColumnSelected: boolean;
    isCellSelected: boolean;
    clearSelection: (keepRows?: boolean, keepColumns?: boolean) => void;
    processSelectionChange: (newSelection: GridSelection) => void;
};
/**
 * Custom hook that handles all selection capabilities for the interactive data table.
 *
 * @param element - The Arrow proto message
 * @param isEmptyTable - Whether the table is empty
 * @param isDisabled - Whether the table is disabled
 * @param columns - The columns of the table.
 * @param syncSelectionState - The callback to sync the selection state
 *
 * @returns the selection handler return object
 */
declare function useSelectionHandler(element: ArrowProto, isEmptyTable: boolean, isDisabled: boolean, columns: BaseColumn[], syncSelectionState: (newSelection: GridSelection) => void): SelectionHandlerReturn;
export default useSelectionHandler;
