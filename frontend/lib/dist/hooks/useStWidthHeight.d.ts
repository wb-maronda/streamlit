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
import { CSSProperties } from "react";
type StWidthHeightArgs = {
    container: {
        height?: CSSProperties["height"];
        width?: CSSProperties["width"];
    };
    element: {
        height?: CSSProperties["height"];
        width?: CSSProperties["width"];
    };
    heightFallback?: CSSProperties["height"];
    isFullScreen: boolean;
    shouldUseContainerWidth: boolean;
    widthFallback?: CSSProperties["width"];
};
type StWidthHeightShape = {
    height: number | string;
    width: number | string;
};
/**
 * Determines the width and height to use for a given element based on the
 * Streamlit conditions in which it's being rendered.
 *
 * @returns {Object} An object with `width` and `height` properties.
 */
export declare const useStWidthHeight: ({ container, element, heightFallback, isFullScreen, shouldUseContainerWidth, widthFallback, }: StWidthHeightArgs) => StWidthHeightShape;
export {};
