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
import moment from "moment";
import { withTheme } from "@emotion/react";
import { Datepicker as UIDatePicker, DENSITY } from "baseui/datepicker";
import { PLACEMENT } from "baseui/popover";
import { FormClearHelper } from "../Form";
import { WidgetLabel, StyledWidgetLabelHelp } from "../BaseWidget";
import TooltipIcon from "../../shared/TooltipIcon";
import { Placement } from "../../shared/Tooltip";
import { labelVisibilityProtoValueToEnum } from "../../../util/utils";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
// Date format for communication (protobuf) support
const DATE_FORMAT = "YYYY/MM/DD";

/** Convert an array of strings to an array of dates. */
function stringsToDates(strings) {
  return strings.map(val => new Date(val));
}

/** Convert an array of dates to an array of strings. */
function datesToStrings(dates) {
  if (!dates) {
    return [];
  }
  return dates.map(value => moment(value).format(DATE_FORMAT));
}
class DateInput extends React.PureComponent {
  constructor() {
    super(...arguments);
    this.formClearHelper = new FormClearHelper();
    this.state = {
      values: this.initialValue,
      isRange: this.props.element.isRange,
      isEmpty: false
    };
    this.commitWidgetValue = source => {
      const {
        widgetMgr,
        element,
        fragmentId
      } = this.props;
      widgetMgr.setStringArrayValue(element, datesToStrings(this.state.values), source, fragmentId);
    };
    this.onFormCleared = () => {
      const defaultValue = stringsToDates(this.props.element.default);
      this.setState({
        values: defaultValue,
        isEmpty: !defaultValue
      }, () => this.commitWidgetValue({
        fromUi: true
      }));
    };
    this.handleChange = _ref => {
      let {
        date
      } = _ref;
      if (date === null || date === undefined) {
        this.setState({
          values: [],
          isEmpty: true
        });
        return;
      }
      const values = [];
      if (Array.isArray(date)) {
        date.forEach(dt => {
          if (dt) {
            values.push(dt);
          }
        });
      } else {
        values.push(date);
      }
      this.setState({
        values,
        isEmpty: !values
      }, () => {
        if (!this.state.isEmpty) this.commitWidgetValue({
          fromUi: true
        });
      });
    };
    this.handleClose = () => {
      const {
        isEmpty
      } = this.state;
      if (isEmpty) {
        this.setState((_, prevProps) => {
          return {
            values: stringsToDates(prevProps.element.default),
            isEmpty: !stringsToDates(prevProps.element.default)
          };
        }, () => {
          this.commitWidgetValue({
            fromUi: true
          });
        });
      }
    };
    this.getMaxDate = () => {
      const {
        element
      } = this.props;
      const maxDate = element.max;
      return maxDate && maxDate.length > 0 ? moment(maxDate, DATE_FORMAT).toDate() : undefined;
    };
  }
  get initialValue() {
    // If WidgetStateManager knew a value for this widget, initialize to that.
    // Otherwise, use the default value from the widget protobuf.
    const storedValue = this.props.widgetMgr.getStringArrayValue(this.props.element);
    const stringArray = storedValue !== undefined ? storedValue : this.props.element.default || [];
    return stringsToDates(stringArray);
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
      value: values
    } = this.props.element;
    this.props.element.setValue = false;
    const dateValues = values.map(v => new Date(v));
    this.setState({
      values: dateValues,
      isEmpty: !dateValues
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
      width,
      element,
      disabled,
      theme,
      widgetMgr
    } = this.props;
    const {
      values,
      isRange
    } = this.state;
    const {
      colors,
      fontSizes,
      lineHeights,
      spacing
    } = theme;
    const style = {
      width
    };
    const minDate = moment(element.min, DATE_FORMAT).toDate();
    const maxDate = this.getMaxDate();
    const clearable = element.default.length === 0 && !disabled;

    // We need to extract the mask and format (date-fns notation) from the provided format string
    // The user configured date format is based on the momentJS notation and is only allowed to contain
    // one of YYYY/MM/DD, DD/MM/YYYY, or MM/DD/YYYY" and can also use a period (.) or hyphen (-) as separators.

    // We need to convert the provided format into a mask supported by the Baseweb datepicker
    // Thereby, we need to replace all letters with 9s which refers to any number.
    const dateMask = element.format.replaceAll(/[a-zA-Z]/g, "9");
    // The Baseweb datepicker supports the date-fns notation for date formatting which is
    // slightly different from the momentJS notation. Therefore, we need to
    // convert the provided format into the date-fns notation:
    const dateFormat = element.format.replaceAll("Y", "y").replaceAll("D", "d");

    // Manage our form-clear event handler.
    this.formClearHelper.manageFormClearListener(widgetMgr, element.formId, this.onFormCleared);
    return /*#__PURE__*/_jsxs("div", {
      className: "stDateInput",
      "data-testid": "stDateInput",
      style: style,
      children: [/*#__PURE__*/_jsx(WidgetLabel, {
        label: element.label,
        disabled: disabled,
        labelVisibility: labelVisibilityProtoValueToEnum((_element$labelVisibil = element.labelVisibility) === null || _element$labelVisibil === void 0 ? void 0 : _element$labelVisibil.value),
        children: element.help && /*#__PURE__*/_jsx(StyledWidgetLabelHelp, {
          children: /*#__PURE__*/_jsx(TooltipIcon, {
            content: element.help,
            placement: Placement.TOP_RIGHT
          })
        })
      }), /*#__PURE__*/_jsx(UIDatePicker, {
        density: DENSITY.high,
        formatString: dateFormat,
        mask: isRange ? "".concat(dateMask, " \u2013 ").concat(dateMask) : dateMask,
        placeholder: isRange ? "".concat(element.format, " \u2013 ").concat(element.format) : element.format,
        disabled: disabled,
        onChange: this.handleChange,
        onClose: this.handleClose,
        overrides: {
          Popover: {
            props: {
              placement: PLACEMENT.bottomLeft,
              overrides: {
                Body: {
                  style: {
                    border: "".concat(theme.sizes.borderWidth, " solid ").concat(colors.fadedText10)
                  }
                }
              }
            }
          },
          CalendarContainer: {
            style: {
              fontSize: fontSizes.sm,
              paddingRight: theme.spacing.sm,
              paddingLeft: theme.spacing.sm,
              paddingBottom: theme.spacing.sm,
              paddingTop: theme.spacing.sm
            }
          },
          Week: {
            style: {
              fontSize: fontSizes.sm
            }
          },
          Day: {
            style: _ref2 => {
              let {
                // Due to a bug in BaseWeb, where the range selection defaults to mono300 and can't be changed, we need to override the background colors for all these shared props:
                // $pseudoHighlighted: Styles the range selection when you click an initial date, and hover over the end one, but NOT click it.
                // $pseudoSelected: Styles when a range was selected, click outide, and click the calendar again.
                // $selected: Styles the background below the red circle from the start and end dates.
                // $isHovered: Styles the background below the end date when hovered.
                $pseudoHighlighted,
                $pseudoSelected,
                $selected,
                $isHovered
              } = _ref2;
              return {
                fontSize: fontSizes.sm,
                lineHeight: lineHeights.base,
                "::before": {
                  backgroundColor: $selected || $pseudoSelected || $pseudoHighlighted || $isHovered ? "".concat(colors.secondaryBg, " !important") : colors.transparent
                },
                "::after": {
                  borderColor: colors.transparent
                }
              };
            }
          },
          PrevButton: {
            style: () => ({
              // Align icon to the center of the button.
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // Remove primary-color click effect.
              ":active": {
                backgroundColor: colors.transparent
              },
              ":focus": {
                backgroundColor: colors.transparent,
                outline: 0
              }
            })
          },
          NextButton: {
            style: {
              // Align icon to the center of the button.
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // Remove primary-color click effect.
              ":active": {
                backgroundColor: colors.transparent
              },
              ":focus": {
                backgroundColor: colors.transparent,
                outline: 0
              }
            }
          },
          Input: {
            props: {
              // The default maskChar ` ` causes empty dates to display as ` / / `
              // Clearing the maskChar so empty dates will not display
              maskChar: null,
              overrides: {
                Root: {
                  style: {
                    // Baseweb requires long-hand props, short-hand leads to weird bugs & warnings.
                    borderLeftWidth: theme.sizes.borderWidth,
                    borderRightWidth: theme.sizes.borderWidth,
                    borderTopWidth: theme.sizes.borderWidth,
                    borderBottomWidth: theme.sizes.borderWidth
                  }
                },
                ClearIcon: {
                  props: {
                    overrides: {
                      Svg: {
                        style: {
                          color: theme.colors.darkGray,
                          // Since the close icon is an SVG, and we can't control its viewbox nor its attributes,
                          // Let's use a scale transform effect to make it bigger.
                          // The width property only enlarges its bounding box, so it's easier to click.
                          transform: "scale(1.41)",
                          width: theme.spacing.twoXL,
                          marginRight: "-8px",
                          ":hover": {
                            fill: theme.colors.bodyText
                          }
                        }
                      }
                    }
                  }
                },
                Input: {
                  style: {
                    // Baseweb requires long-hand props, short-hand leads to weird bugs & warnings.
                    paddingRight: spacing.sm,
                    paddingLeft: spacing.sm,
                    paddingBottom: spacing.sm,
                    paddingTop: spacing.sm,
                    lineHeight: lineHeights.inputWidget
                  },
                  props: {
                    "data-testid": "stDateInput-Input"
                  }
                }
              }
            }
          }
        },
        value: values,
        minDate: minDate,
        maxDate: maxDate,
        range: isRange,
        clearable: clearable
      })]
    });
  }
}
export default withTheme(DateInput);
//# sourceMappingURL=DateInput.js.map