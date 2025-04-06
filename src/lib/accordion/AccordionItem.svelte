<script lang="ts">
  import { getContext, onMount } from "svelte"
  import { slide } from "svelte/transition"
  import { ctxName } from "$lib/accordion/types"
  import type { ICtx } from "$lib/accordion/types"

  export let title: string
  export let visible = false

  const ctx: ICtx = getContext(ctxName)
  let id: number

  onMount(() => {
    id = ctx.getId()

    return ctx.store.subscribe((openId) => (visible = openId === id))
  })

  function updateVisible() {
    ctx.store.update((lastId) => (lastId === id ? -1 : id))
  }
</script>

<li>
  <button
    on:click={updateVisible}
    class="text-left text-lg leading-relaxed font-medium hover:text-gray-500 focus:outline-none"
    >{title}</button
  >
  {#if visible}
    <div transition:slide class="pt-1 pb-2">
      <slot />
    </div>
  {/if}
</li>
