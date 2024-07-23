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
import { enableFetchMocks } from "jest-fetch-mock";
import { render } from "../../../test_util";
import { WidgetStateManager } from "../../../WidgetStateManager";
import { CameraInput as CameraInputProto, FileURLs as FileURLsProto, LabelVisibilityMessage as LabelVisibilityMessageProto } from "../../../proto";
import CameraInput from "./CameraInput";
import { jsx as _jsx } from "react/jsx-runtime";
jest.mock("react-webcam");
const getProps = function () {
  let elementProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return {
    element: CameraInputProto.create({
      id: "id",
      label: "test_label",
      help: "help",
      formId: "",
      ...elementProps
    }),
    width: 0,
    disabled: false,
    widgetMgr: new WidgetStateManager({
      sendRerunBackMsg: jest.fn(),
      formsDataChanged: jest.fn()
    }),
    // @ts-expect-error
    uploadClient: {
      uploadFile: jest.fn().mockImplementation(() => {
        return Promise.resolve();
      }),
      fetchFileURLs: jest.fn().mockImplementation(acceptedFiles => {
        return Promise.resolve(acceptedFiles.map(file => {
          return new FileURLsProto({
            fileId: file.name,
            uploadUrl: file.name,
            deleteUrl: file.name
          });
        }));
      }),
      deleteFile: jest.fn()
    },
    ...props
  };
};
describe("CameraInput widget", () => {
  enableFetchMocks();
  it("renders without crashing", () => {
    const props = getProps();
    jest.spyOn(props.widgetMgr, "setFileUploaderStateValue");
    render( /*#__PURE__*/_jsx(CameraInput, {
      ...props
    }));
    expect(screen.getByTestId("stCameraInput")).toBeInTheDocument();
    expect(screen.getByText("Take Photo")).toBeInTheDocument();
    // WidgetStateManager should have been called on mounting
    expect(props.widgetMgr.setFileUploaderStateValue).toHaveBeenCalledTimes(1);
  });
  it("shows a label", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(CameraInput, {
      ...props
    }));
    expect(screen.getByTestId("stWidgetLabel")).toHaveTextContent(props.element.label);
  });
  it("pass labelVisibility prop to StyledWidgetLabel correctly when hidden", () => {
    const props = getProps({
      labelVisibility: {
        value: LabelVisibilityMessageProto.LabelVisibilityOptions.HIDDEN
      }
    });
    render( /*#__PURE__*/_jsx(CameraInput, {
      ...props
    }));
    expect(screen.getByTestId("stWidgetLabel")).toHaveStyle("visibility: hidden");
  });
  it("pass labelVisibility prop to StyledWidgetLabel correctly when collapsed", () => {
    const props = getProps({
      labelVisibility: {
        value: LabelVisibilityMessageProto.LabelVisibilityOptions.COLLAPSED
      }
    });
    render( /*#__PURE__*/_jsx(CameraInput, {
      ...props
    }));
    expect(screen.getByTestId("stWidgetLabel")).toHaveStyle("display: none");
  });
});
//# sourceMappingURL=CameraInput.test.js.map