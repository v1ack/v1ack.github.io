<script context="module">
  export const load = async ({ page }) => ({
    props: {
      key: page.path,
    },
  })
</script>

<script lang="ts">
  import "../app.css"
  import { page } from "$app/stores"
  import { fly } from "svelte/transition"

  export let key
</script>

<main class="max-w-screen-xl mx-auto">
  <div class="bg-white p-6 rounded-b-2xl mb-6 ">
    <img
      class="w-32 h-32 rounded-full ring-blue-300 ring-4 mx-auto bg-white"
      src="/vlack_logo.png"
    />
    <div class="flex justify-center items-center">
      <div class="flex-grow flex justify-end w-60">
        <a class="header-link" class:active={$page.path === "/"} href="/">projects</a>
      </div>
      <h1 class="text-3xl mx-4 my-2">vlack</h1>
      <div class="flex-grow flex w-60">
        <a class="header-link" class:active={$page.path === "/about"} href="/about">about me</a>
      </div>
    </div>
  </div>
  <div class="relative">
    {#key key}
      <div
        class="absolute w-full top-0 bg-white p-6 rounded-2xl mb-6"
        in:fly={{ x: 1000, duration: 500, delay: 500 }}
        out:fly={{ x: -1000, duration: 500 }}
      >
        <slot />
      </div>
    {/key}
  </div>
</main>

<style global lang="scss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  .header-link {
    @apply text-blue-900 cursor-pointer rounded-md px-2 py-1 hover:bg-blue-100;

    &.active {
      @apply bg-blue-200 hover:bg-blue-100 hover:text-blue-900;
    }
  }
</style>
