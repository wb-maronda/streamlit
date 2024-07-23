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
import { LabelVisibilityOptions } from "@streamlit/lib/src/util/utils";
export interface BaseColorPickerProps {
    disabled: boolean;
    width?: number;
    value: string;
    showValue?: boolean;
    label: string;
    labelVisibility?: LabelVisibilityOptions;
    onChange: (value: string) => any;
    help?: string;
}
interface State {
    /**
     * The value specified by the user via the UI. If the user didn't touch this
     * widget's UI, the default value is used.
     */
    value: string;
}
declare class BaseColorPicker extends React.PureComponent<BaseColorPickerProps, State> {
    state: State;
    componentDidUpdate(prevProps: BaseColorPickerProps): void;
    private onColorChange;
    private onColorClose;
    componentDidCatch(error: Error): void;
    render(): React.ReactNode;
}
export default BaseColorPicker;
