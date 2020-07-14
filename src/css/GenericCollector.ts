import {
	find,
	ClassSelector,
	findAll,
	Declaration,
	Rule,
} from "css-tree";

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

	public walk(rule: Rule) {
		const classSelector = find(
			rule,
			(node) => node.type === "ClassSelector"
		) as ClassSelector | null;

		if (!classSelector) {
			return;
		}

		if (!classSelector.name.match(this.regex)) {
			return;
		}

		const declarations = (findAll(
			rule,
			(node) => node.type === "Declaration"
		) ?? []) as Declaration[];

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
