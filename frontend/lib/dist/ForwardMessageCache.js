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

import { ForwardMsg } from "./proto";
import { logMessage } from "./util/log";
import { ensureError } from "./util/ErrorHandling";
class CacheEntry {
  getAge(curScriptRunCount) {
    return curScriptRunCount - this.scriptRunCount;
  }
  constructor(encodedMsg, scriptRunCount) {
    this.encodedMsg = void 0;
    this.scriptRunCount = 0;
    this.encodedMsg = encodedMsg;
    this.scriptRunCount = scriptRunCount;
  }
}

/**
 * Handles ForwardMsg caching for WebsocketConnection.
 */
export class ForwardMsgCache {
  /**
   * A counter that tracks the number of times the underlying script
   * has been run. We use this to expire our cache entries.
   */

  constructor(endpoints) {
    this.messages = new Map();
    this.endpoints = void 0;
    this.scriptRunCount = 0;
    this.endpoints = endpoints;
  }

  /**
   * Increment our scriptRunCount, and remove all entries from the cache
   * that have expired. This should be called after the script has finished
   * running.
   *
   * @param maxMessageAge Max age of a message in the cache.
   * The "age" of a message is defined by how many times the underlying script
   * has finished running (without a compile error) since the message was
   * last accessed.
   */
  incrementRunCount(maxMessageAge) {
    this.scriptRunCount += 1;

    // It is safe to delete from a map during forEach iteration:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach#Description
    this.messages.forEach((entry, hash) => {
      if (entry.getAge(this.scriptRunCount) > maxMessageAge) {
        logMessage("Removing expired ForwardMsg [hash=".concat(hash, "]"));
        this.messages.delete(hash);
      }
    });
  }

  /**
   * Process a ForwardMsg, "de-referencing" it if it's a reference to
   * a cached message.
   *
   * - If the message is cacheable, store it in the cache and return it
   *   unmodified.
   * - If the message is instead a reference to another message, look for
   *   the referenced message in the cache, and return it.
   * - If the referenced message isn't in our cache, request it from the
   *   server, cache it, and return it.
   */
  async processMessagePayload(msg, encodedMsg) {
    this.maybeCacheMessage(msg, encodedMsg);
    if (msg.type !== "refHash") {
      return msg;
    }
    let newMsg = this.getCachedMessage(msg.refHash, true);
    if (newMsg != null) {
      logMessage("Cached ForwardMsg HIT [hash=".concat(msg.refHash, "]"));
    } else {
      // Cache miss: fetch from the server
      logMessage("Cached ForwardMsg MISS [hash=".concat(msg.refHash, "]"));
      const encodedNewMsg = await this.endpoints.fetchCachedForwardMsg(msg.refHash);
      try {
        newMsg = ForwardMsg.decode(encodedNewMsg);
      } catch (e) {
        throw new Error("Failed to decode ForwardMsg (hash=".concat(msg.refHash, "): ").concat(ensureError(e).message));
      }
      this.maybeCacheMessage(newMsg, encodedNewMsg);
    }

    // Copy the metadata from the refMsg into our new message
    if (!msg.metadata) {
      throw new Error("ForwardMsg has no metadata");
    }
    newMsg.metadata = ForwardMsg.decode(encodedMsg).metadata;
    return newMsg;
  }

  /**
   * Add a new message to the cache if appropriate.
   */
  maybeCacheMessage(msg, encodedMsg) {
    if (msg.type === "refHash") {
      // We never cache reference messages. These messages
      // may have `metadata.cacheable` set, but this is
      // only because they carry the metadata for the messages
      // they refer to.
      return;
    }
    if (!msg.metadata || !msg.metadata.cacheable) {
      // Don't cache messages that the server hasn't marked as cacheable.
      return;
    }
    if (this.getCachedMessage(msg.hash, true) !== undefined) {
      // We've already cached this message; don't need to do
      // anything more. (Using getCachedMessage() here ensures
      // that the message's scriptRunCount value gets updated as
      // expected.)
      return;
    }
    logMessage("Caching ForwardMsg [hash=".concat(msg.hash, "]"));
    this.messages.set(msg.hash, new CacheEntry(encodedMsg, this.scriptRunCount));
  }

  /**
   * Return a new copy of the ForwardMsg with the given hash
   * from the cache, or undefined if no such message exists.
   *
   * If the message's entry exists, its scriptRunCount will be
   * updated to the current value.
   */
  getCachedMessage(hash, updateScriptRunCount) {
    const cached = this.messages.get(hash);
    if (cached == null) {
      return undefined;
    }
    if (updateScriptRunCount) {
      cached.scriptRunCount = this.scriptRunCount;
    }
    return ForwardMsg.decode(cached.encodedMsg);
  }
}
//# sourceMappingURL=ForwardMessageCache.js.map