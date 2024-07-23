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
export interface SelectboxColumnParams {
    /** A list of options available in the selectbox.
     * Every value in the column needs to match one of the options.
     */
    readonly options: (string | number | boolean)[];
}
/**
 * A column type that supports optimized rendering and editing for categorical values
 * by using a selectbox. This is automatically used by categorical columns (Pandas).
 *
 */
declare function SelectboxColumn(props: BaseColumnProps): BaseColumn;
declare namespace SelectboxColumn {
    var isEditableType: boolean;
}
export default SelectboxColumn;
