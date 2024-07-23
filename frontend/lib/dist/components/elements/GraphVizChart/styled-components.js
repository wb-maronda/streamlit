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
export const StyledGraphVizChart = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "e1uym6o70"
} : {
  target: "e1uym6o70",
  label: "StyledGraphVizChart"
})(_ref => {
  let {
    theme,
    isFullScreen
  } = _ref;
  return {
    "& *": {
      fontFamily: theme.genericFonts.bodyFont,
      // Font sizes inside the SVG element are getting huge for some reason.
      // Hacking together a number by eyeballing it:
      // 12px in the SVG looks like 1rem outside, so 9.6px ~= 0.8rem.
      fontSize: "9.6px"
    },
    // Ensure SVG is allowed the full width/height in full screen mode
    "& svg": {
      maxWidth: "100%",
      width: isFullScreen ? "100%" : "auto",
      height: isFullScreen ? "100%" : "auto"
    },
    width: isFullScreen ? "100%" : "auto",
    height: isFullScreen ? "100%" : "auto"
  };
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL0dyYXBoVml6Q2hhcnQvc3R5bGVkLWNvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JtQyIsImZpbGUiOiIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9lbGVtZW50cy9HcmFwaFZpekNoYXJ0L3N0eWxlZC1jb21wb25lbnRzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyLTIwMjQpXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5cbmludGVyZmFjZSBTdHlsZWRHcmFwaFZpekNoYXJ0UHJvcHMge1xuICBpc0Z1bGxTY3JlZW46IGJvb2xlYW5cbn1cblxuZXhwb3J0IGNvbnN0IFN0eWxlZEdyYXBoVml6Q2hhcnQgPSBzdHlsZWQuZGl2PFN0eWxlZEdyYXBoVml6Q2hhcnRQcm9wcz4oXG4gICh7IHRoZW1lLCBpc0Z1bGxTY3JlZW4gfSkgPT4gKHtcbiAgICBcIiYgKlwiOiB7XG4gICAgICBmb250RmFtaWx5OiB0aGVtZS5nZW5lcmljRm9udHMuYm9keUZvbnQsXG4gICAgICAvLyBGb250IHNpemVzIGluc2lkZSB0aGUgU1ZHIGVsZW1lbnQgYXJlIGdldHRpbmcgaHVnZSBmb3Igc29tZSByZWFzb24uXG4gICAgICAvLyBIYWNraW5nIHRvZ2V0aGVyIGEgbnVtYmVyIGJ5IGV5ZWJhbGxpbmcgaXQ6XG4gICAgICAvLyAxMnB4IGluIHRoZSBTVkcgbG9va3MgbGlrZSAxcmVtIG91dHNpZGUsIHNvIDkuNnB4IH49IDAuOHJlbS5cbiAgICAgIGZvbnRTaXplOiBcIjkuNnB4XCIsXG4gICAgfSxcblxuICAgIC8vIEVuc3VyZSBTVkcgaXMgYWxsb3dlZCB0aGUgZnVsbCB3aWR0aC9oZWlnaHQgaW4gZnVsbCBzY3JlZW4gbW9kZVxuICAgIFwiJiBzdmdcIjoge1xuICAgICAgbWF4V2lkdGg6IFwiMTAwJVwiLFxuICAgICAgd2lkdGg6IGlzRnVsbFNjcmVlbiA/IFwiMTAwJVwiIDogXCJhdXRvXCIsXG4gICAgICBoZWlnaHQ6IGlzRnVsbFNjcmVlbiA/IFwiMTAwJVwiIDogXCJhdXRvXCIsXG4gICAgfSxcbiAgICB3aWR0aDogaXNGdWxsU2NyZWVuID8gXCIxMDAlXCIgOiBcImF1dG9cIixcbiAgICBoZWlnaHQ6IGlzRnVsbFNjcmVlbiA/IFwiMTAwJVwiIDogXCJhdXRvXCIsXG4gIH0pXG4pXG4iXX0= */");
//# sourceMappingURL=styled-components.js.map