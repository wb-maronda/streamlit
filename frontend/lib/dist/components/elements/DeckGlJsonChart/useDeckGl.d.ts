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
/// <reference types="react" />
import { PickingInfo } from "@deck.gl/core/typed";
import { ViewStateChangeParameters } from "@deck.gl/core/typed/controllers/controller";
import { TooltipContent } from "@deck.gl/core/typed/lib/tooltip";
import { EmotionTheme } from "@streamlit/lib/src/theme";
import { DeckGlJsonChart as DeckGlJsonChartProto } from "@streamlit/lib/src/proto";
import { ValueWSource } from "@streamlit/lib/src/useBasicWidgetState";
import type { DeckGlElementState, DeckGLProps, DeckObject } from "./types";
type UseDeckGlShape = {
    createTooltip: (info: PickingInfo | null) => TooltipContent;
    data: DeckGlElementState;
    deck: DeckObject;
    hasActiveSelection: boolean;
    height: number | string;
    isSelectionModeActivated: boolean;
    onViewStateChange: (params: ViewStateChangeParameters) => void;
    selectionMode: DeckGlJsonChartProto.SelectionMode | undefined;
    setSelection: React.Dispatch<React.SetStateAction<ValueWSource<DeckGlElementState> | null>>;
    viewState: Record<string, unknown>;
    width: number | string;
};
export type UseDeckGlProps = Omit<DeckGLProps, "mapboxToken"> & {
    isLightTheme: boolean;
    theme: EmotionTheme;
};
export declare const EMPTY_STATE: DeckGlElementState;
export declare const useDeckGl: (props: UseDeckGlProps) => UseDeckGlShape;
export {};
