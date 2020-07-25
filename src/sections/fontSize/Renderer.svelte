<script>
	import StyleguideSection from "../../components/StyleguideSection.svelte";
	import ClassName from "../../components/ClassName.svelte";

	export let classes;
	export let variants;
</script>

<style>
	.sample {
		border-bottom: 1px solid var(--subtle-color);
		margin-bottom: 8px;
		padding-bottom: 8px;
	}

	.sample:last-child {
		border-bottom: none;
		padding-bottom: 0;
		margin-bottom: 0;
	}
</style>

<StyleguideSection name="Font Size" description="Controls how accessible your site is to the elderly." variants={variants}>
	{#each classes as c}
		<div class="sample">
			<ClassName>.{c.name}</ClassName>
			<p class={c.name}>The quick brown fox etc.</p>
		</div>
	{/each}
</StyleguideSection>
