<!-- Example copied from
- https://bl.ocks.org/curran/71dfa9cf182473fd2cb2f2d027f3828e
- https://twitter.com/currankelleher/status/1120794510508740609 -->

<style>
  h1 {
    color: purple;
  }
</style>

<script>
  // don't forget to pass "width" and "height" as props
  export let width;
  export let height;
  export let n = 50;

  let numbers = [];

  const f = (x, t) => Math.sin(x * t + t) * 200;

  const setNumbers = () => {
    for (let i = 0; i < n; i++) {
      const x = i / n;
      const t = Date.now() / 1000;
      numbers[i] = f(x, t);
    }
  };

  const animate = () => {
    setNumbers();
    requestAnimationFrame(animate);
  };
  animate();
</script>

<svg width={width} height={height}>
  {#each numbers as y, i}
    <circle
      cx={i / n * width}
      cy={y + height / 2}
      r="10"
    />
    {#if i < n - 1}
      <line
        x1={i / n * width}
        y1={y + height / 2}
        x2={(i + 1) / n * width}
        y2={numbers[i + 1] + height / 2}
      />
    {/if}
  {/each}
</svg>
