import cssTree from "css-tree";

import { RuleCollector, Collection } from "./types";
import { extractVariant } from "./ast";

const SUPPORTED_DECLARATION_TYPES = [
	"Dimension",
	"Number",
	"Identifier",
	"Percentage",
];

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

	/**
	 * @param n a string like '33.3333333'
	 * returns '33.3'
	 */
	private humanReadablePercentage(n: string) {
		return Number(n).toFixed(1)
	}

	public walk(className: string, declarations: cssTree.Declaration[]) {
		if (className.match(this.classRegex())) {
			const measurement = cssTree.find(
				declarations.filter((n) => {
					return n.property === this.cssProperty;
				})[0],
				(d) => {
					const hasDeclarationSupport = SUPPORTED_DECLARATION_TYPES.includes(
						d.type
					);

					if (!hasDeclarationSupport)
						console.warn(
							`Unidentified declaration type: ${d.type})`
						);

					return hasDeclarationSupport;
				}
			);

			this.classes.push({
				name: className,
				measurement: (() => {
					switch (measurement.type) {
						case "Dimension":
							return {
								value: measurement.value,
								unit: measurement.unit,
							};
						case "Identifier":
							return {
								value: "auto",
								unit: undefined,
							};
						case "Percentage":
							return {
								value: this.humanReadablePercentage(measurement.value), // convert 33.33333 to '33.3'
								unit: "%",
							};
						case "Number":
							return {
								value: 0,
								unit: undefined,
							};
						default:
							throw new Error(
								"Unidentified CSS Property Label for class: " +
									className
							);
					}
				})(),
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
