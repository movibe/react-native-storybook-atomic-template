import { boolean } from '@storybook/addon-knobs'

import { ISmallCardProps } from '../../../atomic/molecules/SmallCard'
import { faker } from '../../../utils'

export const generateSmallCards = (qtd: number = 5, width: number = 150, height: number = 150): ISmallCardProps[] => {
  let cards: ISmallCardProps[] = []

  for (let index = 0; index < qtd; index++) {
    cards.push({
      image: {
        uri: faker.image.image(),
      },
      gradient: boolean('gradient', false),
      text: faker.commerce.productName(),
      width,
      height,
    })
  }

  return cards
}
