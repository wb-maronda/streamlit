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
import { Block as BlockProto } from "@streamlit/lib/src/proto";
export interface StyledHorizontalBlockProps {
    gap: string;
}
export declare const StyledHorizontalBlock: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: React.ElementType<any, keyof React.JSX.IntrinsicElements> | undefined;
} & StyledHorizontalBlockProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export interface StyledElementContainerProps {
    isStale: boolean;
    width: number;
    elementType: string;
}
export declare const StyledElementContainer: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: React.ElementType<any, keyof React.JSX.IntrinsicElements> | undefined;
} & StyledElementContainerProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
interface StyledColumnProps {
    weight: number;
    gap: string;
    verticalAlignment?: BlockProto.Column.VerticalAlignment;
}
export declare const StyledColumn: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: React.ElementType<any, keyof React.JSX.IntrinsicElements> | undefined;
} & StyledColumnProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export interface StyledVerticalBlockProps {
    ref?: React.RefObject<any>;
    width?: number;
}
export declare const StyledVerticalBlock: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: React.ElementType<any, keyof React.JSX.IntrinsicElements> | undefined;
} & StyledVerticalBlockProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const StyledVerticalBlockWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: React.ElementType<any, keyof React.JSX.IntrinsicElements> | undefined;
} & StyledVerticalBlockProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export interface StyledVerticalBlockBorderWrapperProps {
    border: boolean;
    height?: number;
}
export declare const StyledVerticalBlockBorderWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: React.ElementType<any, keyof React.JSX.IntrinsicElements> | undefined;
} & StyledVerticalBlockBorderWrapperProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export {};
