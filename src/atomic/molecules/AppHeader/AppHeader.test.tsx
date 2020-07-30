import * as React from 'react'
import { fireEvent, render } from 'react-native-testing-library'

import { AppHeader, IAppHeaderProps } from '../../../atomic/molecules/AppHeader'
import { mockTestID, StorybookHoc as wrapper } from '../../../utils'

describe('Molecules/AppHeader', () => {
  let props: IAppHeaderProps = {
    testID: 'AppHeader',
    onBack: jest.fn(),
    onFilter: jest.fn(),
  }

  const { toJSON, findByTestId, update } = render(<AppHeader {...props} />, { wrapper })

  const el_container = mockTestID('View', props.testID!).testID
  const el_logo = mockTestID('Image', `${props.testID!}_logo`).testID
  const el_title = mockTestID('Text', `${props.testID!}_title`).testID
  const el_subtitle = mockTestID('Text', `${props.testID!}_subtitle`).testID
  const el_onBack = mockTestID('TouchableOpacity', `${props.testID!}_onBack`).testID
  const el_onFilter = mockTestID('TouchableOpacity', `${props.testID!}_onFilter`).testID

  it(`render component #${el_container}`, async () => {
    const sut = await findByTestId(el_container)
    expect(sut).toBeTruthy()
  })

  it(`render component #${el_logo}`, async () => {
    props.logo = true
    update(<AppHeader {...props} />)
    const sut = await findByTestId(el_logo)
    expect(sut).toBeTruthy()
  })

  it(`render component #${el_title}`, async () => {
    props.logo = false
    props.title = 'Page fake'
    update(<AppHeader {...props} />)
    const sut = await findByTestId(el_title)
    expect(sut).toBeTruthy()
    expect(sut.children).toEqual([props.title])
  })

  it(`render component #${el_subtitle}`, async () => {
    props.logo = false
    props.title = undefined
    props.subtitle = 'Page Fake'
    update(<AppHeader {...props} />)
    const sut = await findByTestId(el_subtitle)
    expect(sut).toBeTruthy()
    expect(sut.children).toEqual([props.subtitle])
  })

  it(`onPress component #${el_onBack}`, async () => {
    const sut = await findByTestId(el_onBack)
    expect(sut).toBeTruthy()
    fireEvent(sut, 'press')
    expect(props.onBack).toBeCalledTimes(1)
  })

  it(`onPress component #${el_onFilter}`, async () => {
    const sut = await findByTestId(el_onFilter)
    expect(sut).toBeTruthy()
    fireEvent(sut, 'press')
    expect(props.onFilter).toBeCalledTimes(1)
  })

  it('should render snapshot', () => {
    expect(toJSON()).toMatchSnapshot()
  })
})
