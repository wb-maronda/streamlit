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

import { ScriptRunState } from "../../../ScriptRunState";
import { getDividerColors } from "../../../theme";
export function shouldComponentBeEnabled(elementType, scriptRunState) {
  return elementType !== "empty" || scriptRunState !== ScriptRunState.RUNNING;
}
export function isElementStale(node, scriptRunState, scriptRunId, fragmentIdsThisRun) {
  if (scriptRunState === ScriptRunState.RERUN_REQUESTED) {
    // If a rerun was just requested, all of our current elements
    // are about to become stale.
    return true;
  }
  if (scriptRunState === ScriptRunState.RUNNING) {
    if (fragmentIdsThisRun && fragmentIdsThisRun.length) {
      return Boolean(node.fragmentId && fragmentIdsThisRun.includes(node.fragmentId));
    }
    return node.scriptRunId !== scriptRunId;
  }
  return false;
}
export function isComponentStale(enable, node, scriptRunState, scriptRunId, fragmentIdsThisRun) {
  return !enable || isElementStale(node, scriptRunState, scriptRunId, fragmentIdsThisRun);
}
export function assignDividerColor(node, theme) {
  // All available divider colors
  const allColorMap = getDividerColors(theme);
  const allColorKeys = Object.keys(allColorMap);

  // Limited colors for auto assignment
  const {
    blue,
    green,
    orange,
    red,
    violet
  } = allColorMap;
  const autoColorMap = {
    blue,
    green,
    orange,
    red,
    violet
  };
  const autoColorKeys = Object.keys(autoColorMap);
  let dividerIndex = 0;
  Array.from(node.getElements()).forEach(element => {
    var _element$heading;
    const divider = (_element$heading = element.heading) === null || _element$heading === void 0 ? void 0 : _element$heading.divider;
    if (element.type === "heading" && divider) {
      if (divider === "auto") {
        const colorKey = autoColorKeys[dividerIndex];
        // @ts-expect-error - heading.divider is not undefined at this point
        element.heading.divider = autoColorMap[colorKey];
        dividerIndex += 1;
        if (dividerIndex === autoColorKeys.length) dividerIndex = 0;
      } else if (allColorKeys.includes(divider)) {
        // @ts-expect-error
        element.heading.divider = allColorMap[divider];
      }
    }
  });
}
//# sourceMappingURL=utils.js.map