import * as React from 'react'
import { TextInput as RNTextInput, TextInputProps } from 'react-native'

import { assignTestId } from '../../../utils'

export interface ITextInputProps extends TextInputProps {
  testID?: string
}

export const TextInput: React.FC<ITextInputProps> = ({ testID = 'TextInput', ...props }): JSX.Element => {
  return <RNTextInput {...assignTestId('TextInput', testID)} {...props} />
}
