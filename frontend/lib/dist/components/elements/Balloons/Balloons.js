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
import Balloon0 from "../../../assets/img/balloons/balloon-0.png";
import Balloon1 from "../../../assets/img/balloons/balloon-1.png";
import Balloon2 from "../../../assets/img/balloons/balloon-2.png";
import Balloon3 from "../../../assets/img/balloons/balloon-3.png";
import Balloon4 from "../../../assets/img/balloons/balloon-4.png";
import Balloon5 from "../../../assets/img/balloons/balloon-5.png";
import Particles from "../Particles";
import { RenderInPortalIfExists } from "../../core/Portal/RenderInPortalIfExists";
import { StyledBalloon } from "./styled-components";
import { jsx as _jsx } from "react/jsx-runtime";
export const NUM_BALLOONS = 30;
const BALLOON_IMAGES = [Balloon0, Balloon1, Balloon2, Balloon3, Balloon4, Balloon5];
const NUM_BALLOON_TYPES = BALLOON_IMAGES.length;
const Balloon = _ref => {
  let {
    particleType
  } = _ref;
  return /*#__PURE__*/_jsx(StyledBalloon, {
    src: BALLOON_IMAGES[particleType]
  });
};
const Balloons = _ref2 => {
  let {
    scriptRunId
  } = _ref2;
  return (
    /*#__PURE__*/
    // Keys should be unique each time, so React replaces the images in the DOM and their animations
    // actually rerun.
    _jsx(RenderInPortalIfExists, {
      children: /*#__PURE__*/_jsx(Particles, {
        className: "stBalloons",
        "data-testid": "stBalloons",
        scriptRunId: scriptRunId,
        numParticleTypes: NUM_BALLOON_TYPES,
        numParticles: NUM_BALLOONS,
        ParticleComponent: Balloon
      })
    })
  );
};
export default /*#__PURE__*/memo(Balloons);
//# sourceMappingURL=Balloons.js.map