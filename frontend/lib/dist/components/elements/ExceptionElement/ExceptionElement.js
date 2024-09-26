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
import { notNullOrUndefined } from "../../../util/utils";
import AlertContainer, { Kind } from "../../shared/AlertContainer";
import StreamlitMarkdown from "../../shared/StreamlitMarkdown";
import { StyledMessageType, StyledStackTrace, StyledStackTraceRow, StyledStackTraceTitle } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Return true if the string is non-null and non-empty.
 */
function isNonEmptyString(value) {
  return notNullOrUndefined(value) && value !== "";
}
function ExceptionMessage(_ref) {
  let {
    type,
    message,
    messageIsMarkdown
  } = _ref;
  // Build the message display.
  // On the backend, we use the StreamlitException type for errors that
  // originate from inside Streamlit. These errors have Markdown-formatted
  // messages, and so we wrap those messages inside our Markdown renderer.

  if (messageIsMarkdown) {
    let markdown = `**${type}**`;
    if (message) {
      markdown += `: ${message}`;
    }
    return /*#__PURE__*/_jsx(StreamlitMarkdown, {
      source: markdown,
      allowHTML: false
    });
  }
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(StyledMessageType, {
      children: type
    }), isNonEmptyString(message) ? `: ${message}` : null]
  });
}
function StackTrace(_ref2) {
  let {
    stackTrace
  } = _ref2;
  // Build the stack trace display, if we got a stack trace.
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(StyledStackTraceTitle, {
      children: "Traceback:"
    }), /*#__PURE__*/_jsx(StyledStackTrace, {
      children: /*#__PURE__*/_jsx("code", {
        children: stackTrace.map((row, index) => /*#__PURE__*/_jsx(StyledStackTraceRow, {
          "data-testid": "stExceptionTraceRow",
          children: row
        }, index))
      })
    })]
  });
}

/**
 * Functional element representing formatted text.
 */
export default function ExceptionElement(_ref3) {
  let {
    element,
    width
  } = _ref3;
  return /*#__PURE__*/_jsx("div", {
    className: "stException",
    "data-testid": "stException",
    children: /*#__PURE__*/_jsxs(AlertContainer, {
      kind: element.isWarning ? Kind.WARNING : Kind.ERROR,
      width: width,
      children: [/*#__PURE__*/_jsx("div", {
        "data-testid": "stExceptionMessage",
        children: /*#__PURE__*/_jsx(ExceptionMessage, {
          type: element.type,
          message: element.message,
          messageIsMarkdown: element.messageIsMarkdown
        })
      }), element.stackTrace && element.stackTrace.length > 0 ? /*#__PURE__*/_jsx(StackTrace, {
        stackTrace: element.stackTrace
      }) : null]
    })
  });
}
//# sourceMappingURL=ExceptionElement.js.map