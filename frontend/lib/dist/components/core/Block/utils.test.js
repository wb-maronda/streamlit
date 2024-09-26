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
import { convertKeyToClassName, getKeyFromId, isElementStale } from "./utils";
describe("isElementStale", () => {
  const node = new ElementNode(
  // @ts-expect-error
  null, null, "myScriptRunId", "activeScriptHash", "myFragmentId");
  it("returns true if scriptRunState is RERUN_REQUESTED", () => {
    expect(isElementStale(node, ScriptRunState.RERUN_REQUESTED, "someScriptRunId", [])).toBe(true);
  });

  // When running in a fragment, the only elements that should be set to stale
  // are those belonging to the fragment that's currently running and only if the script run id is different.
  // If the script run id is the same, the element has just been updated and is not stale.
  it("if running and currentFragmentId is set, compares with node's fragmentId and scriptrunId", () => {
    expect(isElementStale(node, ScriptRunState.RUNNING, "myScriptRunId", ["myFragmentId"])).toBe(false);
    expect(isElementStale(node, ScriptRunState.RUNNING, "otherScriptRunId", ["myFragmentId"])).toBe(true);
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
describe("convertKeyToClassName", () => {
  const testCases = [{
    input: undefined,
    expected: ""
  }, {
    input: null,
    expected: ""
  }, {
    input: "",
    expected: ""
  }, {
    input: "helloWorld",
    expected: "st-key-helloWorld"
  }, {
    input: "hello world!",
    expected: "st-key-hello-world-"
  }, {
    input: "123Start",
    expected: "st-key-123Start"
  }, {
    input: "My_Class-Name",
    expected: "st-key-My_Class-Name"
  }, {
    input: "invalid#characters$here",
    expected: "st-key-invalid-characters-here"
  }, {
    input: "another$Test_case",
    expected: "st-key-another-Test_case"
  }];
  test.each(testCases)("converts $input to $expected", _ref => {
    let {
      input,
      expected
    } = _ref;
    expect(convertKeyToClassName(input)).toBe(expected);
  });
});
describe("getKeyFromId", () => {
  const testCases = [{
    input: "",
    expected: undefined
  }, {
    input: undefined,
    expected: undefined
  }, {
    input: "$ID-899e9b72e1539f21f8e82565d36609d0-foo",
    expected: undefined
  }, {
    input: "$$ID-899e9b72e1539f21f8e82565d36609d0-None",
    expected: undefined
  }, {
    input: "helloWorld",
    expected: undefined
  }, {
    input: "$$ID-899e9b72e1539f21f8e82565d36609d0-first container",
    expected: "first container"
  }, {
    input: "$$ID-foo-bar",
    expected: "bar"
  }];
  test.each(testCases)("extracts the key from $input", _ref2 => {
    let {
      input,
      expected
    } = _ref2;
    expect(getKeyFromId(input)).toBe(expected);
  });
});
//# sourceMappingURL=utils.test.js.map