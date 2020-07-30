import * as React from 'react'
import { render } from 'react-native-testing-library'

import { ILottieProps, Lottie } from '../../../atomic/atoms/Lottie'
import { mockTestID, StorybookHoc } from '../../../utils'

describe('Atom/Lottie', () => {
  let props: ILottieProps = {
    testID: 'animate',
    source: {
      uri: 'https://google.com/animate.json',
    },
  }
  const { toJSON, findByTestId } = render(<Lottie {...props} />, {
    wrapper: StorybookHoc,
  })
  it('should render', async () => {
    const sut = await findByTestId(mockTestID('Lottie', props.testID!).testID)
    expect(sut).toBeDefined()
  })

  it('should render snapshot', () => {
    expect(toJSON()).toMatchSnapshot()
  })
})
