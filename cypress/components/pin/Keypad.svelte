<script>
	import { createEventDispatcher } from "svelte";

	export let value = "";

	const dispatch = createEventDispatcher();

	const select = num => () => (value += num);
	const clear = () => (value = "");
	const submit = () => dispatch("submit");
</script>

<style>
	.keypad {
	  display: grid;
	  grid-template-columns: repeat(3, 5em);
	  grid-template-rows: repeat(4, 3em);
	  grid-gap: 0.5em;
	}

	button {
	  margin: 0;
	}
</style>

<div class="keypad">
	<button data-cy=1 on:click={select(1)}>1</button>
	<button data-cy=2 on:click={select(2)}>2</button>
	<button data-cy=3 on:click={select(3)}>3</button>
	<button data-cy=4 on:click={select(4)}>4</button>
	<button data-cy=5 on:click={select(5)}>5</button>
	<button data-cy=6 on:click={select(6)}>6</button>
	<button data-cy=7 on:click={select(7)}>7</button>
	<button data-cy=8 on:click={select(8)}>8</button>
	<button data-cy=9 on:click={select(9)}>9</button>

	<button data-cy=clear disabled={!value} on:click={clear}>clear</button>
	<button data-cy=0 on:click={select(0)}>0</button>
	<button data-cy=submit disabled={!value} on:click={submit}>submit</button>
</div>
