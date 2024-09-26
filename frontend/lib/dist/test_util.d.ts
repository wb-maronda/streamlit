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
import { ReactElement } from "react";
import { RenderOptions, RenderResult } from "@testing-library/react";
import { LibContextProps } from "./components/core/LibContext";
/**
 * Use react-testing-library to render a ReactElement. The element will be
 * wrapped in our ThemeProvider.
 */
export declare function render(ui: ReactElement, options?: Omit<RenderOptions, "queries">): RenderResult;
export declare function mockWindowLocation(hostname: string): void;
/**
 * Use react-testing-library to render a ReactElement. The element will be
 * wrapped in our LibContext.Provider.
 */
export declare const customRenderLibContext: (component: ReactElement, overrideLibContextProps: Partial<LibContextProps>) => RenderResult;
