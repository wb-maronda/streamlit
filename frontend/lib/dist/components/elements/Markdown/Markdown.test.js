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
import { fireEvent, screen } from "@testing-library/react";
import { render } from "../../../test_util";
import { Markdown as MarkdownProto } from "../../../proto";
import Markdown from "./Markdown";
import { jsx as _jsx } from "react/jsx-runtime";
const getProps = function () {
  let elementProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    element: MarkdownProto.create({
      body: "Emphasis, aka italics, with *asterisks* or _underscores_." + "Combined emphasis with **asterisks and _underscores_**." + "[I'm an inline-style link with title](https://www.https://streamlit.io/ Streamlit)",
      allowHtml: false,
      ...elementProps
    }),
    width: 100
  };
};
describe("Markdown element", () => {
  it("renders markdown as expected", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(Markdown, {
      ...props
    }));
    const markdown = screen.getByTestId("stMarkdown");
    expect(markdown).toBeInTheDocument();
    expect(markdown).toHaveStyle("width: 100px");
  });
});
describe("Markdown element with help", () => {
  it("renders markdown with help tooltip as expected", async () => {
    const props = getProps({
      help: "help text"
    });
    render( /*#__PURE__*/_jsx(Markdown, {
      ...props
    }));
    const tooltip = screen.getByTestId("stTooltipHoverTarget");
    expect(tooltip).toBeInTheDocument();
    fireEvent.mouseOver(tooltip);
    const helpText = await screen.findByText("help text");
    expect(helpText).toBeInTheDocument();
  });
});
//# sourceMappingURL=Markdown.test.js.map