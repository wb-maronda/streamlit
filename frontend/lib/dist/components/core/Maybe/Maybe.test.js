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
import Maybe from "./Maybe";
import { jsx as _jsx } from "react/jsx-runtime";
const Inner = props => /*#__PURE__*/_jsx("div", {
  children: props.name
});
const Outer = props => /*#__PURE__*/_jsx(Maybe, {
  enable: props.enable,
  children: /*#__PURE__*/_jsx(Inner, {
    name: props.name
  })
});
describe("The Maybe component", () => {
  describe("when enable is true", () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });
    it("should invoke the render method when the props of an enclosing element update", () => {
      const {
        rerender
      } = render( /*#__PURE__*/_jsx(Outer, {
        name: "old again",
        enable: true
      }));
      const spyShouldComponentUpdate = jest.spyOn(Maybe.prototype, "shouldComponentUpdate");
      const spyRender = jest.spyOn(Maybe.prototype, "render");
      rerender( /*#__PURE__*/_jsx(Outer, {
        name: "new name",
        enable: true
      }));
      expect(spyShouldComponentUpdate).toHaveBeenCalled();
      expect(spyRender).toHaveBeenCalled();
    });
    it("should call render() when a Maybe is first disabled", () => {
      const {
        rerender
      } = render( /*#__PURE__*/_jsx(Outer, {
        name: "old again",
        enable: true
      }));
      const spyShouldComponentUpdate = jest.spyOn(Maybe.prototype, "shouldComponentUpdate");
      const spyRender = jest.spyOn(Maybe.prototype, "render");
      rerender( /*#__PURE__*/_jsx(Outer, {
        name: "new name",
        enable: false
      }));
      expect(spyShouldComponentUpdate).toHaveBeenCalled();
      expect(spyRender).toHaveBeenCalled();
    });
  });
  describe("when enable is false", () => {
    it("should not invoke the render method when the props of an enclosing element update", () => {
      const {
        rerender
      } = render( /*#__PURE__*/_jsx(Outer, {
        name: "old again",
        enable: false
      }));
      const spyShouldComponentUpdate = jest.spyOn(Maybe.prototype, "shouldComponentUpdate");
      const spyRender = jest.spyOn(Maybe.prototype, "render");
      rerender( /*#__PURE__*/_jsx(Outer, {
        name: "new name",
        enable: false
      }));
      expect(spyShouldComponentUpdate).toHaveBeenCalled();
      expect(spyRender).toHaveBeenCalledTimes(0);
    });
  });
});
//# sourceMappingURL=Maybe.test.js.map