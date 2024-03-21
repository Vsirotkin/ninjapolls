<script>
  import PollStore from '../stores/PollStore.js';
  import PollDetails from "./PollDetails.svelte";

  export let polls = [];

  // get data from PollStore and re-render it in poll-list
  PollStore.subscribe(data => {
    polls = data;
  });
</script>

<div class="poll-list">
  {#each polls as poll (poll.id)}
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
