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
import { fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { render } from "../../../test_util";
import { lightTheme } from "../../../theme";
import BaseButton, { BaseButtonKind, BaseButtonSize } from "./BaseButton";
import { jsx as _jsx } from "react/jsx-runtime";
const getProps = function () {
  let propOverrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    kind: BaseButtonKind.SECONDARY,
    size: BaseButtonSize.MEDIUM,
    onClick: () => {},
    disabled: false,
    fluidWidth: false,
    children: null,
    ...propOverrides
  };
};
describe("Button element", () => {
  Object.keys(BaseButtonKind).forEach(key => {
    const kind = BaseButtonKind[key];
    it(`renders ${kind} buttons correctly`, () => {
      render( /*#__PURE__*/_jsx(BaseButton, {
        ...getProps({
          kind
        }),
        children: "Hello"
      }));
      const buttonWidget = screen.getByTestId(`stBaseButton-${kind}`);
      expect(buttonWidget).toBeInTheDocument();
    });
    it(`renders disabled ${kind} correctly`, () => {
      render( /*#__PURE__*/_jsx(BaseButton, {
        ...getProps({
          kind,
          disabled: true
        }),
        children: "Hello"
      }));
      const buttonWidget = screen.getByTestId(`stBaseButton-${kind}`);
      expect(buttonWidget).toBeDisabled();
    });
  });
  Object.keys(BaseButtonSize).forEach(key => {
    const size = BaseButtonSize[key];
    it(`renders ${size} buttons correctly`, () => {
      render( /*#__PURE__*/_jsx(BaseButton, {
        ...getProps({
          size
        }),
        children: "Hello"
      }));
      const {
        spacing
      } = lightTheme.emotion;
      const expectedPadding = {
        [BaseButtonSize.XSMALL]: `${spacing.twoXS} ${spacing.sm}`,
        [BaseButtonSize.SMALL]: `${spacing.twoXS} ${spacing.md}`,
        [BaseButtonSize.LARGE]: `${spacing.md} ${spacing.md}`,
        [BaseButtonSize.MEDIUM]: `${spacing.xs} ${spacing.md}`
      };
      const buttonWidget = screen.getByRole("button");
      expect(buttonWidget).toHaveStyle(`padding: ${expectedPadding[size]}`);
    });
  });
  it("renders disabled buttons correctly", () => {
    render( /*#__PURE__*/_jsx(BaseButton, {
      ...getProps({
        disabled: true
      }),
      children: "Hello"
    }));
    const buttonWidget = screen.getByRole("button");
    expect(buttonWidget).toBeDisabled();
  });
  it("calls onClick when button is clicked", () => {
    const onClick = jest.fn();
    render( /*#__PURE__*/_jsx(BaseButton, {
      ...getProps({
        onClick
      }),
      children: "Hello"
    }));
    const buttonWidget = screen.getByRole("button");
    fireEvent.click(buttonWidget);
    expect(onClick).toHaveBeenCalled();
  });
  it("does not use container width by default", () => {
    render( /*#__PURE__*/_jsx(BaseButton, {
      ...getProps(),
      children: "Hello"
    }));
    const buttonWidget = screen.getByRole("button");
    expect(buttonWidget).toHaveStyle("width: auto");
  });
  it("renders use container width buttons correctly", () => {
    render( /*#__PURE__*/_jsx(BaseButton, {
      ...getProps({
        fluidWidth: true
      }),
      children: "Hello"
    }));
    const buttonWidget = screen.getByRole("button");
    expect(buttonWidget).toHaveStyle("width: 100%");
  });
  it("renders use container width buttons correctly when explicit width passed", () => {
    // Fluid width is a number when the button has a help tooltip
    // (need to pass explicit width down otherwise tooltip breaks use_container_width=True)
    render( /*#__PURE__*/_jsx(BaseButton, {
      ...getProps({
        fluidWidth: 250
      }),
      children: "Hello"
    }));
    const buttonWidget = screen.getByRole("button");
    expect(buttonWidget).toHaveStyle("width: 250px");
  });
});
//# sourceMappingURL=BaseButton.test.js.map