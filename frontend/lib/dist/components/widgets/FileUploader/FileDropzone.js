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
import Dropzone from "react-dropzone";
import BaseButton, { BaseButtonKind, BaseButtonSize } from "../../shared/BaseButton";
import { StyledFileDropzoneSection } from "./styled-components";
import FileDropzoneInstructions from "./FileDropzoneInstructions";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const FileDropzone = _ref => {
  let {
    onDrop,
    multiple,
    acceptedExtensions,
    maxSizeBytes,
    disabled,
    label
  } = _ref;
  return /*#__PURE__*/_jsx(Dropzone, {
    onDrop: onDrop,
    multiple: multiple,
    accept: acceptedExtensions.length ? acceptedExtensions : undefined,
    maxSize: maxSizeBytes,
    disabled: disabled
    // react-dropzone v12+ uses the File System Access API by default,
    // causing the bug described in https://github.com/streamlit/streamlit/issues/6176.
    ,
    useFsAccessApi: false,
    children: _ref2 => {
      let {
        getRootProps,
        getInputProps
      } = _ref2;
      return /*#__PURE__*/_jsxs(StyledFileDropzoneSection, {
        ...getRootProps(),
        "data-testid": "stFileUploaderDropzone",
        isDisabled: disabled,
        "aria-label": label,
        children: [/*#__PURE__*/_jsx("input", {
          "data-testid": "stFileUploaderDropzoneInput",
          ...getInputProps()
        }), /*#__PURE__*/_jsx(FileDropzoneInstructions, {
          multiple: multiple,
          acceptedExtensions: acceptedExtensions,
          maxSizeBytes: maxSizeBytes
        }), /*#__PURE__*/_jsx(BaseButton, {
          kind: BaseButtonKind.SECONDARY,
          disabled: disabled,
          size: BaseButtonSize.SMALL,
          children: "Browse files"
        })]
      });
    }
  });
};
export default FileDropzone;
//# sourceMappingURL=FileDropzone.js.map