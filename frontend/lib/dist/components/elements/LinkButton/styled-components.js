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

import { darken, transparentize } from "color2k";
import { BaseButtonKind, BaseButtonSize } from "../../shared/BaseButton/styled-components";
export { BaseButtonKind, BaseButtonSize };
function getSizeStyle(size, theme) {
  switch (size) {
    case BaseButtonSize.XSMALL:
      return {
        padding: `${theme.spacing.twoXS} ${theme.spacing.sm}`,
        fontSize: theme.fontSizes.sm
      };
    case BaseButtonSize.SMALL:
      return {
        padding: `${theme.spacing.twoXS} ${theme.spacing.md}`
      };
    case BaseButtonSize.LARGE:
      return {
        padding: `${theme.spacing.md} ${theme.spacing.md}`
      };
    default:
      return {
        padding: `${theme.spacing.xs} ${theme.spacing.md}`
      };
  }
}
export const StyledBaseLinkButton = /*#__PURE__*/_styled("a", process.env.NODE_ENV === "production" ? {
  target: "e16zdaao2"
} : {
  target: "e16zdaao2",
  label: "StyledBaseLinkButton"
})(_ref => {
  let {
    fluidWidth,
    size,
    theme
  } = _ref;
  const buttonWidth = typeof fluidWidth == "number" ? `${fluidWidth}px` : "100%";
  return {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: theme.fontWeights.normal,
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radii.default,
    minHeight: theme.sizes.minElementHeight,
    margin: 0,
    lineHeight: theme.lineHeights.base,
    color: theme.colors.primary,
    textDecoration: "none",
    width: fluidWidth ? buttonWidth : "auto",
    userSelect: "none",
    "&:visited": {
      color: theme.colors.primary
    },
    "&:focus": {
      outline: "none"
    },
    "&:focus-visible": {
      boxShadow: `0 0 0 0.2rem ${transparentize(theme.colors.primary, 0.5)}`
    },
    "&:hover": {
      textDecoration: "none"
    },
    "&:active": {
      textDecoration: "none"
    },
    ...getSizeStyle(size, theme)
  };
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL0xpbmtCdXR0b24vc3R5bGVkLWNvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUVvQyIsImZpbGUiOiIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9lbGVtZW50cy9MaW5rQnV0dG9uL3N0eWxlZC1jb21wb25lbnRzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyLTIwMjQpXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IE1vdXNlRXZlbnQsIFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiXG5cbmltcG9ydCBzdHlsZWQsIHsgQ1NTT2JqZWN0IH0gZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5pbXBvcnQgeyBkYXJrZW4sIHRyYW5zcGFyZW50aXplIH0gZnJvbSBcImNvbG9yMmtcIlxuXG5pbXBvcnQge1xuICBCYXNlQnV0dG9uS2luZCxcbiAgQmFzZUJ1dHRvblNpemUsXG59IGZyb20gXCJAc3RyZWFtbGl0L2xpYi9zcmMvY29tcG9uZW50cy9zaGFyZWQvQmFzZUJ1dHRvbi9zdHlsZWQtY29tcG9uZW50c1wiXG5pbXBvcnQgeyBFbW90aW9uVGhlbWUgfSBmcm9tIFwiQHN0cmVhbWxpdC9saWIvc3JjL3RoZW1lXCJcblxuZXhwb3J0IHsgQmFzZUJ1dHRvbktpbmQsIEJhc2VCdXR0b25TaXplIH1cblxuZXhwb3J0IGludGVyZmFjZSBCYXNlTGlua0J1dHRvblByb3BzIHtcbiAga2luZDogQmFzZUJ1dHRvbktpbmQuUFJJTUFSWSB8IEJhc2VCdXR0b25LaW5kLlNFQ09OREFSWVxuICBzaXplPzogQmFzZUJ1dHRvblNpemVcbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIC8vIElmIHRydWUgb3IgbnVtYmVyLCB0aGUgYnV0dG9uIHNob3VsZCB0YWtlIHVwIGNvbnRhaW5lcidzIGZ1bGwgd2lkdGhcbiAgZmx1aWRXaWR0aD86IGJvb2xlYW4gfCBudW1iZXJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZVxuICBhdXRvRm9jdXM/OiBib29sZWFuXG4gIGhyZWY6IHN0cmluZ1xuICB0YXJnZXQ6IHN0cmluZ1xuICByZWw6IHN0cmluZ1xuICBvbkNsaWNrOiAoZXZlbnQ6IE1vdXNlRXZlbnQ8SFRNTEFuY2hvckVsZW1lbnQ+KSA9PiBhbnlcbn1cblxudHlwZSBSZXF1aXJlZEJhc2VMaW5rQnV0dG9uUHJvcHMgPSBSZXF1aXJlZDxCYXNlTGlua0J1dHRvblByb3BzPlxuXG5mdW5jdGlvbiBnZXRTaXplU3R5bGUoc2l6ZTogQmFzZUJ1dHRvblNpemUsIHRoZW1lOiBFbW90aW9uVGhlbWUpOiBDU1NPYmplY3Qge1xuICBzd2l0Y2ggKHNpemUpIHtcbiAgICBjYXNlIEJhc2VCdXR0b25TaXplLlhTTUFMTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcudHdvWFN9ICR7dGhlbWUuc3BhY2luZy5zbX1gLFxuICAgICAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLnNtLFxuICAgICAgfVxuICAgIGNhc2UgQmFzZUJ1dHRvblNpemUuU01BTEw6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nLnR3b1hTfSAke3RoZW1lLnNwYWNpbmcubWR9YCxcbiAgICAgIH1cbiAgICBjYXNlIEJhc2VCdXR0b25TaXplLkxBUkdFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZy5tZH0gJHt0aGVtZS5zcGFjaW5nLm1kfWAsXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcueHN9ICR7dGhlbWUuc3BhY2luZy5tZH1gLFxuICAgICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRCYXNlTGlua0J1dHRvbiA9IHN0eWxlZC5hPFJlcXVpcmVkQmFzZUxpbmtCdXR0b25Qcm9wcz4oXG4gICh7IGZsdWlkV2lkdGgsIHNpemUsIHRoZW1lIH0pID0+IHtcbiAgICBjb25zdCBidXR0b25XaWR0aCA9XG4gICAgICB0eXBlb2YgZmx1aWRXaWR0aCA9PSBcIm51bWJlclwiID8gYCR7Zmx1aWRXaWR0aH1weGAgOiBcIjEwMCVcIlxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIixcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLmZvbnRXZWlnaHRzLm5vcm1hbCxcbiAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcueHN9ICR7dGhlbWUuc3BhY2luZy5tZH1gLFxuICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5yYWRpaS5kZWZhdWx0LFxuICAgICAgbWluSGVpZ2h0OiB0aGVtZS5zaXplcy5taW5FbGVtZW50SGVpZ2h0LFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgbGluZUhlaWdodDogdGhlbWUubGluZUhlaWdodHMuYmFzZSxcbiAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICAgIHdpZHRoOiBmbHVpZFdpZHRoID8gYnV0dG9uV2lkdGggOiBcImF1dG9cIixcbiAgICAgIHVzZXJTZWxlY3Q6IFwibm9uZVwiLFxuICAgICAgXCImOnZpc2l0ZWRcIjoge1xuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gICAgICB9LFxuICAgICAgXCImOmZvY3VzXCI6IHtcbiAgICAgICAgb3V0bGluZTogXCJub25lXCIsXG4gICAgICB9LFxuICAgICAgXCImOmZvY3VzLXZpc2libGVcIjoge1xuICAgICAgICBib3hTaGFkb3c6IGAwIDAgMCAwLjJyZW0gJHt0cmFuc3BhcmVudGl6ZSh0aGVtZS5jb2xvcnMucHJpbWFyeSwgMC41KX1gLFxuICAgICAgfSxcbiAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICAgIH0sXG4gICAgICBcIiY6YWN0aXZlXCI6IHtcbiAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgICAgfSxcbiAgICAgIC4uLmdldFNpemVTdHlsZShzaXplLCB0aGVtZSksXG4gICAgfVxuICB9XG4pXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRQcmltYXJ5TGlua0J1dHRvbiA9IHN0eWxlZChcbiAgU3R5bGVkQmFzZUxpbmtCdXR0b25cbik8UmVxdWlyZWRCYXNlTGlua0J1dHRvblByb3BzPigoeyB0aGVtZSB9KSA9PiAoe1xuICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICBjb2xvcjogdGhlbWUuY29sb3JzLndoaXRlLFxuICBib3JkZXI6IGAke3RoZW1lLnNpemVzLmJvcmRlcldpZHRofSBzb2xpZCAke3RoZW1lLmNvbG9ycy5wcmltYXJ5fWAsXG4gIFwiJjpob3ZlclwiOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBkYXJrZW4odGhlbWUuY29sb3JzLnByaW1hcnksIDAuMDUpLFxuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMud2hpdGUsXG4gIH0sXG4gIFwiJjphY3RpdmVcIjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgfSxcbiAgXCImOnZpc2l0ZWQ6bm90KDphY3RpdmUpXCI6IHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLndoaXRlLFxuICB9LFxuICBcIiZbZGlzYWJsZWRdLCAmW2Rpc2FibGVkXTpob3ZlciwgJltkaXNhYmxlZF06YWN0aXZlLCAmW2Rpc2FibGVkXTp2aXNpdGVkXCI6IHtcbiAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3JzLmJvcmRlckNvbG9yLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnRyYW5zcGFyZW50LFxuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuZmFkZWRUZXh0NDAsXG4gICAgY3Vyc29yOiBcIm5vdC1hbGxvd2VkXCIsXG4gIH0sXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFNlY29uZGFyeUxpbmtCdXR0b24gPSBzdHlsZWQoXG4gIFN0eWxlZEJhc2VMaW5rQnV0dG9uXG4pPFJlcXVpcmVkQmFzZUxpbmtCdXR0b25Qcm9wcz4oKHsgdGhlbWUgfSkgPT4gKHtcbiAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMubGlnaHRlbmVkQmcwNSxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy5ib2R5VGV4dCxcbiAgYm9yZGVyOiBgJHt0aGVtZS5zaXplcy5ib3JkZXJXaWR0aH0gc29saWQgJHt0aGVtZS5jb2xvcnMuYm9yZGVyQ29sb3J9YCxcbiAgXCImOnZpc2l0ZWRcIjoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYm9keVRleHQsXG4gIH0sXG4gIFwiJjpob3ZlclwiOiB7XG4gICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgfSxcbiAgXCImOmFjdGl2ZVwiOiB7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy53aGl0ZSxcbiAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgfSxcbiAgXCImOmZvY3VzOm5vdCg6YWN0aXZlKVwiOiB7XG4gICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgfSxcbiAgXCImW2Rpc2FibGVkXSwgJltkaXNhYmxlZF06aG92ZXIsICZbZGlzYWJsZWRdOmFjdGl2ZVwiOiB7XG4gICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5ib3JkZXJDb2xvcixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy50cmFuc3BhcmVudCxcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLmZhZGVkVGV4dDQwLFxuICAgIGN1cnNvcjogXCJub3QtYWxsb3dlZFwiLFxuICB9LFxufSkpXG4iXX0= */");
export const StyledPrimaryLinkButton = /*#__PURE__*/_styled(StyledBaseLinkButton, process.env.NODE_ENV === "production" ? {
  target: "e16zdaao1"
} : {
  target: "e16zdaao1",
  label: "StyledPrimaryLinkButton"
})(_ref2 => {
  let {
    theme
  } = _ref2;
  return {
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    border: `${theme.sizes.borderWidth} solid ${theme.colors.primary}`,
    "&:hover": {
      backgroundColor: darken(theme.colors.primary, 0.05),
      color: theme.colors.white
    },
    "&:active": {
      backgroundColor: "transparent",
      color: theme.colors.primary
    },
    "&:visited:not(:active)": {
      color: theme.colors.white
    },
    "&[disabled], &[disabled]:hover, &[disabled]:active, &[disabled]:visited": {
      borderColor: theme.colors.borderColor,
      backgroundColor: theme.colors.transparent,
      color: theme.colors.fadedText40,
      cursor: "not-allowed"
    }
  };
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL0xpbmtCdXR0b24vc3R5bGVkLWNvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEd1QyIsImZpbGUiOiIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9lbGVtZW50cy9MaW5rQnV0dG9uL3N0eWxlZC1jb21wb25lbnRzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyLTIwMjQpXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IE1vdXNlRXZlbnQsIFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiXG5cbmltcG9ydCBzdHlsZWQsIHsgQ1NTT2JqZWN0IH0gZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5pbXBvcnQgeyBkYXJrZW4sIHRyYW5zcGFyZW50aXplIH0gZnJvbSBcImNvbG9yMmtcIlxuXG5pbXBvcnQge1xuICBCYXNlQnV0dG9uS2luZCxcbiAgQmFzZUJ1dHRvblNpemUsXG59IGZyb20gXCJAc3RyZWFtbGl0L2xpYi9zcmMvY29tcG9uZW50cy9zaGFyZWQvQmFzZUJ1dHRvbi9zdHlsZWQtY29tcG9uZW50c1wiXG5pbXBvcnQgeyBFbW90aW9uVGhlbWUgfSBmcm9tIFwiQHN0cmVhbWxpdC9saWIvc3JjL3RoZW1lXCJcblxuZXhwb3J0IHsgQmFzZUJ1dHRvbktpbmQsIEJhc2VCdXR0b25TaXplIH1cblxuZXhwb3J0IGludGVyZmFjZSBCYXNlTGlua0J1dHRvblByb3BzIHtcbiAga2luZDogQmFzZUJ1dHRvbktpbmQuUFJJTUFSWSB8IEJhc2VCdXR0b25LaW5kLlNFQ09OREFSWVxuICBzaXplPzogQmFzZUJ1dHRvblNpemVcbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIC8vIElmIHRydWUgb3IgbnVtYmVyLCB0aGUgYnV0dG9uIHNob3VsZCB0YWtlIHVwIGNvbnRhaW5lcidzIGZ1bGwgd2lkdGhcbiAgZmx1aWRXaWR0aD86IGJvb2xlYW4gfCBudW1iZXJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZVxuICBhdXRvRm9jdXM/OiBib29sZWFuXG4gIGhyZWY6IHN0cmluZ1xuICB0YXJnZXQ6IHN0cmluZ1xuICByZWw6IHN0cmluZ1xuICBvbkNsaWNrOiAoZXZlbnQ6IE1vdXNlRXZlbnQ8SFRNTEFuY2hvckVsZW1lbnQ+KSA9PiBhbnlcbn1cblxudHlwZSBSZXF1aXJlZEJhc2VMaW5rQnV0dG9uUHJvcHMgPSBSZXF1aXJlZDxCYXNlTGlua0J1dHRvblByb3BzPlxuXG5mdW5jdGlvbiBnZXRTaXplU3R5bGUoc2l6ZTogQmFzZUJ1dHRvblNpemUsIHRoZW1lOiBFbW90aW9uVGhlbWUpOiBDU1NPYmplY3Qge1xuICBzd2l0Y2ggKHNpemUpIHtcbiAgICBjYXNlIEJhc2VCdXR0b25TaXplLlhTTUFMTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcudHdvWFN9ICR7dGhlbWUuc3BhY2luZy5zbX1gLFxuICAgICAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLnNtLFxuICAgICAgfVxuICAgIGNhc2UgQmFzZUJ1dHRvblNpemUuU01BTEw6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nLnR3b1hTfSAke3RoZW1lLnNwYWNpbmcubWR9YCxcbiAgICAgIH1cbiAgICBjYXNlIEJhc2VCdXR0b25TaXplLkxBUkdFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZy5tZH0gJHt0aGVtZS5zcGFjaW5nLm1kfWAsXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcueHN9ICR7dGhlbWUuc3BhY2luZy5tZH1gLFxuICAgICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRCYXNlTGlua0J1dHRvbiA9IHN0eWxlZC5hPFJlcXVpcmVkQmFzZUxpbmtCdXR0b25Qcm9wcz4oXG4gICh7IGZsdWlkV2lkdGgsIHNpemUsIHRoZW1lIH0pID0+IHtcbiAgICBjb25zdCBidXR0b25XaWR0aCA9XG4gICAgICB0eXBlb2YgZmx1aWRXaWR0aCA9PSBcIm51bWJlclwiID8gYCR7Zmx1aWRXaWR0aH1weGAgOiBcIjEwMCVcIlxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIixcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLmZvbnRXZWlnaHRzLm5vcm1hbCxcbiAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcueHN9ICR7dGhlbWUuc3BhY2luZy5tZH1gLFxuICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5yYWRpaS5kZWZhdWx0LFxuICAgICAgbWluSGVpZ2h0OiB0aGVtZS5zaXplcy5taW5FbGVtZW50SGVpZ2h0LFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgbGluZUhlaWdodDogdGhlbWUubGluZUhlaWdodHMuYmFzZSxcbiAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICAgIHdpZHRoOiBmbHVpZFdpZHRoID8gYnV0dG9uV2lkdGggOiBcImF1dG9cIixcbiAgICAgIHVzZXJTZWxlY3Q6IFwibm9uZVwiLFxuICAgICAgXCImOnZpc2l0ZWRcIjoge1xuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gICAgICB9LFxuICAgICAgXCImOmZvY3VzXCI6IHtcbiAgICAgICAgb3V0bGluZTogXCJub25lXCIsXG4gICAgICB9LFxuICAgICAgXCImOmZvY3VzLXZpc2libGVcIjoge1xuICAgICAgICBib3hTaGFkb3c6IGAwIDAgMCAwLjJyZW0gJHt0cmFuc3BhcmVudGl6ZSh0aGVtZS5jb2xvcnMucHJpbWFyeSwgMC41KX1gLFxuICAgICAgfSxcbiAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICAgIH0sXG4gICAgICBcIiY6YWN0aXZlXCI6IHtcbiAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgICAgfSxcbiAgICAgIC4uLmdldFNpemVTdHlsZShzaXplLCB0aGVtZSksXG4gICAgfVxuICB9XG4pXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRQcmltYXJ5TGlua0J1dHRvbiA9IHN0eWxlZChcbiAgU3R5bGVkQmFzZUxpbmtCdXR0b25cbik8UmVxdWlyZWRCYXNlTGlua0J1dHRvblByb3BzPigoeyB0aGVtZSB9KSA9PiAoe1xuICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICBjb2xvcjogdGhlbWUuY29sb3JzLndoaXRlLFxuICBib3JkZXI6IGAke3RoZW1lLnNpemVzLmJvcmRlcldpZHRofSBzb2xpZCAke3RoZW1lLmNvbG9ycy5wcmltYXJ5fWAsXG4gIFwiJjpob3ZlclwiOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBkYXJrZW4odGhlbWUuY29sb3JzLnByaW1hcnksIDAuMDUpLFxuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMud2hpdGUsXG4gIH0sXG4gIFwiJjphY3RpdmVcIjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgfSxcbiAgXCImOnZpc2l0ZWQ6bm90KDphY3RpdmUpXCI6IHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLndoaXRlLFxuICB9LFxuICBcIiZbZGlzYWJsZWRdLCAmW2Rpc2FibGVkXTpob3ZlciwgJltkaXNhYmxlZF06YWN0aXZlLCAmW2Rpc2FibGVkXTp2aXNpdGVkXCI6IHtcbiAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3JzLmJvcmRlckNvbG9yLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnRyYW5zcGFyZW50LFxuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuZmFkZWRUZXh0NDAsXG4gICAgY3Vyc29yOiBcIm5vdC1hbGxvd2VkXCIsXG4gIH0sXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFNlY29uZGFyeUxpbmtCdXR0b24gPSBzdHlsZWQoXG4gIFN0eWxlZEJhc2VMaW5rQnV0dG9uXG4pPFJlcXVpcmVkQmFzZUxpbmtCdXR0b25Qcm9wcz4oKHsgdGhlbWUgfSkgPT4gKHtcbiAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMubGlnaHRlbmVkQmcwNSxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy5ib2R5VGV4dCxcbiAgYm9yZGVyOiBgJHt0aGVtZS5zaXplcy5ib3JkZXJXaWR0aH0gc29saWQgJHt0aGVtZS5jb2xvcnMuYm9yZGVyQ29sb3J9YCxcbiAgXCImOnZpc2l0ZWRcIjoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYm9keVRleHQsXG4gIH0sXG4gIFwiJjpob3ZlclwiOiB7XG4gICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgfSxcbiAgXCImOmFjdGl2ZVwiOiB7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy53aGl0ZSxcbiAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgfSxcbiAgXCImOmZvY3VzOm5vdCg6YWN0aXZlKVwiOiB7XG4gICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgfSxcbiAgXCImW2Rpc2FibGVkXSwgJltkaXNhYmxlZF06aG92ZXIsICZbZGlzYWJsZWRdOmFjdGl2ZVwiOiB7XG4gICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5ib3JkZXJDb2xvcixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy50cmFuc3BhcmVudCxcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLmZhZGVkVGV4dDQwLFxuICAgIGN1cnNvcjogXCJub3QtYWxsb3dlZFwiLFxuICB9LFxufSkpXG4iXX0= */");
export const StyledSecondaryLinkButton = /*#__PURE__*/_styled(StyledBaseLinkButton, process.env.NODE_ENV === "production" ? {
  target: "e16zdaao0"
} : {
  target: "e16zdaao0",
  label: "StyledSecondaryLinkButton"
})(_ref3 => {
  let {
    theme
  } = _ref3;
  return {
    backgroundColor: theme.colors.lightenedBg05,
    color: theme.colors.bodyText,
    border: `${theme.sizes.borderWidth} solid ${theme.colors.borderColor}`,
    "&:visited": {
      color: theme.colors.bodyText
    },
    "&:hover": {
      borderColor: theme.colors.primary,
      color: theme.colors.primary
    },
    "&:active": {
      color: theme.colors.white,
      borderColor: theme.colors.primary,
      backgroundColor: theme.colors.primary
    },
    "&:focus:not(:active)": {
      borderColor: theme.colors.primary,
      color: theme.colors.primary
    },
    "&[disabled], &[disabled]:hover, &[disabled]:active": {
      borderColor: theme.colors.borderColor,
      backgroundColor: theme.colors.transparent,
      color: theme.colors.fadedText40,
      cursor: "not-allowed"
    }
  };
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL0xpbmtCdXR0b24vc3R5bGVkLWNvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUl5QyIsImZpbGUiOiIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9lbGVtZW50cy9MaW5rQnV0dG9uL3N0eWxlZC1jb21wb25lbnRzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyLTIwMjQpXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IE1vdXNlRXZlbnQsIFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiXG5cbmltcG9ydCBzdHlsZWQsIHsgQ1NTT2JqZWN0IH0gZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5pbXBvcnQgeyBkYXJrZW4sIHRyYW5zcGFyZW50aXplIH0gZnJvbSBcImNvbG9yMmtcIlxuXG5pbXBvcnQge1xuICBCYXNlQnV0dG9uS2luZCxcbiAgQmFzZUJ1dHRvblNpemUsXG59IGZyb20gXCJAc3RyZWFtbGl0L2xpYi9zcmMvY29tcG9uZW50cy9zaGFyZWQvQmFzZUJ1dHRvbi9zdHlsZWQtY29tcG9uZW50c1wiXG5pbXBvcnQgeyBFbW90aW9uVGhlbWUgfSBmcm9tIFwiQHN0cmVhbWxpdC9saWIvc3JjL3RoZW1lXCJcblxuZXhwb3J0IHsgQmFzZUJ1dHRvbktpbmQsIEJhc2VCdXR0b25TaXplIH1cblxuZXhwb3J0IGludGVyZmFjZSBCYXNlTGlua0J1dHRvblByb3BzIHtcbiAga2luZDogQmFzZUJ1dHRvbktpbmQuUFJJTUFSWSB8IEJhc2VCdXR0b25LaW5kLlNFQ09OREFSWVxuICBzaXplPzogQmFzZUJ1dHRvblNpemVcbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIC8vIElmIHRydWUgb3IgbnVtYmVyLCB0aGUgYnV0dG9uIHNob3VsZCB0YWtlIHVwIGNvbnRhaW5lcidzIGZ1bGwgd2lkdGhcbiAgZmx1aWRXaWR0aD86IGJvb2xlYW4gfCBudW1iZXJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZVxuICBhdXRvRm9jdXM/OiBib29sZWFuXG4gIGhyZWY6IHN0cmluZ1xuICB0YXJnZXQ6IHN0cmluZ1xuICByZWw6IHN0cmluZ1xuICBvbkNsaWNrOiAoZXZlbnQ6IE1vdXNlRXZlbnQ8SFRNTEFuY2hvckVsZW1lbnQ+KSA9PiBhbnlcbn1cblxudHlwZSBSZXF1aXJlZEJhc2VMaW5rQnV0dG9uUHJvcHMgPSBSZXF1aXJlZDxCYXNlTGlua0J1dHRvblByb3BzPlxuXG5mdW5jdGlvbiBnZXRTaXplU3R5bGUoc2l6ZTogQmFzZUJ1dHRvblNpemUsIHRoZW1lOiBFbW90aW9uVGhlbWUpOiBDU1NPYmplY3Qge1xuICBzd2l0Y2ggKHNpemUpIHtcbiAgICBjYXNlIEJhc2VCdXR0b25TaXplLlhTTUFMTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcudHdvWFN9ICR7dGhlbWUuc3BhY2luZy5zbX1gLFxuICAgICAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLnNtLFxuICAgICAgfVxuICAgIGNhc2UgQmFzZUJ1dHRvblNpemUuU01BTEw6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nLnR3b1hTfSAke3RoZW1lLnNwYWNpbmcubWR9YCxcbiAgICAgIH1cbiAgICBjYXNlIEJhc2VCdXR0b25TaXplLkxBUkdFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZy5tZH0gJHt0aGVtZS5zcGFjaW5nLm1kfWAsXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcueHN9ICR7dGhlbWUuc3BhY2luZy5tZH1gLFxuICAgICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRCYXNlTGlua0J1dHRvbiA9IHN0eWxlZC5hPFJlcXVpcmVkQmFzZUxpbmtCdXR0b25Qcm9wcz4oXG4gICh7IGZsdWlkV2lkdGgsIHNpemUsIHRoZW1lIH0pID0+IHtcbiAgICBjb25zdCBidXR0b25XaWR0aCA9XG4gICAgICB0eXBlb2YgZmx1aWRXaWR0aCA9PSBcIm51bWJlclwiID8gYCR7Zmx1aWRXaWR0aH1weGAgOiBcIjEwMCVcIlxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIixcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLmZvbnRXZWlnaHRzLm5vcm1hbCxcbiAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcueHN9ICR7dGhlbWUuc3BhY2luZy5tZH1gLFxuICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5yYWRpaS5kZWZhdWx0LFxuICAgICAgbWluSGVpZ2h0OiB0aGVtZS5zaXplcy5taW5FbGVtZW50SGVpZ2h0LFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgbGluZUhlaWdodDogdGhlbWUubGluZUhlaWdodHMuYmFzZSxcbiAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICAgIHdpZHRoOiBmbHVpZFdpZHRoID8gYnV0dG9uV2lkdGggOiBcImF1dG9cIixcbiAgICAgIHVzZXJTZWxlY3Q6IFwibm9uZVwiLFxuICAgICAgXCImOnZpc2l0ZWRcIjoge1xuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gICAgICB9LFxuICAgICAgXCImOmZvY3VzXCI6IHtcbiAgICAgICAgb3V0bGluZTogXCJub25lXCIsXG4gICAgICB9LFxuICAgICAgXCImOmZvY3VzLXZpc2libGVcIjoge1xuICAgICAgICBib3hTaGFkb3c6IGAwIDAgMCAwLjJyZW0gJHt0cmFuc3BhcmVudGl6ZSh0aGVtZS5jb2xvcnMucHJpbWFyeSwgMC41KX1gLFxuICAgICAgfSxcbiAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICAgIH0sXG4gICAgICBcIiY6YWN0aXZlXCI6IHtcbiAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgICAgfSxcbiAgICAgIC4uLmdldFNpemVTdHlsZShzaXplLCB0aGVtZSksXG4gICAgfVxuICB9XG4pXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRQcmltYXJ5TGlua0J1dHRvbiA9IHN0eWxlZChcbiAgU3R5bGVkQmFzZUxpbmtCdXR0b25cbik8UmVxdWlyZWRCYXNlTGlua0J1dHRvblByb3BzPigoeyB0aGVtZSB9KSA9PiAoe1xuICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICBjb2xvcjogdGhlbWUuY29sb3JzLndoaXRlLFxuICBib3JkZXI6IGAke3RoZW1lLnNpemVzLmJvcmRlcldpZHRofSBzb2xpZCAke3RoZW1lLmNvbG9ycy5wcmltYXJ5fWAsXG4gIFwiJjpob3ZlclwiOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBkYXJrZW4odGhlbWUuY29sb3JzLnByaW1hcnksIDAuMDUpLFxuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMud2hpdGUsXG4gIH0sXG4gIFwiJjphY3RpdmVcIjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgfSxcbiAgXCImOnZpc2l0ZWQ6bm90KDphY3RpdmUpXCI6IHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLndoaXRlLFxuICB9LFxuICBcIiZbZGlzYWJsZWRdLCAmW2Rpc2FibGVkXTpob3ZlciwgJltkaXNhYmxlZF06YWN0aXZlLCAmW2Rpc2FibGVkXTp2aXNpdGVkXCI6IHtcbiAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3JzLmJvcmRlckNvbG9yLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnRyYW5zcGFyZW50LFxuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuZmFkZWRUZXh0NDAsXG4gICAgY3Vyc29yOiBcIm5vdC1hbGxvd2VkXCIsXG4gIH0sXG59KSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFNlY29uZGFyeUxpbmtCdXR0b24gPSBzdHlsZWQoXG4gIFN0eWxlZEJhc2VMaW5rQnV0dG9uXG4pPFJlcXVpcmVkQmFzZUxpbmtCdXR0b25Qcm9wcz4oKHsgdGhlbWUgfSkgPT4gKHtcbiAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMubGlnaHRlbmVkQmcwNSxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy5ib2R5VGV4dCxcbiAgYm9yZGVyOiBgJHt0aGVtZS5zaXplcy5ib3JkZXJXaWR0aH0gc29saWQgJHt0aGVtZS5jb2xvcnMuYm9yZGVyQ29sb3J9YCxcbiAgXCImOnZpc2l0ZWRcIjoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYm9keVRleHQsXG4gIH0sXG4gIFwiJjpob3ZlclwiOiB7XG4gICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgfSxcbiAgXCImOmFjdGl2ZVwiOiB7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy53aGl0ZSxcbiAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3JzLnByaW1hcnksXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgfSxcbiAgXCImOmZvY3VzOm5vdCg6YWN0aXZlKVwiOiB7XG4gICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgfSxcbiAgXCImW2Rpc2FibGVkXSwgJltkaXNhYmxlZF06aG92ZXIsICZbZGlzYWJsZWRdOmFjdGl2ZVwiOiB7XG4gICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9ycy5ib3JkZXJDb2xvcixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy50cmFuc3BhcmVudCxcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLmZhZGVkVGV4dDQwLFxuICAgIGN1cnNvcjogXCJub3QtYWxsb3dlZFwiLFxuICB9LFxufSkpXG4iXX0= */");
//# sourceMappingURL=styled-components.js.map