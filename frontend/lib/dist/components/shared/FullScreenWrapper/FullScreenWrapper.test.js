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
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { mockTheme } from "../../../mocks/mockTheme";
import { render, customRenderLibContext } from "../../../test_util";
import FullScreenWrapper from "./FullScreenWrapper";
import { jsx as _jsx } from "react/jsx-runtime";
describe("FullScreenWrapper", () => {
  const getProps = function () {
    let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return {
      children: jest.fn(),
      width: 100,
      height: 100,
      theme: mockTheme.emotion,
      ...props
    };
  };
  it("cannot find StyledFullScreenButton when disableFullscreenMode is true", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(FullScreenWrapper, {
      ...props,
      disableFullscreenMode: true
    }));
    // queryBy returns null vs. error
    expect(screen.queryByTestId("StyledFullScreenButton")).toBeNull(); // eslint-disable-line testing-library/prefer-presence-queries
  });
  it("can find StyledFullScreenButton with default LibContext", () => {
    const props = getProps();
    customRenderLibContext( /*#__PURE__*/_jsx(FullScreenWrapper, {
      ...props
    }), {});
    // queryBy returns null vs. error
    expect(screen.queryByTestId("StyledFullScreenButton")).not.toBeNull(); // eslint-disable-line testing-library/prefer-presence-queries
  });
  it("hides StyledFullScreenScreenButton when disableFullscreenMode is true", () => {
    const props = getProps({
      disableFullscreenMode: true
    });
    customRenderLibContext( /*#__PURE__*/_jsx(FullScreenWrapper, {
      ...props
    }), {});
    expect(screen.queryByTestId("StyledFullScreenButton")).not.toBeInTheDocument();
  });
});
//# sourceMappingURL=FullScreenWrapper.test.js.map