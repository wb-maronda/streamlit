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
import { withTheme } from "@emotion/react";
import { labelVisibilityProtoValueToEnum } from "../../../util/utils";
import { Checkbox as UICheckbox, STYLE_TYPE, LABEL_PLACEMENT } from "baseui/checkbox";
import { Checkbox as CheckboxProto } from "../../../proto";
import { transparentize } from "color2k";
import { FormClearHelper } from "../Form";
import { hasLightBackgroundColor } from "../../../theme";
import TooltipIcon from "../../shared/TooltipIcon";
import { Placement } from "../../shared/Tooltip";
import { StyledWidgetLabelHelpInline } from "../BaseWidget";
import StreamlitMarkdown from "../../shared/StreamlitMarkdown";
import { StyledContent, StyledCheckbox } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
class Checkbox extends React.PureComponent {
  constructor() {
    super(...arguments);
    this.formClearHelper = new FormClearHelper();
    this.state = {
      value: this.initialValue
    };
    this.commitWidgetValue = source => {
      const {
        widgetMgr,
        element,
        fragmentId
      } = this.props;
      widgetMgr.setBoolValue(element, this.state.value, source, fragmentId);
    };
    this.onFormCleared = () => {
      this.setState((_, prevProps) => {
        return {
          value: prevProps.element.default
        };
      }, () => this.commitWidgetValue({
        fromUi: true
      }));
    };
    this.onChange = e => {
      const value = e.target.checked;
      this.setState({
        value
      }, () => this.commitWidgetValue({
        fromUi: true
      }));
    };
  }
  get initialValue() {
    // If WidgetStateManager knew a value for this widget, initialize to that.
    // Otherwise, use the default value from the widget protobuf.
    const storedValue = this.props.widgetMgr.getBoolValue(this.props.element);
    return storedValue !== undefined ? storedValue : this.props.element.default;
  }
  componentDidMount() {
    if (this.props.element.setValue) {
      this.updateFromProtobuf();
    } else {
      this.commitWidgetValue({
        fromUi: false
      });
    }
  }
  componentDidUpdate() {
    this.maybeUpdateFromProtobuf();
  }
  componentWillUnmount() {
    this.formClearHelper.disconnect();
  }
  maybeUpdateFromProtobuf() {
    const {
      setValue
    } = this.props.element;
    if (setValue) {
      this.updateFromProtobuf();
    }
  }
  updateFromProtobuf() {
    const {
      value
    } = this.props.element;
    this.props.element.setValue = false;
    this.setState({
      value
    }, () => {
      this.commitWidgetValue({
        fromUi: false
      });
    });
  }

  /** Commit state.value to the WidgetStateManager. */

  /**
   * If we're part of a clear_on_submit form, this will be called when our
   * form is submitted. Restore our default value and update the WidgetManager.
   */

  render() {
    var _element$labelVisibil;
    const {
      theme,
      width,
      element,
      disabled,
      widgetMgr
    } = this.props;
    const {
      colors,
      spacing,
      sizes
    } = theme;
    const lightTheme = hasLightBackgroundColor(theme);
    const color = disabled ? colors.fadedText40 : colors.bodyText;

    // Manage our form-clear event handler.
    this.formClearHelper.manageFormClearListener(widgetMgr, element.formId, this.onFormCleared);
    return /*#__PURE__*/_jsx(StyledCheckbox, {
      className: "row-widget stCheckbox",
      "data-testid": "stCheckbox",
      width: width,
      children: /*#__PURE__*/_jsx(UICheckbox, {
        checked: this.state.value,
        disabled: disabled,
        onChange: this.onChange,
        "aria-label": element.label,
        checkmarkType: element.type === CheckboxProto.StyleType.TOGGLE ? STYLE_TYPE.toggle : STYLE_TYPE.default,
        labelPlacement: LABEL_PLACEMENT.right,
        overrides: {
          Root: {
            style: _ref => {
              let {
                $isFocusVisible
              } = _ref;
              return {
                marginBottom: 0,
                marginTop: 0,
                paddingRight: spacing.twoThirdsSmFont,
                backgroundColor: $isFocusVisible ? colors.darkenedBgMix25 : "",
                display: "flex",
                alignItems: "start"
              };
            }
          },
          Toggle: {
            style: _ref2 => {
              let {
                $checked
              } = _ref2;
              let backgroundColor = lightTheme ? colors.bgColor : colors.bodyText;
              if (disabled) {
                backgroundColor = lightTheme ? colors.gray70 : colors.gray90;
              }
              return {
                width: "12px",
                height: "12px",
                transform: $checked ? "translateX(16px)" : "",
                backgroundColor,
                boxShadow: ""
              };
            }
          },
          ToggleTrack: {
            style: _ref3 => {
              let {
                $checked,
                $isHovered
              } = _ref3;
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
                marginTop: "0.25rem",
                paddingLeft: "2px",
                paddingRight: "2px",
                width: "32px",
                minWidth: "32px",
                height: "16px",
                minHeight: "16px",
                borderBottomLeftRadius: theme.radii.lg,
                borderTopLeftRadius: theme.radii.lg,
                borderBottomRightRadius: theme.radii.lg,
                borderTopRightRadius: theme.radii.lg,
                backgroundColor
              };
            }
          },
          Checkmark: {
            style: _ref4 => {
              let {
                $isFocusVisible,
                $checked
              } = _ref4;
              const borderColor = $checked && !disabled ? colors.primary : colors.fadedText40;
              return {
                outline: 0,
                width: "1rem",
                height: "1rem",
                marginTop: "0.25rem",
                marginLeft: 0,
                marginBottom: 0,
                boxShadow: $isFocusVisible && $checked ? "0 0 0 0.2rem ".concat(transparentize(colors.primary, 0.5)) : "",
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
          visibility: labelVisibilityProtoValueToEnum((_element$labelVisibil = element.labelVisibility) === null || _element$labelVisibil === void 0 ? void 0 : _element$labelVisibil.value),
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
}
export default withTheme(Checkbox);
//# sourceMappingURL=Checkbox.js.map