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
import { Alert as AlertProto } from "../../../proto";
import StreamlitMarkdown from "../../shared/StreamlitMarkdown";
import { DynamicIcon } from "../../shared/Icon";
import AlertContainer, { Kind } from "../../shared/AlertContainer";
import { StyledAlertContent } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export function getAlertElementKind(format) {
  switch (format) {
    case AlertProto.Format.ERROR:
      return Kind.ERROR;
    case AlertProto.Format.INFO:
      return Kind.INFO;
    case AlertProto.Format.SUCCESS:
      return Kind.SUCCESS;
    case AlertProto.Format.WARNING:
      return Kind.WARNING;
    default:
      throw new Error("Unexpected alert type: ".concat(format));
  }
}
/**
 * Display an (error|warning|info|success) box with a Markdown-formatted body.
 */
export default function AlertElement(_ref) {
  let {
    icon,
    body,
    kind,
    width
  } = _ref;
  const markdownWidth = {
    // Fix issue #6394 - Need to account for 1.25rem padding + 0.5rem gap when icon present
    width: icon ? "calc(100% - 1.75rem)" : "100%"
  };
  return /*#__PURE__*/_jsx("div", {
    className: "stAlert",
    "data-testid": "stAlert",
    children: /*#__PURE__*/_jsx(AlertContainer, {
      width: width,
      kind: kind,
      children: /*#__PURE__*/_jsxs(StyledAlertContent, {
        children: [icon && /*#__PURE__*/_jsx(DynamicIcon, {
          iconValue: icon,
          size: "lg",
          testid: "stAlertDynamicIcon"
        }), /*#__PURE__*/_jsx(StreamlitMarkdown, {
          source: body,
          allowHTML: false,
          style: markdownWidth
        })]
      })
    })
  });
}
//# sourceMappingURL=AlertElement.js.map