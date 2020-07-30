import React, { useState } from 'react'
import { ImageSourcePropType, View } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import styled from 'styled-components/native'

import { Column } from '../../../atomic/atoms/Flex'
import { Image } from '../../../atomic/atoms/Image'
import { assignTestId } from '../../../utils'

export interface ISlideImageProps {
  testID?: string
  images: Array<ImageSourcePropType>
  width: number
  height?: number
  onPress?: () => void
  autoPlay?: boolean
  firstItem?: number
  showPagination?: boolean
}

const Container = styled(Column)`
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.disabled};
  width: 100%;
`
export const SlideImage: React.FC<ISlideImageProps> = ({
  testID = 'SlideImage',
  images,
  width,
  onPress,
  height,
  firstItem,
  autoPlay,
  showPagination,
}): JSX.Element => {
  const [activeSlide, setActiveSlide] = useState(firstItem || 0)

  const renderItem = ({ item, index }) => (
    <Column testID={`${testID}_slide_item`} onPress={onPress} key={index}>
      <Image testID={`${testID}_slide_item_image`} source={{ ...item, height: height, width: width }} />
    </Column>
  )

  const onChangeSlide = (index) => {
    setActiveSlide(index)
  }

  return (
    <Container alignItems='center' testID={testID}>
      <Carousel
        {...assignTestId('View', `${testID}_slide`)}
        data={images}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width}
        firstItem={firstItem}
        onSnapToItem={onChangeSlide}
        autoplay={autoPlay}
        activeSlideAlignment='center'
      />
      {showPagination && (
        <View {...assignTestId('View', `SlideImage_pagination`)}>
          <Pagination
            dotsLength={images.length}
            activeDotIndex={activeSlide}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: '#828282',
            }}
            inactiveDotStyle={{
              backgroundColor: '#D8D8D8',
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
        </View>
      )}
    </Container>
  )
}
