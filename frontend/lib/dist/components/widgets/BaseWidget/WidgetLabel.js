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
import { isNullOrUndefined } from "../../../util/utils";
import StreamlitMarkdown from "../../shared/StreamlitMarkdown";
import { StyledWidgetLabel } from "./styled-components";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export function WidgetLabel(_ref) {
  let {
    label,
    children,
    disabled,
    labelVisibility,
    htmlFor
  } = _ref;
  if (isNullOrUndefined(label)) {
    return /*#__PURE__*/_jsx(_Fragment, {});
  }
  return (
    /*#__PURE__*/
    // we use aria-hidden to disable ARIA for StyleWidgetLabel, because each
    // widget should have its own aria-label and/or implement accessibility.
    _jsxs(StyledWidgetLabel, {
      "data-testid": "stWidgetLabel",
      "aria-hidden": "true",
      disabled: disabled,
      labelVisibility: labelVisibility,
      htmlFor: htmlFor,
      children: [/*#__PURE__*/_jsx(StreamlitMarkdown, {
        source: label,
        allowHTML: false,
        isLabel: true
      }), children]
    })
  );
}
//# sourceMappingURL=WidgetLabel.js.map