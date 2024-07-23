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

import produce from "immer";
import { util } from "protobufjs";
import { DoubleArray, SInt64Array, StringArray, StringTriggerValue, WidgetState, WidgetStates } from "./proto";
import { Signal } from "typed-signals";
import { isValidFormId, notNullOrUndefined } from "./util/utils";

/** Common widget protobuf fields that are used by the WidgetStateManager. */

/**
 * Immutable structure that exposes public data about all the forms in the app.
 * WidgetStateManager produces new instances of this type when forms data
 * changes.
 */

/** Create an empty FormsData instance. */
export function createFormsData() {
  return {
    formsWithPendingChanges: new Set(),
    formsWithUploads: new Set(),
    submitButtons: new Map()
  };
}

/**
 * A Dictionary that maps widgetID -> WidgetState, and provides some utility
 * functions.
 */
export class WidgetStateDict {
  constructor() {
    this.widgetStates = new Map();
  }
  /**
   * Create a new WidgetState proto for the widget with the given ID,
   * overwriting any that currently exists.
   */
  createState(widgetId) {
    const state = new WidgetState({
      id: widgetId
    });
    this.widgetStates.set(widgetId, state);
    return state;
  }

  /** Return the WidgetState for the given widgetID if it exists. */
  getState(widgetId) {
    return this.widgetStates.get(widgetId);
  }

  /** Remove the WidgetState proto with the given id, if it exists. */
  deleteState(widgetId) {
    this.widgetStates.delete(widgetId);
  }

  /** Remove the state of widgets that are not contained in `activeIds`. */
  removeInactive(activeIds) {
    this.widgetStates.forEach((value, key) => {
      if (!activeIds.has(key)) {
        this.widgetStates.delete(key);
      }
    });
  }

  /** Remove all widget states. */
  clear() {
    this.widgetStates.clear();
  }
  get isEmpty() {
    return this.widgetStates.size === 0;
  }
  createWidgetStatesMsg() {
    const msg = new WidgetStates();
    this.widgetStates.forEach(value => msg.widgets.push(value));
    return msg;
  }

  /**
   * Copy the contents of another WidgetStateDict into this one, overwriting
   * any values with duplicate keys.
   */
  copyFrom(other) {
    other.widgetStates.forEach((state, widgetId) => {
      this.widgetStates.set(widgetId, state);
    });
  }

  /** Call a function for each value in the dict. */
  forEach(callbackfn) {
    this.widgetStates.forEach(callbackfn);
  }
}

/** Stores private data about a single form. */
class FormState {
  constructor() {
    this.widgetStates = new WidgetStateDict();
    this.clearOnSubmit = false;
    this.formCleared = new Signal();
  }
  /** True if the form was created with the clear_on_submit flag. */
  /** Signal emitted when the form is cleared. */
  /** True if the form has a non-empty WidgetStateDict. */
  get hasPendingChanges() {
    return !this.widgetStates.isEmpty;
  }
}
/**
 * Manages widget values, and sends widget update messages back to the server.
 */
export class WidgetStateManager {
  // Top-level widget state dictionary.

  // Internal state for each form we're managing.

  // External data about all forms.

  // A dictionary that maps elementId -> element state keys -> element state values.
  // This is used to store frontend-only state for elements.
  // This state is not never sent to the server.

  constructor(props) {
    this.props = void 0;
    this.widgetStates = new WidgetStateDict();
    this.forms = new Map();
    this.formsData = void 0;
    this.elementStates = new Map();
    this.props = props;
    this.formsData = createFormsData();
  }

  /**
   * Register a function that will be called when the given form is cleared.
   * Returns an object that can be used to de-register the listener.
   */
  addFormClearedListener(formId, listener) {
    return this.getOrCreateFormState(formId).formCleared.connect(listener);
  }

  /**
   * Register a Form, and assign its clearOnSubmit value.
   * The `Form` element calls this when it's first mounted.
   */
  setFormClearOnSubmit(formId, clearOnSubmit) {
    this.getOrCreateFormState(formId).clearOnSubmit = clearOnSubmit;
  }

