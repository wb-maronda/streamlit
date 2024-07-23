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
import { Kind } from "../../shared/AlertContainer";
import { Alert as AlertProto } from "../../../proto";
import AlertElement, { getAlertElementKind } from "./AlertElement";
import { jsx as _jsx } from "react/jsx-runtime";
const getProps = function () {
  let elementProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    body: "Something happened!",
    kind: Kind.INFO,
    width: 100,
    ...elementProps
  };
};
describe("Alert element", () => {
  it("renders an ERROR box as expected", () => {
    const props = getProps({
      kind: getAlertElementKind(AlertProto.Format.ERROR),
      body: "#what in the world?"
    });
    render( /*#__PURE__*/_jsx(AlertElement, {
      ...props
    }));
    expect(screen.getByTestId("stAlert")).toBeInTheDocument();
    expect(screen.getByTestId("stNotificationContentError")).toBeInTheDocument();
    expect(screen.queryByTestId("stAlertDynamicIcon")).not.toBeInTheDocument();
    expect(screen.getByText("#what in the world?")).toBeInTheDocument();
  });
  it("renders a WARNING box as expected", () => {
    const props = getProps({
      kind: getAlertElementKind(AlertProto.Format.WARNING),
      body: "test"
    });
    render( /*#__PURE__*/_jsx(AlertElement, {
      ...props
    }));
    expect(screen.getByTestId("stAlert")).toBeInTheDocument();
    expect(screen.getByTestId("stNotificationContentWarning")).toBeInTheDocument();
    expect(screen.queryByTestId("stAlertDynamicIcon")).not.toBeInTheDocument();
    expect(screen.getByText("test")).toBeInTheDocument();
  });
  it("renders a SUCCESS box as expected", () => {
    const props = getProps({
      kind: getAlertElementKind(AlertProto.Format.SUCCESS),
      body: "But our princess was in another castle!"
    });
    render( /*#__PURE__*/_jsx(AlertElement, {
      ...props
    }));
    expect(screen.getByTestId("stAlert")).toBeInTheDocument();
    expect(screen.getByTestId("stNotificationContentSuccess")).toBeInTheDocument();
    expect(screen.queryByTestId("stAlertDynamicIcon")).not.toBeInTheDocument();
    expect(screen.getByText("But our princess was in another castle!")).toBeInTheDocument();
  });
  it("renders an INFO box as expected", () => {
    const props = getProps({
      kind: getAlertElementKind(AlertProto.Format.INFO),
      body: "It's dangerous to go alone."
    });
    render( /*#__PURE__*/_jsx(AlertElement, {
      ...props
    }));
    expect(screen.getByTestId("stAlert")).toBeInTheDocument();
    expect(screen.getByTestId("stNotificationContentInfo")).toBeInTheDocument();
    expect(screen.queryByTestId("stAlertDynamicIcon")).not.toBeInTheDocument();
    expect(screen.getByText("It's dangerous to go alone.")).toBeInTheDocument();
  });
  it("accepts an icon", () => {
    const props = getProps({
      kind: getAlertElementKind(AlertProto.Format.INFO),
      body: "It's dangerous to go alone.",
      icon: "👉🏻"
    });
    render( /*#__PURE__*/_jsx(AlertElement, {
      ...props
    }));
    expect(screen.getByTestId("stAlert")).toBeInTheDocument();
    expect(screen.getByTestId("stNotificationContentInfo")).toBeInTheDocument();
    expect(screen.getByTestId("stAlertDynamicIcon")).toHaveTextContent("👉🏻");
    expect(screen.getByText("It's dangerous to go alone.")).toBeInTheDocument();
  });
});
test("getAlertElementKind throws an error on invalid format", () => {
  expect(() => getAlertElementKind(AlertProto.Format.UNUSED)).toThrow("Unexpected alert type: ".concat(AlertProto.Format.UNUSED));
});
//# sourceMappingURL=AlertElement.test.js.map