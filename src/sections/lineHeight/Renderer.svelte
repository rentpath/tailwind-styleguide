<script>
	import StyleguideSection from "../../components/StyleguideSection.svelte";
	import ClassName from "../../components/ClassName.svelte";

	export let classes;
	export let variants;
</script>

<style>
	.sample {
		font-size: 0.8rem;
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

<StyleguideSection name="Line Height" description="Respect the personal space of your text." variants={variants}>
	{#each classes as c}
		<div class="sample">
			<ClassName>.{c.name}</ClassName>
			<p class={c.name}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br />Esse, laborum dolor accusantium itaque voluptate dolores enim aliquid.</p>
		</div>
	{/each}
</StyleguideSection>
