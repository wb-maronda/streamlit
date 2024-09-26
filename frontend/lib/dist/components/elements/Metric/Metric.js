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
import { useTheme } from "@emotion/react";
import { ArrowDownward, ArrowUpward } from "@emotion-icons/material-outlined";
import { Metric as MetricProto } from "../../../proto";
import { labelVisibilityProtoValueToEnum } from "../../../util/utils";
import Icon from "../../shared/Icon";
import { StyledWidgetLabelHelpInline } from "../../widgets/BaseWidget";
import TooltipIcon from "../../shared/TooltipIcon";
import { Placement } from "../../shared/Tooltip";
import StreamlitMarkdown from "../../shared/StreamlitMarkdown";
import { StyledMetricDeltaText, StyledMetricLabelText, StyledMetricValueText, StyledTruncateText } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default function Metric(_ref) {
  let {
    element
  } = _ref;
  const {
    colors
  } = useTheme();
  const {
    MetricColor,
    MetricDirection
  } = MetricProto;
  let direction = null;
  let color = "";
  switch (element.color) {
    case MetricColor.RED:
      color = colors.red;
      break;
    case MetricColor.GREEN:
      color = colors.green;
      break;
    // this must be grey
    default:
      color = colors.fadedText60;
      break;
  }
  switch (element.direction) {
    case MetricDirection.DOWN:
      direction = ArrowDownward;
      break;
    case MetricDirection.UP:
      direction = ArrowUpward;
      break;
    // this must be none
    default:
      direction = null;
      break;
  }
  const arrowMargin = "0 threeXS 0 0";
  const deltaStyle = {
    color
  };
  const deltaExists = element.delta !== "";
  return /*#__PURE__*/_jsxs("div", {
    className: "stMetric",
    "data-testid": "stMetric",
    children: [/*#__PURE__*/_jsxs(StyledMetricLabelText, {
      "data-testid": "stMetricLabel",
      visibility: labelVisibilityProtoValueToEnum(element.labelVisibility?.value),
      children: [/*#__PURE__*/_jsx(StyledTruncateText, {
        children: /*#__PURE__*/_jsx(StreamlitMarkdown, {
          source: element.label,
          allowHTML: false,
          isLabel: true
        })
      }), element.help && /*#__PURE__*/_jsx(StyledWidgetLabelHelpInline, {
        children: /*#__PURE__*/_jsx(TooltipIcon, {
          content: element.help,
          placement: Placement.TOP_RIGHT
        })
      })]
    }), /*#__PURE__*/_jsx(StyledMetricValueText, {
      "data-testid": "stMetricValue",
      children: /*#__PURE__*/_jsxs(StyledTruncateText, {
        children: [" ", element.body, " "]
      })
    }), deltaExists && /*#__PURE__*/_jsxs(StyledMetricDeltaText, {
      "data-testid": "stMetricDelta",
      style: deltaStyle,
      children: [/*#__PURE__*/_jsx(Icon, {
        testid:
        // if direction is null, icon will be null
        direction === ArrowUpward ? "stMetricDeltaIcon-Up" : "stMetricDeltaIcon-Down",
        content: direction,
        size: "lg",
        margin: arrowMargin
      }), /*#__PURE__*/_jsxs(StyledTruncateText, {
        children: [" ", element.delta, " "]
      })]
    })]
  });
}
//# sourceMappingURL=Metric.js.map