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

import { StyledIcon, StyledEmojiIcon } from "../../shared/Icon/styled-components";
import { StyledMaterialIcon } from "../../shared/Icon/Material/styled-components";
export const StyledAlertContent = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "e1eexb540"
} : {
  target: "e1eexb540",
  label: "StyledAlertContent"
})(_ref => {
  let {
    theme
  } = _ref;
  return {
    display: "flex",
    gap: theme.spacing.sm,
    width: "100%",
    [StyledEmojiIcon]: {
      position: "relative",
      top: "2px"
    },
    [StyledIcon]: {
      position: "relative",
      top: "2px"
    },
    [StyledMaterialIcon]: {
      position: "relative",
      top: "2px"
    },
    ".stCodeBlock code": {
      paddingRight: "1rem"
    }
  };
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL0FsZXJ0RWxlbWVudC9zdHlsZWQtY29tcG9uZW50cy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJrQyIsImZpbGUiOiIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9lbGVtZW50cy9BbGVydEVsZW1lbnQvc3R5bGVkLWNvbXBvbmVudHMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyLTIwMjQpXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5pbXBvcnQge1xuICBTdHlsZWRJY29uLFxuICBTdHlsZWRFbW9qaUljb24sXG59IGZyb20gXCJAc3RyZWFtbGl0L2xpYi9zcmMvY29tcG9uZW50cy9zaGFyZWQvSWNvbi9zdHlsZWQtY29tcG9uZW50c1wiXG5pbXBvcnQgeyBTdHlsZWRNYXRlcmlhbEljb24gfSBmcm9tIFwiQHN0cmVhbWxpdC9saWIvc3JjL2NvbXBvbmVudHMvc2hhcmVkL0ljb24vTWF0ZXJpYWwvc3R5bGVkLWNvbXBvbmVudHNcIlxuXG5leHBvcnQgY29uc3QgU3R5bGVkQWxlcnRDb250ZW50ID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgZ2FwOiB0aGVtZS5zcGFjaW5nLnNtLFxuICB3aWR0aDogXCIxMDAlXCIsXG5cbiAgW1N0eWxlZEVtb2ppSWNvbiBhcyBhbnldOiB7XG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICB0b3A6IFwiMnB4XCIsXG4gIH0sXG5cbiAgW1N0eWxlZEljb24gYXMgYW55XToge1xuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgdG9wOiBcIjJweFwiLFxuICB9LFxuXG4gIFtTdHlsZWRNYXRlcmlhbEljb24gYXMgYW55XToge1xuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgdG9wOiBcIjJweFwiLFxuICB9LFxuXG4gIFwiLnN0Q29kZUJsb2NrIGNvZGVcIjoge1xuICAgIHBhZGRpbmdSaWdodDogXCIxcmVtXCIsXG4gIH0sXG59KSlcbiJdfQ== */");
//# sourceMappingURL=styled-components.js.map