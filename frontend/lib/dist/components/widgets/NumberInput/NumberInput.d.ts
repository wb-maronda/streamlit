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
import { NumberInput as NumberInputProto } from "@streamlit/lib/src/proto";
import { WidgetStateManager } from "@streamlit/lib/src/WidgetStateManager";
import { EmotionTheme } from "@streamlit/lib/src/theme";
export interface Props {
    disabled: boolean;
    element: NumberInputProto;
    widgetMgr: WidgetStateManager;
    width: number;
    theme: EmotionTheme;
    fragmentId?: string;
}
export interface State {
    /**
     * True if the user-specified state.value has not yet been synced to the WidgetStateManager.
     */
    dirty: boolean;
    /**
     * The value specified by the user via the UI. If the user didn't touch this
     * widget's UI, the default value is used.
     */
    value: number | null;
    /**
     * The value with applied format that is going to be shown to the user
     */
    formattedValue: string | null;
    /**
     * True if the input is selected
     */
    isFocused: boolean;
}
export declare class NumberInput extends React.PureComponent<Props, State> {
    private readonly formClearHelper;
    private readonly id;
    private inputRef;
    constructor(props: Props);
    get initialValue(): number | null;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    private maybeUpdateFromProtobuf;
    private updateFromProtobuf;
    private formatValue;
    private isIntData;
    private getMin;
    private getMax;
    private getStep;
    /** Commit state.value to the WidgetStateManager. */
    private commitWidgetValue;
    /**
     * If we're part of a clear_on_submit form, this will be called when our
     * form is submitted. Restore our default value and update the WidgetManager.
     */
    private onFormCleared;
    private onBlur;
    private onFocus;
    private onChange;
    private onKeyDown;
    private onKeyPress;
    /** True if the input's current value can be decremented by its step. */
    private get canDecrement();
    /** True if the input's current value can be incremented by its step. */
    private get canIncrement();
    private modifyValueUsingStep;
    render(): React.ReactNode;
}
declare const _default: React.FC<Pick<Props, "width" | "disabled" | "element" | "widgetMgr" | "fragmentId"> & {
    theme?: import("@emotion/react").Theme | undefined;
}>;
export default _default;
