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
import { SwitchCamera } from "@emotion-icons/material-rounded";
import BaseButton, { BaseButtonKind } from "../../shared/BaseButton";
import Icon from "../../shared/Icon";
import Tooltip, { Placement } from "../../shared/Tooltip";
import themeColors from "../../../theme/emotionBaseTheme/themeColors";
import { StyledSwitchFacingModeButton } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
export let FacingMode;
(function (FacingMode) {
  FacingMode["USER"] = "user";
  FacingMode["ENVIRONMENT"] = "environment";
})(FacingMode || (FacingMode = {}));
const SwitchFacingModeButton = _ref => {
  let {
    switchFacingMode
  } = _ref;
  return /*#__PURE__*/_jsx(StyledSwitchFacingModeButton, {
    "data-testid": "stCameraSwitchButton",
    children: /*#__PURE__*/_jsx(Tooltip, {
      content: "Switch camera",
      placement: Placement.TOP_RIGHT,
      children: /*#__PURE__*/_jsx(BaseButton, {
        kind: BaseButtonKind.MINIMAL,
        onClick: switchFacingMode,
        children: /*#__PURE__*/_jsx(Icon, {
          content: SwitchCamera,
          size: "twoXL",
          color: themeColors.white
        })
      })
    })
  });
};
export default SwitchFacingModeButton;
//# sourceMappingURL=SwitchFacingModeButton.js.map