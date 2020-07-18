<script>
	import ClassName from "../../components/ClassName.svelte";
	import StyleguideSection from "../../components/StyleguideSection.svelte";

	export let meta;
</script>

<style>
	.swatches {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
		gap: 24px 24px;
	}

	.swatch-wrapper {
		display: flex;
		flex-direction: column;
		place-items: center;
	}

	.swatch {
		border-radius: 100%;
		width: 96px;
		height: 96px;
		box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
		margin-bottom: 8px;
	}
</style>

<StyleguideSection name="Background Colors" description="Utilities for controlling an element's background color." variants={meta.variants}>
	<div class="swatches">
		{#each meta.classNames as className}
			<div class="swatch-wrapper">
				<div class={`swatch ${className}`}></div>
				<ClassName>.{className}</ClassName>
			</div>
		{/each}
	</div>
</StyleguideSection>
