<script lang="ts">
  import "../app.css"
  import { page } from "$app/state"
  import { fly } from "svelte/transition"
  import { onNavigate } from "$app/navigation"
  import type { LayoutProps } from "./$types"

  const { children }: LayoutProps = $props()
  let key = $state("")
  onNavigate((nav) => {
    key = nav.to?.url.pathname || ""
  })
</script>

<main class="mx-auto max-w-screen-xl">
  <div class="glass mb-6 rounded-b-2xl p-6">
    <img
      class="mx-auto h-32 w-32 rounded-full bg-white ring-4 ring-blue-300"
      src="/vlack_logo.png"
      alt="logo"
    />
    <div class="flex items-center justify-center">
      <div class="flex w-60 flex-grow justify-end">
        <a class="header-link" class:active={page.url.pathname === "/"} href="/">projects</a>
      </div>
      <h1 class="mx-4 my-2 text-3xl">vlack</h1>
      <div class="flex w-60 flex-grow">
        <a class="header-link" class:active={page.url.pathname === "/about"} href="/about"
          >about me</a
        >
      </div>
    </div>
  </div>
  <div class="relative">
    {#key key}
      <div
        class="glass absolute top-0 mb-6 w-full rounded-2xl bg-white p-6"
        in:fly={{ x: 1000, duration: 500, delay: 500 }}
        out:fly={{ x: -1000, duration: 500 }}
      >
        {@render children()}
      </div>
    {/key}
  </div>
</main>

<style global lang="postcss">
  @reference "tailwindcss";
  .header-link {
    @apply cursor-pointer rounded-md px-2 py-1 text-blue-900 hover:bg-blue-100;

    &.active {
      @apply bg-blue-200 hover:bg-blue-100 hover:text-blue-900;
    }
  }
</style>
