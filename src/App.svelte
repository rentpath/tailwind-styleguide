<script>
	import { rules } from "./stores/rules";
	import { windsock as state } from "./stores/machine";

	let uploader;
	let displayCSS = "";

	$: sections = Object.keys($state.context.rules || {}).map(sectionName => {
		displayCSS += $state.context.rules[sectionName].css.join("\n");
		
		const module = import(`./sections/${sectionName}/Renderer.js`)

		return {
			...$state.context.rules[sectionName],
			sectionName,
			module
		};
	});

	function parse() {
		if (uploader.files.length) {
			const reader = new FileReader();

			reader.onload = function (event) {
				state.send({ type: "PARSE", raw: event.target.result });
			}
			reader.readAsText(uploader.files[0], "UTF-8");
		}
	}

	$: console.log($state.context);
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
		--stacking-breakpoint: 768px;
	}
</style>

{#if $state.value === "greeting"}
	<h1>Windsock</h1>
	<input type="file" accept="text/css" bind:this={uploader} />
	<button on:click={parse}>Start</button>
{:else if $state.value === "parsing"}
	<em>...</em>
{:else if $state.value === "display"}
	{#each sections as section}
		{#await section.module then sectionModule}
			<svelte:component this={sectionModule.default} meta={section.meta}></svelte:component>
		{:catch error}
			<div>Uh oh! Section {section.sectionName} not found.</div>
			<code><pre>{JSON.stringify(error, 4, null)}</pre></code>
		{/await}
	{/each}
{/if}
