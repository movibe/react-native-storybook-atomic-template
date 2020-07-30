import * as React from 'react'
import { fireEvent, render } from 'react-native-testing-library'

import { Button, IButtonProps } from '../../../atomic/atoms/Button'
import { mockTestID, StorybookHoc } from '../../../utils'

describe('Atoms/Button', () => {
  let props: IButtonProps = {
    testID: 'Button',
    text: 'Submit',
    onPress: jest.fn(),
  }

  const { getByTestId, toJSON, findByTestId } = render(<Button {...props} />, {
    wrapper: StorybookHoc,
  })

  const sut_container = mockTestID('TouchableOpacity', props.testID!).testID
  const sut_text = mockTestID('Text', props.testID!).testID

  const sut = getByTestId(sut_container)

  it(`should render #${sut_container}`, () => {
    expect(sut).toBeTruthy()
    expect(sut.children.length).toBe(1)
  })

  it(`should onPress #${sut_container}`, () => {
    fireEvent(sut, 'press')
    expect(props.onPress).toHaveBeenCalledTimes(1)
  })

  it(`should render ${sut_text}`, async () => {
    const text = await findByTestId(sut_text)
    expect(text.children).toEqual([props.text])
  })

  it('should render snapshot', () => {
    expect(toJSON()).toMatchSnapshot()
  })
})
