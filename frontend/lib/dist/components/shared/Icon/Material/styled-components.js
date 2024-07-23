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

import { computeSpacingStyle } from "../../../../theme";
export const StyledMaterialIcon = /*#__PURE__*/_styled("span", process.env.NODE_ENV === "production" ? {
  target: "e16edly10"
} : {
  target: "e16edly10",
  label: "StyledMaterialIcon"
})(_ref => {
  let {
    size,
    margin,
    padding,
    theme,
    color
  } = _ref;
  return {
    display: "inline-flex",
    alignItems: "center",
    justifyContents: "center",
    color: color,
    fontSize: theme.iconSizes[size],
    width: theme.iconSizes[size],
    height: theme.iconSizes[size],
    margin: computeSpacingStyle(margin, theme),
    padding: computeSpacingStyle(padding, theme),
    userSelect: "none",
    fontFamily: "Material Symbols Outlined",
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 1,
    letterSpacing: "normal",
    textTransform: "none",
    whiteSpace: "nowrap",
    wordWrap: "normal",
    direction: "ltr",
    fontFeatureSettings: "liga",
    MozFontFeatureSettings: "liga",
    WebkitFontFeatureSettings: "liga",
    WebkitFontSmoothing: "antialiased"
  };
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NoYXJlZC9JY29uL01hdGVyaWFsL3N0eWxlZC1jb21wb25lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCa0MiLCJmaWxlIjoiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvc2hhcmVkL0ljb24vTWF0ZXJpYWwvc3R5bGVkLWNvbXBvbmVudHMudHMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgU3RyZWFtbGl0IEluYy4gKDIwMTgtMjAyMikgU25vd2ZsYWtlIEluYy4gKDIwMjItMjAyNClcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCJcblxuaW1wb3J0IHsgSWNvblNpemUsIGNvbXB1dGVTcGFjaW5nU3R5bGUgfSBmcm9tIFwiQHN0cmVhbWxpdC9saWIvc3JjL3RoZW1lXCJcblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZWRNYXRlcmlhbEljb25Qcm9wcyB7XG4gIHNpemU6IEljb25TaXplXG4gIG1hcmdpbjogc3RyaW5nXG4gIHBhZGRpbmc6IHN0cmluZ1xuICBjb2xvcjogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRNYXRlcmlhbEljb24gPSBzdHlsZWQuc3BhbjxTdHlsZWRNYXRlcmlhbEljb25Qcm9wcz4oXG4gICh7IHNpemUsIG1hcmdpbiwgcGFkZGluZywgdGhlbWUsIGNvbG9yIH0pID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgZGlzcGxheTogXCJpbmxpbmUtZmxleFwiLFxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgIGp1c3RpZnlDb250ZW50czogXCJjZW50ZXJcIixcbiAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgIGZvbnRTaXplOiB0aGVtZS5pY29uU2l6ZXNbc2l6ZV0sXG4gICAgICB3aWR0aDogdGhlbWUuaWNvblNpemVzW3NpemVdLFxuICAgICAgaGVpZ2h0OiB0aGVtZS5pY29uU2l6ZXNbc2l6ZV0sXG4gICAgICBtYXJnaW46IGNvbXB1dGVTcGFjaW5nU3R5bGUobWFyZ2luLCB0aGVtZSksXG4gICAgICBwYWRkaW5nOiBjb21wdXRlU3BhY2luZ1N0eWxlKHBhZGRpbmcsIHRoZW1lKSxcbiAgICAgIHVzZXJTZWxlY3Q6IFwibm9uZVwiLFxuICAgICAgZm9udEZhbWlseTogXCJNYXRlcmlhbCBTeW1ib2xzIE91dGxpbmVkXCIsXG4gICAgICBmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxuICAgICAgZm9udFN0eWxlOiBcIm5vcm1hbFwiLFxuICAgICAgbGluZUhlaWdodDogMSxcbiAgICAgIGxldHRlclNwYWNpbmc6IFwibm9ybWFsXCIsXG4gICAgICB0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIixcbiAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG4gICAgICB3b3JkV3JhcDogXCJub3JtYWxcIixcbiAgICAgIGRpcmVjdGlvbjogXCJsdHJcIixcbiAgICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M6IFwibGlnYVwiLFxuICAgICAgTW96Rm9udEZlYXR1cmVTZXR0aW5nczogXCJsaWdhXCIsXG4gICAgICBXZWJraXRGb250RmVhdHVyZVNldHRpbmdzOiBcImxpZ2FcIixcbiAgICAgIFdlYmtpdEZvbnRTbW9vdGhpbmc6IFwiYW50aWFsaWFzZWRcIixcbiAgICB9XG4gIH1cbilcbiJdfQ== */");
//# sourceMappingURL=styled-components.js.map