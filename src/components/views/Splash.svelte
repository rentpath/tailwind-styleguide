<script>
	import { parseWithTailwind, parseWithString } from "./../../stores/state";

	import Upload from "./../../components/icons/Upload.svelte";

	let uploader;
	let displayCSS = "";

	function uploadFile(event) {
		event.preventDefault();

		const file = (() => {
			if (event instanceof DragEvent) {
				return event.dataTransfer.items[0].getAsFile();
			} else {
				return event.target.files[0];
			}
		})();

		const reader = new FileReader();

		reader.onload = function (event) {
			parseWithString(event.target.result);
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

<svelte:window on:dragover={preventOpen} on:drop={preventOpen}></svelte:window>

<style>
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

<main class="splash">
	<div class="drop-handler" on:drop={uploadFile} on:click={triggerUploadDialog}>
		<Upload />
		<em class="upload-instructions">Upload your project's custom Tailwind CSS file</em>
	</div>
	<input id="uploader" type="file" accept="text/css" bind:this={uploader} on:change={uploadFile} />

	<hr class="divider" />

	<button class="button" on:click={() => parseWithTailwind()}>Use Default Tailwind</button>
</main>
