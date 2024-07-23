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

export function findNextEventIndex(events, startEvent, pred) {
  const startIndex = typeof startEvent === "number" ? startEvent : events.indexOf(startEvent);
  for (let ii = startIndex; ii < events.length; ++ii) {
    if (pred(events[ii])) {
      return ii;
    }
  }
  return undefined;
}
export function findNextEvent(events, startEvent, pred) {
  const index = findNextEventIndex(events, startEvent, pred);
  return index !== undefined ? events[index] : undefined;
}
export function findPrevEventIndex(events, startEvent, pred) {
  const startIndex = typeof startEvent === "number" ? startEvent : events.indexOf(startEvent);
  for (let ii = startIndex; ii >= 0; --ii) {
    const event = events[ii];
    if (pred(event)) {
      return ii;
    }
  }
  return undefined;
}
export function findPrevEvent(events, startEvent, pred) {
  const index = findPrevEventIndex(events, startEvent, pred);
  return index !== undefined ? events[index] : undefined;
}
export function isHandleMessageEvent(event) {
  return event.messageIndex !== undefined;
}

/** Return the elapsed time between two performance events. */
export function getTimeDelta(a, b) {
  return Math.abs(b.timestamp - a.timestamp);
}
//# sourceMappingURL=Utils.js.map