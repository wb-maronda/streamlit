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
import { Block as BlockProto } from "../../../proto";
import Dialog from "./Dialog";
import { jsx as _jsx } from "react/jsx-runtime";
const getProps = function () {
  let elementProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return {
    element: BlockProto.Dialog.create({
      title: "StreamlitDialog",
      isOpen: true,
      dismissible: true,
      ...elementProps
    }),
    ...props
  };
};
describe("Dialog container", () => {
  it("renders without crashing", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(Dialog, {
      ...props,
      children: /*#__PURE__*/_jsx("div", {
        children: "test"
      })
    }));
    const dialogContainer = screen.getByTestId("stModal");
    expect(dialogContainer).toBeInTheDocument();
  });
  it("should render the text when open", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(Dialog, {
      ...props,
      children: /*#__PURE__*/_jsx("div", {
        children: "test"
      })
    }));
    expect(screen.getByText("test")).toBeVisible();
  });
  it("should not render the text when closed", () => {
    const props = getProps({
      isOpen: false
    });
    render( /*#__PURE__*/_jsx(Dialog, {
      ...props,
      children: /*#__PURE__*/_jsx("div", {
        children: "test"
      })
    }));
    expect(() => screen.getByText("test")).toThrow();
  });
  it("should close when dismissible", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(Dialog, {
      ...props,
      children: /*#__PURE__*/_jsx("div", {
        children: "test"
      })
    }));
    expect(screen.getByText("test")).toBeVisible();
    fireEvent.click(screen.getByLabelText("Close"));
    // dialog should be closed by clicking outside and, thus, the content should be gone
    expect(() => screen.getByText("test")).toThrow();
  });
  it("should not close when not dismissible", () => {
    const props = getProps({
      dismissible: false
    });
    render( /*#__PURE__*/_jsx(Dialog, {
      ...props,
      children: /*#__PURE__*/_jsx("div", {
        children: "test"
      })
    }));
    expect(screen.getByText("test")).toBeVisible();
    // close button - and hence dismiss - does not exist
    expect(() => screen.getByLabelText("Close")).toThrow();
  });
});
//# sourceMappingURL=Dialog.test.js.map