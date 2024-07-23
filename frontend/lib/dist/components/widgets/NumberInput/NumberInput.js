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
import { Plus, Minus } from "@emotion-icons/open-iconic";
import { withTheme } from "@emotion/react";
import { sprintf } from "sprintf-js";
import { FormClearHelper } from "../Form";
import { logWarning } from "../../../util/log";
import { NumberInput as NumberInputProto } from "../../../proto";
import { breakpoints } from "../../../theme/primitives/breakpoints";
import TooltipIcon from "../../shared/TooltipIcon";
import { Placement } from "../../shared/Tooltip";
import Icon from "../../shared/Icon";
import { Input as UIInput } from "baseui/input";
import InputInstructions from "../../shared/InputInstructions/InputInstructions";
import { WidgetLabel, StyledWidgetLabelHelp } from "../BaseWidget";
import { isInForm, labelVisibilityProtoValueToEnum, isNullOrUndefined, notNullOrUndefined } from "../../../util/utils";
import { StyledInputContainer, StyledInputControl, StyledInputControls, StyledInstructionsContainer } from "./styled-components";
import uniqueId from "lodash/uniqueId";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export class NumberInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.formClearHelper = new FormClearHelper();
    this.id = void 0;
    this.inputRef = /*#__PURE__*/React.createRef();
    this.formatValue = value => {
      if (isNullOrUndefined(value)) {
        return null;
      }
      const format = getNonEmptyString(this.props.element.format);
      if (format == null) {
        return value.toString();
      }
      try {
        return sprintf(format, value);
      } catch (e) {
        // Don't explode if we have a malformed format string.
        logWarning("Error in sprintf(".concat(format, ", ").concat(value, "): ").concat(e));
        return String(value);
      }
    };
    this.isIntData = () => {
      return this.props.element.dataType === NumberInputProto.DataType.INT;
    };
    this.getMin = () => {
      return this.props.element.hasMin ? this.props.element.min : -Infinity;
    };
    this.getMax = () => {
      return this.props.element.hasMax ? this.props.element.max : +Infinity;
    };
    this.getStep = () => {
      const {
        step
      } = this.props.element;
      if (step) {
        return step;
      }
      if (this.isIntData()) {
        return 1;
      }
      return 0.01;
    };
    this.commitWidgetValue = source => {
      const {
        value
      } = this.state;
      const {
        element,
        widgetMgr,
        fragmentId
      } = this.props;
      const data = this.props.element;
      const min = this.getMin();
      const max = this.getMax();
      if (notNullOrUndefined(value) && (min > value || value > max)) {
        const node = this.inputRef.current;
        if (node) {
          node.reportValidity();
        }
      } else {
        var _ref;
        const valueToBeSaved = (_ref = value !== null && value !== void 0 ? value : data.default) !== null && _ref !== void 0 ? _ref : null;
        if (this.isIntData()) {
          widgetMgr.setIntValue(element, valueToBeSaved, source, fragmentId);
        } else {
          widgetMgr.setDoubleValue(element, valueToBeSaved, source, fragmentId);
        }
        this.setState({
          dirty: false,
          value: valueToBeSaved,
          formattedValue: this.formatValue(valueToBeSaved)
        });
      }
    };
    this.onFormCleared = () => {
      this.setState((_, prevProps) => {
        var _prevProps$element$de;
        return {
          value: (_prevProps$element$de = prevProps.element.default) !== null && _prevProps$element$de !== void 0 ? _prevProps$element$de : null
        };
      }, () => this.commitWidgetValue({
        fromUi: true
      }));
    };
    this.onBlur = () => {
      if (this.state.dirty) {
        this.commitWidgetValue({
          fromUi: true
        });
      }
      this.setState({
        isFocused: false
      });
    };
    this.onFocus = () => {
      this.setState({
        isFocused: true
      });
    };
    this.onChange = e => {
      const {
        value
      } = e.target;
      if (value === "") {
        this.setState({
          dirty: true,
          value: null,
          formattedValue: null
        });
      } else {
        let numValue;
        if (this.isIntData()) {
          numValue = parseInt(value, 10);
        } else {
          numValue = parseFloat(value);
        }
        this.setState({
          dirty: true,
          value: numValue,
          formattedValue: value
        });
      }
    };
    this.onKeyDown = e => {
      const {
        key
      } = e;
      switch (key) {
        case "ArrowUp":
          e.preventDefault();
          this.modifyValueUsingStep("increment")();
          break;
        case "ArrowDown":
          e.preventDefault();
          this.modifyValueUsingStep("decrement")();
          break;
        default: // Do nothing
      }
    };
    this.onKeyPress = e => {
      if (e.key === "Enter") {
        if (this.state.dirty) {
          this.commitWidgetValue({
            fromUi: true
          });
        }
        if (isInForm(this.props.element)) {
          this.props.widgetMgr.submitForm(this.props.element.formId, this.props.fragmentId);
        }
      }
    };
    this.modifyValueUsingStep = modifier => () => {
      const {
        value
      } = this.state;
      const step = this.getStep();
      switch (modifier) {
        case "increment":
          if (this.canIncrement) {
            this.setState({
              dirty: true,
              value: (value !== null && value !== void 0 ? value : this.getMin()) + step
            }, () => {
              this.commitWidgetValue({
                fromUi: true
              });
            });
          }
          break;
        case "decrement":
          if (this.canDecrement) {
            this.setState({
              dirty: true,
              value: (value !== null && value !== void 0 ? value : this.getMax()) - step
            }, () => {
              this.commitWidgetValue({
                fromUi: true
              });
            });
          }
          break;
        default: // Do nothing
      }
    };
    this.state = {
      dirty: false,
      value: this.initialValue,
      formattedValue: this.formatValue(this.initialValue),
      isFocused: false
    };
    this.id = uniqueId("number_input_");
  }
  get initialValue() {
    var _ref2;
    // If WidgetStateManager knew a value for this widget, initialize to that.
    // Otherwise, use the default value from the widget protobuf
    const storedValue = this.isIntData() ? this.props.widgetMgr.getIntValue(this.props.element) : this.props.widgetMgr.getDoubleValue(this.props.element);
    return (_ref2 = storedValue !== null && storedValue !== void 0 ? storedValue : this.props.element.default) !== null && _ref2 !== void 0 ? _ref2 : null;
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
      value: value !== null && value !== void 0 ? value : null,
      formattedValue: this.formatValue(value !== null && value !== void 0 ? value : null)
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

  /** True if the input's current value can be decremented by its step. */
  get canDecrement() {
    if (isNullOrUndefined(this.state.value)) {
      return false;
    }
    return this.state.value - this.getStep() >= this.getMin();
  }

  /** True if the input's current value can be incremented by its step. */
  get canIncrement() {
    if (isNullOrUndefined(this.state.value)) {
      return false;
    }
    return this.state.value + this.getStep() <= this.getMax();
  }
  render() {
    var _element$labelVisibil;
    const {
      element,
      width,
      disabled,
      widgetMgr,
      theme
    } = this.props;
    const {
      formattedValue,
      dirty,
      isFocused
    } = this.state;
    const style = {
      width
    };
    const disableDecrement = !this.canDecrement || disabled;
    const disableIncrement = !this.canIncrement || disabled;
    const clearable = isNullOrUndefined(element.default) && !disabled;

    // Manage our form-clear event handler.
    this.formClearHelper.manageFormClearListener(widgetMgr, element.formId, this.onFormCleared);
    return /*#__PURE__*/_jsxs("div", {
      className: "stNumberInput",
      "data-testid": "stNumberInput",
      style: style,
      children: [/*#__PURE__*/_jsx(WidgetLabel, {
        label: element.label,
        disabled: disabled,
        labelVisibility: labelVisibilityProtoValueToEnum((_element$labelVisibil = element.labelVisibility) === null || _element$labelVisibil === void 0 ? void 0 : _element$labelVisibil.value),
        htmlFor: this.id,
        children: element.help && /*#__PURE__*/_jsx(StyledWidgetLabelHelp, {
          children: /*#__PURE__*/_jsx(TooltipIcon, {
            content: element.help,
            placement: Placement.TOP_RIGHT
          })
        })
      }), /*#__PURE__*/_jsxs(StyledInputContainer, {
        className: isFocused ? "focused" : "",
        "data-testid": "stNumberInputContainer",
        children: [/*#__PURE__*/_jsx(UIInput, {
          type: "number",
          inputRef: this.inputRef,
          value: formattedValue !== null && formattedValue !== void 0 ? formattedValue : "",
          placeholder: element.placeholder,
          onBlur: this.onBlur,
          onFocus: this.onFocus,
          onChange: this.onChange,
          onKeyPress: this.onKeyPress,
          onKeyDown: this.onKeyDown,
          clearable: clearable,
          clearOnEscape: clearable,
          disabled: disabled,
          "aria-label": element.label,
          id: this.id,
          overrides: {
            ClearIcon: {
              props: {
                overrides: {
                  Svg: {
                    style: {
                      color: theme.colors.darkGray,
                      // Since the close icon is an SVG, and we can't control its viewbox nor its attributes,
                      // Let's use a scale transform effect to make it bigger.
                      // The width property only enlarges its bounding box, so it's easier to click.
                      transform: "scale(1.4)",
                      width: theme.spacing.twoXL,
                      marginRight: "-1.25em",
                      ":hover": {
                        fill: theme.colors.bodyText
                      }
                    }
                  }
                }
              }
            },
            Input: {
              props: {
                "data-testid": "stNumberInput-Input",
                step: this.getStep(),
                min: this.getMin(),
                max: this.getMax()
              },
              style: {
                lineHeight: theme.lineHeights.inputWidget,
                // Baseweb requires long-hand props, short-hand leads to weird bugs & warnings.
                paddingRight: theme.spacing.sm,
                paddingLeft: theme.spacing.sm,
                paddingBottom: theme.spacing.sm,
                paddingTop: theme.spacing.sm
              }
            },
            InputContainer: {
              style: () => ({
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0
              })
            },
            Root: {
              style: () => ({
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                // Baseweb requires long-hand props, short-hand leads to weird bugs & warnings.
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderTopWidth: 0,
                borderBottomWidth: 0
              })
            }
          }
        }), width > breakpoints.hideNumberInputControls && /*#__PURE__*/_jsxs(StyledInputControls, {
          children: [/*#__PURE__*/_jsx(StyledInputControl, {
            className: "step-down",
            "data-testid": "stNumberInput-StepDown",
            onClick: this.modifyValueUsingStep("decrement"),
            disabled: disableDecrement,
            tabIndex: -1,
            children: /*#__PURE__*/_jsx(Icon, {
              content: Minus,
              size: "xs",
              color: this.canDecrement ? "inherit" : "disabled"
            })
          }), /*#__PURE__*/_jsx(StyledInputControl, {
            className: "step-up",
            "data-testid": "stNumberInput-StepUp",
            onClick: this.modifyValueUsingStep("increment"),
            disabled: disableIncrement,
            tabIndex: -1,
            children: /*#__PURE__*/_jsx(Icon, {
              content: Plus,
              size: "xs",
              color: this.canIncrement ? "inherit" : "disabled"
            })
          })]
        })]
      }), width > breakpoints.hideWidgetDetails && /*#__PURE__*/_jsx(StyledInstructionsContainer, {
        clearable: clearable,
        children: /*#__PURE__*/_jsx(InputInstructions, {
          dirty: dirty,
          value: formattedValue !== null && formattedValue !== void 0 ? formattedValue : "",
          inForm: isInForm({
            formId: element.formId
          })
        })
      })]
    });
  }
}

/**
 * Return a string property from an element. If the string is
 * null or empty, return undefined instead.
 */
function getNonEmptyString(value) {
  return value == null || value === "" ? undefined : value;
}
export default withTheme(NumberInput);
//# sourceMappingURL=NumberInput.js.map