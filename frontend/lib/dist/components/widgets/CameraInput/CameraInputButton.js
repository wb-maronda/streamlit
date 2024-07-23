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
import ProgressBar, { Size as ProgressBarSize } from "../../shared/ProgressBar";
import { StyledCameraInputBaseButton, StyledProgressBar } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
function CameraInputButton(_ref) {
  let {
    disabled,
    onClick,
    children,
    progress
  } = _ref;
  return /*#__PURE__*/_jsxs(StyledCameraInputBaseButton, {
    disabled: disabled || false,
    onClick: onClick || (() => {}),
    progress: progress || null,
    "data-testid": "stCameraInputButton",
    children: [children, progress && /*#__PURE__*/_jsx(StyledProgressBar, {
      children: /*#__PURE__*/_jsx(ProgressBar, {
        value: progress,
        size: ProgressBarSize.EXTRASMALL,
        overrides: {
          Bar: {
            style: {
              borderTopLeftRadius: "0px",
              borderTopRightRadius: "0px"
            }
          },
          BarProgress: {
            style: {
              borderTopLeftRadius: "0px",
              borderTopRightRadius: "0px"
            }
          },
          BarContainer: {
            style: {
              borderTopLeftRadius: "0px",
              borderTopRightRadius: "0px"
            }
          }
        }
      })
    })]
  });
}
export default CameraInputButton;
//# sourceMappingURL=CameraInputButton.js.map