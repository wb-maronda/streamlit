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

import React from "react";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { render } from "../../../test_util";
import { Audio as AudioProto } from "../../../proto";
import { mockEndpoints } from "../../../mocks/mocks";
import Audio from "./Audio";
import { jsx as _jsx } from "react/jsx-runtime";
describe("Audio Element", () => {
  const buildMediaURL = jest.fn().mockReturnValue("https://mock.media.url");
  const mockSetElementState = jest.fn();
  const mockGetElementState = jest.fn();
  const elementMgrMock = {
    setElementState: mockSetElementState,
    getElementState: mockGetElementState,
    sendRerunBackMsg: jest.fn(),
    formsDataChanged: jest.fn()
  };
  const getProps = function () {
    let elementProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return {
      element: AudioProto.create({
        startTime: 0,
        url: "/media/mockAudioFile.wav",
        ...elementProps
      }),
      endpoints: mockEndpoints({
        buildMediaURL: buildMediaURL
      }),
      width: 0,
      elementMgr: elementMgrMock
    };
  };
  it("renders without crashing", () => {
    render( /*#__PURE__*/_jsx(Audio, {
      ...getProps()
    }));
    expect(screen.getByTestId("stAudio")).toBeInTheDocument();
  });
  it("has controls", () => {
    render( /*#__PURE__*/_jsx(Audio, {
      ...getProps()
    }));
    expect(screen.getByTestId("stAudio")).toHaveAttribute("controls");
  });
  it("creates its `src` attribute using buildMediaURL", () => {
    render( /*#__PURE__*/_jsx(Audio, {
      ...getProps()
    }));
    const audioElement = screen.getByTestId("stAudio");
    expect(buildMediaURL).toHaveBeenCalledWith("/media/mockAudioFile.wav");
    expect(audioElement).toHaveAttribute("src", "https://mock.media.url");
  });
  beforeEach(() => {
    jest.clearAllMocks();
    mockGetElementState.mockReturnValue(false); // By default, assume autoplay is not prevented
  });
  it("does not autoplay if preventAutoplay is set", () => {
    mockGetElementState.mockReturnValueOnce(true); // Autoplay should be prevented
    const props = getProps({
      autoplay: true,
      id: "uniqueAudioId"
    });
    render( /*#__PURE__*/_jsx(Audio, {
      ...props
    }));
    const audioElement = screen.getByTestId("stAudio");
    expect(audioElement).not.toHaveAttribute("autoPlay");
  });
  it("autoplays if preventAutoplay is not set and autoplay is true", () => {
    mockGetElementState.mockReturnValueOnce(false); // Autoplay is not prevented
    const props = getProps({
      autoplay: true,
      id: "uniqueAudioId"
    });
    render( /*#__PURE__*/_jsx(Audio, {
      ...props
    }));
    const audioElement = screen.getByTestId("stAudio");
    expect(audioElement).toHaveAttribute("autoPlay");
  });
  it("calls setElementState to prevent future autoplay on first autoplay", () => {
    mockGetElementState.mockReturnValueOnce(false); // Autoplay is not prevented initially
    const props = getProps({
      autoplay: true,
      id: "uniqueAudioId"
    });
    render( /*#__PURE__*/_jsx(Audio, {
      ...props
    }));
    expect(mockSetElementState).toHaveBeenCalledTimes(1);
    expect(mockSetElementState).toHaveBeenCalledWith(props.element.id, "preventAutoplay", true);
  });

  // Test to ensure that setElementState is not called again if autoplay is already prevented
  it("does not call setElementState again if autoplay is already prevented", () => {
    mockGetElementState.mockReturnValueOnce(true); // Autoplay is already prevented
    const props = getProps({
      autoplay: true,
      id: "uniqueAudioId"
    });
    render( /*#__PURE__*/_jsx(Audio, {
      ...props
    }));
    expect(mockSetElementState).not.toHaveBeenCalled();
  });
  it("updates time when the prop is changed", () => {
    const props = getProps({
      url: "http://localhost:80/media/sound.wav"
    });
    const {
      rerender
    } = render( /*#__PURE__*/_jsx(Audio, {
      ...props
    }));
    let audioElement = screen.getByTestId("stAudio");
    expect(audioElement.currentTime).toBe(0);
    const newProps = getProps({
      startTime: 10
    });
    rerender( /*#__PURE__*/_jsx(Audio, {
      ...newProps
    }));
    audioElement = screen.getByTestId("stAudio");
    expect(audioElement.currentTime).toBe(10);
  });
});
//# sourceMappingURL=Audio.test.js.map