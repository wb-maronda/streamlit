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
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { render } from "../../../test_util";
import { DynamicButtonLabel } from "./DynamicButtonLabel";
import { jsx as _jsx } from "react/jsx-runtime";
const getProps = function () {
  let propOverrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    icon: "😀",
    label: "Button Label",
    ...propOverrides
  };
};
describe("DynamicButtonLabel", () => {
  it("renders without crashing", () => {
    render( /*#__PURE__*/_jsx(DynamicButtonLabel, {
      ...getProps()
    }));
    const buttonLabel = screen.getByText("Button Label");
    expect(buttonLabel).toBeInTheDocument();
  });
  it("renders label with no icon", () => {
    render( /*#__PURE__*/_jsx(DynamicButtonLabel, {
      ...getProps({
        icon: ""
      })
    }));
    expect(screen.getByTestId("stMarkdownContainer")).toHaveTextContent("Button Label");
    expect(screen.queryByTestId("stIconEmoji")).toBeNull();
  });
  it("renders icon with no label", () => {
    render( /*#__PURE__*/_jsx(DynamicButtonLabel, {
      ...getProps({
        label: ""
      })
    }));
    expect(screen.getByTestId("stIconEmoji")).toHaveTextContent("😀");
    expect(screen.queryByTestId("stMarkdownContainer")).toBeNull();
  });
  it("renders an emoji icon", () => {
    render( /*#__PURE__*/_jsx(DynamicButtonLabel, {
      ...getProps()
    }));
    const icon = screen.getByTestId("stIconEmoji");
    expect(icon).toHaveTextContent("😀");
  });
  it("renders a material icon", () => {
    render( /*#__PURE__*/_jsx(DynamicButtonLabel, {
      ...getProps({
        icon: ":material/thumb_up:"
      })
    }));
    const icon = screen.getByTestId("stIconMaterial");
    expect(icon).toHaveTextContent("thumb_up");
  });
  it("renders icon with no margin, if there is no label", () => {
    render( /*#__PURE__*/_jsx(DynamicButtonLabel, {
      ...getProps({
        label: ""
      })
    }));
    expect(screen.getByTestId("stIconEmoji")).toHaveStyle("margin: 0");
  });
});
//# sourceMappingURL=DynamicButtonLabel.test.js.map