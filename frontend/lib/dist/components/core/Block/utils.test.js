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

import { ElementNode } from "../../../AppNode";
import { ScriptRunState } from "../../../ScriptRunState";
import { isElementStale } from "./utils";
describe("isElementStale", () => {
  const node = new ElementNode(
  // @ts-expect-error
  null, null, "myScriptRunId", "activeScriptHash", "myFragmentId");
  it("returns true if scriptRunState is RERUN_REQUESTED", () => {
    expect(isElementStale(node, ScriptRunState.RERUN_REQUESTED, "someScriptRunId", [])).toBe(true);
  });

  // When running in a fragment, the only elements that should be set to stale
  // are those belonging to the fragment that's currently running.
  it("if running and currentFragmentId is set, compares with node's fragmentId", () => {
    expect(isElementStale(node, ScriptRunState.RUNNING, "myScriptRunId", ["myFragmentId"])).toBe(true);
    expect(isElementStale(node, ScriptRunState.RUNNING, "myScriptRunId", ["someFragmentId", "someOtherFragmentId"])).toBe(false);
  });

  // When not running in a fragment, all elements from script runs aside from
  // the current one should be set to stale.
  it("if running and currentFragmentId is not set, compares with node's scriptRunId", () => {
    expect(isElementStale(node, ScriptRunState.RUNNING, "someOtherScriptRunId", [])).toBe(true);
    expect(isElementStale(node, ScriptRunState.RUNNING, "myScriptRunId", [])).toBe(false);
  });
  it("returns false for all other script run states", () => {
    const states = [ScriptRunState.NOT_RUNNING, ScriptRunState.STOP_REQUESTED, ScriptRunState.COMPILATION_ERROR];
    states.forEach(s => {
      expect(isElementStale(node, s, "someOtherScriptRunId", [])).toBe(false);
    });
  });
});
//# sourceMappingURL=utils.test.js.map