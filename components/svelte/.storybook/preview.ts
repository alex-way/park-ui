import { withThemeByClassName } from '@storybook/addon-themes'
import type { Preview, SvelteRenderer } from '@storybook/svelte'
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
    withThemeByClassName<SvelteRenderer>({
      defaultTheme: 'light',
      themes: {
        light: '',
        dark: 'dark',
      },
    }),
    (story) => {
      return story()
    },
  ],
}

export default preview
