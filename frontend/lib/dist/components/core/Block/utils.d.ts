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
import { AppNode, BlockNode } from "@streamlit/lib/src/AppNode";
import { ComponentRegistry } from "@streamlit/lib/src/components/widgets/CustomComponent";
import { FileUploadClient } from "@streamlit/lib/src/FileUploadClient";
import { ScriptRunState } from "@streamlit/lib/src/ScriptRunState";
import { SessionInfo } from "@streamlit/lib/src/SessionInfo";
import { StreamlitEndpoints } from "@streamlit/lib/src/StreamlitEndpoints";
import { EmotionTheme } from "@streamlit/lib/src/theme";
import { FormsData, WidgetStateManager } from "@streamlit/lib/src/WidgetStateManager";
export declare function shouldComponentBeEnabled(elementType: string, scriptRunState: ScriptRunState): boolean;
export declare function isElementStale(node: AppNode, scriptRunState: ScriptRunState, scriptRunId: string, fragmentIdsThisRun?: Array<string>): boolean;
export declare function isComponentStale(enable: boolean, node: AppNode, scriptRunState: ScriptRunState, scriptRunId: string, fragmentIdsThisRun?: Array<string>): boolean;
export declare function assignDividerColor(node: BlockNode, theme: EmotionTheme): void;
export interface BaseBlockProps {
    /**
     * The app's StreamlitEndpoints instance. Exposes non-websocket endpoint logic
     * used by various Streamlit elements.
     */
    endpoints: StreamlitEndpoints;
    /**
     * The app's SessionInfo instance. Exposes session-specific properties.
     */
    sessionInfo: SessionInfo;
    /**
     * The app's WidgetStateManager instance. Used by all widget elements to
     * store and retrieve widget state. When the user interacts with a widget,
     * the WidgetStateManager initiates the "rerun BackMsg" data flow to kick
     * off a script rerun.
     */
    widgetMgr: WidgetStateManager;
    /**
     * The app's FileUploadClient instance. Used by the FileUploader component
     * to send files to the Streamlit backend.
     */
    uploadClient: FileUploadClient;
    /**
     * The app's ComponentRegistry instance. Dispatches "Custom Component"
     * iframe messages to ComponentInstances.
     */
    componentRegistry: ComponentRegistry;
    /**
     * The ID of the current "script run". When a Streamlit script is re-run
     * (usually as a result of the user interacting with a widget), the Streamlit
     * backend sends a new scriptRunId to the frontend. When the script run ends,
     * the frontend discards "stale" elements (that is, elements with a non-current
     * scriptRunId).
     */
    scriptRunId: string;
    /**
     * The app's current ScriptRunState. This is used in combination with
     * scriptRunId to prune stale elements. It's also used by the app to
     * display the "running man" indicator when the app's script is being re-run.
     */
    scriptRunState: ScriptRunState;
    /**
     * If true, all widgets will be disabled and the app will be non-interactive.
     * This is generally set when the frontend is disconnected from the backend.
     */
    widgetsDisabled: boolean;
    /**
     * Data about all forms in the app. The WidgetStateManager creates its own
     * internal FormsData instance, and calls a callback (`formsDataChanged`)
     * when forms are updated. This FormsData instance should be updated
     * from that callback.
     */
    formsData: FormsData;
    /**
     * If true , the element should not allow going into fullscreen. Right now we plan
     * to use it, for example, in Dialogs to prevent fullscreen issues.
     */
    disableFullscreenMode?: boolean;
}
/**
 * Converts a user-specified key to a valid CSS class name.
 *
 * @param key - The key to convert.
 * @returns A valid CSS class name.
 */
export declare function convertKeyToClassName(key: string | undefined | null): string;
/**
 * Returns the user-specified key extracted from the element id, or undefined if the id does
 * not have a user-specified key.
 */
export declare function getKeyFromId(elementId: string | undefined | null): string | undefined;