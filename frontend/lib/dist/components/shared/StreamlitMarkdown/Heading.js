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

import React, { Fragment } from "react";
import IsSidebarContext from "../../core/IsSidebarContext";
import { StyledDivider, StyledStreamlitMarkdown } from "./styled-components";
import "katex/dist/katex.min.css";
import { HeadingWithActionElements, RenderedMarkdown, Tags } from "./StreamlitMarkdown";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
function makeMarkdownHeading(tag, markdown) {
  switch (tag.toLowerCase()) {
    case Tags.H1:
      {
        return `# ${markdown}`;
      }
    case Tags.H2:
      {
        return `## ${markdown}`;
      }
    case Tags.H3:
      {
        return `### ${markdown}`;
      }
    default:
      {
        throw new Error(`Unrecognized tag for header: ${tag}`);
      }
  }
}
function Heading(props) {
  const {
    width,
    element
  } = props;
  const {
    tag,
    anchor,
    body,
    help,
    hideAnchor,
    divider
  } = element;
  const isInSidebar = React.useContext(IsSidebarContext);
  // st.header can contain new lines which are just interpreted as new
  // markdown to be rendered as such.
  const [heading, ...rest] = body.split("\n");
  return /*#__PURE__*/_jsxs("div", {
    style: {
      width
    },
    className: "stHeading",
    "data-testid": "stHeading",
    children: [/*#__PURE__*/_jsxs(StyledStreamlitMarkdown, {
      isCaption: Boolean(false),
      isInSidebar: isInSidebar,
      style: {
        width
      },
      "data-testid": "stMarkdownContainer",
      children: [/*#__PURE__*/_jsx(HeadingWithActionElements, {
        anchor: anchor,
        help: help,
        hideAnchor: hideAnchor,
        tag: tag,
        children: /*#__PURE__*/_jsx(RenderedMarkdown, {
          allowHTML: false,
          source: makeMarkdownHeading(tag, heading)
          // this is purely an inline string
          ,
          overrideComponents: {
            p: Fragment,
            h1: Fragment,
            h2: Fragment,
            h3: Fragment,
            h4: Fragment,
            h5: Fragment,
            h6: Fragment
          }
        })
      }), rest.length > 0 && /*#__PURE__*/_jsx(RenderedMarkdown, {
        source: rest.join("\n"),
        allowHTML: false
      })]
    }), divider && /*#__PURE__*/_jsx(StyledDivider, {
      "data-testid": "stHeadingDivider",
      rainbow: divider.includes("linear"),
      color: divider
    })]
  });
}
export default Heading;
//# sourceMappingURL=Heading.js.map