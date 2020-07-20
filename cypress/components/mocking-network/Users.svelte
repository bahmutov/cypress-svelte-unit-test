<script>
  import { onMount } from "svelte";

  let users = [];

  onMount(async () => {
    const res = await fetch('https://jsonplaceholder.cypress.io/users?_limit=3');
    users = await res.json();
  });
</script>

<div>
    <h1>Users List</h1>
    {#each users as user}
      <ul>
        <li class="user">
          <span>{user.id} - {user.name}</span>
        </li>
    </ul>
    {:else}
      <!-- this block renders when users.length === 0 -->
      <p class="loading">loading...</p>
    {/each}
</div>
