<script>

import { absoluteCenter } from 'styled-system/recipes'

const acProps = $props()
const acClass = absoluteCenter()
</script>

<div class={acClass} {...acProps}>
  {@render acProps.children()}
</div>
