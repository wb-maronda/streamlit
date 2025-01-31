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

/*
  This is the default prism.js theme for JavaScript, CSS and HTML, but
  stripped of everything except for token styling.

  See https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript
*/
export const StyledPre = /*#__PURE__*/_styled("pre", process.env.NODE_ENV === "production" ? {
  target: "e1ycw9pz3"
} : {
  target: "e1ycw9pz3",
  label: "StyledPre"
})(_ref => {
  let {
    theme
  } = _ref;
  return {
    margin: 0,
    paddingRight: "2.75rem",
    color: theme.colors.bodyText,
    borderRadius: theme.radii.default,
    // The token can consist of many lines, e.g. a triple-quote string, so
    // we need to make sure that the color is not overwritten.
    ".comment.linenumber": {
      color: theme.colors.fadedText40,
      fontSize: theme.fontSizes.twoSm,
      // Override the default token's min-width, to ensure it fits 3-digit lines
      minWidth: "".concat(theme.spacing.threeXL, " !important")
    },
    ".token.comment, .token.prolog, .token.doctype, .token.cdata": {
      color: "slategray"
    },
    ".token.punctuation": {
      color: "#999"
    },
    ".namespace": {
      opacity: 0.7
    },
    ".token.attr-name, .token.property, .token.variable": {
      color: theme.colors.lightBlue80
    },
    ".token.boolean, .token.constant, .token.symbol": {
      color: theme.colors.green70
    },
    ".token.number, .token.regex": {
      color: theme.colors.blueGreen80
    },
    ".token.string, .token.char, .token.attr-value": {
      color: theme.colors.green80
    },
    ".token.operator, .token.entity": {
      color: theme.colors.orange90
    },
    ".token.url": {
      color: theme.colors.purple80
    },
    ".token.decorator, .token.atrule": {
      color: theme.colors.orange90
    },
    ".token.keyword, .token.tag": {
      color: theme.colors.blue70
    },
    ".token.function, .token.class-name, .token.selector": {
      color: theme.colors.blue70,
      fontWeight: "bold"
    },
    ".token.important": {
      color: theme.colors.red70,
      fontWeight: "bold"
    },
    ".token.comment": {
      color: theme.colors.gray70,
      fontStyle: "italic"
    },
    ".token.italic": {
      fontStyle: "italic"
    },
    ".token.entity": {
      cursor: "help"
    }
  };
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL0NvZGVCbG9jay9zdHlsZWQtY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QnlCIiwiZmlsZSI6Ii4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL0NvZGVCbG9jay9zdHlsZWQtY29tcG9uZW50cy50cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBTdHJlYW1saXQgSW5jLiAoMjAxOC0yMDIyKSBTbm93Zmxha2UgSW5jLiAoMjAyMi0yMDI0KVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuXG4vKlxuICBUaGlzIGlzIHRoZSBkZWZhdWx0IHByaXNtLmpzIHRoZW1lIGZvciBKYXZhU2NyaXB0LCBDU1MgYW5kIEhUTUwsIGJ1dFxuICBzdHJpcHBlZCBvZiBldmVyeXRoaW5nIGV4Y2VwdCBmb3IgdG9rZW4gc3R5bGluZy5cblxuICBTZWUgaHR0cHM6Ly9wcmlzbWpzLmNvbS9kb3dubG9hZC5odG1sI3RoZW1lcz1wcmlzbSZsYW5ndWFnZXM9bWFya3VwK2NzcytjbGlrZStqYXZhc2NyaXB0XG4qL1xuZXhwb3J0IGNvbnN0IFN0eWxlZFByZSA9IHN0eWxlZC5wcmUoKHsgdGhlbWUgfSkgPT4gKHtcbiAgbWFyZ2luOiAwLFxuICBwYWRkaW5nUmlnaHQ6IFwiMi43NXJlbVwiLFxuICBjb2xvcjogdGhlbWUuY29sb3JzLmJvZHlUZXh0LFxuICBib3JkZXJSYWRpdXM6IHRoZW1lLnJhZGlpLmRlZmF1bHQsXG5cbiAgLy8gVGhlIHRva2VuIGNhbiBjb25zaXN0IG9mIG1hbnkgbGluZXMsIGUuZy4gYSB0cmlwbGUtcXVvdGUgc3RyaW5nLCBzb1xuICAvLyB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSBjb2xvciBpcyBub3Qgb3ZlcndyaXR0ZW4uXG4gIFwiLmNvbW1lbnQubGluZW51bWJlclwiOiB7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5mYWRlZFRleHQ0MCxcbiAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLnR3b1NtLFxuXG4gICAgLy8gT3ZlcnJpZGUgdGhlIGRlZmF1bHQgdG9rZW4ncyBtaW4td2lkdGgsIHRvIGVuc3VyZSBpdCBmaXRzIDMtZGlnaXQgbGluZXNcbiAgICBtaW5XaWR0aDogYCR7dGhlbWUuc3BhY2luZy50aHJlZVhMfSAhaW1wb3J0YW50YCxcbiAgfSxcblxuICBcIi50b2tlbi5jb21tZW50LCAudG9rZW4ucHJvbG9nLCAudG9rZW4uZG9jdHlwZSwgLnRva2VuLmNkYXRhXCI6IHtcbiAgICBjb2xvcjogXCJzbGF0ZWdyYXlcIixcbiAgfSxcblxuICBcIi50b2tlbi5wdW5jdHVhdGlvblwiOiB7XG4gICAgY29sb3I6IFwiIzk5OVwiLFxuICB9LFxuXG4gIFwiLm5hbWVzcGFjZVwiOiB7XG4gICAgb3BhY2l0eTogMC43LFxuICB9LFxuXG4gIFwiLnRva2VuLmF0dHItbmFtZSwgLnRva2VuLnByb3BlcnR5LCAudG9rZW4udmFyaWFibGVcIjoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMubGlnaHRCbHVlODAsXG4gIH0sXG5cbiAgXCIudG9rZW4uYm9vbGVhbiwgLnRva2VuLmNvbnN0YW50LCAudG9rZW4uc3ltYm9sXCI6IHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLmdyZWVuNzAsXG4gIH0sXG5cbiAgXCIudG9rZW4ubnVtYmVyLCAudG9rZW4ucmVnZXhcIjoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmx1ZUdyZWVuODAsXG4gIH0sXG5cbiAgXCIudG9rZW4uc3RyaW5nLCAudG9rZW4uY2hhciwgLnRva2VuLmF0dHItdmFsdWVcIjoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JlZW44MCxcbiAgfSxcblxuICBcIi50b2tlbi5vcGVyYXRvciwgLnRva2VuLmVudGl0eVwiOiB7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5vcmFuZ2U5MCxcbiAgfSxcblxuICBcIi50b2tlbi51cmxcIjoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMucHVycGxlODAsXG4gIH0sXG5cbiAgXCIudG9rZW4uZGVjb3JhdG9yLCAudG9rZW4uYXRydWxlXCI6IHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLm9yYW5nZTkwLFxuICB9LFxuXG4gIFwiLnRva2VuLmtleXdvcmQsIC50b2tlbi50YWdcIjoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmx1ZTcwLFxuICB9LFxuXG4gIFwiLnRva2VuLmZ1bmN0aW9uLCAudG9rZW4uY2xhc3MtbmFtZSwgLnRva2VuLnNlbGVjdG9yXCI6IHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLmJsdWU3MCxcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgfSxcblxuICBcIi50b2tlbi5pbXBvcnRhbnRcIjoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMucmVkNzAsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gIH0sXG5cbiAgXCIudG9rZW4uY29tbWVudFwiOiB7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ncmF5NzAsXG4gICAgZm9udFN0eWxlOiBcIml0YWxpY1wiLFxuICB9LFxuXG4gIFwiLnRva2VuLml0YWxpY1wiOiB7XG4gICAgZm9udFN0eWxlOiBcIml0YWxpY1wiLFxuICB9LFxuXG4gIFwiLnRva2VuLmVudGl0eVwiOiB7XG4gICAgY3Vyc29yOiBcImhlbHBcIixcbiAgfSxcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkQ29weUJ1dHRvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4gKHtcbiAgb3BhY2l0eTogMCxcbiAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZy5zbX0gJHt0aGVtZS5zcGFjaW5nLnNtfSAwIDBgLFxuICB0b3A6IDAsXG4gIHJpZ2h0OiAwLFxuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIGhlaWdodDogXCIxMDAlXCIsXG4gIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnRyYW5zcGFyZW50LFxuICB6SW5kZXg6IHRoZW1lLnpJbmRpY2VzLnNpZGViYXIgKyAxLFxuICBkaXNwbGF5OiBcImZsZXhcIixcbiAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIixcbiAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXG4gIHRyYW5zaXRpb246IFwib3BhY2l0eSAzMDBtcyAxNTBtc1wiLFxuICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcbn0pKVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlZENvZGVCbG9ja1Byb3BzIHtcbiAgLyoqXG4gICAqIFRoZSBjb2RlLWJsb2NrIGJlaGF2ZXMgYSBiaXQgZGlmZmVyZW50bHkgaWYgaXQgaXNcbiAgICogdXNlZCBpbnNpZGUgbWFya2Rvd24uXG4gICAqL1xuICBpc01hcmtkb3duOiBib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRDb2RlQmxvY2sgPSBzdHlsZWQuZGl2PFN0eWxlZENvZGVCbG9ja1Byb3BzPihcbiAgKHsgdGhlbWUsIGlzTWFya2Rvd24gfSkgPT4gKHtcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcubm9uZSxcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy5ub25lLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy5ub25lLFxuICAgIG1hcmdpbkJvdHRvbTogaXNNYXJrZG93biA/IHRoZW1lLnNwYWNpbmcubGcgOiB1bmRlZmluZWQsXG5cbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgW2Ake1N0eWxlZENvcHlCdXR0b25Db250YWluZXJ9YF06IHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbilcblxuZXhwb3J0IGNvbnN0IFN0eWxlZENvcHlCdXR0b24gPSBzdHlsZWQuYnV0dG9uKCh7IHRoZW1lIH0pID0+ICh7XG4gIHBvaW50ZXJFdmVudHM6IFwiYXV0b1wiLFxuICBoZWlnaHQ6IFwiMi41cmVtXCIsXG4gIHBhZGRpbmc6IDAsXG4gIHdpZHRoOiBcIjIuNXJlbVwiLFxuICBib3JkZXI6IFwibm9uZVwiLFxuICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy50cmFuc3BhcmVudCxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy5mYWRlZFRleHQ2MCxcbiAgYm9yZGVyUmFkaXVzOiB0aGVtZS5yYWRpaS54bCxcbiAgdHJhbnNmb3JtOiBcInNjYWxlKDApXCIsXG5cbiAgW2Ake1N0eWxlZENvZGVCbG9ja306aG92ZXIgJiwgJjphY3RpdmUsICY6Zm9jdXMsICY6aG92ZXJgXToge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNmb3JtOiBcInNjYWxlKDEpXCIsXG4gICAgb3V0bGluZTogXCJub25lXCIsXG4gICAgdHJhbnNpdGlvbjogXCJub25lXCIsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ib2R5VGV4dCxcbiAgfSxcbn0pKVxuIl19 */");
export const StyledCopyButtonContainer = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "e1ycw9pz2"
} : {
  target: "e1ycw9pz2",
  label: "StyledCopyButtonContainer"
})(_ref2 => {
  let {
    theme
  } = _ref2;
  return {
    opacity: 0,
    padding: "".concat(theme.spacing.sm, " ").concat(theme.spacing.sm, " 0 0"),
    top: 0,
    right: 0,
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: theme.colors.transparent,
    zIndex: theme.zIndices.sidebar + 1,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    transition: "opacity 300ms 150ms",
    pointerEvents: "none"
  };
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL0NvZGVCbG9jay9zdHlsZWQtY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0R3lDIiwiZmlsZSI6Ii4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL0NvZGVCbG9jay9zdHlsZWQtY29tcG9uZW50cy50cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBTdHJlYW1saXQgSW5jLiAoMjAxOC0yMDIyKSBTbm93Zmxha2UgSW5jLiAoMjAyMi0yMDI0KVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuXG4vKlxuICBUaGlzIGlzIHRoZSBkZWZhdWx0IHByaXNtLmpzIHRoZW1lIGZvciBKYXZhU2NyaXB0LCBDU1MgYW5kIEhUTUwsIGJ1dFxuICBzdHJpcHBlZCBvZiBldmVyeXRoaW5nIGV4Y2VwdCBmb3IgdG9rZW4gc3R5bGluZy5cblxuICBTZWUgaHR0cHM6Ly9wcmlzbWpzLmNvbS9kb3dubG9hZC5odG1sI3RoZW1lcz1wcmlzbSZsYW5ndWFnZXM9bWFya3VwK2NzcytjbGlrZStqYXZhc2NyaXB0XG4qL1xuZXhwb3J0IGNvbnN0IFN0eWxlZFByZSA9IHN0eWxlZC5wcmUoKHsgdGhlbWUgfSkgPT4gKHtcbiAgbWFyZ2luOiAwLFxuICBwYWRkaW5nUmlnaHQ6IFwiMi43NXJlbVwiLFxuICBjb2xvcjogdGhlbWUuY29sb3JzLmJvZHlUZXh0LFxuICBib3JkZXJSYWRpdXM6IHRoZW1lLnJhZGlpLmRlZmF1bHQsXG5cbiAgLy8gVGhlIHRva2VuIGNhbiBjb25zaXN0IG9mIG1hbnkgbGluZXMsIGUuZy4gYSB0cmlwbGUtcXVvdGUgc3RyaW5nLCBzb1xuICAvLyB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSBjb2xvciBpcyBub3Qgb3ZlcndyaXR0ZW4uXG4gIFwiLmNvbW1lbnQubGluZW51bWJlclwiOiB7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5mYWRlZFRleHQ0MCxcbiAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLnR3b1NtLFxuXG4gICAgLy8gT3ZlcnJpZGUgdGhlIGRlZmF1bHQgdG9rZW4ncyBtaW4td2lkdGgsIHRvIGVuc3VyZSBpdCBmaXRzIDMtZGlnaXQgbGluZXNcbiAgICBtaW5XaWR0aDogYCR7dGhlbWUuc3BhY2luZy50aHJlZVhMfSAhaW1wb3J0YW50YCxcbiAgfSxcblxuICBcIi50b2tlbi5jb21tZW50LCAudG9rZW4ucHJvbG9nLCAudG9rZW4uZG9jdHlwZSwgLnRva2VuLmNkYXRhXCI6IHtcbiAgICBjb2xvcjogXCJzbGF0ZWdyYXlcIixcbiAgfSxcblxuICBcIi50b2tlbi5wdW5jdHVhdGlvblwiOiB7XG4gICAgY29sb3I6IFwiIzk5OVwiLFxuICB9LFxuXG4gIFwiLm5hbWVzcGFjZVwiOiB7XG4gICAgb3BhY2l0eTogMC43LFxuICB9LFxuXG4gIFwiLnRva2VuLmF0dHItbmFtZSwgLnRva2VuLnByb3BlcnR5LCAudG9rZW4udmFyaWFibGVcIjoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMubGlnaHRCbHVlODAsXG4gIH0sXG5cbiAgXCIudG9rZW4uYm9vbGVhbiwgLnRva2VuLmNvbnN0YW50LCAudG9rZW4uc3ltYm9sXCI6IHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLmdyZWVuNzAsXG4gIH0sXG5cbiAgXCIudG9rZW4ubnVtYmVyLCAudG9rZW4ucmVnZXhcIjoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmx1ZUdyZWVuODAsXG4gIH0sXG5cbiAgXCIudG9rZW4uc3RyaW5nLCAudG9rZW4uY2hhciwgLnRva2VuLmF0dHItdmFsdWVcIjoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JlZW44MCxcbiAgfSxcblxuICBcIi50b2tlbi5vcGVyYXRvciwgLnRva2VuLmVudGl0eVwiOiB7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5vcmFuZ2U5MCxcbiAgfSxcblxuICBcIi50b2tlbi51cmxcIjoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMucHVycGxlODAsXG4gIH0sXG5cbiAgXCIudG9rZW4uZGVjb3JhdG9yLCAudG9rZW4uYXRydWxlXCI6IHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLm9yYW5nZTkwLFxuICB9LFxuXG4gIFwiLnRva2VuLmtleXdvcmQsIC50b2tlbi50YWdcIjoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmx1ZTcwLFxuICB9LFxuXG4gIFwiLnRva2VuLmZ1bmN0aW9uLCAudG9rZW4uY2xhc3MtbmFtZSwgLnRva2VuLnNlbGVjdG9yXCI6IHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLmJsdWU3MCxcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgfSxcblxuICBcIi50b2tlbi5pbXBvcnRhbnRcIjoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMucmVkNzAsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gIH0sXG5cbiAgXCIudG9rZW4uY29tbWVudFwiOiB7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ncmF5NzAsXG4gICAgZm9udFN0eWxlOiBcIml0YWxpY1wiLFxuICB9LFxuXG4gIFwiLnRva2VuLml0YWxpY1wiOiB7XG4gICAgZm9udFN0eWxlOiBcIml0YWxpY1wiLFxuICB9LFxuXG4gIFwiLnRva2VuLmVudGl0eVwiOiB7XG4gICAgY3Vyc29yOiBcImhlbHBcIixcbiAgfSxcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkQ29weUJ1dHRvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4gKHtcbiAgb3BhY2l0eTogMCxcbiAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZy5zbX0gJHt0aGVtZS5zcGFjaW5nLnNtfSAwIDBgLFxuICB0b3A6IDAsXG4gIHJpZ2h0OiAwLFxuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIGhlaWdodDogXCIxMDAlXCIsXG4gIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnRyYW5zcGFyZW50LFxuICB6SW5kZXg6IHRoZW1lLnpJbmRpY2VzLnNpZGViYXIgKyAxLFxuICBkaXNwbGF5OiBcImZsZXhcIixcbiAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIixcbiAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXG4gIHRyYW5zaXRpb246IFwib3BhY2l0eSAzMDBtcyAxNTBtc1wiLFxuICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcbn0pKVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlZENvZGVCbG9ja1Byb3BzIHtcbiAgLyoqXG4gICAqIFRoZSBjb2RlLWJsb2NrIGJlaGF2ZXMgYSBiaXQgZGlmZmVyZW50bHkgaWYgaXQgaXNcbiAgICogdXNlZCBpbnNpZGUgbWFya2Rvd24uXG4gICAqL1xuICBpc01hcmtkb3duOiBib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRDb2RlQmxvY2sgPSBzdHlsZWQuZGl2PFN0eWxlZENvZGVCbG9ja1Byb3BzPihcbiAgKHsgdGhlbWUsIGlzTWFya2Rvd24gfSkgPT4gKHtcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcubm9uZSxcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy5ub25lLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy5ub25lLFxuICAgIG1hcmdpbkJvdHRvbTogaXNNYXJrZG93biA/IHRoZW1lLnNwYWNpbmcubGcgOiB1bmRlZmluZWQsXG5cbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgW2Ake1N0eWxlZENvcHlCdXR0b25Db250YWluZXJ9YF06IHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbilcblxuZXhwb3J0IGNvbnN0IFN0eWxlZENvcHlCdXR0b24gPSBzdHlsZWQuYnV0dG9uKCh7IHRoZW1lIH0pID0+ICh7XG4gIHBvaW50ZXJFdmVudHM6IFwiYXV0b1wiLFxuICBoZWlnaHQ6IFwiMi41cmVtXCIsXG4gIHBhZGRpbmc6IDAsXG4gIHdpZHRoOiBcIjIuNXJlbVwiLFxuICBib3JkZXI6IFwibm9uZVwiLFxuICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy50cmFuc3BhcmVudCxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy5mYWRlZFRleHQ2MCxcbiAgYm9yZGVyUmFkaXVzOiB0aGVtZS5yYWRpaS54bCxcbiAgdHJhbnNmb3JtOiBcInNjYWxlKDApXCIsXG5cbiAgW2Ake1N0eWxlZENvZGVCbG9ja306aG92ZXIgJiwgJjphY3RpdmUsICY6Zm9jdXMsICY6aG92ZXJgXToge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNmb3JtOiBcInNjYWxlKDEpXCIsXG4gICAgb3V0bGluZTogXCJub25lXCIsXG4gICAgdHJhbnNpdGlvbjogXCJub25lXCIsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ib2R5VGV4dCxcbiAgfSxcbn0pKVxuIl19 */");
export const StyledCodeBlock = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "e1ycw9pz1"
} : {
  target: "e1ycw9pz1",
  label: "StyledCodeBlock"
})(_ref3 => {
  let {
    theme,
    isMarkdown
  } = _ref3;
  return {
    position: "relative",
    marginLeft: theme.spacing.none,
    marginRight: theme.spacing.none,
    marginTop: theme.spacing.none,
    marginBottom: isMarkdown ? theme.spacing.lg : undefined,
    "&:hover": {
      ["".concat(StyledCopyButtonContainer)]: {
        opacity: 1
      }
    }
  };
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL0NvZGVCbG9jay9zdHlsZWQtY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxSStCIiwiZmlsZSI6Ii4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL0NvZGVCbG9jay9zdHlsZWQtY29tcG9uZW50cy50cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBTdHJlYW1saXQgSW5jLiAoMjAxOC0yMDIyKSBTbm93Zmxha2UgSW5jLiAoMjAyMi0yMDI0KVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuXG4vKlxuICBUaGlzIGlzIHRoZSBkZWZhdWx0IHByaXNtLmpzIHRoZW1lIGZvciBKYXZhU2NyaXB0LCBDU1MgYW5kIEhUTUwsIGJ1dFxuICBzdHJpcHBlZCBvZiBldmVyeXRoaW5nIGV4Y2VwdCBmb3IgdG9rZW4gc3R5bGluZy5cblxuICBTZWUgaHR0cHM6Ly9wcmlzbWpzLmNvbS9kb3dubG9hZC5odG1sI3RoZW1lcz1wcmlzbSZsYW5ndWFnZXM9bWFya3VwK2NzcytjbGlrZStqYXZhc2NyaXB0XG4qL1xuZXhwb3J0IGNvbnN0IFN0eWxlZFByZSA9IHN0eWxlZC5wcmUoKHsgdGhlbWUgfSkgPT4gKHtcbiAgbWFyZ2luOiAwLFxuICBwYWRkaW5nUmlnaHQ6IFwiMi43NXJlbVwiLFxuICBjb2xvcjogdGhlbWUuY29sb3JzLmJvZHlUZXh0LFxuICBib3JkZXJSYWRpdXM6IHRoZW1lLnJhZGlpLmRlZmF1bHQsXG5cbiAgLy8gVGhlIHRva2VuIGNhbiBjb25zaXN0IG9mIG1hbnkgbGluZXMsIGUuZy4gYSB0cmlwbGUtcXVvdGUgc3RyaW5nLCBzb1xuICAvLyB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSBjb2xvciBpcyBub3Qgb3ZlcndyaXR0ZW4uXG4gIFwiLmNvbW1lbnQubGluZW51bWJlclwiOiB7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5mYWRlZFRleHQ0MCxcbiAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLnR3b1NtLFxuXG4gICAgLy8gT3ZlcnJpZGUgdGhlIGRlZmF1bHQgdG9rZW4ncyBtaW4td2lkdGgsIHRvIGVuc3VyZSBpdCBmaXRzIDMtZGlnaXQgbGluZXNcbiAgICBtaW5XaWR0aDogYCR7dGhlbWUuc3BhY2luZy50aHJlZVhMfSAhaW1wb3J0YW50YCxcbiAgfSxcblxuICBcIi50b2tlbi5jb21tZW50LCAudG9rZW4ucHJvbG9nLCAudG9rZW4uZG9jdHlwZSwgLnRva2VuLmNkYXRhXCI6IHtcbiAgICBjb2xvcjogXCJzbGF0ZWdyYXlcIixcbiAgfSxcblxuICBcIi50b2tlbi5wdW5jdHVhdGlvblwiOiB7XG4gICAgY29sb3I6IFwiIzk5OVwiLFxuICB9LFxuXG4gIFwiLm5hbWVzcGFjZVwiOiB7XG4gICAgb3BhY2l0eTogMC43LFxuICB9LFxuXG4gIFwiLnRva2VuLmF0dHItbmFtZSwgLnRva2VuLnByb3BlcnR5LCAudG9rZW4udmFyaWFibGVcIjoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMubGlnaHRCbHVlODAsXG4gIH0sXG5cbiAgXCIudG9rZW4uYm9vbGVhbiwgLnRva2VuLmNvbnN0YW50LCAudG9rZW4uc3ltYm9sXCI6IHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLmdyZWVuNzAsXG4gIH0sXG5cbiAgXCIudG9rZW4ubnVtYmVyLCAudG9rZW4ucmVnZXhcIjoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmx1ZUdyZWVuODAsXG4gIH0sXG5cbiAgXCIudG9rZW4uc3RyaW5nLCAudG9rZW4uY2hhciwgLnRva2VuLmF0dHItdmFsdWVcIjoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JlZW44MCxcbiAgfSxcblxuICBcIi50b2tlbi5vcGVyYXRvciwgLnRva2VuLmVudGl0eVwiOiB7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5vcmFuZ2U5MCxcbiAgfSxcblxuICBcIi50b2tlbi51cmxcIjoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMucHVycGxlODAsXG4gIH0sXG5cbiAgXCIudG9rZW4uZGVjb3JhdG9yLCAudG9rZW4uYXRydWxlXCI6IHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLm9yYW5nZTkwLFxuICB9LFxuXG4gIFwiLnRva2VuLmtleXdvcmQsIC50b2tlbi50YWdcIjoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmx1ZTcwLFxuICB9LFxuXG4gIFwiLnRva2VuLmZ1bmN0aW9uLCAudG9rZW4uY2xhc3MtbmFtZSwgLnRva2VuLnNlbGVjdG9yXCI6IHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLmJsdWU3MCxcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgfSxcblxuICBcIi50b2tlbi5pbXBvcnRhbnRcIjoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMucmVkNzAsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gIH0sXG5cbiAgXCIudG9rZW4uY29tbWVudFwiOiB7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ncmF5NzAsXG4gICAgZm9udFN0eWxlOiBcIml0YWxpY1wiLFxuICB9LFxuXG4gIFwiLnRva2VuLml0YWxpY1wiOiB7XG4gICAgZm9udFN0eWxlOiBcIml0YWxpY1wiLFxuICB9LFxuXG4gIFwiLnRva2VuLmVudGl0eVwiOiB7XG4gICAgY3Vyc29yOiBcImhlbHBcIixcbiAgfSxcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkQ29weUJ1dHRvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4gKHtcbiAgb3BhY2l0eTogMCxcbiAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZy5zbX0gJHt0aGVtZS5zcGFjaW5nLnNtfSAwIDBgLFxuICB0b3A6IDAsXG4gIHJpZ2h0OiAwLFxuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIGhlaWdodDogXCIxMDAlXCIsXG4gIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnRyYW5zcGFyZW50LFxuICB6SW5kZXg6IHRoZW1lLnpJbmRpY2VzLnNpZGViYXIgKyAxLFxuICBkaXNwbGF5OiBcImZsZXhcIixcbiAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIixcbiAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXG4gIHRyYW5zaXRpb246IFwib3BhY2l0eSAzMDBtcyAxNTBtc1wiLFxuICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcbn0pKVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlZENvZGVCbG9ja1Byb3BzIHtcbiAgLyoqXG4gICAqIFRoZSBjb2RlLWJsb2NrIGJlaGF2ZXMgYSBiaXQgZGlmZmVyZW50bHkgaWYgaXQgaXNcbiAgICogdXNlZCBpbnNpZGUgbWFya2Rvd24uXG4gICAqL1xuICBpc01hcmtkb3duOiBib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRDb2RlQmxvY2sgPSBzdHlsZWQuZGl2PFN0eWxlZENvZGVCbG9ja1Byb3BzPihcbiAgKHsgdGhlbWUsIGlzTWFya2Rvd24gfSkgPT4gKHtcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcubm9uZSxcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy5ub25lLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy5ub25lLFxuICAgIG1hcmdpbkJvdHRvbTogaXNNYXJrZG93biA/IHRoZW1lLnNwYWNpbmcubGcgOiB1bmRlZmluZWQsXG5cbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgW2Ake1N0eWxlZENvcHlCdXR0b25Db250YWluZXJ9YF06IHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbilcblxuZXhwb3J0IGNvbnN0IFN0eWxlZENvcHlCdXR0b24gPSBzdHlsZWQuYnV0dG9uKCh7IHRoZW1lIH0pID0+ICh7XG4gIHBvaW50ZXJFdmVudHM6IFwiYXV0b1wiLFxuICBoZWlnaHQ6IFwiMi41cmVtXCIsXG4gIHBhZGRpbmc6IDAsXG4gIHdpZHRoOiBcIjIuNXJlbVwiLFxuICBib3JkZXI6IFwibm9uZVwiLFxuICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy50cmFuc3BhcmVudCxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy5mYWRlZFRleHQ2MCxcbiAgYm9yZGVyUmFkaXVzOiB0aGVtZS5yYWRpaS54bCxcbiAgdHJhbnNmb3JtOiBcInNjYWxlKDApXCIsXG5cbiAgW2Ake1N0eWxlZENvZGVCbG9ja306aG92ZXIgJiwgJjphY3RpdmUsICY6Zm9jdXMsICY6aG92ZXJgXToge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNmb3JtOiBcInNjYWxlKDEpXCIsXG4gICAgb3V0bGluZTogXCJub25lXCIsXG4gICAgdHJhbnNpdGlvbjogXCJub25lXCIsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ib2R5VGV4dCxcbiAgfSxcbn0pKVxuIl19 */");
export const StyledCopyButton = /*#__PURE__*/_styled("button", process.env.NODE_ENV === "production" ? {
  target: "e1ycw9pz0"
} : {
  target: "e1ycw9pz0",
  label: "StyledCopyButton"
})(_ref4 => {
  let {
    theme
  } = _ref4;
  return {
    pointerEvents: "auto",
    height: "2.5rem",
    padding: 0,
    width: "2.5rem",
    border: "none",
    backgroundColor: theme.colors.transparent,
    color: theme.colors.fadedText60,
    borderRadius: theme.radii.xl,
    transform: "scale(0)",
    ["".concat(StyledCodeBlock, ":hover &, &:active, &:focus, &:hover")]: {
      opacity: 1,
      transform: "scale(1)",
      outline: "none",
      transition: "none",
      color: theme.colors.bodyText
    }
  };
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL0NvZGVCbG9jay9zdHlsZWQtY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxSmdDIiwiZmlsZSI6Ii4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL0NvZGVCbG9jay9zdHlsZWQtY29tcG9uZW50cy50cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBTdHJlYW1saXQgSW5jLiAoMjAxOC0yMDIyKSBTbm93Zmxha2UgSW5jLiAoMjAyMi0yMDI0KVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuXG4vKlxuICBUaGlzIGlzIHRoZSBkZWZhdWx0IHByaXNtLmpzIHRoZW1lIGZvciBKYXZhU2NyaXB0LCBDU1MgYW5kIEhUTUwsIGJ1dFxuICBzdHJpcHBlZCBvZiBldmVyeXRoaW5nIGV4Y2VwdCBmb3IgdG9rZW4gc3R5bGluZy5cblxuICBTZWUgaHR0cHM6Ly9wcmlzbWpzLmNvbS9kb3dubG9hZC5odG1sI3RoZW1lcz1wcmlzbSZsYW5ndWFnZXM9bWFya3VwK2NzcytjbGlrZStqYXZhc2NyaXB0XG4qL1xuZXhwb3J0IGNvbnN0IFN0eWxlZFByZSA9IHN0eWxlZC5wcmUoKHsgdGhlbWUgfSkgPT4gKHtcbiAgbWFyZ2luOiAwLFxuICBwYWRkaW5nUmlnaHQ6IFwiMi43NXJlbVwiLFxuICBjb2xvcjogdGhlbWUuY29sb3JzLmJvZHlUZXh0LFxuICBib3JkZXJSYWRpdXM6IHRoZW1lLnJhZGlpLmRlZmF1bHQsXG5cbiAgLy8gVGhlIHRva2VuIGNhbiBjb25zaXN0IG9mIG1hbnkgbGluZXMsIGUuZy4gYSB0cmlwbGUtcXVvdGUgc3RyaW5nLCBzb1xuICAvLyB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSBjb2xvciBpcyBub3Qgb3ZlcndyaXR0ZW4uXG4gIFwiLmNvbW1lbnQubGluZW51bWJlclwiOiB7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5mYWRlZFRleHQ0MCxcbiAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLnR3b1NtLFxuXG4gICAgLy8gT3ZlcnJpZGUgdGhlIGRlZmF1bHQgdG9rZW4ncyBtaW4td2lkdGgsIHRvIGVuc3VyZSBpdCBmaXRzIDMtZGlnaXQgbGluZXNcbiAgICBtaW5XaWR0aDogYCR7dGhlbWUuc3BhY2luZy50aHJlZVhMfSAhaW1wb3J0YW50YCxcbiAgfSxcblxuICBcIi50b2tlbi5jb21tZW50LCAudG9rZW4ucHJvbG9nLCAudG9rZW4uZG9jdHlwZSwgLnRva2VuLmNkYXRhXCI6IHtcbiAgICBjb2xvcjogXCJzbGF0ZWdyYXlcIixcbiAgfSxcblxuICBcIi50b2tlbi5wdW5jdHVhdGlvblwiOiB7XG4gICAgY29sb3I6IFwiIzk5OVwiLFxuICB9LFxuXG4gIFwiLm5hbWVzcGFjZVwiOiB7XG4gICAgb3BhY2l0eTogMC43LFxuICB9LFxuXG4gIFwiLnRva2VuLmF0dHItbmFtZSwgLnRva2VuLnByb3BlcnR5LCAudG9rZW4udmFyaWFibGVcIjoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMubGlnaHRCbHVlODAsXG4gIH0sXG5cbiAgXCIudG9rZW4uYm9vbGVhbiwgLnRva2VuLmNvbnN0YW50LCAudG9rZW4uc3ltYm9sXCI6IHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLmdyZWVuNzAsXG4gIH0sXG5cbiAgXCIudG9rZW4ubnVtYmVyLCAudG9rZW4ucmVnZXhcIjoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmx1ZUdyZWVuODAsXG4gIH0sXG5cbiAgXCIudG9rZW4uc3RyaW5nLCAudG9rZW4uY2hhciwgLnRva2VuLmF0dHItdmFsdWVcIjoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JlZW44MCxcbiAgfSxcblxuICBcIi50b2tlbi5vcGVyYXRvciwgLnRva2VuLmVudGl0eVwiOiB7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5vcmFuZ2U5MCxcbiAgfSxcblxuICBcIi50b2tlbi51cmxcIjoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMucHVycGxlODAsXG4gIH0sXG5cbiAgXCIudG9rZW4uZGVjb3JhdG9yLCAudG9rZW4uYXRydWxlXCI6IHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLm9yYW5nZTkwLFxuICB9LFxuXG4gIFwiLnRva2VuLmtleXdvcmQsIC50b2tlbi50YWdcIjoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmx1ZTcwLFxuICB9LFxuXG4gIFwiLnRva2VuLmZ1bmN0aW9uLCAudG9rZW4uY2xhc3MtbmFtZSwgLnRva2VuLnNlbGVjdG9yXCI6IHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLmJsdWU3MCxcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgfSxcblxuICBcIi50b2tlbi5pbXBvcnRhbnRcIjoge1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMucmVkNzAsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gIH0sXG5cbiAgXCIudG9rZW4uY29tbWVudFwiOiB7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ncmF5NzAsXG4gICAgZm9udFN0eWxlOiBcIml0YWxpY1wiLFxuICB9LFxuXG4gIFwiLnRva2VuLml0YWxpY1wiOiB7XG4gICAgZm9udFN0eWxlOiBcIml0YWxpY1wiLFxuICB9LFxuXG4gIFwiLnRva2VuLmVudGl0eVwiOiB7XG4gICAgY3Vyc29yOiBcImhlbHBcIixcbiAgfSxcbn0pKVxuXG5leHBvcnQgY29uc3QgU3R5bGVkQ29weUJ1dHRvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4gKHtcbiAgb3BhY2l0eTogMCxcbiAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZy5zbX0gJHt0aGVtZS5zcGFjaW5nLnNtfSAwIDBgLFxuICB0b3A6IDAsXG4gIHJpZ2h0OiAwLFxuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIGhlaWdodDogXCIxMDAlXCIsXG4gIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLnRyYW5zcGFyZW50LFxuICB6SW5kZXg6IHRoZW1lLnpJbmRpY2VzLnNpZGViYXIgKyAxLFxuICBkaXNwbGF5OiBcImZsZXhcIixcbiAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIixcbiAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXG4gIHRyYW5zaXRpb246IFwib3BhY2l0eSAzMDBtcyAxNTBtc1wiLFxuICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcbn0pKVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlZENvZGVCbG9ja1Byb3BzIHtcbiAgLyoqXG4gICAqIFRoZSBjb2RlLWJsb2NrIGJlaGF2ZXMgYSBiaXQgZGlmZmVyZW50bHkgaWYgaXQgaXNcbiAgICogdXNlZCBpbnNpZGUgbWFya2Rvd24uXG4gICAqL1xuICBpc01hcmtkb3duOiBib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRDb2RlQmxvY2sgPSBzdHlsZWQuZGl2PFN0eWxlZENvZGVCbG9ja1Byb3BzPihcbiAgKHsgdGhlbWUsIGlzTWFya2Rvd24gfSkgPT4gKHtcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcubm9uZSxcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy5ub25lLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy5ub25lLFxuICAgIG1hcmdpbkJvdHRvbTogaXNNYXJrZG93biA/IHRoZW1lLnNwYWNpbmcubGcgOiB1bmRlZmluZWQsXG5cbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgW2Ake1N0eWxlZENvcHlCdXR0b25Db250YWluZXJ9YF06IHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbilcblxuZXhwb3J0IGNvbnN0IFN0eWxlZENvcHlCdXR0b24gPSBzdHlsZWQuYnV0dG9uKCh7IHRoZW1lIH0pID0+ICh7XG4gIHBvaW50ZXJFdmVudHM6IFwiYXV0b1wiLFxuICBoZWlnaHQ6IFwiMi41cmVtXCIsXG4gIHBhZGRpbmc6IDAsXG4gIHdpZHRoOiBcIjIuNXJlbVwiLFxuICBib3JkZXI6IFwibm9uZVwiLFxuICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy50cmFuc3BhcmVudCxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy5mYWRlZFRleHQ2MCxcbiAgYm9yZGVyUmFkaXVzOiB0aGVtZS5yYWRpaS54bCxcbiAgdHJhbnNmb3JtOiBcInNjYWxlKDApXCIsXG5cbiAgW2Ake1N0eWxlZENvZGVCbG9ja306aG92ZXIgJiwgJjphY3RpdmUsICY6Zm9jdXMsICY6aG92ZXJgXToge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNmb3JtOiBcInNjYWxlKDEpXCIsXG4gICAgb3V0bGluZTogXCJub25lXCIsXG4gICAgdHJhbnNpdGlvbjogXCJub25lXCIsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ib2R5VGV4dCxcbiAgfSxcbn0pKVxuIl19 */");
//# sourceMappingURL=styled-components.js.map