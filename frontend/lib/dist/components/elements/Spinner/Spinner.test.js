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
import { BaseProvider, LightTheme } from "baseui";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Spinner as SpinnerProto } from "../../../proto";
import { render } from "../../../test_util";
import Spinner from "./Spinner";
import { jsx as _jsx } from "react/jsx-runtime";
const getProps = function () {
  let propOverrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let elementOverrides = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return {
    element: SpinnerProto.create({
      text: "Loading...",
      ...elementOverrides
    }),
    width: 0,
    ...propOverrides
  };
};
describe("Spinner component", () => {
  it("renders without crashing", () => {
    render( /*#__PURE__*/_jsx(BaseProvider, {
      theme: LightTheme,
      children: /*#__PURE__*/_jsx(Spinner, {
        ...getProps()
      })
    }));
    const spinnerContainer = screen.getByTestId("stSpinner");
    expect(spinnerContainer).toBeInTheDocument();
  });
  it("sets the text and width correctly", () => {
    render( /*#__PURE__*/_jsx(BaseProvider, {
      theme: LightTheme,
      children: /*#__PURE__*/_jsx(Spinner, {
        ...getProps({
          width: 100
        })
      })
    }));
    const markdownText = screen.getByText("Loading...");
    expect(markdownText).toBeInTheDocument();

    // For the width, as it's a style attribute, we can test it this way:
    const spinnerElement = screen.getByTestId("stSpinner");
    expect(spinnerElement).toHaveStyle("width: 100px");
  });
  it("sets additional className/CSS for caching spinner", () => {
    render( /*#__PURE__*/_jsx(BaseProvider, {
      theme: LightTheme,
      children: /*#__PURE__*/_jsx(Spinner, {
        ...getProps({}, {
          cache: true
        })
      })
    }));
    const spinnerContainer = screen.getByTestId("stSpinner");
    expect(spinnerContainer).toBeInTheDocument();
    expect(spinnerContainer).toHaveClass("stSpinner");
    expect(spinnerContainer).toHaveClass("cacheSpinner");
    expect(spinnerContainer).toHaveStyle("paddingBottom: 1rem");
  });
});
//# sourceMappingURL=Spinner.test.js.map