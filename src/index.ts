// @ts-ignore
import App from "./App.svelte";

import { state$ } from "./stores/state";

const app = new App({
	target: document.body,
	props: {
		state$
	}
});

export default app;

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
	import.meta.hot.accept();
	import.meta.hot.dispose(() => {
		app.$destroy();
	});
}
