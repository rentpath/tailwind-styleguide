<script>
	export let classes;
</script>

<style>
	.swatches {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
		gap: 24px 24px;
	}
</style>

<div class="swatches">
	{#each classes as c}
		<slot className={c}></slot>
	{/each}
</div>
