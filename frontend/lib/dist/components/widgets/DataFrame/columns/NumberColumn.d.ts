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
export interface NumberColumnParams {
    readonly min_value?: number;
    readonly max_value?: number;
    readonly format?: string;
    readonly step?: number;
}
/**
 * A column types that supports optimized rendering and editing for numbers.
 * This supports float, integer, and unsigned integer types.
 */
declare function NumberColumn(props: BaseColumnProps): BaseColumn;
declare namespace NumberColumn {
    var isEditableType: boolean;
}
export default NumberColumn;
