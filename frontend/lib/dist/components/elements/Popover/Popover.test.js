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
import Popover from "./Popover";
import { jsx as _jsx } from "react/jsx-runtime";
const getProps = function () {
  let elementProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return {
    element: BlockProto.Popover.create({
      label: "label",
      useContainerWidth: false,
      disabled: false,
      help: "",
      ...elementProps
    }),
    empty: false,
    width: 100,
    ...props
  };
};
describe("Popover container", () => {
  it("renders without crashing", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(Popover, {
      ...props,
      children: /*#__PURE__*/_jsx("div", {
        children: "test"
      })
    }));
    const popoverButton = screen.getByTestId("stPopover");
    expect(popoverButton).toBeInTheDocument();
  });
  it("renders label as expected", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(Popover, {
      ...props,
      children: /*#__PURE__*/_jsx("div", {
        children: "test"
      })
    }));
    expect(screen.getByText(props.element.label)).toBeInTheDocument();
  });
  it("should render the text when opened", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(Popover, {
      ...props,
      children: /*#__PURE__*/_jsx("div", {
        children: "test"
      })
    }));
    fireEvent.click(screen.getByText("label"));
    // Text should be visible now
    expect(screen.queryByText("test")).toBeVisible();
  });
});
//# sourceMappingURL=Popover.test.js.map