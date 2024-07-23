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

import React, { memo } from "react";
import range from "lodash/range";
import classNames from "classnames";
import { jsx as _jsx } from "react/jsx-runtime";
const Particles = _ref => {
  let {
    className,
    scriptRunId,
    numParticles,
    numParticleTypes,
    ParticleComponent
  } = _ref;
  return (
    /*#__PURE__*/
    // Keys should be unique each time, so React replaces the images in the DOM and their animations
    // actually rerun.
    _jsx("div", {
      className: classNames(className, "stHidden"),
      "data-testid": "".concat(className),
      children: range(numParticles).map(i => {
        const randNum = Math.floor(Math.random() * numParticleTypes);
        return /*#__PURE__*/_jsx(ParticleComponent, {
          particleType: randNum
        }, scriptRunId + i);
      })
    })
  );
};
export default /*#__PURE__*/memo(Particles);
//# sourceMappingURL=Particles.js.map