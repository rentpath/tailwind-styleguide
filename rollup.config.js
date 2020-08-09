import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import builtins from 'rollup-plugin-node-builtins';
import svelte from 'rollup-plugin-svelte';
import shebang from 'rollup-plugin-preserve-shebang';

export default {
	preserveEntrySignatures: false,
	preserveModules: false,
	input: "src/cli.ts",
	output: {
		sourcemap: false,
		dir: "dist",
		format: "cjs",
	},
	plugins: [
		shebang({
			shebang: "#!/usr/bin/env node"
		}),
		builtins(),
		svelte({
			generate: "ssr",
			hydratable: false,
		}),
		typescript(),
		nodeResolve(),
		commonjs(),
		json(),
	]
};
