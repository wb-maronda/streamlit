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
import { useTheme } from "@emotion/react";
import { LABEL_PLACEMENT, STYLE_TYPE, Checkbox as UICheckbox } from "baseui/checkbox";
import { transparentize } from "color2k";
import { labelVisibilityProtoValueToEnum } from "../../../util/utils";
import { Checkbox as CheckboxProto } from "../../../proto";
import { useBasicWidgetState } from "../../../useBasicWidgetState";
import { hasLightBackgroundColor } from "../../../theme";
import TooltipIcon from "../../shared/TooltipIcon";
import { Placement } from "../../shared/Tooltip";
import { StyledWidgetLabelHelpInline } from "../BaseWidget";
import StreamlitMarkdown from "../../shared/StreamlitMarkdown";
import { StyledCheckbox, StyledContent } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
function Checkbox(_ref) {
  let {
    width,
    element,
    disabled,
    widgetMgr,
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
  const onChange = useCallback(e => {
    setValueWSource({
      value: e.target.checked,
      fromUi: true
    });
  }, [setValueWSource]);
  const theme = useTheme();
  const {
    colors,
    spacing,
    sizes
  } = theme;
  const lightTheme = hasLightBackgroundColor(theme);
  const color = disabled ? colors.fadedText40 : colors.bodyText;
  return /*#__PURE__*/_jsx(StyledCheckbox, {
    className: "row-widget stCheckbox",
    "data-testid": "stCheckbox",
    width: width,
    children: /*#__PURE__*/_jsx(UICheckbox, {
      checked: value,
      disabled: disabled,
      onChange: onChange,
      "aria-label": element.label,
      checkmarkType: element.type === CheckboxProto.StyleType.TOGGLE ? STYLE_TYPE.toggle : STYLE_TYPE.default,
      labelPlacement: LABEL_PLACEMENT.right,
      overrides: {
        Root: {
          style: _ref2 => {
            let {
              $isFocusVisible
            } = _ref2;
            return {
              marginBottom: spacing.none,
              marginTop: spacing.none,
              paddingRight: spacing.twoThirdsSmFont,
              backgroundColor: $isFocusVisible ? colors.darkenedBgMix25 : "",
              display: "flex",
              alignItems: "start"
            };
          }
        },
        Toggle: {
          style: _ref3 => {
            let {
              $checked
            } = _ref3;
            let backgroundColor = lightTheme ? colors.bgColor : colors.bodyText;
            if (disabled) {
              backgroundColor = lightTheme ? colors.gray70 : colors.gray90;
            }
            return {
              width: `calc(${sizes.checkbox} - ${theme.spacing.twoXS})`,
              height: `calc(${sizes.checkbox} - ${theme.spacing.twoXS})`,
              transform: $checked ? `translateX(${sizes.checkbox})` : "",
              backgroundColor,
              boxShadow: ""
            };
          }
        },
        ToggleTrack: {
          style: _ref4 => {
            let {
              $checked,
              $isHovered
            } = _ref4;
            let backgroundColor = colors.fadedText40;
            if ($isHovered && !disabled) {
              backgroundColor = colors.fadedText20;
            }
            if ($checked && !disabled) {
              backgroundColor = colors.primary;
            }
            return {
              marginRight: 0,
              marginLeft: 0,
              marginBottom: 0,
              marginTop: theme.spacing.twoXS,
              paddingLeft: theme.spacing.threeXS,
              paddingRight: theme.spacing.threeXS,
              width: `calc(2 * ${sizes.checkbox})`,
              minWidth: `calc(2 * ${sizes.checkbox})`,
              height: sizes.checkbox,
              minHeight: sizes.checkbox,
              borderBottomLeftRadius: theme.radii.lg,
              borderTopLeftRadius: theme.radii.lg,
              borderBottomRightRadius: theme.radii.lg,
              borderTopRightRadius: theme.radii.lg,
              backgroundColor
            };
          }
        },
        Checkmark: {
          style: _ref5 => {
            let {
              $isFocusVisible,
              $checked
            } = _ref5;
            const borderColor = $checked && !disabled ? colors.primary : colors.fadedText40;
            return {
              outline: 0,
              width: sizes.checkbox,
              height: sizes.checkbox,
              marginTop: theme.spacing.twoXS,
              marginLeft: 0,
              marginBottom: 0,
              boxShadow: $isFocusVisible && $checked ? `0 0 0 0.2rem ${transparentize(colors.primary, 0.5)}` : "",
              // This is painfully verbose, but baseweb seems to internally
              // use the long-hand version, which means we can't use the
              // shorthand names here as if we do we'll end up with warn
              // logs spamming us every time a checkbox is rendered.
              borderLeftWidth: sizes.borderWidth,
              borderRightWidth: sizes.borderWidth,
              borderTopWidth: sizes.borderWidth,
              borderBottomWidth: sizes.borderWidth,
              borderLeftColor: borderColor,
              borderRightColor: borderColor,
              borderTopColor: borderColor,
              borderBottomColor: borderColor
            };
          }
        },
        Label: {
          style: {
            position: "relative",
            color
          }
        }
      },
      children: /*#__PURE__*/_jsxs(StyledContent, {
        visibility: labelVisibilityProtoValueToEnum(element.labelVisibility?.value),
        "data-testid": "stWidgetLabel",
        children: [/*#__PURE__*/_jsx(StreamlitMarkdown, {
          source: element.label,
          allowHTML: false,
          isLabel: true,
          largerLabel: true
        }), element.help && /*#__PURE__*/_jsx(StyledWidgetLabelHelpInline, {
          color: color,
          children: /*#__PURE__*/_jsx(TooltipIcon, {
            content: element.help,
            placement: Placement.TOP_RIGHT
          })
        })]
      })
    })
  });
}
function getStateFromWidgetMgr(widgetMgr, element) {
  return widgetMgr.getBoolValue(element);
}
function getDefaultStateFromProto(element) {
  return element.default ?? null;
}
function getCurrStateFromProto(element) {
  return element.value ?? null;
}
function updateWidgetMgrState(element, widgetMgr, vws, fragmentId) {
  widgetMgr.setBoolValue(element, vws.value, {
    fromUi: vws.fromUi
  }, fragmentId);
}
export default /*#__PURE__*/memo(Checkbox);
//# sourceMappingURL=Checkbox.js.map