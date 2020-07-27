<script>
	import ClassName from "../ClassName.svelte";
	
	export let swatch;

	export let squircle = false;
	export let circle = false;
	export let filled = false;
	export let fancy = false;
	export let stroked = false;
</script>

<style>
	.swatch-wrapper {
		display: flex;
		flex-direction: column;
		place-items: center;
	}

	.swatch {
		width: 96px;
		height: 96px;
		margin-bottom: 8px;
	}

	.squircle {
		border-radius: 8px;
	}

	.circle {
		border-radius: 100%;
	}

	.filled {
		background-color: var(--subtle-color);
	}

	.fancy {
		box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
	}

	.stroked {
		border: 1px solid var(--less-subtle-color);
	}
</style>

<div class="swatch-wrapper">
	<div class={`swatch ${swatch}`} class:squircle class:circle class:filled class:fancy class:stroked></div>
	<ClassName>.{swatch}</ClassName>
</div>
