import * as React from 'react'
import { render } from 'react-native-testing-library'

import { IImageProps, Image } from '../../../atomic/atoms/Image'
import { mockTestID, StorybookHoc } from '../../../utils'

describe('Atom/Image', () => {
  let props: IImageProps = {
    testID: 'logo',
    source: {
      uri: 'http://lorempixel.com/640/480/food',
    },
  }
  const uri = 'http://lorempixel.com/640/480/food'
  const { toJSON, findByTestId } = render(<Image {...props} />, {
    wrapper: StorybookHoc,
  })

  it('should render element', async () => {
    const sut = await findByTestId(mockTestID('Image', props.testID!).testID)
    expect(sut).toBeTruthy()
    expect(sut.props.source).toEqual({ uri })
  })

  it('should render snapshot', () => {
    expect(toJSON()).toMatchSnapshot()
  })
})
