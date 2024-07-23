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
import { EmotionTheme } from "@streamlit/lib/src/theme";
export interface Props {
    disabled: boolean;
    width?: number;
    value: number | null;
    onChange: (value: number | null) => void;
    options: any[];
    label?: string | null;
    labelVisibility?: LabelVisibilityOptions;
    help?: string;
    placeholder?: string;
    clearable?: boolean;
    theme: EmotionTheme;
}
interface State {
    isEmpty: boolean;
    /**
     * The value specified by the user via the UI. If the user didn't touch this
     * widget's UI, the default value is used.
     */
    value: number | null;
}
interface SelectOption {
    label: string;
    value: string;
}
export declare function fuzzyFilterSelectOptions(options: SelectOption[], pattern: string): readonly SelectOption[];
export declare class Selectbox extends React.PureComponent<Props, State> {
    state: State;
    componentDidUpdate(prevProps: Readonly<Props>): void;
    private onChange;
    /**
     * Both onInputChange and onClose handle the situation where
     * the user has hit backspace enough times that there's nothing
     * left in the input, but we don't want the value for the input
     * to then be invalid once they've clicked away
     */
    private onInputChange;
    private onClose;
    private filterOptions;
    render(): React.ReactNode;
}
declare const _default: React.FC<Pick<Props, "label" | "width" | "value" | "help" | "disabled" | "onChange" | "placeholder" | "labelVisibility" | "options" | "clearable"> & {
    theme?: import("@emotion/react").Theme | undefined;
}>;
export default _default;
