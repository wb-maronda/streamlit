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
import { NewSession } from "./proto";
/**
 * SessionInfo properties. These don't change during the lifetime of a session.
 */
export interface Props {
    readonly appId: string;
    readonly sessionId: string;
    readonly streamlitVersion: string;
    readonly pythonVersion: string;
    readonly installationId: string;
    readonly installationIdV3: string;
    readonly maxCachedMessageAge: number;
    readonly commandLine?: string;
    readonly isHello: boolean;
}
export declare class SessionInfo {
    /** Our current SessionInfo properties.*/
    private _current?;
    /**
     * Our last SessionInfo props if there is no currently active session, or
     * undefined if there is one.
     */
    private _last?;
    /** Return the current SessionInfo props. Throw an error if the props are undefined. */
    get current(): Props;
    /** Return the previous SessionInfo props. They may be undefined! */
    get last(): Props | undefined;
    /**
     * Initialize `SessionInfo.current` with the given props and copy its
     * previous props to `SessionInfo.last`.
     */
    setCurrent(props?: Props): void;
    /** Clear `SessionInfo.current` and copy its previous props to `SessionInfo.last`. */
    clearCurrent(): void;
    /** True if `SessionInfo.current` exists. */
    get isSet(): boolean;
    /** True if `SessionInfo.current` refers to a "streamlit hello" session. */
    get isHello(): boolean;
    /** Create SessionInfo Props from the relevant bits of an initialize message. */
    static propsFromNewSessionMessage(newSession: NewSession): Props;
}
