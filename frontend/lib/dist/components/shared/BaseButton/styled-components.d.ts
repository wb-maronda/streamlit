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
export declare enum BaseButtonKind {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    TERTIARY = "tertiary",
    LINK = "link",
    SEGMENT = "icon",
    SEGMENT_ACTIVE = "iconActive",
    BORDERLESS_ICON = "borderlessIcon",
    BORDERLESS_ICON_ACTIVE = "borderlessIconActive",
    MINIMAL = "minimal",
    PRIMARY_FORM_SUBMIT = "primaryFormSubmit",
    SECONDARY_FORM_SUBMIT = "secondaryFormSubmit",
    HEADER_BUTTON = "header",
    HEADER_NO_PADDING = "headerNoPadding",
    ELEMENT_TOOLBAR = "elementToolbar",
    PILLS = "pills",
    PILLS_ACTIVE = "pillsActive"
}
export declare enum BaseButtonSize {
    XSMALL = "xsmall",
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large"
}
export interface BaseButtonProps {
    kind: BaseButtonKind;
    size?: BaseButtonSize;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => any;
    disabled?: boolean;
    fluidWidth?: boolean | number;
    children: ReactNode;
    autoFocus?: boolean;
}
export declare const StyledBaseButton: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Required<BaseButtonProps>, import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
export declare const StyledPrimaryButton: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Required<BaseButtonProps> & import("react").ClassAttributes<HTMLButtonElement> & import("react").ButtonHTMLAttributes<HTMLButtonElement> & {
    theme?: import("@emotion/react").Theme | undefined;
} & Required<BaseButtonProps>, {}, {}>;
export declare const StyledSecondaryButton: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Required<BaseButtonProps> & import("react").ClassAttributes<HTMLButtonElement> & import("react").ButtonHTMLAttributes<HTMLButtonElement> & {
    theme?: import("@emotion/react").Theme | undefined;
} & Required<BaseButtonProps>, {}, {}>;
export declare const StyledTertiaryButton: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Required<BaseButtonProps> & import("react").ClassAttributes<HTMLButtonElement> & import("react").ButtonHTMLAttributes<HTMLButtonElement> & {
    theme?: import("@emotion/react").Theme | undefined;
} & Required<BaseButtonProps>, {}, {}>;
export declare const StyledLinkButton: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Required<BaseButtonProps> & import("react").ClassAttributes<HTMLButtonElement> & import("react").ButtonHTMLAttributes<HTMLButtonElement> & {
    theme?: import("@emotion/react").Theme | undefined;
} & Required<BaseButtonProps>, {}, {}>;
export declare const StyledMinimalButton: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Required<BaseButtonProps> & import("react").ClassAttributes<HTMLButtonElement> & import("react").ButtonHTMLAttributes<HTMLButtonElement> & {
    theme?: import("@emotion/react").Theme | undefined;
} & Required<BaseButtonProps>, {}, {}>;
export declare const StyledPrimaryFormSubmitButton: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Required<BaseButtonProps> & import("react").ClassAttributes<HTMLButtonElement> & import("react").ButtonHTMLAttributes<HTMLButtonElement> & {
    theme?: import("@emotion/react").Theme | undefined;
} & Required<BaseButtonProps>, {}, {}>;
export declare const StyledSecondaryFormSubmitButton: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Required<BaseButtonProps> & import("react").ClassAttributes<HTMLButtonElement> & import("react").ButtonHTMLAttributes<HTMLButtonElement> & {
    theme?: import("@emotion/react").Theme | undefined;
} & Required<BaseButtonProps>, {}, {}>;
export declare const StyledIconButton: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Required<BaseButtonProps> & import("react").ClassAttributes<HTMLButtonElement> & import("react").ButtonHTMLAttributes<HTMLButtonElement> & {
    theme?: import("@emotion/react").Theme | undefined;
} & Required<BaseButtonProps>, {}, {}>;
export declare const StyledIconButtonActive: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Required<BaseButtonProps> & import("react").ClassAttributes<HTMLButtonElement> & import("react").ButtonHTMLAttributes<HTMLButtonElement> & {
    theme?: import("@emotion/react").Theme | undefined;
} & Required<BaseButtonProps>, {}, {}>;
export declare const StyledPillsButton: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Required<BaseButtonProps> & import("react").ClassAttributes<HTMLButtonElement> & import("react").ButtonHTMLAttributes<HTMLButtonElement> & {
    theme?: import("@emotion/react").Theme | undefined;
} & Required<BaseButtonProps>, {}, {}>;
export declare const StyledPillsButtonActive: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Required<BaseButtonProps> & import("react").ClassAttributes<HTMLButtonElement> & import("react").ButtonHTMLAttributes<HTMLButtonElement> & {
    theme?: import("@emotion/react").Theme | undefined;
} & Required<BaseButtonProps>, {}, {}>;
export declare const StyledHeaderButton: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Required<BaseButtonProps> & import("react").ClassAttributes<HTMLButtonElement> & import("react").ButtonHTMLAttributes<HTMLButtonElement> & {
    theme?: import("@emotion/react").Theme | undefined;
} & Required<BaseButtonProps>, {}, {}>;
export declare const StyledHeaderNoPaddingButton: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Required<BaseButtonProps> & import("react").ClassAttributes<HTMLButtonElement> & import("react").ButtonHTMLAttributes<HTMLButtonElement> & {
    theme?: import("@emotion/react").Theme | undefined;
} & Required<BaseButtonProps>, {}, {}>;
export declare const StyledBorderlessIconButton: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Required<BaseButtonProps> & import("react").ClassAttributes<HTMLButtonElement> & import("react").ButtonHTMLAttributes<HTMLButtonElement> & {
    theme?: import("@emotion/react").Theme | undefined;
} & Required<BaseButtonProps>, {}, {}>;
export declare const StyledBorderlessIconButtonActive: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Required<BaseButtonProps> & import("react").ClassAttributes<HTMLButtonElement> & import("react").ButtonHTMLAttributes<HTMLButtonElement> & {
    theme?: import("@emotion/react").Theme | undefined;
} & Required<BaseButtonProps>, {}, {}>;
export declare const StyledTooltipNormal: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const StyledTooltipMobile: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const StyledElementToolbarButton: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & Required<BaseButtonProps> & import("react").ClassAttributes<HTMLButtonElement> & import("react").ButtonHTMLAttributes<HTMLButtonElement> & {
    theme?: import("@emotion/react").Theme | undefined;
} & Required<BaseButtonProps>, {}, {}>;
