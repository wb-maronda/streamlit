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
import React, { ComponentType, ReactNode } from "react";
import hoistNonReactStatics from "hoist-non-react-statics";
import { DeckGlJsonChart } from "@streamlit/lib/src/proto";
import { LibContext } from "@streamlit/lib/src/components/core/LibContext";
interface InjectedProps {
    mapboxToken: string;
}
export interface State {
    mapboxToken?: string;
    mapboxTokenError?: Error;
    isFetching: boolean;
}
export type WrappedMapboxProps<P extends InjectedProps> = Omit<P, "mapboxToken"> & {
    element: DeckGlJsonChart;
    width: number;
};
export declare class MapboxTokenNotProvidedError extends Error {
}
export declare class MapboxTokenFetchingError extends Error {
}
/**
 * A remote file that stores user-visible tokens.
 */
export declare const TOKENS_URL = "https://data.streamlit.io/tokens.json";
/**
 * A higher-order component that fetches our mapbox token and passes
 * it through to the wrapped component.
 * This component uses tokens from config.toml first when available.
 * If the token fetch fails, an error will be rendered in place of the wrapped component.
 * This component is necessary as it's good practice to separate data collection
 * (mapbox token retrieval) and the actual rendering of a component.
 *
 * @param {string} deltaType In case of an exception we show an error with this
 */
declare const withMapboxToken: (deltaType: string) => <P extends InjectedProps>(WrappedComponent: React.ComponentType<React.PropsWithChildren<P>>) => {
    new (props: WrappedMapboxProps<P>): {
        context: React.ContextType<typeof LibContext>;
        /**
         * Fetch the remote "tokens.json" set the "mapbox" in state.
         * Throw an error if we can't contact TOKENS_URL or the token is missing.
         */
        initMapboxToken: () => Promise<void>;
        componentDidMount(): void;
        render: () => ReactNode;
        setState<K extends keyof State>(state: State | ((prevState: Readonly<State>, props: Readonly<WrappedMapboxProps<P>>) => State | Pick<State, K> | null) | Pick<State, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<WrappedMapboxProps<P>>;
        state: Readonly<State>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<WrappedMapboxProps<P>>, nextState: Readonly<State>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<WrappedMapboxProps<P>>, prevState: Readonly<State>): any;
        componentDidUpdate?(prevProps: Readonly<WrappedMapboxProps<P>>, prevState: Readonly<State>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<WrappedMapboxProps<P>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<WrappedMapboxProps<P>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<WrappedMapboxProps<P>>, nextState: Readonly<State>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<WrappedMapboxProps<P>>, nextState: Readonly<State>, nextContext: any): void;
    };
    readonly displayName: string;
    contextType: React.Context<import("@streamlit/lib/src/components/core/LibContext").LibContextProps>;
} & hoistNonReactStatics.NonReactStatics<React.ComponentType<React.PropsWithChildren<P>>, {}>;
export default withMapboxToken;
