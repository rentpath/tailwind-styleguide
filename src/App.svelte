<script>
	import { state$ } from "./stores/state";

	import Upload from "./components/icons/Upload.svelte";
	import Splash from "./components/views/Splash.svelte";
	import Loading from "./components/views/Loading.svelte";
	import Display from "./components/views/Display.svelte";
</script>

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
</style>

{#if $state$.view === "splash"}
	<Splash />
{:else if $state$.view === "loading"}
	<Loading />
{:else if $state$.view === "display"}
	<Display />
{/if}
