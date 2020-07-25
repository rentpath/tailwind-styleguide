<script>
	import { state$ } from "./../../stores/state";

	$: sections = Object.keys($state$.parsed.collection || {}).map(sectionName => {
		const module = import(`./../../sections/${sectionName}/Renderer.js`)

		return {
			...$state$.parsed.collection[sectionName],
			sectionName,
			module
		};
	});

	$: displayCSS = $state$.parsed.rules.join("\n");
</script>

<svelte:head>
	{@html `<style type="text/css">${displayCSS}</style>`}
</svelte:head>

{#each sections as section}
	{#await section.module then sectionModule}
		<svelte:component this={sectionModule.default} classes={section.classes} variants={section.variants}></svelte:component>
	{:catch error}
		<div>Uh oh! Section {section.sectionName} not found.</div>
		<code><pre>{JSON.stringify(error, 4, null)}</pre></code>
	{/await}
{/each}
