import * as React from 'react'
import { fireEvent, render } from 'react-native-testing-library'

import { ISlideImageProps, SlideImage } from '../../../atomic/molecules/SlideImage'
import { mockTestID, StorybookHoc } from '../../../utils'

describe('Molecules/SlideImage', () => {
  let props: ISlideImageProps = {
    testID: 'SlideImage',
    width: 200,
    height: 200,
    images: [{ uri: 'http://google.com' }, { uri: 'http://google.com' }, { uri: 'http://google.com' }],
  }
  const { toJSON, findByTestId, getAllByTestId, update } = render(<SlideImage {...props} />, {
    wrapper: StorybookHoc,
  })

  const container = mockTestID('View', props.testID!).testID
  it(`render container #${container}`, async () => {
    const sut = await findByTestId(container)
    expect(sut).toBeTruthy()
  })

  const carousel = mockTestID('View', `${props.testID!}_slide`).testID
  it(`render carousel #${carousel}`, async () => {
    const sut = await findByTestId(carousel)
    expect(sut).toBeTruthy()
  })

  it(`render carousel with firtsIndex #${carousel}`, async () => {
    props.firstItem = 1
    update(<SlideImage {...props} />)
    const sut = await findByTestId(carousel)
    expect(sut).toBeTruthy()
  })

  const pagination = mockTestID('View', `${props.testID!}_pagination`).testID
  it(`render pagination #${pagination}`, async () => {
    props.showPagination = true
    update(<SlideImage {...props} />)
    const sut = await findByTestId(pagination)
    expect(sut).toBeTruthy()
    expect(sut.children.length).toEqual(1)
  })

  const item = mockTestID('View', `${props.testID!}_slide_item`).testID
  it(`render item #${item}`, async () => {
    const sut = await getAllByTestId(item)
    expect(sut).toHaveLength(props.images.length)
  })

  const itemPress = mockTestID('TouchableOpacity', `${props.testID!}_slide_item`).testID
  it(`press item #${itemPress}`, async () => {
    props.onPress = jest.fn()
    update(<SlideImage {...props} />)
    const sut = await getAllByTestId(itemPress)
    fireEvent(sut[0], 'press')
    expect(props.onPress).toHaveBeenCalledTimes(1)
  })

  const image = mockTestID('Image', `${props.testID!}_slide_item_image`).testID
  it(`render image #${image}`, async () => {
    const sut = await getAllByTestId(image)
    expect(sut).toHaveLength(props.images.length)
  })
})
