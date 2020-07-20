import cssTree from "css-tree";
import uniqWith from "ramda/es/uniqWith";

import { RuleCollector } from "../../css/types";
import { getClassSelector, getNodeOfType, extractVariant } from "../../css/ast";

interface Spacing {
	name: string;
	value: number;
	unit?: string;
}

// TODO: WTF was I even doing here? Just start over.

export class PaddingCollector implements RuleCollector {
	public name = "padding";

	private rules: cssTree.Rule[];
	private variants: Set<string>;
	private spacings: Spacing[];

	constructor() {
		this.rules = [];
		this.variants = new Set();
		this.spacings = [];
	}

	public walk(rule: cssTree.Rule) {
		const classSelector = getClassSelector(rule);

		if (!classSelector) return;

		const spacing = classSelector.name.match(/^p[xytrbl]?-(\d+)/);

		if (spacing) {
			this.rules.push(rule);
			const paddingValue = getNodeOfType<cssTree.Dimension>("Dimension", rule);

			if (paddingValue === null) {
				this.spacings.push({
					name: "0",
					value: 0
				});
			} else {
				this.spacings.push({
					name: spacing[1],
					value: Number(paddingValue.value),
					unit: paddingValue.unit
				})
			}
		} else {
			const maybeVariant = extractVariant(
				'p[xytrbl]?-(\\d+)',
				classSelector.name
			);

			if (maybeVariant) {
				this.variants.add(maybeVariant)
			}
		}
	}

	public collect() {
		return {
			css: this.rules.map((r) => cssTree.generate(r)),
			meta: {
				variants: [...this.variants],
				spacings: uniqWith((a: Spacing, b: Spacing) => (
					a.value === b.value &&
					a.name === b.name &&
					a?.unit === b?.unit
				), this.spacings),
			},
		};
	}
}
