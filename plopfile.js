module.exports = function (plop) {
	plop.setGenerator("section", {
		description: "Create a new stylesheet section with a renderer and collector",
		prompts: [
			{
				type: "input",
				name: "name",
				message: "Section name in Title Case, e.g. Background Color >",
			},
		],
		actions: [
			{
				type: "add",
				path: "src/sections/{{camelCase name}}/Collector.ts",
				templateFile: "plop-templates/collector.hbs",
			},
			{
				type: "add",
				path: "src/sections/{{camelCase name}}/Renderer.svelte",
				templateFile: "plop-templates/renderer.hbs",
			},
		],
	});
};
