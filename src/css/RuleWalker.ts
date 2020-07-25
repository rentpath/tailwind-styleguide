import cssTree from "css-tree";
import { Observable } from "rxjs";

import { RuleCollector, Collection } from "./types";
import { getClassSelector, getDeclarations } from "./ast";

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
	private rules: cssTree.Rule[];

	constructor(private readonly collectors: RuleCollector[]) {
		this.rules = [];
	}

	public parseAndCollect(css: string) {
		const parsed = cssTree.parse(css);

		return this.collect(parsed);
	}

	public collect(ast: cssTree.CssNode): Observable<CollectPayload> {
		return new Observable(subscriber => {
			let index = 0;

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

					const declarations = getDeclarations(rules[index]);

					this.collectors.forEach(collector => {
						const shouldIncludeRule = collector.walk(classSelector.name, declarations);

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
