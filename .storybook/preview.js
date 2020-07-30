import { withA11Y } from '@storybook/addon-a11y'
import { withTests } from '@storybook/addon-jest'
import { withKnobs } from '@storybook/addon-knobs'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { addDecorator, addParameters } from '@storybook/react'

import * as results from '../.jest-test-results.json'
import { withTheme } from '../src/utils'
import { sortStories } from './utils'

addDecorator(
  withTests({
    results,
    filesExt: '((\\.specs?)|(\\.tests?))?(\\.ts)?$',
  })
)

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    // defaultViewport: 'iphonex',
  },
  // options: {
  //   addonPanelInRight: true,
  // },
  // darkMode: {
  //   // Set the initial theme
  //   current: 'dark',
  // },
})

const SORT_ORDER = {
  Introduction: ['Welcome', 'Getting Started', 'Design Principles', 'Contributing', 'Code of Conduct'],
  Advanced: ['Static CSS', 'Base Components', 'Theme', 'Grid', 'Fonts'],
  Typography: ['Heading', 'SubHeading', 'Text'],
  Layout: [],
  Forms: [],
  Components: [],
  Icons: [],
}

addParameters({
  options: {
    storySort: sortStories(SORT_ORDER),
    // showRoots: true,
  },
  // docs: {},
})

addDecorator(withKnobs({ escapeHTML: false }))
addDecorator(withTheme)
addDecorator(withA11Y)
