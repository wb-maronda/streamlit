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
import { CancelToken } from "axios";
import { IFileURLs, IFileURLsResponse } from "@streamlit/lib/src/proto";
import { SessionInfo } from "./SessionInfo";
import { StreamlitEndpoints } from "./StreamlitEndpoints";
/** Common widget protobuf fields that are used by the FileUploadClient. */
interface WidgetInfo {
    id: string;
    formId: string;
}
interface Props {
    /** The app's SessionInfo instance. */
    sessionInfo: SessionInfo;
    endpoints: StreamlitEndpoints;
    formsWithPendingRequestsChanged: (formIds: Set<string>) => void;
    requestFileURLs?: (requestId: string, files: File[]) => void;
}
/**
 * Handles operations related to the widgets that require file uploading.
 */
export declare class FileUploadClient {
    private readonly sessionInfo;
    private readonly endpoints;
    /**
     * Map of <formId: number of outstanding requests>. Updated whenever
     * a widget in a form creates are completes a request.
     */
    private readonly formsWithPendingRequests;
    /**
     * Called when the set of forms that have pending file requests changes.
     */
    private readonly pendingFormUploadsChanged;
    /**
     * Function to ask the app to request file URLs for getting/uploading/deleting
     * files. Currently, this is only done by App.tsx via a BackMsg sent over the
     * browser tab's websocket connection, but the FileUploadClient is
     * indifferent to the exact mechanism used.
     *
     * Upon receiving the requested file URLs, the app should call this class'
     * onFileURLsResponse method.
     */
    private readonly requestFileURLs?;
    /**
     * A map from request ID (a uuidv4) to the Resolver that should resolve once
     * the requested file URLs are received.
     */
    private readonly pendingFileURLsRequests;
    constructor(props: Props);
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
    uploadFile(widget: WidgetInfo, fileUploadUrl: string, file: File, onUploadProgress?: (progressEvent: any) => void, cancelToken?: CancelToken): Promise<void>;
    /**
     * Request that the file at the given URL is deleted.
     * @param fileUrl: the URL of the file to delete.
     */
    deleteFile(fileUrl: string): Promise<void>;
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
    fetchFileURLs(files: File[]): Promise<IFileURLs[]>;
    /**
     * Callback to be called by the app once the file URLs corresponding to a
     * call to this.requestFileURLs has been received.
     *
     * @param resp: the FileURLsResponse corresponding to a call to
     * this.requestFileURLs.
     */
    onFileURLsResponse(resp: IFileURLsResponse): void;
    private getFormIdSet;
    private offsetPendingRequestCount;
}
export {};
