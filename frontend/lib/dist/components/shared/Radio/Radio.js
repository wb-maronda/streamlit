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

import React, { memo, useCallback, useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { ALIGN, RadioGroup, Radio as UIRadio } from "baseui/radio";
import { StyledWidgetLabelHelpInline, WidgetLabel } from "../../widgets/BaseWidget";
import TooltipIcon from "../TooltipIcon";
import { Placement } from "../Tooltip";
import StreamlitMarkdown from "../StreamlitMarkdown/StreamlitMarkdown";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
function Radio(_ref) {
  let {
    disabled,
    horizontal,
    width,
    value: defaultValue,
    onChange,
    options,
    captions,
    label,
    labelVisibility,
    help
  } = _ref;
  const [value, setValue] = useState(defaultValue ?? null);
  useEffect(() => {
    if (defaultValue === value) {
      return;
    }
    setValue(defaultValue ?? null);

    // Exclude value from the dependency list on purpose to avoid a loop.
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [defaultValue]);
  const onChangeCallback = useCallback(e => {
    const selectedIndex = parseInt(e.target.value, 10);
    setValue(selectedIndex);
    onChange(selectedIndex); // Needs to happen later, no?
  }, [onChange]);
  const theme = useTheme();
  const {
    colors,
    radii
  } = theme;
  const style = {
    width
  };
  const hasCaptions = captions.length > 0;
  const hasOptions = options.length > 0;
  const cleanedOptions = hasOptions ? options : ["No options to select."];

  // Either the user specified it as disabled or it's disabled because we don't have any options
  const shouldDisable = disabled || !hasOptions;
  const spacerNeeded = caption => {
    // When captions are provided for only some options in horizontal
    // layout we need to add a spacer for the options without captions
    const spacer = caption == "" && horizontal && hasCaptions;
    return spacer ? "&nbsp;" : caption;
  };
  return /*#__PURE__*/_jsxs("div", {
    className: "stRadio",
    "data-testid": "stRadio",
    style: style,
    children: [/*#__PURE__*/_jsx(WidgetLabel, {
      label: label,
      disabled: shouldDisable,
      labelVisibility: labelVisibility,
      children: help && /*#__PURE__*/_jsx(StyledWidgetLabelHelpInline, {
        children: /*#__PURE__*/_jsx(TooltipIcon, {
          content: help,
          placement: Placement.TOP_RIGHT
        })
      })
    }), /*#__PURE__*/_jsx(RadioGroup, {
      onChange: onChangeCallback,
      value: value !== null ? value.toString() : undefined,
      disabled: shouldDisable,
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
      children: cleanedOptions.map((option, index) => /*#__PURE__*/_jsxs(UIRadio, {
        value: index.toString(),
        overrides: {
          Root: {
            style: _ref2 => {
              let {
                $isFocusVisible
              } = _ref2;
              return {
                marginBottom: theme.spacing.none,
                marginTop: theme.spacing.none,
                marginRight: hasCaptions ? theme.spacing.sm : theme.spacing.lg,
                // Make left and right padding look the same visually.
                paddingLeft: theme.spacing.none,
                alignItems: "start",
                paddingRight: theme.spacing.threeXS,
                backgroundColor: $isFocusVisible ? colors.darkenedBgMix25 : "",
                borderTopLeftRadius: radii.md,
                borderTopRightRadius: radii.md,
                borderBottomLeftRadius: radii.md,
                borderBottomRightRadius: radii.md
              };
            }
          },
          RadioMarkOuter: {
            style: _ref3 => {
              let {
                $checked
              } = _ref3;
              return {
                width: theme.sizes.checkbox,
                height: theme.sizes.checkbox,
                marginTop: "0.35rem",
                marginRight: theme.spacing.none,
                marginLeft: theme.spacing.none,
                backgroundColor: $checked && !shouldDisable ? colors.primary : colors.fadedText40
              };
            }
          },
          RadioMarkInner: {
            style: _ref4 => {
              let {
                $checked
              } = _ref4;
              return {
                height: $checked ? "6px" : `calc(${theme.sizes.checkbox} - ${theme.spacing.threeXS})`,
                width: $checked ? "6px" : `calc(${theme.sizes.checkbox} - ${theme.spacing.threeXS})`
              };
            }
          },
          Label: {
            style: {
              color: shouldDisable ? colors.fadedText40 : colors.bodyText,
              position: "relative",
              top: theme.spacing.px
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
export default /*#__PURE__*/memo(Radio);
//# sourceMappingURL=Radio.js.map