<script>
	import StyleguideSection from "../../components/StyleguideSection.svelte";
	import ClassName from "../../components/ClassName.svelte";

	export let classes;
	export let variants;
</script>

<!--
	TODO: This is duplicated from the text color grid. This could maybe be extracted to some kind
	of "Text Grid" component.
-->

<style>
	.weights {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
		gap: 24px 24px;
	}

	@media (max-width: 768px) {
		.colors {
			grid-template-columns: 1fr;
		}
	}

	p {
		font-size: 1.2rem;
		/* I stole this from the Tailwind docs - I have no idea what half these fonts are. */
		font-family: "Inter var", "system-ui", -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important;
	}

	p::after {
		content: "The quick brown fox jumped over the lazy dog.";
	}

	@media (max-width: 500px) {
		p::after {
			content: "The quick brown fox etc."
		}
	}
</style>

<StyleguideSection name="Font Weight" description="Please refer to the chonk chart to locate your preferred text chonkiness." variants={variants}>
	<div class="weights">
		{#each classes as c}
			<div class="weight-wrapper">
				<p class={c.name}></p>
				<ClassName>.{c.name}</ClassName>
			</div>
		{/each}
	</div>
</StyleguideSection>
