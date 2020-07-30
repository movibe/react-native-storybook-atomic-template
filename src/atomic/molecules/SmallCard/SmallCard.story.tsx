import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import * as React from 'react'

import { SmallCard } from '../../../atomic/molecules/SmallCard'
import { faker } from '../../../utils'

export default {
  title: 'Molecules/SmallCard',
}

export const normal = () => (
  <SmallCard
    onPress={action('onPress')}
    text={text('text', 'Descontos em combustível')}
    gradient={boolean('gradient', false)}
    image={{
      uri: faker.image.fashion(),
    }}
  />
)
