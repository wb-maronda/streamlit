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

import React, { PureComponent, createRef } from "react";
import Clipboard from "clipboard";
import { Copy as CopyIcon } from "react-feather";
import { StyledCopyButton } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
class CopyButton extends PureComponent {
  constructor() {
    super(...arguments);
    this.button = /*#__PURE__*/createRef();
    this.clipboard = null;
    this.componentDidMount = () => {
      const node = this.button.current;
      if (node !== null) {
        this.clipboard = new Clipboard(node);
      }
    };
    this.componentWillUnmount = () => {
      if (this.clipboard !== null) {
        this.clipboard.destroy();
      }
    };
  }
  render() {
    return /*#__PURE__*/_jsx(StyledCopyButton, {
      "data-testid": "stCopyButton",
      title: "Copy to clipboard",
      ref: this.button,
      "data-clipboard-text": this.props.text,
      style: {
        top: 0,
        right: 0
      },
      children: /*#__PURE__*/_jsx(CopyIcon, {
        size: "16"
      })
    });
  }
}
export default CopyButton;
//# sourceMappingURL=CopyButton.js.map