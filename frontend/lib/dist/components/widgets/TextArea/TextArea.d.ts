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
import { TextArea as TextAreaProto } from "@streamlit/lib/src/proto";
import { WidgetStateManager } from "@streamlit/lib/src/WidgetStateManager";
import { EmotionTheme } from "@streamlit/lib/src/theme";
export interface Props {
    disabled: boolean;
    element: TextAreaProto;
    widgetMgr: WidgetStateManager;
    width: number;
    theme: EmotionTheme;
    fragmentId?: string;
}
declare const _default: React.FC<Pick<Props, "width" | "disabled" | "element" | "widgetMgr" | "fragmentId"> & {
    theme?: import("@emotion/react").Theme | undefined;
}>;
export default _default;