  /**
   * Commit pending changes for widgets that belong to the given form,
   * and send a rerunBackMsg to the server.
   */
  submitForm(formId, fragmentId, actualSubmitButton) {
    if (!isValidFormId(formId)) {
      // This should never get thrown - only FormSubmitButton calls this
      // function.
      throw new Error("invalid formID '".concat(formId, "'"));
    }
    const form = this.getOrCreateFormState(formId);
    const submitButtons = this.formsData.submitButtons.get(formId);
    const disableForm = submitButtons === null || submitButtons === void 0 ? void 0 : submitButtons.some(submitButton => submitButton.disabled);
    if (disableForm) {
      return;
    }
    let selectedSubmitButton;
    if (actualSubmitButton !== undefined) {
      selectedSubmitButton = actualSubmitButton;
    }
    // can have an empty list of submitButtons
    else if (submitButtons !== undefined && submitButtons.length > 0) {
      // click the first submit button. We can choose any so we just choose first.
      selectedSubmitButton = submitButtons[0];
    }
    if (selectedSubmitButton) {
      this.createWidgetState(selectedSubmitButton, {
        fromUi: true
      }).triggerValue = true;
    }

    // Copy the form's values into widgetStates, delete the form's pending
    // changes, and send our widgetStates back to the server.
    this.widgetStates.copyFrom(form.widgetStates);
    form.widgetStates.clear();
    this.sendUpdateWidgetsMessage(fragmentId);
    this.syncFormsWithPendingChanges();
    if (selectedSubmitButton) {
      this.deleteWidgetState(selectedSubmitButton.id);
    }

    // If the form has the clearOnSubmit flag, we emit a signal to all widgets
    // in the form. Each widget that handles this signal will reset to their
    // default values, and submit those new default values to the WidgetStateManager
    // in their signal handlers. (Because all of these widgets are in a form,
    // none of these value submissions will trigger re-run requests.)
    if (form.clearOnSubmit) {
      form.formCleared.emit();
    }
  }

  /**
   * Sets the string trigger value for the given widget ID to a string value,
   * sends a rerunScript message to the server, and then immediately unsets the
   * string trigger value to None/null.
   */
  setStringTriggerValue(widget, value, source, fragmentId) {
    this.createWidgetState(widget, source).stringTriggerValue = new StringTriggerValue({
      data: value
    });
    this.onWidgetValueChanged(widget.formId, source, fragmentId);
    this.deleteWidgetState(widget.id);
  }

