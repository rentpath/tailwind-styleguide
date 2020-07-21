import cssTree from "/tailwind-styleguide/web_modules/css-tree.js";
import {getClassSelector, getDeclarations, extractVariant} from "./ast.js";
export class GenericCollector {
  constructor(name, matcher, declarations) {
    this.name = name;
    this.matcher = matcher;
    this.declarations = declarations;
    this.rules = [];
    this.classNames = [];
    this.variants = new Set();
  }
  walk(rule) {
    const meta = this.extractMeta(rule);
    if (meta?.rule) {
      this.rules.push(meta.rule);
    }
    if (meta?.name) {
      this.classNames.push(meta.name);
    }
    if (meta?.variant) {
      this.variants.add(meta.variant);
    }
  }
  classRegex() {
    return new RegExp(`^${this.matcher}`);
  }
  extractMeta(rule) {
    const classSelector = getClassSelector(rule);
    if (!classSelector)
      return;
    if (classSelector.name.match(this.classRegex())) {
      const declarations = getDeclarations(rule);
      const properties = declarations.map((d) => d.property);
      if (!properties.some((p) => this.declarations.includes(p)))
        return;
      return {
        rule,
        name: classSelector.name
      };
    } else {
      const maybeVariant = extractVariant(this.matcher, classSelector.name);
      if (maybeVariant) {
        return {
          variant: maybeVariant
        };
      }
    }
    return;
  }
  collect() {
    return {
      css: this.rules.map((r) => cssTree.generate(r)),
      meta: {
        classNames: this.classNames,
        variants: [...this.variants]
      }
    };
  }
}
