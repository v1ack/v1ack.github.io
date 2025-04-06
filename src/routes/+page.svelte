<script lang="ts">
  import Card from "$lib/Card.svelte"
  import { projects } from "./projects"
</script>

<svelte:head>
  <title>vlack projects</title>
</svelte:head>

<h1 class="mb-6 text-center text-2xl">projects</h1>
<div
  class="grid grid-cols-1 justify-items-center gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
>
  {#each projects as project (project.id)}
    <Card {...project} />
  {/each}
</div>
