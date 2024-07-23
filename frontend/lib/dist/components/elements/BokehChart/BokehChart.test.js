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
import { BokehChart as BokehChartProto } from "../../../proto";
import Figure from "./mock";
import Bokeh from "../../../vendor/bokeh/bokeh.esm";
import { jsx as _jsx } from "react/jsx-runtime";
jest.mock("../../../vendor/bokeh/bokeh.esm", () => ({
  // needed to parse correctly
  __esModule: true,
  default: {
    // the js source code has main.register_plugin so we need to mock it
    register_plugin: jest.fn(),
    // actual function that we need to mock and check
    embed: {
      embed_item: jest.fn()
    }
  }
}));

// eslint-disable-next-line @typescript-eslint/no-var-requires
const {
  BokehChart
} = require("./BokehChart");
const mockBokehEmbed = jest.mocked(Bokeh);
const getProps = function () {
  let elementProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    element: BokehChartProto.create({
      figure: JSON.stringify(Figure),
      useContainerWidth: false,
      elementId: "1",
      ...elementProps
    }),
    height: 400,
    width: 400
  };
};
expect.extend({
  toMatchBokehDimensions(data, width, height) {
    const plot = data && data.doc && data.doc.roots && data.doc.roots.references ? data.doc.roots.references.find(e => e.type === "Plot") : undefined;
    if (!plot) {
      return {
        message: () => "expected data to contain attributes",
        pass: false
      };
    }
    const pass = plot.attributes.plot_width === width && plot.attributes.plot_height === height;
    return {
      message: () => "expected ".concat(plot.attributes.plot_width, "x").concat(plot.attributes.plot_height, " to be ").concat(width, "x").concat(height),
      pass
    };
  }
});
describe("BokehChart element", () => {
  // Avoid Warning: render(): Rendering components directly into document.body is discouraged.
  let div;
  beforeEach(() => {
    div = document.createElement("div");
    document.body.appendChild(div);
  });
  afterEach(() => {
    // @ts-expect-error
    mockBokehEmbed.embed.embed_item.mockClear(); // clear so embed item calls don't add up
    document.body.removeChild(div);
  });
  it("renders without crashing", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(BokehChart, {
      ...props
    }));
    expect(screen.getByTestId("stBokehChart")).toBeInTheDocument();
  });
  describe("Chart dimensions", () => {
    it("should use height if not useContainerWidth", () => {
      const props = getProps();
      render( /*#__PURE__*/_jsx(BokehChart, {
        ...props
      }));
      expect(mockBokehEmbed.embed.embed_item).toHaveBeenCalledWith(
      // @ts-expect-error
      expect.toMatchBokehDimensions(400, 400), "bokeh-chart-1");
    });
    it("should have width if useContainerWidth", () => {
      const props = {
        ...getProps({
          useContainerWidth: true
        }),
        height: 0
      };
      render( /*#__PURE__*/_jsx(BokehChart, {
        ...props
      }));
      expect(mockBokehEmbed.embed.embed_item).toHaveBeenCalledWith(
      // @ts-expect-error
      expect.toMatchBokehDimensions(400), "bokeh-chart-1");
    });
  });
  it("should re-render the chart when the component updates", () => {
    const props = getProps();
    const {
      rerender
    } = render( /*#__PURE__*/_jsx(BokehChart, {
      ...props
    }));
    rerender( /*#__PURE__*/_jsx(BokehChart, {
      ...props,
      width: 500,
      height: 500
    }));
    expect(mockBokehEmbed.embed.embed_item).toHaveBeenCalledTimes(2);
  });
});
//# sourceMappingURL=BokehChart.test.js.map