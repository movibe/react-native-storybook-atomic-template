import Animation from 'lottie-react-native'
import * as React from 'react'

import { assignTestId } from '../../../utils'
import { AnimatedLottieViewProps } from './types'

export interface ILottieProps extends AnimatedLottieViewProps {
  id?: string
  testID?: string
}

export const Lottie: React.FC<ILottieProps> = ({ id, testID = 'Lottie', ...props }): JSX.Element => {
  return <Animation {...assignTestId('Lottie', testID)} {...props} />
}
