<script>
	import StyleguideSection from "../../components/StyleguideSection.svelte";
	import ClassName from "../../components/ClassName.svelte";

	export let meta;
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

<StyleguideSection name="Font Size" description="Controls how accessible your site is to the elderly." variants={meta.variants}>
	{#each meta.classNames as className}
		<div class="sample">
			<ClassName>.{className}</ClassName>
			<p class={className}>The quick brown fox etc.</p>
		</div>
	{/each}
</StyleguideSection>
