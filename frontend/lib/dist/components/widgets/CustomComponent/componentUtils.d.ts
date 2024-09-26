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
/// <reference types="react" />
import { ComponentInstance as ComponentInstanceProto, ISpecialArg } from "@streamlit/lib/src/proto";
import { EmotionTheme } from "@streamlit/lib/src/theme";
import { WidgetStateManager } from "@streamlit/lib/src/WidgetStateManager";
export type ValueType = "bytes" | "dataframe" | "json";
type ReadyMessage = {
    apiVersion: number;
};
type ComponentValueMessage = {
    value: any;
    dataType: ValueType;
};
type FrameHeightMessage = {
    height: number;
};
export type IframeMessage = ReadyMessage | ComponentValueMessage | FrameHeightMessage;
export interface IframeMessageHandlerProps {
    isReady: () => boolean;
    element: ComponentInstanceProto;
    widgetMgr: WidgetStateManager;
    setComponentError: (error: Error) => void;
    componentReadyCallback: () => void;
    frameHeightCallback: (height: number | undefined) => void;
    fragmentId?: string;
}
export interface Args {
    [name: string]: any;
}
export interface DataframeArg {
    key: string;
    value: any;
}
/**
 * The current custom component API version. If our API changes,
 * this value must be incremented. ComponentInstances send their API
 * version in the COMPONENT_READY call.
 */
export declare const CUSTOM_COMPONENT_API_VERSION = 1;
/**
 * Create a callback to be passed to  {@link ComponentRegistry#registerListener}.
 * The passed callbacks RefObject is used in the returned function to access
 * the current fields of the reference when the callback is executed by the ComponentRegistry.
 * This ref-approach allows us to register the listener callback in a functional component only once
 * instead of keeping registering / unregistering multiple times.
 *
 * @param callbacks a ref object containing actual callbacks
 * @returns the callback function to be passed to {@link ComponentRegistry#registerListener}
 */
export declare function createIframeMessageHandler(callbacks: React.RefObject<IframeMessageHandlerProps | undefined>): (type: string, data: IframeMessage) => void;
/**
 * Parse incoming arguments and bring them into a new form.
 *
 * The `jsonArgs` are parsed to a JSON object.
 * The `specialArgs` are transformed:
 * - `specialArgs[{ key, value: 'arrowdataframe', arrowDataFrame }]` to `dataFrameArgs[{ key, value: arrowDataFrame }]`
 * - `specialArgs[{ key, value: 'bytes', bytes }]` to `newArgs{key: bytes}`
 *
 * This means that byte-values from `specialArgs` override entries in `jsonArgs` when having the same key
 *
 * @param jsonArgs JSON-string
 * @param specialArgs array of objects that hold special-typed values
 * @throws Error when `specialArgs` contains unrecognized type
 * @returns
 */
export declare function parseArgs(jsonArgs: string, specialArgs: ISpecialArg[]): [newArgs: Args, dataframeArgs: DataframeArg[]];
/**
 * Send a RENDER message to the component with the most recent arguments
 * received from Python.
 */
export declare function sendRenderMessage(currentArgs: Args, currentDataframeArgs: DataframeArg[], disabled: boolean, theme: EmotionTheme, iframe?: HTMLIFrameElement): void;
export {};
