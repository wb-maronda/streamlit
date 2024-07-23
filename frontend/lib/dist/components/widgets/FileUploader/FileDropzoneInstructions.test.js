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
import { screen } from "@testing-library/react";
import { render } from "../../../test_util";
import FileDropzoneInstructions from "./FileDropzoneInstructions";
import { jsx as _jsx } from "react/jsx-runtime";
const getProps = function () {
  let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    multiple: true,
    acceptedExtensions: [],
    maxSizeBytes: 2000,
    ...props
  };
};
describe("FileDropzoneInstructions widget", () => {
  it("renders without crashing", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(FileDropzoneInstructions, {
      ...props
    }));
    expect(screen.getByTestId("stFileUploaderDropzoneInstructions")).toBeInTheDocument();
  });
  it("shows file size limit", () => {
    const props = getProps({
      maxSizeBytes: 2000
    });
    render( /*#__PURE__*/_jsx(FileDropzoneInstructions, {
      ...props
    }));
    expect(screen.getByText("Limit 2KB per file")).toBeInTheDocument();
  });
  it("renders without extensions", () => {
    const props = getProps({
      acceptedExtensions: []
    });
    render( /*#__PURE__*/_jsx(FileDropzoneInstructions, {
      ...props
    }));
    expect(screen.getByText(/per file$/)).toBeInTheDocument();
  });
  it("renders with extensions", () => {
    const props = getProps({
      acceptedExtensions: ["jpg", "csv.gz", ".png", ".tar.gz"]
    });
    render( /*#__PURE__*/_jsx(FileDropzoneInstructions, {
      ...props
    }));
    expect(screen.getByText(/• JPG, CSV.GZ, PNG, TAR.GZ/)).toBeInTheDocument();
  });
});
//# sourceMappingURL=FileDropzoneInstructions.test.js.map