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

import { X } from "@emotion-icons/open-iconic";
import axios from "axios";
import isEqual from "lodash/isEqual";
import React from "react";
import { FileUploaderState as FileUploaderStateProto, UploadedFileInfo as UploadedFileInfoProto } from "../../../proto";
import Icon from "../../shared/Icon";
import { Placement } from "../../shared/Tooltip";
import TooltipIcon from "../../shared/TooltipIcon";
import { StyledWidgetLabelHelp, WidgetLabel } from "../BaseWidget";
import { FormClearHelper } from "../Form";
import { logError } from "../../../util/log";
import { labelVisibilityProtoValueToEnum } from "../../../util/utils";
import { UploadFileInfo } from "../FileUploader/UploadFileInfo";
import CameraInputButton from "./CameraInputButton";
import { FacingMode } from "./SwitchFacingModeButton";
import { StyledBox, StyledCameraInput, StyledSpan, StyledImg } from "./styled-components";
import WebcamComponent from "./WebcamComponent";

// at least one file is being uploaded or deleted
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
const MIN_SHUTTER_EFFECT_TIME_MS = 150;
class CameraInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.localFileIdCounter = 1;
    this.RESTORED_FROM_WIDGET_STRING = "RESTORED_FROM_WIDGET";
    this.formClearHelper = new FormClearHelper();
    this.getProgress = () => {
      if (this.state.files.length > 0 && this.state.files[this.state.files.length - 1].status.type === "uploading") {
        const status = this.state.files[this.state.files.length - 1].status;
        return status.progress;
      }
      return undefined;
    };
    this.setClearPhotoInProgress = clearPhotoInProgress => {
      this.setState({
        clearPhotoInProgress
      });
    };
    this.setFacingMode = () => {
      this.setState(prevState => ({
        facingMode: prevState.facingMode === FacingMode.USER ? FacingMode.ENVIRONMENT : FacingMode.USER
      }));
    };
    this.handleCapture = imgSrc => {
      if (imgSrc === null) {
        return Promise.resolve();
      }
      this.setState({
        imgSrc,
        shutter: true,
        minShutterEffectPassed: false
      });
      const delay = t => new Promise(resolve => setTimeout(resolve, t));
      return urltoFile(imgSrc, "camera-input-".concat(new Date().toISOString().replace(/:/g, "_"), ".jpg")).then(file => this.props.uploadClient.fetchFileURLs([file]).then(fileURLsArray => ({
        file: file,
        fileUrls: fileURLsArray[0]
      }))).then(_ref => {
        let {
          file,
          fileUrls
        } = _ref;
        return this.uploadFile(fileUrls, file);
      }).then(() => delay(MIN_SHUTTER_EFFECT_TIME_MS)).then(() => {
        this.setState((prevState, _) => {
          return {
            imgSrc,
            shutter: prevState.shutter,
            minShutterEffectPassed: true
          };
        });
      }).catch(err => {
        logError(err);
      });
    };
    this.removeCapture = () => {
      if (this.state.files.length === 0) {
        return;
      }
      this.state.files.forEach(file => this.deleteFile(file.id));
      this.setState({
        imgSrc: null,
        clearPhotoInProgress: true
      });
    };
    this.componentDidUpdate = () => {
      // If our status is not "ready", then we have uploads in progress.
      // We won't submit a new widgetValue until all uploads have resolved.
      if (this.status !== "ready") {
        return;
      }

      // If we have had no completed uploads, our widgetValue will be
      // undefined, and we can early-out of the state update.
      const newWidgetValue = this.createWidgetValue();
      const {
        element,
        widgetMgr,
        fragmentId
      } = this.props;

      // Maybe send a widgetValue update to the widgetStateManager.
      const prevWidgetValue = widgetMgr.getFileUploaderStateValue(element);
      if (!isEqual(newWidgetValue, prevWidgetValue)) {
        widgetMgr.setFileUploaderStateValue(element, newWidgetValue, {
          fromUi: true
        }, fragmentId);
      }
    };
    this.onFormCleared = () => {
      this.setState({
        files: []
      }, () => {
        const newWidgetValue = this.createWidgetValue();
        if (newWidgetValue == null) {
          return;
        }
        this.setState({
          imgSrc: null
        });
        const {
          widgetMgr,
          element,
          fragmentId
        } = this.props;
        widgetMgr.setFileUploaderStateValue(element, newWidgetValue, {
          fromUi: true
        }, fragmentId);
      });
    };
    this.deleteFile = fileId => {
      const file = this.getFile(fileId);
      if (file == null) {
        return;
      }
      if (file.status.type === "uploading") {
        // The file hasn't been uploaded. Let's cancel the request.
        // However, it may have been received by the server so we'll still
        // send out a request to delete.
        file.status.cancelToken.cancel();
      }
      if (file.status.type === "uploaded" && file.status.fileUrls.deleteUrl) {
        this.props.uploadClient.deleteFile(file.status.fileUrls.deleteUrl);
      }
      this.removeFile(fileId);
    };
    this.addFile = file => {
      this.setState(state => ({
        files: [...state.files, file]
      }));
    };
    this.removeFile = idToRemove => {
      this.setState(state => ({
        files: state.files.filter(file => file.id !== idToRemove)
      }));
    };
    this.getFile = fileId => {
      return this.state.files.find(file => file.id === fileId);
    };
    this.updateFile = (curFileId, newFile) => {
      this.setState(curState => {
        return {
          files: curState.files.map(file => file.id === curFileId ? newFile : file)
        };
      });
    };
    this.onUploadComplete = (localFileId, fileUrls) => {
      this.setState(() => ({
        shutter: false
      }));
      const curFile = this.getFile(localFileId);
      if (curFile == null || curFile.status.type !== "uploading") {
        // The file may have been canceled right before the upload
        // completed. In this case, we just bail.
        return;
      }
      this.updateFile(curFile.id, curFile.setStatus({
        type: "uploaded",
        fileId: fileUrls.fileId,
        fileUrls
      }));
    };
    this.onUploadProgress = (event, fileId) => {
      const file = this.getFile(fileId);
      if (file == null || file.status.type !== "uploading") {
        return;
      }
      const newProgress = Math.round(event.loaded * 100 / event.total);
      if (file.status.progress === newProgress) {
        return;
      }

      // Update file.progress
      this.updateFile(fileId, file.setStatus({
        type: "uploading",
        cancelToken: file.status.cancelToken,
        progress: newProgress
      }));
    };
    this.reset = () => {
      this.setState({
        files: [],
        imgSrc: null
      });
    };
    this.uploadFile = (fileURLs, file) => {
      // Create an UploadFileInfo for this file and add it to our state.
      const cancelToken = axios.CancelToken.source();
      const uploadingFileInfo = new UploadFileInfo(file.name, file.size, this.nextLocalFileId(), {
        type: "uploading",
        cancelToken,
        progress: 1
      });
      this.addFile(uploadingFileInfo);
      this.props.uploadClient.uploadFile(this.props.element, fileURLs.uploadUrl, file, e => this.onUploadProgress(e, uploadingFileInfo.id), cancelToken.token).then(() => this.onUploadComplete(uploadingFileInfo.id, fileURLs)).catch(err => {
        // If this was a cancel error, we don't show the user an error -
        // the cancellation was in response to an action they took.
        if (!axios.isCancel(err)) {
          this.updateFile(uploadingFileInfo.id, uploadingFileInfo.setStatus({
            type: "error",
            errorMessage: err ? err.toString() : "Unknown error"
          }));
        }
      });
    };
    this.state = this.initialValue;
  }
  get initialValue() {
    const emptyState = {
      files: [],
      imgSrc: null,
      shutter: false,
      minShutterEffectPassed: true,
      clearPhotoInProgress: false,
      facingMode: FacingMode.USER
    };
    const {
      widgetMgr,
      element
    } = this.props;
    const widgetValue = widgetMgr.getFileUploaderStateValue(element);
    if (widgetValue == null) {
      return emptyState;
    }
    const {
      uploadedFileInfo
    } = widgetValue;
    if (uploadedFileInfo == null || uploadedFileInfo.length === 0) {
      return emptyState;
    }
    return {
      files: uploadedFileInfo.map(f => {
        const name = f.name;
        const size = f.size;
        const fileId = f.fileId;
        const fileUrls = f.fileUrls;
        return new UploadFileInfo(name, size, this.nextLocalFileId(), {
          type: "uploaded",
          fileId,
          fileUrls
        });
      }),
      imgSrc: uploadedFileInfo.length === 0 ? "" : this.RESTORED_FROM_WIDGET_STRING,
      shutter: false,
      minShutterEffectPassed: false,
      clearPhotoInProgress: false,
      facingMode: FacingMode.USER
    };
  }
  componentWillUnmount() {
    this.formClearHelper.disconnect();
  }

  /**
   * Return the FileUploader's current status, which is derived from
   * its state.
   */
  get status() {
    const isFileUpdating = file => file.status.type === "uploading";

    // If any of our files is Uploading or Deleting, then we're currently
    // updating.
    if (this.state.files.some(isFileUpdating)) {
      return "updating";
    }
    return "ready";
  }
  componentDidMount() {
    const newWidgetValue = this.createWidgetValue();
    const {
      element,
      widgetMgr,
      fragmentId
    } = this.props;

    // Set the state value on mount, to avoid triggering an extra rerun after
    // the first rerun.
    // We use same primitives as in file uploader widget,
    // since simanticly camera_input is just a special case of file uploader.
    const prevWidgetValue = widgetMgr.getFileUploaderStateValue(element);
    if (prevWidgetValue === undefined) {
      widgetMgr.setFileUploaderStateValue(element, newWidgetValue, {
        fromUi: false
      }, fragmentId);
    }
  }
  createWidgetValue() {
    const uploadedFileInfo = this.state.files.filter(f => f.status.type === "uploaded").map(f => {
      const {
        name,
        size,
        status
      } = f;
      return new UploadedFileInfoProto({
        fileId: status.fileId,
        fileUrls: status.fileUrls,
        name,
        size
      });
    });
    return new FileUploaderStateProto({
      uploadedFileInfo
    });
  }

  /**
   * If we're part of a clear_on_submit form, this will be called when our
   * form is submitted. Restore our default value and update the WidgetManager.
   */

  render() {
    var _element$labelVisibil;
    const {
      element,
      widgetMgr,
      disabled,
      width
    } = this.props;

    // Manage our form-clear event handler.
    this.formClearHelper.manageFormClearListener(widgetMgr, element.formId, this.onFormCleared);
    return /*#__PURE__*/_jsxs(StyledCameraInput, {
      width: width,
      className: "row-widget",
      "data-testid": "stCameraInput",
      children: [/*#__PURE__*/_jsx(WidgetLabel, {
        label: element.label,
        disabled: disabled,
        labelVisibility: labelVisibilityProtoValueToEnum((_element$labelVisibil = element.labelVisibility) === null || _element$labelVisibil === void 0 ? void 0 : _element$labelVisibil.value),
        children: element.help && /*#__PURE__*/_jsx(StyledWidgetLabelHelp, {
          children: /*#__PURE__*/_jsx(TooltipIcon, {
            content: element.help,
            placement: Placement.TOP_RIGHT
          })
        })
      }), this.state.imgSrc ? /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsx(StyledBox, {
          width: width,
          children: this.state.imgSrc !== this.RESTORED_FROM_WIDGET_STRING && /*#__PURE__*/_jsx(StyledImg, {
            src: this.state.imgSrc,
            alt: "Snapshot",
            opacity: this.state.shutter || !this.state.minShutterEffectPassed ? "50%" : "100%",
            width: width,
            height: width * 9 / 16
          })
        }), /*#__PURE__*/_jsx(CameraInputButton, {
          onClick: this.removeCapture,
          progress: this.getProgress(),
          disabled: !!this.getProgress() || disabled,
          children: this.getProgress() ? "Uploading..." : /*#__PURE__*/_jsxs(StyledSpan, {
            children: [/*#__PURE__*/_jsx(Icon, {
              content: X,
              margin: "0 xs 0 0",
              size: "sm"
            }), " Clear photo"]
          })
        })]
      }) : /*#__PURE__*/_jsx(WebcamComponent, {
        handleCapture: this.handleCapture,
        width: width,
        disabled: disabled,
        clearPhotoInProgress: this.state.clearPhotoInProgress,
        setClearPhotoInProgress: this.setClearPhotoInProgress,
        facingMode: this.state.facingMode,
        setFacingMode: this.setFacingMode,
        testOverride: this.props.testOverride
      })]
    });
  }
  nextLocalFileId() {
    return this.localFileIdCounter++;
  }

  /**
   * Delete the file with the given ID:
   * - Cancel the file upload if it's in progress
   * - Remove the fileID from our local state
   * We don't actually tell the server to delete the file. It will garbage
   * collect it.
   */

  /** Append the given file to `state.files`. */

  /** Remove the file with the given ID from `state.files`. */

  /**
   * Return the file with the given ID, if one exists.
   */

  /** Replace the file with the given id in `state.files`. */

  /**
   * Called when an upload has completed. Updates the file's status, and
   * assigns it the new file ID returned from the server.
   */

  /**
   * Callback for file upload progress. Updates a single file's local `progress`
   * state.
   */

  /**
   * Clear files and errors, and reset the widget to its READY state.
   */
}
function urltoFile(url, filename) {
  return fetch(url).then(res => res.arrayBuffer()).then(buf => new File([buf], filename, {
    type: "image/jpeg"
  }));
}
export default CameraInput;
//# sourceMappingURL=CameraInput.js.map