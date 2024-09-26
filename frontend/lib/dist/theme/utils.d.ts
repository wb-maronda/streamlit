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
import { CustomThemeConfig, ICustomThemeConfig } from "@streamlit/lib/src/proto";
import { EmotionTheme, ThemeConfig } from "@streamlit/lib/src/theme";
import { DerivedColors } from "./getColors";
export declare const AUTO_THEME_NAME = "Use system setting";
export declare const CUSTOM_THEME_NAME = "Custom Theme";
declare global {
    interface Window {
        __streamlit?: {
            LIGHT_THEME: ICustomThemeConfig;
            DARK_THEME: ICustomThemeConfig;
        };
    }
}
export declare const getMergedLightTheme: () => ThemeConfig;
export declare const getMergedDarkTheme: () => ThemeConfig;
export declare const getSystemTheme: () => ThemeConfig;
export declare const createAutoTheme: () => ThemeConfig;
export declare const createPresetThemes: () => ThemeConfig[];
export declare const isPresetTheme: (themeConfig: ThemeConfig) => boolean;
export declare const fontToEnum: (font: string) => CustomThemeConfig.FontFamily;
export declare const fontEnumToString: (font: CustomThemeConfig.FontFamily | null | undefined) => string | undefined;
export declare const bgColorToBaseString: (bgColor?: string) => string;
export declare const isColor: (strColor: string) => boolean;
export declare const createEmotionTheme: (themeInput: Partial<ICustomThemeConfig>, baseThemeConfig?: ThemeConfig) => EmotionTheme;
export declare const toThemeInput: (theme: EmotionTheme) => Partial<CustomThemeConfig>;
export type ExportedTheme = {
    base: string;
    primaryColor: string;
    backgroundColor: string;
    secondaryBackgroundColor: string;
    textColor: string;
    font: string;
} & DerivedColors;
export declare const toExportedTheme: (theme: EmotionTheme) => ExportedTheme;
export declare const createTheme: (themeName: string, themeInput: Partial<CustomThemeConfig>, baseThemeConfig?: ThemeConfig, inSidebar?: boolean) => ThemeConfig;
export declare const getCachedTheme: () => ThemeConfig | null;
export declare const setCachedTheme: (themeConfig: ThemeConfig) => void;
export declare const removeCachedTheme: () => void;
export declare const getHostSpecifiedTheme: () => ThemeConfig;
export declare const getDefaultTheme: () => ThemeConfig;
export declare function computeSpacingStyle(value: string, theme: EmotionTheme): string;
export declare function hasLightBackgroundColor(theme: EmotionTheme): boolean;
export declare function getDividerColors(theme: EmotionTheme): any;
export declare function getMarkdownTextColors(theme: EmotionTheme): any;
export declare function getMarkdownBgColors(theme: EmotionTheme): any;
export declare function getGray70(theme: EmotionTheme): string;
export declare function getGray30(theme: EmotionTheme): string;
export declare function getGray90(theme: EmotionTheme): string;
export declare function getSequentialColorsArray(theme: EmotionTheme): string[];
export declare function getDivergingColorsArray(theme: EmotionTheme): string[];
export declare function getCategoricalColorsArray(theme: EmotionTheme): string[];
export declare function getDecreasingRed(theme: EmotionTheme): string;
export declare function getIncreasingGreen(theme: EmotionTheme): string;
/**
 * Return a @emotion/styled-like css dictionary to update the styles of headers, such as h1, h2, ...
 * Used for st.title, st.header, ... that are wrapped in the Sidebar or Dialogs.
 */
export declare function getWrappedHeadersStyle(theme: EmotionTheme): {
    [cssSelector: string]: {
        fontSize: string;
        fontWeight: number;
    };
};
