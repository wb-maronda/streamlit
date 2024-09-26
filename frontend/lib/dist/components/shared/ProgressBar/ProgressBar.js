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
import { useTheme } from "@emotion/react";
import { ProgressBar as UIProgressBar } from "baseui/progress-bar";
import { mergeOverrides } from "baseui";
import { isPresetTheme } from "../../../theme";
import { LibContext } from "../../core/LibContext";
import { jsx as _jsx } from "react/jsx-runtime";
export let Size;
(function (Size) {
  Size["EXTRASMALL"] = "xs";
  Size["SMALL"] = "sm";
  Size["MEDIUM"] = "md";
  Size["LARGE"] = "lg";
  Size["EXTRALARGE"] = "xl";
})(Size || (Size = {}));
function ProgressBar(_ref) {
  let {
    value,
    width,
    size = Size.SMALL,
    overrides
  } = _ref;
  const theme = useTheme();
  const heightMap = {
    xs: theme.spacing.twoXS,
    sm: theme.spacing.sm,
    md: theme.spacing.lg,
    lg: theme.spacing.xl,
    xl: theme.spacing.twoXL
  };
  const {
    activeTheme
  } = React.useContext(LibContext);
  const usingCustomTheme = !isPresetTheme(activeTheme);
  const defaultOverrides = {
    BarContainer: {
      style: {
        marginTop: theme.spacing.none,
        marginBottom: theme.spacing.none,
        marginRight: theme.spacing.none,
        marginLeft: theme.spacing.none
      }
    },
    Bar: {
      style: _ref2 => {
        let {
          $theme
        } = _ref2;
        return {
          width: width ? width.toString() : undefined,
          marginTop: theme.spacing.none,
          marginBottom: theme.spacing.none,
          marginRight: theme.spacing.none,
          marginLeft: theme.spacing.none,
          height: heightMap[size],
          backgroundColor: $theme.colors.progressbarTrackFill,
          borderTopLeftRadius: theme.spacing.twoXS,
          borderTopRightRadius: theme.spacing.twoXS,
          borderBottomLeftRadius: theme.spacing.twoXS,
          borderBottomRightRadius: theme.spacing.twoXS
        };
      }
    },
    BarProgress: {
      style: () => ({
        backgroundColor: usingCustomTheme ? theme.colors.primary : theme.colors.blue70,
        borderTopLeftRadius: theme.spacing.twoXS,
        borderTopRightRadius: theme.spacing.twoXS,
        borderBottomLeftRadius: theme.spacing.twoXS,
        borderBottomRightRadius: theme.spacing.twoXS
      })
    }
  };
  return /*#__PURE__*/_jsx(UIProgressBar, {
    value: value,
    overrides: mergeOverrides(defaultOverrides, overrides)
  });
}
export default ProgressBar;
//# sourceMappingURL=ProgressBar.js.map