  /**
   * Sets the trigger value for the given widget ID to true, sends a rerunScript message
   * to the server, and then immediately unsets the trigger value.
   */
  setTriggerValue(widget, source, fragmentId) {
    this.createWidgetState(widget, source).triggerValue = true;
    this.onWidgetValueChanged(widget.formId, source, fragmentId);
    this.deleteWidgetState(widget.id);
  }
  getBoolValue(widget) {
    const state = this.getWidgetState(widget);
    if (state != null && state.value === "boolValue") {
      return state.boolValue;
    }
    return undefined;
  }
  setBoolValue(widget, value, source, fragmentId) {
    this.createWidgetState(widget, source).boolValue = value;
    this.onWidgetValueChanged(widget.formId, source, fragmentId);
  }
  getIntValue(widget) {
    const state = this.getWidgetState(widget);
    if (state != null && state.value === "intValue") {
      return requireNumberInt(state.intValue);
    }
    return undefined;
  }
  setIntValue(widget, value, source, fragmentId) {
    this.createWidgetState(widget, source).intValue = value;
    this.onWidgetValueChanged(widget.formId, source, fragmentId);
  }
  getDoubleValue(widget) {
    const state = this.getWidgetState(widget);
    if (state != null && state.value === "doubleValue") {
      return state.doubleValue;
    }
    return undefined;
  }
  setDoubleValue(widget, value, source, fragmentId) {
    this.createWidgetState(widget, source).doubleValue = value;
    this.onWidgetValueChanged(widget.formId, source, fragmentId);
  }
  getStringValue(widget) {
    const state = this.getWidgetState(widget);
    if (state != null && state.value === "stringValue") {
      return state.stringValue;
    }
    return undefined;
  }
  setStringValue(widget, value, source, fragmentId) {
    this.createWidgetState(widget, source).stringValue = value;
    this.onWidgetValueChanged(widget.formId, source, fragmentId);
  }
  setStringArrayValue(widget, value, source, fragmentId) {
    this.createWidgetState(widget, source).stringArrayValue = new StringArray({
      data: value
    });
    this.onWidgetValueChanged(widget.formId, source, fragmentId);
  }
  getStringArrayValue(widget) {
    const state = this.getWidgetState(widget);
    if (state != null && state.value === "stringArrayValue" && state.stringArrayValue != null && state.stringArrayValue.data != null) {
      return state.stringArrayValue.data;
    }
    return undefined;
  }
  getDoubleArrayValue(widget) {
    const state = this.getWidgetState(widget);
    if (state != null && state.value === "doubleArrayValue" && state.doubleArrayValue != null && state.doubleArrayValue.data != null) {
      return state.doubleArrayValue.data;
    }
    return undefined;
  }
  setDoubleArrayValue(widget, value, source, fragmentId) {
    this.createWidgetState(widget, source).doubleArrayValue = new DoubleArray({
      data: value
    });
    this.onWidgetValueChanged(widget.formId, source, fragmentId);
  }
  getIntArrayValue(widget) {
    const state = this.getWidgetState(widget);
    if (state != null && state.value === "intArrayValue" && state.intArrayValue != null && state.intArrayValue.data != null) {
      return state.intArrayValue.data.map(requireNumberInt);
    }
    return undefined;
  }
  setIntArrayValue(widget, value, source, fragmentId) {
    this.createWidgetState(widget, source).intArrayValue = new SInt64Array({
      data: value
    });
    this.onWidgetValueChanged(widget.formId, source, fragmentId);
  }
  getJsonValue(widget) {
    const state = this.getWidgetState(widget);
    if (state != null && state.value === "jsonValue") {
      return state.jsonValue;
    }
    return undefined;
  }
  setJsonValue(widget, value, source, fragmentId) {
    this.createWidgetState(widget, source).jsonValue = JSON.stringify(value);
    this.onWidgetValueChanged(widget.formId, source, fragmentId);
  }
  setArrowValue(widget, value, source, fragmentId) {
    this.createWidgetState(widget, source).arrowValue = value;
    this.onWidgetValueChanged(widget.formId, source, fragmentId);
  }
  getArrowValue(widget) {
    const state = this.getWidgetState(widget);
    if (state != null && state.value === "arrowValue" && state.arrowValue != null) {
      return state.arrowValue;
    }
    return undefined;
  }
  setBytesValue(widget, value, source, fragmentId) {
    this.createWidgetState(widget, source).bytesValue = value;
    this.onWidgetValueChanged(widget.formId, source, fragmentId);
  }
  getBytesValue(widget) {
    const state = this.getWidgetState(widget);
    if (state != null && state.value === "bytesValue") {
      return state.bytesValue;
    }
    return undefined;
  }
  setFileUploaderStateValue(widget, value, source, fragmentId) {
    this.createWidgetState(widget, source).fileUploaderStateValue = value;
    this.onWidgetValueChanged(widget.formId, source, fragmentId);
  }
  getFileUploaderStateValue(widget) {
    const state = this.getWidgetState(widget);
    if (state != null && state.value === "fileUploaderStateValue") {
      return state.fileUploaderStateValue;
    }
    return undefined;
  }

