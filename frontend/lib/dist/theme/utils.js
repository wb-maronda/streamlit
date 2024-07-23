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

import { getLuminance, transparentize } from "color2k";
import camelcase from "camelcase";
import decamelize from "decamelize";
import cloneDeep from "lodash/cloneDeep";
import merge from "lodash/merge";
import { CustomThemeConfig } from "../proto";
import { logError } from "../util/log";
import { LocalStore, localStorageAvailable } from "../util/storageUtils";
import { baseTheme, darkTheme, lightTheme } from "./";
import { isLightTheme, isDarkTheme } from "../util/utils";
import { fonts } from "./primitives/typography";
import { computeDerivedColors, createEmotionColors } from "./getColors";
import { createBaseUiTheme } from "./createThemeUtil";
export const AUTO_THEME_NAME = "Use system setting";
export const CUSTOM_THEME_NAME = "Custom Theme";
export const getSystemTheme = () => {
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? darkTheme : lightTheme;
};
export const createAutoTheme = () => ({
  ...getSystemTheme(),
  name: AUTO_THEME_NAME
});

// Update auto theme in case it has changed
export const createPresetThemes = () => [createAutoTheme(), lightTheme, darkTheme];
export const isPresetTheme = themeConfig => {
  const presetThemeNames = createPresetThemes().map(t => t.name);
  return presetThemeNames.includes(themeConfig.name);
};
export const fontToEnum = font => {
  const fontStyle = Object.keys(fonts).find(fontType => fonts[fontType] === font);
  const defaultFont = CustomThemeConfig.FontFamily.SANS_SERIF;
  if (fontStyle) {
    const parsedFontStyle = decamelize(fontStyle).toUpperCase();
    return parsedFontStyle in CustomThemeConfig.FontFamily ?
    // @ts-expect-error
    CustomThemeConfig.FontFamily[parsedFontStyle] : defaultFont;
  }
  return defaultFont;
};
export const fontEnumToString = font => font !== null && font !== undefined &&
// font can be 0 for sans serif
font in CustomThemeConfig.FontFamily ? fonts[camelcase(CustomThemeConfig.FontFamily[font].toString())] : undefined;
export const bgColorToBaseString = bgColor => bgColor === undefined || getLuminance(bgColor) > 0.5 ? "light" : "dark";
export const isColor = strColor => {
  const s = new Option().style;
  s.color = strColor;
  return s.color !== "";
};
export const createEmotionTheme = function (themeInput) {
  let baseThemeConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : baseTheme;
  const {
    genericColors,
    genericFonts
  } = baseThemeConfig.emotion;
  const {
    font,
    radii,
    fontSizes,
    ...customColors
  } = themeInput;
  const parsedFont = fontEnumToString(font);
  const parsedColors = Object.entries(customColors).reduce((colors, _ref) => {
    let [key, color] = _ref;
    // @ts-expect-error
    if (isColor(color)) {
      // @ts-expect-error
      colors[key] = color;
    } else if (isColor("#".concat(color))) {
      colors[key] = "#".concat(color);
    }
    return colors;
  }, {});

  // TODO: create an enum for this. Updating everything if a
  // config option changes is a pain
  // Mapping from CustomThemeConfig to color primitives
  const {
    secondaryBackgroundColor: secondaryBg,
    backgroundColor: bgColor,
    primaryColor: primary,
    textColor: bodyText,
    skeletonBackgroundColor,
    widgetBackgroundColor,
    widgetBorderColor
  } = parsedColors;
  const newGenericColors = {
    ...genericColors
  };
  if (primary) newGenericColors.primary = primary;
  if (bodyText) newGenericColors.bodyText = bodyText;
  if (secondaryBg) newGenericColors.secondaryBg = secondaryBg;
  if (bgColor) newGenericColors.bgColor = bgColor;
  if (widgetBackgroundColor) newGenericColors.widgetBackgroundColor = widgetBackgroundColor;
  if (widgetBorderColor) newGenericColors.widgetBorderColor = widgetBorderColor;
  if (skeletonBackgroundColor) newGenericColors.skeletonBackgroundColor = skeletonBackgroundColor;
  const conditionalOverrides = {};
  if (radii) {
    conditionalOverrides.radii = {
      ...baseThemeConfig.emotion.radii
    };
    if (radii.checkboxRadius) conditionalOverrides.radii.md = addPxUnit(radii.checkboxRadius);
    if (radii.baseWidgetRadius) conditionalOverrides.radii.lg = addPxUnit(radii.baseWidgetRadius);
  }
  if (fontSizes) {
    conditionalOverrides.fontSizes = {
      ...baseThemeConfig.emotion.fontSizes
    };
    if (fontSizes.tinyFontSize) {
      conditionalOverrides.fontSizes.twoSm = addPxUnit(fontSizes.tinyFontSize);
      conditionalOverrides.fontSizes.twoSmPx = fontSizes.tinyFontSize;
    }
    if (fontSizes.smallFontSize) {
      conditionalOverrides.fontSizes.sm = addPxUnit(fontSizes.smallFontSize);
      conditionalOverrides.fontSizes.smPx = fontSizes.smallFontSize;
    }
    if (fontSizes.baseFontSize) {
      conditionalOverrides.fontSizes.md = addPxUnit(fontSizes.baseFontSize);
      conditionalOverrides.fontSizes.mdPx = fontSizes.baseFontSize;
    }
  }
  return {
    ...baseThemeConfig.emotion,
    colors: createEmotionColors(newGenericColors),
    genericColors: newGenericColors,
    genericFonts: {
      ...genericFonts,
      ...(parsedFont && {
        bodyFont: themeInput.bodyFont ? themeInput.bodyFont : parsedFont,
        headingFont: themeInput.bodyFont ? themeInput.bodyFont : parsedFont,
        codeFont: themeInput.codeFont ? themeInput.codeFont : genericFonts.codeFont
      })
    },
    ...conditionalOverrides
  };
};
export const toThemeInput = theme => {
  const {
    colors,
    genericFonts
  } = theme;
  return {
    primaryColor: colors.primary,
    backgroundColor: colors.bgColor,
    secondaryBackgroundColor: colors.secondaryBg,
    textColor: colors.bodyText,
    font: fontToEnum(genericFonts.bodyFont)
  };
};
export const toExportedTheme = theme => {
  const {
    genericColors
  } = theme;
  const themeInput = toThemeInput(theme);

  // At this point, we know that all of the fields of themeInput are populated
  // (since we went "backwards" from a theme -> themeInput), but typescript
  // doesn't know this, so we have to cast each field to string.
  return {
    primaryColor: themeInput.primaryColor,
    backgroundColor: themeInput.backgroundColor,
    secondaryBackgroundColor: themeInput.secondaryBackgroundColor,
    textColor: themeInput.textColor,
    base: bgColorToBaseString(themeInput.backgroundColor),
    font: fontEnumToString(themeInput.font),
    ...computeDerivedColors(genericColors)
  };
};
const completeThemeInput = (partialInput, baseTheme) => {
  return new CustomThemeConfig({
    ...toThemeInput(baseTheme.emotion),
    ...partialInput
  });
};
export const createTheme = function (themeName, themeInput, baseThemeConfig) {
  let inSidebar = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (baseThemeConfig) {
    themeInput = completeThemeInput(themeInput, baseThemeConfig);
  } else if (themeInput.base === CustomThemeConfig.BaseTheme.DARK) {
    themeInput = completeThemeInput(themeInput, darkTheme);
  } else {
    themeInput = completeThemeInput(themeInput, lightTheme);
  }

  // We use startingTheme to pick a set of "auxiliary colors" for widgets like
  // the success/info/warning/error boxes and others; these need to have their
  // colors tweaked to work well with the background.
  //
  // For our auxiliary colors, we pick colors that look reasonable based on the
  // theme's backgroundColor instead of picking them using themeInput.base.
  // This way, things will look good even if a user sets
  // themeInput.base === LIGHT and themeInput.backgroundColor === "black".
  const bgColor = themeInput.backgroundColor;
  const startingTheme = merge(cloneDeep(baseThemeConfig ? baseThemeConfig : getLuminance(bgColor) > 0.5 ? lightTheme : darkTheme), {
    emotion: {
      inSidebar
    }
  });
  const emotion = createEmotionTheme(themeInput, startingTheme);
  return {
    ...startingTheme,
    name: themeName,
    emotion,
    basewebTheme: createBaseUiTheme(emotion, startingTheme.primitives)
  };
};
export const getCachedTheme = () => {
  if (!localStorageAvailable()) {
    return null;
  }
  const cachedThemeStr = window.localStorage.getItem(LocalStore.ACTIVE_THEME);
  if (!cachedThemeStr) {
    return null;
  }
  const {
    name: themeName,
    themeInput
  } = JSON.parse(cachedThemeStr);
  switch (themeName) {
    case lightTheme.name:
      return lightTheme;
    case darkTheme.name:
      return darkTheme;
    default:
      // At this point we're guaranteed that themeInput is defined.
      return createTheme(themeName, themeInput);
  }
};
const deleteOldCachedThemes = () => {
  const {
    CACHED_THEME_VERSION,
    CACHED_THEME_BASE_KEY
  } = LocalStore;
  const {
    localStorage
  } = window;

  // Pre-release versions of theming stored cached themes under the key
  // "stActiveTheme".
  localStorage.removeItem("stActiveTheme");

  // The first version of cached themes had keys of the form
  // `stActiveTheme-${window.location.pathname}` with no version number.
  localStorage.removeItem(CACHED_THEME_BASE_KEY);
  for (let i = 1; i < CACHED_THEME_VERSION; i++) {
    localStorage.removeItem("".concat(CACHED_THEME_BASE_KEY, "-v").concat(CACHED_THEME_VERSION));
  }
};
export const setCachedTheme = themeConfig => {
  if (!localStorageAvailable()) {
    return;
  }
  deleteOldCachedThemes();
  const cachedTheme = {
    name: themeConfig.name,
    ...(!isPresetTheme(themeConfig) && {
      themeInput: toThemeInput(themeConfig.emotion)
    })
  };
  window.localStorage.setItem(LocalStore.ACTIVE_THEME, JSON.stringify(cachedTheme));
};
export const removeCachedTheme = () => {
  if (!localStorageAvailable()) {
    return;
  }
  window.localStorage.removeItem(LocalStore.ACTIVE_THEME);
};
export const getDefaultTheme = () => {
  // Priority for default theme
  const cachedTheme = getCachedTheme();

  // 1. Previous user preference
  // We shouldn't ever have auto saved in our storage in case
  // OS theme changes but we explicitly check in case!
  if (cachedTheme && cachedTheme.name !== AUTO_THEME_NAME) {
    return cachedTheme;
  }

  // 2. Embed Parameter preference
  if (isLightTheme()) {
    return lightTheme;
  }
  if (isDarkTheme()) {
    return darkTheme;
  }

  // 3. OS preference
  return createAutoTheme();
};
const whiteSpace = /\s+/;
export function computeSpacingStyle(value, theme) {
  if (value === "") {
    return "";
  }
  return value.split(whiteSpace).map(marginValue => {
    if (marginValue === "0") {
      return theme.spacing.none;
    }
    if (!(marginValue in theme.spacing)) {
      logError("Invalid spacing value: ".concat(marginValue));
      return theme.spacing.none;
    }
    return theme.spacing[marginValue];
  }).join(" ");
}
export function hasLightBackgroundColor(theme) {
  return getLuminance(theme.colors.bgColor) > 0.5;
}
export function getDividerColors(theme) {
  const lightTheme = hasLightBackgroundColor(theme);
  const blue = lightTheme ? theme.colors.blue60 : theme.colors.blue90;
  const green = lightTheme ? theme.colors.green60 : theme.colors.green90;
  const orange = lightTheme ? theme.colors.orange60 : theme.colors.orange90;
  const red = lightTheme ? theme.colors.red60 : theme.colors.red90;
  const violet = lightTheme ? theme.colors.purple60 : theme.colors.purple80;
  const gray = lightTheme ? theme.colors.gray40 : theme.colors.gray70;
  return {
    blue: blue,
    green: green,
    orange: orange,
    red: red,
    violet: violet,
    gray: gray,
    grey: gray,
    rainbow: "linear-gradient(to right, ".concat(red, ", ").concat(orange, ", ").concat(green, ", ").concat(blue, ", ").concat(violet, ")")
  };
}
export function getMarkdownTextColors(theme) {
  const lightTheme = hasLightBackgroundColor(theme);
  const red = lightTheme ? theme.colors.red80 : theme.colors.red70;
  const orange = lightTheme ? theme.colors.orange100 : theme.colors.orange60;
  const yellow = lightTheme ? theme.colors.yellow100 : theme.colors.yellow40;
  const green = lightTheme ? theme.colors.green90 : theme.colors.green60;
  const blue = lightTheme ? theme.colors.blue80 : theme.colors.blue50;
  const violet = lightTheme ? theme.colors.purple80 : theme.colors.purple50;
  const purple = lightTheme ? theme.colors.purple100 : theme.colors.purple80;
  const gray = lightTheme ? theme.colors.gray80 : theme.colors.gray70;
  return {
    red: red,
    orange: orange,
    yellow: yellow,
    green: green,
    blue: blue,
    violet: violet,
    purple: purple,
    gray: gray
  };
}
export function getMarkdownBgColors(theme) {
  const lightTheme = hasLightBackgroundColor(theme);
  return {
    redbg: transparentize(theme.colors[lightTheme ? "red80" : "red60"], lightTheme ? 0.9 : 0.7),
    orangebg: transparentize(theme.colors.yellow70, lightTheme ? 0.9 : 0.7),
    yellowbg: transparentize(theme.colors[lightTheme ? "yellow70" : "yellow50"], lightTheme ? 0.9 : 0.7),
    greenbg: transparentize(theme.colors[lightTheme ? "green70" : "green60"], lightTheme ? 0.9 : 0.7),
    bluebg: transparentize(theme.colors[lightTheme ? "blue70" : "blue60"], lightTheme ? 0.9 : 0.7),
    violetbg: transparentize(theme.colors[lightTheme ? "purple70" : "purple60"], lightTheme ? 0.9 : 0.7),
    purplebg: transparentize(theme.colors[lightTheme ? "purple90" : "purple80"], lightTheme ? 0.9 : 0.7),
    graybg: transparentize(theme.colors[lightTheme ? "gray70" : "gray50"], lightTheme ? 0.9 : 0.7)
  };
}
export function getGray70(theme) {
  return hasLightBackgroundColor(theme) ? theme.colors.gray70 : theme.colors.gray30;
}
export function getGray30(theme) {
  return hasLightBackgroundColor(theme) ? theme.colors.gray30 : theme.colors.gray85;
}
export function getGray90(theme) {
  return hasLightBackgroundColor(theme) ? theme.colors.gray90 : theme.colors.gray10;
}
function getBlueArrayAsc(theme) {
  const {
    colors
  } = theme;
  return [colors.blue10, colors.blue20, colors.blue30, colors.blue40, colors.blue50, colors.blue60, colors.blue70, colors.blue80, colors.blue90, colors.blue100];
}
function getBlueArrayDesc(theme) {
  const {
    colors
  } = theme;
  return [colors.blue100, colors.blue90, colors.blue80, colors.blue70, colors.blue60, colors.blue50, colors.blue40, colors.blue30, colors.blue20, colors.blue10];
}
export function getSequentialColorsArray(theme) {
  return hasLightBackgroundColor(theme) ? getBlueArrayAsc(theme) : getBlueArrayDesc(theme);
}
export function getDivergingColorsArray(theme) {
  const {
    colors
  } = theme;
  return [colors.red100, colors.red90, colors.red70, colors.red50, colors.red30, colors.blue30, colors.blue50, colors.blue70, colors.blue90, colors.blue100];
}
export function getCategoricalColorsArray(theme) {
  const {
    colors
  } = theme;
  return hasLightBackgroundColor(theme) ? [colors.blue80, colors.blue40, colors.red80, colors.red40, colors.blueGreen80, colors.green40, colors.orange80, colors.orange50, colors.purple80, colors.gray40] : [colors.blue40, colors.blue80, colors.red40, colors.red80, colors.green40, colors.blueGreen80, colors.orange50, colors.orange80, colors.purple80, colors.gray40];
}
export function getDecreasingRed(theme) {
  return hasLightBackgroundColor(theme) ? theme.colors.red80 : theme.colors.red40;
}
export function getIncreasingGreen(theme) {
  return hasLightBackgroundColor(theme) ? theme.colors.blueGreen80 : theme.colors.green40;
}

/**
 * Return a @emotion/styled-like css dictionary to update the styles of headers, such as h1, h2, ...
 * Used for st.title, st.header, ... that are wrapped in the Sidebar or Dialogs.
 */
export function getWrappedHeadersStyle(theme) {
  return {
    "& h1": {
      fontSize: theme.fontSizes.xl,
      fontWeight: 600
    },
    "& h2": {
      fontSize: theme.fontSizes.lg,
      fontWeight: 600
    },
    "& h3": {
      fontSize: theme.fontSizes.mdLg,
      fontWeight: 600
    },
    "& h4": {
      fontSize: theme.fontSizes.md,
      fontWeight: 600
    },
    "& h5": {
      fontSize: theme.fontSizes.sm,
      fontWeight: 600
    },
    "& h6": {
      fontSize: theme.fontSizes.twoSm,
      fontWeight: 600
    }
  };
}
function addPxUnit(n) {
  return "".concat(n, "px");
}
//# sourceMappingURL=utils.js.map