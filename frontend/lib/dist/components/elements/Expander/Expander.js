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

import React, { useEffect, useRef, useState } from "react";
import { ExpandLess, ExpandMore } from "@emotion-icons/material-outlined";
import { DynamicIcon, StyledIcon, StyledSpinnerIcon } from "../../shared/Icon";
import StreamlitMarkdown from "../../shared/StreamlitMarkdown";
import { notNullOrUndefined } from "../../../util/utils";
import { LibContext } from "../../core/LibContext";
import { isPresetTheme } from "../../../theme";
import { BORDER_SIZE, StyledDetails, StyledDetailsPanel, StyledExpandableContainer, StyledSummary, StyledSummaryHeading } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Renders an icon for the expander and optionally a user-defined icon.
 *
 * If the icon is "spinner", it will render a spinner icon.
 * If the icon is a valid, user-defined icon, it will render the user-defined icon.
 * Otherwise, it will render nothing.
 *
 * @param {string} icon - The icon to render.
 * @returns {ReactElement}
 */
export const ExpanderIcon = props => {
  const {
    icon
  } = props;
  const {
    activeTheme
  } = React.useContext(LibContext);
  const iconProps = {
    size: "lg",
    margin: "",
    padding: ""
  };
  const statusIconTestIds = {
    ":material/check:": "stExpanderIconCheck",
    ":material/error:": "stExpanderIconError"
  };
  if (icon === "spinner") {
    const usingCustomTheme = !isPresetTheme(activeTheme);
    return /*#__PURE__*/_jsx(StyledSpinnerIcon, {
      usingCustomTheme: usingCustomTheme,
      "data-testid": "stExpanderIconSpinner",
      ...iconProps
    });
  }
  return icon ? /*#__PURE__*/_jsx(DynamicIcon, {
    color: "inherit",
    iconValue: icon,
    testid: statusIconTestIds[icon] || "stExpanderIcon",
    ...iconProps
  }) : /*#__PURE__*/_jsx(_Fragment, {});
};
const Expander = _ref => {
  let {
    element,
    isStale,
    empty,
    children
  } = _ref;
  const {
    label,
    expanded: initialExpanded
  } = element;
  const [expanded, setExpanded] = useState(initialExpanded || false);
  const detailsRef = useRef(null);
  const summaryRef = useRef(null);
  const animationRef = useRef(null);
  const timeoutRef = useRef(null);
  const contentRef = useRef(null);
  useEffect(() => {
    // Only apply the expanded state if it was actually set in the proto.
    if (notNullOrUndefined(initialExpanded)) {
      setExpanded(initialExpanded);

      // We manage the open attribute via the detailsRef and not with React state
      if (detailsRef.current) {
        detailsRef.current.open = initialExpanded;
      }
    }

    // Having `label` in the dependency array here is necessary because
    // sometimes two distinct expanders look so similar that even the react
    // diffing algorithm decides that they're the same element with updated
    // props (this happens when something in the app removes one expander and
    // replaces it with another in the same position).
    //
    // By adding `label` as a dependency, we ensure that we reset the
    // expander's `expanded` state in this edge case.
  }, [label, initialExpanded]);
  const onAnimationFinish = open => {
    if (!detailsRef.current) {
      return;
    }
    detailsRef.current.open = open;
    animationRef.current = null;
    detailsRef.current.style.height = "";
    detailsRef.current.style.overflow = "";
  };
  const toggleAnimation = (detailsEl, startHeight, endHeight) => {
    const isOpen = endHeight > startHeight;
    if (animationRef.current) {
      animationRef.current.cancel();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    }
    const animation = detailsEl.animate({
      height: [`${startHeight}px`, `${endHeight}px`]
    }, {
      duration: 500,
      easing: "cubic-bezier(0.23, 1, 0.32, 1)"
    });
    animation.onfinish = () => onAnimationFinish(isOpen);
    animationRef.current = animation;
  };
  const toggle = e => {
    e.preventDefault();
    if (empty) {
      return;
    }
    setExpanded(!expanded);
    const detailsEl = detailsRef.current;
    if (!detailsEl || !summaryRef.current) {
      return;
    }
    detailsEl.style.overflow = "hidden";
    const detailsHeight = detailsEl.getBoundingClientRect().height;
    const summaryHeight = summaryRef.current.getBoundingClientRect().height;
    if (!expanded) {
      detailsEl.style.height = `${detailsHeight}px`;
      detailsEl.open = true;
      window.requestAnimationFrame(() => {
        // For expansion animations, we rely on the rendered width and height
        // of the children content. However, in Safari, the children are not
        // rendered because Safari doesn't paint elements that are not visible
        // (in this case, the details element is not visible because it's
        // not open). This operation produces inconsistent heights to animate.
        // To work around this, we force a repaint by animating a tiny bit
        // and animate the rest of it later.
        toggleAnimation(detailsEl, detailsHeight, summaryHeight + 2 * BORDER_SIZE + 5 // Arbitrary size of 5px
        );
        timeoutRef.current = setTimeout(() => {
          if (!contentRef.current) {
            return;
          }
          const contentHeight = contentRef.current.getBoundingClientRect().height;
          toggleAnimation(detailsEl, detailsHeight, summaryHeight + contentHeight + 2 * BORDER_SIZE);
        }, 100);
      });
    } else {
      toggleAnimation(detailsEl, detailsHeight, summaryHeight + 2 * BORDER_SIZE);
    }
  };
  return /*#__PURE__*/_jsx(StyledExpandableContainer, {
    className: "stExpander",
    "data-testid": "stExpander",
    children: /*#__PURE__*/_jsxs(StyledDetails, {
      isStale: isStale,
      ref: detailsRef,
      children: [/*#__PURE__*/_jsxs(StyledSummary, {
        onClick: toggle,
        empty: empty,
        ref: summaryRef,
        children: [/*#__PURE__*/_jsxs(StyledSummaryHeading, {
          children: [element.icon && /*#__PURE__*/_jsx(ExpanderIcon, {
            icon: element.icon
          }), /*#__PURE__*/_jsx(StreamlitMarkdown, {
            source: label,
            allowHTML: false,
            isLabel: true
          })]
        }), !empty ? /*#__PURE__*/_jsx(StyledIcon, {
          as: expanded ? ExpandLess : ExpandMore,
          color: "inherit",
          "aria-hidden": "true",
          "data-testid": "stExpanderToggleIcon",
          size: "lg",
          margin: "",
          padding: ""
        }) : /*#__PURE__*/_jsx(_Fragment, {})]
      }), !empty ? /*#__PURE__*/_jsx(StyledDetailsPanel, {
        "data-testid": "stExpanderDetails",
        ref: contentRef,
        children: children
      }) : /*#__PURE__*/_jsx(_Fragment, {})]
    })
  });
};
export default Expander;
//# sourceMappingURL=Expander.js.map