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
import { EmotionTheme } from "@streamlit/lib/src/theme";
export interface ToastProps {
    theme: EmotionTheme;
    body: string;
    icon?: string;
    width: number;
}
export declare function shortenMessage(fullMessage: string): string;
export declare function Toast({ theme, body, icon, width }: ToastProps): ReactElement;
declare const _default: React.FC<Pick<ToastProps, "body" | "width" | "icon"> & {
    theme?: import("@emotion/react").Theme | undefined;
}>;
export default _default;
