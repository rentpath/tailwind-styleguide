require('svelte/register');

const rx = require('rxjs');
const App = require('./src/App.svelte').default;

const classes = [
	{"name": "bg-red-500"}
];

const variants = ["sm", "lg"];

const parsed = {
	rules: [".bg-red-500 { background-color: red; }"],
	collection: {
		backgroundColor: {
			classes,
			variants
		}
	}
};

const { head, html, css } = App.render({
	state$: rx.of({
		view: "display",
		parsed
	})
});

const static = `
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

console.log(static);
