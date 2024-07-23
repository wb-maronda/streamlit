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
const IMAGE_HEIGHT = 150;
const IMAGE_WIDTH = 150;
const POS_MIN_VW = 10;
const POS_MAX_VW = 90;
const DELAY_MAX_MS = 4000;
const rand = function (max) {
  let min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return Math.random() * (max - min) + min;
};
const moveDown = () => keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  from {\n    transform:\n      translateY(0)\n      rotateX(", "deg)\n      rotateY(", "deg)\n      rotateZ(", "deg);\n  }\n\n  to {\n    transform:\n      translateY(calc(100vh + ", "px))\n      rotateX(0)\n      rotateY(0)\n      rotateZ(0);\n  }\n"])), rand(360), rand(360), rand(360), IMAGE_HEIGHT);
export const StyledFlake = /*#__PURE__*/_styled("img", process.env.NODE_ENV === "production" ? {
  target: "ekdfb790"
} : {
  target: "ekdfb790",
  label: "StyledFlake"
})(_ref => {
  let {
    theme
  } = _ref;
  return {
    position: "fixed",
    top: "".concat(-IMAGE_HEIGHT, "px"),
    marginLeft: "".concat(-IMAGE_WIDTH / 2, "px"),
    zIndex: theme.zIndices.balloons,
    left: "".concat(rand(POS_MAX_VW, POS_MIN_VW), "vw"),
    animationDelay: "".concat(rand(DELAY_MAX_MS), "ms"),
    height: "".concat(IMAGE_HEIGHT, "px"),
    width: "".concat(IMAGE_WIDTH, "px"),
    pointerEvents: "none",
    animationDuration: "3000ms",
    animationName: moveDown(),
    animationTimingFunction: "ease-in",
    animationDirection: "normal",
    animationIterationCount: 1,
    opacity: 1
  };
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2VsZW1lbnRzL1Nub3cvc3R5bGVkLWNvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEMyQiIsImZpbGUiOiIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9lbGVtZW50cy9Tbm93L3N0eWxlZC1jb21wb25lbnRzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIFN0cmVhbWxpdCBJbmMuICgyMDE4LTIwMjIpIFNub3dmbGFrZSBJbmMuICgyMDIyLTIwMjQpXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IGtleWZyYW1lcywgS2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5cbmNvbnN0IElNQUdFX0hFSUdIVCA9IDE1MFxuY29uc3QgSU1BR0VfV0lEVEggPSAxNTBcbmNvbnN0IFBPU19NSU5fVlcgPSAxMFxuY29uc3QgUE9TX01BWF9WVyA9IDkwXG5jb25zdCBERUxBWV9NQVhfTVMgPSA0MDAwXG5cbmNvbnN0IHJhbmQgPSAobWF4OiBudW1iZXIsIG1pbiA9IDApOiBudW1iZXIgPT5cbiAgTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluXG5cbmNvbnN0IG1vdmVEb3duID0gKCk6IEtleWZyYW1lcyA9PiBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTpcbiAgICAgIHRyYW5zbGF0ZVkoMClcbiAgICAgIHJvdGF0ZVgoJHtyYW5kKDM2MCl9ZGVnKVxuICAgICAgcm90YXRlWSgke3JhbmQoMzYwKX1kZWcpXG4gICAgICByb3RhdGVaKCR7cmFuZCgzNjApfWRlZyk7XG4gIH1cblxuICB0byB7XG4gICAgdHJhbnNmb3JtOlxuICAgICAgdHJhbnNsYXRlWShjYWxjKDEwMHZoICsgJHtJTUFHRV9IRUlHSFR9cHgpKVxuICAgICAgcm90YXRlWCgwKVxuICAgICAgcm90YXRlWSgwKVxuICAgICAgcm90YXRlWigwKTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgU3R5bGVkRmxha2UgPSBzdHlsZWQuaW1nKCh7IHRoZW1lIH0pID0+ICh7XG4gIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gIHRvcDogYCR7LUlNQUdFX0hFSUdIVH1weGAsXG4gIG1hcmdpbkxlZnQ6IGAkey1JTUFHRV9XSURUSCAvIDJ9cHhgLFxuICB6SW5kZXg6IHRoZW1lLnpJbmRpY2VzLmJhbGxvb25zLFxuICBsZWZ0OiBgJHtyYW5kKFBPU19NQVhfVlcsIFBPU19NSU5fVlcpfXZ3YCxcbiAgYW5pbWF0aW9uRGVsYXk6IGAke3JhbmQoREVMQVlfTUFYX01TKX1tc2AsXG4gIGhlaWdodDogYCR7SU1BR0VfSEVJR0hUfXB4YCxcbiAgd2lkdGg6IGAke0lNQUdFX1dJRFRIfXB4YCxcbiAgcG9pbnRlckV2ZW50czogXCJub25lXCIsXG5cbiAgYW5pbWF0aW9uRHVyYXRpb246IFwiMzAwMG1zXCIsXG4gIGFuaW1hdGlvbk5hbWU6IG1vdmVEb3duKCksXG4gIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiBcImVhc2UtaW5cIixcbiAgYW5pbWF0aW9uRGlyZWN0aW9uOiBcIm5vcm1hbFwiLFxuICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogMSxcbiAgb3BhY2l0eTogMSxcbn0pKVxuIl19 */");
//# sourceMappingURL=styled-components.js.map