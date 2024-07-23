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

/*
 * IMPORTANT: If you change the asset imports below, make sure they still work if Streamlit is
 * served from a subpath.
 */
import Flake0 from "../../../assets/img/snow/flake-0.png";
import Flake1 from "../../../assets/img/snow/flake-1.png";
import Flake2 from "../../../assets/img/snow/flake-2.png";
import Particles from "../Particles";
import { StyledFlake } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
export const NUM_FLAKES = 100;
const FLAKE_IMAGES = [Flake0, Flake1, Flake2];
const NUM_FLAKE_TYPES = FLAKE_IMAGES.length;
const Flake = _ref => {
  let {
    particleType
  } = _ref;
  return /*#__PURE__*/_jsx(StyledFlake, {
    src: FLAKE_IMAGES[particleType]
  });
};
const Snow = function Snow(_ref2) {
  let {
    scriptRunId
  } = _ref2;
  // Keys should be unique each time, so React replaces the images in the DOM and their animations
  // actually rerun.
  return /*#__PURE__*/_jsx(Particles, {
    className: "snow",
    scriptRunId: scriptRunId,
    numParticleTypes: NUM_FLAKE_TYPES,
    numParticles: NUM_FLAKES,
    ParticleComponent: Flake
  });
};
export default /*#__PURE__*/memo(Snow);
//# sourceMappingURL=Snow.js.map