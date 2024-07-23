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
import { customRenderLibContext, render } from "../../../../test_util";
import { DeckGlJsonChart as DeckGlJsonChartProto } from "../../../../proto";
import withMapboxToken, { MapboxTokenFetchingError, TOKENS_URL } from "./withMapboxToken";
import axios from "axios";
import { screen, waitFor } from "@testing-library/react";
import { jsx as _jsx } from "react/jsx-runtime";
describe("withMapboxToken", () => {
  const mockMapboxToken = "mockToken";
  const element = DeckGlJsonChartProto.create({
    // mock .streamlit/config.toml token
    mapboxToken: mockMapboxToken
  });
  const emptyElement = DeckGlJsonChartProto.create({});
  function getProps() {
    return {
      label: "mockLabel",
      width: 123,
      element
    };
  }
  jest.mock("axios");

  // This component is only used to test whether or not the mapbox is correctly set
  const MockComponent = props => /*#__PURE__*/_jsx("div", {
    "data-testid": "mock-component",
    children: props.mapboxToken
  });
  describe("withMapboxToken rendering", () => {
    const DeltaType = "testDeltaType";
    const WrappedComponent = withMapboxToken(DeltaType)(MockComponent);
    const LIB_CONFIG_TOKEN = "LIB_TOKEN_CONFIG";
    beforeEach(() => {
      jest.resetAllMocks();
    });
    it("renders without crashing", () => {
      const props = getProps();
      render( /*#__PURE__*/_jsx(WrappedComponent, {
        ...props
      }), {});
      const mockComponentText = screen.getByText(mockMapboxToken);
      expect(mockComponentText).toBeInTheDocument();
    });
    it("defines `displayName`", () => {
      expect(WrappedComponent.displayName).toEqual("withMapboxToken(MockComponent)");
    });
    it("should inject mapbox token to the wrapped component when available in the config.toml", () => {
      axios.get = jest.fn().mockImplementation(() => ({
        data: {
          userMapboxToken: mockMapboxToken
        }
      }));
      render( /*#__PURE__*/_jsx(WrappedComponent, {
        element: element,
        width: 500
      }));
      const mockComponentText = screen.getByText(mockMapboxToken);
      expect(mockComponentText).toBeInTheDocument();
    });
    it("should render loading alert while fetching the token", () => {
      axios.get = jest.fn().mockReturnValue(new Promise(() => {}));
      render( /*#__PURE__*/_jsx(WrappedComponent, {
        element: emptyElement,
        width: 500
      }));
      expect(screen.getByTestId("stSkeleton")).toBeInTheDocument();
    });
    it("should fetch the token if userMapboxToken is not present in config.toml and libConfig", async () => {
      axios.get = jest.fn().mockResolvedValue({
        data: {
          mapbox: mockMapboxToken
        }
      });
      render( /*#__PURE__*/_jsx(WrappedComponent, {
        element: emptyElement,
        width: 500
      }));
      await waitFor(() => {
        expect(axios.get).toHaveBeenCalledWith(TOKENS_URL);
      });
    });
    it("should throw an error if fetched token is not present", async () => {
      let wrappedComponentInstance;
      axios.get = jest.fn().mockReturnValueOnce({
        data: {
          mapbox: mockMapboxToken
        }
      });
      render( /*#__PURE__*/_jsx(WrappedComponent, {
        ref: ref => {
          wrappedComponentInstance = ref;
        },
        element: emptyElement,
        width: 500
      }));
      axios.get = jest.fn().mockRejectedValueOnce("ERROR");
      await expect(wrappedComponentInstance.initMapboxToken()).rejects.toThrow(new MapboxTokenFetchingError("ERROR (".concat(TOKENS_URL, ")")));
    });
    it("should inject mapbox token to the wrapped component when available in the libConfig", async () => {
      axios.get = jest.fn().mockImplementation(() => ({
        data: {
          userMapboxToken: mockMapboxToken
        }
      }));
      customRenderLibContext( /*#__PURE__*/_jsx(WrappedComponent, {
        element: element,
        width: 500
      }), {
        libConfig: {
          mapboxToken: LIB_CONFIG_TOKEN
        }
      });
      await waitFor(() => {
        const element = screen.getByTestId("mock-component");
        expect(element.textContent).toBe(mockMapboxToken);
      });
    });
    it("prioritizes the libConfig token if no config.toml token and don't fetch our token", async () => {
      axios.get = jest.fn().mockResolvedValue({
        data: {
          mapbox: mockMapboxToken
        }
      });
      customRenderLibContext( /*#__PURE__*/_jsx(WrappedComponent, {
        element: emptyElement,
        width: 500
      }), {
        libConfig: {
          mapboxToken: LIB_CONFIG_TOKEN
        }
      });
      await waitFor(() => {
        const element = screen.getByTestId("mock-component");
        expect(element.textContent).toBe(LIB_CONFIG_TOKEN);
      });
    });
  });
});
//# sourceMappingURL=withMapboxToken.test.js.map