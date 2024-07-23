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
import { RefObject } from "react";
export interface ScrollToBottomOptions {
    bottomThreshold?: number;
    debounceMs?: number;
}
/**
 * useScrollToBottom is a custom React hook managing automatic
 * scrolling behavior for an HTML element. It keeps the scroll view
 * at the bottom unless a user scrolls up, then stops auto-scroll.
 *
 * This hook returns a ref object attached to the HTML element.
 * It maintains several pieces of state:
 * - isSticky: a boolean for whether the scroll position should
 *   "stick" to the bottom.
 * - isAnimating: a boolean for whether the scroll view is animating.
 *
 * It has two major functions:
 * - handleScrollToBottomFinished: resets stickiness if necessary.
 * - handleScroll: adjusts isSticky based on user scroll behavior.
 *
 * The hook includes side effects with the useEffect hook:
 * - The first effect sets an interval to check the scroll position
 *   and adjust stickiness and animating state.
 * - The second effect attaches a focus event listener to update
 *   the scrollHeight value.
 */
export declare function useScrollToBottom<T extends HTMLElement>(): RefObject<T>;
export default useScrollToBottom;
