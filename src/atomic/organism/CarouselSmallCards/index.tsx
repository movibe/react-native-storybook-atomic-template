import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'

import { Row } from '../../../atomic/atoms/Flex'
import { SmallCard, ISmallCardProps } from '../../../atomic/molecules/SmallCard'

export interface ICarouselSmallCardsProps {
  layout?: 'default' | 'stack' | 'tinder'
  testID?: string
  cards: ISmallCardProps[]
  sliderWidth?: number
  itemWidth?: number
  autoplay?: boolean
  onPress?: () => void
  pagination?: boolean
}

export const CarouselSmallCards: React.FC<ICarouselSmallCardsProps> = ({
  testID = 'CarouselSmallCards',
  layout = 'default',
  cards,
  sliderWidth = Dimensions.get('window').width,
  itemWidth = 100,
  onPress,
  autoplay,
  pagination,
}): JSX.Element => {
  const [Active, setActive] = useState(0)
  const _renderItem = ({ item }) => <SmallCard testID={`${testID}_item`} {...item} onPress={onPress} width={itemWidth} />

  return (
    <>
      <Row testID={testID}>
        <Carousel
          autoplay={autoplay}
          layout={layout}
          data={cards}
          renderItem={_renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          onSnapToItem={setActive}
        />
      </Row>
      {pagination && (
        <Row justifyContent='center' alignItems='center' style={{ height: 40 }}>
          <Pagination
            dotsLength={cards.length}
            activeDotIndex={Active}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: 'rgba(0, 0, 0, 0.92)',
            }}
            inactiveDotStyle={{
              backgroundColor: 'rgba(255, 0, 0, 0.92)',
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
        </Row>
      )}
    </>
  )
}
