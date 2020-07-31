<script>
	import { onMount } from "svelte";

	import Display from "./components/views/Display.svelte";

	// State is injected by the render context
	// For browser, it's the normal runtime state
	// For console, it's a mock state with the "Display" view content
	export let state$;

	// This component must be SSR compatible, but there are no such restrictions
	// on its children. Therefore we must load them asynchronously after the client has booted
	// in onMount. This will not run in SSR mode (i.e. for the CLI)
	let Splash;
	let Loading;

	onMount(async () => {
		const splash = await import('./components/views/Splash.svelte');
		const loading = await import('./components/views/Loading.svelte');

		Splash = splash.default;
		Loading = loading.default;
	});
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
	<svelte:component this={Splash} />
{:else if $state$.view === "loading"}
	<svelte:component this={Loading} />
{:else if $state$.view === "display"}
	<Display parsed={$state$.parsed} />
{/if}
