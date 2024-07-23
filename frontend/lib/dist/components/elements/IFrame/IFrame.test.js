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
import { render } from "../../../test_util";
import { DEFAULT_IFRAME_FEATURE_POLICY, DEFAULT_IFRAME_SANDBOX_POLICY } from "../../../util/IFrameUtil";
import { IFrame as IFrameProto } from "../../../proto";
import IFrame from "./IFrame";
import { jsx as _jsx } from "react/jsx-runtime";
const getProps = function () {
  let elementProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    element: IFrameProto.create({
      ...elementProps
    }),
    width: 100
  };
};
describe("st.iframe", () => {
  it("should render an iframe", () => {
    const props = getProps({});
    render( /*#__PURE__*/_jsx(IFrame, {
      ...props
    }));
    expect(screen.getByTestId("stIFrame")).toBeInTheDocument();
  });
  it("should set iframe height", () => {
    const props = getProps({
      height: 400
    });
    render( /*#__PURE__*/_jsx(IFrame, {
      ...props
    }));
    expect(screen.getByTestId("stIFrame")).toHaveAttribute("height", "400");
  });
  describe("Render iframe with `src` parameter", () => {
    const props = getProps({
      src: "foo",
      srcdoc: "bar"
    });
    it("should set `srcDoc` to undefined if src is defined", () => {
      render( /*#__PURE__*/_jsx(IFrame, {
        ...props
      }));
      expect(screen.getByTestId("stIFrame")).not.toHaveAttribute("srcdoc");
    });
    it("should set `src`", () => {
      render( /*#__PURE__*/_jsx(IFrame, {
        ...props
      }));
      expect(screen.getByTestId("stIFrame")).toHaveAttribute("src", "foo");
    });
    it("should use our default feature policy", () => {
      render( /*#__PURE__*/_jsx(IFrame, {
        ...props
      }));
      expect(screen.getByTestId("stIFrame")).toHaveAttribute("allow", DEFAULT_IFRAME_FEATURE_POLICY);
    });
    it("should use our default sandbox policy", () => {
      render( /*#__PURE__*/_jsx(IFrame, {
        ...props
      }));
      expect(screen.getByTestId("stIFrame")).toHaveAttribute("sandbox", DEFAULT_IFRAME_SANDBOX_POLICY);
    });
  });
  describe("Render iframe with `srcDoc` parameter", () => {
    const props = getProps({
      srcdoc: "bar"
    });
    it("should set `srcDoc`", () => {
      render( /*#__PURE__*/_jsx(IFrame, {
        ...props
      }));
      expect(screen.getByTestId("stIFrame")).toHaveAttribute("srcdoc", "bar");
    });
    it("should use our default feature policy", () => {
      render( /*#__PURE__*/_jsx(IFrame, {
        ...props
      }));
      expect(screen.getByTestId("stIFrame")).toHaveAttribute("allow", DEFAULT_IFRAME_FEATURE_POLICY);
    });
    it("should use our default sandbox policy", () => {
      render( /*#__PURE__*/_jsx(IFrame, {
        ...props
      }));
      expect(screen.getByTestId("stIFrame")).toHaveAttribute("sandbox", DEFAULT_IFRAME_SANDBOX_POLICY);
    });
  });
  describe("Render iframe with specified width", () => {
    const props = getProps({
      hasWidth: true,
      width: 200
    });
    it("should set element width", () => {
      render( /*#__PURE__*/_jsx(IFrame, {
        ...props
      }));
      expect(screen.getByTestId("stIFrame")).toHaveAttribute("width", "200");
    });
    it("should set app width", () => {
      const props = getProps({});
      render( /*#__PURE__*/_jsx(IFrame, {
        ...props
      }));
      expect(screen.getByTestId("stIFrame")).toHaveAttribute("width", "100");
    });
  });
  describe("Render iframe with scrolling", () => {
    it("should set scrolling to auto", () => {
      const props = getProps({
        scrolling: true
      });
      render( /*#__PURE__*/_jsx(IFrame, {
        ...props
      }));
      expect(screen.getByTestId("stIFrame")).toHaveAttribute("scrolling", "auto");
      expect(screen.getByTestId("stIFrame")).not.toHaveStyle("overflow: hidden");
    });
    it("should set `overflow` to hidden", () => {
      const props = getProps({});
      render( /*#__PURE__*/_jsx(IFrame, {
        ...props
      }));
      expect(screen.getByTestId("stIFrame")).toHaveStyle("overflow: hidden");
      expect(screen.getByTestId("stIFrame")).toHaveAttribute("scrolling", "no");
    });
  });
});
//# sourceMappingURL=IFrame.test.js.map