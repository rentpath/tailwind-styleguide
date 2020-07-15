<script>
	import { rules } from "./stores/rules";

	let displayCSS = "";

	const sections = Object.keys(rules).map(sectionName => {
		displayCSS += rules[sectionName].css.join("\n");

		return {
			...rules[sectionName],
			sectionName,
			// TODO: Configure _dist_ so it doesn't break in non-dev
			module: import(`/_dist_/sections/${sectionName}/Renderer.js`)
		};
	});
</script>

<svelte:head>
	{@html `<style type="text/css">${displayCSS}</style>`}
</svelte:head>

<style>
	:global(body) {
		padding: 32px;
		font-size: 16px;
		font-family: "Raleway", sans-serif;
		color: #333;
	}

	:global(:root) {
		--common-gutter: 32px;
		--left-column-width: 320px;
	}
</style>

{#each sections as section}
	{#await section.module then sectionModule}
		<svelte:component this={sectionModule.default} meta={section.meta}></svelte:component>
	{:catch}
		<div>Uh oh! Section {section.sectionName} not found.</div>
	{/await}
{/each}
