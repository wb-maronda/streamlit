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

import React, { useContext, useEffect, useRef, useState } from "react";
import { useTheme } from "@emotion/react";
import { Tabs as UITabs, Tab as UITab } from "baseui/tabs-motion";
import { isElementStale } from "../../core/Block/utils";
import { LibContext } from "../../core/LibContext";
import StreamlitMarkdown from "../../shared/StreamlitMarkdown";
import { StyledTabContainer } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
function Tabs(props) {
  const {
    widgetsDisabled,
    node,
    isStale,
    scriptRunState,
    scriptRunId
  } = props;
  const {
    fragmentIdsThisRun
  } = useContext(LibContext);
  let allTabLabels = [];
  const [activeTabKey, setActiveTabKey] = useState(0);
  const [activeTabName, setActiveTabName] = useState(
  // @ts-expect-error
  node.children[0].deltaBlock.tab.label || "0");
  const tabListRef = useRef(null);
  const theme = useTheme();
  const [isOverflowing, setIsOverflowing] = useState(false);

  // Reconciles active key & tab name
  useEffect(() => {
    const newTabKey = allTabLabels.indexOf(activeTabName);
    if (newTabKey === -1) {
      setActiveTabKey(0);
      setActiveTabName(allTabLabels[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allTabLabels]);
  useEffect(() => {
    if (tabListRef.current) {
      const {
        scrollWidth,
        clientWidth
      } = tabListRef.current;
      setIsOverflowing(scrollWidth > clientWidth);
    }

    // If tab # changes, match the selected tab label, otherwise default to first tab
    const newTabKey = allTabLabels.indexOf(activeTabName);
    if (newTabKey !== -1) {
      setActiveTabKey(newTabKey);
      setActiveTabName(allTabLabels[newTabKey]);
    } else {
      setActiveTabKey(0);
      setActiveTabName(allTabLabels[0]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [node.children.length]);
  const TAB_HEIGHT = "2.5rem";
  const TAB_BORDER_HEIGHT = theme.spacing.threeXS;
  return /*#__PURE__*/_jsx(StyledTabContainer, {
    isOverflowing: isOverflowing,
    tabHeight: TAB_HEIGHT,
    className: "stTabs",
    "data-testid": "stTabs",
    children: /*#__PURE__*/_jsx(UITabs, {
      activateOnFocus: true,
      activeKey: activeTabKey,
      onChange: _ref => {
        let {
          activeKey
        } = _ref;
        setActiveTabKey(activeKey);
        setActiveTabName(allTabLabels[activeKey]);
      }
      /* renderAll on UITabs should always be set to true to avoid scrolling issue
         https://github.com/streamlit/streamlit/issues/5069
       */,
      renderAll: true,
      disabled: widgetsDisabled,
      overrides: {
        TabHighlight: {
          style: () => ({
            backgroundColor: widgetsDisabled ? theme.colors.fadedText40 : theme.colors.primary,
            height: TAB_BORDER_HEIGHT
          })
        },
        TabBorder: {
          style: () => ({
            backgroundColor: theme.colors.fadedText05,
            height: TAB_BORDER_HEIGHT
          })
        },
        TabList: {
          props: {
            ref: tabListRef
          },
          style: () => ({
            gap: theme.spacing.lg,
            marginBottom: "-".concat(TAB_BORDER_HEIGHT),
            paddingBottom: TAB_BORDER_HEIGHT,
            overflowY: "hidden",
            ...(isStale ? {
              opacity: 0.33,
              transition: "opacity 1s ease-in 0.5s"
            } : {})
          })
        },
        Root: {
          style: () => ({
            // resetting transform to fix full screen wrapper
            transform: "none"
          })
        }
      },
      children: node.children.map((appNode, index) => {
        var _childProps$node$delt, _childProps$node$delt2;
        // Reset available tab labels when rerendering
        if (index === 0) allTabLabels = [];

        // If the tab is stale, disable it
        const isStaleTab = isElementStale(appNode, scriptRunState, scriptRunId, fragmentIdsThisRun);

        // Ensure stale tab's elements are also marked stale/disabled
        const childProps = {
          ...props,
          isStale: isStale || isStaleTab,
          widgetsDisabled,
          node: appNode
        };
        let nodeLabel = index.toString();
        if ((_childProps$node$delt = childProps.node.deltaBlock) !== null && _childProps$node$delt !== void 0 && (_childProps$node$delt2 = _childProps$node$delt.tab) !== null && _childProps$node$delt2 !== void 0 && _childProps$node$delt2.label) {
          nodeLabel = childProps.node.deltaBlock.tab.label;
        }
        allTabLabels[index] = nodeLabel;
        const isSelected = activeTabKey.toString() === index.toString();
        const isLast = index === node.children.length - 1;
        return /*#__PURE__*/_jsx(UITab, {
          title: /*#__PURE__*/_jsx(StreamlitMarkdown, {
            source: nodeLabel,
            allowHTML: false,
            isLabel: true
          }),
          "data-testid": "stTab",
          disabled: widgetsDisabled,
          overrides: {
            TabPanel: {
              style: () => ({
                paddingLeft: theme.spacing.none,
                paddingRight: theme.spacing.none,
                paddingBottom: theme.spacing.none,
                paddingTop: theme.spacing.lg
              })
            },
            Tab: {
              style: () => ({
                height: TAB_HEIGHT,
                whiteSpace: "nowrap",
                paddingLeft: theme.spacing.none,
                paddingRight: theme.spacing.none,
                paddingTop: theme.spacing.none,
                paddingBottom: theme.spacing.none,
                fontSize: theme.fontSizes.sm,
                background: "transparent",
                color: widgetsDisabled ? theme.colors.fadedText40 : theme.colors.bodyText,
                ":focus": {
                  outline: "none",
                  color: widgetsDisabled ? theme.colors.fadedText40 : theme.colors.primary,
                  background: "none"
                },
                ":hover": {
                  color: widgetsDisabled ? theme.colors.fadedText40 : theme.colors.primary,
                  background: "none"
                },
                ...(isSelected ? {
                  color: widgetsDisabled ? theme.colors.fadedText40 : theme.colors.primary
                } : {}),
                ...(isOverflowing && isLast ? {
                  // Add minimal required padding to hide the overscroll gradient
                  paddingRight: "0.6rem"
                } : {}),
                ...(!isStale && isStaleTab ? {
                  // Apply stale effect if only this specific
                  // tab is stale but not the entire tab container.
                  opacity: 0.33,
                  transition: "opacity 1s ease-in 0.5s"
                } : {})
              })
            }
          },
          children: props.renderTabContent(childProps)
        }, index);
      })
    })
  });
}
export default Tabs;
//# sourceMappingURL=Tabs.js.map