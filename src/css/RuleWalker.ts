import cssTree from "css-tree";

import { RuleCollector } from "./types";

export class RuleWalker {
	constructor(private readonly collectors: RuleCollector[]) {}

	public parseAndCollect(css: string) {
		const parsed = cssTree.parse(css);

		return this.collect(parsed);
	}

	public collect(ast: cssTree.CssNode) {
		cssTree.walk(ast, (node) => {
			if (node.type !== "Rule") {
				return;
			}

			this.collectors.forEach((collector) =>
				collector.walk(node as cssTree.Rule)
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
