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
import axios from "axios";
import isEqual from "lodash/isEqual";
import zip from "lodash/zip";
import { isNullOrUndefined, labelVisibilityProtoValueToEnum } from "../../../util/utils";
import { FileUploaderState as FileUploaderStateProto, UploadedFileInfo as UploadedFileInfoProto } from "../../../proto";
import { FormClearHelper } from "../Form";
import { FileSize, getSizeDisplay, sizeConverter } from "../../../util/FileHelper";
import { StyledWidgetLabelHelp, WidgetLabel } from "../BaseWidget";
import TooltipIcon from "../../shared/TooltipIcon";
import { Placement } from "../../shared/Tooltip";
import FileDropzone from "./FileDropzone";
import { StyledFileUploader } from "./styled-components";
import UploadedFiles from "./UploadedFiles";
import { UploadFileInfo } from "./UploadFileInfo";

// at least one file is being uploaded or deleted
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
class FileUploader extends React.PureComponent {
  /**
   * A counter for assigning unique internal IDs to each file tracked
   * by the uploader. These IDs are used to update file state internally,
   * and are separate from the serverFileIds that are returned by the server.
   */

  /**
   * A flag to handle the case where a file uploader that only accepts one file
   * at a time has its file replaced, which we want to treat as a single change
   * rather than the deletion of a file followed by the upload of another.
   * Doing this ensures that the script (and thus callbacks, etc) is only run a
   * single time when replacing a file.  Note that deleting a file and uploading
   * a new one with two interactions (clicking the 'X', then dragging a file
   * into the file uploader) will still cause the script to execute twice.
   */

