import * as React from 'react'

import { Text } from '../../../atomic/atoms/Text'
import { boolean } from '@storybook/addon-knobs'

export default {
  title: 'Atoms/Text',
}
export const normal = () => <Text testID='titulo_page' uppercase={boolean('uppercase', false)}>Texto qualquer</Text>
export const uppercase = () => <Text testID='titulo_page' uppercase={boolean('uppercase', true)}>Texto qualquer</Text>
