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
/**
 * Handles scroll animation for a given target HTMLElement. Uses a square-root
 * based stepping function to compute scroll animation. Stops animation if
 * target's scrollTop has reached scrollHeight or if user interacts with target
 * (mousedown or mousewheel). Can also be cancelled by caller.
 *
 * @export
 * @param {HTMLElement | null} target - HTML element to animate scroll of. If
 *                                      null, no animation is performed.
 * @param {() => void} onEnd - Callback when animation ends or is cancelled.
 * @param {boolean} isAnimating - Boolean to start or stop animation. If false,
 *                                no animation is performed.
 * @returns {void}
 */
export default function useScrollAnimation(target: HTMLElement | null, onEnd: () => void, isAnimating: boolean): void;
