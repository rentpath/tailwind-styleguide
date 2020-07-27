<script>
	import Swatch from "./Swatch.svelte";

	export let swatches = [];

	export let squircle;
	export let circle;
	export let filled;
	export let fancy;
	export let stroked;
</script>

<style>
	.swatches {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
		gap: 24px 24px;
	}
</style>

<div class="swatches">
	{#each swatches as swatch}
		<Swatch {swatch} {squircle} {circle} {filled} {fancy} {stroked}></Swatch>
	{/each}
</div>
