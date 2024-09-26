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

import { hashString, notNullOrUndefined } from "./util/utils";

/**
 * SessionInfo properties. These don't change during the lifetime of a session.
 */

export class SessionInfo {
  constructor() {
    this._current = void 0;
    this._last = void 0;
  }
  /** Our current SessionInfo properties.*/
  /**
   * Our last SessionInfo props if there is no currently active session, or
   * undefined if there is one.
   */
  /** Return the current SessionInfo props. Throw an error if the props are undefined. */
  get current() {
    if (!this._current) {
      throw new Error("Tried to use SessionInfo before it was initialized");
    }
    return this._current;
  }

  /** Return the previous SessionInfo props. They may be undefined! */
  get last() {
    return this._last;
  }

  /**
   * Initialize `SessionInfo.current` with the given props and copy its
   * previous props to `SessionInfo.last`.
   */
  setCurrent(props) {
    this._last = notNullOrUndefined(this._current) ? {
      ...this._current
    } : undefined;
    this._current = notNullOrUndefined(props) ? {
      ...props
    } : undefined;
  }

  /** Clear `SessionInfo.current` and copy its previous props to `SessionInfo.last`. */
  clearCurrent() {
    this.setCurrent(undefined);
  }

  /** True if `SessionInfo.current` exists. */
  get isSet() {
    return notNullOrUndefined(this._current);
  }

  /** True if `SessionInfo.current` refers to a "streamlit hello" session. */
  get isHello() {
    return notNullOrUndefined(this._current) && this._current.isHello;
  }

  /** Create SessionInfo Props from the relevant bits of an initialize message. */
  static propsFromNewSessionMessage(newSession) {
    const initialize = newSession.initialize;
    const config = newSession.config;
    const userInfo = initialize.userInfo;
    const environmentInfo = initialize.environmentInfo;
    return {
      appId: hashString(userInfo.installationIdV3 + newSession.mainScriptPath),
      sessionId: initialize.sessionId,
      streamlitVersion: environmentInfo.streamlitVersion,
      pythonVersion: environmentInfo.pythonVersion,
      installationId: userInfo.installationId,
      installationIdV3: userInfo.installationIdV3,
      maxCachedMessageAge: config.maxCachedMessageAge,
      isHello: initialize.isHello
    };
  }
}
//# sourceMappingURL=SessionInfo.js.map