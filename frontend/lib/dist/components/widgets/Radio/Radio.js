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
import UIRadio from "../../shared/Radio";
import { FormClearHelper } from "../Form";
import { labelVisibilityProtoValueToEnum } from "../../../util/utils";
import { jsx as _jsx } from "react/jsx-runtime";
class Radio extends React.PureComponent {
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
      widgetMgr.setIntValue(element, this.state.value, source, fragmentId);
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
    this.onChange = selectedIndex => {
      this.setState({
        value: selectedIndex
      }, () => this.commitWidgetValue({
        fromUi: true
      }));
    };
  }
  get initialValue() {
    var _ref;
    // If WidgetStateManager knew a value for this widget, initialize to that.
    // Otherwise, use the default value from the widget protobuf.
    const storedValue = this.props.widgetMgr.getIntValue(this.props.element);
    return (_ref = storedValue !== null && storedValue !== void 0 ? storedValue : this.props.element.default) !== null && _ref !== void 0 ? _ref : null;
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
      value: value !== null && value !== void 0 ? value : null
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
      element,
      width,
      widgetMgr
    } = this.props;
    const {
      horizontal,
      options,
      captions,
      label,
      labelVisibility,
      help
    } = element;

    // Manage our form-clear event handler.
    this.formClearHelper.manageFormClearListener(widgetMgr, element.formId, this.onFormCleared);
    return /*#__PURE__*/_jsx(UIRadio, {
      label: label,
      onChange: this.onChange,
      options: options,
      captions: captions,
      width: width,
      disabled: disabled,
      horizontal: horizontal,
      labelVisibility: labelVisibilityProtoValueToEnum(labelVisibility === null || labelVisibility === void 0 ? void 0 : labelVisibility.value),
      value: this.state.value,
      help: help
    });
  }
}
export default Radio;
//# sourceMappingURL=Radio.js.map