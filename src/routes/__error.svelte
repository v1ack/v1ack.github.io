<script context="module" lang="ts">
  // import type { LoadInput, LoadOutput } from "@sveltejs/kit"

  export function load({ error, status }) {
    return {
      props: {
        title: `${status}: ${error.message}`,
      },
    }
  }
</script>

<script>
  export let title
</script>

<h1>{title}</h1>
