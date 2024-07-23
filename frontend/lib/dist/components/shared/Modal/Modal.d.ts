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
import React, { ReactNode, ReactElement, FunctionComponent } from "react";
import { ModalProps } from "baseui/modal";
import { BaseButtonProps } from "@streamlit/lib/src/components/shared/BaseButton";
export interface ModalHeaderProps {
    children: ReactNode;
}
declare function ModalHeader({ children }: ModalHeaderProps): ReactElement;
export interface ModalBodyProps {
    children: ReactNode;
}
declare function ModalBody({ children }: ModalBodyProps): ReactElement;
export interface ModalFooterProps {
    children: ReactNode;
}
declare function ModalFooter({ children }: ModalFooterProps): ReactElement;
declare const ModalButton: FunctionComponent<React.PropsWithChildren<BaseButtonProps>>;
declare function Modal(props: ModalProps): ReactElement;
export default Modal;
export { ModalHeader, ModalBody, ModalFooter, ModalButton };
