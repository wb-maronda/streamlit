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
import React, { ReactElement } from "react";
import { Figure as PlotlyFigureType } from "react-plotly.js";
import { EmotionTheme } from "@streamlit/lib/src/theme";
import { PlotlyChart as PlotlyChartProto } from "@streamlit/lib/src/proto";
import { WidgetStateManager } from "@streamlit/lib/src/WidgetStateManager";
export interface SelectionRange {
    x: number[];
    y: number[];
}
export interface PlotlySelection extends SelectionRange {
    xref: string;
    yref: string;
}
export interface PlotlyWidgetState {
    selection: {
        points: Array<any>;
        point_indices: number[];
        box: PlotlySelection[];
        lasso: PlotlySelection[];
    };
}
/**
 * Parses an SVG path string into separate x and y coordinates.
 *
 * The function takes a single SVG path string as input. This path string should start with 'M'
 * (move to command), followed by pairs of x and y coordinates separated by commas, and optionally
 * end with 'Z' to close the path. Each pair of coordinates is separated by 'L' (line to command).
 *
 * Example Input:
 * "M4.016412414518674,8.071685352641575L4.020620725933719,7.8197516509841165Z"
 *
 * Example Output:
 * {
 *   x: [4.016412414518674, 4.020620725933719],
 *   y: [8.071685352641575, 7.8197516509841165]
 * }
 *
 * @param {string} pathData - The SVG path string to be parsed.
 * @returns {SelectionRange} An object containing two arrays: `x` for all x coordinates and `y` for all y coordinates.
 */
export declare function parseLassoPath(pathData: string): SelectionRange;
/**
 * Parses a box selection object into separate x and y coordinates.
 *
 * The function takes a box selection object as input. This object should contain the following
 * fields: x0, x1, y0, y1. These fields represent the x and y coordinates of the box selection
 * in the plotly chart.
 *
 * Example Input:
 * {
 *   x0: 0.1,
 *   x1: 0.2,
 *   y0: 0.3,
 *   y1: 0.4
 * }
 *
 * Example Output:
 * {
 *   x: [0.1, 0.2],
 *   y: [0.3, 0.4]
 * }
 *
 * @param {Object} selection - The box selection object to be parsed.
 * @returns {SelectionRange} An object containing two arrays: `x` for all x coordinates and `y` for all y coordinates.
 */
export declare function parseBoxSelection(selection: any): SelectionRange;
/**
 * Apply theming to the Plotly figure.
 *
 * @param plotlyFigure The Plotly figure to apply theming to
 * @param chartTheme The theme of the chart (streamlit or empty string)
 * @param theme The current theme of the app
 * @returns The Plotly figure with theming applied
 */
export declare function applyTheming(plotlyFigure: PlotlyFigureType, chartTheme: string, theme: EmotionTheme): PlotlyFigureType;
/**
 * Handles the selection event from Plotly and sends the selection state to the backend.
 * The selection state is sent as a stringified JSON object.
 *
 * @param event The Plotly selection event
 * @param widgetMgr The widget manager
 * @param element The PlotlyChartProto element
 * @param fragmentId The fragment id
 */
export declare function handleSelection(event: Readonly<Plotly.PlotSelectionEvent>, widgetMgr: WidgetStateManager, element: PlotlyChartProto, fragmentId: string | undefined): void;
/**
 * Sends an empty selection state to the backend.
 * This is used to reset the selection state in the widget.
 *
 * @param widgetMgr The widget manager
 * @param element The PlotlyChartProto element
 * @param fragmentId The fragment id
 */
export declare function sendEmptySelection(widgetMgr: WidgetStateManager, element: PlotlyChartProto, fragmentId: string | undefined): void;
export interface PlotlyChartProps {
    width: number;
    element: PlotlyChartProto;
    height?: number;
    widgetMgr: WidgetStateManager;
    disabled: boolean;
    fragmentId?: string;
    isFullScreen: boolean;
    expand?: () => void;
    collapse?: () => void;
    disableFullscreenMode?: boolean;
}
export declare function PlotlyChart({ element, width, height, widgetMgr, disabled, fragmentId, isFullScreen, expand, collapse, disableFullscreenMode, }: Readonly<PlotlyChartProps>): ReactElement;
declare const _default: React.ComponentType<React.PropsWithChildren<{
    height?: number | undefined;
    width: number;
    readonly disabled: boolean;
    readonly element: PlotlyChartProto;
    disableFullscreenMode?: boolean | undefined;
    readonly widgetMgr: WidgetStateManager;
    readonly fragmentId?: string | undefined;
}>>;
export default _default;
