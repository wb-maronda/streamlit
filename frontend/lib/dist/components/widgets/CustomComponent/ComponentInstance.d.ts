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
import { ComponentInstance as ComponentInstanceProto } from "@streamlit/lib/src/proto";
import { EmotionTheme } from "@streamlit/lib/src/theme";
import { WidgetStateManager } from "@streamlit/lib/src/WidgetStateManager";
import { ComponentRegistry } from "./ComponentRegistry";
/**
 * If we haven't received a COMPONENT_READY message this many seconds
 * after the component has been created, explain to the user that there
 * may be a problem with their component, and offer troubleshooting advice.
 */
export declare const COMPONENT_READY_WARNING_TIME_MS = 60000;
export interface Props {
    registry: ComponentRegistry;
    widgetMgr: WidgetStateManager;
    disabled: boolean;
    element: ComponentInstanceProto;
    width: number;
    theme: EmotionTheme;
    fragmentId?: string;
}
declare const _default: React.FC<Pick<Props, "width" | "disabled" | "element" | "widgetMgr" | "fragmentId" | "registry"> & {
    theme?: import("@emotion/react").Theme | undefined;
}>;
export default _default;
