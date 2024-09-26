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
import { KIND, Notification } from "baseui/notification";
import { useTheme } from "@emotion/react";
import { StyledAlertContent } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
export let Kind;
(function (Kind) {
  Kind["ERROR"] = "error";
  Kind["INFO"] = "info";
  Kind["SUCCESS"] = "success";
  Kind["WARNING"] = "warning";
})(Kind || (Kind = {}));
function getNotificationKind(kind) {
  switch (kind) {
    case Kind.ERROR:
      return KIND.negative;
    case Kind.INFO:
      return KIND.info;
    case Kind.SUCCESS:
      return KIND.positive;
    case Kind.WARNING:
      return KIND.warning;
    default:
      throw new Error(`Unexpected alert type: ${kind}`);
  }
}
/**
 * Provides Base Styles for any Alert Type UI. Used in the following cases:
 *   * Alert is the Streamlit specific alert component that users can use with
 *     any Markdown. Users have API access to generate these.
 *   * ExceptionElement is a special type of alert that formats an exception
 *     with a stack trace provided. Users have API access to generate these.
 *   * ErrorElement is an alert for an internal exception happening in
 *     Streamlit (likely a JS exception happening at runtime). Users do NOT
 *     have API access to generate these.
 */
export default function AlertContainer(_ref) {
  let {
    kind,
    width,
    children
  } = _ref;
  const theme = useTheme();
  const testid = kind.charAt(0).toUpperCase() + kind.slice(1);
  return /*#__PURE__*/_jsx(Notification, {
    kind: getNotificationKind(kind),
    overrides: {
      Body: {
        style: {
          marginTop: theme.spacing.none,
          marginBottom: theme.spacing.none,
          marginLeft: theme.spacing.none,
          marginRight: theme.spacing.none,
          width: width ? width.toString() : undefined,
          border: 0,
          borderTopRightRadius: theme.radii.default,
          borderBottomRightRadius: theme.radii.default,
          borderTopLeftRadius: theme.radii.default,
          borderBottomLeftRadius: theme.radii.default
        },
        props: {
          "data-testid": "stAlertContainer",
          className: `stAlertContainer`
        }
      },
      InnerContainer: {
        style: {
          width: "100%",
          lineHeight: theme.lineHeights.alert
        }
      }
    },
    children: /*#__PURE__*/_jsx(StyledAlertContent, {
      "data-testid": `stAlertContent${testid}`,
      children: children
    })
  });
}
//# sourceMappingURL=AlertContainer.js.map