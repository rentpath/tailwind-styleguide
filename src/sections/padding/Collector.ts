import cssTree from "css-tree";

import { RuleCollector, Collection } from "../../css/types";
import { extractVariant } from "../../css/ast";

export class PaddingCollector implements RuleCollector {
	name: string = "Padding";

	private variants: Set<string>;
	private classes: Collection["classes"];

	constructor() {
		this.variants = new Set();
		this.classes = [];
	}

	public walk(className: string, declarations: cssTree.Declaration[]) {
		if (className.match(/^p-/)) {
			const paddingMeasurement = cssTree.find(
				declarations.filter((n) => n.property === "padding")[0],
				(d) => d.type === "Dimension" || d.type === "Number"
			);

			this.classes.push({
				name: className,
				measurement:
					paddingMeasurement.type === "Dimension"
						? {
							value: paddingMeasurement.value,
							unit: paddingMeasurement.unit
						}
						: {
							value: 0,
							unit: undefined
						},
			});

			return true;
		} else {
			const maybeVariant = extractVariant("p-", className);

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
