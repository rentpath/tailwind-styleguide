<script>
	export let meta;
</script>

<style>
	.swatches {
		display: flex;
		flex-wrap: wrap;
	}

	.swatch-wrapper {
		margin: 8px;
	}

	.swatch {
		border-radius: 24px;
		border-top-left-radius: 0;
		width: 128px;
		height: 42px;
		box-shadow: 2px 2px 3px rgba(51, 51, 51, 0.1);
	}

	.swatch-name {
		font-family: "Raleway", sans-serif;
		font-style: normal;
		font-size: 14px;
		font-weight: normal;
		color: #333;
	}
</style>

<div class="swatches">
	{#each meta.classNames as className}
		<div class="swatch-wrapper">
			<div class={`swatch ${className}`}></div>
			<em class="swatch-name">.{className}</em>
		</div>
	{/each}
</div>
