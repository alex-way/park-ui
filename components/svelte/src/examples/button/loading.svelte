<script lang="ts">
  import { Button } from '@/components/ui'
  
  let loading = $state(false)
  
  async function handleClick() {
    loading = true
    await new Promise(resolve => setTimeout(resolve, 2000))
    loading = false
  }
</script>

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
  <Button {loading} onclick={handleClick}>
    {loading ? 'Loading...' : 'Click to Load'}
  </Button>
  <Button loading={true} loadingText="Processing...">
    Submit
  </Button>
</div>
