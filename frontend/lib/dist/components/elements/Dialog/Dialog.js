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

import React, { useEffect, useMemo, useState } from "react";
import { useTheme } from "@emotion/react";
import { SIZE } from "baseui/modal";
import Modal, { ModalHeader, ModalBody } from "../../shared/Modal";
import { Block as BlockProto } from "../../../proto";
import IsDialogContext from "../../core/IsDialogContext";
import { notNullOrUndefined } from "../../../util/utils";
import { StyledDialogContent } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
function parseWidthConfig(width, theme) {
  if (width === BlockProto.Dialog.DialogWidth.LARGE) {
    // This is the same width incl. padding as the AppView container is using 704px (736px (= contentMaxWidth) - 32px padding).
    // The dialog's total left and right padding is 48px. So the dialog needs a total width of 752px (=704px + 48px).
    // The used calculation here makes the relation to the app content width more comprehendable than hardcoding.
    // Note that a Modal has max-width:100%, so it looks good on mobile independent of the calculated size here.
    const paddingDifferenceDialogAndAppView = theme.spacing.lg; // the dialog has 0.5rem more padding left and right => 1rem
    return "calc(".concat(theme.sizes.contentMaxWidth, " + ").concat(paddingDifferenceDialogAndAppView, ")");
  }
  return SIZE.default;
}
const Dialog = _ref => {
  let {
    element,
    children
  } = _ref;
  const {
    title,
    dismissible,
    width,
    isOpen: initialIsOpen
  } = element;
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    // Only apply the open state if it was actually set in the proto.
    if (notNullOrUndefined(initialIsOpen)) {
      setIsOpen(initialIsOpen);
    }
  }, [initialIsOpen]);
  const theme = useTheme();
  const size = useMemo(() => parseWidthConfig(width !== null && width !== void 0 ? width : BlockProto.Dialog.DialogWidth.SMALL, theme), [width, theme]);
  return /*#__PURE__*/_jsxs(Modal, {
    isOpen: isOpen,
    closeable: dismissible,
    onClose: () => setIsOpen(false),
    size: size,
    children: [/*#__PURE__*/_jsx(ModalHeader, {
      children: title
    }), /*#__PURE__*/_jsx(ModalBody, {
      children: /*#__PURE__*/_jsx(StyledDialogContent, {
        children: children
      })
    })]
  });
};
function DialogWithProvider(props) {
  return /*#__PURE__*/_jsx(IsDialogContext.Provider, {
    value: true,
    children: /*#__PURE__*/_jsx(Dialog, {
      ...props
    })
  });
}
export default DialogWithProvider;
//# sourceMappingURL=Dialog.js.map