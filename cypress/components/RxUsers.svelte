<!--
  Svelte 3.1.0 + RxJs example
  https://svelte.dev/repl?version=3.1.0&gist=51144b5ef95b53d14aede232d58aa14b
  https://twitter.com/sveltejs/status/1121762491917328384
-->
<script>
	import { ajax } from "rxjs/ajax";
	import { pluck, startWith } from "rxjs/operators";
	const users$ = ajax(`https://api.github.com/users?per_page=5`).pipe(
	  pluck("response"),
	  startWith([])
	);
</script>
{#each $users$ as user}
<div data-cy="user">
	{user.login}
</div>
{/each}
