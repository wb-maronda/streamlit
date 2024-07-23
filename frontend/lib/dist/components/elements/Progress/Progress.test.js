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
import { Progress as ProgressProto } from "../../../proto";
import Progress from "./Progress";
import { jsx as _jsx } from "react/jsx-runtime";
const getProps = function () {
  let propOverrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    element: ProgressProto.create({
      value: 50
    }),
    width: 0,
    ...propOverrides
  };
};
describe("Progress component", () => {
  it("renders without crashing", () => {
    render( /*#__PURE__*/_jsx(Progress, {
      ...getProps()
    }));
    expect(screen.getByTestId("stProgress")).toBeInTheDocument();
  });
  it("sets the value correctly", () => {
    render( /*#__PURE__*/_jsx(Progress, {
      ...getProps({
        width: 100
      })
    }));
    expect(screen.getByTestId("stProgress")).toBeInTheDocument();
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "50");
  });
});
//# sourceMappingURL=Progress.test.js.map