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

import { Skeleton as SkeletonProto } from "../../../proto";
import React, { Suspense } from "react";
import debounceRender from "react-debounce-render";
// Load (non-lazy) elements.
import AlertElement from "../../elements/AlertElement";
import ArrowTable from "../../elements/ArrowTable";
import DocString from "../../elements/DocString";
import ErrorBoundary from "../../shared/ErrorBoundary";
import ExceptionElement from "../../elements/ExceptionElement";
import Json from "../../elements/Json";
import Markdown from "../../elements/Markdown";
import Metric from "../../elements/Metric";
import { Skeleton } from "../../elements/Skeleton";
import TextElement from "../../elements/TextElement";
import { ComponentInstance } from "../../widgets/CustomComponent";
import { getAlertElementKind } from "../../elements/AlertElement/AlertElement";
import Maybe from "../Maybe";
import { FormSubmitContent } from "../../widgets/Form";
import Heading from "../../shared/StreamlitMarkdown/Heading";
import { LibContext } from "../LibContext";
import { shouldComponentBeEnabled, isComponentStale } from "./utils";
import { StyledElementContainer } from "./styled-components";

// Lazy-load elements.
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
const Audio = /*#__PURE__*/React.lazy(() => import("../../elements/Audio"));
const Balloons = /*#__PURE__*/React.lazy(() => import("../../elements/Balloons"));
const Snow = /*#__PURE__*/React.lazy(() => import("../../elements/Snow"));
const ArrowDataFrame = /*#__PURE__*/React.lazy(() => import("../../widgets/DataFrame"));
const ArrowVegaLiteChart = /*#__PURE__*/React.lazy(() => import("../../elements/ArrowVegaLiteChart"));
const Toast = /*#__PURE__*/React.lazy(() => import("../../elements/Toast"));

// BokehChart render function is sluggish. If the component is not debounced,
// AutoSizer causes it to rerender multiple times for different widths
// when the sidebar is toggled, which significantly slows down the app.
const BokehChart = /*#__PURE__*/React.lazy(() => import("../../elements/BokehChart"));

// RTL ESLint triggers a false positive on this render function
// eslint-disable-next-line testing-library/render-result-naming-convention
const DebouncedBokehChart = debounceRender(BokehChart, 100);
const DeckGlJsonChart = /*#__PURE__*/React.lazy(() => import("../../elements/DeckGlJsonChart"));
const GraphVizChart = /*#__PURE__*/React.lazy(() => import("../../elements/GraphVizChart"));
const IFrame = /*#__PURE__*/React.lazy(() => import("../../elements/IFrame"));
const ImageList = /*#__PURE__*/React.lazy(() => import("../../elements/ImageList"));
const LinkButton = /*#__PURE__*/React.lazy(() => import("../../elements/LinkButton"));
const PageLink = /*#__PURE__*/React.lazy(() => import("../../elements/PageLink"));
const PlotlyChart = /*#__PURE__*/React.lazy(() => import("../../elements/PlotlyChart"));
const Video = /*#__PURE__*/React.lazy(() => import("../../elements/Video"));

