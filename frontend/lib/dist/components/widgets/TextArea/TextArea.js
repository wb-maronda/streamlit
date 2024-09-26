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
import { Textarea as UITextArea } from "baseui/textarea";
import { withTheme } from "@emotion/react";
import uniqueId from "lodash/uniqueId";
import { FormClearHelper } from "../Form";
import InputInstructions from "../../shared/InputInstructions/InputInstructions";
import { StyledWidgetLabelHelp, WidgetLabel } from "../BaseWidget";
import TooltipIcon from "../../shared/TooltipIcon";
import { Placement } from "../../shared/Tooltip";
import { isInForm, labelVisibilityProtoValueToEnum } from "../../../util/utils";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
class TextArea extends React.PureComponent {
  get initialValue() {
    // If WidgetStateManager knew a value for this widget, initialize to that.
    // Otherwise, use the default value from the widget protobuf.
    const storedValue = this.props.widgetMgr.getStringValue(this.props.element);
    return storedValue ?? this.props.element.default ?? null;
  }
  constructor(props) {
    super(props);
    this.formClearHelper = new FormClearHelper();
    this.id = void 0;
    this.state = {
      dirty: false,
      value: this.initialValue
    };
    this.commitWidgetValue = source => {
      const {
        widgetMgr,
        element,
        fragmentId
      } = this.props;
      widgetMgr.setStringValue(element, this.state.value, source, fragmentId);
      this.setState({
        dirty: false
      });
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
    this.onBlur = () => {
      if (this.state.dirty) {
        this.commitWidgetValue({
          fromUi: true
        });
      }
    };
    this.onChange = e => {
      const {
        value
      } = e.target;
      const {
        element
      } = this.props;
      const {
        maxChars
      } = element;
      if (maxChars !== 0 && value.length > maxChars) {
        return;
      }

      // mark it dirty but don't update its value in the WidgetMgr
      // This means that individual keypresses won't trigger a script re-run.
      this.setState({
        dirty: true,
        value
      });
    };
    this.isEnterKeyPressed = event => {
      const {
        keyCode,
        key
      } = event;

      // Using keyCode as well due to some different behaviors on Windows
      // https://bugs.chromium.org/p/chromium/issues/detail?id=79407
      return (key === "Enter" || keyCode === 13 || keyCode === 10) &&
      // Do not send the sentence being composed when Enter is typed into the IME.
      !(event.nativeEvent?.isComposing === true);
    };
    this.onKeyDown = e => {
      const {
        metaKey,
        ctrlKey
      } = e;
      const {
        dirty
      } = this.state;
      const {
        element,
        widgetMgr,
        fragmentId
      } = this.props;
      const {
        formId
      } = element;
      const allowFormEnterToSubmit = widgetMgr.allowFormEnterToSubmit(formId);
      if (this.isEnterKeyPressed(e) && (ctrlKey || metaKey) && dirty) {
        e.preventDefault();
        this.commitWidgetValue({
          fromUi: true
        });
        if (allowFormEnterToSubmit) {
          widgetMgr.submitForm(formId, fragmentId);
        }
      }
    };
    this.id = uniqueId("text_area_");
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
      element,
      disabled,
      width,
      widgetMgr,
      theme
    } = this.props;
    const {
      value,
      dirty
    } = this.state;
    const style = {
      width
    };
    const {
      height,
      placeholder,
      formId
    } = element;
    // Show "Please enter" instructions if in a form & allowed, or not in form
    const allowEnterToSubmit = widgetMgr.allowFormEnterToSubmit(formId) || !isInForm({
      formId
    });

    // Manage our form-clear event handler.
    this.formClearHelper.manageFormClearListener(widgetMgr, formId, this.onFormCleared);
    return /*#__PURE__*/_jsxs("div", {
      className: "stTextArea",
      "data-testid": "stTextArea",
      style: style,
      children: [/*#__PURE__*/_jsx(WidgetLabel, {
        label: element.label,
        disabled: disabled,
        labelVisibility: labelVisibilityProtoValueToEnum(element.labelVisibility?.value),
        htmlFor: this.id,
        children: element.help && /*#__PURE__*/_jsx(StyledWidgetLabelHelp, {
          children: /*#__PURE__*/_jsx(TooltipIcon, {
            content: element.help,
            placement: Placement.TOP_RIGHT
          })
        })
      }), /*#__PURE__*/_jsx(UITextArea, {
        value: value ?? "",
        placeholder: placeholder,
        onBlur: this.onBlur,
        onChange: this.onChange,
        onKeyDown: this.onKeyDown,
        "aria-label": element.label,
        disabled: disabled,
        id: this.id,
        overrides: {
          Input: {
            style: {
              lineHeight: theme.lineHeights.inputWidget,
              height: height ? `${height}px` : "",
              minHeight: "95px",
              resize: "vertical",
              "::placeholder": {
                opacity: "0.7"
              },
              // Baseweb requires long-hand props, short-hand leads to weird bugs & warnings.
              paddingRight: theme.spacing.lg,
              paddingLeft: theme.spacing.lg,
              paddingBottom: theme.spacing.lg,
              paddingTop: theme.spacing.lg
            }
          },
          Root: {
            props: {
              "data-testid": "stTextAreaRootElement"
            },
            style: {
              // Baseweb requires long-hand props, short-hand leads to weird bugs & warnings.
              borderLeftWidth: theme.sizes.borderWidth,
              borderRightWidth: theme.sizes.borderWidth,
              borderTopWidth: theme.sizes.borderWidth,
              borderBottomWidth: theme.sizes.borderWidth
            }
          }
        }
      }), width > theme.breakpoints.hideWidgetDetails && /*#__PURE__*/_jsx(InputInstructions, {
        dirty: dirty,
        value: value ?? "",
        maxLength: element.maxChars,
        type: "multiline",
        inForm: isInForm({
          formId
        }),
        allowEnterToSubmit: allowEnterToSubmit
      })]
    });
  }
}
export default withTheme(TextArea);
//# sourceMappingURL=TextArea.js.map