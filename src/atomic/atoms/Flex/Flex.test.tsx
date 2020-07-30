import * as React from 'react'
import { fireEvent, render } from 'react-native-testing-library'

import { Column, Row } from '../../../atomic/atoms/Flex'
import { mockTestID, StorybookHoc } from '../../../utils'
import { IFlexProps } from '../../../atomic/atoms/Flex'

describe('Atom/Flex ', () => {
  describe('Row', () => {
    let props: IFlexProps = {
      testID: 'row',
    }

    const { findByTestId, update } = render(<Row {...props} />, {
      wrapper: StorybookHoc,
    })

    it('should render View', async () => {
      const sut = await findByTestId(mockTestID('View', props.testID!).testID)
      expect(sut).toBeTruthy()
    })

    it('should render props reverse', async () => {
      props.reverse = true
      update(<Row {...props} />)

      const sut = await findByTestId(mockTestID('View', props.testID!).testID)
      expect(sut).toBeTruthy()
    })

    it('should render ScrollView', async () => {
      props.scroll = true
      update(<Row {...props} />)

      const sut = await findByTestId(mockTestID('ScrollView', props.testID!).testID)
      expect(sut).toBeTruthy()
    })

    it('should render TouchableOpacity', async () => {
      props.scroll = false
      props.onPress = jest.fn()
      update(<Row {...props} />)

      const sut = await findByTestId(mockTestID('TouchableOpacity', props.testID!).testID)
      expect(sut).toBeTruthy()

      fireEvent(sut, 'press')
      expect(props.onPress).toBeCalledTimes(1)
    })
  })

  describe('Column', () => {
    let props: IFlexProps = {
      testID: 'column',
    }

    const { findByTestId, update, toJSON } = render(<Column {...props} />, {
      wrapper: StorybookHoc,
    })

    it('should render View', async () => {
      const sut = await findByTestId(mockTestID('View', props.testID!).testID)
      expect(sut).toBeTruthy()
    })

    it('should render props reverse', async () => {
      props.reverse = true
      update(<Column {...props} />)

      const sut = await findByTestId(mockTestID('View', props.testID!).testID)
      expect(sut).toBeTruthy()
    })

    it('should render ScrollView', async () => {
      props.scroll = true
      update(<Column {...props} />)

      const sut = await findByTestId(mockTestID('ScrollView', props.testID!).testID)
      expect(sut).toBeTruthy()
    })

    it('should render TouchableOpacity', async () => {
      props.scroll = false
      props.onPress = jest.fn()
      update(<Column {...props} />)

      const sut = await findByTestId(mockTestID('TouchableOpacity', props.testID!).testID)
      expect(sut).toBeTruthy()

      fireEvent(sut, 'press')
      expect(props.onPress).toBeCalledTimes(1)
    })

    it('should render snapshot', () => {
      expect(toJSON()).toMatchSnapshot()
    })
  })
})
