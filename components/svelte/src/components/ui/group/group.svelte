<script lang="ts">
import { type GroupVariantProps, group } from 'styled-system/recipes'
import type { Snippet } from 'svelte'
import type { HTMLAttributes } from 'svelte/elements'

type GroupProps = HTMLAttributes<HTMLDivElement> & GroupVariantProps & { children?: Snippet }

const { children, class: className, ...rest }: GroupProps = $props()
const [variantProps, otherProps] = group.splitVariantProps(rest)
</script>

<div class={[group(variantProps), className]} {...otherProps}>
  {#if children}
    {@render children()}
  {/if}
</div>
