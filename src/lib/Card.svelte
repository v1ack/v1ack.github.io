<script lang="ts">
  import type { IProject } from "./types"

  const { name, image, description, links, color }: IProject = $props()
</script>

<div class="group transition-color relative w-72 cursor-pointer overflow-hidden rounded-xl">
  <figure class=" h-80 overflow-hidden" style="background-color: {color};">
    <img alt="" class="h-full w-full object-contain object-center" src={image} />
  </figure>
  <div class="absolute bottom-0 p-3">
    <h3 class="mx-auto rounded-lg bg-blue-500 px-3 py-1 text-lg text-white">
      {name}
    </h3>
  </div>
  <div
    class="absolute w-full transform
    p-2 transition-transform
    duration-500 ease-in-out group-hover:-translate-y-full"
  >
    <div class="rounded-lg bg-white p-4">
      <p class="text-2xl font-medium">{name}</p>
      <p>{description}</p>
      <div class="mt-1 flex justify-end">
        {#each links || [] as { link, title } (link)}
          <a href={link} class="link">{title}</a>
        {/each}
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  @reference "tailwindcss";
  .link {
    @apply float-right ml-2 rounded-md border border-blue-600 px-4 py-1 text-blue-600 transition-colors duration-300 ease-in-out hover:bg-blue-500 hover:text-white;
  }
</style>
