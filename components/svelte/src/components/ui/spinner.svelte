<script>
  import { spinner } from 'styled-system/recipes'

  let props = $props()
  const spinnerClass = spinner()
</script>

<span class={spinnerClass} {...props}></span>
