<script lang="ts">
  export let id: string
  export let name: string
  export let image: string
  export let description = ""
  export let link: string
  export let externalLink: string
  export let color = "white"
</script>

<div
  class="border border-blue-500 rounded-xl overflow-hidden cursor-pointer group w-72 relative transition-color"
>
  <figure class=" h-80 overflow-hidden" style="background-color: {color};">
    <img alt="" class="object-contain object-center w-full h-full" src={image} />
  </figure>
  <div class="absolute p-3 bottom-0">
    <h3 class="text-lg bg-blue-400 rounded-lg px-3 py-1 text-white mx-auto ring ring-white">
      {name}
    </h3>
  </div>
  <div
    class="absolute p-4 w-full bg-white
    rounded-t-lg
    transform group-hover:-translate-y-full
    transition-transform duration-500 ease-in-out"
  >
    <p class="text-2xl font-medium">{name}</p>
    <p>{description}</p>
    {#if link}
      <a href="/projects/{id}" class="link">More </a>
    {/if}
    {#if externalLink}
      <a rel="external" href={externalLink} class="link">Open </a>
    {/if}
  </div>
</div>

<style lang="scss">
  .link {
    @apply float-right text-blue-600 border border-blue-600 rounded-md px-4 py-1 ml-2 mt-2
    transition-colors duration-300 ease-in-out
    hover:bg-blue-500 hover:text-white;
  }
</style>
