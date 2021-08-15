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
    class="text-lg hover:text-gray-500 font-medium leading-relaxed focus:outline-none"
    >{title}</button
  >
  {#if visible}
    <div transition:slide class="pb-2 pt-1">
      <slot />
    </div>
  {/if}
</li>
