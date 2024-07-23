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
import React, { ReactElement } from "react";
import { EmotionIcon } from "@emotion-icons/emotion-icon";
import { StyledComponent } from "@emotion/styled";
export interface ToolbarActionProps {
    label: string;
    icon?: EmotionIcon;
    show_label?: boolean;
    onClick: () => void;
}
export declare function ToolbarAction({ label, show_label, icon, onClick, }: ToolbarActionProps): ReactElement;
export interface ToolbarProps {
    onExpand?: () => void;
    onCollapse?: () => void;
    isFullScreen?: boolean;
    locked?: boolean;
    target?: StyledComponent<any, any, any>;
    disableFullscreenMode?: boolean;
}
declare const Toolbar: React.FC<React.PropsWithChildren<ToolbarProps>>;
export default Toolbar;
