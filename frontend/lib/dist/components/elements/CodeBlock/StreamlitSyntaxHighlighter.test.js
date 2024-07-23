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

import { render } from "../../../test_util";
import React from "react";
import StreamlitSyntaxHighlighter from "./StreamlitSyntaxHighlighter";
import { jsx as _jsx } from "react/jsx-runtime";
const getStreamlitSyntaxHighlighterProps = function () {
  let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    children: ["import streamlit as st\n\nst.write(\"Hello\")\n"],
    ...props
  };
};
describe("CustomCodeTag Element", () => {
  it("should render without crashing", () => {
    const props = getStreamlitSyntaxHighlighterProps();
    const {
      baseElement
    } = render( /*#__PURE__*/_jsx(StreamlitSyntaxHighlighter, {
      ...props
    }));
    expect(baseElement.querySelectorAll("pre code")).toHaveLength(1);
  });
  it("should render as plaintext", () => {
    var _baseElement$querySel;
    const props = getStreamlitSyntaxHighlighterProps({
      language: "plaintext"
    });
    const {
      baseElement
    } = render( /*#__PURE__*/_jsx(StreamlitSyntaxHighlighter, {
      ...props
    }));
    expect((_baseElement$querySel = baseElement.querySelector("pre code")) === null || _baseElement$querySel === void 0 ? void 0 : _baseElement$querySel.outerHTML).toBe('<code class="language-plaintext" style="white-space: pre;"><span>import streamlit as st\n' + "</span>\n" + 'st.write("Hello")\n' + "</code>");
  });
  it("should render as plaintext if no language specified", () => {
    var _baseElement$querySel2;
    const props = getStreamlitSyntaxHighlighterProps({
      language: "plaintext"
    });
    const {
      baseElement
    } = render( /*#__PURE__*/_jsx(StreamlitSyntaxHighlighter, {
      ...props
    }));
    expect((_baseElement$querySel2 = baseElement.querySelector("pre code")) === null || _baseElement$querySel2 === void 0 ? void 0 : _baseElement$querySel2.outerHTML).toBe('<code class="language-plaintext" style="white-space: pre;"><span>import streamlit as st\n' + "</span>\n" + 'st.write("Hello")\n' + "</code>");
  });
  it("should render as python", () => {
    var _baseElement$querySel3;
    const props = getStreamlitSyntaxHighlighterProps({
      language: "python"
    });
    const {
      baseElement
    } = render( /*#__PURE__*/_jsx(StreamlitSyntaxHighlighter, {
      ...props
    }));
    expect((_baseElement$querySel3 = baseElement.querySelector("pre code .token.string")) === null || _baseElement$querySel3 === void 0 ? void 0 : _baseElement$querySel3.innerHTML).toBe('"Hello"');
  });
});
//# sourceMappingURL=StreamlitSyntaxHighlighter.test.js.map