import {extractVariant} from "./ast.js";
export class GenericCollector {
  constructor(name, matcher, declarations) {
    this.name = name;
    this.matcher = matcher;
    this.declarations = declarations;
    this.classNames = [];
    this.variants = new Set();
  }
  walk(className, declarations) {
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
  classRegex() {
    return new RegExp(`^${this.matcher}`);
  }
  extractMeta(className, declarations) {
    if (className.match(this.classRegex())) {
      const properties = declarations.map((d) => d.property);
      if (!properties.some((p) => this.declarations.includes(p)))
        return;
      return {
        name: className
      };
    } else {
      const maybeVariant = extractVariant(this.matcher, className);
      if (maybeVariant) {
        return {
          variant: maybeVariant
        };
      }
    }
    return null;
  }
  collect() {
    return {
      classes: this.classNames.map((n) => ({
        name: n
      })),
      variants: [...this.variants]
    };
  }
}
