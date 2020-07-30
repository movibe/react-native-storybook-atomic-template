import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import * as React from 'react'

import { Button } from '../../../atomic/atoms/Button'
import { faker } from '../../../utils'

export default {
  title: 'Atoms/Button',
  parameters: {
    jest: ['Atoms/Button'],
  },
}

export const normal = () => (
  <>
    <Button testID='testId' text='default' onPress={action('default')} marginBottom />
    <Button testID='testId' text='color' color onPress={action('color')} marginBottom />
    <Button testID='testId' text='border' border onPress={action('border')} marginBottom />
    <Button testID='testId' text='borderColor' borderColor onPress={action('border')} marginBottom />
    <Button testID='testId' text='dark' dark onPress={action('dark')} marginBottom />
  </>
)
export const small = () => (
  <>
    <Button testID='testId' small text='default' onPress={action('default')} marginBottom />
    <Button testID='testId' small text='color' color onPress={action('color')} marginBottom />
    <Button testID='testId' small text='border' border onPress={action('border')} marginBottom />
    <Button testID='testId' small text='borderColor' borderColor onPress={action('border')} marginBottom />
    <Button testID='testId' small text='dark' dark onPress={action('dark')} marginBottom />
  </>
)
export const rounded = () => (
  <>
    <Button testID='testId' rounded text='default' onPress={action('default')} marginBottom />
    <Button testID='testId' rounded text='color' color onPress={action('color')} marginBottom />
    <Button testID='testId' rounded text='border' border onPress={action('border')} marginBottom />
    <Button testID='testId' rounded text='borderColor' borderColor onPress={action('border')} marginBottom />
    <Button testID='testId' rounded text='dark' dark onPress={action('dark')} marginBottom />
  </>
)
export const example = () => (
  <>
    <Button
      testID='testId'
      text={text('title', 'Exemplo de Botão')}
      color={boolean('color', false)}
      dark={boolean('dark', false)}
      border={boolean('border', false)}
      margin={boolean('margin', false)}
      rounded={boolean('rounded', false)}
      uppercase={boolean('uppercase', false)}
      disabled={boolean('disabled', false)}
      textBold={boolean('textBold', false)}
      onPress={action('onPress')}
      marginBottom
    />
  </>
)
export const list = () => (
  <>
    <Button
      testID='testId'
      text={text('title', faker.commerce.productName())}
      color={boolean('color', false)}
      dark={boolean('dark', false)}
      border={boolean('border', false)}
      margin={boolean('margin', false)}
      rounded={boolean('rounded', false)}
      uppercase={boolean('uppercase', false)}
      disabled={boolean('disabled', false)}
      textBold={boolean('textBold', false)}
      onPress={action('onPress')}
      marginBottom
    />
  </>
)
