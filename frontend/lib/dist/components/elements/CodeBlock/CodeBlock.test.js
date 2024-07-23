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

import React from "react";
import { render } from "../../../test_util";
import CodeBlock from "./CodeBlock";
import { jsx as _jsx } from "react/jsx-runtime";
const getBlockProps = function () {
  let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    children: ["\n    import streamlit as st\n\n    st.write(\"Hello\")\n  "],
    ...props
  };
};
describe("CodeBlock Element", () => {
  it("should render without crashing", () => {
    const props = getBlockProps();
    const {
      baseElement
    } = render( /*#__PURE__*/_jsx(CodeBlock, {
      ...props
    }));

    // should have "stCodeBlock" class.
    expect(baseElement.querySelectorAll(".stCodeBlock").length).toBe(1);
  });
});
//# sourceMappingURL=CodeBlock.test.js.map