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

import React, { PureComponent } from "react";
import { withTheme } from "@emotion/react";
import { FullscreenEnter, FullscreenExit } from "@emotion-icons/open-iconic";
import Icon from "../Icon";
import { LibContext } from "../../core/LibContext";
import { StyledFullScreenButton, StyledFullScreenFrame } from "./styled-components";

/*
 * Function responsible for rendering children.
 * This function should implement the following signature:
 * ({ height, width }) => PropTypes.element
 */
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
/*
 * A component that draws a button on the top right of the
 * wrapper element. OnClick, change the element container
 * to fixed and cover all screen, updating wrapped element height and width
 */
class FullScreenWrapper extends PureComponent {
  constructor(props) {
    super(props);
    this.context = void 0;
    this.controlKeys = event => {
      const {
        expanded
      } = this.state;
      if (event.keyCode === 27 && expanded) {
        // Exit fullscreen
        this.zoomOut();
      }
    };
    this.zoomIn = () => {
      document.body.style.overflow = "hidden";
      this.context.setFullScreen(true);
      this.setState({
        expanded: true
      });
    };
    this.zoomOut = () => {
      document.body.style.overflow = "unset";
      this.context.setFullScreen(false);
      this.setState({
        expanded: false
      });
    };
    this.convertScssRemValueToPixels = scssValue => {
      const remValue = parseFloat(scssValue);
      return remValue * parseFloat(getComputedStyle(document.documentElement).fontSize);
    };
    this.getWindowDimensions = () => {
      const padding = this.convertScssRemValueToPixels(this.props.theme.spacing.md);
      const paddingTop = this.convertScssRemValueToPixels(this.props.theme.sizes.fullScreenHeaderHeight);
      return {
        fullWidth: window.innerWidth - padding * 2,
        // Left and right
        fullHeight: window.innerHeight - (padding + paddingTop) // Bottom and Top
      };
    };
    this.updateWindowDimensions = () => {
      this.setState(this.getWindowDimensions());
    };
    this.state = {
      expanded: false,
      ...this.getWindowDimensions()
    };
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimensions);
    document.addEventListener("keydown", this.controlKeys, false);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
    document.removeEventListener("keydown", this.controlKeys, false);
  }
  render() {
    const {
      expanded,
      fullWidth,
      fullHeight
    } = this.state;
    const {
      children,
      width,
      height,
      disableFullscreenMode
    } = this.props;
    let buttonImage = FullscreenEnter;
    let buttonOnClick = this.zoomIn;
    let buttonTitle = "View fullscreen";
    if (expanded) {
      buttonImage = FullscreenExit;
      buttonOnClick = this.zoomOut;
      buttonTitle = "Exit fullscreen";
    }
    return /*#__PURE__*/_jsxs(StyledFullScreenFrame, {
      isExpanded: expanded,
      "data-testid": "stFullScreenFrame",
      children: [!disableFullscreenMode && /*#__PURE__*/_jsx(StyledFullScreenButton, {
        "data-testid": "StyledFullScreenButton",
        onClick: buttonOnClick,
        title: buttonTitle,
        isExpanded: expanded,
        children: /*#__PURE__*/_jsx(Icon, {
          content: buttonImage
        })
      }), expanded ? children({
        width: fullWidth,
        height: fullHeight,
        expanded,
        expand: this.zoomIn,
        collapse: this.zoomOut
      }) : children({
        width,
        height,
        expanded,
        expand: this.zoomIn,
        collapse: this.zoomOut
      })]
    });
  }
}
FullScreenWrapper.contextType = LibContext;
export default withTheme(FullScreenWrapper);
//# sourceMappingURL=FullScreenWrapper.js.map