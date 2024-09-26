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
import { IconSize, ThemeColor } from "@streamlit/lib/src/theme";
/**
 *
 * @returns returns an img tag with a yellow filled star icon svg as base64 data
 */
export declare function getFilledStarIconSrc(): string;
export interface DynamicIconProps {
    iconValue: string;
    size?: IconSize;
    margin?: string;
    padding?: string;
    testid?: string;
    color?: ThemeColor;
}
export declare const DynamicIcon: (props: DynamicIconProps) => React.ReactElement;
