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

import React, { PureComponent } from "react";
import "@testing-library/jest-dom";
import { fireEvent, screen } from "@testing-library/react";
import { render } from "../../../test_util";
import withFullScreenWrapper from "./withFullScreenWrapper";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
class TestComponent extends PureComponent {
  constructor() {
    super(...arguments);
    this.render = () => /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsx("div", {
        children: this.props.label
      }), /*#__PURE__*/_jsx("div", {
        children: this.props.isFullScreen ? "isFullScreen" : "NOT isFullScreen"
      })]
    });
  }
}
const getProps = function () {
  let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    width: 100,
    isFullScreen: false,
    expand: jest.fn(),
    collapse: jest.fn(),
    label: "label",
    ...props
  };
};
const WrappedTestComponent = withFullScreenWrapper(TestComponent);
describe("withFullScreenWrapper HOC", () => {
  it("renders without crashing", () => {
    render( /*#__PURE__*/_jsx(WrappedTestComponent, {
      ...getProps()
    }));
    expect(screen.getByTestId("stFullScreenFrame")).toBeInTheDocument();
  });
  it("renders a component wrapped with FullScreenWrapper", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(WrappedTestComponent, {
      ...props
    }));
    expect(screen.getByTestId("stFullScreenFrame")).toHaveStyle("width: ".concat(props.width));
  });
  it("renders FullScreenWrapper with specified height", () => {
    const props = getProps({
      width: 123,
      label: "label",
      height: 455
    });
    render( /*#__PURE__*/_jsx(WrappedTestComponent, {
      ...props
    }));
    expect(screen.getByTestId("stFullScreenFrame")).toHaveStyle("width: ".concat(props.width));
    expect(screen.getByTestId("stFullScreenFrame")).toHaveStyle("height: ".concat(props.height));
  });
  it("passes unrelated props to wrapped component", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(WrappedTestComponent, {
      ...props
    }));
    expect(screen.getByTestId("stFullScreenFrame")).toBeInTheDocument();
    expect(screen.getByText("".concat(props.label))).toBeInTheDocument();
  });
  it("passes `isFullScreen` to wrapped component", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(WrappedTestComponent, {
      ...props
    }));

    // by default, isFullScreen == false
    expect(screen.getByText("NOT isFullScreen")).toBeInTheDocument();

    // zoomIn sets FullScreenWrapper.expanded == true & isFullScreen == true
    fireEvent.click(screen.getByTestId("StyledFullScreenButton"));
    expect(screen.getByText("isFullScreen")).toBeInTheDocument();
  });
  it("works if wrapped component does not have `isFullScreen` prop", () => {
    // This test exists just to show that a component that does not take
    // an "isFullScreen" property can still be wrapped with the FullScreenWrapper,
    // and the typechecker won't complain. (The component instance will still
    // receive "isFullScreen" in its props - but it won't "know" about it.)
    class NoFullScreenPropComponent extends PureComponent {
      constructor() {
        super(...arguments);
        this.render = () => this.props.label;
      }
    }
    const WrappedNoFullScreenPropComponent = withFullScreenWrapper(NoFullScreenPropComponent);
    const props = getProps();
    render( /*#__PURE__*/_jsx(WrappedNoFullScreenPropComponent, {
      ...props
    }));
    expect(screen.getByText("".concat(props.label))).toBeInTheDocument();
  });
  it("defines `displayName`", () => {
    expect(WrappedTestComponent.displayName).toEqual("withFullScreenWrapper(TestComponent)");
  });
});
//# sourceMappingURL=withFullScreenWrapper.test.js.map