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
import { Minus, Plus } from "@emotion-icons/open-iconic";
import { withTheme } from "@emotion/react";
import { sprintf } from "sprintf-js";
import { Input as UIInput } from "baseui/input";
import uniqueId from "lodash/uniqueId";
import { isInForm, isNullOrUndefined, labelVisibilityProtoValueToEnum, notNullOrUndefined } from "../../../util/utils";
import { FormClearHelper } from "../Form";
import { logWarning } from "../../../util/log";
import { NumberInput as NumberInputProto } from "../../../proto";
import TooltipIcon from "../../shared/TooltipIcon";
import { Placement } from "../../shared/Tooltip";
import Icon from "../../shared/Icon";
import InputInstructions from "../../shared/InputInstructions/InputInstructions";
import { StyledWidgetLabelHelp, WidgetLabel } from "../BaseWidget";
import { StyledInputContainer, StyledInputControl, StyledInputControls, StyledInstructionsContainer } from "./styled-components";

/**
 * Return a string property from an element. If the string is
 * null or empty, return undefined instead.
 */
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
function getNonEmptyString(value) {
  return isNullOrUndefined(value) || value === "" ? undefined : value;
}

/**
 * This function returns the initial value for the NumberInput widget
 * via the widget manager.
 */
const getInitialValue = props => {
  const isIntData = props.element.dataType === NumberInputProto.DataType.INT;
  const storedValue = isIntData ? props.widgetMgr.getIntValue(props.element) : props.widgetMgr.getDoubleValue(props.element);
  return storedValue ?? props.element.default ?? null;
};
const getStep = _ref => {
  let {
    step,
    dataType
  } = _ref;
  if (step) {
    return step;
  }
  if (dataType === NumberInputProto.DataType.INT) {
    return 1;
  }
  return 0.01;
};

/**
 * Utilizes the sprintf library to format a number value
 * according to a given format string.
 */
