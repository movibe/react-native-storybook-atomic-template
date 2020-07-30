import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import * as React from 'react'
import { AppHeader } from '../../../atomic/molecules/AppHeader'

export default {
  title: 'Molecules/AppHeader',
}

export const logo = () => <AppHeader logo onBack={action('onBack')} />
export const normal = () => <AppHeader title={text('title', 'Teste')} />
export const onBack = () => <AppHeader onBack={action('onBack')} title={text('title', 'Teste')} />
export const subtitle = () => <AppHeader onBack={action('onBack')} subtitle={text('subtitle', 'Teste')} />
export const subtitleFilter = () => <AppHeader onBack={action('onBack')} onFilter={action('onFilter')} subtitle={text('subtitle', 'Teste')} />
