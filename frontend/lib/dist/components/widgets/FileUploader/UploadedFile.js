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
import { Clear, Error, InsertDriveFile } from "@emotion-icons/material-outlined";
import BaseButton, { BaseButtonKind } from "../../shared/BaseButton";
import Icon from "../../shared/Icon";
import ProgressBar, { Size } from "../../shared/ProgressBar";
import { Small } from "../../shared/TextElements";
import { FileSize, getSizeDisplay } from "../../../util/FileHelper";
import { StyledErrorMessage, StyledFileError, StyledFileErrorIcon, StyledFileIcon, StyledUploadedFile, StyledUploadedFileData, StyledUploadedFileName } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export const UploadedFileStatus = _ref => {
  let {
    fileInfo
  } = _ref;
  if (fileInfo.status.type === "uploading") {
    return /*#__PURE__*/_jsx(ProgressBar, {
      value: fileInfo.status.progress,
      size: Size.SMALL,
      overrides: {
        Bar: {
          style: {
            marginLeft: 0,
            marginTop: "4px"
          }
        }
      }
    });
  }
  if (fileInfo.status.type === "error") {
    return /*#__PURE__*/_jsxs(StyledFileError, {
      children: [/*#__PURE__*/_jsx(StyledErrorMessage, {
        "data-testid": "stFileUploaderFileErrorMessage",
        children: fileInfo.status.errorMessage
      }), /*#__PURE__*/_jsx(StyledFileErrorIcon, {
        children: /*#__PURE__*/_jsx(Icon, {
          content: Error,
          size: "lg"
        })
      })]
    });
  }
  if (fileInfo.status.type === "uploaded") {
    return /*#__PURE__*/_jsx(Small, {
      children: getSizeDisplay(fileInfo.size, FileSize.Byte)
    });
  }
  return null;
};
const UploadedFile = _ref2 => {
  let {
    fileInfo,
    onDelete
  } = _ref2;
  return /*#__PURE__*/_jsxs(StyledUploadedFile, {
    className: "stFileUploaderFile",
    "data-testid": "stFileUploaderFile",
    children: [/*#__PURE__*/_jsx(StyledFileIcon, {
      children: /*#__PURE__*/_jsx(Icon, {
        content: InsertDriveFile,
        size: "twoXL"
      })
    }), /*#__PURE__*/_jsxs(StyledUploadedFileData, {
      className: "stFileUploaderFileData",
      children: [/*#__PURE__*/_jsx(StyledUploadedFileName, {
        className: "stFileUploaderFileName",
        "data-testid": "stFileUploaderFileName",
        title: fileInfo.name,
        children: fileInfo.name
      }), /*#__PURE__*/_jsx(UploadedFileStatus, {
        fileInfo: fileInfo
      })]
    }), /*#__PURE__*/_jsx("div", {
      "data-testid": "stFileUploaderDeleteBtn",
      children: /*#__PURE__*/_jsx(BaseButton, {
        onClick: () => onDelete(fileInfo.id),
        kind: BaseButtonKind.MINIMAL,
        children: /*#__PURE__*/_jsx(Icon, {
          content: Clear,
          size: "lg"
        })
      })
    })]
  });
};
export default UploadedFile;
//# sourceMappingURL=UploadedFile.js.map