  constructor(props) {
    super(props);
    this.formClearHelper = new FormClearHelper();
    this.localFileIdCounter = 1;
    this.forceUpdatingStatus = false;
    this.componentDidUpdate = () => {
      // If our status is not "ready", then we have uploads in progress.
      // We won't submit a new widgetValue until all uploads have resolved.
      if (this.status !== "ready") {
        return;
      }
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
    this.reset = () => {
      this.setState({
        files: []
      });
    };
    this.dropHandler = (acceptedFiles, rejectedFiles) => {
      const {
        element
      } = this.props;
      const {
        multipleFiles
      } = element;

      // If this is a single-file uploader and multiple files were dropped,
      // all the files will be rejected. In this case, we pull out the first
      // valid file into acceptedFiles, and reject the rest.
      if (!multipleFiles && acceptedFiles.length === 0 && rejectedFiles.length > 1) {
        const firstFileIndex = rejectedFiles.findIndex(file => file.errors.length === 1 && file.errors[0].code === "too-many-files");
        if (firstFileIndex >= 0) {
          acceptedFiles.push(rejectedFiles[firstFileIndex].file);
          rejectedFiles.splice(firstFileIndex, 1);
        }
      }
      this.props.uploadClient.fetchFileURLs(acceptedFiles).then(fileURLsArray => {
        // If this is a single-file uploader that already has an uploaded file,
        // remove that file so that it can be replaced with our new one.
        if (!multipleFiles && acceptedFiles.length > 0) {
          const existingFile = this.state.files.find(f => f.status.type !== "error");
          if (existingFile) {
            this.forceUpdatingStatus = true;
            this.deleteFile(existingFile.id);
            this.forceUpdatingStatus = false;
          }
        }
        zip(fileURLsArray, acceptedFiles).forEach(_ref => {
          let [fileURLs, acceptedFile] = _ref;
          this.uploadFile(fileURLs, acceptedFile);
        });
      }).catch(errorMessage => {
        this.addFiles(acceptedFiles.map(f => {
          return new UploadFileInfo(f.name, f.size, this.nextLocalFileId(), {
            type: "error",
            errorMessage
          });
        }));
      });

      // Create an UploadFileInfo for each of our rejected files, and add them to
      // our state.
      if (rejectedFiles.length > 0) {
        const rejectedInfos = rejectedFiles.map(rejected => {
          const {
            file
          } = rejected;
          return new UploadFileInfo(file.name, file.size, this.nextLocalFileId(), {
            type: "error",
            errorMessage: this.getErrorMessage(rejected.errors[0].code, rejected.file)
          });
        });
        this.addFiles(rejectedInfos);
      }
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
    this.onUploadComplete = (localFileId, fileUrls) => {
      const curFile = this.getFile(localFileId);
      if (isNullOrUndefined(curFile) || curFile.status.type !== "uploading") {
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
    this.getErrorMessage = (errorCode, file) => {
      switch (errorCode) {
        case "file-too-large":
          return `File must be ${getSizeDisplay(this.maxUploadSizeInBytes, FileSize.Byte)} or smaller.`;
        case "file-invalid-type":
          return `${file.type} files are not allowed.`;
        case "file-too-small":
          // This should not fire.
          return `File size is too small.`;
        case "too-many-files":
          return "Only one file is allowed.";
        default:
          return "Unexpected error. Please try again.";
      }
    };
    this.deleteFile = fileId => {
      const file = this.getFile(fileId);
      if (isNullOrUndefined(file)) {
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
    this.addFiles = files => {
      this.setState(state => ({
        files: [...state.files, ...files]
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
    this.onUploadProgress = (event, fileId) => {
      const file = this.getFile(fileId);
      if (isNullOrUndefined(file) || file.status.type !== "uploading") {
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
    this.onFormCleared = () => {
      this.setState({
        files: []
      }, () => {
        const newWidgetValue = this.createWidgetValue();
        if (isNullOrUndefined(newWidgetValue)) {
          return;
        }
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
    this.state = this.initialValue;
  }
  get initialValue() {
    const emptyState = {
      files: [],
      newestServerFileId: 0
    };
    const {
      widgetMgr,
      element
    } = this.props;
    const widgetValue = widgetMgr.getFileUploaderStateValue(element);
    if (isNullOrUndefined(widgetValue)) {
      return emptyState;
    }
    const {
      uploadedFileInfo
    } = widgetValue;
    if (isNullOrUndefined(uploadedFileInfo) || uploadedFileInfo.length === 0) {
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
      })
    };
  }
  componentWillUnmount() {
    this.formClearHelper.disconnect();
  }

  /**
   * Return this.props.element.maxUploadSizeMb, converted to bytes.
   */
  get maxUploadSizeInBytes() {
    const maxMbs = this.props.element.maxUploadSizeMb;
    return sizeConverter(maxMbs, FileSize.Megabyte, FileSize.Byte);
  }

  /**
   * Return the FileUploader's current status, which is derived from
   * its state.
   */
  get status() {
    const isFileUpdating = file => file.status.type === "uploading";

    // If any of our files is Uploading or Deleting, then we're currently
    // updating.
    if (this.state.files.some(isFileUpdating) || this.forceUpdatingStatus) {
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
      const {
        fileId,
        fileUrls
      } = status;
      return new UploadedFileInfoProto({
        fileId,
        fileUrls,
        name,
        size
      });
    });
    return new FileUploaderStateProto({
      uploadedFileInfo
    });
  }

  /**
   * Clear files and errors, and reset the widget to its READY state.
   */

  /**
   * Called by react-dropzone when files and drag-and-dropped onto the widget.
   *
   * @param acceptedFiles an array of files.
   * @param rejectedFiles an array of FileRejections. A FileRejection
   * encapsulates a File and an error indicating why it was rejected by
   * the dropzone widget.
   */

  /**
   * Called when an upload has completed. Updates the file's status, and
   * assigns it the new file ID returned from the server.
   */

  /**
   * Return a human-readable message for the given error.
   */

  /**
   * Delete the file with the given ID:
   * - Cancel the file upload if it's in progress
   * - Remove the fileID from our local state
   * We don't actually tell the server to delete the file. It will garbage
   * collect it.
   */

  /** Append the given file to `state.files`. */

  /** Append the given files to `state.files`. */

  /** Remove the file with the given ID from `state.files`. */

  /**
   * Return the file with the given ID, if one exists.
   */

  /** Replace the file with the given id in `state.files`. */

  /**
   * Callback for file upload progress. Updates a single file's local `progress`
   * state.
   */

  /**
   * If we're part of a clear_on_submit form, this will be called when our
   * form is submitted. Restore our default value and update the WidgetManager.
   */

  render() {
    const {
      files
    } = this.state;
    const {
      element,
      disabled,
      widgetMgr
    } = this.props;
    const acceptedExtensions = element.type;

    // Manage our form-clear event handler.
    this.formClearHelper.manageFormClearListener(widgetMgr, element.formId, this.onFormCleared);

    // We display files in the reverse order they were added.
    // This way, if you have multiple pages of uploaded files and then drop
    // another one, you'll see that newest file at the top of the first page.
    const newestToOldestFiles = files.slice().reverse();
    return /*#__PURE__*/_jsxs(StyledFileUploader, {
      className: "stFileUploader",
      "data-testid": "stFileUploader",
      children: [/*#__PURE__*/_jsx(WidgetLabel, {
        label: element.label,
        disabled: disabled,
        labelVisibility: labelVisibilityProtoValueToEnum(element.labelVisibility?.value),
        children: element.help && /*#__PURE__*/_jsx(StyledWidgetLabelHelp, {
          children: /*#__PURE__*/_jsx(TooltipIcon, {
            content: element.help,
            placement: Placement.TOP_RIGHT
          })
        })
      }), /*#__PURE__*/_jsx(FileDropzone, {
        onDrop: this.dropHandler,
        multiple: element.multipleFiles,
        acceptedExtensions: acceptedExtensions,
        maxSizeBytes: this.maxUploadSizeInBytes,
        label: element.label,
        disabled: disabled
      }), newestToOldestFiles.length > 0 && /*#__PURE__*/_jsx(UploadedFiles, {
        items: newestToOldestFiles,
        pageSize: 3,
        onDelete: this.deleteFile,
        resetOnAdd: true
      })]
    });
  }
  nextLocalFileId() {
    return this.localFileIdCounter++;
  }
}
export default FileUploader;
//# sourceMappingURL=FileUploader.js.map