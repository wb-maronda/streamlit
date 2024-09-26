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
import BaseButton, { BaseButtonKind, BaseButtonSize, BaseButtonTooltip, DynamicButtonLabel } from "../../shared/BaseButton";
import { jsx as _jsx } from "react/jsx-runtime";
export function FormSubmitButton(props) {
  const {
    disabled,
    element,
    widgetMgr,
    hasInProgressUpload,
    width,
    fragmentId
  } = props;
  const {
    formId
  } = element;
  const style = {
    width
  };
  const kind = element.type === "primary" ? BaseButtonKind.PRIMARY_FORM_SUBMIT : BaseButtonKind.SECONDARY_FORM_SUBMIT;
  useEffect(() => {
    widgetMgr.addSubmitButton(formId, element);
    return () => widgetMgr.removeSubmitButton(formId, element);
  }, [widgetMgr, formId, element]);

  // When useContainerWidth true & has help tooltip,
  // we need to pass the container width down to the button
  const fluidWidth = element.help ? width : true;
  return /*#__PURE__*/_jsx("div", {
    className: "stFormSubmitButton",
    "data-testid": "stFormSubmitButton",
    style: style,
    children: /*#__PURE__*/_jsx(BaseButtonTooltip, {
      help: element.help,
      children: /*#__PURE__*/_jsx(BaseButton, {
        kind: kind,
        size: BaseButtonSize.SMALL,
        fluidWidth: element.useContainerWidth ? fluidWidth : false,
        disabled: disabled || hasInProgressUpload,
        onClick: () => {
          widgetMgr.submitForm(element.formId, fragmentId, element);
        },
        children: /*#__PURE__*/_jsx(DynamicButtonLabel, {
          icon: element.icon,
          label: element.label
        })
      })
    })
  });
}
//# sourceMappingURL=FormSubmitButton.js.map