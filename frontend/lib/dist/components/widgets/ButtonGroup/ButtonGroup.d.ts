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
import { BaseButtonKind, BaseButtonSize } from "@streamlit/lib/src/components/shared/BaseButton";
import { ButtonGroup as ButtonGroupProto } from "@streamlit/lib/src/proto";
import { WidgetStateManager } from "@streamlit/lib/src/WidgetStateManager";
export interface Props {
    disabled: boolean;
    element: ButtonGroupProto;
    widgetMgr: WidgetStateManager;
    fragmentId?: string;
}
export declare function getContentElement(content: string, icon?: string, style?: ButtonGroupProto.Style): {
    element: ReactElement;
    kind: BaseButtonKind;
    size: BaseButtonSize;
};
declare function ButtonGroup(props: Readonly<Props>): ReactElement;
declare const _default: React.MemoExoticComponent<typeof ButtonGroup>;
export default _default;
