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
import classNames from "classnames";
import { isPresetTheme } from "../../../theme";
import StreamlitMarkdown from "../../shared/StreamlitMarkdown";
import { LibContext } from "../../core/LibContext";
import { StyledSpinner, StyledSpinnerContainer, ThemedStyledSpinner } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
function Spinner(_ref) {
  let {
    width,
    element
  } = _ref;
  const {
    activeTheme
  } = React.useContext(LibContext);
  const usingCustomTheme = !isPresetTheme(activeTheme);
  const {
    cache
  } = element;
  return /*#__PURE__*/_jsx(StyledSpinner, {
    className: classNames({
      stSpinner: true,
      cacheSpinner: cache
    }),
    "data-testid": "stSpinner",
    width: width,
    cache: cache,
    children: /*#__PURE__*/_jsxs(StyledSpinnerContainer, {
      children: [/*#__PURE__*/_jsx(ThemedStyledSpinner, {
        usingCustomTheme: usingCustomTheme
      }), /*#__PURE__*/_jsx(StreamlitMarkdown, {
        source: element.text,
        allowHTML: false
      })]
    })
  });
}
export default Spinner;
//# sourceMappingURL=Spinner.js.map