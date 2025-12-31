import { withThemeByClassName } from '@storybook/addon-themes'
import type { Preview } from '@storybook/svelte'
import './index.css'

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: 'alphabetical',
      },
    },
    layout: 'padded',
  },
  decorators: [
    withThemeByClassName({
      defaultTheme: 'light',
      themes: {
        light: '',
        dark: 'dark',
      },
    }),
  ],
}

export default preview
