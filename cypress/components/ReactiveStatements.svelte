<!-- https://svelte.dev/examples#reactive-statements -->
<script>
	let count = 0;

	$: if (count >= 10) {
	  console.log(`count is dangerously high!`);
	  count = 9;
	}

	function handleClick() {
	  count += 1;
	}
</script>

<button on:click={handleClick}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
