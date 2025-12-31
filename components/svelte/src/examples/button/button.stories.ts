import type { Meta } from '@storybook/svelte'

const meta: Meta = {
  title: 'Buttons / Button',
}

export default meta

export { default as basic } from './basic.svelte'
export { default as variants } from './variants.svelte'
export { default as sizes } from './sizes.svelte'
export { default as loading } from './loading.svelte'
export { default as disabled } from './disabled.svelte'
