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

import { GridCellKind } from "@glideapps/glide-data-grid";
import { isNullOrUndefined } from "../../../../util/utils";
import { toSafeString, getErrorCell, getLinkDisplayValueFromRegex } from "./utils";
/**
 * The link column is a special column that interprets the cell content as
 * an hyperlink / url and allows the user to click on it.
 */
function LinkColumn(props) {
  const parameters = props.columnTypeOptions || {};
  let validateRegex = undefined;
  if (parameters.validate) {
    // Prepare the validation regex:
    try {
      // u flag allows unicode characters
      // s flag allows . to match newlines
      validateRegex = new RegExp(parameters.validate, "us");
    } catch (error) {
      // Put error message in validateRegex so we can display it in the cell
      validateRegex = "Invalid validate regex: ".concat(parameters.validate, ".\nError: ").concat(error);
    }
  }

  // Determine if the user's provided display text is a regexp pattern or not.
  let displayTextRegex = undefined;
  if (!isNullOrUndefined(parameters.display_text) && parameters.display_text.includes("(") && parameters.display_text.includes(")")) {
    try {
      displayTextRegex = new RegExp(parameters.display_text, "us");
    } catch (error) {
      // The regex is invalid, interpret it as static display text.
      displayTextRegex = undefined;
    }
  }
  const cellTemplate = {
    kind: GridCellKind.Uri,
    readonly: !props.isEditable,
    allowOverlay: true,
    contentAlign: props.contentAlignment,
    style: props.isIndex ? "faded" : "normal",
    hoverEffect: true,
    data: "",
    displayData: "",
    copyData: ""
  };
  const validateInput = href => {
    if (isNullOrUndefined(href)) {
      if (props.isRequired) {
        return false;
      }
      return true;
    }
    const cellHref = toSafeString(href);
    if (parameters.max_chars && cellHref.length > parameters.max_chars) {
      // value is too long
      return false;
    }
    if (validateRegex instanceof RegExp && validateRegex.test(cellHref) === false) {
      return false;
    }
    return true;
  };
  return {
    ...props,
    kind: "link",
    sortMode: "default",
    validateInput,
    getCell(data, validate) {
      if (isNullOrUndefined(data)) {
        return {
          ...cellTemplate,
          data: null,
          isMissingValue: true,
          onClickUri: () => {}
        };
      }
      const href = data;
      if (typeof validateRegex === "string") {
        // The regex is invalid, we return an error to indicate this
        // to the developer:
        return getErrorCell(toSafeString(href), validateRegex);
      }
      if (validate) {
        const validationResult = validateInput(href);
        if (validationResult === false) {
          // The input is invalid, we return an error cell which will
          // prevent this cell to be inserted into the table.
          // This cell should never be actually displayed to the user.
          // It's mostly used internally to prevent invalid input to be
          // inserted into the table.
          return getErrorCell(toSafeString(href), "Invalid input.");
        }
      }
      let displayText = "";
      if (href) {
        if (displayTextRegex !== undefined) {
          // Set display value to be the regex extracted portion of the href.
          displayText = getLinkDisplayValueFromRegex(displayTextRegex, href);
        } else {
          // Use user provided display_text unless it's null, undefined, or an empty string.
          // If it's any of those falsy values, use the href.
          displayText = parameters.display_text || href;
        }
      }
      return {
        ...cellTemplate,
        data: href,
        displayData: displayText,
        isMissingValue: isNullOrUndefined(href),
        onClickUri: a => {
          window.open(href.startsWith("www.") ? "https://".concat(href) : href, "_blank", "noopener,noreferrer");
          a.preventDefault();
        },
        copyData: href
      };
    },
    getCellValue(cell) {
      return isNullOrUndefined(cell.data) ? null : cell.data;
    }
  };
}
LinkColumn.isEditableType = true;
export default LinkColumn;
//# sourceMappingURL=LinkColumn.js.map