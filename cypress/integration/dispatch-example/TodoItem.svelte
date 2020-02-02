<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function remove() {
    console.log("remove");
    dispatch("remove", { id });
  }

  function toggleStatus() {
    console.log("toggleStatus");

    let newStatus = !complete;
    console.log("new status", newStatus);
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
    <button on:click={toggleStatus}>✔️</button>
  {:else}
    <span>{text}</span>
    <button data-cy="make-incomplete" on:click={toggleStatus}>❌</button>
  {/if}

  <button data-cy="remove" on:click={remove}>🗑</button>

</li>
