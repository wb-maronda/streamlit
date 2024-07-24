import { transparentize } from "color2k"
import styled from "@emotion/styled"
import {
  getWrappedHeadersStyle,
  hasLightBackgroundColor,
} from "@streamlit/lib/src/theme/utils"

// Check for custom text color & handle colors in SidebarNav accordingly
const conditionalCustomColor = (
  theme: any,
  customThemeColor: string,
  defaultThemeColor: string
): string => {
  let customTextColor = theme.colors.bodyText !== theme.colors.gray10

  if (hasLightBackgroundColor(theme)) {
    customTextColor = theme.colors.bodyText !== theme.colors.gray85
  }

  return customTextColor ? customThemeColor : defaultThemeColor
}

export interface StyledSidebarProps {
  isCollapsed: boolean
  adjustTop: boolean
  sidebarWidth: string
}

export const StyledSidebar = styled.section<StyledSidebarProps>(
  ({ isCollapsed, adjustTop, sidebarWidth }) => {
    const minWidth = isCollapsed ? 0 : Math.min(244, window.innerWidth)
    const maxWidth = isCollapsed ? 0 : Math.min(550, window.innerWidth * 0.9)

    return {
      // Nudge the sidebar by 2px so the header decoration doesn't go below it
      position: "relative",
      top: adjustTop ? "2px" : "0px",
      backgroundColor: "#009844", // Custom green background color
      color: "white", // White text color
      zIndex: 10, // Example zIndex

      minWidth,
      maxWidth,
      transform: isCollapsed ? `translateX(-${sidebarWidth}px)` : "none",
      transition: "transform 300ms, min-width 300ms, max-width 300ms",

      "&:focus": {
        outline: "none",
      },

      [`@media (max-width: 768px)`]: {
        boxShadow: `-2rem 0 2rem 2rem ${
          isCollapsed ? "transparent" : "#00000029"
        }`,
      },

      [`@media print`]: {
        display: isCollapsed ? "none" : "initial",
        // set to auto, otherwise the sidebar does not take up the whole page
        height: "auto !important",
        // set maxHeight to little bit less than 100%, otherwise the sidebar might start a mostly blank page
        maxHeight: "99%",
        // on Chrome, sth. adds a box-shadow in printing mode which looks weird
        boxShadow: "none",
      },
    }
  }
)

export const StyledSidebarNavContainer = styled.div(() => ({
  position: "relative",
}))

export interface StyledSidebarNavItemsProps {
  isExpanded: boolean
  hasSidebarElements: boolean
}

export const StyledSidebarNavItems = styled.ul<StyledSidebarNavItemsProps>(
  ({ isExpanded, hasSidebarElements }) => {
    return {
      maxHeight: isExpanded ? "none" : "30vh",
      listStyle: "none",
      overflow:
        isExpanded && hasSidebarElements ? ["auto", "overlay"] : "hidden",
      margin: 0,
      paddingBottom: "0.125rem",
    }
  }
)

export const StyledSidebarNavLinkContainer = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
}))

export interface StyledSidebarNavLinkProps {
  isActive: boolean
}

export const StyledSidebarNavLink = styled.a<StyledSidebarNavLinkProps>(
  ({ isActive }) => {
    const defaultPageLinkStyles = {
      textDecoration: "none",
      fontWeight: isActive ? 600 : 400,
    }

    return {
      ...defaultPageLinkStyles,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "8px",
      borderRadius: "8px",
      paddingLeft: "8px",
      paddingRight: "8px",
      marginLeft: "32px",
      marginRight: "32px",
      marginTop: "4px",
      marginBottom: "4px",
      lineHeight: "1.5",

      color: "white", // White text color
      backgroundColor: isActive ? "#007a34" : "transparent", // Darker green for active background

      "&:hover": {
        backgroundColor: "#008c39", // Slightly lighter green for hover
      },

      "&:active,&:visited,&:hover": {
        ...defaultPageLinkStyles,
      },

      "&:focus": {
        outline: "none",
      },

      "&:focus-visible": {
        backgroundColor: "#007a34", // Same as active background color for focus
      },

      [`@media print`]: {
        paddingLeft: 0,
      },
    }
  }
)

export interface StyledSidebarLinkTextProps {
  isActive: boolean
}

export const StyledSidebarLinkText = styled.span<StyledSidebarLinkTextProps>(
  ({ isActive }) => {
    return {
      color: isActive ? "white" : "white", // Use isActive prop
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      display: "table-cell",
    }
  }
)

export interface StyledSidebarUserContentProps {
  hasPageNavAbove: boolean
}

export const StyledSidebarUserContent =
  styled.div<StyledSidebarUserContentProps>(({ hasPageNavAbove, theme }) => ({
    paddingTop: hasPageNavAbove ? theme.spacing.twoXL : 0,
    paddingBottom: theme.sizes.sidebarTopSpace,
    paddingLeft: theme.spacing.twoXL,
    paddingRight: theme.spacing.twoXL,

    ...getWrappedHeadersStyle(theme),
  }))

export const StyledSidebarContent = styled.div(({}) => ({
  position: "relative",
  height: "100%",
  width: "100%",
  overflow: ["auto", "overlay"],
}))

