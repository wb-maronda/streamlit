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
import { BaseDrawArgs, DataEditorProps, Theme as GlideTheme, Rectangle } from "@glideapps/glide-data-grid";
import { BaseColumn } from "@streamlit/lib/src/components/widgets/DataFrame/columns";
/**
 * Draw a red indicator in the top right corner of the cell
 * to indicate that the cell is required.
 */
export declare function drawRequiredIndicator(ctx: CanvasRenderingContext2D, rect: Rectangle, theme: GlideTheme): void;
/**
 * If a cell is marked as missing, we draw a placeholder symbol with a faded text color.
 */
export declare const drawMissingPlaceholder: (args: BaseDrawArgs) => void;
/**
 * Create return type for useCustomRenderer hook based on the DataEditorProps.
 */
type CustomRendererReturn = Pick<DataEditorProps, "drawCell" | "customRenderers">;
/**
 * Custom hook that creates some custom cell renderers compatible with glide-data-grid.
 *
 * This includes capabilities like showing a faded placeholder for missing values or
 * a red indicator for required cells.
 *
 * @param columns - The columns of the table.
 *
 * @returns An object containing the following properties:
 * - `drawCell`: A function that overwrites some rendering that can be
 *    passed to the `DataEditor` component.
 * - `customRenderers`: A map of custom cell renderers used by custom cells
 *    that can be passed to the `DataEditor` component.
 */
declare function useCustomRenderer(columns: BaseColumn[]): CustomRendererReturn;
export default useCustomRenderer;
