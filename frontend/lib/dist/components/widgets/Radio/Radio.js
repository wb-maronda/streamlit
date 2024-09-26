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

import React, { memo, useCallback } from "react";
import UIRadio from "../../shared/Radio";
import { useBasicWidgetState } from "../../../useBasicWidgetState";
import { labelVisibilityProtoValueToEnum } from "../../../util/utils";
import { jsx as _jsx } from "react/jsx-runtime";
function Radio(_ref) {
  let {
    disabled,
    element,
    widgetMgr,
    width,
    fragmentId
  } = _ref;
  const [value, setValueWSource] = useBasicWidgetState({
    getStateFromWidgetMgr,
    getDefaultStateFromProto,
    getCurrStateFromProto,
    updateWidgetMgrState,
    element,
    widgetMgr,
    fragmentId
  });
  const onChange = useCallback(selectedIndex => {
    setValueWSource({
      value: selectedIndex,
      fromUi: true
    });
  }, [setValueWSource]);
  const {
    horizontal,
    options,
    captions,
    label,
    labelVisibility,
    help
  } = element;
  return /*#__PURE__*/_jsx(UIRadio, {
    label: label,
    onChange: onChange,
    options: options,
    captions: captions,
    width: width,
    disabled: disabled,
    horizontal: horizontal,
    labelVisibility: labelVisibilityProtoValueToEnum(labelVisibility?.value),
    value: value ?? null,
    help: help
  });
}
function getStateFromWidgetMgr(widgetMgr, element) {
  return widgetMgr.getIntValue(element);
}
function getDefaultStateFromProto(element) {
  return element.default ?? null;
}
function getCurrStateFromProto(element) {
  return element.value ?? null;
}
function updateWidgetMgrState(element, widgetMgr, vws, fragmentId) {
  widgetMgr.setIntValue(element, vws.value ?? null, {
    fromUi: vws.fromUi
  }, fragmentId);
}
export default /*#__PURE__*/memo(Radio);
//# sourceMappingURL=Radio.js.map