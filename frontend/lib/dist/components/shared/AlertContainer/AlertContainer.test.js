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
import { screen } from "@testing-library/react";
import { render } from "../../../test_util";
import "@testing-library/jest-dom";
import AlertContainer, { Kind } from "./AlertContainer";
import { jsx as _jsx } from "react/jsx-runtime";
const getProps = function () {
  let propOverrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    kind: Kind.INFO,
    width: 100,
    children: null,
    ...propOverrides
  };
};
describe("AlertContainer element", () => {
  it("renders a Notification", () => {
    render( /*#__PURE__*/_jsx(AlertContainer, {
      ...getProps()
    }));
    const alertContainer = screen.getByTestId("stAlertContainer");
    expect(alertContainer).toBeInTheDocument();
    expect(alertContainer).toHaveClass("stAlertContainer");
  });
  it("renders its children", () => {
    render( /*#__PURE__*/_jsx(AlertContainer, {
      ...getProps(),
      children: /*#__PURE__*/_jsx("div", {
        className: "foo",
        "data-testid": "foo"
      })
    }));
    expect(screen.getByTestId("foo")).toBeInTheDocument();
  });
});
//# sourceMappingURL=AlertContainer.test.js.map