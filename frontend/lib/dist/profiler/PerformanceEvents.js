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

import { logMessage } from "../util/log";
import { getRerunAnalysis } from "./RerunAnalyzer";
/** Simple utility for capturing time samples. */
export class PerformanceEvents {
  /** Set this to true to capture PerformanceEvents. */

  static record(event) {
    if (!this.enabled) {
      return;
    }
    event.timestamp = performance.now();
    this.events.push(event);
    if (event.name === "DispatchedMessage" && event.messageType === "scriptFinished") {
      logMessage("Rerun results", getRerunAnalysis(this.events));
      this.events = [];
    }
  }
}
PerformanceEvents.enabled = false;
PerformanceEvents.events = [];
//# sourceMappingURL=PerformanceEvents.js.map