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

/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { render as reactTestingLibraryRender } from "@testing-library/react";

/* eslint-enable */
import ThemeProvider from "./components/core/ThemeProvider";
import { baseTheme } from "./theme";
import { mockTheme } from "./mocks/mockTheme";
import { LibContext } from "./components/core/LibContext";

/**
 * Use react-testing-library to render a ReactElement. The element will be
 * wrapped in our ThemeProvider.
 */
import { jsx as _jsx } from "react/jsx-runtime";
export function render(ui, options) {
  return reactTestingLibraryRender(ui, {
    wrapper: _ref => {
      let {
        children
      } = _ref;
      return /*#__PURE__*/_jsx(ThemeProvider, {
        theme: mockTheme.emotion,
        children: children
      });
    },
    ...options,
    // TODO: Remove this to have RTL run on React 18
    // react-18-upgrade
    legacyRoot: true
  });
}
export function mockWindowLocation(hostname) {
  // Mock window.location by creating a new object
  // Source: https://www.benmvp.com/blog/mocking-window-location-methods-jest-jsdom/
  // @ts-expect-error
  delete window.location;

  // @ts-expect-error
  window.location = {
    assign: jest.fn(),
    hostname: hostname
  };
}

/**
 * Use react-testing-library to render a ReactElement. The element will be
 * wrapped in our LibContext.Provider.
 */
export const customRenderLibContext = (component, overrideLibContextProps) => {
  const defaultLibContextProps = {
    isFullScreen: false,
    setFullScreen: jest.fn(),
    addScriptFinishedHandler: jest.fn(),
    removeScriptFinishedHandler: jest.fn(),
    activeTheme: baseTheme,
    setTheme: jest.fn(),
    availableThemes: [],
    addThemes: jest.fn(),
    onPageChange: jest.fn(),
    currentPageScriptHash: "",
    libConfig: {},
    fragmentIdsThisRun: []
  };
  return reactTestingLibraryRender(component, {
    wrapper: _ref2 => {
      let {
        children
      } = _ref2;
      return /*#__PURE__*/_jsx(ThemeProvider, {
        theme: baseTheme.emotion,
        children: /*#__PURE__*/_jsx(LibContext.Provider, {
          value: {
            ...defaultLibContextProps,
            ...overrideLibContextProps
          },
          children: children
        })
      });
    }
  });
};
//# sourceMappingURL=test_util.js.map