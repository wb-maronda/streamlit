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
import { ReactElement, ReactNode } from "react";
import { ScriptRunState } from "@streamlit/lib/src/ScriptRunState";
import { WidgetStateManager } from "@streamlit/lib/src/WidgetStateManager";
export interface Props {
    formId: string;
    clearOnSubmit: boolean;
    width: number;
    hasSubmitButton: boolean;
    scriptRunState: ScriptRunState;
    children?: ReactNode;
    widgetMgr: WidgetStateManager;
    border: boolean;
}
export declare const MISSING_SUBMIT_BUTTON_WARNING: string;
export declare function Form(props: Props): ReactElement;
