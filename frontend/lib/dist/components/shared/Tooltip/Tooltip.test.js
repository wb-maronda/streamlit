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
import { BaseProvider, LightTheme } from "baseui";
import { render } from "../../../test_util";
import Tooltip, { Placement } from "./Tooltip";
import { jsx as _jsx } from "react/jsx-runtime";
const getProps = function () {
  let propOverrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    placement: Placement.AUTO,
    content: /*#__PURE__*/_jsx("div", {
      children: "Tooltip content text."
    }),
    children: null,
    ...propOverrides
  };
};

// Wrap in BaseProvider to avoid warnings
const renderTooltip = function () {
  let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return render( /*#__PURE__*/_jsx(BaseProvider, {
    theme: LightTheme,
    children: /*#__PURE__*/_jsx(Tooltip, {
      ...getProps(props)
    })
  }));
};
describe("Tooltip element", () => {
  it("renders a Tooltip", async () => {
    renderTooltip();
    const tooltipTarget = screen.getByTestId("stTooltipHoverTarget");
    expect(tooltipTarget).toBeInTheDocument();

    // Hover to see tooltip content
    fireEvent.mouseOver(tooltipTarget);
    const tooltipContent = await screen.findByTestId("stTooltipContent");
    expect(tooltipContent).toHaveTextContent("Tooltip content text.");
  });
  it("renders its children", () => {
    renderTooltip({
      children: /*#__PURE__*/_jsx("div", {
        children: "Child Element"
      })
    });
    expect(screen.getByTestId("stTooltipHoverTarget")).toBeInTheDocument();
    expect(screen.getByText("Child Element")).toBeInTheDocument();
  });
  it("sets the same content", async () => {
    const content = /*#__PURE__*/_jsx("span", {
      children: "Help Text"
    });
    renderTooltip({
      content
    });
    const tooltipTarget = screen.getByTestId("stTooltipHoverTarget");
    expect(tooltipTarget).toBeInTheDocument();

    // Hover to see tooltip content
    fireEvent.mouseOver(tooltipTarget);
    const tooltipContent = await screen.findByTestId("stTooltipContent");
    expect(tooltipContent).toHaveTextContent("Help Text");
  });
});
//# sourceMappingURL=Tooltip.test.js.map