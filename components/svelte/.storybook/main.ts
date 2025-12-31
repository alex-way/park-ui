import type { StorybookConfig } from '@storybook/svelte-vite'

const config: StorybookConfig = {
  framework: '@storybook/svelte-vite',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|ts|svelte)'],
  addons: ['@storybook/addon-svelte-csf', '@storybook/addon-a11y', '@storybook/addon-themes'],
  core: {
    disableTelemetry: true,
  },
}
export default config
