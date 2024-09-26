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
import { Dispatch, SetStateAction } from "react";
import { Source, WidgetStateManager } from "@streamlit/lib/src/WidgetStateManager";
export type ValueWSource<T> = {
    value: T;
} & Source;
interface ValueElementProtoInterface {
    formId: string;
}
export interface UseValueWSourceArgs<T, // Type of the value stored in WidgetStateManager.
P extends ValueElementProtoInterface> {
    getStateFromWidgetMgr: (wm: WidgetStateManager, el: P) => T | undefined;
    getDefaultState: (wm: WidgetStateManager, el: P) => T;
    updateWidgetMgrState: (el: P, wm: WidgetStateManager, vws: ValueWSource<T>, fragmentId?: string) => void;
    element: P;
    widgetMgr: WidgetStateManager;
    fragmentId?: string;
}
/**
 * A React hook that makes the simplest kinds of widgets very easy to implement.
 * Use the clientState version when the widget does not have a .setValue on its
 * proto, otherwise utilize `useBasicWidgetState`.
 */
export declare function useBasicWidgetClientState<T, // Type of the value stored in WidgetStateManager.
P extends ValueElementProtoInterface>({ getStateFromWidgetMgr, getDefaultState, updateWidgetMgrState, element, widgetMgr, fragmentId, }: UseValueWSourceArgs<T, P>): [
    T,
    Dispatch<SetStateAction<ValueWSource<T> | null>>
];
interface ValueElementProtoInterfaceWithSetValue<T> extends ValueElementProtoInterface {
    value?: T;
    setValue: boolean;
}
export interface UseValueWSourceArgsWithSetValue<T, // Type of the value stored in WidgetStateManager.
P extends ValueElementProtoInterfaceWithSetValue<T>> extends Omit<UseValueWSourceArgs<T, P>, "getDefaultState"> {
    getDefaultStateFromProto: (el: P) => T;
    getCurrStateFromProto: (el: P) => T;
}
/**
 * A React hook that makes the simplest kinds of widgets very easy to implement.
 */
export declare function useBasicWidgetState<T, // Type of the value stored in WidgetStateManager.
P extends ValueElementProtoInterfaceWithSetValue<T>>({ getStateFromWidgetMgr, getDefaultStateFromProto, getCurrStateFromProto, updateWidgetMgrState, element, widgetMgr, fragmentId, }: UseValueWSourceArgsWithSetValue<T, P>): [
    T,
    Dispatch<SetStateAction<ValueWSource<T> | null>>
];
export {};
