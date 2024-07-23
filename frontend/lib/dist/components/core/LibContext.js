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

import React from "react";
import { baseTheme } from "../../theme";

/**
 * The lib config contains various configurations that the host platform can
 * use to configure streamlit-lib frontend behavior. This should to be treated as part of the public
 * API, and changes need to be backwards-compatible meaning that an old host configuration
 * should still work with a new frontend versions.
 */

export const LibContext = /*#__PURE__*/React.createContext({
  isFullScreen: false,
  setFullScreen: () => {},
  addScriptFinishedHandler: () => {},
  removeScriptFinishedHandler: () => {},
  activeTheme: baseTheme,
  setTheme: () => {},
  availableThemes: [],
  addThemes: () => {},
  onPageChange: () => {},
  currentPageScriptHash: "",
  libConfig: {},
  fragmentIdsThisRun: []
});
//# sourceMappingURL=LibContext.js.map