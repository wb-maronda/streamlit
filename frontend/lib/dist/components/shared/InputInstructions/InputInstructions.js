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
import { isFromMac } from "../../../util/utils";
import { StyledWidgetInstructions } from "../../widgets/BaseWidget";
import { StyledMessage } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
const InputInstructions = _ref => {
  let {
    dirty,
    value,
    maxLength,
    className,
    type = "single",
    inForm
  } = _ref;
  const messages = [];
  const addMessage = function (text) {
    let shouldBlink = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    messages.push( /*#__PURE__*/_jsx(StyledMessage, {
      includeDot: messages.length > 0,
      shouldBlink: shouldBlink,
      children: text
    }, messages.length));
  };
  if (dirty) {
    const toSubmitFormOrApplyText = inForm ? "submit form" : "apply";
    if (type === "multiline") {
      const commandKey = isFromMac() ? "⌘" : "Ctrl";
      addMessage("Press ".concat(commandKey, "+Enter to ").concat(toSubmitFormOrApplyText));
    } else if (type === "single") {
      addMessage("Press Enter to ".concat(toSubmitFormOrApplyText));
    }
  }
  if (maxLength && (type !== "chat" || dirty)) {
    addMessage("".concat(value.length, "/").concat(maxLength), dirty && value.length >= maxLength);
  }
  return /*#__PURE__*/_jsx(StyledWidgetInstructions, {
    "data-testid": "InputInstructions",
    className: className,
    children: messages
  });
};
export default InputInstructions;
//# sourceMappingURL=InputInstructions.js.map