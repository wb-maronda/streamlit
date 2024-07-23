import _styled from "@emotion/styled/base";
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
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

import { keyframes } from "@emotion/react";
const IMAGE_HEIGHT = 300;
const IMAGE_WIDTH = 121;
const POS_MIN_VW = 20;
const POS_MAX_VW = 80;
const DELAY_MAX_MS = 1000;
const moveUp = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  from {\n    transform: translateY(calc(100vh + ", "px));\n  }\n\n  to {\n    transform: translateY(0);\n  }\n"])), IMAGE_HEIGHT);
export const StyledBalloon = /*#__PURE__*/_styled("img", process.env.NODE_ENV === "production" ? {
  target: "earwcwy0"
} : {
  target: "earwcwy0",
  label: "StyledBalloon"
})(_ref => {
  let {
    theme
  } = _ref;
  return {
    position: "fixed",
    top: "".concat(-IMAGE_HEIGHT, "px"),
    marginLeft: "".concat(-IMAGE_WIDTH / 2, "px"),
    zIndex: theme.zIndices.balloons,
    left: "".concat(Math.random() * (POS_MAX_VW - POS_MIN_VW) + POS_MIN_VW, "vw"),
    animationDelay: "".concat(Math.random() * DELAY_MAX_MS, "ms"),
    height: "".concat(IMAGE_HEIGHT, "px"),
    width: "".concat(IMAGE_WIDTH, "px"),
    pointerEvents: "none",
    animationDuration: "750ms",
    animationName: moveUp,
    animationTimingFunction: "ease-in",
    animationDirection: "normal",
    animationIterationCount: 1,
    opacity: 1
  };
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL0JhbGxvb25zL3N0eWxlZC1jb21wb25lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DNkIiLCJmaWxlIjoiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvZWxlbWVudHMvQmFsbG9vbnMvc3R5bGVkLWNvbXBvbmVudHMudHMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgU3RyZWFtbGl0IEluYy4gKDIwMTgtMjAyMikgU25vd2ZsYWtlIEluYy4gKDIwMjItMjAyNClcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5cbmNvbnN0IElNQUdFX0hFSUdIVCA9IDMwMFxuY29uc3QgSU1BR0VfV0lEVEggPSAxMjFcbmNvbnN0IFBPU19NSU5fVlcgPSAyMFxuY29uc3QgUE9TX01BWF9WVyA9IDgwXG5jb25zdCBERUxBWV9NQVhfTVMgPSAxMDAwXG5cbmNvbnN0IG1vdmVVcCA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKGNhbGMoMTAwdmggKyAke0lNQUdFX0hFSUdIVH1weCkpO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgU3R5bGVkQmFsbG9vbiA9IHN0eWxlZC5pbWcoKHsgdGhlbWUgfSkgPT4gKHtcbiAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgdG9wOiBgJHstSU1BR0VfSEVJR0hUfXB4YCxcbiAgbWFyZ2luTGVmdDogYCR7LUlNQUdFX1dJRFRIIC8gMn1weGAsXG4gIHpJbmRleDogdGhlbWUuekluZGljZXMuYmFsbG9vbnMsXG4gIGxlZnQ6IGAke01hdGgucmFuZG9tKCkgKiAoUE9TX01BWF9WVyAtIFBPU19NSU5fVlcpICsgUE9TX01JTl9WV312d2AsXG4gIGFuaW1hdGlvbkRlbGF5OiBgJHtNYXRoLnJhbmRvbSgpICogREVMQVlfTUFYX01TfW1zYCxcbiAgaGVpZ2h0OiBgJHtJTUFHRV9IRUlHSFR9cHhgLFxuICB3aWR0aDogYCR7SU1BR0VfV0lEVEh9cHhgLFxuICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcblxuICBhbmltYXRpb25EdXJhdGlvbjogXCI3NTBtc1wiLFxuICBhbmltYXRpb25OYW1lOiBtb3ZlVXAsXG4gIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiBcImVhc2UtaW5cIixcbiAgYW5pbWF0aW9uRGlyZWN0aW9uOiBcIm5vcm1hbFwiLFxuICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogMSxcbiAgb3BhY2l0eTogMSxcbn0pKVxuIl19 */");
//# sourceMappingURL=styled-components.js.map