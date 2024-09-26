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

import { StyledEmojiIcon, StyledIcon } from "../../shared/Icon/styled-components";
import { StyledCodeBlock } from "../CodeBlock/styled-components";
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
    [`${StyledEmojiIcon}, ${StyledIcon}, ${StyledMaterialIcon}`]: {
      position: "relative",
      top: "2px"
    },
    [`${StyledCodeBlock} code`]: {
      paddingRight: theme.spacing.lg
    }
  };
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL0FsZXJ0RWxlbWVudC9zdHlsZWQtY29tcG9uZW50cy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJrQyIsImZpbGUiOiIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9lbGVtZW50cy9BbGVydEVsZW1lbnQvc3R5bGVkLWNvbXBvbmVudHMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyLTIwMjQpXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5cbmltcG9ydCB7XG4gIFN0eWxlZEVtb2ppSWNvbixcbiAgU3R5bGVkSWNvbixcbn0gZnJvbSBcIkBzdHJlYW1saXQvbGliL3NyYy9jb21wb25lbnRzL3NoYXJlZC9JY29uL3N0eWxlZC1jb21wb25lbnRzXCJcbmltcG9ydCB7IFN0eWxlZENvZGVCbG9jayB9IGZyb20gXCJAc3RyZWFtbGl0L2xpYi9zcmMvY29tcG9uZW50cy9lbGVtZW50cy9Db2RlQmxvY2svc3R5bGVkLWNvbXBvbmVudHNcIlxuaW1wb3J0IHsgU3R5bGVkTWF0ZXJpYWxJY29uIH0gZnJvbSBcIkBzdHJlYW1saXQvbGliL3NyYy9jb21wb25lbnRzL3NoYXJlZC9JY29uL01hdGVyaWFsL3N0eWxlZC1jb21wb25lbnRzXCJcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEFsZXJ0Q29udGVudCA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4gKHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGdhcDogdGhlbWUuc3BhY2luZy5zbSxcbiAgd2lkdGg6IFwiMTAwJVwiLFxuXG4gIFtgJHtTdHlsZWRFbW9qaUljb259LCAke1N0eWxlZEljb259LCAke1N0eWxlZE1hdGVyaWFsSWNvbn1gXToge1xuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgdG9wOiBcIjJweFwiLFxuICB9LFxuXG4gIFtgJHtTdHlsZWRDb2RlQmxvY2t9IGNvZGVgXToge1xuICAgIHBhZGRpbmdSaWdodDogdGhlbWUuc3BhY2luZy5sZyxcbiAgfSxcbn0pKVxuIl19 */");
//# sourceMappingURL=styled-components.js.map