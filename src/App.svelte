<script>
	import { windsock as state } from "./stores/machine";
	import Upload from "./components/Icons/Upload.svelte";

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
	:global(html, body) {
		height: 100%;
	}

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
		--subtle-color: #edf2f7;
		--less-subtle-color: #e2e8f0;
	}

	#uploader {
		display: none;
	}

	.splash {
		margin: auto;
		width: 100%;
		max-width: 480px;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.drop-handler {
		width: 100%;
		height: 240px;
		border-radius: 24px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border: 4px dashed var(--primary-color);
		cursor: pointer;
		box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
	}

	.upload-instructions {
		font-style: normal;
		margin-top: 16px;
		font-size: 0.8rem;
		font-weight: 600;
		color: var(--primary-color);
	}

	.divider {
		--divider-thicc: 36px;
		position: relative;
		width: 100%;
		border-bottom: 1px solid var(--less-subtle-color);
		margin: var(--divider-thicc) 0;
	}

	.divider::after {
		position: absolute;
		content: "or";
		font-size: 0.8rem;
		color: #999;
		line-height: var(--divider-thicc);
		width: calc(var(--divider-thicc) * 2);
		background-color: #FFF;
		top: calc(var(--divider-thicc) / -2);
		left: 50%;
		margin-left: calc(-1 * var(--divider-thicc));
		text-align: center;
	}

	.button {
		width: 100%;
		text-align: center;
		padding: 24px;
		background-color: var(--primary-color);
		color: #FFF;
		font-weight: 600;
		border-radius: 24px;
		box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
	}
</style>

{#if $state.value === "greeting"}

	<!-- Greeting Page -->
	<main class="splash">
		<div class="drop-handler" on:drop={uploadFile} on:click={triggerUploadDialog}>
			<Upload />
			<em class="upload-instructions">Upload your project's Custom Tailwind CSS file</em>
		</div>
		<input id="uploader" type="file" accept="text/css" bind:this={uploader} />

		<hr class="divider" />

		<button class="button">Use Default Tailwind</button>
	</main>
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
