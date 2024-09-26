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

export let Kind;
(function (Kind) {
  Kind["DANGER"] = "danger";
})(Kind || (Kind = {}));
export const Small = /*#__PURE__*/_styled("small", process.env.NODE_ENV === "production" ? {
  target: "e1bju1570"
} : {
  target: "e1bju1570",
  label: "Small"
})(_ref => {
  let {
    kind,
    theme
  } = _ref;
  const {
    danger,
    fadedText60
  } = theme.colors;
  return {
    color: kind === Kind.DANGER ? danger : fadedText60,
    fontSize: theme.fontSizes.sm,
    lineHeight: theme.lineHeights.tight
  };
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NoYXJlZC9UZXh0RWxlbWVudHMvVGV4dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJxQiIsImZpbGUiOiIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvVGV4dEVsZW1lbnRzL1RleHQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyLTIwMjQpXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5cbmV4cG9ydCBlbnVtIEtpbmQge1xuICBEQU5HRVIgPSBcImRhbmdlclwiLFxufVxuXG5pbnRlcmZhY2UgVGV4dFByb3BzIHtcbiAga2luZD86IEtpbmRcbn1cblxuZXhwb3J0IGNvbnN0IFNtYWxsID0gc3R5bGVkLnNtYWxsPFRleHRQcm9wcz4oKHsga2luZCwgdGhlbWUgfSkgPT4ge1xuICBjb25zdCB7IGRhbmdlciwgZmFkZWRUZXh0NjAgfSA9IHRoZW1lLmNvbG9yc1xuXG4gIHJldHVybiB7XG4gICAgY29sb3I6IGtpbmQgPT09IEtpbmQuREFOR0VSID8gZGFuZ2VyIDogZmFkZWRUZXh0NjAsXG4gICAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy5zbSxcbiAgICBsaW5lSGVpZ2h0OiB0aGVtZS5saW5lSGVpZ2h0cy50aWdodCxcbiAgfVxufSlcbiJdfQ== */");
//# sourceMappingURL=Text.js.map