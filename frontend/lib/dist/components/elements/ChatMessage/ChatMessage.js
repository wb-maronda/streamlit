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
import { useTheme } from "@emotion/react";
import { Face, SmartToy } from "@emotion-icons/material-outlined";
import { Block as BlockProto } from "../../../proto";
import Icon, { DynamicIcon } from "../../shared/Icon";
import { StyledAvatarBackground, StyledAvatarIcon, StyledAvatarImage, StyledChatMessageContainer, StyledMessageContent } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
function ChatMessageAvatar(props) {
  const {
    avatar,
    avatarType,
    name,
    endpoints
  } = props;
  const theme = useTheme();
  if (avatar) {
    switch (avatarType) {
      case BlockProto.ChatMessage.AvatarType.IMAGE:
        return /*#__PURE__*/_jsx(StyledAvatarImage, {
          src: endpoints.buildMediaURL(avatar),
          alt: `${name} avatar`
        });
      case BlockProto.ChatMessage.AvatarType.EMOJI:
        return /*#__PURE__*/_jsx(StyledAvatarBackground, {
          children: avatar
        });
      case BlockProto.ChatMessage.AvatarType.ICON:
        if (avatar === "user") {
          return /*#__PURE__*/_jsx(StyledAvatarIcon, {
            "data-testid": "stChatMessageAvatarUser",
            background: theme.colors.red60,
            children: /*#__PURE__*/_jsx(Icon, {
              content: Face,
              size: "lg"
            })
          });
        } else if (avatar === "assistant") {
          return /*#__PURE__*/_jsx(StyledAvatarIcon, {
            "data-testid": "stChatMessageAvatarAssistant",
            background: theme.colors.orange60,
            children: /*#__PURE__*/_jsx(Icon, {
              content: SmartToy,
              size: "lg"
            })
          });
        } else if (avatar.startsWith(":material")) {
          return /*#__PURE__*/_jsx(StyledAvatarBackground, {
            "data-testid": "stChatMessageAvatarCustom",
            children: /*#__PURE__*/_jsx(DynamicIcon, {
              size: "lg",
              iconValue: avatar,
              color: theme.colors.bodyText
            })
          });
        }
    }
  }

  // Fallback to first character of the name label if nothing else can be matched:
  return /*#__PURE__*/_jsx(StyledAvatarBackground, {
    children: name ? name.charAt(0).toUpperCase() : "🧑‍💻"
  });
}
const ChatMessage = _ref => {
  let {
    endpoints,
    element,
    children
  } = _ref;
  const {
    avatar,
    avatarType,
    name
  } = element;
  return /*#__PURE__*/_jsxs(StyledChatMessageContainer, {
    className: "stChatMessage",
    "data-testid": "stChatMessage",
    background: ["user", "human"].includes(name.toLowerCase()),
    children: [/*#__PURE__*/_jsx(ChatMessageAvatar, {
      name: name,
      avatar: avatar,
      avatarType: avatarType,
      endpoints: endpoints
    }), /*#__PURE__*/_jsx(StyledMessageContent, {
      "data-testid": "stChatMessageContent",
      "aria-label": `Chat message from ${name}`,
      children: children
    })]
  });
};
export default ChatMessage;
//# sourceMappingURL=ChatMessage.js.map