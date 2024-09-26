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
import { ThemeProvider as BaseUIThemeProvider } from "baseui";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { baseuiLightTheme } from "../../theme";
import { jsx as _jsx } from "react/jsx-runtime";
function ThemeProvider(_ref) {
  let {
    theme,
    baseuiTheme,
    children
  } = _ref;
  return (
    /*#__PURE__*/
    // Type error coming from BaseUI "property children doesn't exist"
    // @ts-expect-error
    _jsx(BaseUIThemeProvider, {
      theme: baseuiTheme || baseuiLightTheme,
      children: /*#__PURE__*/_jsx(EmotionThemeProvider, {
        theme: theme,
        children: children
      })
    })
  );
}
export default ThemeProvider;
//# sourceMappingURL=ThemeProvider.js.map