<script context="module" lang="ts">
  export const prerender = true
</script>

<script lang="ts">
  import Card from "$lib/Card.svelte"
  import { projects } from "./_projects"
</script>

<svelte:head>
  <title>vlack projects</title>
</svelte:head>

<h1 class="text-center text-2xl mb-6">projects</h1>
<div
  class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-2 justify-items-center"
>
  {#each projects as project}
    <Card {...project} />
  {/each}
</div>
