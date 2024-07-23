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
import withPagination from "../../../hocs/withPagination";
import UploadedFile from "./UploadedFile";
import { StyledUploadedFiles, StyledUploadedFilesList, StyledUploadedFilesListItem } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
const UploadedFileList = _ref => {
  let {
    items,
    onDelete
  } = _ref;
  return /*#__PURE__*/_jsx(StyledUploadedFilesList, {
    children: items.map(file => /*#__PURE__*/_jsx(StyledUploadedFilesListItem, {
      children: /*#__PURE__*/_jsx(UploadedFile, {
        fileInfo: file,
        onDelete: onDelete
      })
    }, file.id))
  });
};
export const PaginatedFiles = withPagination(UploadedFileList);
const UploadedFiles = props => /*#__PURE__*/_jsx(StyledUploadedFiles, {
  children: /*#__PURE__*/_jsx(PaginatedFiles, {
    ...props
  })
});
export default UploadedFiles;
//# sourceMappingURL=UploadedFiles.js.map