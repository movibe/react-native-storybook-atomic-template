import * as React from 'react'

import { Image } from '../../../atomic/atoms/Image'
import { faker } from '../../../utils'

export default {
  title: 'Atoms/Image',
}

export const normal = () => (
  <Image
    source={{
      uri: faker.image.image(),
    }}
    style={{ width: 389, height: 196 }}
  />
)
