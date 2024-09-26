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

import React, { useEffect, useRef } from "react";
import Clipboard from "clipboard";
import { Copy as CopyIcon } from "react-feather";
import { StyledCopyButton } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
const CopyButton = _ref => {
  let {
    text
  } = _ref;
  const buttonRef = useRef(null);
  const clipboardRef = useRef(null);
  useEffect(() => {
    const node = buttonRef.current;
    if (node !== null) {
      clipboardRef.current = new Clipboard(node, {
        // Set the container so that copying also works in dialogs.
        // Otherwise, the copy event is swallowed somehow.
        container: node.parentElement ?? undefined
      });
    }
    return () => {
      if (clipboardRef.current !== null) {
        clipboardRef.current.destroy();
      }
    };
  }, []);
  return /*#__PURE__*/_jsx(StyledCopyButton, {
    "data-testid": "stCodeCopyButton",
    title: "Copy to clipboard",
    ref: buttonRef,
    "data-clipboard-text": text,
    style: {
      top: 0,
      right: 0
    },
    children: /*#__PURE__*/_jsx(CopyIcon, {
      size: "16"
    })
  });
};
export default CopyButton;
//# sourceMappingURL=CopyButton.js.map