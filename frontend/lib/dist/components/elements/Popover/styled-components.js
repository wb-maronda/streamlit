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

export const StyledPopoverButtonIcon = /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
  target: "e1pbrot50"
} : {
  target: "e1pbrot50",
  label: "StyledPopoverButtonIcon"
})(_ref => {
  let {
    theme
  } = _ref;
  return {
    marginLeft: theme.spacing.threeXSPx,
    // This is a hacky way to offset the 5px "padding" of the expansion svg
    // icon. Reason is that we want to use the same padding to the right side
    // as the text on the left side. The alternative would be to overwrite the
    // right padding of the button, which would also be hacky and involve slightly
    // more logic.
    // If the padding of the icon changes, this value needs to be adjusted.
    // Also, if we want to apply the same adjustment for other elements, we should
    // consider putting this into a theme variable or creating a shared styled component.
    marginRight: "-5px"
  };
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL1BvcG92ZXIvc3R5bGVkLWNvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0J1QyIsImZpbGUiOiIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9lbGVtZW50cy9Qb3BvdmVyL3N0eWxlZC1jb21wb25lbnRzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyLTIwMjQpXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRQb3BvdmVyQnV0dG9uSWNvbiA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4gKHtcbiAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZy50aHJlZVhTUHgsXG4gIC8vIFRoaXMgaXMgYSBoYWNreSB3YXkgdG8gb2Zmc2V0IHRoZSA1cHggXCJwYWRkaW5nXCIgb2YgdGhlIGV4cGFuc2lvbiBzdmdcbiAgLy8gaWNvbi4gUmVhc29uIGlzIHRoYXQgd2Ugd2FudCB0byB1c2UgdGhlIHNhbWUgcGFkZGluZyB0byB0aGUgcmlnaHQgc2lkZVxuICAvLyBhcyB0aGUgdGV4dCBvbiB0aGUgbGVmdCBzaWRlLiBUaGUgYWx0ZXJuYXRpdmUgd291bGQgYmUgdG8gb3ZlcndyaXRlIHRoZVxuICAvLyByaWdodCBwYWRkaW5nIG9mIHRoZSBidXR0b24sIHdoaWNoIHdvdWxkIGFsc28gYmUgaGFja3kgYW5kIGludm9sdmUgc2xpZ2h0bHlcbiAgLy8gbW9yZSBsb2dpYy5cbiAgLy8gSWYgdGhlIHBhZGRpbmcgb2YgdGhlIGljb24gY2hhbmdlcywgdGhpcyB2YWx1ZSBuZWVkcyB0byBiZSBhZGp1c3RlZC5cbiAgLy8gQWxzbywgaWYgd2Ugd2FudCB0byBhcHBseSB0aGUgc2FtZSBhZGp1c3RtZW50IGZvciBvdGhlciBlbGVtZW50cywgd2Ugc2hvdWxkXG4gIC8vIGNvbnNpZGVyIHB1dHRpbmcgdGhpcyBpbnRvIGEgdGhlbWUgdmFyaWFibGUgb3IgY3JlYXRpbmcgYSBzaGFyZWQgc3R5bGVkIGNvbXBvbmVudC5cbiAgbWFyZ2luUmlnaHQ6IFwiLTVweFwiLFxufSkpXG4iXX0= */");
//# sourceMappingURL=styled-components.js.map