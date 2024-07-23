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

import isPropValid from "@emotion/is-prop-valid";
import { StyledDropdownListItem } from "baseui/select";
export const ThemedStyledDropdownListItem = /*#__PURE__*/_styled(StyledDropdownListItem, process.env.NODE_ENV === "production" ? {
  shouldForwardProp: isPropValid,
  target: "e1811lun0"
} : {
  shouldForwardProp: isPropValid,
  target: "e1811lun0",
  label: "ThemedStyledDropdownListItem"
})(_ref => {
  let {
    theme,
    $isHighlighted
  } = _ref;
  const backgroundColor = theme.inSidebar ? theme.colors.bgColor : theme.colors.secondaryBg;
  return {
    display: "flex",
    alignItems: "center",
    paddingTop: theme.spacing.none,
    paddingBottom: theme.spacing.none,
    background: $isHighlighted ? backgroundColor : undefined,
    // Override the default itemSize set on the component's JSX
    // on mobile, so we can make list items taller and scrollable
    ["@media (max-width: 768px)"]: {
      minHeight: theme.sizes.minElementHeight,
      height: "auto !important"
    },
    "&:hover, &:active, &:focus-visible": {
      background: backgroundColor
    }
  };
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NoYXJlZC9Ecm9wZG93bi9zdHlsZWQtY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQjRDIiwiZmlsZSI6Ii4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NoYXJlZC9Ecm9wZG93bi9zdHlsZWQtY29tcG9uZW50cy50cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBTdHJlYW1saXQgSW5jLiAoMjAxOC0yMDIyKSBTbm93Zmxha2UgSW5jLiAoMjAyMi0yMDI0KVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgaXNQcm9wVmFsaWQgZnJvbSBcIkBlbW90aW9uL2lzLXByb3AtdmFsaWRcIlxuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCJcbmltcG9ydCB7IFN0eWxlZERyb3Bkb3duTGlzdEl0ZW0gfSBmcm9tIFwiYmFzZXVpL3NlbGVjdFwiXG5cbmV4cG9ydCBjb25zdCBUaGVtZWRTdHlsZWREcm9wZG93bkxpc3RJdGVtID0gc3R5bGVkKFN0eWxlZERyb3Bkb3duTGlzdEl0ZW0sIHtcbiAgc2hvdWxkRm9yd2FyZFByb3A6IGlzUHJvcFZhbGlkLFxufSkoKHsgdGhlbWUsICRpc0hpZ2hsaWdodGVkIH0pID0+IHtcbiAgY29uc3QgYmFja2dyb3VuZENvbG9yID0gdGhlbWUuaW5TaWRlYmFyXG4gICAgPyB0aGVtZS5jb2xvcnMuYmdDb2xvclxuICAgIDogdGhlbWUuY29sb3JzLnNlY29uZGFyeUJnXG4gIHJldHVybiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nLm5vbmUsXG4gICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZy5ub25lLFxuICAgIGJhY2tncm91bmQ6ICRpc0hpZ2hsaWdodGVkID8gYmFja2dyb3VuZENvbG9yIDogdW5kZWZpbmVkLFxuICAgIC8vIE92ZXJyaWRlIHRoZSBkZWZhdWx0IGl0ZW1TaXplIHNldCBvbiB0aGUgY29tcG9uZW50J3MgSlNYXG4gICAgLy8gb24gbW9iaWxlLCBzbyB3ZSBjYW4gbWFrZSBsaXN0IGl0ZW1zIHRhbGxlciBhbmQgc2Nyb2xsYWJsZVxuICAgIFtgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KWBdOiB7XG4gICAgICBtaW5IZWlnaHQ6IHRoZW1lLnNpemVzLm1pbkVsZW1lbnRIZWlnaHQsXG4gICAgICBoZWlnaHQ6IFwiYXV0byAhaW1wb3J0YW50XCIsXG4gICAgfSxcbiAgICBcIiY6aG92ZXIsICY6YWN0aXZlLCAmOmZvY3VzLXZpc2libGVcIjoge1xuICAgICAgYmFja2dyb3VuZDogYmFja2dyb3VuZENvbG9yLFxuICAgIH0sXG4gIH1cbn0pXG4iXX0= */");
//# sourceMappingURL=styled-components.js.map