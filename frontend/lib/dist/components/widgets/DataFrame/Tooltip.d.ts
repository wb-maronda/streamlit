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
import { ReactElement } from "react";
export interface TooltipProps {
    top: number;
    left: number;
    content: string;
    clearTooltip: () => void;
}
/**
 * A tooltip that can be positioned anywhere on the screen.
 *
 * This is mostly the same as the shared tooltip implementation, but
 * we cannot use that one since it is a StatefulTooltip and requires
 * a target component and cannot be triggered programmatically.
 * We need to be able to position the tooltip anywhere on the screen, so we use a Popover
 * instead. Since Popover doesn't support positioning to a virtual position,
 * we are using an invisible div as a workaround.
 *
 * @param top The top position of the tooltip.
 * @param left The left position of the tooltip.
 * @param content The markdown content of the tooltip.
 * @returns The tooltip react element.
 */
declare function Tooltip({ top, left, content, clearTooltip, }: TooltipProps): ReactElement;
export default Tooltip;
