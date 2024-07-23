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
export const StyledVegaLiteChartContainer = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "egd2k5h0"
} : {
  target: "egd2k5h0",
  label: "StyledVegaLiteChartContainer"
})(_ref => {
  let {
    theme,
    useContainerWidth,
    isFullScreen
  } = _ref;
  return {
    width: useContainerWidth || isFullScreen ? "100%" : "auto",
    height: isFullScreen ? "100%" : "auto",
    // These styles come from VegaLite Library
    "&.vega-embed": {
      "&:hover summary, .vega-embed:focus summary": {
        background: "transparent"
      },
      "&.has-actions": {
        paddingRight: 0
      },
      ".vega-actions": {
        zIndex: theme.zIndices.popupMenu,
        // Customize menu UI to look like the Streamlit menu:
        backgroundColor: theme.colors.bgColor,
        boxShadow: "rgb(0 0 0 / 16%) 0px 4px 16px",
        border: "".concat(theme.sizes.borderWidth, " solid ").concat(theme.colors.fadedText10),
        a: {
          fontFamily: theme.genericFonts.bodyFont,
          fontWeight: theme.fontWeights.normal,
          fontSize: theme.fontSizes.md,
          margin: 0,
          padding: "".concat(theme.spacing.twoXS, " ").concat(theme.spacing.twoXL),
          color: theme.colors.bodyText
        },
        "a:hover": {
          backgroundColor: theme.colors.secondaryBg,
          color: theme.colors.bodyText
        },
        ":before": {
          content: "none"
        },
        ":after": {
          content: "none"
        }
      },
      summary: {
        opacity: 0,
        // Fix weird floating button height issue in Vega Lite.
        height: "auto",
        // Fix floating button appearing above pop-ups.
        zIndex: theme.zIndices.menuButton,
        border: "none",
        boxShadow: "none",
        borderRadius: theme.radii.default,
        color: theme.colors.fadedText10,
        backgroundColor: "transparent",
        transition: "opacity 300ms 150ms,transform 300ms 150ms",
        "&:active, &:focus-visible, &:hover": {
          border: "none",
          boxShadow: "none",
          color: theme.colors.bodyText,
          opacity: "1 !important",
          background: theme.colors.darkenedBgMix25
        }
      }
    }
  };
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL0Fycm93VmVnYUxpdGVDaGFydC9zdHlsZWQtY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QkUiLCJmaWxlIjoiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvZWxlbWVudHMvQXJyb3dWZWdhTGl0ZUNoYXJ0L3N0eWxlZC1jb21wb25lbnRzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyLTIwMjQpXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5cbmludGVyZmFjZSBTdHlsZWRWZWdhTGl0ZUNoYXJ0Q29udGFpbmVyUHJvcHMge1xuICB1c2VDb250YWluZXJXaWR0aDogYm9vbGVhblxuICBpc0Z1bGxTY3JlZW46IGJvb2xlYW5cbn1cblxuZXhwb3J0IGNvbnN0IFN0eWxlZFZlZ2FMaXRlQ2hhcnRDb250YWluZXIgPVxuICBzdHlsZWQuZGl2PFN0eWxlZFZlZ2FMaXRlQ2hhcnRDb250YWluZXJQcm9wcz4oXG4gICAgKHsgdGhlbWUsIHVzZUNvbnRhaW5lcldpZHRoLCBpc0Z1bGxTY3JlZW4gfSkgPT4gKHtcbiAgICAgIHdpZHRoOiB1c2VDb250YWluZXJXaWR0aCB8fCBpc0Z1bGxTY3JlZW4gPyBcIjEwMCVcIiA6IFwiYXV0b1wiLFxuICAgICAgaGVpZ2h0OiBpc0Z1bGxTY3JlZW4gPyBcIjEwMCVcIiA6IFwiYXV0b1wiLFxuICAgICAgLy8gVGhlc2Ugc3R5bGVzIGNvbWUgZnJvbSBWZWdhTGl0ZSBMaWJyYXJ5XG4gICAgICBcIiYudmVnYS1lbWJlZFwiOiB7XG4gICAgICAgIFwiJjpob3ZlciBzdW1tYXJ5LCAudmVnYS1lbWJlZDpmb2N1cyBzdW1tYXJ5XCI6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgIH0sXG4gICAgICAgIFwiJi5oYXMtYWN0aW9uc1wiOiB7XG4gICAgICAgICAgcGFkZGluZ1JpZ2h0OiAwLFxuICAgICAgICB9LFxuICAgICAgICBcIi52ZWdhLWFjdGlvbnNcIjoge1xuICAgICAgICAgIHpJbmRleDogdGhlbWUuekluZGljZXMucG9wdXBNZW51LFxuICAgICAgICAgIC8vIEN1c3RvbWl6ZSBtZW51IFVJIHRvIGxvb2sgbGlrZSB0aGUgU3RyZWFtbGl0IG1lbnU6XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuYmdDb2xvcixcbiAgICAgICAgICBib3hTaGFkb3c6IFwicmdiKDAgMCAwIC8gMTYlKSAwcHggNHB4IDE2cHhcIixcbiAgICAgICAgICBib3JkZXI6IGAke3RoZW1lLnNpemVzLmJvcmRlcldpZHRofSBzb2xpZCAke3RoZW1lLmNvbG9ycy5mYWRlZFRleHQxMH1gLFxuICAgICAgICAgIGE6IHtcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IHRoZW1lLmdlbmVyaWNGb250cy5ib2R5Rm9udCxcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLmZvbnRXZWlnaHRzLm5vcm1hbCxcbiAgICAgICAgICAgIGZvbnRTaXplOiB0aGVtZS5mb250U2l6ZXMubWQsXG4gICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nLnR3b1hTfSAke3RoZW1lLnNwYWNpbmcudHdvWEx9YCxcbiAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYm9keVRleHQsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImE6aG92ZXJcIjoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5QmcsXG4gICAgICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmJvZHlUZXh0LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCI6YmVmb3JlXCI6IHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwibm9uZVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCI6YWZ0ZXJcIjoge1xuICAgICAgICAgICAgY29udGVudDogXCJub25lXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgc3VtbWFyeToge1xuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgLy8gRml4IHdlaXJkIGZsb2F0aW5nIGJ1dHRvbiBoZWlnaHQgaXNzdWUgaW4gVmVnYSBMaXRlLlxuICAgICAgICAgIGhlaWdodDogXCJhdXRvXCIsXG4gICAgICAgICAgLy8gRml4IGZsb2F0aW5nIGJ1dHRvbiBhcHBlYXJpbmcgYWJvdmUgcG9wLXVwcy5cbiAgICAgICAgICB6SW5kZXg6IHRoZW1lLnpJbmRpY2VzLm1lbnVCdXR0b24sXG4gICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogdGhlbWUucmFkaWkuZGVmYXVsdCxcbiAgICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmZhZGVkVGV4dDEwLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgIHRyYW5zaXRpb246IFwib3BhY2l0eSAzMDBtcyAxNTBtcyx0cmFuc2Zvcm0gMzAwbXMgMTUwbXNcIixcbiAgICAgICAgICBcIiY6YWN0aXZlLCAmOmZvY3VzLXZpc2libGUsICY6aG92ZXJcIjoge1xuICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgICAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gICAgICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmJvZHlUZXh0LFxuICAgICAgICAgICAgb3BhY2l0eTogXCIxICFpbXBvcnRhbnRcIixcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLmNvbG9ycy5kYXJrZW5lZEJnTWl4MjUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSlcbiAgKVxuIl19 */");
//# sourceMappingURL=styled-components.js.map