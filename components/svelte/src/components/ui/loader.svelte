<script>
  import Spinner from './spinner.svelte'
  import AbsoluteCenter from './absolute-center.svelte'

  let {
    spinner,
    spinnerPlacement = 'start',
    text,
    visible = true,
    children,
  } = $props()
</script>

{#if visible}
  {#if text}
    <span>
      {#if spinnerPlacement === 'start'}
        {#if spinner}
          {@render spinner()}
        {:else}
          <Spinner />
        {/if}
      {/if}
      {#if typeof text === 'string'}
        <span>{text}</span>
      {:else}
        {@render text()}
      {/if}
      {#if spinnerPlacement === 'end'}
        {#if spinner}
          {@render spinner()}
        {:else}
          <Spinner />
        {/if}
      {/if}
    </span>
  {:else if spinner}
    <span>
      <AbsoluteCenter>
        {@render spinner()}
      </AbsoluteCenter>
      <span style="visibility: hidden; display: contents;">
        {#if children}
          {@render children()}
        {/if}
      </span>
    </span>
  {:else if children}
    {@render children()}
  {/if}
{:else if children}
  {@render children()}
{/if}
