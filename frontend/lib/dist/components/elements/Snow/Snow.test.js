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
import { render } from "../../../test_util";
import "@testing-library/jest-dom";
import Snow, { NUM_FLAKES } from "./index";
import { jsx as _jsx } from "react/jsx-runtime";
const getProps = () => ({
  scriptRunId: "51522269"
});
describe("Snow element", () => {
  jest.useFakeTimers();
  beforeEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });
  it("renders without crashing", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(Snow, {
      ...props
    }));
    const snowElement = screen.getByTestId("stSnow");
    expect(snowElement).toBeInTheDocument();
    const snowImages = screen.getAllByRole("img");
    expect(snowImages.length).toBe(NUM_FLAKES);
    snowImages.forEach(node => {
      expect(node).toHaveAttribute("src");
    });
  });
  it("uses correct top-level class", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(Snow, {
      ...props
    }));
    const snowElement = screen.getByTestId("stSnow");
    expect(snowElement).toHaveClass("stSnow");
  });
});
//# sourceMappingURL=Snow.test.js.map