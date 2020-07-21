<script>
	import { state$ } from "./../../stores/state";

	let displayCSS = "";

	$: sections = Object.keys($state$.rules || {}).map(sectionName => {
		displayCSS += $state$.rules[sectionName].css.join("\n");

		const module = import(`./../../sections/${sectionName}/Renderer.js`)

		return {
			...$state$.rules[sectionName],
			sectionName,
			module
		};
	});
</script>

<svelte:head>
	{@html `<style type="text/css">${displayCSS}</style>`}
</svelte:head>

{#each sections as section}
	{#await section.module then sectionModule}
		<svelte:component this={sectionModule.default} meta={section.meta}></svelte:component>
	{:catch error}
		<div>Uh oh! Section {section.sectionName} not found.</div>
		<code><pre>{JSON.stringify(error, 4, null)}</pre></code>
	{/await}
{/each}
