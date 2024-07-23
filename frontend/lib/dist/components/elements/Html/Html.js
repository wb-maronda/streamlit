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

import React, { useState, useEffect, useRef } from "react";
import DOMPurify from "dompurify";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
const sanitizeString = html => {
  const sanitizationOptions = {
    // Default to permit HTML, SVG and MathML, this limits to HTML only
    USE_PROFILES: {
      html: true
    },
    // glue elements like style, script or others to document.body and prevent unintuitive browser behavior in several edge-cases
    FORCE_BODY: true
  };
  return DOMPurify.sanitize(html, sanitizationOptions);
};

/**
 * HTML code to insert into the page.
 */
export default function Html(_ref) {
  let {
    element,
    width
  } = _ref;
  const {
    body
  } = element;
  const [sanitizedHtml, setSanitizedHtml] = useState(sanitizeString(body));
  const htmlRef = useRef(null);
  useEffect(() => {
    if (sanitizeString(body) !== sanitizedHtml) {
      setSanitizedHtml(sanitizeString(body));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [body]);
  useEffect(() => {
    var _htmlRef$current, _htmlRef$current$pare;
    if (((_htmlRef$current = htmlRef.current) === null || _htmlRef$current === void 0 ? void 0 : _htmlRef$current.clientHeight) === 0 && ((_htmlRef$current$pare = htmlRef.current.parentElement) === null || _htmlRef$current$pare === void 0 ? void 0 : _htmlRef$current$pare.childElementCount) === 1) {
      // div has no rendered content - hide to avoid unnecessary spacing
      htmlRef.current.parentElement.classList.add("empty-html");
    }
  });
  return /*#__PURE__*/_jsx(_Fragment, {
    children: sanitizedHtml && /*#__PURE__*/_jsx("div", {
      className: "stHtml",
      "data-testid": "stHtml",
      ref: htmlRef,
      style: {
        width: width
      },
      dangerouslySetInnerHTML: {
        __html: sanitizedHtml
      }
    })
  });
}
//# sourceMappingURL=Html.js.map