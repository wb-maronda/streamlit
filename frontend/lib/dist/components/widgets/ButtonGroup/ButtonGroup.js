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

import React, { forwardRef, memo, useMemo } from "react";
import { useTheme } from "@emotion/react";
import { ButtonGroup as BasewebButtonGroup, MODE } from "baseui/button-group";
import StreamlitMarkdown from "../../shared/StreamlitMarkdown/StreamlitMarkdown";
import BaseButton, { BaseButtonKind, BaseButtonSize } from "../../shared/BaseButton";
import { DynamicIcon } from "../../shared/Icon";
import { ButtonGroup as ButtonGroupProto, LabelVisibilityMessage } from "../../../proto";
import { StyledWidgetLabelHelpInline, WidgetLabel } from "../BaseWidget";
import TooltipIcon from "../../shared/TooltipIcon";
import { Placement } from "../../shared/Tooltip";
import { labelVisibilityProtoValueToEnum } from "../../../util/utils";
import { useBasicWidgetState } from "../../../useBasicWidgetState";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
function handleMultiSelection(index, currentSelection) {
  if (!currentSelection.includes(index)) {
    return [...currentSelection, index];
  }
  return currentSelection.filter(value => value !== index);
}
function handleSelection(mode, index, currentSelection) {
  if (mode == ButtonGroupProto.ClickMode.MULTI_SELECT) {
    return handleMultiSelection(index, currentSelection ?? []);
  }

  // unselect if item is already selected
  return currentSelection?.includes(index) ? [] : [index];
}
function getSingleSelection(currentSelection) {
  if (currentSelection.length === 0) {
    return -1;
  }
  return currentSelection[0];
}
function syncWithWidgetManager(element, widgetMgr, valueWithSource, fragmentId) {
  widgetMgr.setIntArrayValue(element, valueWithSource.value, {
    fromUi: valueWithSource.fromUi
  }, fragmentId);
}
export function getContentElement(content, icon, style) {
  const kind = style === ButtonGroupProto.Style.PILLS ? BaseButtonKind.PILLS : style === ButtonGroupProto.Style.BORDERLESS ? BaseButtonKind.BORDERLESS_ICON : BaseButtonKind.SEGMENT;
  const size = style === ButtonGroupProto.Style.BORDERLESS ? BaseButtonSize.XSMALL : BaseButtonSize.MEDIUM;
  const iconSize = style === ButtonGroupProto.Style.BORDERLESS ? "lg" : "base";
  return {
    element: /*#__PURE__*/_jsxs(_Fragment, {
      children: [icon && /*#__PURE__*/_jsx(DynamicIcon, {
        size: iconSize,
        iconValue: icon
      }), content && /*#__PURE__*/_jsx(StreamlitMarkdown, {
        source: content,
        allowHTML: false
      })]
    }),
    kind: kind,
    size: size
  };
}

/**
 * Returns true if the element should be shown as selected (even though its technically not).
 * This is used, for example, to show all elements as selected that come before the actually selected element.
 *
 * @param selectionVisualization sets the visualization mode
 * @param clickMode either SINGLE_SELECT or MULTI_SELECT
 * @param selected list of selected indices. Since only SINGLE_SELECT is considered, this list will always have a length of 1.
 * @param index of the current element
 * @returns true if the element is the selected one, or if click_mode is SINGLE_SELECT and selectionVisualization is set to
 *  ALL_UP_TO_SELECTED and the index of the element is smaller than the index of the selected element, false otherwise.
 */
