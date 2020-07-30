import * as React from 'react'
import { fireEvent, render } from 'react-native-testing-library'

import { ISmallCardProps, SmallCard } from '../../../atomic/molecules/SmallCard'
import { mockTestID, StorybookHoc as wrapper } from '../../../utils'

describe('Molecules/SmallCard', () => {
  let props: ISmallCardProps = {
    testID: 'SmallCard',
    image: {
      uri: 'https://i.redd.it/mjauu6mwms6z.jpg',
    },
  }

  const { toJSON, findByTestId, update } = render(<SmallCard {...props} />, {
    wrapper,
  })

  const el_container = mockTestID('TouchableOpacity', props.testID!).testID
  const el_container_press = mockTestID('TouchableOpacity', props.testID!).testID
  const el_text = mockTestID('Text', props.testID!).testID

  it(`render component #${el_container}`, async () => {
    const sut = await findByTestId(el_container)
    expect(sut).toBeTruthy()
  })

  it(`render component #${el_text}`, async () => {
    props.text = 'Exemplo'
    update(<SmallCard {...props} />)
    const sut = await findByTestId(el_text)
    expect(sut).toBeTruthy()
    expect(sut.children).toEqual([props.text])
  })
  it(`render component #${el_container_press}`, async () => {
    props.onPress = jest.fn()
    update(<SmallCard {...props} />)
    const sut = await findByTestId(el_container_press)
    fireEvent(sut, 'press')
    expect(props.onPress).toBeCalledTimes(1)
  })

  it('should render snapshot', () => {
    expect(toJSON()).toMatchSnapshot()
  })
})
