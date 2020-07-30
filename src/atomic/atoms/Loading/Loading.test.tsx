import * as React from 'react'
import { Platform } from 'react-native'
import { render } from 'react-native-testing-library'

import { ILoadingProps, Loading } from '../../../atomic/atoms/Loading'
import { mockTestID, StorybookHoc } from '../../../utils'

describe('Atom/Loading', () => {
  let props: ILoadingProps = {
    testID: 'Loading',
  }
  const { findByTestId, toJSON, update } = render(<Loading size={20} />, {
    wrapper: StorybookHoc,
  })

  const el_container = mockTestID('View', props.testID!).testID

  describe(' android', () => {
    Platform.OS = 'android' // or 'ios'
    it('should render', async () => {
      const sut = await findByTestId(el_container)
      expect(sut).toBeDefined()
    })

    it('should render size small', async () => {
      props.size = 'small'
      update(<Loading {...props} />)

      const sut = await findByTestId(el_container)
      expect(sut).toBeDefined()
    })
    it('should render size large', async () => {
      props.size = 'large'
      update(<Loading {...props} />)

      const sut = await findByTestId(el_container)
      expect(sut).toBeDefined()
    })
  })

  describe(' ios', () => {
    Platform.OS = 'ios' // or 'ios'
    it('should render', async () => {
      const sut = await findByTestId(el_container)
      expect(sut).toBeDefined()
    })

    it('should render size small', async () => {
      props.size = 'small'
      update(<Loading {...props} />)

      const sut = await findByTestId(el_container)
      expect(sut).toBeDefined()
    })
    it('should render size large', async () => {
      props.size = 'large'
      update(<Loading {...props} />)

      const sut = await findByTestId(el_container)
      expect(sut).toBeDefined()
    })
  })

  it('should render snapshot', () => {
    expect(toJSON()).toMatchSnapshot()
  })
})
