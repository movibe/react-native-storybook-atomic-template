import * as React from 'react'
import { TextProperties } from 'react-native'
import styled from 'styled-components/native'

import { assignTestId } from '../../../utils'

export interface ITextProps extends TextProperties {
  testID: string
  note?: boolean
  uppercase?: boolean
}

const RNText = styled.Text<ITextProps>`
  color: ${({ theme }) => theme.text.default.color};
  font-size: ${({ theme }) => theme.text.default.size};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
`

export const Text: React.FC<ITextProps> = ({ testID, children, ...props }): JSX.Element => (
  <RNText {...assignTestId('Text', testID)} {...props}>
    {children}
  </RNText>
)
