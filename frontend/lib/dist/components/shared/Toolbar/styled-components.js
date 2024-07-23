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
const TOP_DISTANCE = "-2.4rem";
export const StyledToolbarWrapper = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "e2wxzia1"
} : {
  target: "e2wxzia1",
  label: "StyledToolbarWrapper"
})(_ref => {
  let {
    theme,
    locked,
    target
  } = _ref;
  return {
    padding: "".concat(theme.spacing.sm, " 0 ").concat(theme.spacing.sm, " ").concat(theme.spacing.sm),
    position: "absolute",
    top: locked ? TOP_DISTANCE : "-1rem",
    right: theme.spacing.none,
    transition: "none",
    ...(!locked && {
      opacity: 0,
      "&:active, &:focus-visible, &:hover": {
        transition: "opacity 150ms 100ms, top 100ms 100ms",
        opacity: 1,
        top: TOP_DISTANCE
      },
      ...(target && {
        ["".concat(target, ":hover &, ").concat(target, ":active &, ").concat(target, ":focus-visible &")]: {
          transition: "opacity 150ms 100ms, top 100ms 100ms",
          opacity: 1,
          top: TOP_DISTANCE
        }
      })
    })
  };
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NoYXJlZC9Ub29sYmFyL3N0eWxlZC1jb21wb25lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCb0MiLCJmaWxlIjoiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvc2hhcmVkL1Rvb2xiYXIvc3R5bGVkLWNvbXBvbmVudHMudHMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgU3RyZWFtbGl0IEluYy4gKDIwMTgtMjAyMikgU25vd2ZsYWtlIEluYy4gKDIwMjItMjAyNClcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHN0eWxlZCwgeyBTdHlsZWRDb21wb25lbnQgfSBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCJcblxuaW1wb3J0IHsgaGFzTGlnaHRCYWNrZ3JvdW5kQ29sb3IgfSBmcm9tIFwiQHN0cmVhbWxpdC9saWIvc3JjL3RoZW1lXCJcblxuY29uc3QgVE9QX0RJU1RBTkNFID0gXCItMi40cmVtXCJcblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZWRUb29sYmFyV3JhcHBlclByb3BzIHtcbiAgbG9ja2VkPzogYm9vbGVhblxuICB0YXJnZXQ/OiBTdHlsZWRDb21wb25lbnQ8YW55LCBhbnksIGFueT5cbn1cblxuZXhwb3J0IGNvbnN0IFN0eWxlZFRvb2xiYXJXcmFwcGVyID0gc3R5bGVkLmRpdjxTdHlsZWRUb29sYmFyV3JhcHBlclByb3BzPihcbiAgKHsgdGhlbWUsIGxvY2tlZCwgdGFyZ2V0IH0pID0+ICh7XG4gICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZy5zbX0gMCAke3RoZW1lLnNwYWNpbmcuc219ICR7dGhlbWUuc3BhY2luZy5zbX1gLFxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgdG9wOiBsb2NrZWQgPyBUT1BfRElTVEFOQ0UgOiBcIi0xcmVtXCIsXG4gICAgcmlnaHQ6IHRoZW1lLnNwYWNpbmcubm9uZSxcbiAgICB0cmFuc2l0aW9uOiBcIm5vbmVcIixcbiAgICAuLi4oIWxvY2tlZCAmJiB7XG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgXCImOmFjdGl2ZSwgJjpmb2N1cy12aXNpYmxlLCAmOmhvdmVyXCI6IHtcbiAgICAgICAgdHJhbnNpdGlvbjogXCJvcGFjaXR5IDE1MG1zIDEwMG1zLCB0b3AgMTAwbXMgMTAwbXNcIixcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgdG9wOiBUT1BfRElTVEFOQ0UsXG4gICAgICB9LFxuICAgICAgLi4uKHRhcmdldCAmJiB7XG4gICAgICAgIFtgJHt0YXJnZXR9OmhvdmVyICYsICR7dGFyZ2V0fTphY3RpdmUgJiwgJHt0YXJnZXR9OmZvY3VzLXZpc2libGUgJmBdOiB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogXCJvcGFjaXR5IDE1MG1zIDEwMG1zLCB0b3AgMTAwbXMgMTAwbXNcIixcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIHRvcDogVE9QX0RJU1RBTkNFLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgfSksXG4gIH0pXG4pXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRUb29sYmFyID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogaGFzTGlnaHRCYWNrZ3JvdW5kQ29sb3IodGhlbWUpXG4gICAgPyB0aGVtZS5jb2xvcnMuZmFkZWRUZXh0NjBcbiAgICA6IHRoZW1lLmNvbG9ycy5ib2R5VGV4dCxcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIsXG4gIGJveFNoYWRvdzogXCIxcHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDgpXCIsXG4gIGJvcmRlclJhZGl1czogdGhlbWUucmFkaWkuZGVmYXVsdCxcbiAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMubGlnaHRlbmVkQmcwNSxcbiAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcbiAgekluZGV4OiB0aGVtZS56SW5kaWNlcy5zaWRlYmFyICsgMSxcbn0pKVxuIl19 */");
export const StyledToolbar = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "e2wxzia0"
} : {
  target: "e2wxzia0",
  label: "StyledToolbar"
})(_ref2 => {
  let {
    theme
  } = _ref2;
  return {
    color: hasLightBackgroundColor(theme) ? theme.colors.fadedText60 : theme.colors.bodyText,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    boxShadow: "1px 2px 8px rgba(0, 0, 0, 0.08)",
    borderRadius: theme.radii.default,
    backgroundColor: theme.colors.lightenedBg05,
    width: "fit-content",
    zIndex: theme.zIndices.sidebar + 1
  };
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NoYXJlZC9Ub29sYmFyL3N0eWxlZC1jb21wb25lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9ENkIiLCJmaWxlIjoiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvc2hhcmVkL1Rvb2xiYXIvc3R5bGVkLWNvbXBvbmVudHMudHMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgU3RyZWFtbGl0IEluYy4gKDIwMTgtMjAyMikgU25vd2ZsYWtlIEluYy4gKDIwMjItMjAyNClcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHN0eWxlZCwgeyBTdHlsZWRDb21wb25lbnQgfSBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCJcblxuaW1wb3J0IHsgaGFzTGlnaHRCYWNrZ3JvdW5kQ29sb3IgfSBmcm9tIFwiQHN0cmVhbWxpdC9saWIvc3JjL3RoZW1lXCJcblxuY29uc3QgVE9QX0RJU1RBTkNFID0gXCItMi40cmVtXCJcblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZWRUb29sYmFyV3JhcHBlclByb3BzIHtcbiAgbG9ja2VkPzogYm9vbGVhblxuICB0YXJnZXQ/OiBTdHlsZWRDb21wb25lbnQ8YW55LCBhbnksIGFueT5cbn1cblxuZXhwb3J0IGNvbnN0IFN0eWxlZFRvb2xiYXJXcmFwcGVyID0gc3R5bGVkLmRpdjxTdHlsZWRUb29sYmFyV3JhcHBlclByb3BzPihcbiAgKHsgdGhlbWUsIGxvY2tlZCwgdGFyZ2V0IH0pID0+ICh7XG4gICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZy5zbX0gMCAke3RoZW1lLnNwYWNpbmcuc219ICR7dGhlbWUuc3BhY2luZy5zbX1gLFxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgdG9wOiBsb2NrZWQgPyBUT1BfRElTVEFOQ0UgOiBcIi0xcmVtXCIsXG4gICAgcmlnaHQ6IHRoZW1lLnNwYWNpbmcubm9uZSxcbiAgICB0cmFuc2l0aW9uOiBcIm5vbmVcIixcbiAgICAuLi4oIWxvY2tlZCAmJiB7XG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgXCImOmFjdGl2ZSwgJjpmb2N1cy12aXNpYmxlLCAmOmhvdmVyXCI6IHtcbiAgICAgICAgdHJhbnNpdGlvbjogXCJvcGFjaXR5IDE1MG1zIDEwMG1zLCB0b3AgMTAwbXMgMTAwbXNcIixcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgdG9wOiBUT1BfRElTVEFOQ0UsXG4gICAgICB9LFxuICAgICAgLi4uKHRhcmdldCAmJiB7XG4gICAgICAgIFtgJHt0YXJnZXR9OmhvdmVyICYsICR7dGFyZ2V0fTphY3RpdmUgJiwgJHt0YXJnZXR9OmZvY3VzLXZpc2libGUgJmBdOiB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogXCJvcGFjaXR5IDE1MG1zIDEwMG1zLCB0b3AgMTAwbXMgMTAwbXNcIixcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIHRvcDogVE9QX0RJU1RBTkNFLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgfSksXG4gIH0pXG4pXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRUb29sYmFyID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogaGFzTGlnaHRCYWNrZ3JvdW5kQ29sb3IodGhlbWUpXG4gICAgPyB0aGVtZS5jb2xvcnMuZmFkZWRUZXh0NjBcbiAgICA6IHRoZW1lLmNvbG9ycy5ib2R5VGV4dCxcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIsXG4gIGJveFNoYWRvdzogXCIxcHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDgpXCIsXG4gIGJvcmRlclJhZGl1czogdGhlbWUucmFkaWkuZGVmYXVsdCxcbiAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMubGlnaHRlbmVkQmcwNSxcbiAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcbiAgekluZGV4OiB0aGVtZS56SW5kaWNlcy5zaWRlYmFyICsgMSxcbn0pKVxuIl19 */");
//# sourceMappingURL=styled-components.js.map