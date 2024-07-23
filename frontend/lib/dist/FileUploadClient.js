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

import isEqual from "lodash/isEqual";
import { v4 as uuidv4 } from "uuid";
import { logWarning } from "./util/log";
import Resolver from "./util/Resolver";
import { isValidFormId } from "./util/utils";

/** Common widget protobuf fields that are used by the FileUploadClient. */

/**
 * Handles operations related to the widgets that require file uploading.
 */
export class FileUploadClient {
  /**
   * Map of <formId: number of outstanding requests>. Updated whenever
   * a widget in a form creates are completes a request.
   */

  /**
   * Called when the set of forms that have pending file requests changes.
   */

  /**
   * Function to ask the app to request file URLs for getting/uploading/deleting
   * files. Currently, this is only done by App.tsx via a BackMsg sent over the
   * browser tab's websocket connection, but the FileUploadClient is
   * indifferent to the exact mechanism used.
   *
   * Upon receiving the requested file URLs, the app should call this class'
   * onFileURLsResponse method.
   */

  /**
   * A map from request ID (a uuidv4) to the Resolver that should resolve once
   * the requested file URLs are received.
   */

  constructor(props) {
    this.sessionInfo = void 0;
    this.endpoints = void 0;
    this.formsWithPendingRequests = new Map();
    this.pendingFormUploadsChanged = void 0;
    this.requestFileURLs = void 0;
    this.pendingFileURLsRequests = new Map();
    this.sessionInfo = props.sessionInfo;
    this.endpoints = props.endpoints;
    this.pendingFormUploadsChanged = props.formsWithPendingRequestsChanged;
    this.requestFileURLs = props.requestFileURLs;
  }

  /**
   * Upload a file to the given URL. It will be associated with this browser's
   * sessionID.
   *
   * @param widget: the FileUploader widget that's doing the upload.
   * @param fileUploadUrl: the URL to upload the file to.
   * @param file: the files to upload.
   * @param onUploadProgress: an optional function that will be called repeatedly with progress events during the upload.
   * @param cancelToken: an optional axios CancelToken that can be used to cancel the in-progress upload.
   *
   * @return a Promise<number> that resolves with the file's unique ID, as assigned by the server.
   */
  async uploadFile(widget, fileUploadUrl, file, onUploadProgress, cancelToken) {
    this.offsetPendingRequestCount(widget.formId, 1);
    return this.endpoints.uploadFileUploaderFile(fileUploadUrl, file, this.sessionInfo.current.sessionId, onUploadProgress, cancelToken).finally(() => this.offsetPendingRequestCount(widget.formId, -1));
  }

  /**
   * Request that the file at the given URL is deleted.
   * @param fileUrl: the URL of the file to delete.
   */
  deleteFile(fileUrl) {
    return this.endpoints.deleteFileAtURL ? this.endpoints.deleteFileAtURL(fileUrl, this.sessionInfo.current.sessionId) : Promise.resolve();
  }

  /**
   * Request that the app fetch URLs to upload/delete/get the given files. Once
   * this is done, the app should call this class' onFileURLsResponse to
   * signify completion.
   *
   * @param files: An array of files.
   *
   * @return a Promise<FileURLsResponse.IFileURLs[]> resolving to a list of
   * URLs for uploading and deleting the given files.
   */
  fetchFileURLs(files) {
    if (!this.requestFileURLs) {
      return Promise.resolve([]);
    }
    const resolver = new Resolver();
    const requestId = uuidv4();
    this.pendingFileURLsRequests.set(requestId, resolver);
    this.requestFileURLs(requestId, files);
    return resolver.promise;
  }

  /**
   * Callback to be called by the app once the file URLs corresponding to a
   * call to this.requestFileURLs has been received.
   *
   * @param resp: the FileURLsResponse corresponding to a call to
   * this.requestFileURLs.
   */
  onFileURLsResponse(resp) {
    const id = resp.responseId;
    const resolver = this.pendingFileURLsRequests.get(id);
    if (resolver) {
      if (resp.errorMsg) {
        resolver.reject(resp.errorMsg);
      } else {
        resolver.resolve(resp.fileUrls || []);
      }
      this.pendingFileURLsRequests.delete(id);
    } else {
      logWarning("fileURLsResponse received for nonexistent request, ignoring.");
    }
  }
  getFormIdSet() {
    return new Set(this.formsWithPendingRequests.keys());
  }
  offsetPendingRequestCount(formId, offset) {
    var _this$formsWithPendin;
    if (offset === 0) {
      return;
    }
    if (!isValidFormId(formId)) {
      return;
    }
    const curCount = (_this$formsWithPendin = this.formsWithPendingRequests.get(formId)) !== null && _this$formsWithPendin !== void 0 ? _this$formsWithPendin : 0;
    const newCount = curCount + offset;
    if (newCount < 0) {
      throw new Error("Can't offset pendingRequestCount below 0 (formId=".concat(formId, ", curCount=").concat(curCount, ", offset=").concat(offset, ")"));
    }
    const prevWidgetIds = this.getFormIdSet();
    if (newCount === 0) {
      this.formsWithPendingRequests.delete(formId);
    } else {
      this.formsWithPendingRequests.set(formId, newCount);
    }
    const newWidgetIds = this.getFormIdSet();
    if (!isEqual(newWidgetIds, prevWidgetIds)) {
      this.pendingFormUploadsChanged(newWidgetIds);
    }
  }
}
//# sourceMappingURL=FileUploadClient.js.map