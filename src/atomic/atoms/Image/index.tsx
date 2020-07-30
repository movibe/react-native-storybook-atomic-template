import * as React from 'react'
import { Image as Component, ImageProperties } from 'react-native'

import { assignTestId } from '../../../utils'

export interface IImageProps extends ImageProperties {
  testID?: string
}

export const Image: React.FC<IImageProps> = ({ testID = 'image', ...props }): JSX.Element => {
  return <Component {...assignTestId('Image', testID)} {...props} />
}
