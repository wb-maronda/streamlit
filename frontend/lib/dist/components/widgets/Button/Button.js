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
import BaseButton, { BaseButtonKind, BaseButtonSize, BaseButtonTooltip, DynamicButtonLabel } from "../../shared/BaseButton";
import { jsx as _jsx } from "react/jsx-runtime";
function Button(props) {
  const {
    disabled,
    element,
    widgetMgr,
    width,
    fragmentId
  } = props;
  const style = {
    width
  };
  const kind = element.type === "primary" ? BaseButtonKind.PRIMARY : BaseButtonKind.SECONDARY;

  // When useContainerWidth true & has help tooltip,
  // we need to pass the container width down to the button
  const fluidWidth = element.help ? width : true;
  return /*#__PURE__*/_jsx("div", {
    className: "stButton",
    "data-testid": "stButton",
    style: style,
    children: /*#__PURE__*/_jsx(BaseButtonTooltip, {
      help: element.help,
      children: /*#__PURE__*/_jsx(BaseButton, {
        kind: kind,
        size: BaseButtonSize.SMALL,
        disabled: disabled,
        fluidWidth: element.useContainerWidth ? fluidWidth : false,
        onClick: () => widgetMgr.setTriggerValue(element, {
          fromUi: true
        }, fragmentId),
        children: /*#__PURE__*/_jsx(DynamicButtonLabel, {
          icon: element.icon,
          label: element.label
        })
      })
    })
  });
}
export default Button;
//# sourceMappingURL=Button.js.map