// Lazy-load widgets.
const Button = /*#__PURE__*/React.lazy(() => import("../../widgets/Button"));
const DownloadButton = /*#__PURE__*/React.lazy(() => import("../../widgets/DownloadButton"));
const CameraInput = /*#__PURE__*/React.lazy(() => import("../../widgets/CameraInput"));
const ChatInput = /*#__PURE__*/React.lazy(() => import("../../widgets/ChatInput"));
const Checkbox = /*#__PURE__*/React.lazy(() => import("../../widgets/Checkbox"));
const ColorPicker = /*#__PURE__*/React.lazy(() => import("../../widgets/ColorPicker"));
const DateInput = /*#__PURE__*/React.lazy(() => import("../../widgets/DateInput"));
const Html = /*#__PURE__*/React.lazy(() => import("../../elements/Html"));
const Multiselect = /*#__PURE__*/React.lazy(() => import("../../widgets/Multiselect"));
const Progress = /*#__PURE__*/React.lazy(() => import("../../elements/Progress"));
const Spinner = /*#__PURE__*/React.lazy(() => import("../../elements/Spinner"));
const Radio = /*#__PURE__*/React.lazy(() => import("../../widgets/Radio"));
const Selectbox = /*#__PURE__*/React.lazy(() => import("../../widgets/Selectbox"));
const Slider = /*#__PURE__*/React.lazy(() => import("../../widgets/Slider"));
const FileUploader = /*#__PURE__*/React.lazy(() => import("../../widgets/FileUploader"));
const TextArea = /*#__PURE__*/React.lazy(() => import("../../widgets/TextArea"));
const TextInput = /*#__PURE__*/React.lazy(() => import("../../widgets/TextInput"));
const TimeInput = /*#__PURE__*/React.lazy(() => import("../../widgets/TimeInput"));
const NumberInput = /*#__PURE__*/React.lazy(() => import("../../widgets/NumberInput"));
const StreamlitSyntaxHighlighter = /*#__PURE__*/React.lazy(() => import("../../elements/CodeBlock/StreamlitSyntaxHighlighter"));
function hideIfStale(isStale, component) {
  return isStale ? /*#__PURE__*/_jsx(_Fragment, {}) : component;
}

