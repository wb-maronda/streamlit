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
import { FileUploader as FileUploaderProto, IFileURLs } from "@streamlit/lib/src/proto";
import { FileUploadClient } from "@streamlit/lib/src/FileUploadClient";
import { WidgetStateManager } from "@streamlit/lib/src/WidgetStateManager";
import { UploadFileInfo } from "./UploadFileInfo";
export interface Props {
    disabled: boolean;
    element: FileUploaderProto;
    widgetMgr: WidgetStateManager;
    uploadClient: FileUploadClient;
    width: number;
    fragmentId?: string;
}
type FileUploaderStatus = "ready" | "updating";
export interface State {
    /**
     * List of files dropped on the FileUploader by the user. This list includes
     * rejected files that will not be updated.
     */
    files: UploadFileInfo[];
}
declare class FileUploader extends React.PureComponent<Props, State> {
    private readonly formClearHelper;
    /**
     * A counter for assigning unique internal IDs to each file tracked
     * by the uploader. These IDs are used to update file state internally,
     * and are separate from the serverFileIds that are returned by the server.
     */
    private localFileIdCounter;
    /**
     * A flag to handle the case where a file uploader that only accepts one file
     * at a time has its file replaced, which we want to treat as a single change
     * rather than the deletion of a file followed by the upload of another.
     * Doing this ensures that the script (and thus callbacks, etc) is only run a
     * single time when replacing a file.  Note that deleting a file and uploading
     * a new one with two interactions (clicking the 'X', then dragging a file
     * into the file uploader) will still cause the script to execute twice.
     */
    private forceUpdatingStatus;
    constructor(props: Props);
    get initialValue(): State;
    componentWillUnmount(): void;
    /**
     * Return this.props.element.maxUploadSizeMb, converted to bytes.
     */
    private get maxUploadSizeInBytes();
    /**
     * Return the FileUploader's current status, which is derived from
     * its state.
     */
    get status(): FileUploaderStatus;
    componentDidUpdate: () => void;
    componentDidMount(): void;
    private createWidgetValue;
    /**
     * Clear files and errors, and reset the widget to its READY state.
     */
    private reset;
    /**
     * Called by react-dropzone when files and drag-and-dropped onto the widget.
     *
     * @param acceptedFiles an array of files.
     * @param rejectedFiles an array of FileRejections. A FileRejection
     * encapsulates a File and an error indicating why it was rejected by
     * the dropzone widget.
     */
    private dropHandler;
    uploadFile: (fileURLs: IFileURLs, file: File) => void;
    /**
     * Called when an upload has completed. Updates the file's status, and
     * assigns it the new file ID returned from the server.
     */
    private onUploadComplete;
    /**
     * Return a human-readable message for the given error.
     */
    private getErrorMessage;
    /**
     * Delete the file with the given ID:
     * - Cancel the file upload if it's in progress
     * - Remove the fileID from our local state
     * We don't actually tell the server to delete the file. It will garbage
     * collect it.
     */
    deleteFile: (fileId: number) => void;
    /** Append the given file to `state.files`. */
    private addFile;
    /** Append the given files to `state.files`. */
    private addFiles;
    /** Remove the file with the given ID from `state.files`. */
    private removeFile;
    /**
     * Return the file with the given ID, if one exists.
     */
    private getFile;
    /** Replace the file with the given id in `state.files`. */
    private updateFile;
    /**
     * Callback for file upload progress. Updates a single file's local `progress`
     * state.
     */
    private onUploadProgress;
    /**
     * If we're part of a clear_on_submit form, this will be called when our
     * form is submitted. Restore our default value and update the WidgetManager.
     */
    private onFormCleared;
    render(): React.ReactNode;
    private nextLocalFileId;
}
export default FileUploader;
