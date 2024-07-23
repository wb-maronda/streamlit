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
import { visit } from "unist-util-visit";
import { useTheme } from "@emotion/react";
import ReactMarkdown from "react-markdown";
import once from "lodash/once";
import omit from "lodash/omit";
import remarkDirective from "remark-directive";
import remarkMathPlugin from "remark-math";
import rehypeRaw from "rehype-raw";
import rehypeKatex from "rehype-katex";
import { Link2 as LinkIcon } from "react-feather";
import remarkEmoji from "remark-emoji";
import remarkGfm from "remark-gfm";
import CodeBlock from "../../elements/CodeBlock";
import IsDialogContext from "../../core/IsDialogContext";
import IsSidebarContext from "../../core/IsSidebarContext";
import ErrorBoundary from "../ErrorBoundary";
import { InlineTooltipIcon } from "../TooltipIcon";
import { getMarkdownTextColors, getMarkdownBgColors } from "../../../theme";
import { LibContext } from "../../core/LibContext";
import { StyledLinkIcon, StyledHeadingActionElements, StyledStreamlitMarkdown, StyledHeadingWithActionElements } from "./styled-components";
import "katex/dist/katex.min.css";
import xxhash from "xxhashjs";
import StreamlitSyntaxHighlighter from "../../elements/CodeBlock/StreamlitSyntaxHighlighter";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export let Tags;
(function (Tags) {
  Tags["H1"] = "h1";
  Tags["H2"] = "h2";
  Tags["H3"] = "h3";
})(Tags || (Tags = {}));
/**
 * Creates a slug suitable for use as an anchor given a string.
 * Splits the string on non-alphanumeric characters, and joins with a dash.
 */
export function createAnchorFromText(text) {
  let newAnchor = "";
  // Check if the text is valid ASCII characters - necessary for fully functional anchors (issue #5291)
  const isASCII = text && /^[\x00-\x7F]*$/.test(text);
  if (isASCII) {
    newAnchor = text === null || text === void 0 ? void 0 : text.toLowerCase().split(/[^\p{L}\p{N}]+/gu) // split on non-alphanumeric characters
    .filter(Boolean) // filter out falsy values using Boolean constructor
    .join("-");
  } else if (text) {
    // if the text is not valid ASCII, use a hash of the text
    newAnchor = xxhash.h32(text, 0xabcd).toString(16);
  }
  return newAnchor;
}

// Note: React markdown limits hrefs to specific protocols ('http', 'https',
// 'mailto', 'tel') We are essentially allowing any URL (a data URL). It can
// be considered a security flaw, but developers can choose to expose it.
function transformLinkUri(href) {
  return href;
}

