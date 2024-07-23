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
import { fireEvent, screen } from "@testing-library/react";
import { render } from "../../../test_util";
import { WidgetStateManager } from "../../../WidgetStateManager";
import { DateInput as DateInputProto, LabelVisibilityMessage as LabelVisibilityMessageProto } from "../../../proto";
import { mockTheme } from "../../../mocks/mockTheme";
import DateInput from "./DateInput";
import { jsx as _jsx } from "react/jsx-runtime";
const originalDate = "1970/1/20";
const fullOriginalDate = "1970/01/20";
const newDate = "2020/02/06";
const getProps = function () {
  let elementProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let widgetProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return {
    element: DateInputProto.create({
      id: "1",
      label: "Label",
      default: [fullOriginalDate],
      min: originalDate,
      format: "YYYY/MM/DD",
      ...elementProps
    }),
    width: 0,
    disabled: false,
    theme: mockTheme.emotion,
    widgetMgr: new WidgetStateManager({
      sendRerunBackMsg: jest.fn(),
      formsDataChanged: jest.fn()
    }),
    ...widgetProps
  };
};
describe("DateInput widget", () => {
  it("renders without crashing", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(DateInput, {
      ...props
    }));
    expect(screen.getByTestId("stDateInput")).toBeInTheDocument();
  });
  it("renders a label", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(DateInput, {
      ...props
    }));
    expect(screen.getByText("Label")).toBeInTheDocument();
  });
  it("displays the correct placeholder and value for the provided format", () => {
    const props = getProps({
      format: "DD.MM.YYYY"
    });
    render( /*#__PURE__*/_jsx(DateInput, {
      ...props
    }));
    expect(screen.getByPlaceholderText("DD.MM.YYYY")).toBeInTheDocument();
    expect(screen.getByDisplayValue("20.01.1970")).toBeInTheDocument();
  });
  it("pass labelVisibility prop to StyledWidgetLabel correctly when hidden", () => {
    const props = getProps({
      labelVisibility: {
        value: LabelVisibilityMessageProto.LabelVisibilityOptions.HIDDEN
      }
    });
    render( /*#__PURE__*/_jsx(DateInput, {
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
    render( /*#__PURE__*/_jsx(DateInput, {
      ...props
    }));
    expect(screen.getByTestId("stWidgetLabel")).toHaveStyle("display: none");
  });
  it("sets widget value on render", () => {
    const props = getProps();
    jest.spyOn(props.widgetMgr, "setStringArrayValue");
    render( /*#__PURE__*/_jsx(DateInput, {
      ...props
    }));
    expect(props.widgetMgr.setStringArrayValue).toHaveBeenCalledWith(props.element, [fullOriginalDate], {
      fromUi: false
    }, undefined);
  });
  it("can pass a fragmentId to setStringArrayValue", () => {
    const props = getProps(undefined, {
      fragmentId: "myFragmentId"
    });
    jest.spyOn(props.widgetMgr, "setStringArrayValue");
    render( /*#__PURE__*/_jsx(DateInput, {
      ...props
    }));
    expect(props.widgetMgr.setStringArrayValue).toHaveBeenCalledWith(props.element, [fullOriginalDate], {
      fromUi: false
    }, "myFragmentId");
  });
  it("has correct className and style", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(DateInput, {
      ...props
    }));
    const dateInput = screen.getByTestId("stDateInput");
    expect(dateInput).toHaveAttribute("class", "stDateInput");
    expect(dateInput).toHaveStyle("width: 0px;");
  });
  it("renders a default value", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(DateInput, {
      ...props
    }));
    expect(screen.getByTestId("stDateInput-Input")).toHaveValue(fullOriginalDate);
  });
  it("can be disabled", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(DateInput, {
      ...props,
      disabled: true
    }));
    expect(screen.getByTestId("stDateInput-Input")).toBeDisabled();
  });
  it("updates the widget value when it's changed", () => {
    const props = getProps();
    jest.spyOn(props.widgetMgr, "setStringArrayValue");
    render( /*#__PURE__*/_jsx(DateInput, {
      ...props
    }));
    const datePicker = screen.getByTestId("stDateInput-Input");
    fireEvent.change(datePicker, {
      target: {
        value: newDate
      }
    });
    expect(screen.getByTestId("stDateInput-Input")).toHaveValue(newDate);
    expect(props.widgetMgr.setStringArrayValue).toHaveBeenCalledWith(props.element, [newDate], {
      fromUi: true
    }, undefined);
  });
  it("resets its value to default when it's closed with empty input", () => {
    const props = getProps();
    jest.spyOn(props.widgetMgr, "setStringArrayValue");
    render( /*#__PURE__*/_jsx(DateInput, {
      ...props
    }));
    const dateInput = screen.getByTestId("stDateInput-Input");
    fireEvent.change(dateInput, {
      target: {
        value: newDate
      }
    });
    expect(dateInput).toHaveValue(newDate);

    // Simulating clearing the date input
    fireEvent.change(dateInput, {
      target: {
        value: null
      }
    });

    // Simulating the close action
    fireEvent.blur(dateInput);
    expect(dateInput).toHaveValue(fullOriginalDate);
  });
  it("has a minDate", () => {
    // The fireEvent.change will modify the input's value unconditionally. This is because
    // the underlying input element doesn't possess a 'min' attribute.
    let dateInputRef;
    const props = getProps();
    render( /*#__PURE__*/_jsx(DateInput
    // @ts-expect-error
    , {
      ref: ref => {
        dateInputRef = ref;
      },
      ...props
    }));
    expect(dateInputRef.props.element.min).toStrictEqual(originalDate);
    expect(dateInputRef.props.element.max).toBe("");
  });
  it("has a maxDate if it is passed", () => {
    // The fireEvent.change will modify the input's value unconditionally. This is because
    // the underlying input element doesn't possess a 'max' attribute.
    let dateInputRef;
    const props = getProps({
      max: "2030/02/06"
    });
    render( /*#__PURE__*/_jsx(DateInput
    // @ts-expect-error
    , {
      ref: ref => {
        dateInputRef = ref;
      },
      ...props
    }));
    expect(dateInputRef.props.element.max).toStrictEqual("2030/02/06");
    expect(dateInputRef.props.element.min).toBe(originalDate);
  });
  it("resets its value when form is cleared", () => {
    // Create a widget in a clearOnSubmit form
    const props = getProps({
      formId: "form"
    });
    props.widgetMgr.setFormClearOnSubmit("form", true);
    jest.spyOn(props.widgetMgr, "setStringArrayValue");
    render( /*#__PURE__*/_jsx(DateInput, {
      ...props
    }));
    const dateInput = screen.getByTestId("stDateInput-Input");
    fireEvent.change(dateInput, {
      target: {
        value: newDate
      }
    });
    expect(dateInput).toHaveValue(newDate);
    expect(props.widgetMgr.setStringArrayValue).toHaveBeenCalledWith(props.element, [newDate], {
      fromUi: true
    }, undefined);

    // "Submit" the form
    props.widgetMgr.submitForm("form", undefined);

    // Our widget should be reset, and the widgetMgr should be updated
    expect(dateInput).toHaveValue(fullOriginalDate);
    expect(props.widgetMgr.setStringArrayValue).toHaveBeenLastCalledWith(props.element, [fullOriginalDate], {
      fromUi: true
    }, undefined);
  });
});
//# sourceMappingURL=DateInput.test.js.map