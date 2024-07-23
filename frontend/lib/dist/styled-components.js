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

export const StyledApp = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "e1v116lc1"
} : {
  target: "e1v116lc1",
  label: "StyledApp"
})(_ref => {
  let {
    theme
  } = _ref;
  return {
    position: "absolute",
    background: theme.colors.bgColor,
    color: theme.colors.bodyText,
    top: theme.spacing.none,
    left: theme.spacing.none,
    right: theme.spacing.none,
    bottom: theme.spacing.none,
    overflow: "hidden",
    "@media print": {
      float: "none",
      height: theme.sizes.full,
      position: "static",
      overflow: "visible"
    }
  };
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdHlsZWQtY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQnlCIiwiZmlsZSI6Ii4uL3NyYy9zdHlsZWQtY29tcG9uZW50cy50cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBTdHJlYW1saXQgSW5jLiAoMjAxOC0yMDIyKSBTbm93Zmxha2UgSW5jLiAoMjAyMi0yMDI0KVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuXG5leHBvcnQgY29uc3QgU3R5bGVkQXBwID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMuYmdDb2xvcixcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy5ib2R5VGV4dCxcbiAgdG9wOiB0aGVtZS5zcGFjaW5nLm5vbmUsXG4gIGxlZnQ6IHRoZW1lLnNwYWNpbmcubm9uZSxcbiAgcmlnaHQ6IHRoZW1lLnNwYWNpbmcubm9uZSxcbiAgYm90dG9tOiB0aGVtZS5zcGFjaW5nLm5vbmUsXG4gIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICBcIkBtZWRpYSBwcmludFwiOiB7XG4gICAgZmxvYXQ6IFwibm9uZVwiLFxuICAgIGhlaWdodDogdGhlbWUuc2l6ZXMuZnVsbCxcbiAgICBwb3NpdGlvbjogXCJzdGF0aWNcIixcbiAgICBvdmVyZmxvdzogXCJ2aXNpYmxlXCIsXG4gIH0sXG59KSlcblxuLyoqXG4gKiBUaGUgZ2xpZGUtZGF0YS1ncmlkIHJlcXVpcmVzIG9uZSByb290IGxldmVsIHBvcnRhbCBlbGVtZW50IGZvciByZW5kZXJpbmcgdGhlIGNlbGwgb3ZlcmxheXM6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZ2xpZGVhcHBzL2dsaWRlLWRhdGEtZ3JpZC9ibG9iL21haW4vcGFja2FnZXMvY29yZS9BUEkubWQjaHRtbGNzcy1wcmVyZXF1aXNpdGVzXG4gKiBUaGlzIGlzIGFkZGVkIHRvIHRoZSBib2R5IGluIFRoZW1lZEFwcC5cbiAqL1xuZXhwb3J0IGNvbnN0IFN0eWxlZERhdGFGcmFtZU92ZXJsYXkgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gIHRvcDogMCxcbiAgbGVmdDogMCxcbiAgekluZGV4OiB0aGVtZS56SW5kaWNlcy50YWJsZVBvcnRhbCxcbiAgbGluZUhlaWdodDogXCIxMDAlXCIsXG59KSlcbiJdfQ== */");

/**
 * The glide-data-grid requires one root level portal element for rendering the cell overlays:
 * https://github.com/glideapps/glide-data-grid/blob/main/packages/core/API.md#htmlcss-prerequisites
 * This is added to the body in ThemedApp.
 */
export const StyledDataFrameOverlay = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "e1v116lc0"
} : {
  target: "e1v116lc0",
  label: "StyledDataFrameOverlay"
})(_ref2 => {
  let {
    theme
  } = _ref2;
  return {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: theme.zIndices.tablePortal,
    lineHeight: "100%"
  };
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdHlsZWQtY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q3NDIiwiZmlsZSI6Ii4uL3NyYy9zdHlsZWQtY29tcG9uZW50cy50cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBTdHJlYW1saXQgSW5jLiAoMjAxOC0yMDIyKSBTbm93Zmxha2UgSW5jLiAoMjAyMi0yMDI0KVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuXG5leHBvcnQgY29uc3QgU3R5bGVkQXBwID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMuYmdDb2xvcixcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy5ib2R5VGV4dCxcbiAgdG9wOiB0aGVtZS5zcGFjaW5nLm5vbmUsXG4gIGxlZnQ6IHRoZW1lLnNwYWNpbmcubm9uZSxcbiAgcmlnaHQ6IHRoZW1lLnNwYWNpbmcubm9uZSxcbiAgYm90dG9tOiB0aGVtZS5zcGFjaW5nLm5vbmUsXG4gIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICBcIkBtZWRpYSBwcmludFwiOiB7XG4gICAgZmxvYXQ6IFwibm9uZVwiLFxuICAgIGhlaWdodDogdGhlbWUuc2l6ZXMuZnVsbCxcbiAgICBwb3NpdGlvbjogXCJzdGF0aWNcIixcbiAgICBvdmVyZmxvdzogXCJ2aXNpYmxlXCIsXG4gIH0sXG59KSlcblxuLyoqXG4gKiBUaGUgZ2xpZGUtZGF0YS1ncmlkIHJlcXVpcmVzIG9uZSByb290IGxldmVsIHBvcnRhbCBlbGVtZW50IGZvciByZW5kZXJpbmcgdGhlIGNlbGwgb3ZlcmxheXM6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZ2xpZGVhcHBzL2dsaWRlLWRhdGEtZ3JpZC9ibG9iL21haW4vcGFja2FnZXMvY29yZS9BUEkubWQjaHRtbGNzcy1wcmVyZXF1aXNpdGVzXG4gKiBUaGlzIGlzIGFkZGVkIHRvIHRoZSBib2R5IGluIFRoZW1lZEFwcC5cbiAqL1xuZXhwb3J0IGNvbnN0IFN0eWxlZERhdGFGcmFtZU92ZXJsYXkgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gIHRvcDogMCxcbiAgbGVmdDogMCxcbiAgekluZGV4OiB0aGVtZS56SW5kaWNlcy50YWJsZVBvcnRhbCxcbiAgbGluZUhlaWdodDogXCIxMDAlXCIsXG59KSlcbiJdfQ== */");
//# sourceMappingURL=styled-components.js.map