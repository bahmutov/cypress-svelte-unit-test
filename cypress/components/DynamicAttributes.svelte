<!-- https://svelte.dev/examples#dynamic-attributes -->

<script>
	let src = "images/rick.gif";
	let name = "Rick Astley";
</script>

<!-- {src} is short for src={src} -->
<img {src} alt="{name} dancing">
