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

import React, { useState } from "react";
import Tooltip from "./Tooltip";
import { StyledWrapper, StyledEllipsizedDiv } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * Tooltip that only shows when the children are overflowing (in which case,
 * this also ellipsizes the children).
 */
function OverflowTooltip(_ref) {
  let {
    content,
    placement,
    children,
    inline,
    style
  } = _ref;
  const childRef = React.useRef(null);
  const [allowTooltip, setAllowTooltip] = useState(false);
  React.useEffect(() => {
    const newAllowTooltip = childRef !== null && childRef !== void 0 && childRef.current ? childRef.current.offsetWidth < childRef.current.scrollWidth : false;
    if (newAllowTooltip !== allowTooltip) {
      setAllowTooltip(newAllowTooltip);
    }
  }, [children, allowTooltip]);
  return /*#__PURE__*/_jsx(Tooltip, {
    content: allowTooltip ? content : "",
    placement: placement,
    inline: inline,
    children: /*#__PURE__*/_jsx(StyledWrapper, {
      children: /*#__PURE__*/_jsx(StyledEllipsizedDiv, {
        ref: childRef,
        style: style,
        children: children
      })
    })
  });
}
export default OverflowTooltip;
//# sourceMappingURL=OverflowTooltip.js.map