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
import pick from "lodash/pick";
import { Slider as UISlider } from "baseui/slider";
import { withTheme } from "@emotion/react";
import { sprintf } from "sprintf-js";
import { FormClearHelper } from "../Form";
import { Slider as SliderProto } from "../../../proto";
import { debounce, labelVisibilityProtoValueToEnum } from "../../../util/utils";
import moment from "moment";
import { WidgetLabel, StyledWidgetLabelHelp } from "../BaseWidget";
import TooltipIcon from "../../shared/TooltipIcon";
import { Placement } from "../../shared/Tooltip";
import { StyledThumb, StyledThumbValue, StyledTickBar, StyledTickBarItem } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const DEBOUNCE_TIME_MS = 200;
class Slider extends React.PureComponent {
  constructor(_props) {
    super(_props);
    this.formClearHelper = new FormClearHelper();
    this.state = void 0;
    this.sliderRef = /*#__PURE__*/React.createRef();
    this.thumbRef = [];
    this.thumbValueRef = [];
    this.commitWidgetValueDebounced = void 0;
    this.commitWidgetValue = source => {
      const {
        widgetMgr,
        element,
        fragmentId
      } = this.props;
      widgetMgr.setDoubleArrayValue(element, this.state.value, source, fragmentId);
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
    this.handleChange = _ref => {
      let {
        value
      } = _ref;
      this.setState({
        value
      }, () => this.commitWidgetValueDebounced({
        fromUi: true
      }));
    };
    this.renderThumb = /*#__PURE__*/React.forwardRef((props, ref) => {
      var _this$thumbValueRef;
      const {
        $value,
        $thumbIndex
      } = props;
      const thumbIndex = $thumbIndex || 0;
      this.thumbRef[thumbIndex] = ref;
      (_this$thumbValueRef = this.thumbValueRef)[thumbIndex] || (_this$thumbValueRef[thumbIndex] = /*#__PURE__*/React.createRef());
      const formattedValue = $value ? this.formatValue($value[$thumbIndex]) : "";
      const passThrough = pick(props, ["role", "style", "aria-valuemax", "aria-valuemin", "aria-valuenow", "tabIndex", "onKeyUp", "onKeyDown", "onMouseEnter", "onMouseLeave", "draggable"]);
      const ariaValueText = {};
      if (this.props.element.options.length > 0 || this.isDateTimeType()) {
        ariaValueText["aria-valuetext"] = formattedValue;
      }
      return /*#__PURE__*/_jsx(StyledThumb, {
        ...passThrough,
        disabled: props.$disabled === true,
        ref: this.thumbRef[thumbIndex],
        "aria-valuetext": formattedValue,
        "aria-label": this.props.element.label,
        children: /*#__PURE__*/_jsx(StyledThumbValue, {
          className: "StyledThumbValue",
          "data-testid": "stThumbValue",
          disabled: props.$disabled === true,
          ref: this.thumbValueRef[thumbIndex],
          children: formattedValue
        })
      });
    });
    this.renderTickBar = () => {
      const {
        disabled,
        element
      } = this.props;
      const {
        max,
        min
      } = element;
      return /*#__PURE__*/_jsxs(StyledTickBar, {
        "data-testid": "stTickBar",
        children: [/*#__PURE__*/_jsx(StyledTickBarItem, {
          disabled: disabled,
          "data-testid": "stTickBarMin",
          children: this.formatValue(min)
        }), /*#__PURE__*/_jsx(StyledTickBarItem, {
          disabled: disabled,
          "data-testid": "stTickBarMax",
          children: this.formatValue(max)
        })]
      });
    };
    this.commitWidgetValueDebounced = debounce(DEBOUNCE_TIME_MS, this.commitWidgetValue.bind(this));
    this.state = {
      value: this.initialValue
    };
  }
  get initialValue() {
    const storedValue = this.props.widgetMgr.getDoubleArrayValue(this.props.element);
    return storedValue !== undefined ? storedValue : this.props.element.default;
  }
  componentDidMount() {
    // Check thumb value's alignment vs. slider container
    // Delay the alignment to allow the page layout to complete
    setTimeout(() => {
      this.thumbValueAlignment();
    }, 0);
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

  /**
   * Return the value of the slider. This will either be an array with
   * one value (for a single value slider), or an array with two
   * values (for a range slider).
   */
  get value() {
    const {
      min,
      max
    } = this.props.element;
    const {
      value
    } = this.state;
    let start = value[0];
    let end = value.length > 1 ? value[1] : value[0];
    // Adjust the value if it's out of bounds.
    if (start > end) {
      start = end;
    }
    if (start < min) {
      start = min;
    }
    if (start > max) {
      start = max;
    }
    if (end < min) {
      end = min;
    }
    if (end > max) {
      end = max;
    }
    return value.length > 1 ? [start, end] : [start];
  }
  isDateTimeType() {
    const {
      dataType
    } = this.props.element;
    return dataType === SliderProto.DataType.DATETIME || dataType === SliderProto.DataType.DATE || dataType === SliderProto.DataType.TIME;
  }
  formatValue(value) {
    const {
      format,
      options
    } = this.props.element;
    if (this.isDateTimeType()) {
      // Python datetime uses microseconds, but JS & Moment uses milliseconds
      // The timestamp is always set to the UTC timezone, even so, the actual timezone
      // for this timestamp in the backend could be different.
      // However, the frontend component does not need to know about the actual timezone.
      return moment.utc(value / 1000).format(format);
    }
    if (options.length > 0) {
      return sprintf(format, options[value]);
    }
    return sprintf(format, value);
  }
  alignValueOnThumb(slider, thumb, thumbValue) {
    if (slider && thumb && thumbValue) {
      const sliderPosition = slider.getBoundingClientRect();
      const thumbPosition = thumb.getBoundingClientRect();
      const thumbValuePosition = thumbValue.getBoundingClientRect();
      const thumbMidpoint = thumbPosition.left + thumbPosition.width / 2;
      const thumbValueOverflowsLeft = thumbMidpoint - thumbValuePosition.width / 2 < sliderPosition.left;
      const thumbValueOverflowsRight = thumbMidpoint + thumbValuePosition.width / 2 > sliderPosition.right;
      thumbValue.style.left = thumbValueOverflowsLeft ? "0" : "";
      thumbValue.style.right = thumbValueOverflowsRight ? "0" : "";
    }
  }
  thumbValueAlignment() {
    var _this$thumbRef$, _this$thumbRef$2, _this$thumbValueRef$, _this$thumbValueRef$2;
    const sliderDiv = this.sliderRef.current;
    const thumb1Div = (_this$thumbRef$ = this.thumbRef[0]) === null || _this$thumbRef$ === void 0 ? void 0 : _this$thumbRef$.current;
    const thumb2Div = (_this$thumbRef$2 = this.thumbRef[1]) === null || _this$thumbRef$2 === void 0 ? void 0 : _this$thumbRef$2.current;
    const thumb1ValueDiv = (_this$thumbValueRef$ = this.thumbValueRef[0]) === null || _this$thumbValueRef$ === void 0 ? void 0 : _this$thumbValueRef$.current;
    const thumb2ValueDiv = (_this$thumbValueRef$2 = this.thumbValueRef[1]) === null || _this$thumbValueRef$2 === void 0 ? void 0 : _this$thumbValueRef$2.current;
    // Minimum gap between thumb values (in px)
    const labelGap = 16;

    // Handles label alignment over each thumb
    this.alignValueOnThumb(sliderDiv, thumb1Div, thumb1ValueDiv);
    this.alignValueOnThumb(sliderDiv, thumb2Div, thumb2ValueDiv);

    // Checks & handles label spacing when two thumb values & they overlap
    if (sliderDiv && thumb1Div && thumb2Div && thumb1ValueDiv && thumb2ValueDiv) {
      const slider = sliderDiv.getBoundingClientRect();
      const thumb1 = thumb1Div.getBoundingClientRect();
      const thumb2 = thumb2Div.getBoundingClientRect();
      const thumb1Value = thumb1ValueDiv.getBoundingClientRect();
      const thumb2Value = thumb2ValueDiv.getBoundingClientRect();

      // Check if thumb values are overlapping or too close together
      if (thumb1Value.right + labelGap > thumb2Value.left) {
        // Check whether to shift 1st thumb value left or 2nd thumb value right
        const moveLeft = thumb2Value.left - labelGap - thumb1Value.width > slider.left;
        if (moveLeft) {
          thumb1ValueDiv.style.right = "".concat(thumb2Value.width + labelGap - (thumb2.right - thumb1.right), "px");
        } else {
          thumb2ValueDiv.style.left = "".concat(thumb1Value.width + labelGap - (thumb2.left - thumb1.left), "px");
        }
      }
    }
  }

  // eslint-disable-next-line react/display-name

  render() {
    var _element$labelVisibil;
    const {
      disabled,
      element,
      theme,
      width,
      widgetMgr
    } = this.props;
    const {
      colors,
      fonts,
      fontSizes,
      spacing
    } = theme;
    const style = {
      width
    };

    // Manage our form-clear event handler.
    this.formClearHelper.manageFormClearListener(widgetMgr, element.formId, this.onFormCleared);

    // Check the thumb value's alignment vs. slider container
    this.thumbValueAlignment();
    return /*#__PURE__*/_jsxs("div", {
      ref: this.sliderRef,
      className: "stSlider",
      "data-testid": "stSlider",
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
      }), /*#__PURE__*/_jsx(UISlider, {
        min: element.min,
        max: element.max,
        step: element.step,
        value: this.value,
        onChange: this.handleChange,
        disabled: disabled,
        overrides: {
          Root: {
            style: {
              paddingTop: spacing.twoThirdsSmFont
            }
          },
          Thumb: this.renderThumb,
          Tick: {
            style: {
              fontFamily: fonts.monospace,
              fontSize: fontSizes.sm
            }
          },
          Track: {
            style: {
              backgroundColor: "none !important",
              paddingBottom: 0,
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: spacing.twoThirdsSmFont
            }
          },
          InnerTrack: {
            style: _ref2 => {
              let {
                $disabled
              } = _ref2;
              return {
                height: "4px",
                ...($disabled ? {
                  background: colors.darkenedBgMix25
                } : {})
              };
            }
          },
          TickBar: this.renderTickBar
        }
      })]
    });
  }
}
export default withTheme(Slider);
//# sourceMappingURL=Slider.js.map