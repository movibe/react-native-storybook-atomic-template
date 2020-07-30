import * as React from 'react'
import { render } from 'react-native-testing-library'

import { CarouselSmallCards, ICarouselSmallCardsProps } from '../../../atomic/organism/CarouselSmallCards'
import { mockTestID, StorybookHoc as wrapper } from '../../../utils'

describe('Organisms/CarouselSmallCards', () => {
  let props: ICarouselSmallCardsProps = {
    testID: 'CarouselSmallCards',
    cards: [
      {
        image: {
          uri: 'teste',
        },
        gradient: false,
        text: 'Oi',
      },
    ],
  }

  const { toJSON, findByTestId } = render(<CarouselSmallCards {...props} />, {
    wrapper,
  })

  const el_container = mockTestID('View', props.testID!).testID

  it(`render component #${el_container}`, async () => {
    const sut = await findByTestId(el_container)
    expect(sut).toBeTruthy()
  })

  it('should render snapshot', () => {
    expect(toJSON()).toMatchSnapshot()
  })
})
