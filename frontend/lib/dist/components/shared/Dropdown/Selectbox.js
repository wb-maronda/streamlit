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
import { ChevronDown } from "baseui/icon";
import { Select as UISelect } from "baseui/select";
import { withTheme } from "@emotion/react";
import { hasMatch, score } from "fzy.js";
import sortBy from "lodash/sortBy";
import VirtualDropdown from "./VirtualDropdown";
import { isNullOrUndefined } from "../../../util/utils";
import { Placement } from "../Tooltip";
import TooltipIcon from "../TooltipIcon";
import { WidgetLabel, StyledWidgetLabelHelp } from "../../widgets/BaseWidget";
import { iconSizes } from "../../../theme/primitives";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const NO_OPTIONS_MSG = "No options to select.";
// Add a custom filterOptions method to filter options only based on labels.
// The baseweb default method filters based on labels or indices
// More details: https://github.com/streamlit/streamlit/issues/1010
// Also filters using fuzzy search powered by fzy.js. Automatically handles
// upper/lowercase.
export function fuzzyFilterSelectOptions(options, pattern) {
  if (!pattern) {
    return options;
  }
  const filteredOptions = options.filter(opt => hasMatch(pattern, opt.label));
  return sortBy(filteredOptions, opt => score(pattern, opt.label)).reverse();
}
export class Selectbox extends React.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      isEmpty: false,
      value: this.props.value
    };
    this.onChange = params => {
      if (params.value.length === 0) {
        this.setState({
          value: null
        }, () => this.props.onChange(null));
        return;
      }
      const [selected] = params.value;
      this.setState({
        value: parseInt(selected.value, 10)
      }, () => this.props.onChange(this.state.value));
    };
    this.onInputChange = event => {
      const currentInput = event.target.value;
      this.setState({
        isEmpty: !currentInput
      });
    };
    this.onClose = () => {
      this.setState({
        isEmpty: false
      });
    };
    this.filterOptions = (options, filterValue) => fuzzyFilterSelectOptions(options, filterValue);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value && this.state.value !== this.props.value) {
      this.setState((_, prevProps) => {
        return {
          value: prevProps.value
        };
      });
    }
  }

  /**
   * Both onInputChange and onClose handle the situation where
   * the user has hit backspace enough times that there's nothing
   * left in the input, but we don't want the value for the input
   * to then be invalid once they've clicked away
   */

  render() {
    const style = {
      width: this.props.width
    };
    const {
      label,
      labelVisibility,
      help,
      placeholder,
      theme,
      clearable
    } = this.props;
    let {
      disabled,
      options
    } = this.props;
    let value = [];
    if (!isNullOrUndefined(this.state.value) && !this.state.isEmpty) {
      value = [{
        label: options.length > 0 ? options[this.state.value] : NO_OPTIONS_MSG,
        value: this.state.value.toString()
      }];
    }
    if (options.length === 0) {
      options = [NO_OPTIONS_MSG];
      disabled = true;
    }
    const selectOptions = options.map((option, index) => ({
      label: option,
      value: index.toString()
    }));

    // Check if we have more than 10 options in the selectbox.
    // If that's true, we show the keyboard on mobile. If not, we hide it.
    const showKeyboardOnMobile = options.length > 10;
    return /*#__PURE__*/_jsxs("div", {
      className: "row-widget stSelectbox",
      "data-testid": "stSelectbox",
      style: style,
      children: [/*#__PURE__*/_jsx(WidgetLabel, {
        label: label,
        labelVisibility: labelVisibility,
        disabled: disabled,
        children: help && /*#__PURE__*/_jsx(StyledWidgetLabelHelp, {
          children: /*#__PURE__*/_jsx(TooltipIcon, {
            content: help,
            placement: Placement.TOP_RIGHT
          })
        })
      }), /*#__PURE__*/_jsx(UISelect, {
        disabled: disabled,
        labelKey: "label",
        "aria-label": label || "",
        onChange: this.onChange,
        onInputChange: this.onInputChange,
        onClose: this.onClose,
        options: selectOptions,
        filterOptions: this.filterOptions,
        clearable: clearable || false,
        escapeClearsValue: clearable || false,
        value: value,
        valueKey: "value",
        placeholder: placeholder,
        overrides: {
          Root: {
            style: () => ({
              lineHeight: theme.lineHeights.inputWidget
            })
          },
          Dropdown: {
            component: VirtualDropdown
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
                    transform: "scale(1.25)",
                    width: theme.spacing.twoXL,
                    ":hover": {
                      fill: theme.colors.bodyText
                    }
                  }
                }
              }
            }
          },
          ControlContainer: {
            style: () => ({
              height: theme.sizes.minElementHeight,
              // Baseweb requires long-hand props, short-hand leads to weird bugs & warnings.
              borderLeftWidth: theme.sizes.borderWidth,
              borderRightWidth: theme.sizes.borderWidth,
              borderTopWidth: theme.sizes.borderWidth,
              borderBottomWidth: theme.sizes.borderWidth
            })
          },
          IconsContainer: {
            style: () => ({
              paddingRight: theme.spacing.sm
            })
          },
          ValueContainer: {
            style: () => ({
              // Baseweb requires long-hand props, short-hand leads to weird bugs & warnings.
              paddingRight: theme.spacing.sm,
              paddingLeft: theme.spacing.sm,
              paddingBottom: theme.spacing.sm,
              paddingTop: theme.spacing.sm
            })
          },
          Input: {
            props: {
              // Change the 'readonly' prop to hide the mobile keyboard if options < 10
              readOnly: isMobile && showKeyboardOnMobile === false ? "readonly" : null
            },
            style: () => ({
              lineHeight: theme.lineHeights.inputWidget
            })
          },
          // Nudge the dropdown menu by 1px so the focus state doesn't get cut off
          Popover: {
            props: {
              overrides: {
                Body: {
                  style: () => ({
                    marginTop: "1px"
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
                    width: iconSizes.xl,
                    height: iconSizes.xl
                  })
                }
              }
            }
          }
        }
      })]
    });
  }
}
export default withTheme(Selectbox);
//# sourceMappingURL=Selectbox.js.map