// wrapping in `once` ensures we only scroll once
const scrollNodeIntoView = once(node => {
  node.scrollIntoView(true);
});
const HeaderActionElements = _ref => {
  let {
    elementId,
    help,
    hideAnchor
  } = _ref;
  if (!help && hideAnchor) {
    return /*#__PURE__*/_jsx(_Fragment, {});
  }
  return /*#__PURE__*/_jsxs(StyledHeadingActionElements, {
    "data-testid": "stHeaderActionElements",
    children: [help && /*#__PURE__*/_jsx(InlineTooltipIcon, {
      content: help
    }), elementId && !hideAnchor && /*#__PURE__*/_jsx(StyledLinkIcon, {
      href: "#".concat(elementId),
      children: /*#__PURE__*/_jsx(LinkIcon, {
        size: "18"
      })
    })]
  });
};
export const HeadingWithActionElements = _ref2 => {
  let {
    tag,
    anchor: propsAnchor,
    help,
    hideAnchor,
    children,
    tagProps
  } = _ref2;
  const isInSidebar = React.useContext(IsSidebarContext);
  const isInDialog = React.useContext(IsDialogContext);
  const [elementId, setElementId] = React.useState(propsAnchor);
  const [target, setTarget] = React.useState(null);
  const {
    addScriptFinishedHandler,
    removeScriptFinishedHandler
  } = React.useContext(LibContext);
  const onScriptFinished = React.useCallback(() => {
    if (target !== null) {
      // wait a bit for everything on page to finish loading
      window.setTimeout(() => {
        scrollNodeIntoView(target);
      }, 300);
    }
  }, [target]);
  React.useEffect(() => {
    addScriptFinishedHandler(onScriptFinished);
    return () => {
      removeScriptFinishedHandler(onScriptFinished);
    };
  }, [addScriptFinishedHandler, removeScriptFinishedHandler, onScriptFinished]);
  const ref = React.useCallback(node => {
    if (node === null) {
      return;
    }
    const anchor = propsAnchor || createAnchorFromText(node.textContent);
    setElementId(anchor);
    if (window.location.hash.slice(1) === anchor) {
      setTarget(node);
    }
  }, [propsAnchor]);
  const isInSidebarOrDialog = isInSidebar || isInDialog;
  const actionElements = /*#__PURE__*/_jsx(HeaderActionElements, {
    elementId: elementId,
    help: help,
    hideAnchor: hideAnchor || isInSidebarOrDialog
  });
  const attributes = isInSidebarOrDialog ? {} : {
    ref,
    id: elementId
  };
  // We nest the action-elements (tooltip, link-icon) into the header element (e.g. h1),
  // so that it appears inline. For context: we also tried setting the h's display attribute to 'inline', but
  // then we would need to add padding to the outer container and fiddle with the vertical alignment.
  const headerElementWithActions = /*#__PURE__*/React.createElement(tag, {
    ...tagProps,
    ...attributes
  }, /*#__PURE__*/_jsxs(_Fragment, {
    children: [children, actionElements]
  }));

  // we don't want to apply styling, so return the "raw" header
  if (isInSidebarOrDialog) {
    return headerElementWithActions;
  }
  return /*#__PURE__*/_jsx(StyledHeadingWithActionElements, {
    "data-testid": "stHeadingWithActionElements",
    children: headerElementWithActions
  });
};
export const CustomHeading = _ref3 => {
  let {
    node,
    children,
    ...rest
  } = _ref3;
  const anchor = rest["data-anchor"];
  return /*#__PURE__*/_jsx(HeadingWithActionElements, {
    tag: node.tagName,
    anchor: anchor,
    tagProps: rest,
    children: children
  });
};
/**
 * Renders code tag with highlighting based on requested language.
 */
export const CustomCodeTag = _ref4 => {
  let {
    inline,
    className,
    children,
    ...props
  } = _ref4;
  const match = /language-(\w+)/.exec(className || "");
  const codeText = String(children).trim().replace(/\n$/, "");
  const language = match && match[1] || "";
  return !inline ? /*#__PURE__*/_jsx(StreamlitSyntaxHighlighter, {
    language: language,
    showLineNumbers: false,
    children: codeText
  }) : /*#__PURE__*/_jsx("code", {
    className: className,
    ...omit(props, "node"),
    children: children
  });
};
export function RenderedMarkdown(_ref5) {
  let {
    allowHTML,
    source,
    overrideComponents,
    isLabel,
    disableLinks
  } = _ref5;
  const renderers = {
    pre: CodeBlock,
    code: CustomCodeTag,
    a: LinkWithTargetBlank,
    h1: CustomHeading,
    h2: CustomHeading,
    h3: CustomHeading,
    h4: CustomHeading,
    h5: CustomHeading,
    h6: CustomHeading,
    ...(overrideComponents || {})
  };
  const theme = useTheme();
  const {
    red,
    orange,
    yellow,
    green,
    blue,
    violet,
    purple,
    gray
  } = getMarkdownTextColors(theme);
  const {
    redbg,
    orangebg,
    yellowbg,
    greenbg,
    bluebg,
    violetbg,
    purplebg,
    graybg
  } = getMarkdownBgColors(theme);
  const colorMapping = new Map(Object.entries({
    red: "color: ".concat(red),
    blue: "color: ".concat(blue),
    green: "color: ".concat(green),
    violet: "color: ".concat(violet),
    orange: "color: ".concat(orange),
    gray: "color: ".concat(gray),
    grey: "color: ".concat(gray),
    // Gradient from red, orange, yellow, green, blue, violet, purple
    rainbow: "color: transparent; background-clip: text; -webkit-background-clip: text; background-image: linear-gradient(to right,\n        ".concat(red, ", ").concat(orange, ", ").concat(yellow, ", ").concat(green, ", ").concat(blue, ", ").concat(violet, ", ").concat(purple, ");"),
    "red-background": "background-color: ".concat(redbg),
    "blue-background": "background-color: ".concat(bluebg),
    "green-background": "background-color: ".concat(greenbg),
    "violet-background": "background-color: ".concat(violetbg),
    "orange-background": "background-color: ".concat(orangebg),
    "gray-background": "background-color: ".concat(graybg),
    "grey-background": "background-color: ".concat(graybg),
    // Gradient from red, orange, yellow, green, blue, violet, purple
    "rainbow-background": "background: linear-gradient(to right,\n        ".concat(redbg, ", ").concat(orangebg, ", ").concat(yellowbg, ", ").concat(greenbg, ", ").concat(bluebg, ", ").concat(violetbg, ", ").concat(purplebg, ");")
  }));
  function remarkColoring() {
    return tree => {
      visit(tree, node => {
        if (node.type === "textDirective") {
          const nodeName = String(node.name);
          if (colorMapping.has(nodeName)) {
            const data = node.data || (node.data = {});
            const style = colorMapping.get(nodeName);
            data.hName = "span";
            data.hProperties = data.hProperties || {};
            data.hProperties.style = style;
            // Add class for background color for custom styling
            if (style && (/background-color:/.test(style) || /background:/.test(style))) {
              data.hProperties.className = (data.hProperties.className || "") + " has-background-color";
            }
          }
        }
      });
    };
  }
  const plugins = [remarkMathPlugin, remarkEmoji, remarkGfm, remarkDirective, remarkColoring];
  const rehypePlugins = [rehypeKatex, ...(allowHTML ? [rehypeRaw] : [])];

  // Sets disallowed markdown for widget labels
  const disallowed = [
  // Restricts images, table elements, headings, unordered/ordered lists, task lists, horizontal rules, & blockquotes
  "img", "table", "thead", "tbody", "tr", "th", "td", "h1", "h2", "h3", "ul", "ol", "li", "input", "hr", "blockquote",
  // additionally restrict links
  ...(disableLinks ? ["a"] : [])];
  return /*#__PURE__*/_jsx(ErrorBoundary, {
    children: /*#__PURE__*/_jsx(ReactMarkdown, {
      remarkPlugins: plugins,
      rehypePlugins: rehypePlugins,
      components: renderers,
      transformLinkUri: transformLinkUri,
      disallowedElements: isLabel ? disallowed : []
      // unwrap and render children from invalid markdown
      ,
      unwrapDisallowed: true,
      children: source
    })
  });
}