export const StyledResizeHandle = styled.div(({ theme }) => ({
  position: "absolute",
  width: "8px",
  height: "100%",
  cursor: "col-resize",
  zIndex: theme.zIndices.sidebarMobile,

  "&:hover": {
    backgroundImage: `linear-gradient(to right, transparent 20%, ${theme.colors.fadedText20} 28%, transparent 36%)`,
  },
}))

export const StyledSidebarHeaderContainer = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "start",
  padding: `${theme.spacing.xl} ${theme.spacing.twoXL} ${theme.spacing.twoXL} ${theme.spacing.twoXL}`,
}))

export const StyledLogoLink = styled.a(({}) => ({
  "&:hover": {
    opacity: "0.7",
  },
}))

export const StyledLogo = styled.img(({ theme }) => ({
  height: "1.5rem",
  maxWidth: "15rem",
  margin: "0.25rem 0.5rem 0.25rem 0",
  zIndex: theme.zIndices.header,
}))

export const StyledNoLogoSpacer = styled.div(({}) => ({
  height: "2.0rem",
}))

export interface StyledSidebarOpenContainerProps {
  chevronDownshift: number
  isCollapsed: boolean
}

export const StyledSidebarOpenContainer =
  styled.div<StyledSidebarOpenContainerProps>(
    ({ theme, chevronDownshift, isCollapsed }) => ({
      position: "fixed",
      top: chevronDownshift ? `${chevronDownshift}px` : theme.spacing.xl,
      left: isCollapsed ? theme.spacing.twoXL : `-${theme.spacing.twoXL}`,
      zIndex: theme.zIndices.header,
      display: "flex",
      justifyContent: "center",
      alignItems: "start",

      transition: "left 300ms",
      transitionDelay: "left 300ms",

      [`@media print`]: {
        position: "static",
      },
    })
  )

export const StyledOpenSidebarButton = styled.div(({ theme }) => {
  const color = conditionalCustomColor(
    theme,
    theme.colors.bodyText,
    theme.colors.sidebarControlColor
  )

  return {
    zIndex: theme.zIndices.header,
    color,

    button: {
      "&:hover": {
        backgroundColor: theme.colors.darkenedBgMix25,
      },
    },

    [`@media print`]: {
      display: "none",
    },
  }
})

export interface StyledCollapseSidebarButtonProps {
  showSidebarCollapse: boolean
}

export const StyledCollapseSidebarButton =
  styled.div<StyledCollapseSidebarButtonProps>(
    ({ showSidebarCollapse, theme }) => {
      const color = conditionalCustomColor(
        theme,
        theme.colors.bodyText,
        theme.colors.sidebarControlColor
      )

      return {
        display: showSidebarCollapse ? "inline" : "none",
        transition: "left 300ms",
        transitionDelay: "left 300ms",
        color,
        lineHeight: "0",

        [`@media print`]: {
          display: "none",
        },

        [`@media (max-width: ${theme.breakpoints.md})`]: {
          display: "none",
        },
      }
    }
  )

export interface StyledSidebarCollapsedControlProps {
  isCollapsed: boolean
  chevronDownshift: number
}

export const StyledSidebarCollapsedControl =
  styled.div<StyledSidebarCollapsedControlProps>(
    ({ isCollapsed, chevronDownshift, theme }) => ({
      display: "flex",
      justifyContent: "center",
      alignItems: "start",
      position: "fixed",
      top: chevronDownshift ? `${chevronDownshift}px` : theme.spacing.xl,
      left: isCollapsed ? theme.spacing.twoXL : `-${theme.spacing.twoXL}`,
      zIndex: theme.zIndices.header,

      transition: "left 300ms",
      transitionDelay: "left 300ms",

      button: {
        "&:hover": {
          backgroundColor: theme.colors.darkenedBgMix25,
        },
      },

      [`@media print`]: {
        display: "none",
      },

      [`@media (max-width: ${theme.breakpoints.md})`]: {
        display: "none",
      },
    })
  )

export const StyledExitSidebarExpander = styled.div(({ theme }) => {
  const color = conditionalCustomColor(
    theme,
    theme.colors.bodyText,
    theme.colors.sidebarControlColor
  )

  return {
    color,
    lineHeight: "0",

    [`@media print`]: {
      display: "none",
    },
  }
})

export const StyledSidebarNavSectionHeader = styled.div(({ theme }) => ({
  //fontSize: theme.fontSizes.smDefault,
  fontWeight: 600,
  color: "white",
  paddingTop: theme.spacing.lg,
  paddingBottom: theme.spacing.md,
  paddingLeft: theme.spacing.twoXL,
  paddingRight: theme.spacing.twoXL,
  textTransform: "uppercase",
  overflow: "hidden",
  textOverflow: "ellipsis",
}))

export const StyledSidebarNavSectionDivider = styled.hr(({ theme }) => ({
  marginTop: theme.spacing.xs,
  marginBottom: theme.spacing.lg,
  marginLeft: theme.spacing.twoXL,
  marginRight: theme.spacing.twoXL,
  border: "none",
  borderBottom: `1px solid ${transparentize(theme.colors.fadedText40, 0.3)}`,
}))
