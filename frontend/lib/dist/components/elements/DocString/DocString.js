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
import { StyledDocContainer, StyledDocHeader, StyledDocName, StyledDocString, StyledDocSummary, StyledDocType, StyledDocValue, StyledMembersSummaryCell, StyledMembersDetailsCell, StyledMembersRow, StyledMembersTable } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Functional element representing formatted text.
 */
export default function DocString(_ref) {
  let {
    width,
    element
  } = _ref;
  const {
    name,
    type,
    value,
    docString,
    members
  } = element;

  // Put it all together into a nice little html view.
  return /*#__PURE__*/_jsxs(StyledDocContainer, {
    width: width,
    "data-testid": "stDocstring",
    children: [/*#__PURE__*/_jsx(StyledDocHeader, {
      children: /*#__PURE__*/_jsxs(StyledDocSummary, {
        children: [name ? /*#__PURE__*/_jsx(StyledDocName, {
          "data-testid": "stDocstringName",
          children: name
        }) : null, type ? /*#__PURE__*/_jsx(StyledDocType, {
          "data-testid": "stDocstringType",
          children: type
        }) : null, value ? /*#__PURE__*/_jsx(StyledDocValue, {
          "data-testid": "stDocstringValue",
          children: value
        }) : null]
      })
    }), /*#__PURE__*/_jsx(StyledDocString, {
      "data-testid": "stDocstring-Doc",
      children: docString || "No docs available"
    }), members.length > 0 ? /*#__PURE__*/_jsx(StyledMembersTable, {
      "data-testid": "stDocstringMembersTable",
      children: members.map(member => /*#__PURE__*/_jsx(Member, {
        member: member
      }, member.name))
    }) : null]
  });
}
// Exported for tests.
export function Member(_ref2) {
  let {
    member
  } = _ref2;
  const {
    name,
    type,
    value,
    docString
  } = member;
  return /*#__PURE__*/_jsxs(StyledMembersRow, {
    "data-testid": "stMember",
    children: [/*#__PURE__*/_jsxs(StyledMembersSummaryCell, {
      children: [name ? /*#__PURE__*/_jsx(StyledDocName, {
        "data-testid": "stMemberDocName",
        children: name
      }) : null, type ? /*#__PURE__*/_jsx(StyledDocType, {
        "data-testid": "stMemberDocType",
        children: type
      }) : null]
    }), /*#__PURE__*/_jsx(StyledMembersDetailsCell, {
      children: value ? /*#__PURE__*/_jsx(StyledDocValue, {
        "data-testid": "stMemberDocValue",
        children: value
      }) : /*#__PURE__*/_jsx(StyledDocValue, {
        "data-testid": "stMemberDocString",
        children: docString || "No docs available"
      })
    })]
  });
}
//# sourceMappingURL=DocString.js.map