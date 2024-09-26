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

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Video } from "@emotion-icons/open-iconic";
import { useTheme } from "@emotion/react";
import { isMobile } from "react-device-detect";
import Webcam from "react-webcam";
import { debounce } from "../../../util/utils";
import Icon from "../../shared/Icon";
import themeColors from "../../../theme/emotionBaseTheme/themeColors";
import { CAMERA_PERMISSION_URL } from "../../../urls";
import CameraInputButton from "./CameraInputButton";
import SwitchFacingModeButton from "./SwitchFacingModeButton";
import { StyledBox, StyledCameraInput, StyledDescription, StyledLink } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export let WebcamPermission;
(function (WebcamPermission) {
  WebcamPermission["PENDING"] = "pending";
  WebcamPermission["SUCCESS"] = "success";
  WebcamPermission["ERROR"] = "error";
})(WebcamPermission || (WebcamPermission = {}));
export const AskForCameraPermission = _ref => {
  let {
    width
  } = _ref;
  return /*#__PURE__*/_jsxs(StyledBox, {
    width: width,
    children: [/*#__PURE__*/_jsx(Icon, {
      size: "threeXL",
      color: themeColors.gray60,
      content: Video
    }), /*#__PURE__*/_jsxs(StyledDescription, {
      children: ["This app would like to use your camera.", /*#__PURE__*/_jsx(StyledLink, {
        href: CAMERA_PERMISSION_URL,
        rel: "noopener noreferrer",
        target: "_blank",
        children: "Learn how to allow access."
      })]
    })]
  });
};
const WebcamComponent = _ref2 => {
  let {
    handleCapture,
    width,
    disabled,
    clearPhotoInProgress,
    setClearPhotoInProgress,
    facingMode,
    setFacingMode,
    testOverride
  } = _ref2;
  const [webcamPermission, setWebcamPermissionState] = useState(testOverride || WebcamPermission.PENDING);
  const videoRef = useRef(null);
  const [debouncedWidth, setDebouncedWidth] = useState(width);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedSetDebouncedCallback = useCallback(debounce(1000, setDebouncedWidth), []);
  useEffect(() => {
    memoizedSetDebouncedCallback(width);
  }, [width, memoizedSetDebouncedCallback]);
  function capture() {
    if (videoRef.current !== null) {
      const imageSrc = videoRef.current.getScreenshot();
      handleCapture(imageSrc);
    }
  }
  const theme = useTheme();
  return /*#__PURE__*/_jsxs(StyledCameraInput, {
    width: debouncedWidth,
    "data-testid": "stCameraInputWebcamComponent",
    children: [webcamPermission !== WebcamPermission.SUCCESS && !disabled && !clearPhotoInProgress ? /*#__PURE__*/_jsx(AskForCameraPermission, {
      width: debouncedWidth
    }) : isMobile && /*#__PURE__*/_jsx(SwitchFacingModeButton, {
      switchFacingMode: setFacingMode
    }), /*#__PURE__*/_jsx(StyledBox, {
      "data-testid": "stCameraInputWebcamStyledBox",
      hidden: webcamPermission !== WebcamPermission.SUCCESS && !disabled && !clearPhotoInProgress,
      width: debouncedWidth,
      children: !disabled && /*#__PURE__*/_jsx(Webcam, {
        audio: false,
        ref: videoRef,
        screenshotFormat: "image/jpeg",
        screenshotQuality: 1,
        width: debouncedWidth
        // We keep Aspect ratio of container always equal 16 / 9.
        // The aspect ration of video stream may be different depending on a camera.
        ,
        height: debouncedWidth * 9 / 16,
        style: {
          borderRadius: `${theme.radii.default} ${theme.radii.default} 0 0`
        },
        onUserMediaError: () => {
          setWebcamPermissionState(WebcamPermission.ERROR);
        },
        onUserMedia: () => {
          setWebcamPermissionState(WebcamPermission.SUCCESS);
          setClearPhotoInProgress(false);
        },
        videoConstraints: {
          width: {
            ideal: debouncedWidth
          },
          facingMode
        }
      })
    }), /*#__PURE__*/_jsx(CameraInputButton, {
      onClick: capture,
      disabled: webcamPermission !== WebcamPermission.SUCCESS || disabled || clearPhotoInProgress,
      children: "Take Photo"
    })]
  });
};
export default WebcamComponent;
//# sourceMappingURL=WebcamComponent.js.map