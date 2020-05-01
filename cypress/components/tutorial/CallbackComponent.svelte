<script>
  import { onMount } from "svelte";
  import { fetch as fetchPrice, price } from "./stores/price.js";
  onMount(fetchPrice);
</script>

<p>The price is: ${$price}</p>