function showAsSelected(selectionVisualization, clickMode, selected, index) {
  if (selected.indexOf(index) > -1) {
    return true;
  }
  if (clickMode !== ButtonGroupProto.ClickMode.SINGLE_SELECT || selectionVisualization !== ButtonGroupProto.SelectionVisualization.ALL_UP_TO_SELECTED) {
    return false;
  }
  return selected.length > 0 && index < selected[0];
}
function getButtonKindAndSize(isVisuallySelected, buttonKind) {
  if (isVisuallySelected) {
    buttonKind = `${buttonKind}Active`;
  }
  return buttonKind;
}
function createOptionChild(option, index, selectionVisualization, clickMode, selected, style) {
  const isVisuallySelected = showAsSelected(selectionVisualization, clickMode, selected, index);
  let content = option.content;
  let icon = option.contentIcon;
  if (isVisuallySelected) {
    content = option.selectedContent ? option.selectedContent : content;
    icon = option.selectedContentIcon ? option.selectedContentIcon : icon;
  }

  // we have to use forwardRef here because BasewebButtonGroup passes the ref down to its children
  // and we see a console.error otherwise
  return /*#__PURE__*/forwardRef(function BaseButtonGroup(props, _) {
    const {
      element,
      kind,
      size
    } = getContentElement(content ?? "", icon ?? undefined, style);
    const buttonKind = getButtonKindAndSize(!!(isVisuallySelected && !option.selectedContent && !option.selectedContentIcon), kind);
    return /*#__PURE__*/_jsx(BaseButton, {
      ...props,
      size: size,
      kind: buttonKind,
      children: element
    });
  });
}
function getInitialValue(widgetMgr, element) {
  return widgetMgr.getIntArrayValue(element);
}
function getDefaultStateFromProto(element) {
  return element.default ?? null;
}
function getCurrStateFromProto(element) {
  return element.value ?? null;
}
function ButtonGroup(props) {
  const {
    disabled,
    element,
    fragmentId,
    widgetMgr
  } = props;
  const {
    clickMode,
    options,
    selectionVisualization,
    style,
    label,
    labelVisibility,
    help
  } = element;
  const theme = useTheme();
  const [value, setValueWSource] = useBasicWidgetState({
    getStateFromWidgetMgr: getInitialValue,
    getDefaultStateFromProto,
    getCurrStateFromProto,
    updateWidgetMgrState: syncWithWidgetManager,
    element,
    widgetMgr,
    fragmentId
  });
  const onClick = (_event, index) => {
    const newSelected = handleSelection(clickMode, index, value);
    setValueWSource({
      value: newSelected,
      fromUi: true
    });
  };
  let mode = undefined;
  if (clickMode === ButtonGroupProto.ClickMode.SINGLE_SELECT) {
    mode = MODE.radio;
  } else if (clickMode === ButtonGroupProto.ClickMode.MULTI_SELECT) {
    mode = MODE.checkbox;
  }
  const optionElements = useMemo(() => options.map((option, index) => {
    const Element = createOptionChild(option, index, selectionVisualization, clickMode, value, style);
    return /*#__PURE__*/_jsx(Element, {}, `${option.content}-${index}`);
  }), [clickMode, options, selectionVisualization, style, value]);
  const gap = style === ButtonGroupProto.Style.BORDERLESS ? theme.spacing.threeXS : theme.spacing.twoXS;
  return /*#__PURE__*/_jsxs("div", {
    className: "stButtonGroup",
    "data-testid": "stButtonGroup",
    children: [/*#__PURE__*/_jsx(WidgetLabel, {
      label: label,
      disabled: disabled,
      labelVisibility: labelVisibilityProtoValueToEnum(labelVisibility?.value ?? LabelVisibilityMessage.LabelVisibilityOptions.COLLAPSED),
      children: help && /*#__PURE__*/_jsx(StyledWidgetLabelHelpInline, {
        children: /*#__PURE__*/_jsx(TooltipIcon, {
          content: help,
          placement: Placement.TOP
        })
      })
    }), /*#__PURE__*/_jsx(BasewebButtonGroup, {
      disabled: disabled,
      mode: mode,
      onClick: onClick,
      selected: clickMode === ButtonGroupProto.ClickMode.MULTI_SELECT ? value : getSingleSelection(value),
      overrides: {
        Root: {
          style: {
            flexWrap: "wrap",
            gap: gap
          }
        }
      },
      children: optionElements
    })]
  });
}
export default /*#__PURE__*/memo(ButtonGroup);
//# sourceMappingURL=ButtonGroup.js.map