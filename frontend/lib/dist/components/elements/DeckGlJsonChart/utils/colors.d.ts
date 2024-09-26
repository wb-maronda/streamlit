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
/**
 * @file Utilities for determining fill colors for layers based on their
 *      selection state and the layer's selection color mode.
 */
/**
 * Maps the "@@type" of a layer to the corresponding fill functions.
 *
 * Note that this mapping is not exhaustive and only includes the layers that we
 * can actually change the color of.
 */
export declare const LAYER_TYPE_TO_FILL_FUNCTION: {
    [x: string]: string[];
};
type SerializedColorValue = string | number;
export type SerializedColorArray = [
    SerializedColorValue?,
    SerializedColorValue?,
    SerializedColorValue?,
    SerializedColorValue?
];
type ObjectCallbackShape<T = unknown> = {
    object: T;
    objectInfo: {
        index: number;
    };
};
export type FillFunction<T = unknown> = (object: ObjectCallbackShape<T>["object"], objectInfo: ObjectCallbackShape<T>["objectInfo"]) => SerializedColorArray | SerializedColorValue;
type FillFunctionArgs<T = unknown> = ObjectCallbackShape<T> & {
    originalFillFunction: FillFunction<T> | undefined;
};
/**
 * Determines the fill color for an object based on its selection state and the
 * layer's selection color mode.
 */
export declare const getContextualFillColor: ({ isSelected, object, objectInfo, originalFillFunction, selectedColor, selectedOpacity, unselectedColor, unselectedOpacity, }: {
    isSelected: boolean;
    /** Fallback color in case there are issues in parsing the color for the current object */
    selectedColor: SerializedColorArray;
    /** How much opacity should be applied to the selected item. Defaults to 100% */
    selectedOpacity?: number | undefined;
    /** Fallback color in case there are issues in parsing the color for the current object */
    unselectedColor: SerializedColorArray;
    /** How much opacity should be applied to the not selected items. Defaults to 40% */
    unselectedOpacity?: number | undefined;
} & ObjectCallbackShape<unknown> & {
    originalFillFunction: FillFunction<unknown> | undefined;
}) => SerializedColorArray | SerializedColorValue;
export {};
