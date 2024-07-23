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
import { screen, fireEvent } from "@testing-library/react";
import { Info } from "@emotion-icons/material-outlined";
import { render } from "../../../test_util";
import Toolbar, { ToolbarAction } from "./Toolbar";
import { jsx as _jsx } from "react/jsx-runtime";
const onExpand = jest.fn();
const onCollapse = jest.fn();
const getToolbarProps = function () {
  let propOverrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    onExpand: onExpand,
    onCollapse: onCollapse,
    isFullScreen: false,
    locked: true,
    ...propOverrides
  };
};
const getToolbarActionsProps = function () {
  let propOverrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    onClick: jest.fn(),
    icon: Info,
    label: "info",
    show_label: false,
    ...propOverrides
  };
};
describe("Toolbar element", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("renders a Toolbar", async () => {
    render( /*#__PURE__*/_jsx(Toolbar, {
      ...getToolbarProps(),
      children: /*#__PURE__*/_jsx(ToolbarAction, {
        ...getToolbarActionsProps()
      })
    }));
    const toolbar = screen.getByTestId("stElementToolbar");
    expect(toolbar).toBeInTheDocument();
    expect(toolbar).toBeVisible();

    // Check if toolbar buttons are rendered:
    const toolbarButton = screen.getAllByTestId("stElementToolbarButton");
    expect(toolbarButton).toHaveLength(2);
  });
  it("doesn't show toolbar if not locked", async () => {
    render( /*#__PURE__*/_jsx(Toolbar, {
      ...getToolbarProps({
        locked: false
      }),
      children: /*#__PURE__*/_jsx(ToolbarAction, {
        ...getToolbarActionsProps()
      })
    }));
    const toolbar = screen.getByTestId("stElementToolbar");
    expect(toolbar).toBeInTheDocument();
    // Should not be visible
    expect(toolbar).not.toBeVisible();
  });
  it("allows expanding into fullscreen mode", async () => {
    render( /*#__PURE__*/_jsx(Toolbar, {
      ...getToolbarProps(),
      children: /*#__PURE__*/_jsx(ToolbarAction, {
        ...getToolbarActionsProps()
      })
    }));
    const toolbar = screen.getByTestId("stElementToolbar");
    expect(toolbar).toBeInTheDocument();
    // Toolbar is always visible in fullscreen:
    expect(toolbar).toBeVisible();
    const toolbarButton = screen.getAllByRole("button");
    expect(toolbarButton).toHaveLength(2);
    // Clicking the second button should close the fullscreen mode
    fireEvent.click(toolbarButton[1]);

    // Check that onCollapse was clicked
    expect(onExpand).toHaveBeenCalled();
  });
  it("adapts to fullscreen mode", async () => {
    render( /*#__PURE__*/_jsx(Toolbar, {
      ...getToolbarProps({
        locked: false,
        isFullScreen: true
      }),
      children: /*#__PURE__*/_jsx(ToolbarAction, {
        ...getToolbarActionsProps()
      })
    }));
    const toolbar = screen.getByTestId("stElementToolbar");
    expect(toolbar).toBeInTheDocument();
    // Toolbar is always visible in fullscreen:
    expect(toolbar).toBeVisible();
    const toolbarButton = screen.getAllByRole("button");
    expect(toolbarButton).toHaveLength(2);
    // Clicking the second button should close the fullscreen mode
    fireEvent.click(toolbarButton[1]);

    // Check that onCollapse was clicked
    expect(onCollapse).toHaveBeenCalled();
  });
  it("deactivates fullscreen mode via props", async () => {
    render( /*#__PURE__*/_jsx(Toolbar, {
      ...getToolbarProps({
        locked: false,
        disableFullscreenMode: true
      }),
      children: /*#__PURE__*/_jsx(ToolbarAction, {
        ...getToolbarActionsProps()
      })
    }));

    // Check that there is only one toolbar button.
    // The fullscreen actions should not be visible.
    const toolbarButton = screen.getAllByTestId("stElementToolbarButton");
    expect(toolbarButton).toHaveLength(1);
  });
});
describe("ToolbarAction Button element", () => {
  it("renders correctly", async () => {
    render( /*#__PURE__*/_jsx(ToolbarAction, {
      ...getToolbarActionsProps()
    }));
    // Check if toolbar button is rendered:
    const toolbarButton = screen.getByTestId("stElementToolbarButton");
    expect(toolbarButton).toBeInTheDocument();

    // Check if the toolbar icon is shown:
    const toolbarButtonIcon = screen.getByTestId("stElementToolbarButtonIcon");
    expect(toolbarButtonIcon).toBeInTheDocument();
  });
  it("shows a label if show_labe=true", async () => {
    render( /*#__PURE__*/_jsx(ToolbarAction, {
      ...getToolbarActionsProps({
        show_label: true
      })
    }));
    // Check that the info label is visible
    const infoLabel = screen.getByText("info");
    expect(infoLabel).toBeVisible();
  });
  it("doesn't show an icon if icon=undefined", async () => {
    render( /*#__PURE__*/_jsx(ToolbarAction, {
      ...getToolbarActionsProps({
        show_label: true,
        icon: undefined
      })
    }));
    // Check that the info label is visible
    const infoLabel = screen.getByText("info");
    expect(infoLabel).toBeVisible();

    // Check if the toolbar icon is not shown:
    const toolbarButtonIcon = screen.queryByTestId("stElementToolbarButtonIcon");
    expect(toolbarButtonIcon).toBeNull();
  });
  it("calls callback on click", async () => {
    const onClickMock = jest.fn();
    render( /*#__PURE__*/_jsx(ToolbarAction, {
      ...getToolbarActionsProps({
        onClick: onClickMock
      })
    }));
    // Check if toolbar button is rendered:
    const toolbarButton = screen.getByRole("button");
    expect(toolbarButton).toBeInTheDocument();
    fireEvent.click(toolbarButton);

    // Check that onClick callback was clicked
    expect(onClickMock).toHaveBeenCalled();
  });
});
//# sourceMappingURL=Toolbar.test.js.map