  /**
   * Perform housekeeping every time a widget value changes.
   * - If the widget does not belong to a form, and the value update came from
   *   a user action, send the "updateWidgets" message
   * - If the widget belongs to a form, dispatch the "pendingFormsChanged"
   *   callback if needed.
   *
   * Called by every "setValue" function.
   */
  onWidgetValueChanged(formId, source, fragmentId) {
    if (isValidFormId(formId)) {
      this.syncFormsWithPendingChanges();
    } else if (source.fromUi) {
      this.sendUpdateWidgetsMessage(fragmentId);
    }
  }

  /**
   * Update FormsData.formsWithPendingChanges with the current set of forms
   * that have pending changes. This is called after widget values are updated.
   */
  syncFormsWithPendingChanges() {
    const pendingFormIds = new Set();
    this.forms.forEach((form, formId) => {
      if (form.hasPendingChanges) {
        pendingFormIds.add(formId);
      }
    });
    this.updateFormsData(draft => {
      draft.formsWithPendingChanges = pendingFormIds;
    });
  }
  sendUpdateWidgetsMessage(fragmentId) {
    this.props.sendRerunBackMsg(this.widgetStates.createWidgetStatesMsg(), fragmentId);
  }
  getActiveWidgetStates(activeIds) {
    const msg = new WidgetStates();
    this.widgetStates.forEach(widgetState => {
      if (activeIds.has(widgetState.id)) {
        msg.widgets.push(widgetState);
      }
    });
    return msg;
  }

  /**
   * Remove the state of widgets that are not contained in `activeIds`.
   * This is called when a script finishes running, so that we don't retain
   * data for widgets that have been removed from the app.
   */
  removeInactive(activeIds) {
    this.widgetStates.removeInactive(activeIds);
    this.forms.forEach(form => form.widgetStates.removeInactive(activeIds));
    this.elementStates.forEach((_, elementId) => {
      if (!activeIds.has(elementId)) {
        this.deleteElementState(elementId);
      }
    });
  }

  /**
   * Create and return a new WidgetState proto for the given widget ID,
   * overwriting any that currently exists. If the widget belongs to a form,
   * the WidgetState will be created inside the form's WidgetStateDict.
   */
  createWidgetState(widget, source) {
    const addToForm = isValidFormId(widget.formId) && source.fromUi;
    const widgetStateDict = addToForm ? this.getOrCreateFormState(widget.formId).widgetStates : this.widgetStates;
    return widgetStateDict.createState(widget.id);
  }

  /**
   * Get the WidgetState proto for the given widget ID, if it exists.
   */
  getWidgetState(widget) {
    // If the widget belongs to a form, try its form value first.
    if (isValidFormId(widget.formId)) {
      var _this$forms$get;
      const formState = (_this$forms$get = this.forms.get(widget.formId)) === null || _this$forms$get === void 0 ? void 0 : _this$forms$get.widgetStates.getState(widget.id);
      if (formState != null) {
        return formState;
      }
    }
    return this.widgetStates.getState(widget.id);
  }

  /**
   * Remove the WidgetState proto with the given id, if it exists
   */
  deleteWidgetState(widgetId) {
    this.widgetStates.deleteState(widgetId);
  }

  /** Return the FormState for the given form. Create it if it doesn't exist. */
  getOrCreateFormState(formId) {
    let form = this.forms.get(formId);
    if (form != null) {
      return form;
    }
    form = new FormState();
    this.forms.set(formId, form);
    return form;
  }

  /** Store the IDs of all forms with in-progress uploads. */
  setFormsWithUploads(formsWithUploads) {
    this.updateFormsData(draft => {
      draft.formsWithUploads = formsWithUploads;
    });
  }

  /**
   * Called by FormSubmitButton on creation. Add the SubmitButtonProto for
   * the given form and update FormsData.
   */
  addSubmitButton(formId, submitButtonProto) {
    const submitButtons = this.formsData.submitButtons.get(formId);
    if (submitButtons === undefined) {
      this.setSubmitButtons(formId, [submitButtonProto]);
    } else {
      const copySubmitButtons = Object.assign([], submitButtons);
      copySubmitButtons.push(submitButtonProto);
      this.setSubmitButtons(formId, copySubmitButtons);
    }
  }

