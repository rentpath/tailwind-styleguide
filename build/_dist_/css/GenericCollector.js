import cssTree from "/tailwind-styleguide/web_modules/css-tree.js";
export class GenericCollector {
  constructor(name, regex, declarations) {
    this.name = name;
    this.regex = regex;
    this.declarations = declarations;
    this.rules = [];
    this.classNames = [];
  }
  walk(rule) {
    const meta = this.extractMeta(rule);
    if (meta?.rule && meta?.name) {
      this.rules.push(meta.rule);
      this.classNames.push(meta.name);
    }
  }
  extractMeta(rule) {
    const classSelector = cssTree.find(rule, (node) => node.type === "ClassSelector");
    if (!classSelector) {
      return;
    }
    if (!classSelector.name.match(this.regex)) {
      return;
    }
    const declarations = cssTree.findAll(rule, (node) => node.type === "Declaration") ?? [];
    const properties = declarations.map((d) => d.property);
    if (!properties.some((p) => this.declarations.includes(p))) {
      return;
    }
    return {
      rule,
      name: classSelector.name
    };
  }
  collect() {
    return {
      css: this.rules.map((r) => cssTree.generate(r)),
      meta: {
        classNames: this.classNames
      }
    };
  }
}
