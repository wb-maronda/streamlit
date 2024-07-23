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
import React, { ReactElement } from "react";
import { BokehChart as BokehChartProto } from "@streamlit/lib/src/proto";
import "@streamlit/lib/src/vendor/bokeh/bokeh-api-2.4.3.esm.min";
import "@streamlit/lib/src/vendor/bokeh/bokeh-gl-2.4.3.esm.min";
import "@streamlit/lib/src/vendor/bokeh/bokeh-mathjax-2.4.3.esm.min";
import "@streamlit/lib/src/vendor/bokeh/bokeh-tables-2.4.3.esm.min";
import "@streamlit/lib/src/vendor/bokeh/bokeh-widgets-2.4.3.esm.min";
export interface BokehChartProps {
    width: number;
    element: BokehChartProto;
    height?: number;
}
export declare function BokehChart({ width, element, height, }: BokehChartProps): ReactElement;
declare const _default: React.ComponentType<React.PropsWithChildren<{
    height?: number | undefined;
    width: number;
    element: BokehChartProto;
    disableFullscreenMode?: boolean | undefined;
}>>;
export default _default;
