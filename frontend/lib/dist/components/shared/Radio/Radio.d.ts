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
import { LabelVisibilityOptions } from "@streamlit/lib/src/util/utils";
export interface Props {
    disabled: boolean;
    horizontal: boolean;
    width?: number;
    value: number | null;
    onChange: (selectedIndex: number) => any;
    options: any[];
    captions: any[];
    label?: string;
    labelVisibility?: LabelVisibilityOptions;
    help?: string;
}
declare function Radio({ disabled, horizontal, width, value: defaultValue, onChange, options, captions, label, labelVisibility, help, }: Readonly<Props>): ReactElement;
declare const _default: React.MemoExoticComponent<typeof Radio>;
export default _default;
