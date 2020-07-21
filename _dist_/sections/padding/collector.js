import cssTree from "/tailwind-styleguide/web_modules/css-tree.js";
import uniqWith2 from "/tailwind-styleguide/web_modules/ramda/es/uniqWith.js";
import {getClassSelector, getNodeOfType, extractVariant} from "../../css/ast.js";
export class PaddingCollector {
  constructor() {
    this.name = "padding";
    this.rules = [];
    this.variants = new Set();
    this.spacings = [];
  }
  walk(rule) {
    const classSelector = getClassSelector(rule);
    if (!classSelector)
      return;
    const spacing = classSelector.name.match(/^p[xytrbl]?-(\d+)/);
    if (spacing) {
      this.rules.push(rule);
      const paddingValue = getNodeOfType("Dimension", rule);
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
        });
      }
    } else {
      const maybeVariant = extractVariant("p[xytrbl]?-(\\d+)", classSelector.name);
      if (maybeVariant) {
        this.variants.add(maybeVariant);
      }
    }
  }
  collect() {
    return {
      css: this.rules.map((r) => cssTree.generate(r)),
      meta: {
        variants: [...this.variants],
        spacings: uniqWith2((a, b) => a.value === b.value && a.name === b.name && a?.unit === b?.unit, this.spacings)
      }
    };
  }
}
