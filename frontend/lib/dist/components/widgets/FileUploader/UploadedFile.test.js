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
import "@testing-library/jest-dom";
import { screen, fireEvent } from "@testing-library/react";
import { render } from "../../../test_util";
import UploadedFile, { UploadedFileStatus } from "./UploadedFile";
import { UploadFileInfo } from "./UploadFileInfo";
import { jsx as _jsx } from "react/jsx-runtime";
const getProps = fileStatus => ({
  fileInfo: new UploadFileInfo("filename.txt", 15, 1, fileStatus),
  onDelete: jest.fn()
});
describe("FileStatus widget", () => {
  it("shows progress bar when uploading", () => {
    const props = getProps({
      type: "uploading",
      cancelToken: null,
      progress: 40
    });
    render( /*#__PURE__*/_jsx(UploadedFileStatus, {
      ...props
    }));
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
  it("shows error status", () => {
    const props = getProps({
      type: "error",
      errorMessage: "Everything is terrible"
    });
    render( /*#__PURE__*/_jsx(UploadedFileStatus, {
      ...props
    }));
    const errorMessage = screen.getByTestId("stFileUploaderFileErrorMessage");
    expect(errorMessage).toHaveTextContent("Everything is terrible");
  });
  it("show file size when uploaded", () => {
    const props = getProps({
      type: "uploaded",
      fileId: "fileId",
      fileUrls: {}
    });
    render( /*#__PURE__*/_jsx(UploadedFileStatus, {
      ...props
    }));
    expect(screen.getByText("15.0B")).toBeInTheDocument();
  });
});
describe("UploadedFile widget", () => {
  it("renders without crashing", () => {
    const props = getProps({
      type: "uploaded",
      fileId: "fileId",
      fileUrls: {}
    });
    render( /*#__PURE__*/_jsx(UploadedFile, {
      ...props
    }));
    expect(screen.getByTestId("stFileUploaderFile")).toBeInTheDocument();
    const deleteBtn = screen.getByRole("button");
    fireEvent.click(deleteBtn);
    expect(props.onDelete).toHaveBeenCalledWith(1);
  });
});
//# sourceMappingURL=UploadedFile.test.js.map