export const formatValue = _ref2 => {
  let {
    value,
    format,
    step,
    dataType
  } = _ref2;
  if (isNullOrUndefined(value)) {
    return null;
  }
  let formatString = getNonEmptyString(format);
  if (isNullOrUndefined(formatString) && notNullOrUndefined(step)) {
    const strStep = step.toString();
    if (dataType === NumberInputProto.DataType.FLOAT && step !== 0 && strStep.includes(".")) {
      const decimalPlaces = strStep.split(".")[1].length;
      formatString = `%0.${decimalPlaces}f`;
    }
  }
  if (isNullOrUndefined(formatString)) {
    return value.toString();
  }
  try {
    return sprintf(formatString, value);
  } catch (e) {
    logWarning(`Error in sprintf(${formatString}, ${value}): ${e}`);
    return String(value);
  }
};
export const canDecrement = (value, step, min) => {
  if (isNullOrUndefined(value)) {
    return false;
  }
  return value - step >= min;
};
export const canIncrement = (value, step, max) => {
  if (isNullOrUndefined(value)) {
    return false;
  }
  return value + step <= max;
};
export const NumberInput = _ref3 => {
  let {
    disabled,
    element,
    widgetMgr,
    width,
    theme,
    fragmentId
  } = _ref3;
  const {
    dataType: elementDataType,
    id: elementId,
    formId: elementFormId,
    default: elementDefault,
    format: elementFormat
  } = element;
  const min = element.hasMin ? element.min : -Infinity;
  const max = element.hasMax ? element.max : +Infinity;
  const [step, setStep] = React.useState(getStep(element));
  const initialValue = getInitialValue({
    element,
    widgetMgr
  });
  const [dirty, setDirty] = React.useState(false);
  const [value, setValue] = React.useState(initialValue);
  const [formattedValue, setFormattedValue] = React.useState(formatValue({
    value: initialValue,
    ...element,
    step
  }));
  const [isFocused, setIsFocused] = React.useState(false);
  const inputRef = React.useRef(null);
  const formClearHelper = React.useRef(new FormClearHelper());
  const id = React.useRef(uniqueId("number_input_"));
  const canDec = canDecrement(value, step, min);
  const canInc = canIncrement(value, step, max);
  const inForm = isInForm({
    formId: elementFormId
  });
  // Allows form submission on Enter & displays Enter instructions
  const allowFormEnterToSubmit = widgetMgr.allowFormEnterToSubmit(elementFormId);

  // update the step if the props change
  React.useEffect(() => {
    setStep(getStep({
      step: element.step,
      dataType: element.dataType
    }));
  }, [element.dataType, element.step]);
  const commitValue = React.useCallback(_ref4 => {
    let {
      value,
      source
    } = _ref4;
    if (notNullOrUndefined(value) && (min > value || value > max)) {
      inputRef.current?.reportValidity();
    } else {
      const newValue = value ?? elementDefault ?? null;
      switch (elementDataType) {
        case NumberInputProto.DataType.INT:
          widgetMgr.setIntValue({
            id: elementId,
            formId: elementFormId
          }, newValue, source, fragmentId);
          break;
        case NumberInputProto.DataType.FLOAT:
          widgetMgr.setDoubleValue({
            id: elementId,
            formId: elementFormId
          }, newValue, source, fragmentId);
          break;
        default:
          throw new Error("Invalid data type");
      }
      setDirty(false);
      setValue(newValue);
      setFormattedValue(formatValue({
        value: newValue,
        dataType: elementDataType,
        format: elementFormat,
        step
      }));
    }
  }, [min, max, inputRef, widgetMgr, fragmentId, step, elementDataType, elementId, elementFormId, elementDefault, elementFormat]);
  const onBlur = () => {
    if (dirty) {
      commitValue({
        value,
        source: {
          fromUi: true
        }
      });
    }
    setIsFocused(false);
  };
  const onFocus = () => {
    setIsFocused(true);
  };
  const updateFromProtobuf = () => {
    const {
      value
    } = element;
    element.setValue = false;
    setValue(value ?? null);
    setFormattedValue(formatValue({
      value: value ?? null,
      ...element,
      step
    }));
    commitValue({
      value: value ?? null,
      source: {
        fromUi: false
      }
    });
  };

  // on component mount, we want to update the value from protobuf if setValue is true, otherwise commit current value
  React.useEffect(() => {
    const formClearHelperCopy = formClearHelper.current;
    if (element.setValue) {
      updateFromProtobuf();
    } else {
      commitValue({
        value,
        source: {
          fromUi: false
        }
      });
    }
    return () => {
      formClearHelperCopy.disconnect();
    };

    // I don't want to run this effect on every render, only on mount.
    // Additionally, it's okay if commitValue changes, because we only call
    // it once in the beginning anyways.
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  // update from protobuf whenever component updates if element.setValue is truthy
  if (element.setValue) {
    updateFromProtobuf();
  }
  const clearable = isNullOrUndefined(element.default) && !disabled;
  formClearHelper.current.manageFormClearListener(widgetMgr, element.formId, () => {
    setValue(element.default ?? null);
    commitValue({
      value,
      source: {
        fromUi: true
      }
    });
  });
  const onChange = e => {
    const {
      value
    } = e.target;
    if (value === "") {
      setDirty(true);
      setValue(null);
      setFormattedValue(null);
    } else {
      let numValue;
      if (element.dataType === NumberInputProto.DataType.INT) {
        numValue = parseInt(value, 10);
      } else {
        numValue = parseFloat(value);
      }
      setDirty(true);
      setValue(numValue);
      setFormattedValue(value);
    }
  };
  const increment = React.useCallback(() => {
    if (canInc) {
      setDirty(true);
      commitValue({
        value: (value ?? min) + step,
        source: {
          fromUi: true
        }
      });
    }
  }, [value, min, step, canInc]);
  const decrement = React.useCallback(() => {
    if (canDec) {
      setDirty(true);
      commitValue({
        value: (value ?? max) - step,
        source: {
          fromUi: true
        }
      });
    }
  }, [value, max, step, canDec]);
  const onKeyDown = React.useCallback(e => {
    const {
      key
    } = e;
    switch (key) {
      case "ArrowUp":
        e.preventDefault();
        increment();
        break;
      case "ArrowDown":
        e.preventDefault();
        decrement();
        break;
      default:
    }
  }, [increment, decrement]);
  const onKeyPress = React.useCallback(e => {
    if (e.key === "Enter") {
      if (dirty) {
        commitValue({
          value,
          source: {
            fromUi: true
          }
        });
      }
      if (allowFormEnterToSubmit) {
        widgetMgr.submitForm(elementFormId, fragmentId);
      }
    }
  }, [dirty, value, commitValue, widgetMgr, elementFormId, fragmentId, allowFormEnterToSubmit]);
  return /*#__PURE__*/_jsxs("div", {
    className: "stNumberInput",
    "data-testid": "stNumberInput",
    style: {
      width
    },
    children: [/*#__PURE__*/_jsx(WidgetLabel, {
      label: element.label,
      disabled: disabled,
      labelVisibility: labelVisibilityProtoValueToEnum(element.labelVisibility?.value),
      htmlFor: id.current,
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
        inputRef: inputRef,
        value: formattedValue ?? "",
        placeholder: element.placeholder,
        onBlur: () => onBlur(),
        onFocus: () => onFocus(),
        onChange: e => onChange(e),
        onKeyPress: e => onKeyPress(e),
        onKeyDown: e => onKeyDown(e),
        clearable: clearable,
        clearOnEscape: clearable,
        disabled: disabled,
        "aria-label": element.label,
        id: id.current,
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
              "data-testid": "stNumberInputField",
              step: step,
              min: min,
              max: max
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
              // Baseweb requires long-hand props, short-hand leads to weird bugs & warnings.
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderTopWidth: 0,
              borderBottomWidth: 0
            })
          }
        }
      }), width > theme.breakpoints.hideNumberInputControls && /*#__PURE__*/_jsxs(StyledInputControls, {
        children: [/*#__PURE__*/_jsx(StyledInputControl, {
          "data-testid": "stNumberInputStepDown",
          onClick: decrement,
          disabled: !canDec || disabled,
          tabIndex: -1,
          children: /*#__PURE__*/_jsx(Icon, {
            content: Minus,
            size: "xs",
            color: canDec ? "inherit" : "disabled"
          })
        }), /*#__PURE__*/_jsx(StyledInputControl, {
          "data-testid": "stNumberInputStepUp",
          onClick: increment,
          disabled: !canInc || disabled,
          tabIndex: -1,
          children: /*#__PURE__*/_jsx(Icon, {
            content: Plus,
            size: "xs",
            color: canInc ? "inherit" : "disabled"
          })
        })]
      })]
    }), width > theme.breakpoints.hideWidgetDetails && /*#__PURE__*/_jsx(StyledInstructionsContainer, {
      clearable: clearable,
      children: /*#__PURE__*/_jsx(InputInstructions, {
        dirty: dirty,
        value: formattedValue ?? "",
        inForm: inForm,
        allowEnterToSubmit: allowFormEnterToSubmit || !inForm
      })
    })]
  });
};
export default withTheme(NumberInput);
//# sourceMappingURL=NumberInput.js.map