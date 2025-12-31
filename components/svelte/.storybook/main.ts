import type { StorybookConfig } from '@storybook/svelte-vite'

const config: StorybookConfig = {
  framework: '@storybook/svelte-vite',
  stories: ['../src/examples/**/*.stories.@(js|jsx|mjs|ts|tsx|svelte)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-themes'],
  core: {
    disableTelemetry: true,
  },
}

export default config
