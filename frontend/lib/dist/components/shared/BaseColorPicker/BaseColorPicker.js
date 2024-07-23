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
import { StatefulPopover as UIPopover } from "baseui/popover";
import { ChromePicker } from "react-color";
import { WidgetLabel, StyledWidgetLabelHelpInline } from "../../widgets/BaseWidget";
import TooltipIcon from "../TooltipIcon";
import { Placement } from "../Tooltip";
import { logWarning } from "../../../util/log";
import { StyledColorPicker, StyledChromePicker, StyledColorPreview, StyledColorValue, StyledColorBlock } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
class BaseColorPicker extends React.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      value: this.props.value
    };
    this.onColorChange = color => {
      this.setState({
        value: color.hex
      });
    };
    this.onColorClose = () => {
      this.props.onChange(this.state.value);
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value && this.props.value !== this.state.value) {
      this.setState((_, prevProps) => {
        return {
          value: prevProps.value
        };
      });
    }
  }

  // Note: This is a "local" onChange handler used to update the color preview
  // (allowing the user to click and drag). this.props.onChange is only called
  // when the ColorPicker popover is closed.

  // eslint-disable-next-line class-methods-use-this
  componentDidCatch(error) {
    if ((error === null || error === void 0 ? void 0 : error.name) === "SecurityError") {
      // 2021.06.30 - on Streamlit Sharing, ColorPicker throws a cross-origin
      // error when its popover window is closed. There's an issue open in the
      // react-color repo https://github.com/casesandberg/react-color/issues/806 -
      // but it's months old and hasn't had a developer response.
      logWarning("Swallowing ColorPicker SecurityError '".concat(error.name, ": ").concat(error.message, "'"));

      // We force an update after this error, to re-mount the UIPopover -
      // because the error sometimes cause it to be unmounted. This is an
      // unfortunate hack.
      this.forceUpdate();
    } else {
      throw error;
    }
  }
  render() {
    const {
      width,
      showValue,
      label,
      labelVisibility,
      help,
      disabled
    } = this.props;
    const {
      value
    } = this.state;
    return /*#__PURE__*/_jsxs(StyledColorPicker, {
      "data-testid": "stColorPicker",
      width: width,
      disabled: disabled,
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
      }), /*#__PURE__*/_jsx(UIPopover, {
        onClose: this.onColorClose,
        content: () => /*#__PURE__*/_jsx(StyledChromePicker, {
          "data-testid": "stColorPickerPopover",
          children: /*#__PURE__*/_jsx(ChromePicker, {
            color: value,
            onChange: this.onColorChange,
            disableAlpha: true
          })
        }),
        children: /*#__PURE__*/_jsxs(StyledColorPreview, {
          disabled: disabled,
          children: [/*#__PURE__*/_jsx(StyledColorBlock, {
            "data-testid": "stColorBlock",
            backgroundColor: value,
            disabled: disabled
          }), showValue && /*#__PURE__*/_jsx(StyledColorValue, {
            children: value.toUpperCase()
          })]
        })
      })]
    });
  }
}
export default BaseColorPicker;
//# sourceMappingURL=BaseColorPicker.js.map