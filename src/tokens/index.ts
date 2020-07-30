import { DefaultTheme } from 'styled-components/native'

import { darkTheme } from './dark'
import { lightTheme } from './light'

export * from './dark'
export * from './light'

interface IThemes {
  light: DefaultTheme
  dark: DefaultTheme
}
export const themes: IThemes = {
  light: lightTheme,
  dark: darkTheme,
}