  /**
   * Called by FormSubmitButton on creation. Remove the SubmitButtonProto for
   * the given form, and update FormsData.
   */
  removeSubmitButton(formId, submitButtonProto) {
    const submitButtons = this.formsData.submitButtons.get(formId);
    if (submitButtons !== undefined) {
      const copySubmitButtons = Object.assign([], submitButtons);
      const index = copySubmitButtons.indexOf(submitButtonProto, 0);
      if (index > -1) {
        copySubmitButtons.splice(index, 1);
      }
      this.setSubmitButtons(formId, copySubmitButtons);
    }
  }
  setSubmitButtons(formId, submitButtons) {
    if (submitButtons.length < 0) {
      throw new Error("Bad submitButtons length ".concat(submitButtons.length, " (must be >= 0)"));
    }
    this.updateFormsData(draft => {
      draft.submitButtons.set(formId, submitButtons);
    });
  }

  /**
   * Produce a new FormsData with the given recipe, and fire off the
   * formsDataChanged callback with that new data.
   */
  updateFormsData(recipe) {
    const newData = produce(this.formsData, recipe);
    if (this.formsData !== newData) {
      this.formsData = newData;
      this.props.formsDataChanged(this.formsData);
    }
  }

  /**
   * Get the element state value for the given element ID and key, if it exists.
   * This is a frontend-only state that is never sent to the server.
   */
  getElementState(elementId, key) {
    var _this$elementStates$g;
    return (_this$elementStates$g = this.elementStates.get(elementId)) === null || _this$elementStates$g === void 0 ? void 0 : _this$elementStates$g.get(key);
  }

  /**
   * Sets the state of an element identified by its ID and its key.
   * This is a frontend-only state that is never sent to the server.
   * It can be used to store element state to restore the state
   * of an element in situations where an element is removed and re-added.
   *
   * @param {string} elementId - The unique identifier of the element.
   * @param {string} key - The key to set
   * @param {any} value - The value to set for the element's state.
   * @returns {void}
   */
  setElementState(elementId, key, value) {
    if (!this.elementStates.has(elementId)) {
      this.elementStates.set(elementId, new Map());
    }

    // It's expected here that there is always an initialized map for an elementId
    ;
    this.elementStates.get(elementId).set(key, value);
  }

  /**
   * Deletes the state associated with a specific element by ID. If a key is provided,
   * only the state corresponding to that key is removed. If no key is specified, all states
   * associated with the element ID are removed.
   */
  deleteElementState(elementId, key) {
    if (notNullOrUndefined(key)) {
      var _this$elementStates$g2;
      (_this$elementStates$g2 = this.elementStates.get(elementId)) === null || _this$elementStates$g2 === void 0 ? void 0 : _this$elementStates$g2.delete(key);
    } else {
      this.elementStates.delete(elementId);
    }
  }
}

/**
 * Coerce a `number | Long` to a `number`.
 *
 * Our "intValue" and "intArrayValue" widget protobuf fields represent their
 * values with sint64, because sint32 is too small to represent the full range
 * of JavaScript int values. Protobufjs uses `number | Long` to represent
 * sint64. However, we're never putting Longs *into* int and intArrays -
 * because none of our widgets use Longs - so we'll never get a Long back out.
 *
 * If the given value cannot be converted to `number` without a loss of
 * precision (which should not be possible!), throw an error instead.
 */
function requireNumberInt(value) {
  if (typeof value === "number") {
    return value;
  }
  const longNumber = util.LongBits.from(value).toNumber();
  if (Number.isSafeInteger(longNumber)) {
    return longNumber;
  }
  throw new Error("value ".concat(value, " cannot be converted to number without a loss of precision!"));
}
//# sourceMappingURL=WidgetStateManager.js.map