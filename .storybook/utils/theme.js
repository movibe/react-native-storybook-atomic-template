import { create } from '@storybook/theming/create'

import brandImage from '../../src/assets/images/logo.svg'
import { lightTheme } from '../../src/tokens'
import app from '../../app.json'

export const theme = create({
  base: 'light',
  brandTitle: app.name,
  brandUrl: app.url,
  brandImage,
  colorPrimary: lightTheme.colors.main,
  colorSecondary: lightTheme.colors.main,
  // appBg: lightTheme.colors.background,
})
