import { boolean, radios } from '@storybook/addon-knobs'
import * as React from 'react'
import styled, { DefaultTheme, ThemeProvider } from 'styled-components/native'

import { Column } from '../atomic/atoms/Flex'
import { themes } from '../tokens'

const options = {
  Light: 'light',
  Dark: 'dark',
}

interface IProps {
  children: any
  padding?: boolean
}

const Background = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
  flex: 1;
`
export const StorybookHoc: React.FC<IProps> = ({ children, padding = true }) => {
  const color = radios('theme_color', options, 'light')
  const _theme: DefaultTheme = color === 'dark' ? themes.dark : themes.light

  return (
    <ThemeProvider theme={_theme}>
      <Background>
        <Column content={boolean('theme_padding', !!padding)} flex={1}>
          {children}
        </Column>
      </Background>
    </ThemeProvider>
  )
}

export const withTheme = (fn: any) => <StorybookHoc>{fn()}</StorybookHoc>
