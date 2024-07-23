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
import Expander from "./Expander";
import { jsx as _jsx } from "react/jsx-runtime";
const getProps = function () {
  let elementProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return {
    element: BlockProto.Expandable.create({
      label: "hi",
      expanded: true,
      ...elementProps
    }),
    isStale: false,
    empty: false,
    ...props
  };
};
describe("Expander container", () => {
  it("renders without crashing", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(Expander, {
      ...props,
      children: /*#__PURE__*/_jsx("div", {
        children: "test"
      })
    }));
    const expanderContainer = screen.getByTestId("stExpander");
    expect(expanderContainer).toBeInTheDocument();
  });
  it("does not render a list", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(Expander, {
      ...props,
      children: /*#__PURE__*/_jsx("div", {
        children: "test"
      })
    }));
    const list = screen.queryByRole("list");
    expect(list).not.toBeInTheDocument();
  });
  it("renders expander label as expected", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(Expander, {
      ...props,
      children: /*#__PURE__*/_jsx("div", {
        children: "test"
      })
    }));
    expect(screen.getByText(props.element.label)).toBeInTheDocument();
  });
  it("does not render collapse/expand icon if empty", () => {
    const props = getProps({}, {
      empty: true
    });
    render( /*#__PURE__*/_jsx(Expander, {
      ...props
    }));
    expect(screen.queryByTestId("stExpanderToggleIcon")).not.toBeInTheDocument();
  });
  it("renders expander with a spinner icon", () => {
    const props = getProps({
      icon: "spinner"
    });
    render( /*#__PURE__*/_jsx(Expander, {
      ...props,
      children: /*#__PURE__*/_jsx("div", {
        children: "test"
      })
    }));
    expect(screen.getByTestId("stExpanderIconSpinner")).toBeInTheDocument();
  });
  it("renders expander with a check icon", () => {
    const props = getProps({
      icon: ":material/check:"
    });
    render( /*#__PURE__*/_jsx(Expander, {
      ...props,
      children: /*#__PURE__*/_jsx("div", {
        children: "test"
      })
    }));
    expect(screen.getByTestId("stExpanderIconCheck")).toBeInTheDocument();
  });
  it("renders expander with a error icon", () => {
    const props = getProps({
      icon: ":material/error:"
    });
    render( /*#__PURE__*/_jsx(Expander, {
      ...props,
      children: /*#__PURE__*/_jsx("div", {
        children: "test"
      })
    }));
    expect(screen.getByTestId("stExpanderIconError")).toBeInTheDocument();
  });
  it("renders expander with an emoji icon", () => {
    const props = getProps({
      icon: "🚀"
    });
    render( /*#__PURE__*/_jsx(Expander, {
      ...props,
      children: /*#__PURE__*/_jsx("div", {
        children: "test"
      })
    }));
    expect(screen.getByTestId("stExpanderIcon")).toBeInTheDocument();
    expect(screen.getByText("🚀")).toBeInTheDocument();
  });
  it("renders expander with a material icon", () => {
    const props = getProps({
      icon: ":material/add_circle:"
    });
    render( /*#__PURE__*/_jsx(Expander, {
      ...props,
      children: /*#__PURE__*/_jsx("div", {
        children: "test"
      })
    }));
    expect(screen.getByTestId("stExpanderIcon")).toBeInTheDocument();
    expect(screen.getByText("add_circle")).toBeInTheDocument();
  });
  it("should render a expanded component", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(Expander, {
      ...props,
      children: /*#__PURE__*/_jsx("div", {
        children: "test"
      })
    }));
    expect(screen.getByText("test")).toBeVisible();
  });
  it("should render a collapsed component", () => {
    const props = getProps({
      expanded: false
    });
    render( /*#__PURE__*/_jsx(Expander, {
      ...props,
      children: /*#__PURE__*/_jsx("div", {
        children: "test"
      })
    }));
    expect(screen.getByText("test")).not.toBeVisible();
  });
  it("should render the text when expanded", () => {
    const props = getProps({
      expanded: false
    });
    render( /*#__PURE__*/_jsx(Expander, {
      ...props,
      children: /*#__PURE__*/_jsx("div", {
        children: "test"
      })
    }));
    fireEvent.click(screen.getByText("hi"));
    expect(screen.getByText("test")).toBeVisible();
  });
});
//# sourceMappingURL=Expander.test.js.map