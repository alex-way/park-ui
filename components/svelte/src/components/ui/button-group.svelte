<script lang="ts">
import { button, group } from 'styled-system/recipes'
import type { ButtonVariantProps, GroupVariantProps } from 'styled-system/recipes'
import type { Snippet } from 'svelte'
import type { HTMLAttributes } from 'svelte/elements'
import { setButtonContext } from './button-context'
import { Group } from '@/components/ui'

type ButtonGroupProps = HTMLAttributes<HTMLDivElement> & ButtonVariantProps & GroupVariantProps & {
  children?: Snippet
}

const { children, class: className, ...rest }: ButtonGroupProps = $props()
const [variantProps, otherProps] = button.splitVariantProps(rest)

setButtonContext(variantProps)

const groupClass = $derived(group())
const mergedClass = $derived([groupClass, className].filter(Boolean).join(' '))
</script>

<Group class={mergedClass} {...otherProps}>
  {#if children}
    {@render children()}
  {/if}
</Group>
