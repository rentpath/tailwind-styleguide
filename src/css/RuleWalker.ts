import cssTree from "css-tree";
import { Observable } from "rxjs";

import { RuleCollector } from "./types";

// Controls how many rules are walked in a single "chunk" of time.
// Increasing this number results in faster parsing because fewer tasks are taken
// to fully walk the AST, but also decreases UI responsiveness as longer tasks
// block the event loop.
const BLOCKING_FACTOR = 250;

export interface ProgressPayload {
	type: "progress";
	percentage: number;
}

export interface CompletePayload {
	type: "complete";
	parsed: any;
}

export type CollectPayload =
	| ProgressPayload
	| CompletePayload

export class RuleWalker {
	constructor(private readonly collectors: RuleCollector[]) {}

	public parseAndCollect(css: string) {
		const parsed = cssTree.parse(css);

		return this.collect(parsed);
	}

	public collect(ast: cssTree.CssNode): Observable<CollectPayload> {
		return new Observable(subscriber => {
			let index = 0;

			const rules = cssTree
				.findAll(ast, node => node.type === "Rule");

			const parseNextChunk = () => {
				const chunk = Math.min(rules.length, index + BLOCKING_FACTOR);

				while (index < chunk) {
					this.collectors.forEach(collector => {
						collector.walk(rules[index] as cssTree.Rule);
					});

					index++;
				}

				if (index >= rules.length) {
					const parsed = this.collectors.reduce(function (carry, collector) {
						return {
							...carry,
							[collector.name]: collector.collect()
						}
					}, {});

					subscriber.next({
						type: "complete",
						parsed
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
