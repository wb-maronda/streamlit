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
import { ReactElement } from "react";
import { Video as VideoProto } from "@streamlit/lib/src/proto";
import { StreamlitEndpoints } from "@streamlit/lib/src/StreamlitEndpoints";
import { WidgetStateManager as ElementStateManager } from "@streamlit/lib/src/WidgetStateManager";
export interface VideoProps {
    endpoints: StreamlitEndpoints;
    width: number;
    element: VideoProto;
    elementMgr: ElementStateManager;
}
export interface Subtitle {
    label: string;
    url: string;
}
export default function Video({ element, width, endpoints, elementMgr, }: VideoProps): ReactElement;
