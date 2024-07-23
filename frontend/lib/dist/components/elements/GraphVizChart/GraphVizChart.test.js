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
import { graphviz } from "d3-graphviz";
import { logError } from "../../../util/log";
import { render } from "../../../test_util";
import { GraphVizChart as GraphVizChartProto } from "../../../proto";
import { GraphVizChart } from "./GraphVizChart";
import { jsx as _jsx } from "react/jsx-runtime";
jest.mock("d3-graphviz", () => ({
  graphviz: jest.fn().mockReturnValue({
    zoom: () => ({
      fit: () => ({
        scale: () => ({
          engine: () => ({
            renderDot: () => ({
              on: jest.fn()
            })
          })
        })
      })
    })
  })
}));
jest.mock("../../../util/log", () => ({
  logError: jest.fn(),
  logMessage: jest.fn()
}));
const getProps = function () {
  let elementProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    element: GraphVizChartProto.create({
      spec: "digraph \"Hello World\" {Hello -> World}",
      elementId: "1",
      ...elementProps
    }),
    isFullScreen: false
  };
};
describe("GraphVizChart Element", () => {
  beforeEach(() => {
    // @ts-expect-error
    logError.mockClear();
  });
  afterEach(() => {
    // @ts-expect-error
    graphviz.mockClear();
  });
  it("renders without crashing", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(GraphVizChart, {
      ...props
    }));
    expect(screen.getByTestId("stGraphVizChart")).toBeInTheDocument();
    expect(logError).not.toHaveBeenCalled();
    expect(graphviz).toHaveBeenCalled();
  });
  it("should update chart and log error when crashes", () => {
    // Mock graphviz().renderDot() to throw an error for the "crash" spec
    const mockRenderDot = jest.fn().mockImplementation(spec => {
      if (spec === "crash") {
        throw new Error("Simulated GraphViz crash");
      }
      return {
        on: jest.fn()
      };
    })

    // Modify the graphviz mock to use the mockRenderDot
    ;
    graphviz.mockReturnValue({
      zoom: () => ({
        fit: () => ({
          scale: () => ({
            engine: () => ({
              renderDot: mockRenderDot
            })
          })
        })
      })
    });
    const props = getProps({
      spec: "crash"
    });
    render( /*#__PURE__*/_jsx(GraphVizChart, {
      ...props
    }));
    expect(logError).toHaveBeenCalledTimes(1);
    expect(mockRenderDot).toHaveBeenCalledWith("crash");
    expect(graphviz).toHaveBeenCalledTimes(1);
  });
  it("shoud render with height and width set to auto", () => {
    const props = {
      ...getProps()
    };
    render( /*#__PURE__*/_jsx(GraphVizChart, {
      ...props
    }));
    expect(screen.getByTestId("stGraphVizChart")).toHaveStyle("height: auto; width: auto");
  });
  it("shoud render with height and width set to 100%", () => {
    const props = {
      ...getProps(),
      isFullScreen: true
    };
    render( /*#__PURE__*/_jsx(GraphVizChart, {
      ...props
    }));
    expect(screen.getByTestId("stGraphVizChart")).toHaveStyle("height: 100%; width: 100%");
  });
});
//# sourceMappingURL=GraphVizChart.test.js.map