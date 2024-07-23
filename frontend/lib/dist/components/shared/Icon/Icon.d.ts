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
import { ReactElement, ReactNode } from "react";
import { EmotionIcon } from "@emotion-icons/emotion-icon";
import { IconSize, ThemeColor } from "@streamlit/lib/src/theme";
interface IconProps {
    content: EmotionIcon;
    size?: IconSize;
    color?: ThemeColor;
    margin?: string;
    padding?: string;
    testid?: string;
}
declare const Icon: ({ content, color, size, margin, padding, testid, }: IconProps) => ReactElement;
interface EmojiIconProps {
    size?: IconSize;
    margin?: string;
    padding?: string;
    children: ReactNode;
    testid?: string;
}
export declare const EmojiIcon: ({ size, margin, padding, children, testid, }: EmojiIconProps) => ReactElement;
export default Icon;
