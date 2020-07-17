<script>
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

	function uploadFile(event) {
		event.preventDefault();

		const file = event.dataTransfer.items[0].getAsFile();
		const reader = new FileReader();

		reader.onload = function (event) {
			state.send({ type: "PARSE", raw: event.target.result });
		}
		reader.readAsText(file, "UTF-8");
	}

	function preventOpen(event) {
		event.preventDefault();
	}

	function triggerUploadDialog() {
		uploader.click();
	}
</script>

<svelte:head>
	{@html `<style type="text/css">${displayCSS}</style>`}
</svelte:head>

<svelte:window on:dragover={preventOpen} on:drop={preventOpen}></svelte:window>

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
		--primary-color: #2a62f5;
	}

	#uploader {
		display: none;
	}

	.drop-handler {
		width: 480px;
		height: 480px;
		background: red;
	}
</style>

{#if $state.value === "greeting"}

	<!-- Greeting Page -->
	<div class="drop-handler" on:drop={uploadFile} on:click={triggerUploadDialog}></div>
	<input id="uploader" type="file" accept="text/css" bind:this={uploader} />
	<button on:click={parse}>Start</button>
	<!---->

{:else if $state.value === "parsing"}

	<!-- Loader (For long parsing) -->
	<em>...</em>
	<!---->

{:else if $state.value === "display"}

	<!-- Style Guide Page -->
	{#each sections as section}
		{#await section.module then sectionModule}
			<svelte:component this={sectionModule.default} meta={section.meta}></svelte:component>
		{:catch error}
			<div>Uh oh! Section {section.sectionName} not found.</div>
			<code><pre>{JSON.stringify(error, 4, null)}</pre></code>
		{/await}
	{/each}
	<!---->

{/if}
