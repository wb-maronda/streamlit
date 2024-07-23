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
import { WidgetStateManager } from "../../../WidgetStateManager";
import { LabelVisibilityMessage as LabelVisibilityMessageProto, MultiSelect as MultiSelectProto } from "../../../proto";
import { mockTheme } from "../../../mocks/mockTheme";
import Multiselect from "./Multiselect";
import { jsx as _jsx } from "react/jsx-runtime";
const getProps = function () {
  let elementProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let widgetProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return {
    element: MultiSelectProto.create({
      id: "1",
      label: "Label",
      default: [0],
      options: ["a", "b", "c"],
      placeholder: "Please select",
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
describe("Multiselect widget", () => {
  it("renders without crashing", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(Multiselect, {
      ...props
    }));
    const multiSelect = screen.getByRole("combobox");
    expect(multiSelect).toBeInTheDocument();
  });
  it("sets widget value on mount", () => {
    const props = getProps();
    jest.spyOn(props.widgetMgr, "setIntArrayValue");
    render( /*#__PURE__*/_jsx(Multiselect, {
      ...props
    }));
    expect(props.widgetMgr.setIntArrayValue).toHaveBeenCalledWith(props.element, props.element.default, {
      fromUi: false
    }, undefined);
  });
  it("can pass fragmentId to setIntArrayValue", () => {
    const props = getProps(undefined, {
      fragmentId: "myFragmentId"
    });
    jest.spyOn(props.widgetMgr, "setIntArrayValue");
    render( /*#__PURE__*/_jsx(Multiselect, {
      ...props
    }));
    expect(props.widgetMgr.setIntArrayValue).toHaveBeenCalledWith(props.element, props.element.default, {
      fromUi: false
    }, "myFragmentId");
  });
  it("has correct className and style", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(Multiselect, {
      ...props
    }));
    const multiSelect = screen.getByTestId("stMultiSelect");
    expect(multiSelect).toHaveClass("row-widget");
    expect(multiSelect).toHaveClass("stMultiSelect");
    expect(multiSelect).toHaveStyle("width: ".concat(props.width, "px"));
  });
  it("renders a label", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(Multiselect, {
      ...props
    }));
    const widgetLabel = screen.queryByText("".concat(props.element.label));
    expect(widgetLabel).toBeInTheDocument();
  });
  it("pass labelVisibility prop to StyledWidgetLabel correctly when hidden", () => {
    const props = getProps({
      labelVisibility: {
        value: LabelVisibilityMessageProto.LabelVisibilityOptions.HIDDEN
      }
    });
    render( /*#__PURE__*/_jsx(Multiselect, {
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
    render( /*#__PURE__*/_jsx(Multiselect, {
      ...props
    }));
    expect(screen.getByTestId("stWidgetLabel")).toHaveStyle("display: none");
  });
  describe("placeholder", () => {
    it("renders when it's empty", () => {
      const props = getProps({
        default: []
      });
      render( /*#__PURE__*/_jsx(Multiselect, {
        ...props
      }));
      const placeholder = screen.getByText("Please select");
      expect(placeholder).toBeInTheDocument();
    });
    it("renders with empty options", () => {
      const props = getProps({
        default: [],
        options: []
      });
      render( /*#__PURE__*/_jsx(Multiselect, {
        ...props
      }));
      const placeholder = screen.getByText("No options to select.");
      expect(placeholder).toBeInTheDocument();
    });
  });
  it("renders options", () => {
    const props = getProps({
      default: []
    });
    render( /*#__PURE__*/_jsx(Multiselect, {
      ...props
    }));
    const expandListButton = screen.getAllByTitle("open")[0];
    fireEvent.click(expandListButton);
    const options = screen.getAllByRole("option");
    expect(options.length).toBe(props.element.options.length);
    options.forEach((option, idx) => {
      expect(option).toHaveTextContent(props.element.options[idx]);
    });
  });
  it("filters based on label, not value", () => {
    const props = getProps({
      default: []
    });
    render( /*#__PURE__*/_jsx(Multiselect, {
      ...props
    }));
    const multiSelect = screen.getByRole("combobox");
    fireEvent.change(multiSelect, {
      target: {
        value: "1"
      }
    });
    expect(screen.getByText("No results")).toBeInTheDocument();
    fireEvent.change(multiSelect, {
      target: {
        value: "a"
      }
    });
    const match = screen.getByRole("option");
    expect(match).toHaveTextContent("a");
  });
  it("can be disabled", () => {
    const props = getProps({}, {
      disabled: true
    });
    render( /*#__PURE__*/_jsx(Multiselect, {
      ...props
    }));
    const multiSelect = screen.getByRole("combobox");
    expect(multiSelect).toBeDisabled();
  });
  it("can select multiple options", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(Multiselect, {
      ...props
    }));
    const multiSelect = screen.getByRole("combobox");
    fireEvent.change(multiSelect, {
      target: {
        value: "b"
      }
    });
    const match = screen.getByRole("option");
    fireEvent.click(match);
    const selections = screen.getAllByRole("button");
    expect(selections[0]).toHaveTextContent("a");
    expect(selections[1]).toHaveTextContent("b");
  });
  it("can remove options", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(Multiselect, {
      ...props
    }));

    // Clear current selection
    const deleteOptionButton = screen.getAllByTitle("Delete")[0];
    fireEvent.click(deleteOptionButton);

    // Should now see all options available again
    const expandListButton = screen.getAllByTitle("open")[0];
    fireEvent.click(expandListButton);
    const options = screen.getAllByRole("option");
    expect(options.length).toBe(props.element.options.length);
    options.forEach((option, idx) => {
      expect(option).toHaveTextContent(props.element.options[idx]);
    });
  });
  it("can clear all", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(Multiselect, {
      ...props
    }));

    // Clear all selections
    const clearAllButton = screen.getByRole("button", {
      name: "Clear all"
    });
    fireEvent.click(clearAllButton);

    // Should now see all options available again
    const expandListButton = screen.getAllByTitle("open")[0];
    fireEvent.click(expandListButton);
    const options = screen.getAllByRole("option");
    expect(options.length).toBe(props.element.options.length);
    options.forEach((option, idx) => {
      expect(option).toHaveTextContent(props.element.options[idx]);
    });
  });
  it("resets its value when form is cleared", () => {
    // Create a widget in a clearOnSubmit form
    const props = getProps({
      formId: "form"
    });
    props.widgetMgr.setFormClearOnSubmit("form", true);
    jest.spyOn(props.widgetMgr, "setIntArrayValue");
    render( /*#__PURE__*/_jsx(Multiselect, {
      ...props
    }));

    // Change the widget value
    const multiSelect = screen.getByRole("combobox");
    fireEvent.change(multiSelect, {
      target: {
        value: "b"
      }
    });
    const match = screen.getByRole("option");
    // Select b
    fireEvent.click(match);

    // Options list should only have c available - a & b selected
    const remainingOptions = screen.getAllByRole("option");
    expect(remainingOptions.length).toBe(1);
    expect(remainingOptions[0]).toHaveTextContent("c");
    expect(props.widgetMgr.setIntArrayValue).toHaveBeenCalledWith(props.element, [0, 1], {
      fromUi: true
    }, undefined);

    // "Submit" the form
    props.widgetMgr.submitForm("form", undefined);

    // Our widget should be reset, and the widgetMgr should be updated
    const expandListButton = screen.getAllByTitle("open")[0];
    fireEvent.click(expandListButton);
    // Options list should only have b & c available - default a selected
    const updatedOptions = screen.getAllByRole("option");
    expect(updatedOptions.length).toBe(2);
    expect(updatedOptions[0]).toHaveTextContent("b");
    expect(updatedOptions[1]).toHaveTextContent("c");
    expect(props.widgetMgr.setIntArrayValue).toHaveBeenLastCalledWith(props.element, props.element.default, {
      fromUi: true
    }, undefined);
  });
  describe("properly invalidates going over max selections", () => {
    it("has correct noResultsMsg when maxSelections is not passed", () => {
      const props = getProps(MultiSelectProto.create({
        id: "1",
        label: "Label",
        default: [0],
        options: ["a", "b", "c"]
      }));
      render( /*#__PURE__*/_jsx(Multiselect, {
        ...props
      }));

      // Type something with no matches
      const multiSelect = screen.getByRole("combobox");
      fireEvent.change(multiSelect, {
        target: {
          value: "z"
        }
      });
      expect(screen.getByText("No results")).toBeInTheDocument();
    });
    it("has correct noResultsMsg when no match and selections < maxSelections", () => {
      const props = getProps(MultiSelectProto.create({
        id: "1",
        label: "Label",
        default: [0],
        options: ["a", "b", "c"],
        maxSelections: 3
      }));
      render( /*#__PURE__*/_jsx(Multiselect, {
        ...props
      }));

      // Type something with no matches
      const multiSelect = screen.getByRole("combobox");
      fireEvent.change(multiSelect, {
        target: {
          value: "z"
        }
      });
      expect(screen.getByText("No results")).toBeInTheDocument();
    });
    it("has correct noResultsMsg when maxSelections reached", () => {
      const props = getProps(MultiSelectProto.create({
        id: "1",
        label: "Label",
        default: [0],
        options: ["a", "b", "c"],
        maxSelections: 2
      }));
      render( /*#__PURE__*/_jsx(Multiselect, {
        ...props
      }));

      // Select another option, b
      const multiSelect = screen.getByRole("combobox");
      fireEvent.change(multiSelect, {
        target: {
          value: "b"
        }
      });
      const match = screen.getByRole("option");
      fireEvent.click(match);
      expect(screen.getByText("You can only select up to 2 options. Remove an option first.")).toBeInTheDocument();
    });
    it("does not allow for more selection when an option is picked & maxSelections === 1", () => {
      const props = getProps(MultiSelectProto.create({
        id: "1",
        label: "Label",
        default: [0],
        options: ["a", "b", "c"],
        maxSelections: 1
      }));
      render( /*#__PURE__*/_jsx(Multiselect, {
        ...props
      }));
      const multiSelect = screen.getByRole("combobox");
      fireEvent.click(multiSelect);
      expect(screen.getByText("You can only select up to 1 option. Remove an option first.")).toBeInTheDocument();
    });
    it("does allow an option to be removed when we are at max selections", () => {
      const props = getProps(MultiSelectProto.create({
        id: "1",
        label: "Label",
        default: [0, 1],
        options: ["a", "b", "c"],
        maxSelections: 2
      }));
      render( /*#__PURE__*/_jsx(Multiselect, {
        ...props
      }));

      // Clear a selection
      const deleteOptionButton = screen.getAllByTitle("Delete")[0];
      fireEvent.click(deleteOptionButton);

      // Options list should only have a & c available - b selected
      const expandListButton = screen.getAllByTitle("open")[0];
      fireEvent.click(expandListButton);
      const updatedOptions = screen.getAllByRole("option");
      expect(updatedOptions.length).toBe(2);
      expect(updatedOptions[0]).toHaveTextContent("a");
      expect(updatedOptions[1]).toHaveTextContent("c");
    });
  });
});
//# sourceMappingURL=Multiselect.test.js.map