<script lang="ts">
  import { goto } from "$app/navigation"
  import { onMount } from "svelte"

  const newLink = "https://v1ack.github.io/watchfaceEditor/imagecreator"
  onMount(() => goto(newLink))
</script>

<a href={newLink}>Redirecting...</a>
