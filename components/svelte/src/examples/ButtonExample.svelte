<script lang="ts">
  import { Button } from '../components/ui'
  
  let loading = $state(false)
  
  async function handleClick() {
    loading = true
    await new Promise(resolve => setTimeout(resolve, 2000))
    loading = false
  }
</script>

<div style="padding: 2rem; display: flex; flex-direction: column; gap: 1rem;">
  <h1>Button Examples</h1>
  
  <section>
    <h2>Basic Button</h2>
    <Button>Click me</Button>
  </section>
  
  <section>
    <h2>Variants</h2>
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
      <Button variant="solid">Solid</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="subtle">Subtle</Button>
    </div>
  </section>
  
  <section>
    <h2>Sizes</h2>
    <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
      <Button size="2xs">2X Small</Button>
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
      <Button size="2xl">2X Large</Button>
    </div>
  </section>
  
  <section>
    <h2>Loading State</h2>
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
      <Button {loading} onclick={handleClick}>
        {loading ? 'Loading...' : 'Click to Load'}
      </Button>
      <Button loading={true} loadingText="Processing...">
        Submit
      </Button>
    </div>
  </section>
  
  <section>
    <h2>Disabled State</h2>
    <Button disabled>Disabled Button</Button>
  </section>
</div>
