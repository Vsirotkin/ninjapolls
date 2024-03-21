<script>
  // import { onMount, onDestroy } from 'svelte';
  import PollStore from '../stores/PollStore.js';
  import PollDetails from "./PollDetails.svelte";

  // export let polls = [];

  // get data from PollStore and re-render it in poll-list
  // const unsub = PollStore.subscribe(data => {
  //   polls = data;
  // });
</script>

<!-- onMount(() => {
  console.log('components mounted');
});

on Destroy(() => {
  console.log('component destroyed');
  unsub();
}); -->

<div class="poll-list">
  {#each $PollStore as poll (poll.id)}
    <div>
      <PollDetails {poll} on:vote />
    </div>
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
</style>
