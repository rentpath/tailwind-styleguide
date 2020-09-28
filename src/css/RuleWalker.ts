import cssTree from "css-tree";
import { Observable } from "rxjs";

import { RuleCollector, Collection } from "./types";
import { getClassSelector, getDeclarations, unescapeClassname } from "./ast";

// Controls how many rules are walked in a single "chunk" of time.
// Increasing this number results in faster parsing because fewer tasks are taken
// to fully walk the AST, but also decreases UI responsiveness as longer tasks
// block the event loop.
const BLOCKING_FACTOR = 250;

export interface ProgressPayload {
	type: "progress";
	percentage: number;
}

export interface Parsed {
	collection: Record<string, Collection>;
	rules: string[];
}

export interface CompletePayload {
	type: "complete";
	parsed: Parsed;
}

export type CollectPayload =
	| ProgressPayload
	| CompletePayload

export class RuleWalker {
	/**
	 * A list of all the rule declarations to keep track of. A rule is something
	 * like .p-8 { padding: 8rem; }
	 */
	private rules: cssTree.Rule[];

	/**
	 * A list of objects that are called for each rule as the rule walker traverses
	 * the given CSS stylesheet. The internals of a collector are opaque, but it will generally do something
	 * like check a rule against a set of criteria and store it internally. At the end of tree traversal,
	 * the "collect" method of each collector is called. This effectively encodes a map-reduce of the CSS AST.
	 */
	private readonly collectors: RuleCollector[]

	constructor(collectors: RuleCollector[]) {
		this.rules = [];
		this.collectors = collectors;
	}

	public parseAndCollect(css: string) {
		const parsed = cssTree.parse(css);

		return this.collect(parsed);
	}

	public collect(ast: cssTree.CssNode): Observable<CollectPayload> {
		return new Observable(subscriber => {
			let index = 0;

			/**
			 * A list of all the rules in the CSS stylesheet being parsed. For example, a rule
			 * may be something like .p-8 { padding: 8rem; }
			 */
			const rules = cssTree
				.findAll(ast, node => node.type === "Rule") as cssTree.Rule[];

			const parseNextChunk = () => {
				const chunk = Math.min(rules.length, index + BLOCKING_FACTOR);

				while (index < chunk) {
					const classSelector = getClassSelector(rules[index]);

					if (!classSelector) {
						index++;
						continue;
					}

					/**
					 * A list of declarations for a given rule. For example, a declaration may be
					 * something like padding: 8rem; or width: 50%;
					*/
					const declarations = getDeclarations(rules[index]);

					const classSelectorName = unescapeClassname(classSelector.name);

					this.collectors.forEach(collector => {
						const shouldIncludeRule = collector.walk(classSelectorName, declarations);

						if (shouldIncludeRule) {
							this.rules.push(rules[index]);
						}
					});

					index++;
				}

				if (index >= rules.length) {
					const collection = this.collectors.reduce(function (carry, collector) {
						return {
							...carry,
							[collector.name]: collector.collect()
						};
					}, {} as Record<string, Collection>);

					subscriber.next({
						type: "complete",
						parsed: {
							collection,
							rules: this.rules.map((r) => cssTree.generate(r)),
						}
					});

					subscriber.complete();
				} else {
					subscriber.next({
						type: "progress",
						percentage: index / rules.length
					});

					setTimeout(parseNextChunk, 0);
				}
			}

			parseNextChunk();
		});
	}
}
