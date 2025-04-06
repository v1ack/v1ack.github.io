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

<main class="max-w-screen-xl mx-auto">
  <div class="bg-white p-6 rounded-b-2xl mb-6 ">
    <img
      class="w-32 h-32 rounded-full ring-blue-300 ring-4 mx-auto bg-white"
      src="/vlack_logo.png"
      alt="logo"
    />
    <div class="flex justify-center items-center">
      <div class="flex-grow flex justify-end w-60">
        <a class="header-link" class:active={page.url.pathname === "/"} href="/">projects</a>
      </div>
      <h1 class="text-3xl mx-4 my-2">vlack</h1>
      <div class="flex-grow flex w-60">
        <a class="header-link" class:active={page.url.pathname === "/about"} href="/about"
        >about me</a
        >
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
        {@render children()}
      </div>
    {/key}
  </div>
</main>

<style global lang="postcss">
    @reference "tailwindcss";
    .header-link {
        @apply text-blue-900 cursor-pointer rounded-md px-2 py-1 hover:bg-blue-100;

        &.active {
            @apply bg-blue-200 hover:bg-blue-100 hover:text-blue-900;
        }
    }
</style>
