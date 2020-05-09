<script>
  import Inner from './Inner.svelte'
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  function remove() {
    dispatch("remove", { id });
  }
  function toggleStatus() {
    let newStatus = !complete;
    dispatch("toggle", {
      id,
      newStatus
    });
  }

  export let id; // document ID
  export let text;
  export let complete;
</script>

<style>
  .is-complete {
    text-decoration: line-through;
    color: green;
  }
</style>

<li>

  {#if complete}
    <span class="is-complete">{text}</span>
    <button data-cy="toggle" on:click={toggleStatus}>✔️</button>
  {:else}
    <span>{text}</span>
    <button data-cy="toggle" on:click={toggleStatus}>❌</button>
  {/if}

  <button data-cy="remove" on:click={remove}>🗑</button>

  <!-- forward messages from the inner component -->
  <Inner on:inner-message />
</li>
