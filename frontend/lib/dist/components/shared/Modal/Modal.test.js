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
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { render } from "../../../test_util";
import Modal from "./Modal";
import { jsx as _jsx } from "react/jsx-runtime";
describe("Modal component", () => {
  it("renders without crashing", () => {
    render( /*#__PURE__*/_jsx(BaseProvider, {
      theme: LightTheme,
      children: /*#__PURE__*/_jsx(Modal, {
        isOpen: true
      })
    }));
    const modalElement = screen.getByTestId("stDialog");
    expect(modalElement).toBeInTheDocument();
    expect(modalElement).toHaveClass("stDialog");
  });
});
//# sourceMappingURL=Modal.test.js.map