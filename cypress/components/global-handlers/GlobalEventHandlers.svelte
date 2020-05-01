<script>
  export let docClicks = 0;
  export let winClicks = 0;
  document.addEventListener("click", e => docClicks++);
  window.addEventListener("click", e => winClicks++);
</script>

<div>Doc click: {docClicks}</div>
<div>Win click: {winClicks}</div>
