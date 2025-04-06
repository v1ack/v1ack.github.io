<script lang="ts">
  import type { IProject } from "./types"

  const { name, image, description, links, color }: IProject = $props()
</script>

<div class="rounded-xl overflow-hidden cursor-pointer group w-72 relative transition-color">
  <figure class=" h-80 overflow-hidden" style="background-color: {color};">
    <img alt="" class="object-contain object-center w-full h-full" src={image} />
  </figure>
  <div class="absolute p-3 bottom-0">
    <h3 class="text-lg bg-blue-500 rounded-lg px-3 py-1 text-white mx-auto">
      {name}
    </h3>
  </div>
  <div
    class="absolute p-2 w-full
    transform group-hover:-translate-y-full
    transition-transform duration-500 ease-in-out"
  >
    <div class="p-4 bg-white rounded-lg">
      <p class="text-2xl font-medium">{name}</p>
      <p>{description}</p>
      <div class="flex justify-end mt-1">
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
        @apply float-right text-blue-600 border border-blue-600 rounded-md px-4 py-1 ml-2
        transition-colors duration-300 ease-in-out
        hover:bg-blue-500 hover:text-white;
    }
</style>
