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
import { MouseEvent, ReactNode } from "react";
import { BaseButtonKind, BaseButtonSize } from "@streamlit/lib/src/components/shared/BaseButton/styled-components";
export { BaseButtonKind, BaseButtonSize };
export interface BaseLinkButtonProps {
    kind: BaseButtonKind.PRIMARY | BaseButtonKind.SECONDARY;
    size?: BaseButtonSize;
    disabled?: boolean;
    fluidWidth?: boolean | number;
    children: ReactNode;
    autoFocus?: boolean;
    href: string;
    target: string;
    rel: string;
    onClick: (event: MouseEvent<HTMLAnchorElement>) => any;
}
export declare const StyledBaseLinkButton: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Required<BaseLinkButtonProps>, import("react").DetailedHTMLProps<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, {}>;
export declare const StyledPrimaryLinkButton: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Required<BaseLinkButtonProps> & import("react").ClassAttributes<HTMLAnchorElement> & import("react").AnchorHTMLAttributes<HTMLAnchorElement> & {
    theme?: import("@emotion/react").Theme | undefined;
} & Required<BaseLinkButtonProps>, {}, {}>;
export declare const StyledSecondaryLinkButton: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Required<BaseLinkButtonProps> & import("react").ClassAttributes<HTMLAnchorElement> & import("react").AnchorHTMLAttributes<HTMLAnchorElement> & {
    theme?: import("@emotion/react").Theme | undefined;
} & Required<BaseLinkButtonProps>, {}, {}>;
