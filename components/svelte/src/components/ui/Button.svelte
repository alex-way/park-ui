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
     * The spinner to show while loading.
     */
    spinner?: Snippet
    /**
     * The placement of the spinner
     * @default "start"
     */
    spinnerPlacement?: 'start' | 'end'
    /**
     * Button variant
     * @default "solid"
     */
    variant?: 'solid' | 'outline' | 'ghost' | 'link' | 'subtle'
    /**
     * Button size
     * @default "md"
     */
    size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
    /**
     * Children content
     */
    children?: Snippet
  }
  
  let {
    loading = false,
    loadingText,
    spinner,
    spinnerPlacement = 'start',
    variant = 'solid',
    size = 'md',
    type = 'button',
    disabled,
    children,
    class: className,
    ...rest
  }: ButtonProps = $props()
  
  const isDisabled = $derived(loading || disabled)
  const buttonClass = $derived(`button ${className || ''}`.trim())
</script>

<button
  type={type}
  disabled={isDisabled}
  data-loading={loading ? '' : undefined}
  data-variant={variant}
  data-size={size}
  class={buttonClass}
  {...rest}
>
  {#if loading && loadingText}
    <span class="button-content">
      {#if spinnerPlacement === 'start'}
        {#if spinner}
          {@render spinner()}
        {:else}
          <span class="spinner" aria-label="Loading"></span>
        {/if}
      {/if}
      <span>{loadingText}</span>
      {#if spinnerPlacement === 'end'}
        {#if spinner}
          {@render spinner()}
        {:else}
          <span class="spinner" aria-label="Loading"></span>
        {/if}
      {/if}
    </span>
  {:else if loading}
    <span class="button-loading">
      <span class="absolute-center">
        {#if spinner}
          {@render spinner()}
        {:else}
          <span class="spinner" aria-label="Loading"></span>
        {/if}
      </span>
      <span class="button-content-hidden">
        {#if children}
          {@render children()}
        {/if}
      </span>
    </span>
  {:else if children}
    {@render children()}
  {/if}
</button>

<style>
  /* 
   * IMPORTANT: These are temporary fallback styles for development and testing.
   * 
   * In production, these styles should be replaced by Panda CSS generated styles.
   * Run `bun run prepare` to generate the styled-system from panda.config.ts,
   * which will provide the proper design system tokens and variants.
   * 
   * The current inline styles are basic approximations to make the component
   * functional without requiring styled-system generation first.
   */
  
  .button {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 150ms ease;
    border: 1px solid transparent;
    border-radius: 0.375rem;
  }
  
  .button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  
  .button[data-loading] {
    cursor: wait;
  }
  
  /* Size variants */
  .button[data-size="2xs"] {
    height: 1.25rem;
    padding: 0 0.375rem;
    font-size: 0.625rem;
  }
  
  .button[data-size="xs"] {
    height: 1.5rem;
    padding: 0 0.5rem;
    font-size: 0.75rem;
  }
  
  .button[data-size="sm"] {
    height: 2rem;
    padding: 0 0.75rem;
    font-size: 0.875rem;
  }
  
  .button[data-size="md"] {
    height: 2.5rem;
    padding: 0 1rem;
    font-size: 1rem;
  }
  
  .button[data-size="lg"] {
    height: 3rem;
    padding: 0 1.25rem;
    font-size: 1.125rem;
  }
  
  .button[data-size="xl"] {
    height: 3.5rem;
    padding: 0 1.5rem;
    font-size: 1.25rem;
  }
  
  .button[data-size="2xl"] {
    height: 4rem;
    padding: 0 2rem;
    font-size: 1.5rem;
  }
  
  /* Visual variants - basic fallback implementation */
  .button[data-variant="solid"] {
    background: #3b82f6;
    color: white;
  }
  
  .button[data-variant="solid"]:hover:not(:disabled) {
    background: #2563eb;
  }
  
  .button[data-variant="outline"] {
    background: transparent;
    border-color: #3b82f6;
    color: #3b82f6;
  }
  
  .button[data-variant="outline"]:hover:not(:disabled) {
    background: rgba(59, 130, 246, 0.1);
  }
  
  .button[data-variant="ghost"] {
    background: transparent;
    color: #3b82f6;
  }
  
  .button[data-variant="ghost"]:hover:not(:disabled) {
    background: rgba(59, 130, 246, 0.1);
  }
  
  .button[data-variant="link"] {
    background: transparent;
    color: #3b82f6;
    text-decoration: underline;
    border: none;
  }
  
  .button[data-variant="link"]:hover:not(:disabled) {
    color: #2563eb;
  }
  
  .button[data-variant="subtle"] {
    background: rgba(59, 130, 246, 0.1);
    color: #3b82f6;
  }
  
  .button[data-variant="subtle"]:hover:not(:disabled) {
    background: rgba(59, 130, 246, 0.2);
  }
  
  .button-content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .button-loading {
    position: relative;
    display: contents;
  }
  
  .absolute-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .button-content-hidden {
    visibility: hidden;
    display: contents;
  }
  
  .spinner {
    display: inline-block;
    width: 1em;
    height: 1em;
    border: 2px solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    animation: spin 0.75s linear infinite;
  }
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
