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
import { Size as ResizableSize } from "re-resizable";
import { Arrow as ArrowProto } from "@streamlit/lib/src/proto";
export declare const MIN_COLUMN_WIDTH = 50;
export declare const MAX_COLUMN_WIDTH = 1000;
export declare const MAX_COLUMN_AUTO_WIDTH = 500;
export declare const BORDER_THRESHOLD = 2;
export declare const ROW_HEIGHT = 35;
export type AutoSizerReturn = {
    minHeight: number;
    maxHeight: number;
    minWidth: number;
    maxWidth: number;
    resizableSize: ResizableSize;
    setResizableSize: React.Dispatch<React.SetStateAction<ResizableSize>>;
};
export declare function calculateMaxHeight(numRows: number): number;
/**
 * A custom React hook that manages all aspects related to the size of the table.
 *
 * @param element - The ArrowProto element
 * @param numRows - The number of rows in the table
 * @param containerWidth - The width of the surrounding container
 * @param containerHeight - The height of the surrounding container
 * @param isFullScreen - Whether the table is in fullscreen mode
 *
 * @returns The row height, min/max height & width, and the current size of the resizable container.
 */
declare function useTableSizer(element: ArrowProto, numRows: number, containerWidth: number, containerHeight?: number, isFullScreen?: boolean): AutoSizerReturn;
export default useTableSizer;
