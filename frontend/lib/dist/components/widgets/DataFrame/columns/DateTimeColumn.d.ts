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
import "moment-timezone";
import { BaseColumn, BaseColumnProps } from "./utils";
export interface DateTimeColumnParams {
    readonly format?: string;
    readonly step?: number;
    readonly timezone?: string;
    readonly min_value?: string;
    readonly max_value?: string;
}
/**
 * Creates a new datetime column.
 * A datetime column supports optimized rendering and editing for datetime values.
 *
 * @param props The column properties.
 * @returns The new column.
 */
declare function DateTimeColumn(props: BaseColumnProps): BaseColumn;
declare namespace DateTimeColumn {
    var isEditableType: boolean;
}
export default DateTimeColumn;
/**
 * Creates a new time column.
 * A time column supports optimized rendering and editing for time values.
 *
 * @param props The column properties.
 * @returns The new column.
 */
export declare function TimeColumn(props: BaseColumnProps): BaseColumn;
export declare namespace TimeColumn {
    var isEditableType: boolean;
}
/**
 * Creates a new date column.
 * A date column supports optimized rendering and editing for date values.
 *
 * @param props The column properties.
 * @returns The new column.
 */
export declare function DateColumn(props: BaseColumnProps): BaseColumn;
export declare namespace DateColumn {
    var isEditableType: boolean;
}
