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
import { Html as HtmlProto } from "../../../proto";
import Html from "./Html";
import { jsx as _jsx } from "react/jsx-runtime";
const getProps = function () {
  let elementProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    element: HtmlProto.create({
      body: "<div>Test Html</div>",
      ...elementProps
    }),
    width: 100
  };
};
describe("HTML element", () => {
  it("renders the element as expected", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(Html, {
      ...props
    }));
    const html = screen.getByTestId("stHtml");
    expect(html).toHaveTextContent("Test Html");
    expect(html).toHaveStyle("width: 100px");
  });
  it("handles <style> tags - applies style", () => {
    const props = getProps({
      body: "\n        <style>\n            #random { color: orange; }\n        </style>\n        <div id=\"random\">Test Html</div>\n    "
    });
    render( /*#__PURE__*/_jsx(Html, {
      ...props
    }));
    const html = screen.getByTestId("stHtml");
    expect(html).toHaveTextContent("Test Html");
    // Check that the style tag is applied to the div
    expect(screen.getByText("Test Html")).toHaveStyle("color: orange");
    // Check that the unnecessary spacing handling by hiding parent
    // eslint-disable-next-line testing-library/no-node-access
    expect(html.parentElement).toHaveClass("empty-html");
  });
  it("sanitizes <script> tags", () => {
    const props = getProps({
      body: "<script> alert('BEWARE - the script tag is scripting'); </script>"
    });
    render( /*#__PURE__*/_jsx(Html, {
      ...props
    }));
    expect(screen.queryByTestId("stHtml")).not.toBeInTheDocument();
  });
  it("sanitizes <svg> tags", () => {
    const props = getProps({
      body: "\n        <svg width=\"100\" height=\"100\">\n            <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"green\" stroke-width=\"4\" fill=\"yellow\" />\n        </svg>\n    "
    });
    render( /*#__PURE__*/_jsx(Html, {
      ...props
    }));
    expect(screen.getByTestId("stHtml")).toHaveTextContent("");
  });
});
//# sourceMappingURL=Html.test.js.map