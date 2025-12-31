<script lang="ts">
import { type ButtonVariantProps, button } from 'styled-system/recipes'
import type { Snippet } from 'svelte'
import type { HTMLButtonAttributes } from 'svelte/elements'
import { getButtonContext } from '@/components/ui/button-context'
import Loader from '@/components/ui/loader.svelte'

interface ButtonLoadingProps {
  loading?: boolean
  loadingText?: string | Snippet
  spinner?: Snippet
  spinnerPlacement?: 'start' | 'end'
}

interface ButtonProps extends HTMLButtonAttributes, ButtonVariantProps, ButtonLoadingProps {
  children?: Snippet
  colorPalette?: string
}

const {
  loading = false,
  loadingText,
  spinner,
  spinnerPlacement = 'start',
  type = 'button',
  disabled,
  children,
  class: className,
  variant,
  size,
  colorPalette,
  ...rest
}: ButtonProps = $props()

const contextProps = getButtonContext()

const finalVariant = $derived(variant ?? contextProps.variant)
const finalSize = $derived(size ?? contextProps.size)

const isDisabled = $derived(loading || disabled)
const buttonClasses = $derived(button({ variant: finalVariant, size: finalSize }))
</script>

<button
  type={type}
  disabled={isDisabled}
  data-loading={loading ? '' : undefined}
  data-color={colorPalette}
  class={[buttonClasses, className]}
  {...rest}
>
  {#if loading}
    <Loader
      spinner={spinner}
      text={loadingText}
      spinnerPlacement={spinnerPlacement}
    >
      {#if children}
        {@render children()}
      {/if}
    </Loader>
  {:else if children}
    {@render children()}
  {/if}
</button>

<style>
  /* Panda CSS recipes provide the button styling */
</style>
