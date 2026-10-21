'use client'
import { createTheme } from '@mui/material/styles'

// Module Extension for Custom Variables
declare module '@mui/material/styles' {
  interface Theme {
    layout: {
      maxContentWidth: number | string
      screenPadding: number | string
      gridGap: {
        tight: number | string
        default: number | string
        loose: number | string
      }
    }
  }
  interface ThemeOptions {
    layout?: {
      maxContentWidth?: number | string
      screenPadding?: number | string
      gridGap?: {
        tight?: number | string
        default?: number | string
        loose?: number | string
      }
    }
  }
}

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-outfit)',
    h1: {
      fontSize: '2rem', // 32px Mobile
      '@media (min-width:768px)': {
        fontSize: '3rem', // 48px Desktop
      },
      fontWeight: 600,
      lineHeight: 1.15,
    },
    h2: {
      fontSize: '1.625rem', // 26px Mobile
      '@media (min-width:768px)': {
        fontSize: '1.75rem', // 28px Desktop
      },
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '1.125rem', // 18px Mobile
      '@media (min-width:768px)': {
        fontSize: '1.375rem', // 22px Desktop
      },
      fontWeight: 600,
      lineHeight: 1.25,
    },
    h4: {
      fontSize: '1.125rem', // 18px Mobile
      '@media (min-width:768px)': {
        fontSize: '1.25rem', // 20px Desktop
      },
      fontWeight: 600,
      lineHeight: 1.25,
    },
    h5: {
      fontSize: '1.0625rem', // 17px Mobile
      '@media (min-width:768px)': {
        fontSize: '1.125rem', // 18px Desktop
      },
      fontWeight: 600,
      lineHeight: 1.25,
    },
    body1: {
      fontSize: '0.875rem', // 14px Mobile (Default)
      '@media (min-width:768px)': {
        fontSize: '1.0625rem', // 17px Desktop
      },
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.8125rem', // 13px Mobile (Small)
      '@media (min-width:768px)': {
        fontSize: '0.875rem', // 14px Desktop
      },
      fontWeight: 400,
      lineHeight: 1.5,
    },
    caption: {
      fontSize: '0.625rem', // 10px Mobile (Extra Small)
      '@media (min-width:768px)': {
        fontSize: '0.6875rem', // 11px Desktop
      },
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },
  breakpoints: { values: { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200 } },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: '#22C55E' },
        secondary: { main: '#AF52DE' },
        background: { default: '#FFFFFF', paper: '#F2F2F7' },
        text: { primary: '#000000', secondary: '#3C3C4399' },
        success: { main: '#34C759' },
        warning: { main: '#FFCC00' },
        error: { main: '#FF3B30' },
      },
    },
    dark: {
      palette: {
        primary: { main: '#0A84FF' },
        secondary: { main: '#BF5AF2' },
        background: { default: '#000000', paper: '#1C1C1E' },
        text: { primary: '#FFFFFF', secondary: '#EBEBF599' },
        success: { main: '#30D158' },
        warning: { main: '#FFD60A' },
        error: { main: '#FF453A' },
      },
    },
  },
  cssVariables: { colorSchemeSelector: 'class' },
  layout: {
    maxContentWidth: 1400,
    screenPadding: 'var(--screen-padding)', // We will set this in components or global styles if needed, or use conditional logic here?
    // Actually, createTheme with responsive values directly in custom properties is tricky without using getters or just defining raw values.
    // For simplicity and effective use, we'll define objects or use the `breakpoints` mixin in usage.
    // However, here we can define the desktop default and handle mobile override in components via sx.
    // Let's set the desktop values here as base constants or use a structure.
    gridGap: {
      tight: 'var(--grid-gap-tight)',
      default: 'var(--grid-gap-default)',
      loose: 'var(--grid-gap-loose)',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParams) => ({
        ':root': {
          '--screen-padding': '16px',
          '--grid-gap-tight': '8px',
          '--grid-gap-default': '16px',
          '--grid-gap-loose': '24px',
          [themeParams.breakpoints.up('md')]: {
            '--screen-padding': '160px',
            '--grid-gap-tight': '20px',
            '--grid-gap-default': '40px',
            '--grid-gap-loose': '80px',
          },
        },
      }),
    },
  },
})

export default theme
