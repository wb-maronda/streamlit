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
import BaseButton, { BaseButtonTooltip, BaseButtonKind, BaseButtonSize } from "../../shared/BaseButton";
import StreamlitMarkdown from "../../shared/StreamlitMarkdown";
import { LibContext } from "../../core/LibContext";
import { jsx as _jsx } from "react/jsx-runtime";
export function createDownloadLink(endpoints, url, enforceDownloadInNewTab) {
  const link = document.createElement("a");
  const uri = endpoints.buildMediaURL(url);
  link.setAttribute("href", uri);
  if (enforceDownloadInNewTab) {
    link.setAttribute("target", "_blank");
  } else {
    link.setAttribute("target", "_self");
  }
  link.setAttribute("download", "");
  return link;
}
function DownloadButton(props) {
  const {
    disabled,
    element,
    widgetMgr,
    width,
    endpoints,
    fragmentId
  } = props;
  const style = {
    width
  };
  const {
    libConfig: {
      enforceDownloadInNewTab = false
    } // Default to false, if no libConfig, e.g. for tests
  } = React.useContext(LibContext);
  const kind = element.type === "primary" ? BaseButtonKind.PRIMARY : BaseButtonKind.SECONDARY;
  const handleDownloadClick = () => {
    // Downloads are only done on links, so create a hidden one and click it
    // for the user.
    widgetMgr.setTriggerValue(element, {
      fromUi: true
    }, fragmentId);
    const link = createDownloadLink(endpoints, element.url, enforceDownloadInNewTab);
    link.click();
  };

  // When useContainerWidth true & has help tooltip,
  // we need to pass the container width down to the button
  const fluidWidth = element.help ? width : true;
  return /*#__PURE__*/_jsx("div", {
    className: "row-widget stDownloadButton",
    "data-testid": "stDownloadButton",
    style: style,
    children: /*#__PURE__*/_jsx(BaseButtonTooltip, {
      help: element.help,
      children: /*#__PURE__*/_jsx(BaseButton, {
        kind: kind,
        size: BaseButtonSize.SMALL,
        disabled: disabled,
        onClick: handleDownloadClick,
        fluidWidth: element.useContainerWidth ? fluidWidth : false,
        children: /*#__PURE__*/_jsx(StreamlitMarkdown, {
          source: element.label,
          allowHTML: false,
          isLabel: true,
          largerLabel: true,
          disableLinks: true
        })
      })
    })
  });
}
export default DownloadButton;
//# sourceMappingURL=DownloadButton.js.map