/**
 * Wraps the <ReactMarkdown> component to include our standard
 * renderers and AST plugins (for syntax highlighting, HTML support, etc).
 */
class StreamlitMarkdown extends PureComponent {
  constructor() {
    super(...arguments);
    this.context = void 0;
    this.componentDidCatch = () => {
      const {
        source
      } = this.props;
      throw Object.assign(new Error(), {
        name: "Error parsing Markdown or HTML in this string",
        message: /*#__PURE__*/_jsx("p", {
          children: source
        }),
        stack: null
      });
    };
  }
  render() {
    const {
      source,
      allowHTML,
      style,
      isCaption,
      isLabel,
      boldLabel,
      largerLabel,
      disableLinks,
      isToast
    } = this.props;
    const isInSidebar = this.context;
    return /*#__PURE__*/_jsx(StyledStreamlitMarkdown, {
      isCaption: Boolean(isCaption),
      isInSidebar: isInSidebar,
      isLabel: isLabel,
      boldLabel: boldLabel,
      largerLabel: largerLabel,
      isToast: isToast,
      style: style,
      "data-testid": isCaption ? "stCaptionContainer" : "stMarkdownContainer",
      children: /*#__PURE__*/_jsx(RenderedMarkdown, {
        source: source,
        allowHTML: allowHTML,
        isLabel: isLabel,
        disableLinks: disableLinks
      })
    });
  }
}
StreamlitMarkdown.contextType = IsSidebarContext;
// Using target="_blank" without rel="noopener noreferrer" is a security risk:
// see https://mathiasbynens.github.io/rel-noopener
export function LinkWithTargetBlank(props) {
  // if it's a #hash link, don't open in new tab
  const {
    href
  } = props;
  if (href && href.startsWith("#")) {
    const {
      children,
      ...rest
    } = props;
    return /*#__PURE__*/_jsx("a", {
      ...omit(rest, "node"),
      children: children
    });
  }
  const {
    title,
    children,
    target,
    rel,
    ...rest
  } = props;
  return /*#__PURE__*/_jsx("a", {
    href: href,
    title: title,
    target: target || "_blank",
    rel: rel || "noopener noreferrer",
    ...omit(rest, "node"),
    children: children
  });
}
export default StreamlitMarkdown;
//# sourceMappingURL=StreamlitMarkdown.js.map