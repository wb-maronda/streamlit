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
import React, { PureComponent } from "react";
import { WidgetStateManager } from "@streamlit/lib/src/WidgetStateManager";
import { EmotionTheme } from "@streamlit/lib/src/theme";
import "@streamlit/lib/src/assets/css/vega-embed.css";
import "@streamlit/lib/src/assets/css/vega-tooltip.css";
import { VegaLiteChartElement } from "./arrowUtils";
/** This is the state that is sent to the backend
 * This needs to be the same structure that is also defined
 * in the Python code.
 */
export interface VegaLiteState {
    selection: Record<string, any>;
}
interface Props {
    element: VegaLiteChartElement;
    theme: EmotionTheme;
    width: number;
    widgetMgr: WidgetStateManager;
    fragmentId?: string;
}
export interface PropsWithFullScreen extends Props {
    height?: number;
    isFullScreen: boolean;
}
interface State {
    error?: Error;
}
/**
 * Prepares the vega-lite spec for selections by transforming the select parameters
 * to a full object specification and by automatically adding encodings (if missing)
 * to point selections.
 *
 * The changes are applied in-place to the spec object.
 *
 * @param spec The Vega-Lite specification of the chart.
 */
export declare function prepareSpecForSelections(spec: any): void;
export declare class ArrowVegaLiteChart extends PureComponent<PropsWithFullScreen, State> {
    /**
     * The Vega view object
     */
    private vegaView?;
    /**
     * Finalizer for the embedded vega object. Must be called to dispose
     * of the vegaView when it's no longer used.
     */
    private vegaFinalizer?;
    /**
     * The default data name to add to.
     */
    private defaultDataName;
    /**
     * The html element we attach the Vega view to.
     */
    private element;
    /**
     * Helper to manage form clear listeners.
     * This is used to reset the selection state when the form is cleared.
     */
    private readonly formClearHelper;
    readonly state: {
        error: undefined;
    };
    componentDidMount(): Promise<void>;
    componentWillUnmount(): void;
    /**
     * Finalize the view so it can be garbage collected. This should be done
     * when a new view is created, and when the component unmounts.
     */
    private finalizeView;
    componentDidUpdate(prevProps: PropsWithFullScreen): Promise<void>;
    generateSpec: () => any;
    /**
     * Update the dataset in the Vega view. This method tried to minimize changes
     * by automatically creating and applying diffs.
     *
     * @param name The name of the dataset.
     * @param prevData The dataset before the update.
     * @param data The dataset to use for the update.
     */
    private updateData;
    /**
     * Configure the selections for this chart if the chart has selections enabled.
     */
    private maybeConfigureSelections;
    /**
     * Create a new Vega view and add the data.
     */
    private createView;
    render(): JSX.Element;
}
declare const _default: React.FC<Pick<{
    height?: number | undefined;
    width: number;
    element: VegaLiteChartElement;
    theme: {
        inSidebar: boolean;
        breakpoints: {
            hideWidgetDetails: number;
            hideNumberInputControls: number;
            sm: string;
            columns: string;
            md: string;
            lg: string;
            xl: string;
        };
        colors: {
            [key: string]: string;
        };
        genericColors: {
            skeletonBackgroundColor?: string | undefined;
            widgetBackgroundColor?: string | undefined;
            widgetBorderColor?: string | undefined;
            bgColor: string;
            secondaryBg: string;
            bodyText: string;
            warning: string;
            warningBg: string;
            success: string;
            successBg: string;
            infoBg: string;
            info: string;
            danger: string;
            dangerBg: string;
            primary: string;
            disabled: string;
            lightestGray: string;
            lightGray: string;
            gray: string;
            darkGray: string;
            red: string;
            blue: string;
            green: string;
            yellow: string;
            transparent: string;
            current: string;
            inherit: string;
            black: string;
            white: string;
            gray10: string;
            gray20: string;
            gray30: string;
            gray40: string;
            gray50: string;
            gray60: string;
            gray70: string;
            gray80: string;
            gray85: string;
            gray90: string;
            gray100: string;
            red10: string;
            red20: string;
            red30: string;
            red40: string;
            red50: string;
            red60: string;
            red70: string;
            red80: string;
            red90: string;
            red100: string;
            orange10: string;
            orange20: string;
            orange30: string;
            orange40: string;
            orange50: string;
            orange60: string;
            orange70: string;
            orange80: string;
            orange90: string;
            orange100: string;
            yellow10: string;
            yellow20: string;
            yellow30: string;
            yellow40: string;
            yellow50: string;
            yellow60: string;
            yellow70: string;
            yellow80: string;
            yellow90: string;
            yellow100: string;
            yellow110: string;
            green10: string;
            green20: string;
            green30: string;
            green40: string;
            green50: string;
            green60: string;
            green70: string;
            green80: string;
            green90: string;
            green100: string;
            blueGreen10: string;
            blueGreen20: string;
            blueGreen30: string;
            blueGreen40: string;
            blueGreen50: string;
            blueGreen60: string;
            blueGreen70: string;
            blueGreen80: string;
            blueGreen90: string;
            blueGreen100: string;
            lightBlue10: string;
            lightBlue20: string;
            lightBlue30: string;
            lightBlue40: string;
            lightBlue50: string;
            lightBlue60: string;
            lightBlue70: string;
            lightBlue80: string;
            lightBlue90: string;
            lightBlue100: string;
            blue10: string;
            blue20: string;
            blue30: string;
            blue40: string;
            blue50: string;
            blue60: string;
            blue70: string;
            blue80: string;
            blue90: string;
            blue100: string;
            purple10: string;
            purple20: string;
            purple30: string;
            purple40: string;
            purple50: string;
            purple60: string;
            purple70: string;
            purple80: string;
            purple90: string;
            purple100: string;
        };
        fonts: {
            [key: string]: string;
        };
        fontSizes: {
            twoSm: string;
            sm: string;
            md: string;
            mdLg: string;
            lg: string;
            xl: string;
            twoXL: string;
            threeXL: string;
            fourXL: string;
            twoSmPx: number;
            smPx: number;
            mdPx: number;
        };
        fontWeights: {
            normal: number;
            bold: number;
            extrabold: number;
        };
        genericFonts: {
            bodyFont: string;
            codeFont: string;
            headingFont: string;
        };
        iconSizes: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            twoXL: string;
            threeXL: string;
        };
        lineHeights: {
            normal: string;
            none: number;
            tight: number;
            inputWidget: number;
            table: number;
            base: number;
            menuItem: number;
        };
        letterSpacings: {
            tighter: string;
            tight: string;
            normal: string;
            wide: string;
            wider: string;
            widest: string;
        };
        radii: {
            none: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            xxl: string;
            full: string;
            default: string;
        };
        sizes: {
            full: string;
            headerHeight: string;
            sidebarTopSpace: string;
            sidebar: string;
            contentMaxWidth: string;
            borderWidth: string;
            minElementHeight: string;
        };
        spacing: {
            halfSmFont: string;
            twoThirdsSmFont: string;
            px: string;
            none: string;
            threeXS: string;
            twoXS: string;
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            twoXL: string;
            threeXL: string;
            fourXL: string;
            nonePx: number;
            threeXSPx: number;
            twoXSPx: number;
            xsPx: number;
            smPx: number;
            mdPx: number;
            lgPx: number;
            xlPx: number;
            twoXLPx: number;
            threeXLPx: number;
            fourXLPx: number;
        };
        zIndices: {
            hide: number;
            auto: string;
            base: number;
            sidebar: number;
            menuButton: number;
            balloons: number;
            header: number;
            sidebarMobile: number;
            popupMenu: number;
            fullscreenWrapper: number;
            tablePortal: number;
            bottom: number;
        };
    };
    disableFullscreenMode?: boolean | undefined;
    widgetMgr: WidgetStateManager;
    fragmentId?: string | undefined;
} & {
    children?: React.ReactNode;
}, "element" | "children" | keyof import("../../shared/FullScreenWrapper/withFullScreenWrapper").Props | "widgetMgr" | "fragmentId"> & {
    theme?: import("@emotion/react").Theme | undefined;
}>;
export default _default;
