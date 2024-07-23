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

import React, { useEffect } from "react";
import { select } from "d3";
import { graphviz } from "d3-graphviz";
import { logError } from "../../../util/log";
import { withFullScreenWrapper } from "../../shared/FullScreenWrapper";
import { StyledGraphVizChart } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
export function GraphVizChart(_ref) {
  let {
    element,
    isFullScreen
  } = _ref;
  const chartId = "graphviz-chart-".concat(element.elementId);
  useEffect(() => {
    try {
      graphviz("#".concat(chartId)).zoom(false).fit(true).scale(1).engine(element.engine).renderDot(element.spec);
      if (isFullScreen || element.useContainerWidth) {
        const node = select("#".concat(chartId, " > svg")).node();
        // We explicitly remove width and height to let CSS and the SVG viewBox
        // define its dimensions
        node.removeAttribute("width");
        node.removeAttribute("height");
      }
    } catch (error) {
      logError(error);
    }
  }, [chartId, element.engine, element.spec, element.useContainerWidth, isFullScreen]);
  return /*#__PURE__*/_jsx(StyledGraphVizChart, {
    className: "graphviz stGraphVizChart",
    "data-testid": "stGraphVizChart",
    id: chartId,
    isFullScreen: isFullScreen
  });
}
export default withFullScreenWrapper(GraphVizChart);
//# sourceMappingURL=GraphVizChart.js.map