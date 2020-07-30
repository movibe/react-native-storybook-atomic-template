import { action } from '@storybook/addon-actions'
import { boolean, number } from '@storybook/addon-knobs'
import * as React from 'react'

import { CarouselSmallCards } from '../../../atomic/organism/CarouselSmallCards'
import { generateSmallCards } from './mock'

export default {
  title: 'Organisms/CarouselSmallCards',
}

export const normal = () => (
  <CarouselSmallCards
    autoplay={boolean('autoplay', true)}
    pagination={boolean('pagination', true)}
    cards={generateSmallCards(number('cards', 5))}
    itemWidth={number('itemWidth', 145)}
    onPress={action('onPress')}
  />
)

export const stack = () => (
  <CarouselSmallCards
    layout='stack'
    autoplay={boolean('autoplay', true)}
    pagination={boolean('pagination', true)}
    cards={generateSmallCards(number('cards', 5))}
    itemWidth={number('itemWidth', 145)}
    onPress={action('onPress')}
  />
)
export const tinder = () => (
  <CarouselSmallCards
    layout='tinder'
    autoplay={boolean('autoplay', true)}
    pagination={boolean('pagination', true)}
    cards={generateSmallCards(number('cards', 5))}
    itemWidth={number('itemWidth', 145)}
    onPress={action('onPress')}
  />
)
