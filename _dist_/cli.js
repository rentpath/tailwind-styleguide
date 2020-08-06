import {of} from "/web_modules/rxjs.js";
import {filter, map} from "/web_modules/rxjs/operators.js";
import {ruleWalker} from "./stores/rules.js";
import {tailwind} from "./temp.js";
import App2 from "./App.js";
const parsed$ = ruleWalker.parseAndCollect(tailwind).pipe(filter((p) => p.type === "complete"), map((c) => ({
  view: "display",
  parsed: c.parsed
})));
parsed$.subscribe(function(completed) {
  const {head, html, css} = App2.render({
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
});
