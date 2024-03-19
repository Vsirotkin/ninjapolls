<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let items;
  export let activeItem;

  function handleKeyDown(event, item) {
    if (event.key === "Enter" || event.key === " ") {
      dispatch("tabChange", item);
    }
  }
</script>

<div class="tabs">
  <ul>
    {#each items as item}
      <li on:click={() => dispatch("tabChange", item)}>
        <div
          class:active={item === activeItem}
          tabindex="0"
          on:keydown={(e) => handleKeyDown(e, item)}
        >
          {item}
        </div>
      </li>
    {/each}
  </ul>
</div>

<style>
  .tabs {
    margin-bottom: 40px;
  }
  ul {
    display: flex;
    justify-content: center;
    padding: 0;
    list-style-type: none;
  }
  li {
    margin: 0 16px;
    font-size: 18px;
    color: #555;
    cursor: pointer;
  }
  .active {
    color: #d91b42;
    border-bottom: 2px solid #d91b42;
    padding-bottom: 8px;
  }
</style>
