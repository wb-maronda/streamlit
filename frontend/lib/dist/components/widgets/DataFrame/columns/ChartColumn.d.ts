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
import { BaseColumn, BaseColumnProps } from "./utils";
export declare const LINE_CHART_TYPE = "line_chart";
export declare const AREA_CHART_TYPE = "area_chart";
export declare const BAR_CHART_TYPE = "bar_chart";
export interface ChartColumnParams {
    readonly y_min?: number;
    readonly y_max?: number;
}
/**
 * A column type that renders the cell value as a line-chart.
 * The data is expected to be a numeric array.
 *
 * This column type is currently read-only.
 */
export declare function LineChartColumn(props: BaseColumnProps): BaseColumn;
export declare namespace LineChartColumn {
    var isEditableType: boolean;
}
/**
 * A column type that renders the cell value as a bar-chart.
 * The data is expected to be a numeric array.
 *
 * This column type is currently read-only.
 */
export declare function BarChartColumn(props: BaseColumnProps): BaseColumn;
export declare namespace BarChartColumn {
    var isEditableType: boolean;
}
/**
 * A column type that renders the cell value as an area-chart.
 * The data is expected to be a numeric array.
 *
 * This column type is currently read-only.
 */
export declare function AreaChartColumn(props: BaseColumnProps): BaseColumn;
export declare namespace AreaChartColumn {
    var isEditableType: boolean;
}
