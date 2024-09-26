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

/** The various statuses that an UploadedFileInfo can have. */

/**
 * Wraps a File object with additional data used by FileUploader.
 * This class is immutable because it's used in within FileUploader.state.
 */
export class UploadFileInfo {
  /**
   * ID used to refer to the file locally, for update operations.
   * If the file is uploaded, it will also have a serverID, which is
   * used to refer to the file on the server.
   */

  /**
   * Create a clone of this UploadFileInfo with the given status.
   */
  setStatus(status) {
    return new UploadFileInfo(this.name, this.size, this.id, status);
  }
  constructor(name, size, id, status) {
    this.name = void 0;
    this.size = void 0;
    this.status = void 0;
    this.id = void 0;
    this.name = name;
    this.size = size;
    this.id = id;
    this.status = status;
  }
}
//# sourceMappingURL=UploadFileInfo.js.map