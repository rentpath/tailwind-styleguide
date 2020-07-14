import cssTree from "css-tree";

import { RuleCollector } from "./types";

export class GenericCollector implements RuleCollector {
	private classNames: string[];

	constructor(
		public readonly name: string,
		protected readonly regex: RegExp,
		protected readonly declarations: string[]
	) {
		this.classNames = [];
	}

	public walk(rule: cssTree.Rule) {
		const classSelector = cssTree.find(
			rule,
			(node) => node.type === "ClassSelector"
		) as cssTree.ClassSelector | null;

		if (!classSelector) {
			return;
		}

		if (!classSelector.name.match(this.regex)) {
			return;
		}

		const declarations = (cssTree.findAll(
			rule,
			(node) => node.type === "Declaration"
		) ?? []) as cssTree.Declaration[];

		const properties = declarations.map((d) => d.property);

		if (!properties.some((p) => this.declarations.includes(p))) {
			return;
		}

		this.classNames.push(classSelector.name);
	}

	public collect() {
		return this.classNames;
	}
}
