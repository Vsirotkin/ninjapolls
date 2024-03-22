<script>
  // import { onMount, onDestroy } from 'svelte';
  import PollStore from '../stores/PollStore';
  import PollDetails from "../components/PollDetails.svelte";

</script>

<div class="poll-list">
  {#each $PollStore as poll (poll.id)}
    <div>
      <PollDetails {poll} />
    </div>
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
</style>
