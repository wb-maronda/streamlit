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
/**
 * A resizable data grid container component.
 */
export const StyledResizableContainer = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "e1w7nams0"
} : {
  target: "e1w7nams0",
  label: "StyledResizableContainer"
})(_ref => {
  let {
    hasCustomizedScrollbars,
    theme
  } = _ref;
  return {
    position: "relative",
    display: "inline-block",
    "& .stDataFrameGlideDataEditor": {
      height: "100%",
      minWidth: "100%",
      borderRadius: theme.radii.default
    },
    "& .dvn-scroller": {
      // We only want to configure scrollbar aspects for browsers that
      // don't support custom scrollbars (e.g. Firefox). Also, applying this
      // in Chrome causes the scrollbar to change to the default scrollbar style.
      ...(!hasCustomizedScrollbars && {
        scrollbarWidth: "thin"
      }),
      ["overflowX"]: "auto !important",
      ["overflowY"]: "auto !important"
    }
  };
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3dpZGdldHMvRGF0YUZyYW1lL3N0eWxlZC1jb21wb25lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCRSIsImZpbGUiOiIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy93aWRnZXRzL0RhdGFGcmFtZS9zdHlsZWQtY29tcG9uZW50cy50cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBTdHJlYW1saXQgSW5jLiAoMjAxOC0yMDIyKSBTbm93Zmxha2UgSW5jLiAoMjAyMi0yMDI0KVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlZFJlc2l6YWJsZUNvbnRhaW5lclByb3BzIHtcbiAgaGFzQ3VzdG9taXplZFNjcm9sbGJhcnM6IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBBIHJlc2l6YWJsZSBkYXRhIGdyaWQgY29udGFpbmVyIGNvbXBvbmVudC5cbiAqL1xuZXhwb3J0IGNvbnN0IFN0eWxlZFJlc2l6YWJsZUNvbnRhaW5lciA9XG4gIHN0eWxlZC5kaXY8U3R5bGVkUmVzaXphYmxlQ29udGFpbmVyUHJvcHM+KFxuICAgICh7IGhhc0N1c3RvbWl6ZWRTY3JvbGxiYXJzLCB0aGVtZSB9KSA9PiAoe1xuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG5cbiAgICAgIFwiJiAuc3REYXRhRnJhbWVHbGlkZURhdGFFZGl0b3JcIjoge1xuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICBtaW5XaWR0aDogXCIxMDAlXCIsXG4gICAgICAgIGJvcmRlclJhZGl1czogdGhlbWUucmFkaWkuZGVmYXVsdCxcbiAgICAgIH0sXG5cbiAgICAgIFwiJiAuZHZuLXNjcm9sbGVyXCI6IHtcbiAgICAgICAgLy8gV2Ugb25seSB3YW50IHRvIGNvbmZpZ3VyZSBzY3JvbGxiYXIgYXNwZWN0cyBmb3IgYnJvd3NlcnMgdGhhdFxuICAgICAgICAvLyBkb24ndCBzdXBwb3J0IGN1c3RvbSBzY3JvbGxiYXJzIChlLmcuIEZpcmVmb3gpLiBBbHNvLCBhcHBseWluZyB0aGlzXG4gICAgICAgIC8vIGluIENocm9tZSBjYXVzZXMgdGhlIHNjcm9sbGJhciB0byBjaGFuZ2UgdG8gdGhlIGRlZmF1bHQgc2Nyb2xsYmFyIHN0eWxlLlxuICAgICAgICAuLi4oIWhhc0N1c3RvbWl6ZWRTY3JvbGxiYXJzICYmIHsgc2Nyb2xsYmFyV2lkdGg6IFwidGhpblwiIH0pLFxuICAgICAgICBbXCJvdmVyZmxvd1hcIiBhcyBhbnldOiBcImF1dG8gIWltcG9ydGFudFwiLFxuICAgICAgICBbXCJvdmVyZmxvd1lcIiBhcyBhbnldOiBcImF1dG8gIWltcG9ydGFudFwiLFxuICAgICAgfSxcbiAgICB9KVxuICApXG4iXX0= */");
//# sourceMappingURL=styled-components.js.map