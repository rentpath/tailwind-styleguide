<script>
	import StyleguideSection from "../../components/StyleguideSection.svelte";

	export let meta;
</script>

<style>
	.colors {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
		gap: 24px 24px;
	}

	p {
		font-size: 1.2rem;
	}

	em {
		font-style: normal;
		font-weight: normal;
		font-weight: 600;
		font-size: 0.8rem;
		color: #999;
	}
</style>

<StyleguideSection name="Text Colors" description="Utilities for controlling the text color of an element." variants={meta.variants}>
	<div class="colors">
		{#each meta.classNames as className}
			<div class="color-wrapper">
				<p class={className}>The quick brown fox jumped over the lazy dog.</p>
				<em>.{className}</em>
			</div>
		{/each}
	</div>
</StyleguideSection>
