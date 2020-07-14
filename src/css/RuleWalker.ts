import { walk, CssNode, Rule } from "css-tree";

import { RuleCollector } from "./types";

export class RuleWalker {
	constructor(private readonly collectors: RuleCollector[]) {}

	public collect(ast: CssNode) {
		walk(ast, (node) => {
			if (node.type !== "Rule") {
				return;
			}

			this.collectors.forEach((collector) =>
				collector.walk(node as Rule)
			);
		});

		return this.collectors.reduce(function (carry, collector) {
			return {
				...carry,
				[collector.name]: collector.collect()
			}
		}, {});
	}
}
