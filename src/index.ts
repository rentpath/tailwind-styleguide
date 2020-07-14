import cssTree from "css-tree";

// @ts-ignore
import App from "./App.svelte";

import { tailwind } from "./temp";
import { RuleWalker } from "./css/RuleWalker";
import { BackgroundColorCollector } from "./sections/backgroundColor/Collector";

const app = new App({
	target: document.body,
});

const walker = new RuleWalker([
	new BackgroundColorCollector()
])

const rules = walker.collect(cssTree.parse(tailwind));

console.log(rules);

export default app;

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
	import.meta.hot.accept();
	import.meta.hot.dispose(() => {
		app.$destroy();
	});
}
