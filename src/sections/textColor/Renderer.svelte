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

	p::after {
		content: "The quick brown fox jumped over the lazy dog.";
	}

	em {
		font-style: normal;
		font-weight: normal;
		font-weight: 600;
		font-size: 0.8rem;
		color: #999;
	}

	@media (max-width: 500px) {
		p::after {
			content: "The quick brown fox etc."
		}
	}
</style>

<StyleguideSection name="Text Colors" description="Only you can prevent text-yellow-200 on a bg-white background." variants={meta.variants}>
	<div class="colors">
		{#each meta.classNames as className}
			<div class="color-wrapper">
				<p class={className}></p>
				<em>.{className}</em>
			</div>
		{/each}
	</div>
</StyleguideSection>
