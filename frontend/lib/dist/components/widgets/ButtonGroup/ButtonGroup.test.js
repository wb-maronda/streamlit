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

/* eslint-disable jest/expect-expect */
import React from "react";
import { act, fireEvent, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { render } from "../../../test_util";
import { WidgetStateManager } from "../../../WidgetStateManager";
import { ButtonGroup as ButtonGroupProto, LabelVisibilityMessage as LabelVisibilityMessageProto } from "../../../proto";
import { BaseButtonKind, BaseButtonSize } from "../../shared/BaseButton";
import { DynamicIcon } from "../../shared/Icon";
import StreamlitMarkdown from "../../shared/StreamlitMarkdown/StreamlitMarkdown";
import ButtonGroup, { getContentElement } from "./ButtonGroup";
import { jsx as _jsx } from "react/jsx-runtime";
const materialIconNames = ["icon", "icon_2", "icon_3", "icon_4"];
const defaultSelectedIndex = 2;
const expectHighlightStyle = function (element) {
  let should_exist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  let expectCheck = expect(element);
  if (!should_exist) {
    expectCheck = expect.not;
  }
  expectCheck.toHaveStyle("color: rgb(49, 51, 63);");
};
const getButtonGroupButtons = () => {
  const buttonGroupWidget = screen.getByTestId("stButtonGroup");
  return within(buttonGroupWidget).getAllByRole("button");
};

// options where content is only a material icon; used by st.feedback
const materialIconOnlyOptions = [ButtonGroupProto.Option.create({
  contentIcon: `:material/${materialIconNames[0]}:`
}), ButtonGroupProto.Option.create({
  contentIcon: `:material/${materialIconNames[1]}:`,
  selectedContentIcon: ":material/icon2_selected:"
}), ButtonGroupProto.Option.create({
  contentIcon: `:material/${materialIconNames[2]}:`
}), ButtonGroupProto.Option.create({
  contentIcon: `:material/${materialIconNames[3]}:`
})];
const options = [ButtonGroupProto.Option.create({
  content: `Some text: ${materialIconNames[0]}:`,
  contentIcon: "🔥"
}), ButtonGroupProto.Option.create({
  content: `Some other text: ${materialIconNames[1]}:`,
  contentIcon: `:material/${materialIconNames[1]}:`
})];
const getProps = function () {
  let elementProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let widgetProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return {
    element: ButtonGroupProto.create({
      id: "1",
      clickMode: ButtonGroupProto.ClickMode.SINGLE_SELECT,
      default: [defaultSelectedIndex],
      disabled: false,
      label: "My ButtonGroup label",
      options: [...materialIconOnlyOptions, ...options],
      selectionVisualization: ButtonGroupProto.SelectionVisualization.ONLY_SELECTED,
      style: ButtonGroupProto.Style.BORDERLESS,
      ...elementProps
    }),
    disabled: false,
    widgetMgr: new WidgetStateManager({
      sendRerunBackMsg: jest.fn(),
      formsDataChanged: jest.fn()
    }),
    ...widgetProps
  };
};
const EXPECTED_BUTTONS_LENGTH = materialIconOnlyOptions.length + options.length;
describe("ButtonGroup widget", () => {
  it("renders without crashing", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(ButtonGroup, {
      ...props
    }));
    const buttonGroupWidget = screen.getByTestId("stButtonGroup");
    expect(buttonGroupWidget).toBeInTheDocument();
    expect(buttonGroupWidget).toHaveClass("stButtonGroup");
  });
  it("option-children with material-icon render correctly", () => {
    const props = getProps({
      default: [],
      options: materialIconOnlyOptions
    });
    render( /*#__PURE__*/_jsx(ButtonGroup, {
      ...props
    }));
    const buttons = getButtonGroupButtons();
    expect(buttons).toHaveLength(materialIconOnlyOptions.length);
    buttons.forEach((button, index) => {
      expect(button).toHaveAttribute("kind", "borderlessIcon");
      const icon = within(button).getByTestId("stIconMaterial");
      expect(icon.textContent).toContain(materialIconNames[index]);
    });
  });
  it("option-children with contentIcon render correctly", () => {
    const props = getProps({
      default: [],
      options: options,
      style: ButtonGroupProto.Style.SEGMENT
    });
    render( /*#__PURE__*/_jsx(ButtonGroup, {
      ...props
    }));
    const buttonGroupWidget = screen.getByTestId("stButtonGroup");
    const buttons = within(buttonGroupWidget).getAllByRole("button");
    expect(buttons).toHaveLength(options.length);
    let button = buttons[0];
    expect(button).toHaveAttribute("kind", "icon");
    let text = within(button).getByTestId("stMarkdownContainer");
    expect(text.textContent).toContain(materialIconNames[0]);
    let icon = within(button).getByTestId("stIconEmoji");
    expect(icon.textContent).toContain("🔥");
    button = buttons[1];
    expect(button).toHaveAttribute("kind", "icon");
    text = within(button).getByTestId("stMarkdownContainer");
    expect(text.textContent).toContain(materialIconNames[1]);
    icon = within(button).getByTestId("stIconMaterial");
    expect(icon.textContent).toContain(materialIconNames[1]);
  });
  it("sets widget value on mount", () => {
    const props = getProps();
    jest.spyOn(props.widgetMgr, "setIntArrayValue");
    render( /*#__PURE__*/_jsx(ButtonGroup, {
      ...props
    }));
    expect(props.widgetMgr.setIntArrayValue).toHaveBeenCalledWith(props.element, props.element.default, {
      fromUi: false
    }, undefined);
  });
  describe("ButtonGroup props should work", () => {
    it("renders with empty options", () => {
      const props = getProps({
        default: [],
        options: []
      });
      render( /*#__PURE__*/_jsx(ButtonGroup, {
        ...props
      }));
      const buttonGroup = screen.getByTestId("stButtonGroup");
      expect(buttonGroup).toBeInTheDocument();
      const buttons = within(buttonGroup).queryAllByRole("button");
      expect(buttons).toHaveLength(0);
    });
    it("onClick prop for single select", () => {
      const props = getProps();
      jest.spyOn(props.widgetMgr, "setIntArrayValue");
      render( /*#__PURE__*/_jsx(ButtonGroup, {
        ...props
      }));
      const buttons = getButtonGroupButtons();
      expect(buttons).toHaveLength(EXPECTED_BUTTONS_LENGTH);
      expect(props.widgetMgr.setIntArrayValue).toHaveBeenCalledWith(props.element, props.element.default, {
        fromUi: false
      }, undefined);
      expect(props.widgetMgr.setIntArrayValue).toHaveBeenCalledTimes(1);

      // click element at index 1 to select it
      fireEvent.click(buttons[1]);
      expect(props.widgetMgr.setIntArrayValue).toHaveBeenCalledWith(props.element, [1], {
        fromUi: true
      }, undefined);
      expect(props.widgetMgr.setIntArrayValue).toHaveBeenCalledTimes(2);

      // click element at index 0 to select it
      fireEvent.click(getButtonGroupButtons()[0]);
      expect(props.widgetMgr.setIntArrayValue).toHaveBeenCalledWith(props.element, [0], {
        fromUi: true
      }, undefined);
      expect(props.widgetMgr.setIntArrayValue).toHaveBeenCalledTimes(3);

      // click on same button does deselect it
      fireEvent.click(getButtonGroupButtons()[0]);
      expect(props.widgetMgr.setIntArrayValue).toHaveBeenCalledWith(props.element, [], {
        fromUi: true
      }, undefined);
      expect(props.widgetMgr.setIntArrayValue).toHaveBeenCalledTimes(4);
    });
    it("onClick prop for multi select", () => {
      const props = getProps({
        clickMode: ButtonGroupProto.ClickMode.MULTI_SELECT
      });
      jest.spyOn(props.widgetMgr, "setIntArrayValue");
      render( /*#__PURE__*/_jsx(ButtonGroup, {
        ...props
      }));
      const buttons = getButtonGroupButtons();
      expect(props.widgetMgr.setIntArrayValue).toHaveBeenCalledWith(props.element, props.element.default, {
        fromUi: false
      }, undefined);
      fireEvent.click(buttons[1]);
      expect(props.widgetMgr.setIntArrayValue).toHaveBeenCalledWith(props.element,
      // the 2 is default value
      [2, 1], {
        fromUi: true
      }, undefined);
      fireEvent.click(getButtonGroupButtons()[0]);
      expect(props.widgetMgr.setIntArrayValue).toHaveBeenCalledWith(props.element, [2, 1, 0], {
        fromUi: true
      }, undefined);

      // unselect the second button
      fireEvent.click(getButtonGroupButtons()[1]);
      expect(props.widgetMgr.setIntArrayValue).toHaveBeenCalledWith(props.element, [2, 0], {
        fromUi: true
      }, undefined);
    });
    it("passes fragmentId to onClick prop", () => {
      const props = getProps({}, {
        fragmentId: "myFragmentId"
      });
      jest.spyOn(props.widgetMgr, "setIntArrayValue");
      render( /*#__PURE__*/_jsx(ButtonGroup, {
        ...props
      }));
      expect(props.widgetMgr.setIntArrayValue).toHaveBeenCalledWith(props.element, props.element.default, {
        fromUi: false
      }, "myFragmentId");
      const button = getButtonGroupButtons()[0];
      fireEvent.click(button);
      expect(props.widgetMgr.setIntArrayValue).toHaveBeenCalledWith(props.element, [0], {
        fromUi: true
      }, "myFragmentId");
    });
    it("can be disabled", () => {
      const props = getProps({}, {
        disabled: true
      });
      render( /*#__PURE__*/_jsx(ButtonGroup, {
        ...props
      }));
      const buttonGroupWidget = screen.getByTestId("stButtonGroup");
      const buttons = within(buttonGroupWidget).getAllByRole("button");
      expect(buttons).toHaveLength(EXPECTED_BUTTONS_LENGTH);
      buttons.forEach(button => {
        expect(button).toBeDisabled();
      });
    });
    it("sets widget value on update", () => {
      const props = getProps({
        value: [3],
        setValue: true
      });
      jest.spyOn(props.widgetMgr, "setIntArrayValue");
      render( /*#__PURE__*/_jsx(ButtonGroup, {
        ...props
      }));
      const buttons = getButtonGroupButtons();
      expectHighlightStyle(buttons[3]);
      expectHighlightStyle(buttons[defaultSelectedIndex], false);
      expect(props.widgetMgr.setIntArrayValue).toHaveBeenCalledWith(props.element, props.element.default, {
        fromUi: false
      }, undefined);
    });
    it("renders correct button style", () => {
      const props = getProps({
        default: [],
        options: options,
        style: ButtonGroupProto.Style.PILLS
      });
      render( /*#__PURE__*/_jsx(ButtonGroup, {
        ...props
      }));
      const buttons = getButtonGroupButtons();
      expect(buttons).toHaveLength(options.length);
      buttons.forEach(button => {
        expect(button).toHaveAttribute("kind", "pills");
      });
    });
    it("renders a label", () => {
      const props = getProps();
      render( /*#__PURE__*/_jsx(ButtonGroup, {
        ...props
      }));
      const widgetLabel = screen.queryByText(`${props.element.label}`);
      expect(widgetLabel).toBeInTheDocument();
    });
    it("passes labelVisibility prop correctly when hidden", () => {
      const props = getProps({
        labelVisibility: {
          value: LabelVisibilityMessageProto.LabelVisibilityOptions.HIDDEN
        }
      });
      render( /*#__PURE__*/_jsx(ButtonGroup, {
        ...props
      }));
      expect(screen.getByTestId("stWidgetLabel")).toHaveStyle("visibility: hidden");
    });
    it("passes labelVisibility prop correctly when collapsed", () => {
      const props = getProps({
        labelVisibility: {
          value: LabelVisibilityMessageProto.LabelVisibilityOptions.COLLAPSED
        }
      });
      render( /*#__PURE__*/_jsx(ButtonGroup, {
        ...props
      }));
      expect(screen.getByTestId("stWidgetLabel")).toHaveStyle("display: none");
    });
    it("renders help prop correctly", async () => {
      const props = getProps({
        help: "help text"
      });
      render( /*#__PURE__*/_jsx(ButtonGroup, {
        ...props
      }));
      const tooltip = screen.getByTestId("stTooltipHoverTarget");
      expect(tooltip).toBeInTheDocument();
      fireEvent.mouseOver(tooltip);
      const helpText = await screen.findByText("help text");
      expect(helpText).toBeInTheDocument();
    });
    describe("visualizes selection behavior", () => {
      it("visualize only selected option", () => {
        const props = getProps({
          selectionVisualization: ButtonGroupProto.SelectionVisualization.ONLY_SELECTED
        });
        render( /*#__PURE__*/_jsx(ButtonGroup, {
          ...props
        }));
        fireEvent.click(getButtonGroupButtons()[0]);
        const buttons = getButtonGroupButtons();
        expectHighlightStyle(buttons[0]);
        expectHighlightStyle(buttons[1], false);
        expectHighlightStyle(buttons[2], false);
      });
      it("visualizes all up to the selected option", () => {
        const props = getProps({
          selectionVisualization: ButtonGroupProto.SelectionVisualization.ALL_UP_TO_SELECTED
        });
        render( /*#__PURE__*/_jsx(ButtonGroup, {
          ...props
        }));
        const buttonGroupWidget = screen.getByTestId("stButtonGroup");
        const buttons = within(buttonGroupWidget).getAllByRole("button");
        const buttonToClick = buttons[2];
        fireEvent.click(buttonToClick);
        expectHighlightStyle(buttonToClick);
        expectHighlightStyle(buttons[0]);
        // the second button has selectedContent set, so it should not be highlighted visually
        expectHighlightStyle(buttons[1], false);
        expectHighlightStyle(buttons[3], false);
      });
      it("has no default visualization when selected content present", () => {
        // used for example by feedback stars
        const disabledVisualizationOption = [ButtonGroupProto.Option.create({
          content: "Some text",
          selectedContent: "Some text selected"
        }), ButtonGroupProto.Option.create({
          content: "Some text 2",
          selectedContent: "Some text selected 2"
        })];
        const props = getProps({
          selectionVisualization: ButtonGroupProto.SelectionVisualization.ALL_UP_TO_SELECTED,
          options: disabledVisualizationOption
        });
        render( /*#__PURE__*/_jsx(ButtonGroup, {
          ...props
        }));
        const buttonGroupWidget = screen.getByTestId("stButtonGroup");
        const buttons = within(buttonGroupWidget).getAllByRole("button");
        const buttonToClick = buttons[1];
        fireEvent.click(buttonToClick);
        expectHighlightStyle(buttonToClick, false);
        expectHighlightStyle(buttons[0], false);
      });
    });
    it("shows selection content when selected and available", () => {
      const props = getProps({
        default: [],
        options: materialIconOnlyOptions
      });
      render( /*#__PURE__*/_jsx(ButtonGroup, {
        ...props
      }));
      const buttons = getButtonGroupButtons();
      buttons.forEach((button, index) => {
        expect(button).toHaveAttribute("kind", "borderlessIcon");
        const icon = within(button).getByTestId("stIconMaterial");
        expect(icon.textContent).toContain(materialIconNames[index]);
      });
      fireEvent.click(buttons[1]);
      expect(getButtonGroupButtons()[1].textContent).toContain("icon_2_selected");
    });
    it("shows bigger icons for borderless ButtonGroup", () => {
      const props = getProps({
        default: [],
        options: materialIconOnlyOptions
      });
      render( /*#__PURE__*/_jsx(ButtonGroup, {
        ...props
      }));
      const buttons = getButtonGroupButtons();
      buttons.forEach((button, index) => {
        expect(button).toHaveAttribute("kind", "borderlessIcon");
        const icon = within(button).getByTestId("stIconMaterial");
        expect(icon.textContent).toContain(materialIconNames[index]);
        expect(icon).toHaveStyle("width: 1.25rem");
      });
    });
    it("shows smaller icons for non-borderless ButtonGroup", () => {
      const props = getProps({
        default: [],
        options: materialIconOnlyOptions,
        style: ButtonGroupProto.Style.SEGMENT
      });
      render( /*#__PURE__*/_jsx(ButtonGroup, {
        ...props
      }));
      const buttons = getButtonGroupButtons();
      buttons.forEach((button, index) => {
        expect(button).toHaveAttribute("kind", "icon");
        const icon = within(button).getByTestId("stIconMaterial");
        expect(icon.textContent).toContain(materialIconNames[index]);
        expect(icon).toHaveStyle("width: 1rem");
      });
    });
  });
  it("resets its value when form is cleared", () => {
    // Create a widget in a clearOnSubmit form
    const props = getProps({
      formId: "form",
      clickMode: ButtonGroupProto.ClickMode.MULTI_SELECT
    });
    props.widgetMgr.setFormSubmitBehaviors("form", true);
    jest.spyOn(props.widgetMgr, "setIntArrayValue");
    render( /*#__PURE__*/_jsx(ButtonGroup, {
      ...props
    }));

    // Change the widget value
    // de-select default value
    fireEvent.click(getButtonGroupButtons()[0]);
    fireEvent.click(getButtonGroupButtons()[1]);
    let buttons = getButtonGroupButtons();
    expectHighlightStyle(buttons[0]);
    // the second button has selectedContent set, so it should not be highlighted visually
    expectHighlightStyle(buttons[1], false);
    expectHighlightStyle(buttons[2], false);
    expectHighlightStyle(buttons[3], false);

    // "Submit" the form
    act(() => props.widgetMgr.submitForm("form", undefined));
    buttons = getButtonGroupButtons();
    // default option selected
    expectHighlightStyle(buttons[0], false);
    expectHighlightStyle(buttons[1], false);
    expectHighlightStyle(buttons[2]);
    expect(props.widgetMgr.setIntArrayValue).toHaveBeenLastCalledWith(props.element, props.element.default, {
      fromUi: true
    }, undefined);
  });
});
describe("ButtonGroup getContentElement", () => {
  it("tests element with content, icon and borderless-style", () => {
    const {
      element,
      kind,
      size
    } = getContentElement("foo", "bar", ButtonGroupProto.Style.BORDERLESS);
    expect(element.type).toBe(React.Fragment);
    const {
      children
    } = element.props;
    expect(children).toHaveLength(2);
    expect(children[0].type).toBe(DynamicIcon);
    expect(children[1].type).toBe(StreamlitMarkdown);
    expect(kind).toBe(BaseButtonKind.BORDERLESS_ICON);
    expect(size).toBe(BaseButtonSize.XSMALL);
  });
  it("tests element with content and no icon and borderless-style", () => {
    const {
      element,
      kind,
      size
    } = getContentElement("foo", undefined, ButtonGroupProto.Style.BORDERLESS);
    expect(element.type).toBe(React.Fragment);
    const {
      children
    } = element.props;
    expect(children).toHaveLength(2);
    expect(children[0]).toBe(undefined);
    expect(children[1].type).toBe(StreamlitMarkdown);
    expect(kind).toBe(BaseButtonKind.BORDERLESS_ICON);
    expect(size).toBe(BaseButtonSize.XSMALL);
  });
  it("tests element with no content, an icon and borderless-style", () => {
    const {
      element,
      kind,
      size
    } = getContentElement("", "foo", ButtonGroupProto.Style.BORDERLESS);
    expect(element.type).toBe(React.Fragment);
    const {
      children
    } = element.props;
    expect(children).toHaveLength(2);
    expect(children[0].type).toBe(DynamicIcon);
    expect(children[1]).toBe("");
    expect(kind).toBe(BaseButtonKind.BORDERLESS_ICON);
    expect(size).toBe(BaseButtonSize.XSMALL);
  });
});
//# sourceMappingURL=ButtonGroup.test.js.map