# Park UI - Svelte Components

Svelte 5 components for Park UI, built with [Ark UI](https://ark-ui.com) and [Panda CSS](https://panda-css.com).

## Installation

```bash
npm install @park-ui/svelte
# or
pnpm add @park-ui/svelte
# or
bun add @park-ui/svelte
```

## Usage

### Button Component

The Button component supports Svelte 5 runes and provides a rich set of features including loading states and variants.

```svelte
<script>
  import { Button } from '@park-ui/svelte'
</script>

<Button variant="solid" size="md">
  Click me
</Button>
```

#### With Loading State

```svelte
<script>
  import { Button } from '@park-ui/svelte'
  
  let loading = $state(false)
  
  async function handleClick() {
    loading = true
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 2000))
    loading = false
  }
</script>

<Button {loading} loadingText="Loading..." onclick={handleClick}>
  Submit
</Button>
```

#### Variants

The Button component supports multiple variants:
- `solid` (default)
- `outline`
- `ghost`
- `link`
- `subtle`

```svelte
<Button variant="solid">Solid</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="subtle">Subtle</Button>
```

#### Sizes

Available sizes:
- `2xs`
- `xs`
- `sm`
- `md` (default)
- `lg`
- `xl`
- `2xl`

```svelte
<Button size="2xs">2X Small</Button>
<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
<Button size="2xl">2X Large</Button>
```

## Styling with Panda CSS

The Button component is designed to work with Panda CSS for styling. To generate the styled-system:

```bash
bun run prepare
```

This will generate the necessary CSS from the button recipe in the Park UI preset.

**Note:** The component includes fallback inline styles for development purposes. These provide basic styling to make the component functional without requiring styled-system generation first. In production, you should use the generated Panda CSS styles for proper design system integration.

## Development

### Setup

```bash
bun install
```

### Generate Styled System

```bash
bun run prepare
```

### Type Checking

```bash
bun run typecheck
```

### Linting

```bash
bun run lint
```

## Requirements

- Svelte 5.0 or higher
- @ark-ui/svelte 5.15.0 or higher
- Panda CSS 1.7.0 or higher

## Contributing

Contributions are welcome! Please read the [contributing guidelines](../../CONTRIBUTING.md) before submitting a pull request.

## License

Licensed under the [MIT license](../../LICENSE).
