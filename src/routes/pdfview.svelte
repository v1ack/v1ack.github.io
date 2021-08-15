<script context="module" lang="ts">
    export const prerender = true
</script>

<script lang="ts">
  import { goto } from "$app/navigation"
  import { onMount } from "svelte"

  const newLink = "/projects/docsView"
  onMount(() => goto(newLink))
</script>

<a href={newLink}>Redirecting...</a>
