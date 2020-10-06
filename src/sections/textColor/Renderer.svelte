<script>
	import StyleguideSection from "../../components/StyleguideSection.svelte";
	import ClassName from "../../components/ClassName.svelte";

	export let classes;
	export let variants;
</script>

<style>
	.colors {
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

<StyleguideSection name="Text Colors" description="Only you can prevent text-yellow-200 on a bg-white background." variants={variants}>
	<div class="colors">
		{#each classes as c}
			<div class="color-wrapper">
				<p class={c.name}></p>
				<ClassName>.{c.name}</ClassName>
			</div>
		{/each}
	</div>
</StyleguideSection>
