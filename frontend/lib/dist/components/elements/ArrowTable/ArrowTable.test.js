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
import { UNICODE, EMPTY } from "../../../mocks/arrow";
import { Quiver } from "../../../dataframes/Quiver";
import { ArrowTable } from "./ArrowTable";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { jsx as _jsx } from "react/jsx-runtime";
const getProps = data => ({
  element: new Quiver({
    data
  })
});
describe("st._arrow_table", () => {
  it("renders without crashing", () => {
    const props = getProps(UNICODE);
    render( /*#__PURE__*/_jsx(ArrowTable, {
      ...props
    }));
    expect(screen.getByTestId("stTable")).toBeInTheDocument();
    expect(screen.getByTestId("stTableStyledTable")).toBeInTheDocument();
    expect(screen.queryByTestId("stTableStyledEmptyTableCell")).not.toBeInTheDocument();
  });
  it("renders an empty row", () => {
    const props = getProps(EMPTY);
    render( /*#__PURE__*/_jsx(ArrowTable, {
      ...props
    }));
    expect(screen.getByTestId("stTable")).toBeInTheDocument();
    expect(screen.getByTestId("stTableStyledTable")).toBeInTheDocument();
    expect(screen.getByTestId("stTableStyledEmptyTableCell")).toBeInTheDocument();
  });
});
//# sourceMappingURL=ArrowTable.test.js.map