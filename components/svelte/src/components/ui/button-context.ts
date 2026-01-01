import type { ButtonVariantProps } from 'styled-system/recipes'
import { getContext, setContext } from 'svelte'

const BUTTON_CONTEXT_KEY = Symbol('buttonContext')

export function setButtonContext(props: ButtonVariantProps) {
  setContext(BUTTON_CONTEXT_KEY, props)
}

export function getButtonContext(): ButtonVariantProps {
  return getContext(BUTTON_CONTEXT_KEY) ?? {}
}
