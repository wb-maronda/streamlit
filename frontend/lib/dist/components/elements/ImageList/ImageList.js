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
import { withFullScreenWrapper } from "../../shared/FullScreenWrapper";
import { StyledCaption, StyledImageContainer, StyledImageList } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var WidthBehavior;
/**
 * Functional element for a horizontal list of images.
 */
(function (WidthBehavior) {
  WidthBehavior[WidthBehavior["OriginalWidth"] = -1] = "OriginalWidth";
  WidthBehavior[WidthBehavior["ColumnWidth"] = -2] = "ColumnWidth";
  WidthBehavior[WidthBehavior["AutoWidth"] = -3] = "AutoWidth";
})(WidthBehavior || (WidthBehavior = {}));
export function ImageList(_ref) {
  let {
    width,
    isFullScreen,
    element,
    height,
    endpoints
  } = _ref;
  // The width field in the proto sets the image width, but has special
  // cases for -1, -2, and -3.
  let containerWidth;
  const protoWidth = element.width;
  if (protoWidth === WidthBehavior.OriginalWidth || protoWidth === WidthBehavior.AutoWidth) {
    // Use the original image width.
    containerWidth = undefined;
  } else if (protoWidth === WidthBehavior.ColumnWidth) {
    // Use the column width
    containerWidth = width;
  } else if (protoWidth > 0) {
    // Set the image width explicitly.
    containerWidth = protoWidth;
  } else {
    throw Error("Invalid image width: ".concat(protoWidth));
  }
  const imgStyle = {};
  if (height && isFullScreen) {
    imgStyle.maxHeight = height;
    imgStyle["object-fit"] = "contain";
  } else {
    imgStyle.width = containerWidth;
    if (protoWidth === WidthBehavior.AutoWidth) {
      // Cap the image width, so it doesn't exceed the column width
      imgStyle.maxWidth = "100%";
    }
  }
  return /*#__PURE__*/_jsx(StyledImageList, {
    style: {
      width
    },
    children: element.imgs.map((iimage, idx) => {
      const image = iimage;
      return /*#__PURE__*/_jsxs(StyledImageContainer, {
        "data-testid": "stImage",
        children: [/*#__PURE__*/_jsx("img", {
          style: imgStyle,
          src: endpoints.buildMediaURL(image.url),
          alt: idx.toString()
        }), image.caption && /*#__PURE__*/_jsx(StyledCaption, {
          "data-testid": "stImageCaption",
          style: imgStyle,
          children: " ".concat(image.caption, " ")
        })]
      }, idx);
    })
  });
}
export default withFullScreenWrapper(ImageList);
//# sourceMappingURL=ImageList.js.map