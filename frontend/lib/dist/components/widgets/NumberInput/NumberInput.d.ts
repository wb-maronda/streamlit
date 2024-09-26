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
/**
 * Utilizes the sprintf library to format a number value
 * according to a given format string.
 */
export declare const formatValue: ({ value, format, step, dataType, }: {
    value: number | null;
    format?: string | null | undefined;
    step?: number | undefined;
    dataType: NumberInputProto.DataType;
}) => string | null;
export declare const canDecrement: (value: number | null, step: number, min: number) => boolean;
export declare const canIncrement: (value: number | null, step: number, max: number) => boolean;
export interface Props {
    disabled: boolean;
    element: NumberInputProto;
    widgetMgr: WidgetStateManager;
    width: number;
    theme: EmotionTheme;
    fragmentId?: string;
}
export declare const NumberInput: React.FC<Props>;
declare const _default: React.FC<Pick<Props, "width" | "disabled" | "element" | "widgetMgr" | "fragmentId"> & {
    theme?: import("@emotion/react").Theme | undefined;
}>;
export default _default;
