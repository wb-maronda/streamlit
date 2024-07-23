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
import React, { CSSProperties, FunctionComponent, HTMLProps, PureComponent, ReactElement, ReactNode } from "react";
import { Components, ReactMarkdownProps } from "react-markdown/lib/ast-to-react";
import IsSidebarContext from "@streamlit/lib/src/components/core/IsSidebarContext";
import "katex/dist/katex.min.css";
export declare enum Tags {
    H1 = "h1",
    H2 = "h2",
    H3 = "h3"
}
export interface Props {
    /**
     * The Markdown formatted text to render.
     */
    source: string;
    /**
     * True if HTML is allowed in the source string. If this is false,
     * any HTML will be escaped in the output.
     */
    allowHTML: boolean;
    style?: CSSProperties;
    isCaption?: boolean;
    /**
     * Indicates widget labels & restricts allowed elements
     */
    isLabel?: boolean;
    /**
     * Make the label bold
     */
    boldLabel?: boolean;
    /**
     * Checkbox labels have larger font sizing
     */
    largerLabel?: boolean;
    /**
     * Does not allow links
     */
    disableLinks?: boolean;
    /**
     * Toast has smaller font sizing & special CSS
     */
    isToast?: boolean;
}
/**
 * Creates a slug suitable for use as an anchor given a string.
 * Splits the string on non-alphanumeric characters, and joins with a dash.
 */
export declare function createAnchorFromText(text: string | null): string;
interface HeadingWithActionElementsProps {
    tag: string;
    anchor?: string;
    hideAnchor?: boolean;
    children: ReactNode[] | ReactNode;
    tagProps?: HTMLProps<HTMLHeadingElement>;
    help?: string;
}
export declare const HeadingWithActionElements: FunctionComponent<React.PropsWithChildren<HeadingWithActionElementsProps>>;
type HeadingProps = JSX.IntrinsicElements["h1"] & ReactMarkdownProps & {
    level: number;
    "data-anchor"?: string;
};
export declare const CustomHeading: FunctionComponent<React.PropsWithChildren<HeadingProps>>;
export interface RenderedMarkdownProps {
    /**
     * The Markdown formatted text to render.
     */
    source: string;
    /**
     * True if HTML is allowed in the source string. If this is false,
     * any HTML will be escaped in the output.
     */
    allowHTML: boolean;
    overrideComponents?: Components;
    /**
     * Indicates widget labels & restricts allowed elements
     */
    isLabel?: boolean;
    /**
     * Does not allow links
     */
    disableLinks?: boolean;
}
export type CustomCodeTagProps = JSX.IntrinsicElements["code"] & ReactMarkdownProps & {
    inline?: boolean;
};
/**
 * Renders code tag with highlighting based on requested language.
 */
export declare const CustomCodeTag: FunctionComponent<React.PropsWithChildren<CustomCodeTagProps>>;
export declare function RenderedMarkdown({ allowHTML, source, overrideComponents, isLabel, disableLinks, }: RenderedMarkdownProps): ReactElement;
/**
 * Wraps the <ReactMarkdown> component to include our standard
 * renderers and AST plugins (for syntax highlighting, HTML support, etc).
 */
declare class StreamlitMarkdown extends PureComponent<Props> {
    static contextType: React.Context<boolean>;
    context: React.ContextType<typeof IsSidebarContext>;
    componentDidCatch: () => void;
    render(): ReactNode;
}
interface LinkProps {
    node: any;
    children: ReactNode[];
    href?: string;
    title?: string;
    target?: string;
    rel?: string;
}
export declare function LinkWithTargetBlank(props: LinkProps): ReactElement;
export default StreamlitMarkdown;
