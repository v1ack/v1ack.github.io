<script lang="ts">
  import { writable } from "svelte/store"
  import { setContext } from "svelte"
  import { ctxName } from "$lib/accordion/types"
  import type { ICtx } from "$lib/accordion/types"

  function* idGenerator() {
    for (let i = 0; ; i++) yield i
  }

  const generator = idGenerator()

  const ctx: ICtx = { store: writable(-1), getId: () => generator.next() as number }
  setContext(ctxName, ctx)
</script>

<ul>
  <slot />
</ul>
