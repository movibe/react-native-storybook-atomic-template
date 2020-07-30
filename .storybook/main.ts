export default {
  stories: ['../src/**/*.(stories|story).(js|ts|tsx|mdx)', '../docs/**/*.(stories|story).(js|ts|tsx|mdx)'],
  addons: [
    '@storybook/preset-typescript',
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport',
    '@storybook/addon-docs/',
    '@storybook/addon-jest',
  ],
}
