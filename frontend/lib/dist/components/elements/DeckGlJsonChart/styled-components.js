import _styled from "@emotion/styled/base";
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

import { hasLightBackgroundColor } from "../../../theme";
export const StyledDeckGlChart = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "e1az0zs51"
} : {
  target: "e1az0zs51",
  label: "StyledDeckGlChart"
})(_ref => {
  let {
    width,
    height
  } = _ref;
  return {
    position: "relative",
    height,
    width
  };
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL0RlY2tHbEpzb25DaGFydC9zdHlsZWQtY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QmlDIiwiZmlsZSI6Ii4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL0RlY2tHbEpzb25DaGFydC9zdHlsZWQtY29tcG9uZW50cy50cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBTdHJlYW1saXQgSW5jLiAoMjAxOC0yMDIyKSBTbm93Zmxha2UgSW5jLiAoMjAyMi0yMDI0KVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuXG5pbXBvcnQgeyBoYXNMaWdodEJhY2tncm91bmRDb2xvciB9IGZyb20gXCJAc3RyZWFtbGl0L2xpYi9zcmMvdGhlbWVcIlxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlZERlY2tHbENoYXJ0UHJvcHMge1xuICB3aWR0aDogbnVtYmVyIHwgc3RyaW5nXG4gIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZWREZWNrR2xDaGFydCA9IHN0eWxlZC5kaXY8U3R5bGVkRGVja0dsQ2hhcnRQcm9wcz4oXG4gICh7IHdpZHRoLCBoZWlnaHQgfSkgPT4gKHtcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIGhlaWdodCxcbiAgICB3aWR0aCxcbiAgfSlcbilcblxuZXhwb3J0IGNvbnN0IFN0eWxlZE5hdmlnYXRpb25Db250cm9sQ29udGFpbmVyID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICByaWdodDogXCIyLjYyNXJlbVwiLFxuICB0b3A6IHRoZW1lLnNwYWNpbmcubWQsXG4gIHpJbmRleDogMSxcblxuICBcIi5tYXBib3hnbC1jdHJsLm1hcGJveGdsLWN0cmwtZ3JvdXBcIjoge1xuICAgIC8vIEVuc3VyZXMgdGhhdCB0aGUgYm9yZGVyLXJhZGl1cyBvZiB0aGUgem9vbSBidXR0b25zIGlzIHZpc2libGVcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMuYmdDb2xvcixcbiAgfSxcblxuICAvLyBVcGRhdGUgem9vbSBidXR0b25zIGJhc2VkIG9uIHRoZSBhY3RpdmUgdGhlbWVcbiAgXCJidXR0b246bm90KDpkaXNhYmxlZClcIjoge1xuICAgIGJhY2tncm91bmQ6IHRoZW1lLmNvbG9ycy5iZ0NvbG9yLFxuXG4gICAgLy8gQWRkIGEgc2VwYXJhdG9yIGJldHdlZW4gYnV0dG9uc1xuICAgIFwiJiArIGJ1dHRvblwiOiB7XG4gICAgICBib3JkZXJUb3BDb2xvcjogdGhlbWUuY29sb3JzLnNlY29uZGFyeUJnLFxuICAgIH0sXG5cbiAgICBcIiYubWFwYm94Z2wtY3RybC1pY29uOmhvdmVyXCI6IHtcbiAgICAgIC8vIExpZ2h0ZW4gdGhlIGJhY2tncm91bmQgY29sb3Igb24gaG92ZXIgaW4gZGFyayBtb2RlIChsaWdodCBtb2RlIHdvcmtzXG4gICAgICAvLyBmaW5lIGJ5IGRlZmF1bHQhKVxuICAgICAgYmFja2dyb3VuZENvbG9yOiBoYXNMaWdodEJhY2tncm91bmRDb2xvcih0aGVtZSlcbiAgICAgICAgPyBcIlwiXG4gICAgICAgIDogdGhlbWUuY29sb3JzLmRhcmtlbmVkQmdNaXgyNSxcbiAgICB9LFxuXG4gICAgLy8gT24gZGFyayBiYWNrZ3JvdW5kcywgaW52ZXJ0IHRoZSBjb2xvciBmb3IgdGhlICsgYW5kIC0gc3ltYm9sc1xuICAgIFwiJiBzcGFuXCI6IHtcbiAgICAgIGZpbHRlcjogaGFzTGlnaHRCYWNrZ3JvdW5kQ29sb3IodGhlbWUpID8gXCJcIiA6IFwiaW52ZXJ0KDEwMCUpXCIsXG4gICAgfSxcbiAgfSxcbn0pKVxuIl19 */");
export const StyledNavigationControlContainer = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "e1az0zs50"
} : {
  target: "e1az0zs50",
  label: "StyledNavigationControlContainer"
})(_ref2 => {
  let {
    theme
  } = _ref2;
  return {
    position: "absolute",
    right: "2.625rem",
    top: theme.spacing.md,
    zIndex: 1,
    ".mapboxgl-ctrl.mapboxgl-ctrl-group": {
      // Ensures that the border-radius of the zoom buttons is visible
      overflow: "hidden",
      background: theme.colors.bgColor
    },
    // Update zoom buttons based on the active theme
    "button:not(:disabled)": {
      background: theme.colors.bgColor,
      // Add a separator between buttons
      "& + button": {
        borderTopColor: theme.colors.secondaryBg
      },
      "&.mapboxgl-ctrl-icon:hover": {
        // Lighten the background color on hover in dark mode (light mode works
        // fine by default!)
        backgroundColor: hasLightBackgroundColor(theme) ? "" : theme.colors.darkenedBgMix25
      },
      // On dark backgrounds, invert the color for the + and - symbols
      "& span": {
        filter: hasLightBackgroundColor(theme) ? "" : "invert(100%)"
      }
    }
  };
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL0RlY2tHbEpzb25DaGFydC9zdHlsZWQtY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQ2dEIiwiZmlsZSI6Ii4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL0RlY2tHbEpzb25DaGFydC9zdHlsZWQtY29tcG9uZW50cy50cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBTdHJlYW1saXQgSW5jLiAoMjAxOC0yMDIyKSBTbm93Zmxha2UgSW5jLiAoMjAyMi0yMDI0KVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuXG5pbXBvcnQgeyBoYXNMaWdodEJhY2tncm91bmRDb2xvciB9IGZyb20gXCJAc3RyZWFtbGl0L2xpYi9zcmMvdGhlbWVcIlxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlZERlY2tHbENoYXJ0UHJvcHMge1xuICB3aWR0aDogbnVtYmVyIHwgc3RyaW5nXG4gIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZWREZWNrR2xDaGFydCA9IHN0eWxlZC5kaXY8U3R5bGVkRGVja0dsQ2hhcnRQcm9wcz4oXG4gICh7IHdpZHRoLCBoZWlnaHQgfSkgPT4gKHtcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIGhlaWdodCxcbiAgICB3aWR0aCxcbiAgfSlcbilcblxuZXhwb3J0IGNvbnN0IFN0eWxlZE5hdmlnYXRpb25Db250cm9sQ29udGFpbmVyID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICByaWdodDogXCIyLjYyNXJlbVwiLFxuICB0b3A6IHRoZW1lLnNwYWNpbmcubWQsXG4gIHpJbmRleDogMSxcblxuICBcIi5tYXBib3hnbC1jdHJsLm1hcGJveGdsLWN0cmwtZ3JvdXBcIjoge1xuICAgIC8vIEVuc3VyZXMgdGhhdCB0aGUgYm9yZGVyLXJhZGl1cyBvZiB0aGUgem9vbSBidXR0b25zIGlzIHZpc2libGVcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMuYmdDb2xvcixcbiAgfSxcblxuICAvLyBVcGRhdGUgem9vbSBidXR0b25zIGJhc2VkIG9uIHRoZSBhY3RpdmUgdGhlbWVcbiAgXCJidXR0b246bm90KDpkaXNhYmxlZClcIjoge1xuICAgIGJhY2tncm91bmQ6IHRoZW1lLmNvbG9ycy5iZ0NvbG9yLFxuXG4gICAgLy8gQWRkIGEgc2VwYXJhdG9yIGJldHdlZW4gYnV0dG9uc1xuICAgIFwiJiArIGJ1dHRvblwiOiB7XG4gICAgICBib3JkZXJUb3BDb2xvcjogdGhlbWUuY29sb3JzLnNlY29uZGFyeUJnLFxuICAgIH0sXG5cbiAgICBcIiYubWFwYm94Z2wtY3RybC1pY29uOmhvdmVyXCI6IHtcbiAgICAgIC8vIExpZ2h0ZW4gdGhlIGJhY2tncm91bmQgY29sb3Igb24gaG92ZXIgaW4gZGFyayBtb2RlIChsaWdodCBtb2RlIHdvcmtzXG4gICAgICAvLyBmaW5lIGJ5IGRlZmF1bHQhKVxuICAgICAgYmFja2dyb3VuZENvbG9yOiBoYXNMaWdodEJhY2tncm91bmRDb2xvcih0aGVtZSlcbiAgICAgICAgPyBcIlwiXG4gICAgICAgIDogdGhlbWUuY29sb3JzLmRhcmtlbmVkQmdNaXgyNSxcbiAgICB9LFxuXG4gICAgLy8gT24gZGFyayBiYWNrZ3JvdW5kcywgaW52ZXJ0IHRoZSBjb2xvciBmb3IgdGhlICsgYW5kIC0gc3ltYm9sc1xuICAgIFwiJiBzcGFuXCI6IHtcbiAgICAgIGZpbHRlcjogaGFzTGlnaHRCYWNrZ3JvdW5kQ29sb3IodGhlbWUpID8gXCJcIiA6IFwiaW52ZXJ0KDEwMCUpXCIsXG4gICAgfSxcbiAgfSxcbn0pKVxuIl19 */");
//# sourceMappingURL=styled-components.js.map