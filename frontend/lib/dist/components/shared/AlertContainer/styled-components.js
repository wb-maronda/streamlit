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

export const StyledAlertContent = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "e1e4pi9i0"
} : {
  target: "e1e4pi9i0",
  label: "StyledAlertContent"
})(_ref => {
  let {
    theme
  } = _ref;
  return {
    pre: {
      backgroundColor: theme.colors.transparent,
      paddingTop: theme.spacing.lg,
      paddingBottom: theme.spacing.lg,
      paddingRight: theme.spacing.lg,
      paddingLeft: theme.spacing.lg,
      border: "".concat(theme.sizes.borderWidth, " solid ").concat(theme.colors.fadedText10),
      "pre, code": {
        backgroundColor: theme.colors.transparent,
        color: "inherit"
      }
    },
    code: {
      backgroundColor: theme.colors.transparent,
      padding: theme.spacing.none
    },
    "pre, code": {
      color: "inherit"
    },
    a: {
      color: "inherit",
      textDecoration: "underline"
    }
  };
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NoYXJlZC9BbGVydENvbnRhaW5lci9zdHlsZWQtY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQmtDIiwiZmlsZSI6Ii4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NoYXJlZC9BbGVydENvbnRhaW5lci9zdHlsZWQtY29tcG9uZW50cy50cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBTdHJlYW1saXQgSW5jLiAoMjAxOC0yMDIyKSBTbm93Zmxha2UgSW5jLiAoMjAyMi0yMDI0KVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuXG5leHBvcnQgY29uc3QgU3R5bGVkQWxlcnRDb250ZW50ID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBwcmU6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy50cmFuc3BhcmVudCxcbiAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nLmxnLFxuICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcubGcsXG4gICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nLmxnLFxuICAgIGJvcmRlcjogYCR7dGhlbWUuc2l6ZXMuYm9yZGVyV2lkdGh9IHNvbGlkICR7dGhlbWUuY29sb3JzLmZhZGVkVGV4dDEwfWAsXG5cbiAgICBcInByZSwgY29kZVwiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy50cmFuc3BhcmVudCxcbiAgICAgIGNvbG9yOiBcImluaGVyaXRcIixcbiAgICB9LFxuICB9LFxuXG4gIGNvZGU6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy50cmFuc3BhcmVudCxcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nLm5vbmUsXG4gIH0sXG5cbiAgXCJwcmUsIGNvZGVcIjoge1xuICAgIGNvbG9yOiBcImluaGVyaXRcIixcbiAgfSxcblxuICBhOiB7XG4gICAgY29sb3I6IFwiaW5oZXJpdFwiLFxuICAgIHRleHREZWNvcmF0aW9uOiBcInVuZGVybGluZVwiLFxuICB9LFxufSkpXG4iXX0= */");
//# sourceMappingURL=styled-components.js.map