// Render ElementNodes (i.e. leaf nodes).
const RawElementNodeRenderer = props => {
  const {
    node
  } = props;
  if (!node) {
    throw new Error("ElementNode not found.");
  }
  const elementProps = {
    width: props.width,
    disableFullscreenMode: props.disableFullscreenMode
  };
  const widgetProps = {
    ...elementProps,
    widgetMgr: props.widgetMgr,
    disabled: props.widgetsDisabled,
    fragmentId: node.fragmentId
  };
  switch (node.element.type) {
    case "alert":
      {
        const alertProto = node.element.alert;
        return /*#__PURE__*/_jsx(AlertElement, {
          icon: alertProto.icon,
          body: alertProto.body,
          kind: getAlertElementKind(alertProto.format),
          ...elementProps
        });
      }
    case "arrowTable":
      return /*#__PURE__*/_jsx(ArrowTable, {
        element: node.quiverElement,
        ...elementProps
      });
    case "audio":
      return /*#__PURE__*/_jsx(Audio, {
        element: node.element.audio,
        endpoints: props.endpoints,
        ...elementProps,
        elementMgr: props.widgetMgr
      });
    case "balloons":
      return hideIfStale(props.isStale, /*#__PURE__*/_jsx(Balloons, {
        scriptRunId: props.scriptRunId
      }));
    case "bokehChart":
      return /*#__PURE__*/_jsx(DebouncedBokehChart, {
        element: node.element.bokehChart,
        ...elementProps
      });
    case "code":
      {
        const codeProto = node.element.code;
        return /*#__PURE__*/_jsx(StreamlitSyntaxHighlighter, {
          language: codeProto.language,
          showLineNumbers: codeProto.showLineNumbers,
          children: codeProto.codeText
        });
      }
    case "deckGlJsonChart":
      return /*#__PURE__*/_jsx(DeckGlJsonChart, {
        element: node.element.deckGlJsonChart,
        ...elementProps
      });
    case "docString":
      return /*#__PURE__*/_jsx(DocString, {
        element: node.element.docString,
        ...elementProps
      });
    case "empty":
      return /*#__PURE__*/_jsx("div", {
        className: "stHidden",
        "data-testid": "stEmpty"
      });
    case "exception":
      return /*#__PURE__*/_jsx(ExceptionElement, {
        element: node.element.exception,
        ...elementProps
      });
    case "graphvizChart":
      return /*#__PURE__*/_jsx(GraphVizChart, {
        element: node.element.graphvizChart,
        ...elementProps
      });
    case "heading":
      return /*#__PURE__*/_jsx(Heading, {
        element: node.element.heading,
        ...elementProps
      });
    case "iframe":
      return /*#__PURE__*/_jsx(IFrame, {
        element: node.element.iframe,
        ...elementProps
      });
    case "imgs":
      return /*#__PURE__*/_jsx(ImageList, {
        element: node.element.imgs,
        endpoints: props.endpoints,
        ...elementProps
      });
    case "json":
      return /*#__PURE__*/_jsx(Json, {
        element: node.element.json,
        ...elementProps
      });
    case "markdown":
      return /*#__PURE__*/_jsx(Markdown, {
        element: node.element.markdown,
        ...elementProps
      });
    case "metric":
      return /*#__PURE__*/_jsx(Metric, {
        element: node.element.metric
      });
    case "html":
      return /*#__PURE__*/_jsx(Html, {
        element: node.element.html,
        ...elementProps
      });
    case "pageLink":
      {
        const pageLinkProto = node.element.pageLink;
        const isDisabled = widgetProps.disabled || pageLinkProto.disabled;
        return /*#__PURE__*/_jsx(PageLink, {
          element: pageLinkProto,
          disabled: isDisabled,
          ...elementProps
        });
      }
    case "progress":
      return /*#__PURE__*/_jsx(Progress, {
        element: node.element.progress,
        ...elementProps
      });
    case "skeleton":
      {
        return /*#__PURE__*/_jsx(Skeleton, {
          element: node.element.skeleton
        });
      }
    case "snow":
      return hideIfStale(props.isStale, /*#__PURE__*/_jsx(Snow, {
        scriptRunId: props.scriptRunId
      }));
    case "spinner":
      return /*#__PURE__*/_jsx(Spinner, {
        element: node.element.spinner,
        ...elementProps
      });
    case "text":
      return /*#__PURE__*/_jsx(TextElement, {
        element: node.element.text,
        ...elementProps
      });
    case "video":
      return /*#__PURE__*/_jsx(Video, {
        element: node.element.video,
        endpoints: props.endpoints,
        ...elementProps,
        elementMgr: props.widgetMgr
      });

    // Events:
    case "toast":
      {
        const toastProto = node.element.toast;
        return /*#__PURE__*/_jsx(Toast
        // React key needed so toasts triggered on re-run
        , {
          body: toastProto.body,
          icon: toastProto.icon,
          ...elementProps
        }, node.scriptRunId);
      }

    // Widgets:
    case "arrowDataFrame":
      {
        const arrowProto = node.element.arrowDataFrame;
        widgetProps.disabled = widgetProps.disabled || arrowProto.disabled;
        return /*#__PURE__*/_jsx(ArrowDataFrame, {
          element: arrowProto,
          data: node.quiverElement
          // Arrow dataframe can be used as a widget (data_editor) or
          // an element (dataframe). We only want to set the key in case of
          // it being used as a widget. For the non-widget usage, the id will
          // be undefined.
          ,
          ...(arrowProto.id && {
            key: arrowProto.id
          }),
          ...widgetProps
        });
      }
    case "arrowVegaLiteChart":
      const vegaLiteElement = node.vegaLiteChartElement;
      return /*#__PURE__*/_jsx(ArrowVegaLiteChart, {
        element: vegaLiteElement
        // Vega-lite chart can be used as a widget (when selections are activated) or
        // an element. We only want to set the key in case of it being used as a widget
        // since otherwise it might break some apps that show the same charts multiple times.
        // So we only compute an element ID if it's a widget, otherwise its an empty string.
        ,
        ...widgetProps
      }, vegaLiteElement.id || undefined);
    case "button":
      {
        const buttonProto = node.element.button;
        widgetProps.disabled = widgetProps.disabled || buttonProto.disabled;
        if (buttonProto.isFormSubmitter) {
          const {
            formId
          } = buttonProto;
          const hasInProgressUpload = props.formsData.formsWithUploads.has(formId);
          return /*#__PURE__*/_jsx(FormSubmitContent, {
            element: buttonProto,
            hasInProgressUpload: hasInProgressUpload,
            ...widgetProps
          });
        }
        return /*#__PURE__*/_jsx(Button, {
          element: buttonProto,
          ...widgetProps
        });
      }
    case "downloadButton":
      {
        const downloadButtonProto = node.element.downloadButton;
        widgetProps.disabled = widgetProps.disabled || downloadButtonProto.disabled;
        return /*#__PURE__*/_jsx(DownloadButton, {
          endpoints: props.endpoints,
          element: downloadButtonProto,
          ...widgetProps
        }, downloadButtonProto.id);
      }
    case "cameraInput":
      {
        const cameraInputProto = node.element.cameraInput;
        widgetProps.disabled = widgetProps.disabled || cameraInputProto.disabled;
        return /*#__PURE__*/_jsx(CameraInput, {
          element: cameraInputProto,
          uploadClient: props.uploadClient,
          ...widgetProps
        }, cameraInputProto.id);
      }
    case "chatInput":
      {
        const chatInputProto = node.element.chatInput;
        widgetProps.disabled = widgetProps.disabled || chatInputProto.disabled;
        return /*#__PURE__*/_jsx(ChatInput, {
          element: chatInputProto,
          ...widgetProps
        }, chatInputProto.id);
      }
    case "checkbox":
      {
        const checkboxProto = node.element.checkbox;
        widgetProps.disabled = widgetProps.disabled || checkboxProto.disabled;
        return /*#__PURE__*/_jsx(Checkbox, {
          element: checkboxProto,
          ...widgetProps
        }, checkboxProto.id);
      }
    case "colorPicker":
      {
        const colorPickerProto = node.element.colorPicker;
        widgetProps.disabled = widgetProps.disabled || colorPickerProto.disabled;
        return /*#__PURE__*/_jsx(ColorPicker, {
          element: colorPickerProto,
          ...widgetProps
        }, colorPickerProto.id);
      }
    case "componentInstance":
      return /*#__PURE__*/_jsx(ComponentInstance, {
        registry: props.componentRegistry,
        element: node.element.componentInstance,
        ...widgetProps
      });
    case "dateInput":
      {
        const dateInputProto = node.element.dateInput;
        widgetProps.disabled = widgetProps.disabled || dateInputProto.disabled;
        return /*#__PURE__*/_jsx(DateInput, {
          element: dateInputProto,
          ...widgetProps
        }, dateInputProto.id);
      }
    case "fileUploader":
      {
        const fileUploaderProto = node.element.fileUploader;
        widgetProps.disabled = widgetProps.disabled || fileUploaderProto.disabled;
        return /*#__PURE__*/_jsx(FileUploader, {
          element: fileUploaderProto,
          uploadClient: props.uploadClient,
          ...widgetProps
        }, fileUploaderProto.id);
      }
    case "linkButton":
      {
        const linkButtonProto = node.element.linkButton;
        widgetProps.disabled = widgetProps.disabled || linkButtonProto.disabled;
        return /*#__PURE__*/_jsx(LinkButton, {
          element: linkButtonProto,
          ...widgetProps
        });
      }
    case "multiselect":
      {
        const multiSelectProto = node.element.multiselect;
        widgetProps.disabled = widgetProps.disabled || multiSelectProto.disabled;
        return /*#__PURE__*/_jsx(Multiselect, {
          element: multiSelectProto,
          ...widgetProps
        }, multiSelectProto.id);
      }
    case "numberInput":
      {
        const numberInputProto = node.element.numberInput;
        widgetProps.disabled = widgetProps.disabled || numberInputProto.disabled;
        return /*#__PURE__*/_jsx(NumberInput, {
          element: numberInputProto,
          ...widgetProps
        }, numberInputProto.id);
      }
    case "plotlyChart":
      {
        const plotlyProto = node.element.plotlyChart;
        return /*#__PURE__*/_jsx(PlotlyChart, {
          element: plotlyProto,
          ...widgetProps
        }, plotlyProto.id);
      }
    case "radio":
      {
        const radioProto = node.element.radio;
        widgetProps.disabled = widgetProps.disabled || radioProto.disabled;
        return /*#__PURE__*/_jsx(Radio, {
          element: radioProto,
          ...widgetProps
        }, radioProto.id);
      }
    case "selectbox":
      {
        const selectboxProto = node.element.selectbox;
        widgetProps.disabled = widgetProps.disabled || selectboxProto.disabled;
        return /*#__PURE__*/_jsx(Selectbox, {
          element: selectboxProto,
          ...widgetProps
        }, selectboxProto.id);
      }
    case "slider":
      {
        const sliderProto = node.element.slider;
        widgetProps.disabled = widgetProps.disabled || sliderProto.disabled;
        return /*#__PURE__*/_jsx(Slider, {
          element: sliderProto,
          ...widgetProps
        }, sliderProto.id);
      }
    case "textArea":
      {
        const textAreaProto = node.element.textArea;
        widgetProps.disabled = widgetProps.disabled || textAreaProto.disabled;
        return /*#__PURE__*/_jsx(TextArea, {
          element: textAreaProto,
          ...widgetProps
        }, textAreaProto.id);
      }
    case "textInput":
      {
        const textInputProto = node.element.textInput;
        widgetProps.disabled = widgetProps.disabled || textInputProto.disabled;
        return /*#__PURE__*/_jsx(TextInput, {
          element: textInputProto,
          ...widgetProps
        }, textInputProto.id);
      }
    case "timeInput":
      {
        const timeInputProto = node.element.timeInput;
        widgetProps.disabled = widgetProps.disabled || timeInputProto.disabled;
        return /*#__PURE__*/_jsx(TimeInput, {
          element: timeInputProto,
          ...widgetProps
        }, timeInputProto.id);
      }
    default:
      throw new Error("Unrecognized Element type ".concat(node.element.type));
  }
};

