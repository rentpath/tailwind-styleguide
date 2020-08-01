import cssTree from "css-tree";

import { RuleCollector, Collection } from "./types";
import { extractVariant } from "./ast";

export class PropertyCollector implements RuleCollector {
	private variants: Set<string>;
	private classes: Collection["classes"];

	constructor(
		public readonly name: string,
		protected readonly matcher: string,
		protected readonly cssProperty: string
	) {
		this.variants = new Set();
		this.classes = [];
	}

	private classRegex() {
		return new RegExp(`^${this.matcher}`);
	}

	public walk(className: string, declarations: cssTree.Declaration[]) {
		if (className.match(this.classRegex())) {
			const measurement = cssTree.find(
				declarations.filter((n) => n.property === this.cssProperty)[0],
				(d) => d.type === "Dimension" || d.type === "Number" || d.type === "Identifier"
			);

			this.classes.push({
				name: className,
				measurement: (() => {
					switch (measurement.type) {
						case "Dimension":
							return {
								value: measurement.value,
								unit: measurement.unit
							};
						case "Identifier":
							return {
								value: "auto",
								unit: undefined
							};
						case "Number":
							return {
								value: 0,
								unit: undefined
							};
						default: throw new Error("Unidentified CSS Property Label for class: " + className);
					}
				})()
			});

			return true;
		} else {
			const maybeVariant = extractVariant(this.matcher, className);

			if (maybeVariant) {
				this.variants.add(maybeVariant);
			}
		}

		return false;
	}

	public collect() {
		return {
			classes: this.classes,
			variants: [...this.variants],
		};
	}
}
