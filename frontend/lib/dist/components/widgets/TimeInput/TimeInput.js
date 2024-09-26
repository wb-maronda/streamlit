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

import React, { PureComponent } from "react";
import { TimePicker as UITimePicker } from "baseui/timepicker";
import { StyledClearIcon } from "baseui/input/styled-components";
import { ChevronDown } from "baseui/icon";
import { withTheme } from "@emotion/react";
import { FormClearHelper } from "../Form";
import { StyledWidgetLabelHelp, WidgetLabel } from "../BaseWidget";
import TooltipIcon from "../../shared/TooltipIcon";
import { Placement } from "../../shared/Tooltip";
import { isNullOrUndefined, labelVisibilityProtoValueToEnum } from "../../../util/utils";
import { StyledClearIconContainer } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
class TimeInput extends PureComponent {
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
      widgetMgr.setStringValue(element, this.state.value, source, fragmentId);
    };
    this.onFormCleared = () => {
      this.setState((_, prevProps) => {
        return {
          value: prevProps.element.default ?? null
        };
      }, () => this.commitWidgetValue({
        fromUi: true
      }));
    };
    this.handleChange = newDate => {
      let value;
      if (newDate === null) {
        value = null;
      } else {
        value = this.dateToString(newDate);
      }
      this.setState({
        value
      }, () => this.commitWidgetValue({
        fromUi: true
      }));
    };
    this.stringToDate = value => {
      if (value === null) {
        return null;
      }
      const [hours, minutes] = value.split(":").map(Number);
      const date = new Date();
      date.setHours(hours);
      date.setMinutes(minutes);
      return date;
    };
    this.dateToString = value => {
      const hours = value.getHours().toString().padStart(2, "0");
      const minutes = value.getMinutes().toString().padStart(2, "0");
      return `${hours}:${minutes}`;
    };
  }
  get initialValue() {
    // If WidgetStateManager knew a value for this widget, initialize to that.
    // Otherwise, use the default value from the widget protobuf.
    const storedValue = this.props.widgetMgr.getStringValue(this.props.element);
    return storedValue ?? this.props.element.default ?? null;
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
      value: value ?? null
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
    const {
      disabled,
      width,
      element,
      widgetMgr,
      theme
    } = this.props;
    const clearable = isNullOrUndefined(element.default) && !disabled;
    const style = {
      width
    };
    const selectOverrides = {
      Select: {
        props: {
          disabled,
          overrides: {
            ControlContainer: {
              style: {
                height: theme.sizes.minElementHeight,
                // Baseweb requires long-hand props, short-hand leads to weird bugs & warnings.
                borderLeftWidth: theme.sizes.borderWidth,
                borderRightWidth: theme.sizes.borderWidth,
                borderTopWidth: theme.sizes.borderWidth,
                borderBottomWidth: theme.sizes.borderWidth
              }
            },
            IconsContainer: {
              style: () => ({
                paddingRight: theme.spacing.sm
              })
            },
            ValueContainer: {
              style: () => ({
                lineHeight: theme.lineHeights.inputWidget,
                // Baseweb requires long-hand props, short-hand leads to weird bugs & warnings.
                paddingRight: theme.spacing.sm,
                paddingLeft: theme.spacing.sm,
                paddingBottom: theme.spacing.sm,
                paddingTop: theme.spacing.sm
              })
            },
            SingleValue: {
              props: {
                "data-testid": "stTimeInputTimeDisplay"
              }
            },
            Dropdown: {
              style: () => ({
                paddingTop: theme.spacing.none,
                paddingBottom: theme.spacing.none
              })
            },
            // Nudge the dropdown menu by 1px so the focus state doesn't get cut off
            Popover: {
              props: {
                overrides: {
                  Body: {
                    style: () => ({
                      marginTop: theme.spacing.px
                    })
                  }
                }
              }
            },
            SelectArrow: {
              component: ChevronDown,
              props: {
                overrides: {
                  Svg: {
                    style: () => ({
                      width: theme.iconSizes.xl,
                      height: theme.iconSizes.xl
                    })
                  }
                }
              }
            }
          }
        }
      }
    };

    // Manage our form-clear event handler.
    this.formClearHelper.manageFormClearListener(widgetMgr, element.formId, this.onFormCleared);
    return /*#__PURE__*/_jsxs("div", {
      className: "stTimeInput",
      "data-testid": "stTimeInput",
      style: style,
      children: [/*#__PURE__*/_jsx(WidgetLabel, {
        label: element.label,
        disabled: disabled,
        labelVisibility: labelVisibilityProtoValueToEnum(element.labelVisibility?.value),
        children: element.help && /*#__PURE__*/_jsx(StyledWidgetLabelHelp, {
          children: /*#__PURE__*/_jsx(TooltipIcon, {
            content: element.help,
            placement: Placement.TOP_RIGHT
          })
        })
      }), /*#__PURE__*/_jsx(UITimePicker, {
        format: "24",
        step: element.step ? Number(element.step) : 900 // step in seconds, defaults to 900s (15 minutes)
        ,
        value: isNullOrUndefined(this.state.value) ? undefined : this.stringToDate(this.state.value),
        onChange: this.handleChange,
        overrides: selectOverrides,
        nullable: clearable,
        creatable: true,
        "aria-label": element.label
      }), clearable && !isNullOrUndefined(this.state.value) &&
      /*#__PURE__*/
      // The time picker doesn't have a built-in clearable functionality.
      // Therefore, we are adding the clear button here.
      _jsx(StyledClearIconContainer, {
        onClick: () => {
          this.handleChange(null);
        },
        "data-testid": "stTimeInputClearButton",
        children: /*#__PURE__*/_jsx(StyledClearIcon, {
          overrides: {
            Svg: {
              style: {
                color: theme.colors.darkGray,
                // Since the close icon is an SVG, and we can't control its viewbox nor its attributes,
                // Let's use a scale transform effect to make it bigger.
                // The width property only enlarges its bounding box, so it's easier to click.
                transform: "scale(1.41)",
                width: theme.spacing.twoXL,
                ":hover": {
                  fill: theme.colors.bodyText
                }
              }
            }
          },
          $isFocusVisible: false
        })
      })]
    });
  }
}
export default withTheme(TimeInput);
//# sourceMappingURL=TimeInput.js.map