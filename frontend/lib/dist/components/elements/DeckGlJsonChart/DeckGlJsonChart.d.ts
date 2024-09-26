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
/// <reference types="hoist-non-react-statics" />
import React, { FC } from "react";
import { DeckGlJsonChart as DeckGlJsonChartProto } from "@streamlit/lib/src/proto";
import type { DeckGLProps } from "./types";
import "mapbox-gl/dist/mapbox-gl.css";
export declare const DeckGlJsonChart: FC<DeckGLProps>;
declare const _default: {
    new (props: import("./withMapboxToken/withMapboxToken").WrappedMapboxProps<{
        height?: number | undefined;
        width: number;
        disabled?: boolean | undefined;
        element: DeckGlJsonChartProto;
        disableFullscreenMode?: boolean | undefined;
        widgetMgr: import("../../..").WidgetStateManager;
        fragmentId: string | undefined;
        mapboxToken: string;
    }>): {
        context: import("../../..").LibContextProps;
        initMapboxToken: () => Promise<void>;
        componentDidMount(): void;
        render: () => React.ReactNode;
        setState<K extends keyof import("./withMapboxToken/withMapboxToken").State>(state: import("./withMapboxToken/withMapboxToken").State | ((prevState: Readonly<import("./withMapboxToken/withMapboxToken").State>, props: Readonly<import("./withMapboxToken/withMapboxToken").WrappedMapboxProps<{
            height?: number | undefined;
            width: number;
            disabled?: boolean | undefined;
            element: DeckGlJsonChartProto;
            disableFullscreenMode?: boolean | undefined;
            widgetMgr: import("../../..").WidgetStateManager;
            fragmentId: string | undefined;
            mapboxToken: string;
        }>>) => import("./withMapboxToken/withMapboxToken").State | Pick<import("./withMapboxToken/withMapboxToken").State, K> | null) | Pick<import("./withMapboxToken/withMapboxToken").State, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("./withMapboxToken/withMapboxToken").WrappedMapboxProps<{
            height?: number | undefined;
            width: number;
            disabled?: boolean | undefined;
            element: DeckGlJsonChartProto;
            disableFullscreenMode?: boolean | undefined;
            widgetMgr: import("../../..").WidgetStateManager;
            fragmentId: string | undefined;
            mapboxToken: string;
        }>>;
        state: Readonly<import("./withMapboxToken/withMapboxToken").State>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<import("./withMapboxToken/withMapboxToken").WrappedMapboxProps<{
            height?: number | undefined;
            width: number;
            disabled?: boolean | undefined;
            element: DeckGlJsonChartProto;
            disableFullscreenMode?: boolean | undefined;
            widgetMgr: import("../../..").WidgetStateManager;
            fragmentId: string | undefined;
            mapboxToken: string;
        }>>, nextState: Readonly<import("./withMapboxToken/withMapboxToken").State>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("./withMapboxToken/withMapboxToken").WrappedMapboxProps<{
            height?: number | undefined;
            width: number;
            disabled?: boolean | undefined;
            element: DeckGlJsonChartProto;
            disableFullscreenMode?: boolean | undefined;
            widgetMgr: import("../../..").WidgetStateManager;
            fragmentId: string | undefined;
            mapboxToken: string;
        }>>, prevState: Readonly<import("./withMapboxToken/withMapboxToken").State>): any;
        componentDidUpdate?(prevProps: Readonly<import("./withMapboxToken/withMapboxToken").WrappedMapboxProps<{
            height?: number | undefined;
            width: number;
            disabled?: boolean | undefined;
            element: DeckGlJsonChartProto;
            disableFullscreenMode?: boolean | undefined;
            widgetMgr: import("../../..").WidgetStateManager;
            fragmentId: string | undefined;
            mapboxToken: string;
        }>>, prevState: Readonly<import("./withMapboxToken/withMapboxToken").State>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("./withMapboxToken/withMapboxToken").WrappedMapboxProps<{
            height?: number | undefined;
            width: number;
            disabled?: boolean | undefined;
            element: DeckGlJsonChartProto;
            disableFullscreenMode?: boolean | undefined;
            widgetMgr: import("../../..").WidgetStateManager;
            fragmentId: string | undefined;
            mapboxToken: string;
        }>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("./withMapboxToken/withMapboxToken").WrappedMapboxProps<{
            height?: number | undefined;
            width: number;
            disabled?: boolean | undefined;
            element: DeckGlJsonChartProto;
            disableFullscreenMode?: boolean | undefined;
            widgetMgr: import("../../..").WidgetStateManager;
            fragmentId: string | undefined;
            mapboxToken: string;
        }>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("./withMapboxToken/withMapboxToken").WrappedMapboxProps<{
            height?: number | undefined;
            width: number;
            disabled?: boolean | undefined;
            element: DeckGlJsonChartProto;
            disableFullscreenMode?: boolean | undefined;
            widgetMgr: import("../../..").WidgetStateManager;
            fragmentId: string | undefined;
            mapboxToken: string;
        }>>, nextState: Readonly<import("./withMapboxToken/withMapboxToken").State>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("./withMapboxToken/withMapboxToken").WrappedMapboxProps<{
            height?: number | undefined;
            width: number;
            disabled?: boolean | undefined;
            element: DeckGlJsonChartProto;
            disableFullscreenMode?: boolean | undefined;
            widgetMgr: import("../../..").WidgetStateManager;
            fragmentId: string | undefined;
            mapboxToken: string;
        }>>, nextState: Readonly<import("./withMapboxToken/withMapboxToken").State>, nextContext: any): void;
    };
    readonly displayName: string;
    contextType: React.Context<import("../../..").LibContextProps>;
} & import("hoist-non-react-statics").NonReactStatics<React.ComponentType<React.PropsWithChildren<{
    height?: number | undefined;
    width: number;
    disabled?: boolean | undefined;
    element: DeckGlJsonChartProto;
    disableFullscreenMode?: boolean | undefined;
    widgetMgr: import("../../..").WidgetStateManager;
    fragmentId: string | undefined;
    mapboxToken: string;
}>>, {}>;
export default _default;
