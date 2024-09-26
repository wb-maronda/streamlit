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
import { isValidElementId } from "../../../util/utils";
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
      // if the fragmentId is set, we only want to mark elements as stale
      // that belong to the same fragmentId and have a different scriptRunId.
      // If they have the same scriptRunId, they were just updated.
      return Boolean(node.fragmentId && fragmentIdsThisRun.includes(node.fragmentId) && node.scriptRunId !== scriptRunId);
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
    const divider = element.heading?.divider;
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
/**
 * Converts a user-specified key to a valid CSS class name.
 *
 * @param key - The key to convert.
 * @returns A valid CSS class name.
 */
export function convertKeyToClassName(key) {
  if (!key) {
    return "";
  }
  const className = key.trim().replace(/[^a-zA-Z0-9_-]/g, "-");
  return "st-key-" + className;
}

/**
 * Returns the user-specified key extracted from the element id, or undefined if the id does
 * not have a user-specified key.
 */
export function getKeyFromId(elementId) {
  if (!elementId || !isValidElementId(elementId)) {
    return undefined;
  }
  const userKey = elementId.split("-", 3).pop();
  return userKey === "None" ? undefined : userKey;
}
//# sourceMappingURL=utils.js.map