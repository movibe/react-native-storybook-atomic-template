import * as React from 'react'
import { TextStyle, ViewStyle } from 'react-native'
import styled from 'styled-components/native'

import { assignTestId } from '../../../utils'
import { Text } from '../Text'

const Container = styled.TouchableOpacity.attrs(() => ({
  accessibilityRole: 'link',
}))<IButtonProps>`
  justify-content: center;
  align-items: center;
  border-color: ${({ theme }) => theme.colors.main};
  height: ${({ small }) => (small ? 25 : 45)}px;
  border-radius: ${({ rounded, theme }) => (rounded ? 20 : theme.borderRadius)};
  padding: 0 15px;
  background-color: ${({ dark, color, theme }) => (dark ? theme.colors.dark : color ? theme.colors.main : theme.colors.background)};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? 10 : 0)}px;
  border-width: ${({ border }) => (border ? 1 : 0)};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`

interface IText {
  uppercase?: boolean
  dark?: boolean
  textBold?: boolean
  color?: boolean
}

const Content = styled(Text)<IText>`
  color: ${({ color, theme }) => (color ? theme.colors.white : theme.colors.main)};
  font-size: 14px;
  text-align: center;
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
  font-weight: ${({ textBold }) => (textBold ? 800 : 600)};
  font-family: ${({ theme }) => theme.text.font.regular};
`

export interface IButtonProps {
  id?: string
  testID?: string
  text?: string
  textBold?: boolean
  onPress: () => void
  border?: boolean
  borderColor?: boolean
  rounded?: boolean
  marginBottom?: boolean
  color?: boolean
  disabled?: boolean
  full?: boolean
  dark?: boolean
  margin?: boolean
  small?: boolean
  style?: ViewStyle
  customTextStyle?: TextStyle
  customStyle?: ViewStyle
  borderWhite?: boolean
  uppercase?: boolean
  colorBlack?: boolean
  backgroundWhite?: boolean
}

export const Button: React.FC<IButtonProps> = ({
  id,
  testID = 'Button',
  text,
  onPress,
  disabled,
  customStyle,
  customTextStyle,
  uppercase,
  textBold,
  color,
  ...props
}) => {
  return (
    <Container onPress={onPress} style={customStyle} disabled={disabled} color={color} {...props} {...assignTestId('TouchableOpacity', testID)}>
      <Content testID={testID} uppercase={uppercase} textBold={textBold} color={color} style={customTextStyle}>
        {text}
      </Content>
    </Container>
  )
}
