import cssTree from "css-tree";

import { RuleCollector } from "./types";
import { getClassSelector, getDeclarations, extractVariant } from "./ast";

export class GenericCollector implements RuleCollector {
	protected rules: cssTree.Rule[];
	protected classNames: string[];
	protected variants: Set<string>;

	constructor(
		public readonly name: string,
		protected readonly matcher: string,
		protected readonly declarations: string[]
	) {
		this.rules = [];
		this.classNames = [];
		this.variants = new Set();
	}

	public walk(className: string, declarations: cssTree.Declaration[]) {
		const meta = this.extractMeta(className, declarations);

		if (meta === null) {
			return false;
		} else if (meta?.name) {
			this.classNames.push(meta.name);
			return true;
		} else if (meta?.variant) {
			this.variants.add(meta.variant);
		}

		return false;
	}

	private classRegex() {
		return new RegExp(`^${this.matcher}`);
	}

	protected extractMeta(
		className: string,
		declarations: cssTree.Declaration[]
	) {
		// Try to match the selector's name (the actual class definition) with the regex for this
		// collector. So if we're matching on /^.bg-/, we'll ignore text-red-xxx classes.
		if (className.match(this.classRegex())) {
			// The declarations are still an AST. Get the string values they contain so we can
			// inspect them.
			const properties = declarations.map((d) => d.property);

			// If none of the properties of the rule match any of the properties we're looking for,
			// we can skip this class.
			//
			// This handles the edge case of a Tailwind class starting with the regular expression
			// we match on, but don't actually correspond to a given property. For example, /^.bg-/ will match
			// background colors, but also background attachment rules. If we're collecting background color
			// classes, we don't want to accidentally include attachment classes too.
			if (!properties.some((p) => this.declarations.includes(p))) return;

			// If we've made it this far, the rule we received is one we're interested in collecting.
			return {
				name: className,
			};
		} else {
			// If we didn't match the selector name, this may still be a variant. Try to extract it if it exists
			const maybeVariant = extractVariant(this.matcher, className);

			if (maybeVariant) {
				return { variant: maybeVariant };
			}
		}

		return null;
	}

	public collect() {
		return {
			classes: this.classNames.map((n) => ({
				name: n,
			})),
			variants: [...this.variants],
		};
	}
}
