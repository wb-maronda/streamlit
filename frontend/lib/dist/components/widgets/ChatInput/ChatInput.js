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

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "@emotion/react";
import { Send } from "@emotion-icons/material-rounded";
import { Textarea as UITextArea } from "baseui/textarea";
import Icon from "../../shared/Icon";
import InputInstructions from "../../shared/InputInstructions/InputInstructions";
import { hasLightBackgroundColor } from "../../../theme";
import { StyledChatInput, StyledChatInputContainer, StyledInputInstructionsContainer, StyledSendIconButton, StyledSendIconButtonContainer } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
// We want to show easily that there's scrolling so we deliberately choose
// a half size.
const MAX_VISIBLE_NUM_LINES = 6.5;
// Rounding errors can arbitrarily create scrollbars. We add a rounding offset
// to manage it better.
const ROUNDING_OFFSET = 1;
const isEnterKeyPressed = event => {
  // Using keyCode as well due to some different behaviors on Windows
  // https://bugs.chromium.org/p/chromium/issues/detail?id=79407

  const {
    keyCode,
    key
  } = event;
  return (key === "Enter" || keyCode === 13 || keyCode === 10) &&
  // Do not send the sentence being composed when Enter is typed into the IME.
  !(event.nativeEvent?.isComposing === true);
};
function ChatInput(_ref) {
  let {
    width,
    element,
    widgetMgr,
    fragmentId
  } = _ref;
  const theme = useTheme();
  // True if the user-specified state.value has not yet been synced to the WidgetStateManager.
  const [dirty, setDirty] = useState(false);
  // The value specified by the user via the UI. If the user didn't touch this widget's UI, the default value is used.
  const [value, setValue] = useState(element.default);
  // The value of the height of the textarea. It depends on a variety of factors including the default height, and autogrowing
  const [scrollHeight, setScrollHeight] = useState(0);
  const chatInputRef = useRef(null);
  const heightGuidance = useRef({
    minHeight: 0,
    maxHeight: 0
  });
  const getScrollHeight = () => {
    let scrollHeight = 0;
    const {
      current: textarea
    } = chatInputRef;
    if (textarea) {
      const placeholder = textarea.placeholder;
      textarea.placeholder = "";
      textarea.style.height = "auto";
      scrollHeight = textarea.scrollHeight;
      textarea.placeholder = placeholder;
      textarea.style.height = "";
    }
    return scrollHeight;
  };
  const handleSubmit = () => {
    // We want the chat input to always be in focus
    // even if the user clicks the submit button
    if (chatInputRef.current) {
      chatInputRef.current.focus();
    }
    if (!value) {
      return;
    }
    widgetMgr.setStringTriggerValue(element, value, {
      fromUi: true
    }, fragmentId);
    setDirty(false);
    setValue("");
    setScrollHeight(0);
  };
  const handleKeyDown = e => {
    const {
      metaKey,
      ctrlKey,
      shiftKey
    } = e;
    const shouldSubmit = isEnterKeyPressed(e) && !shiftKey && !ctrlKey && !metaKey;
    if (shouldSubmit) {
      e.preventDefault();
      handleSubmit();
    }
  };
  const handleChange = e => {
    const {
      value
    } = e.target;
    const {
      maxChars
    } = element;
    if (maxChars !== 0 && value.length > maxChars) {
      return;
    }
    setDirty(value !== "");
    setValue(value);
    setScrollHeight(getScrollHeight());
  };
  useEffect(() => {
    if (element.setValue) {
      // We are intentionally setting this to avoid regularly calling this effect.
      element.setValue = false;
      const val = element.value || "";
      setValue(val);
      setDirty(val !== "");
    }
  }, [element]);
  useEffect(() => {
    if (chatInputRef.current) {
      const {
        offsetHeight
      } = chatInputRef.current;
      heightGuidance.current.minHeight = offsetHeight;
      heightGuidance.current.maxHeight = offsetHeight * MAX_VISIBLE_NUM_LINES;
    }
  }, [chatInputRef]);
  const {
    disabled,
    placeholder,
    maxChars
  } = element;
  const lightTheme = hasLightBackgroundColor(theme);
  const {
    minHeight,
    maxHeight
  } = heightGuidance.current;
  const placeholderColor = lightTheme ? theme.colors.gray70 : theme.colors.gray80;
  const isInputExtended = scrollHeight > 0 && chatInputRef.current ? Math.abs(scrollHeight - minHeight) > ROUNDING_OFFSET : false;
  return /*#__PURE__*/_jsx(StyledChatInputContainer, {
    className: "stChatInput",
    "data-testid": "stChatInput",
    width: width,
    children: /*#__PURE__*/_jsxs(StyledChatInput, {
      children: [/*#__PURE__*/_jsx(UITextArea, {
        inputRef: chatInputRef,
        value: value,
        placeholder: placeholder,
        onChange: handleChange,
        onKeyDown: handleKeyDown,
        "aria-label": placeholder,
        disabled: disabled,
        rows: 1,
        overrides: {
          Root: {
            style: {
              minHeight: theme.sizes.minElementHeight,
              outline: "none",
              backgroundColor: theme.colors.transparent,
              // Baseweb requires long-hand props, short-hand leads to weird bugs & warnings.
              borderLeftWidth: theme.sizes.borderWidth,
              borderRightWidth: theme.sizes.borderWidth,
              borderTopWidth: theme.sizes.borderWidth,
              borderBottomWidth: theme.sizes.borderWidth,
              width: `${width}px`
            }
          },
          InputContainer: {
            style: {
              backgroundColor: theme.colors.transparent
            }
          },
          Input: {
            props: {
              "data-testid": "stChatInputTextArea"
            },
            style: {
              lineHeight: theme.lineHeights.inputWidget,
              backgroundColor: theme.colors.transparent,
              "::placeholder": {
                color: placeholderColor
              },
              height: isInputExtended ? `${scrollHeight + ROUNDING_OFFSET}px` : "auto",
              maxHeight: maxHeight ? `${maxHeight}px` : "none",
              // Baseweb requires long-hand props, short-hand leads to weird bugs & warnings.
              paddingRight: "3rem",
              paddingLeft: theme.spacing.sm,
              paddingBottom: theme.spacing.sm,
              paddingTop: theme.spacing.sm
            }
          }
        }
      }), width > theme.breakpoints.hideWidgetDetails && /*#__PURE__*/_jsx(StyledInputInstructionsContainer, {
        children: /*#__PURE__*/_jsx(InputInstructions, {
          dirty: dirty,
          value: value,
          maxLength: maxChars,
          type: "chat"
          // Chat Input are not able to be used in forms
          ,
          inForm: false
        })
      }), /*#__PURE__*/_jsx(StyledSendIconButtonContainer, {
        children: /*#__PURE__*/_jsx(StyledSendIconButton, {
          onClick: handleSubmit,
          disabled: !dirty || disabled,
          extended: isInputExtended,
          "data-testid": "stChatInputSubmitButton",
          children: /*#__PURE__*/_jsx(Icon, {
            content: Send,
            size: "xl",
            color: "inherit"
          })
        })
      })]
    })
  });
}
export default ChatInput;
//# sourceMappingURL=ChatInput.js.map