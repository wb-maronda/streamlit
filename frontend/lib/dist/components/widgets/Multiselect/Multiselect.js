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
import { isMobile } from "react-device-detect";
import without from "lodash/without";
import { withTheme } from "@emotion/react";
import { FormClearHelper } from "../Form";
import { ChevronDown } from "baseui/icon";
import { TYPE, Select as UISelect } from "baseui/select";
import { WidgetLabel, StyledWidgetLabelHelp } from "../BaseWidget";
import { StyledUISelect } from "./styled-components";
import TooltipIcon from "../../shared/TooltipIcon";
import { Placement } from "../../shared/Tooltip";
import { VirtualDropdown } from "../../shared/Dropdown";
import { fuzzyFilterSelectOptions } from "../../shared/Dropdown/Selectbox";
import { labelVisibilityProtoValueToEnum } from "../../../util/utils";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
class Multiselect extends React.PureComponent {
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
      widgetMgr.setIntArrayValue(element, this.state.value, source, fragmentId);
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
    this.onChange = params => {
      if (this.props.element.maxSelections && params.type === "select" && this.state.value.length >= this.props.element.maxSelections) {
        return;
      }
      this.setState(this.generateNewState(params), () => {
        this.commitWidgetValue({
          fromUi: true
        });
      });
    };
    this.filterOptions = (options, filterValue) => {
      if (this.overMaxSelections()) {
        return [];
      }
      // We need to manually filter for previously selected options here
      const unselectedOptions = options.filter(option => !this.state.value.includes(Number(option.value)));
      return fuzzyFilterSelectOptions(unselectedOptions, filterValue);
    };
  }
  overMaxSelections() {
    return this.props.element.maxSelections > 0 && this.state.value.length >= this.props.element.maxSelections;
  }
  getNoResultsMsg() {
    const {
      maxSelections
    } = this.props.element;
    const {
      value
    } = this.state;
    if (maxSelections === 0) {
      return "No results";
    } else if (value.length === maxSelections) {
      const option = maxSelections !== 1 ? "options" : "option";
      return "You can only select up to ".concat(maxSelections, " ").concat(option, ". Remove an option first.");
    }
    return "No results";
  }
  get initialValue() {
    // If WidgetStateManager knew a value for this widget, initialize to that.
    // Otherwise, use the default value from the widget protobuf.
    const storedValue = this.props.widgetMgr.getIntArrayValue(this.props.element);
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

  get valueFromState() {
    return this.state.value.map(i => {
      const label = this.props.element.options[i];
      return {
        value: i.toString(),
        label
      };
    });
  }
  generateNewState(data) {
    const getIndex = () => {
      var _data$option;
      const valueId = (_data$option = data.option) === null || _data$option === void 0 ? void 0 : _data$option.value;
      return parseInt(valueId, 10);
    };
    switch (data.type) {
      case "remove":
        {
          return {
            value: without(this.state.value, getIndex())
          };
        }
      case "clear":
        {
          return {
            value: []
          };
        }
      case "select":
        {
          return {
            value: this.state.value.concat([getIndex()])
          };
        }
      default:
        {
          throw new Error("State transition is unknown: ".concat(data.type));
        }
    }
  }
  render() {
    var _element$labelVisibil;
    const {
      element,
      theme,
      width,
      widgetMgr
    } = this.props;
    const style = {
      width
    };
    const {
      options
    } = element;
    const disabled = options.length === 0 ? true : this.props.disabled;
    const placeholder = options.length === 0 ? "No options to select." : element.placeholder;
    const selectOptions = options.map((option, idx) => {
      return {
        label: option,
        value: idx.toString()
      };
    });

    // Manage our form-clear event handler.
    this.formClearHelper.manageFormClearListener(widgetMgr, element.formId, this.onFormCleared);

    // Check if we have more than 10 options in the selectbox.
    // If that's true, we show the keyboard on mobile. If not, we hide it.
    const showKeyboardOnMobile = options.length > 10;
    return /*#__PURE__*/_jsxs("div", {
      className: "row-widget stMultiSelect",
      "data-testid": "stMultiSelect",
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
      }), /*#__PURE__*/_jsx(StyledUISelect, {
        children: /*#__PURE__*/_jsx(UISelect, {
          options: selectOptions,
          labelKey: "label",
          valueKey: "value",
          "aria-label": element.label,
          placeholder: placeholder,
          type: TYPE.select,
          multi: true,
          onChange: this.onChange,
          value: this.valueFromState,
          disabled: disabled,
          size: "compact",
          noResultsMsg: this.getNoResultsMsg(),
          filterOptions: this.filterOptions,
          closeOnSelect: false,
          overrides: {
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
            },
            IconsContainer: {
              style: () => ({
                paddingRight: theme.spacing.sm
              })
            },
            ControlContainer: {
              style: {
                minHeight: theme.sizes.minElementHeight,
                // Baseweb requires long-hand props, short-hand leads to weird bugs & warnings.
                borderLeftWidth: theme.sizes.borderWidth,
                borderRightWidth: theme.sizes.borderWidth,
                borderTopWidth: theme.sizes.borderWidth,
                borderBottomWidth: theme.sizes.borderWidth
              }
            },
            Placeholder: {
              style: () => ({
                flex: "inherit"
              })
            },
            ValueContainer: {
              style: () => ({
                paddingLeft: theme.spacing.sm,
                paddingTop: 0,
                paddingBottom: 0,
                paddingRight: 0
              })
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
                      transform: "scale(1.5)",
                      width: theme.spacing.twoXL,
                      ":hover": {
                        fill: theme.colors.bodyText
                      }
                    }
                  }
                }
              }
            },
            SearchIcon: {
              style: {
                color: theme.colors.darkGray
              }
            },
            Tag: {
              props: {
                overrides: {
                  Root: {
                    style: {
                      borderTopLeftRadius: theme.radii.md,
                      borderTopRightRadius: theme.radii.md,
                      borderBottomRightRadius: theme.radii.md,
                      borderBottomLeftRadius: theme.radii.md,
                      fontSize: theme.fontSizes.sm,
                      paddingLeft: theme.spacing.sm,
                      marginLeft: 0,
                      marginRight: theme.spacing.sm,
                      height: "28px"
                    }
                  },
                  Action: {
                    style: {
                      paddingLeft: 0
                    }
                  },
                  ActionIcon: {
                    props: {
                      overrides: {
                        Svg: {
                          style: {
                            width: "10px",
                            height: "10px"
                          }
                        }
                      }
                    }
                  },
                  Text: {
                    style: {
                      fontSize: theme.fontSizes.md
                    }
                  }
                }
              }
            },
            MultiValue: {
              props: {
                overrides: {
                  Root: {
                    style: {
                      fontSize: theme.fontSizes.sm
                    }
                  }
                }
              }
            },
            Input: {
              props: {
                // Change the 'readonly' prop to hide the mobile keyboard if options < 10
                readOnly: isMobile && showKeyboardOnMobile === false ? "readonly" : null
              }
            },
            Dropdown: {
              component: VirtualDropdown
            }
          }
        })
      })]
    });
  }
}
export default withTheme(Multiselect);
//# sourceMappingURL=Multiselect.js.map