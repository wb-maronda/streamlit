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

import { IS_DEV_ENV } from "../baseconsts";

/* eslint-disable no-console */

/**
 * Log a message to the console, but only if in dev mode.
 */
export function logMessage() {
  if (IS_DEV_ENV) {
    console.log(...arguments);
  }
}

/**
 * Log an warning to the console, but only if in dev mode.
 * USE ONLY FOR WARNINGS: Meaning, only things that have a small impact on the
 * user experience, if any.
 */
export function logWarning() {
  if (IS_DEV_ENV) {
    console.warn(...arguments);
  }
}

/**
 * Log an error to the console. ALWAYS does this, even if in prod mode, because
 * errors are _that_ important.
 * USE ONLY FOR ERRORS: Meaning, only things that somehow "break" the user
 * experience.
 */
export function logError() {
  console.error(...arguments);
  // TODO: Send error report to our servers when there's an error.
}

/**
 * Log a message to the console. ALWAYS does this, even if in prod mode.
 * USE SPARINGLY!
 */
export function logAlways() {
  console.log(...arguments);
}
//# sourceMappingURL=log.js.map