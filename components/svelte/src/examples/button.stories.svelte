<script module lang="ts">
import { defineMeta } from '@storybook/addon-svelte-csf'
import { button } from 'styled-system/recipes'
import { Button, ButtonGroup } from '@/components/ui'
import { CircleDot, ChevronDown, Phone, Send } from '@lucide/svelte'

const { Story } = defineMeta({
  title: 'Buttons / Button',
  component: Button,
  tags: ['autodocs'],
})
</script>

<script lang="ts">
const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const
let buttonRef: HTMLButtonElement | null = null
</script>

<Story name="Basic">
  <Button>Park UI</Button>
</Story>

<Story name="As Link">
  <a class={button()} href="https://park-ui.com" target="_blank" rel="noopener">
    Park UI
  </a>
</Story>

<Story name="Attached">
  <ButtonGroup attached variant="outline">
    <Button>Button</Button>
    <Button aria-label="Open menu">
      <ChevronDown />
    </Button>
  </ButtonGroup>
</Story>

<Story name="Colors">
  <div class="wrap">
    <Button colorPalette="blue">Button</Button>
    <Button colorPalette="green">Button</Button>
    <Button colorPalette="amber">Button</Button>
    <Button colorPalette="red">Button</Button>
  </div>
</Story>

<Story name="Disabled">
  <Button disabled>Park UI</Button>
</Story>

<Story name="Group">
  <ButtonGroup variant="outline">
    <Button>Save</Button>
    <Button>Cancel</Button>
  </ButtonGroup>
</Story>

<Story name="Icon">
  <div class="wrap">
    <Button>
      <Send />
      <span>Send</span>
    </Button>
    <Button variant="outline">
      <span>Call us</span>
      <Phone />
    </Button>
  </div>
</Story>

<Story name="Loading">
  <div class="wrap">
    <Button loading>Click me</Button>
    <Button loading loadingText="Saving...">
      Click me
    </Button>
  </div>
</Story>

<Story name="Ref">
  <div class="stack">
    <button class={button()} bind:this={buttonRef} type="button">
      Click me
    </button>
    <span class="caption">
      {buttonRef ? 'Button ref attached' : 'Waiting for ref...'}
    </span>
  </div>
</Story>

<Story name="Sizes">
  <div class="wrap">
    {#each sizes as size}
      <Button size={size}>
        <span>Button</span>
        <CircleDot />
      </Button>
    {/each}
  </div>
</Story>

<Story name="Variants">
  <div class="wrap">
    <Button variant="solid">Solid</Button>
    <Button variant="surface">Surface</Button>
    <Button variant="subtle">Subtle</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="plain">Plain</Button>
  </div>
</Story>

<style>
  .wrap {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .stack {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }

  .caption {
    color: #4b5563;
    font-size: 0.9rem;
  }
</style>
