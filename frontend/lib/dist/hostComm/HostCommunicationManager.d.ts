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
import { ICustomThemeConfig, WidgetStates } from "@streamlit/lib/src/proto";
import { PresetThemeName } from "@streamlit/lib/src/theme/types";
import { AppConfig, DeployedAppMetadata, IGuestToHostMessage, IMenuItem, IToolbarItem } from "./types";
export declare const HOST_COMM_VERSION = 1;
export interface HostCommunicationProps {
    readonly sendRerunBackMsg: (widgetStates?: WidgetStates, pageScriptHash?: string) => void;
    readonly closeModal: () => void;
    readonly stopScript: () => void;
    readonly rerunScript: () => void;
    readonly clearCache: () => void;
    readonly sendAppHeartbeat: () => void;
    readonly setInputsDisabled: (inputsDisabled: boolean) => void;
    readonly themeChanged: (themeName?: PresetThemeName, themeInfo?: ICustomThemeConfig) => void;
    readonly pageChanged: (pageScriptHash: string) => void;
    readonly isOwnerChanged: (isOwner: boolean) => void;
    readonly jwtHeaderChanged: (jwtPayload: {
        jwtHeaderName: string;
        jwtHeaderValue: string;
    }) => void;
    readonly hostMenuItemsChanged: (menuItems: IMenuItem[]) => void;
    readonly hostToolbarItemsChanged: (toolbarItems: IToolbarItem[]) => void;
    readonly hostHideSidebarNavChanged: (hideSidebarNav: boolean) => void;
    readonly sidebarChevronDownshiftChanged: (sidebarChevronDownshift: number) => void;
    readonly pageLinkBaseUrlChanged: (pageLinkBaseUrl: string) => void;
    readonly queryParamsChanged: (queryParams: string) => void;
    readonly deployedAppMetadataChanged: (deployedAppMetadata: DeployedAppMetadata) => void;
    readonly restartWebsocketConnection: () => void;
    readonly terminateWebsocketConnection: () => void;
}
/**
 * Manages host communication & messaging
 */
export default class HostCommunicationManager {
    private readonly props;
    private allowedOrigins;
    private deferredAuthToken;
    constructor(props: HostCommunicationProps);
    /**
     * Adds a listener for messages from the host
     * sends message that guest is ready to receive messages
     */
    openHostCommunication: () => void;
    /**
     * Cleans up message event listener
     */
    closeHostCommunication: () => void;
    /**
     * Function to reset deferredAuthToken once the resource waiting on the token
     * (that is, the WebsocketConnection singleton) has successfully received it.
     *
     * This should be called in a .then() handler attached to deferredAuthToken.promise.
     */
    resetAuthToken: () => void;
    /**
     * Function returning a promise that resolves to the auth token sent by the host
     * Used by connectionManager
     */
    claimAuthToken: () => Promise<string | undefined>;
    /**
     * Sets the allowed origins configuration.
     */
    setAllowedOrigins: ({ allowedOrigins, useExternalAuthToken, }: AppConfig) => void;
    /**
     * Register a function to deliver a message to the Host
     */
    sendMessageToHost: (message: IGuestToHostMessage) => void;
    /**
     * Register a function to handle a message from the Host
     */
    receiveHostMessage: (event: MessageEvent) => void;
}
