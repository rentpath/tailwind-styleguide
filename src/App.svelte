<script>
	import { rules } from "./stores/rules";

	let displayCSS = "";

	const sections = Object.keys(rules).map(sectionName => {
		displayCSS += rules[sectionName].css.join("\n");
		console.log(`./_dist_/sections/${sectionName}/Renderer.js`);
		
		const module = import(`./_dist_/sections/${sectionName}/Renderer.js`);
		console.log(module);

		return {
			...rules[sectionName],
			sectionName,
			module
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
		--section-margin: 64px;
	}
</style>

{#each sections as section}
	{#await section.module then sectionModule}
		<svelte:component this={sectionModule.default} meta={section.meta}></svelte:component>
	{:catch error}
		<div>Uh oh! Section {section.sectionName} not found.</div>
		<code><pre>{JSON.stringify(error, 4, null)}</pre></code>
	{/await}
{/each}
