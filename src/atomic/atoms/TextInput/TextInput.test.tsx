import * as React from 'react'
import { fireEvent, render } from 'react-native-testing-library'

import { ITextInputProps, TextInput } from '../../../atomic/atoms/TextInput'
import { mockTestID, StorybookHoc } from '../../../utils'

describe('Atom/TextInput', () => {
  let props: ITextInputProps = {
    testID: 'Teste',
    value: '',
    onChangeText: jest.fn(),
  }
  const { findByTestId, getByTestId, toJSON } = render(<TextInput {...props} />, {
    wrapper: StorybookHoc,
  })

  const el_container = mockTestID('TextInput', props.testID!).testID

  it('should render', () => {
    const sut = findByTestId(el_container)

    expect(sut).toBeDefined()
    expect(props.value).toEqual(props.value)
  })

  it('should change text', () => {
    const sut = getByTestId(el_container)
    fireEvent(sut, 'changeText', 'oi')
    expect(props.onChangeText).toHaveBeenCalledTimes(1)
  })

  it('should render snapshot', () => {
    expect(toJSON()).toMatchSnapshot()
  })
})
