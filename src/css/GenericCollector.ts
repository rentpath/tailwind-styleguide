import cssTree from "css-tree";

import { RuleCollector } from "./types";

export class GenericCollector implements RuleCollector {
	private rules: cssTree.Rule[];
	private classNames: string[];

	constructor(
		public readonly name: string,
		protected readonly regex: RegExp,
		protected readonly declarations: string[]
	) {
		this.rules = [];
		this.classNames = [];
	}

	public walk(rule: cssTree.Rule) {
		const meta = this.extractMeta(rule);

		if (meta?.rule && meta?.name) {
			this.rules.push(meta.rule);
			this.classNames.push(meta.name);
		}
	}

	protected extractMeta(rule: cssTree.Rule) {
		// Each call to this method receives an AST for a CSS rule
		// Walk the rule and try to find a class selector. All Tailwind utilities will be classes.
		const classSelector = cssTree.find(
			rule,
			(node) => node.type === "ClassSelector"
		) as cssTree.ClassSelector | null;

		// Things like element selectors and ID selectors aren't needed, so skip them.
		// Past this point we know we are working with a CSS rule; something like .bg-red-500 { ... }
		if (!classSelector) {
			return;
		}

		// Try to match the selector's name (the actual class definition) with the regex for this
		// collector. So if we're matching on /^.bg-/, we'll ignore text-red-xxx classes.
		if (!classSelector.name.match(this.regex)) {
			return;
		}

		// The declarations are the actual "rules" for a CSS expression;
		// something like background-color: #FF0000;
		const declarations = (cssTree.findAll(
			rule,
			(node) => node.type === "Declaration"
		) ?? []) as cssTree.Declaration[];

		// The declarations are still an AST. Get the string values they contain so we can
		// inspect them.
		const properties = declarations.map((d) => d.property);

		// If none of the properties of the rule match any of the properties we're looking for, 
		// we can skip this class.
		// 
		// This handles the edge case of a Tailwind class starting with the regular expression
		// we match on, but don't actually correspond to a given property. For example, /^.bg-/ will match
		// background colors, but also background attachment rules. If we're collecting background color
		// classes, we don't want to accidentally include attachment classes too.
		if (!properties.some((p) => this.declarations.includes(p))) {
			return;
		}

		// If we've made it this far, the rule we received is one we're interested in collecting.
		return {
			rule,
			name: classSelector.name
		};
	}

	public collect() {
		return {
			css: this.rules.map(r => cssTree.generate(r)),
			meta: {
				classNames: this.classNames
			}
		};
	}
}
