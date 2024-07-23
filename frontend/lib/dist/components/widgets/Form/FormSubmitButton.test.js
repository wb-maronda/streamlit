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
import { enableAllPlugins } from "immer";
import { Button as ButtonProto } from "../../../proto";
import { createFormsData, WidgetStateManager } from "../../../WidgetStateManager";
import { FormSubmitButton } from "./FormSubmitButton";

// Required by ImmerJS
import { jsx as _jsx } from "react/jsx-runtime";
enableAllPlugins();
describe("FormSubmitButton", () => {
  let formsData;
  let widgetMgr;
  beforeEach(() => {
    formsData = createFormsData();
    widgetMgr = new WidgetStateManager({
      sendRerunBackMsg: jest.fn(),
      formsDataChanged: jest.fn(newData => {
        formsData = newData;
      })
    });
  });
  function getProps() {
    let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let useContainerWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    let helpText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "mockHelpText";
    return {
      element: ButtonProto.create({
        id: "1",
        label: "Submit",
        formId: "mockFormId",
        help: helpText,
        useContainerWidth
      }),
      disabled: false,
      hasInProgressUpload: false,
      width: 250,
      widgetMgr,
      ...props
    };
  }
  it("renders without crashing", () => {
    render( /*#__PURE__*/_jsx(FormSubmitButton, {
      ...getProps()
    }));
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("has correct className and style", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(FormSubmitButton, {
      ...props
    }));
    const formSubmitButton = screen.getByTestId("stFormSubmitButton");
    expect(formSubmitButton).toHaveClass("row-widget");
    expect(formSubmitButton).toHaveClass("stButton");
    expect(formSubmitButton).toHaveStyle("width: ".concat(props.width, "px"));
  });
  it("renders a label", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(FormSubmitButton, {
      ...props
    }));
    const formSubmitButton = screen.getByRole("button", {
      name: "".concat(props.element.label)
    });
    expect(formSubmitButton).toBeInTheDocument();
  });
  it("calls submitForm when clicked", async () => {
    const props = getProps();
    jest.spyOn(props.widgetMgr, "submitForm");
    render( /*#__PURE__*/_jsx(FormSubmitButton, {
      ...props
    }));
    const formSubmitButton = screen.getByRole("button");
    fireEvent.click(formSubmitButton);
    expect(props.widgetMgr.submitForm).toHaveBeenCalledWith(props.element.formId, undefined, props.element);
  });
  it("can pass fragmentId to submitForm", async () => {
    const props = getProps({
      fragmentId: "myFragmentId"
    });
    jest.spyOn(props.widgetMgr, "submitForm");
    render( /*#__PURE__*/_jsx(FormSubmitButton, {
      ...props
    }));
    const formSubmitButton = screen.getByRole("button");
    fireEvent.click(formSubmitButton);
    expect(props.widgetMgr.submitForm).toHaveBeenCalledWith(props.element.formId, "myFragmentId", props.element);
  });
  it("is disabled when form has pending upload", () => {
    const props = getProps({
      hasInProgressUpload: true
    });
    render( /*#__PURE__*/_jsx(FormSubmitButton, {
      ...props
    }));
    const formSubmitButton = screen.getByRole("button");
    expect(formSubmitButton).toBeDisabled();
  });
  it("Adds the proto to submitButtons on mount and removes the proto on unmount", () => {
    var _formsData$submitButt, _formsData$submitButt2, _formsData$submitButt3, _formsData$submitButt4;
    expect(formsData.submitButtons.get("mockFormId")).toBeUndefined();
    const props = getProps();
    const props2 = getProps({
      element: ButtonProto.create({
        id: "2",
        label: "Submit",
        formId: "mockFormId",
        help: "mockHelpText"
      })
    });
    const {
      unmount: unmountView1
    } = render( /*#__PURE__*/_jsx(FormSubmitButton, {
      ...props
    }));
    expect((_formsData$submitButt = formsData.submitButtons.get("mockFormId")) === null || _formsData$submitButt === void 0 ? void 0 : _formsData$submitButt.length).toBe(1);
    // @ts-expect-error
    expect(formsData.submitButtons.get("mockFormId")[0]).toEqual(props.element);
    const {
      unmount: unmountView2
    } = render( /*#__PURE__*/_jsx(FormSubmitButton, {
      ...props2
    }));
    expect((_formsData$submitButt2 = formsData.submitButtons.get("mockFormId")) === null || _formsData$submitButt2 === void 0 ? void 0 : _formsData$submitButt2.length).toBe(2);
    // @ts-expect-error
    expect(formsData.submitButtons.get("mockFormId")[1]).toEqual(props2.element);
    unmountView1();
    expect((_formsData$submitButt3 = formsData.submitButtons.get("mockFormId")) === null || _formsData$submitButt3 === void 0 ? void 0 : _formsData$submitButt3.length).toBe(1);
    // @ts-expect-error
    expect(formsData.submitButtons.get("mockFormId")[0]).toEqual(props2.element);
    unmountView2();
    expect((_formsData$submitButt4 = formsData.submitButtons.get("mockFormId")) === null || _formsData$submitButt4 === void 0 ? void 0 : _formsData$submitButt4.length).toBe(0);
  });
  it("does not use container width by default", () => {
    render( /*#__PURE__*/_jsx(FormSubmitButton, {
      ...getProps()
    }));
    const formSubmitButton = screen.getByRole("button");
    expect(formSubmitButton).toHaveStyle("width: auto");
  });
  it("passes useContainerWidth property with help correctly", () => {
    render( /*#__PURE__*/_jsx(FormSubmitButton, {
      ...getProps({}, true)
    }));
    const formSubmitButton = screen.getByRole("button");
    expect(formSubmitButton).toHaveStyle("width: ".concat(250, "px"));
  });
  it("passes useContainerWidth property without help correctly", () => {
    render( /*#__PURE__*/_jsx(FormSubmitButton, {
      ...getProps({}, true, "")
    }));
    const formSubmitButton = screen.getByRole("button");
    expect(formSubmitButton).toHaveStyle("width: 100%");
  });
});
//# sourceMappingURL=FormSubmitButton.test.js.map