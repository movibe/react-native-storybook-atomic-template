---
name: 'atomic-atom'
description: 'Atomic component template'
message: 'Please enter the name of component to be created'
root: './src/atomic/atoms'
output: '**/*'
ignore: []
---

# `{{ input | pascal }}/index.tsx`

```jsx
import * as React from 'react'
import { Column } from '../../../atomic/atoms/Flex'

export interface I{{ input | pascal }}Props {
  testID?: string
}

export const {{ input | pascal }} : React.FC<I{{ input | pascal }}Props> = ({
    testID = '{{ input | pascal }}'
  }):JSX.Element => {


  return <Column testID={testID} />
}

```

# `{{ input | pascal }}/{{ input | pascal }}.test.tsx`

```jsx
import * as React from 'react'
import { render } from 'react-native-testing-library'
import { I{{ input | pascal }}Props, {{ input | pascal }} } from '../../../atomic/atoms/{{ input | pascal }}'
import { mockTestID, StorybookHoc as wrapper } from '../../../utils'

describe('Atoms/{{ input | pascal }}', () => {

  let props: I{{ input | pascal }}Props = {
    testID: '{{ input | pascal }}',
  }

  const { toJSON, findByTestId } = render(
    <{{ input | pascal }} {...props} />, { wrapper }
  )

  const el_container = mockTestID('View', props.testID!).testID

  it(`render component #${el_container}`, async () => {
    const sut = await findByTestId(el_container)
    expect(sut).toBeTruthy()
  })

  it('should render snapshot', () => {
    expect(toJSON()).toMatchSnapshot()
  })
})

```

# `{{ input | pascal }}/{{ input | pascal }}.story.tsx`

```jsx
import * as React from 'react'
import {  {{ input | pascal }} } from '../../../atomic/atoms/{{ input | pascal }}'

export default {
  title: 'Atoms/{{ input | pascal }}',
}

export const normal = () => (
      <{{ input | pascal }} />
  )

```
