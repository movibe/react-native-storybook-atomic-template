import * as React from 'react'
import { render } from 'react-native-testing-library'

import { ITextProps, Text } from '../../../atomic/atoms/Text'
import { mockTestID, StorybookHoc } from '../../../utils'

describe('Atom/Text', () => {
  let props: ITextProps = {
    testID: 'submit',
  }
  const text = 'example'
  const { toJSON, findByTestId } = render(<Text {...props}>{text}</Text>, {
    wrapper: StorybookHoc,
  })

  it('render text component', async () => {
    const sut = await findByTestId(mockTestID('Text', props.testID).testID)
    expect(sut).toBeTruthy()
    expect(sut.children).toEqual([text])
  })

  it('should render snapshot', () => {
    expect(toJSON()).toMatchSnapshot()
  })
})
