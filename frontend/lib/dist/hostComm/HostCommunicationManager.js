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

import { isValidOrigin } from "../util/UriUtil";
import Resolver from "../util/Resolver";
export const HOST_COMM_VERSION = 1;
/**
 * Manages host communication & messaging
 */
export default class HostCommunicationManager {
  constructor(props) {
    this.props = void 0;
    this.allowedOrigins = void 0;
    this.deferredAuthToken = void 0;
    this.openHostCommunication = () => {
      window.addEventListener("message", this.receiveHostMessage);
      this.sendMessageToHost({
        type: "GUEST_READY"
      });
    };
    this.closeHostCommunication = () => {
      window.removeEventListener("message", this.receiveHostMessage);
    };
    this.resetAuthToken = () => {
      this.deferredAuthToken = new Resolver();
    };
    this.claimAuthToken = () => {
      return this.deferredAuthToken.promise;
    };
    this.setAllowedOrigins = _ref => {
      let {
        allowedOrigins,
        useExternalAuthToken
      } = _ref;
      if (!useExternalAuthToken) {
        this.deferredAuthToken.resolve(undefined);
      }
      if (!(allowedOrigins !== null && allowedOrigins !== void 0 && allowedOrigins.length)) {
        return;
      }
      this.allowedOrigins = allowedOrigins;
      this.openHostCommunication();
    };
    this.sendMessageToHost = message => {
      window.parent.postMessage({
        stCommVersion: HOST_COMM_VERSION,
        ...message
      }, "*");
    };
    this.receiveHostMessage = event => {
      const message = event.data;

      // Messages coming from the parent frame of a deployed Streamlit app
      // may not be coming from a trusted source (even if we've set the CSP
      // frame-anscestors header, it doesn't hurt to be extra safe). We avoid
      // processing messages received from origins we haven't explicitly
      // labeled as trusted here to lower the probability that we end up
      // processing malicious input.
      if (message.stCommVersion !== HOST_COMM_VERSION || !this.allowedOrigins.find(allowed => isValidOrigin(allowed, event.origin))) {
        return;
      }
      if (message.type === "CLOSE_MODAL") {
        this.props.closeModal();
      }
      if (message.type === "STOP_SCRIPT") {
        this.props.stopScript();
      }
      if (message.type === "RERUN_SCRIPT") {
        this.props.rerunScript();
      }
      if (message.type === "CLEAR_CACHE") {
        this.props.clearCache();
      }
      if (message.type === "REQUEST_PAGE_CHANGE") {
        this.props.pageChanged(message.pageScriptHash);
      }
      if (message.type === "SEND_APP_HEARTBEAT") {
        this.props.sendAppHeartbeat();
      }
      if (message.type === "SET_INPUTS_DISABLED") {
        this.props.setInputsDisabled(message.disabled);
      }
      if (message.type === "SET_AUTH_TOKEN") {
        // NOTE: The edge case (that should technically never happen) where
        // useExternalAuthToken is false but we still receive this message
        // type isn't an issue here because resolving a promise a second time
        // is a no-op, and we already resolved the promise to undefined
        // above.
        this.deferredAuthToken.resolve(message.authToken);
        if (message.jwtHeaderName !== undefined) {
          this.props.jwtHeaderChanged(message);
        }
      }
      if (message.type === "SET_IS_OWNER") {
        this.props.isOwnerChanged(message.isOwner);
      }
      if (message.type === "SET_MENU_ITEMS") {
        this.props.hostMenuItemsChanged(message.items);
      }
      if (message.type === "SET_METADATA") {
        this.props.deployedAppMetadataChanged(message.metadata);
      }
      if (message.type === "SET_PAGE_LINK_BASE_URL") {
        this.props.pageLinkBaseUrlChanged(message.pageLinkBaseUrl);
      }
      if (message.type === "SET_SIDEBAR_CHEVRON_DOWNSHIFT") {
        this.props.sidebarChevronDownshiftChanged(message.sidebarChevronDownshift);
      }
      if (message.type === "SET_SIDEBAR_NAV_VISIBILITY") {
        this.props.hostHideSidebarNavChanged(message.hidden);
      }
      if (message.type === "SET_TOOLBAR_ITEMS") {
        this.props.hostToolbarItemsChanged(message.items);
      }
      if (message.type === "UPDATE_FROM_QUERY_PARAMS") {
        this.props.queryParamsChanged(message.queryParams);
        this.props.sendRerunBackMsg();
      }
      if (message.type === "UPDATE_HASH") {
        window.location.hash = message.hash;
      }
      if (message.type === "SET_CUSTOM_THEME_CONFIG") {
        this.props.themeChanged(message.themeInfo);
      }
      if (message.type === "RESTART_WEBSOCKET_CONNECTION") {
        this.props.restartWebsocketConnection();
      }
      if (message.type === "TERMINATE_WEBSOCKET_CONNECTION") {
        this.props.terminateWebsocketConnection();
      }
    };
    this.props = props;
    this.allowedOrigins = [];
    this.deferredAuthToken = new Resolver();
  }

  /**
   * Adds a listener for messages from the host
   * sends message that guest is ready to receive messages
   */

  /**
   * Cleans up message event listener
   */

  /**
   * Function to reset deferredAuthToken once the resource waiting on the token
   * (that is, the WebsocketConnection singleton) has successfully received it.
   *
   * This should be called in a .then() handler attached to deferredAuthToken.promise.
   */

  /**
   * Function returning a promise that resolves to the auth token sent by the host
   * Used by connectionManager
   */

  /**
   * Sets the allowed origins configuration.
   */

  /**
   * Register a function to deliver a message to the Host
   */

  /**
   * Register a function to handle a message from the Host
   */
}
//# sourceMappingURL=HostCommunicationManager.js.map