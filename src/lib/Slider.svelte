<script lang="ts">
  export let items: string[]
  let display_items = items.map((image, index) => ({ id: index, image, order: 0 }))
  const animationTime = 300
  const itemsToDisplay = 4
  let outerBlockSize = 0
  let itemWidth: number
  let transform: number
  let transition = true
  let cur = 0

  $: itemWidth = outerBlockSize / itemsToDisplay
  $: transform = -itemWidth

  async function left() {
    transition = true
    transform = 0
    await new Promise((resolve) => setTimeout(resolve, animationTime))
    cur -= 1
    if (cur < 0) {
      cur = display_items.length - 1
    }
    display_items[cur].order -= 1
    transition = false
    transform = -itemWidth
  }

  async function right() {
    transition = true
    transform = -itemWidth * 2
    await new Promise((resolve) => setTimeout(resolve, animationTime))
    transition = false
    display_items[cur].order += 1
    cur += 1
    if (cur === display_items.length) {
      cur = 0
    }
    transform = -itemWidth
  }
</script>

<main style="--animation-time: {animationTime}ms;">
  <div bind:offsetWidth={outerBlockSize} class="outer">
    <ul class:transition style="transform: translateX({transform}px)">
      {#each display_items as item}
        <li style="order: {item.order}; width: {100 / itemsToDisplay}%">
          <img src={item.image} alt="item" />
        </li>
      {/each}
    </ul>
  </div>
  <button class="left" on:click={left}>👈</button>
  <button class="right" on:click={right}>👉</button>
</main>

<style>
  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .transition {
    transition: var(--animation-time);
  }

  li {
    border: 2px inset black;
    flex: none;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
  }

  .outer {
    max-width: 100%;
    overflow: hidden;
  }

  main {
    width: 80%;
    margin: 40px auto;
    position: relative;
  }

  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  button.left {
    left: 8px;
  }

  button.right {
    right: 8px;
  }
</style>
