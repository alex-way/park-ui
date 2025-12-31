<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { HTMLButtonAttributes } from 'svelte/elements'
  
  interface ButtonProps extends HTMLButtonAttributes {
    /**
     * If `true`, the button will show a loading spinner.
     * @default false
     */
    loading?: boolean
    /**
     * The text to show while loading.
     */
    loadingText?: string
    /**
     * The placement of the spinner
     * @default "start"
     */
    spinnerPlacement?: 'start' | 'end'
    /**
     * Button variant
     */
    variant?: 'solid' | 'outline' | 'ghost' | 'link' | 'subtle'
    /**
     * Button size
     */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
    /**
     * Children content
     */
    children?: Snippet
  }
  
  let {
    loading = false,
    loadingText,
    spinnerPlacement = 'start',
    variant = 'solid',
    size = 'md',
    type = 'button',
    disabled,
    children,
    ...rest
  }: ButtonProps = $props()
  
  const isDisabled = $derived(loading || disabled)
</script>

<button
  type={type}
  disabled={isDisabled}
  data-loading={loading ? '' : undefined}
  class="button"
  data-variant={variant}
  data-size={size}
  {...rest}
>
  {#if loading && loadingText}
    {#if spinnerPlacement === 'start'}
      <span class="spinner"></span>
    {/if}
    {loadingText}
    {#if spinnerPlacement === 'end'}
      <span class="spinner"></span>
    {/if}
  {:else if loading}
    <span class="absolute-center">
      <span class="spinner"></span>
    </span>
    <span style="visibility: hidden;">
      {#if children}
        {@render children()}
      {/if}
    </span>
  {:else if children}
    {@render children()}
  {/if}
</button>

<style>
  .button {
    /* Styles will be provided by styled-system/panda-css */
  }
  
  .spinner {
    /* Spinner styles will be provided by styled-system/panda-css */
  }
  
  .absolute-center {
    /* AbsoluteCenter styles will be provided by styled-system/panda-css */
  }
</style>
