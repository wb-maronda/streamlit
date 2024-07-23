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
import { Radio as UIRadio, RadioGroup, ALIGN } from "baseui/radio";
import { WidgetLabel, StyledWidgetLabelHelpInline } from "../../widgets/BaseWidget";
import TooltipIcon from "../TooltipIcon";
import { Placement } from "../Tooltip";
import StreamlitMarkdown from "../StreamlitMarkdown/StreamlitMarkdown";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
class Radio extends React.PureComponent {
  constructor() {
    var _this$props$value;
    super(...arguments);
    this.state = {
      value: (_this$props$value = this.props.value) !== null && _this$props$value !== void 0 ? _this$props$value : null
    };
    this.onChange = e => {
      const selectedIndex = parseInt(e.target.value, 10);
      this.setState({
        value: selectedIndex
      }, () => this.props.onChange(selectedIndex));
    };
  }
  componentDidUpdate(prevProps) {
    // If props.value has changed, re-initialize state.value.
    if (prevProps.value !== this.props.value && this.props.value !== this.state.value) {
      this.setState((_, prevProps) => {
        var _prevProps$value;
        return {
          value: (_prevProps$value = prevProps.value) !== null && _prevProps$value !== void 0 ? _prevProps$value : null
        };
      });
    }
  }
  render() {
    const {
      theme,
      width,
      help,
      label,
      horizontal,
      labelVisibility
    } = this.props;
    let {
      disabled
    } = this.props;
    const {
      colors,
      radii
    } = theme;
    const style = {
      width
    };
    const options = [...this.props.options];
    const captions = [...this.props.captions];
    const hasCaptions = captions.length > 0;
    const spacerNeeded = caption => {
      // When captions are provided for only some options in horizontal
      // layout we need to add a spacer for the options without captions
      const spacer = caption == "" && horizontal && hasCaptions;
      return spacer ? "&nbsp;" : caption;
    };
    if (options.length === 0) {
      options.push("No options to select.");
      disabled = true;
    }
    return /*#__PURE__*/_jsxs("div", {
      className: "row-widget stRadio",
      "data-testid": "stRadio",
      style: style,
      children: [/*#__PURE__*/_jsx(WidgetLabel, {
        label: label,
        disabled: disabled,
        labelVisibility: labelVisibility,
        children: help && /*#__PURE__*/_jsx(StyledWidgetLabelHelpInline, {
          children: /*#__PURE__*/_jsx(TooltipIcon, {
            content: help,
            placement: Placement.TOP_RIGHT
          })
        })
      }), /*#__PURE__*/_jsx(RadioGroup, {
        onChange: this.onChange,
        value: this.state.value !== null ? this.state.value.toString() : undefined,
        disabled: disabled,
        align: horizontal ? ALIGN.horizontal : ALIGN.vertical,
        "aria-label": label,
        "data-testid": "stRadioGroup",
        overrides: {
          RadioGroupRoot: {
            style: {
              gap: hasCaptions ? theme.spacing.sm : theme.spacing.none,
              minHeight: theme.sizes.minElementHeight
            }
          }
        },
        children: options.map((option, index) => /*#__PURE__*/_jsxs(UIRadio, {
          value: index.toString(),
          overrides: {
            Root: {
              style: _ref => {
                let {
                  $isFocusVisible
                } = _ref;
                return {
                  marginBottom: 0,
                  marginTop: 0,
                  marginRight: hasCaptions ? theme.spacing.sm : theme.spacing.lg,
                  // Make left and right padding look the same visually.
                  paddingLeft: 0,
                  alignItems: "start",
                  paddingRight: "2px",
                  backgroundColor: $isFocusVisible ? colors.darkenedBgMix25 : "",
                  borderTopLeftRadius: radii.md,
                  borderTopRightRadius: radii.md,
                  borderBottomLeftRadius: radii.md,
                  borderBottomRightRadius: radii.md
                };
              }
            },
            RadioMarkOuter: {
              style: _ref2 => {
                let {
                  $checked
                } = _ref2;
                return {
                  width: "1rem",
                  height: "1rem",
                  marginTop: "0.35rem",
                  marginRight: "0",
                  marginLeft: "0",
                  backgroundColor: $checked && !disabled ? colors.primary : colors.fadedText40
                };
              }
            },
            RadioMarkInner: {
              style: _ref3 => {
                let {
                  $checked
                } = _ref3;
                return {
                  height: $checked ? "6px" : "14px",
                  width: $checked ? "6px" : "14px"
                };
              }
            },
            Label: {
              style: {
                color: disabled ? colors.fadedText40 : colors.bodyText,
                position: "relative",
                top: "1px"
              }
            }
          },
          children: [/*#__PURE__*/_jsx(StreamlitMarkdown, {
            source: option,
            allowHTML: false,
            isLabel: true,
            largerLabel: true
          }), hasCaptions && /*#__PURE__*/_jsx(StreamlitMarkdown, {
            source: spacerNeeded(captions[index]),
            allowHTML: false,
            isCaption: true,
            isLabel: true
          })]
        }, index))
      })]
    });
  }
}
export default withTheme(Radio);
//# sourceMappingURL=Radio.js.map