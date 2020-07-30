import { DefaultTheme as Theme } from 'styled-components'

declare module 'styled-components' {
  // @ts-ignore
  export interface DefaultTheme extends Theme {
    borderRadius: string
    boxShadow: string

    text: {
      font: {
        bold: string
        light: string
        regular: string
        medium: string
      }

      default: {
        color: string
        size: string
      }
      small: {
        color: string
        size: string
      }
      h1: {
        color: string
        size: string
      }
      h2: {
        color: string
        size: string
      }
    }

    colors: {
      background: string
      text: string
      main: string
      secondary: string
      dark: string
      white: string
      disabled: string
      border: string
      google: string
      facebook: string
    }
  }
}
