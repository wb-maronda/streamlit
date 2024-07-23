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
import { LabelVisibilityOptions } from "../../../util/utils";
import { WidgetLabel } from "./WidgetLabel";
import { jsx as _jsx } from "react/jsx-runtime";
const getProps = props => ({
  label: "Label",
  ...props
});
describe("Widget Label", () => {
  it("renders WidgetLabel as expected", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(WidgetLabel, {
      ...props
    }));
    expect(screen.getByTestId("stWidgetLabel")).toBeInTheDocument();
  });
  it("renders label text as expected", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(WidgetLabel, {
      ...props
    }));
    expect(screen.getByTestId("stWidgetLabel")).toBeInTheDocument();
    // Test that isLabel prop is true, which makes font size smaller
    expect(screen.getByText("".concat(props.label))).toHaveStyle("font-size: 14px");
  });
  it("can be disabled", () => {
    const props = getProps({
      disabled: true
    });
    render( /*#__PURE__*/_jsx(WidgetLabel, {
      ...props
    }));
    expect(screen.getByTestId("stWidgetLabel")).toHaveAttribute("disabled");
  });
  it("can hide label visibility", () => {
    const props = getProps({
      labelVisibility: LabelVisibilityOptions.Hidden
    });
    render( /*#__PURE__*/_jsx(WidgetLabel, {
      ...props
    }));
    expect(screen.getByTestId("stWidgetLabel")).toHaveStyle("visibility: hidden");
  });
});
//# sourceMappingURL=WidgetLabel.test.js.map