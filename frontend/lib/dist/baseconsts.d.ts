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
/**
 * When in dev mode, this is the port used to connect to the web server that is
 * serving the current page (i.e. the actual web page server, not the API
 * server, which in dev are actually different servers.)
 */
export declare const WWW_PORT_DEV = 3000;
/**
 * This is the port used to connect to the server web socket when in dev.
 * IMPORTANT: If changed, also change config.py
 */
export declare const WEBSOCKET_PORT_DEV = 8501;
/**
 * True when in development mode.
 */
export declare const IS_DEV_ENV: boolean;
/**
 * Parameters for our fetch() requests.
 */
export declare const FETCH_PARAMS: RequestInit;
/**
 * Feature flag for https://github.com/streamlit/streamlit/issues/678.
 * If this is true, we show a modal dialog to prompt the user to rerun
 * when their script changes. If false, we show a less intrusive UI in
 * StatusWidget.
 */
export declare const RERUN_PROMPT_MODAL_DIALOG = false;
