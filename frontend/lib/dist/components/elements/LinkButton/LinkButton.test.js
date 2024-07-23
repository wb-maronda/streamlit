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
import { LinkButton as LinkButtonProto } from "../../../proto";
import LinkButton from "./LinkButton";
import { jsx as _jsx } from "react/jsx-runtime";
const getProps = function () {
  let elementProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let widgetProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return {
    element: LinkButtonProto.create({
      label: "Label",
      url: "https://streamlit.io",
      ...elementProps
    }),
    width: 250,
    disabled: false,
    ...widgetProps
  };
};
describe("LinkButton widget", () => {
  it("renders without crashing", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(LinkButton, {
      ...props
    }));
    const linkButton = screen.getByRole("link");
    expect(linkButton).toBeInTheDocument();
  });
  it("has correct className and style", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(LinkButton, {
      ...props
    }));
    const linkButton = screen.getByTestId("stLinkButton");
    expect(linkButton).toHaveClass("row-widget");
    expect(linkButton).toHaveClass("stLinkButton");
    expect(linkButton).toHaveStyle("width: ".concat(props.width, "px"));
  });
  it("renders a label within the button", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(LinkButton, {
      ...props
    }));
    const linkButton = screen.getByRole("link", {
      name: "".concat(props.element.label)
    });
    expect(linkButton).toBeInTheDocument();
  });
  describe("wrapped BaseLinkButton", () => {
    it("handles the disabled prop", () => {
      const props = getProps({}, {
        disabled: true
      });
      render( /*#__PURE__*/_jsx(LinkButton, {
        ...props
      }));
      const linkButton = screen.getByRole("link");
      expect(linkButton).toHaveAttribute("disabled");
    });
    it("does not use container width by default", () => {
      const props = getProps();
      render( /*#__PURE__*/_jsx(LinkButton, {
        ...props,
        children: "Hello"
      }));
      const linkButton = screen.getByRole("link");
      expect(linkButton).toHaveStyle("width: auto");
    });
    it("passes useContainerWidth property with help correctly", () => {
      render( /*#__PURE__*/_jsx(LinkButton, {
        ...getProps({
          useContainerWidth: true,
          help: "mockHelpText"
        }),
        children: "Hello"
      }));
      const linkButton = screen.getByRole("link");
      expect(linkButton).toHaveStyle("width: ".concat(250, "px"));
    });
    it("passes useContainerWidth property without help correctly", () => {
      render( /*#__PURE__*/_jsx(LinkButton, {
        ...getProps({
          useContainerWidth: true
        }),
        children: "Hello"
      }));
      const linkButton = screen.getByRole("link");
      expect(linkButton).toHaveStyle("width: 100%");
    });
  });
});
//# sourceMappingURL=LinkButton.test.js.map