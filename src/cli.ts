import { of } from "rxjs";
import { filter, map } from "rxjs/operators";

import { ruleWalker } from "./stores/rules";
import { tailwind } from "./temp";
import { CompletePayload } from "./css/RuleWalker";

// @ts-ignore
import App from "./App.svelte";

const parsed$ = ruleWalker.parseAndCollect(tailwind).pipe(
	filter((p): p is CompletePayload => p.type === "complete"),
	map(c => ({
		view: "display",
		parsed: c.parsed
	}))
);

parsed$.subscribe(function (completed) {
	const { head, html, css } = App.render({
		state$: of(completed)
	});

	const app = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<link rel="icon" href="/favicon.ico" />
<link rel="stylesheet" href="https://unpkg.com/tailwindcss@1.4.6/dist/base.css">
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;800&display=swap" rel="stylesheet">
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="description" content="Tailwind Styleguide SAAS" />
<title>Windsock</title>
${head}
<style>${css.code}</style>
</head>
<body>${html}</body>
</html>
	`;

	console.log(app);
})
