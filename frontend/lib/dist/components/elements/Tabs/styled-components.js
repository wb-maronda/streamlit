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

import { transparentize } from "color2k";
export const StyledTabContainer = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "esjhkag0"
} : {
  target: "esjhkag0",
  label: "StyledTabContainer"
})(_ref => {
  let {
    theme,
    isOverflowing,
    tabHeight
  } = _ref;
  return {
    ...(isOverflowing ? {
      position: "relative",
      "::after": {
        content: "\" \"",
        position: "absolute",
        zIndex: 1,
        top: 0,
        right: 0,
        pointerEvents: "none",
        backgroundImage: "linear-gradient(to right, ".concat(transparentize(theme.colors.bgColor, 1), ", ").concat(theme.colors.bgColor, ")"),
        width: theme.spacing.lg,
        height: tabHeight
      }
    } : {})
  };
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL1RhYnMvc3R5bGVkLWNvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JrQyIsImZpbGUiOiIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9lbGVtZW50cy9UYWJzL3N0eWxlZC1jb21wb25lbnRzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyLTIwMjQpXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5pbXBvcnQgeyB0cmFuc3BhcmVudGl6ZSB9IGZyb20gXCJjb2xvcjJrXCJcblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZWRUYWJDb250YWluZXJQcm9wcyB7XG4gIGlzT3ZlcmZsb3dpbmc6IGJvb2xlYW5cbiAgdGFiSGVpZ2h0OiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IFN0eWxlZFRhYkNvbnRhaW5lciA9IHN0eWxlZC5kaXY8U3R5bGVkVGFiQ29udGFpbmVyUHJvcHM+KFxuICAoeyB0aGVtZSwgaXNPdmVyZmxvd2luZywgdGFiSGVpZ2h0IH0pID0+ICh7XG4gICAgLi4uKGlzT3ZlcmZsb3dpbmdcbiAgICAgID8ge1xuICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgXCI6OmFmdGVyXCI6IHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IGBcIiBcImAsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgekluZGV4OiAxLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHt0cmFuc3BhcmVudGl6ZShcbiAgICAgICAgICAgICAgdGhlbWUuY29sb3JzLmJnQ29sb3IsXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICl9LCAke3RoZW1lLmNvbG9ycy5iZ0NvbG9yfSlgLFxuICAgICAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcubGcsXG4gICAgICAgICAgICBoZWlnaHQ6IHRhYkhlaWdodCxcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICA6IHt9KSxcbiAgfSlcbilcbiJdfQ== */");
//# sourceMappingURL=styled-components.js.map