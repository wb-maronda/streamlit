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
import { LabelVisibilityOptions } from "../../../util/utils";
import BaseColorPicker from "./BaseColorPicker";
import { jsx as _jsx } from "react/jsx-runtime";
const getProps = function () {
  let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    label: "Label",
    value: "#000000",
    width: 0,
    disabled: false,
    onChange: jest.fn(),
    ...props
  };
};
describe("ColorPicker widget", () => {
  it("renders without crashing", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(BaseColorPicker, {
      ...props
    }));
    const colorPicker = screen.getByTestId("stColorPicker");
    expect(colorPicker).toBeInTheDocument();
    expect(colorPicker).toHaveClass("stColorPicker");
  });
  it("should render a label in the title", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(BaseColorPicker, {
      ...props
    }));
    const widgetLabel = screen.queryByText(`${props.label}`);
    expect(widgetLabel).toBeInTheDocument();
  });
  it("pass labelVisibility prop to StyledWidgetLabel correctly when hidden", () => {
    const props = getProps({
      labelVisibility: LabelVisibilityOptions.Hidden
    });
    render( /*#__PURE__*/_jsx(BaseColorPicker, {
      ...props
    }));
    expect(screen.getByTestId("stWidgetLabel")).toHaveStyle("visibility: hidden");
  });
  it("pass labelVisibility prop to StyledWidgetLabel correctly when collapsed", () => {
    const props = getProps({
      labelVisibility: LabelVisibilityOptions.Collapsed
    });
    render( /*#__PURE__*/_jsx(BaseColorPicker, {
      ...props
    }));
    expect(screen.getByTestId("stWidgetLabel")).toHaveStyle("display: none");
  });
  it("should have correct style", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(BaseColorPicker, {
      ...props
    }));
    const colorPicker = screen.getByTestId("stColorPicker");
    expect(colorPicker).toHaveStyle(`width: ${props.width}px`);
  });
  it("should render a default color in the preview and the color picker", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(BaseColorPicker, {
      ...props
    }));
    const colorBlock = screen.getByTestId("stColorPickerBlock");
    fireEvent.click(colorBlock);
    expect(colorBlock).toHaveStyle("background-color: #000000");
    const colorInput = screen.getByRole("textbox");
    expect(colorInput).toHaveValue("#000000");
  });
  it("supports hex shorthand", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(BaseColorPicker, {
      ...props
    }));
    const colorBlock = screen.getByTestId("stColorPickerBlock");
    fireEvent.click(colorBlock);
    const colorInput = screen.getByRole("textbox");
    fireEvent.change(colorInput, {
      target: {
        value: "#333"
      }
    });
    expect(colorInput).toHaveValue("#333333");
    expect(colorBlock).toHaveStyle("background-color: #333333");
  });
  it("should update the widget value when it's changed", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(BaseColorPicker, {
      ...props
    }));
    const newColor = "#E91E63";
    const colorBlock = screen.getByTestId("stColorPickerBlock");
    fireEvent.click(colorBlock);
    const colorInput = screen.getByRole("textbox");
    fireEvent.change(colorInput, {
      target: {
        value: newColor
      }
    });
    expect(colorInput).toHaveValue(newColor);
    expect(colorBlock).toHaveStyle(`background-color: ${newColor}`);
  });
  describe("ColorPicker widget with optional params", () => {
    it("renders with showValue", () => {
      const props = getProps({
        showValue: true
      });
      render( /*#__PURE__*/_jsx(BaseColorPicker, {
        ...props
      }));
      const colorLabel = screen.getByText("#000000");
      expect(colorLabel).toBeInTheDocument();
    });
    it("renders without showValue", () => {
      const props = getProps();
      render( /*#__PURE__*/_jsx(BaseColorPicker, {
        ...props
      }));
      const colorLabel = screen.queryByText("#000000");
      expect(colorLabel).not.toBeInTheDocument();
    });
    it("should render TooltipIcon if help text provided", () => {
      const props = getProps({
        help: "help text"
      });
      render( /*#__PURE__*/_jsx(BaseColorPicker, {
        ...props
      }));
      const tooltipIcon = screen.getByTestId("stTooltipIcon");
      expect(tooltipIcon).toBeInTheDocument();
    });
  });
});
//# sourceMappingURL=BaseColorPicker.test.js.map