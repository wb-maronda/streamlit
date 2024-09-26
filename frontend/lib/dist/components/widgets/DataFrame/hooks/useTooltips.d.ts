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
import { DataEditorProps, GridCell } from "@glideapps/glide-data-grid";
import { BaseColumn } from "@streamlit/lib/src/components/widgets/DataFrame/columns";
export declare const DEBOUNCE_TIME_MS = 600;
export declare const REQUIRED_CELL_TOOLTIP = "\u26A0\uFE0F Please fill out this cell.";
export type TooltipsReturn = {
    tooltip: {
        content: string;
        left: number;
        top: number;
    } | undefined;
    clearTooltip: () => void;
} & Pick<DataEditorProps, "onItemHovered">;
/**
 * Hook that can show a tooltip when hovering over a cell or header if configured.
 *
 * The tooltip is shown after a delay, and is cleared when the user clicks outside,
 * fires escape, or moves outside of the target cell.
 *
 * @param columns columns of the datagrid
 * @param getCellContent function that returns the cell content for a given cell position
 * @returns the tooltip to show (if any), a callback to clear the tooltip, and the
 * onItemHovered callback to pass to the datagrid
 */
declare function useTooltips(columns: BaseColumn[], getCellContent: ([col, row]: readonly [number, number]) => GridCell): TooltipsReturn;
export default useTooltips;
