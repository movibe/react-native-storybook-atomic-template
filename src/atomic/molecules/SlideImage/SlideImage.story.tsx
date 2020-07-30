import { action } from '@storybook/addon-actions'
import { boolean, number } from '@storybook/addon-knobs'
import * as React from 'react'

import { SlideImage } from '../../../atomic/molecules/SlideImage'
import { faker } from '../../../utils'

export default {
  title: 'Molecules/SlideImage',
}

export const normal = () => (
  <SlideImage
    onPress={action('onPress')}
    images={[
      {
        uri: faker.image.cats(),
      },
      {
        uri: faker.image.imageUrl(),
      },
      {
        uri: faker.image.city(),
      },
    ]}
    width={250}
    height={440}
    autoPlay={boolean('autoPlay', true)}
    firstItem={number('firstItem', 0)}
    showPagination={boolean('showPagination', false)}
  />
)

export const custom = () => {
  ; <SlideImage
    images={[
      {
        uri: faker.image.people(),
      },
      {
        uri: faker.image.nature(),
      },
      {
        uri: faker.image.nightlife(),
      },
    ]}
    width={250}
    height={440}
  />
}
