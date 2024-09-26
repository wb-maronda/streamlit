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
import { CancelTokenSource } from "axios";
import { IFileURLs } from "@streamlit/lib/src/proto";
export interface UploadingStatus {
    type: "uploading";
    cancelToken: CancelTokenSource;
    progress: number;
}
export interface UploadedStatus {
    type: "uploaded";
    fileId: string;
    fileUrls: IFileURLs;
}
export interface ErrorStatus {
    type: "error";
    errorMessage: string;
}
/** The various statuses that an UploadedFileInfo can have. */
export type FileStatus = UploadingStatus | UploadedStatus | ErrorStatus;
/**
 * Wraps a File object with additional data used by FileUploader.
 * This class is immutable because it's used in within FileUploader.state.
 */
export declare class UploadFileInfo {
    readonly name: string;
    readonly size: number;
    readonly status: FileStatus;
    /**
     * ID used to refer to the file locally, for update operations.
     * If the file is uploaded, it will also have a serverID, which is
     * used to refer to the file on the server.
     */
    readonly id: number;
    /**
     * Create a clone of this UploadFileInfo with the given status.
     */
    setStatus(status: FileStatus): UploadFileInfo;
    constructor(name: string, size: number, id: number, status: FileStatus);
}
