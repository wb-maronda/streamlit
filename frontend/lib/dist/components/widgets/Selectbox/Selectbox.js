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
import { FormClearHelper } from "../Form";
import UISelectbox from "../../shared/Dropdown";
import { isNullOrUndefined, labelVisibilityProtoValueToEnum } from "../../../util/utils";
import { jsx as _jsx } from "react/jsx-runtime";
export class Selectbox extends React.PureComponent {
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
        return {
          value: prevProps.element.default ?? null
        };
      }, () => this.commitWidgetValue({
        fromUi: true
      }));
    };
    this.onChange = value => {
      this.setState({
        value
      }, () => this.commitWidgetValue({
        fromUi: true
      }));
    };
  }
  get initialValue() {
    // If WidgetStateManager knew a value for this widget, initialize to that.
    // Otherwise, use the default value from the widget protobuf.
    const storedValue = this.props.widgetMgr.getIntValue(this.props.element);
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
      options,
      help,
      label,
      labelVisibility,
      formId,
      placeholder
    } = this.props.element;
    const {
      disabled,
      widgetMgr
    } = this.props;
    const clearable = isNullOrUndefined(this.props.element.default) && !disabled;

    // Manage our form-clear event handler.
    this.formClearHelper.manageFormClearListener(widgetMgr, formId, this.onFormCleared);
    return /*#__PURE__*/_jsx(UISelectbox, {
      label: label,
      labelVisibility: labelVisibilityProtoValueToEnum(labelVisibility?.value),
      options: options,
      disabled: disabled,
      width: this.props.width,
      onChange: this.onChange,
      value: this.state.value,
      help: help,
      placeholder: placeholder,
      clearable: clearable
    });
  }
}
export default withTheme(Selectbox);
//# sourceMappingURL=Selectbox.js.map