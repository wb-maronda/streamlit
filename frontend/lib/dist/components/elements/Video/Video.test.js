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
import { Video as VideoProto } from "../../../proto";
import { mockEndpoints } from "../../../mocks/mocks";
import Video from "./Video";
import { jsx as _jsx } from "react/jsx-runtime";
describe("Video Element", () => {
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
      element: VideoProto.create({
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        type: VideoProto.Type.UNUSED,
        startTime: 0,
        ...elementProps
      }),
      endpoints: mockEndpoints({
        buildMediaURL: buildMediaURL
      }),
      width: 0,
      elementMgr: elementMgrMock
    };
  };
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("renders without crashing", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(Video, {
      ...props
    }));
    expect(screen.getByTestId("stVideo")).toBeInTheDocument();
  });
  it("has correct style", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(Video, {
      ...props
    }));
    const video = screen.getByTestId("stVideo");
    expect(video).toHaveAttribute("class", "stVideo");
    expect(video).toHaveStyle("width: 0px; height: 528px;");
  });
  it("has controls", () => {
    const props = getProps();
    render( /*#__PURE__*/_jsx(Video, {
      ...props
    }));
    expect(screen.getByTestId("stVideo")).toHaveAttribute("controls");
  });
  it("creates its `src` attribute using buildMediaURL", () => {
    render( /*#__PURE__*/_jsx(Video, {
      ...getProps({
        url: "/media/mockVideoFile.mp4"
      })
    }));
    expect(buildMediaURL).toHaveBeenCalledWith("/media/mockVideoFile.mp4");
    expect(screen.getByTestId("stVideo")).toHaveAttribute("src", "https://mock.media.url");
  });
  beforeEach(() => {
    jest.clearAllMocks();
    mockGetElementState.mockReturnValue(false); // By default, assume autoplay is not prevented
  });
  it("does not autoplay if preventAutoplay is set", () => {
    mockGetElementState.mockReturnValueOnce(true); // Autoplay should be prevented
    const props = getProps({
      autoplay: true,
      id: "uniqueVideoId"
    });
    render( /*#__PURE__*/_jsx(Video, {
      ...props
    }));
    const audioElement = screen.getByTestId("stVideo");
    expect(audioElement).not.toHaveAttribute("autoPlay");
  });
  it("autoplays if preventAutoplay is not set and autoplay is true", () => {
    mockGetElementState.mockReturnValueOnce(false); // Autoplay is not prevented
    const props = getProps({
      autoplay: true,
      id: "uniqueVideoId"
    });
    render( /*#__PURE__*/_jsx(Video, {
      ...props
    }));
    const audioElement = screen.getByTestId("stVideo");
    expect(audioElement).toHaveAttribute("autoPlay");
  });
  it("calls setElementState to prevent future autoplay on first autoplay", () => {
    mockGetElementState.mockReturnValueOnce(false); // Autoplay is not prevented initially
    const props = getProps({
      autoplay: true,
      id: "uniqueVideoId"
    });
    render( /*#__PURE__*/_jsx(Video, {
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
      id: "uniqueVideoId"
    });
    render( /*#__PURE__*/_jsx(Video, {
      ...props
    }));
    expect(mockSetElementState).not.toHaveBeenCalled();
  });
  describe("YouTube", () => {
    it("renders a youtube iframe", () => {
      const props = getProps({
        type: VideoProto.Type.YOUTUBE_IFRAME
      });
      render( /*#__PURE__*/_jsx(Video, {
        ...props
      }));
      expect(document.body).toMatchSnapshot();
    });
    it("renders a youtube iframe with an starting time", () => {
      const props = getProps({
        type: VideoProto.Type.YOUTUBE_IFRAME,
        startTime: 10
      });
      render( /*#__PURE__*/_jsx(Video, {
        ...props
      }));
      expect(document.body).toMatchSnapshot();
    });
  });
  describe("updateTime", () => {
    const props = getProps();
    it("sets the current time to startTime on render", () => {
      render( /*#__PURE__*/_jsx(Video, {
        ...props
      }));
      const videoElement = screen.getByTestId("stVideo");
      expect(videoElement.currentTime).toBe(0);
    });
    it("updates the current time when startTime is changed", () => {
      const {
        rerender
      } = render( /*#__PURE__*/_jsx(Video, {
        ...props
      }));
      const videoElement = screen.getByTestId("stVideo");
      expect(videoElement.currentTime).toBe(0);
      rerender( /*#__PURE__*/_jsx(Video, {
        ...getProps({
          startTime: 10
        })
      }));
      expect(videoElement.currentTime).toBe(10);
    });
  });
});
//# sourceMappingURL=Video.test.js.map