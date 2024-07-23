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
const blink = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  50% {\n    color: rgba(0, 0, 0, 0);\n  }\n"])));
export const StyledMessage = /*#__PURE__*/_styled("span", process.env.NODE_ENV === "production" ? {
  target: "edlqvik0"
} : {
  target: "edlqvik0",
  label: "StyledMessage"
})(_ref => {
  let {
    includeDot,
    shouldBlink,
    theme
  } = _ref;
  return {
    ...(includeDot ? {
      "&::before": {
        opacity: 1,
        content: '"•"',
        animation: "none",
        color: theme.colors.gray,
        margin: "0 5px"
      }
    } : {}),
    ...(shouldBlink ? {
      color: theme.colors.red,
      animationName: "".concat(blink),
      animationDuration: "0.5s",
      animationIterationCount: 5
    } : {})
  };
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NoYXJlZC9JbnB1dEluc3RydWN0aW9ucy9zdHlsZWQtY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QjZCIiwiZmlsZSI6Ii4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NoYXJlZC9JbnB1dEluc3RydWN0aW9ucy9zdHlsZWQtY29tcG9uZW50cy50cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBTdHJlYW1saXQgSW5jLiAoMjAxOC0yMDIyKSBTbm93Zmxha2UgSW5jLiAoMjAyMi0yMDI0KVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCJcblxuY29uc3QgYmxpbmsgPSBrZXlmcmFtZXNgXG4gIDUwJSB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIH1cbmBcblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZWRNZXNzYWdlUHJvcHMge1xuICBpbmNsdWRlRG90OiBib29sZWFuXG4gIHNob3VsZEJsaW5rOiBib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRNZXNzYWdlID0gc3R5bGVkLnNwYW48U3R5bGVkTWVzc2FnZVByb3BzPihcbiAgKHsgaW5jbHVkZURvdCwgc2hvdWxkQmxpbmssIHRoZW1lIH0pID0+ICh7XG4gICAgLi4uKGluY2x1ZGVEb3RcbiAgICAgID8ge1xuICAgICAgICAgIFwiJjo6YmVmb3JlXCI6IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBjb250ZW50OiAnXCLigKJcIicsXG4gICAgICAgICAgICBhbmltYXRpb246IFwibm9uZVwiLFxuICAgICAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5ncmF5LFxuICAgICAgICAgICAgbWFyZ2luOiBcIjAgNXB4XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgOiB7fSksXG4gICAgLi4uKHNob3VsZEJsaW5rXG4gICAgICA/IHtcbiAgICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLnJlZCxcbiAgICAgICAgICBhbmltYXRpb25OYW1lOiBgJHtibGlua31gLFxuICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiBcIjAuNXNcIixcbiAgICAgICAgICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogNSxcbiAgICAgICAgfVxuICAgICAgOiB7fSksXG4gIH0pXG4pXG4iXX0= */");
//# sourceMappingURL=styled-components.js.map