// Render ElementNodes (i.e. leaf nodes) wrapped in error catchers and all sorts of other //
// utilities.
const ElementNodeRenderer = props => {
  const {
    isFullScreen,
    fragmentIdsThisRun
  } = React.useContext(LibContext);
  const {
    node,
    width
  } = props;
  const elementType = node.element.type || "";
  const enable = shouldComponentBeEnabled(elementType, props.scriptRunState);
  const isStale = isComponentStale(enable, node, props.scriptRunState, props.scriptRunId, fragmentIdsThisRun);

  // TODO: If would be great if we could return an empty fragment if isHidden is true, to keep the
  // DOM clean. But this would require the keys passed to ElementNodeRenderer at Block.tsx to be a
  // stable hash of some sort.

  return /*#__PURE__*/_jsx(Maybe, {
    enable: enable,
    children: /*#__PURE__*/_jsx(StyledElementContainer, {
      "data-stale": isStale
      // Applying stale opacity in fullscreen mode
      // causes the fullscreen overlay to be transparent.
      ,
      isStale: isStale && !isFullScreen,
      width: width,
      className: "element-container",
      "data-testid": "element-container",
      elementType: elementType,
      children: /*#__PURE__*/_jsx(ErrorBoundary, {
        width: width,
        children: /*#__PURE__*/_jsx(Suspense, {
          fallback: /*#__PURE__*/_jsx(Skeleton, {
            element: SkeletonProto.create({
              style: SkeletonProto.SkeletonStyle.ELEMENT
            })
          }),
          children: /*#__PURE__*/_jsx(RawElementNodeRenderer, {
            ...props,
            isStale: isStale
          })
        })
      })
    })
  });
};
export default ElementNodeRenderer;
//# sourceMappingURL=ElementNodeRenderer.js.map