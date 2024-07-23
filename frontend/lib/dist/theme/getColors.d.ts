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
export type DerivedColors = {
    linkText: string;
    fadedText05: string;
    fadedText10: string;
    fadedText20: string;
    fadedText40: string;
    fadedText60: string;
    bgMix: string;
    darkenedBgMix100: string;
    darkenedBgMix25: string;
    darkenedBgMix15: string;
    lightenedBg05: string;
};
export declare const computeDerivedColors: (genericColors: Record<string, string>) => DerivedColors;
export declare const createEmotionColors: (genericColors: {
    [key: string]: string;
}) => {
    [key: string]: string;
};
