import cssTree from "/web_modules/css-tree.js";
export class RuleWalker {
  constructor(collectors) {
    this.collectors = collectors;
  }
  parseAndCollect(css) {
    const parsed = cssTree.parse(css);
    return this.collect(parsed);
  }
  collect(ast) {
    cssTree.walk(ast, (node) => {
      if (node.type !== "Rule") {
        return;
      }
      this.collectors.forEach((collector) => collector.walk(node));
    });
    return this.collectors.reduce(function(carry, collector) {
      return {
        ...carry,
        [collector.name]: collector.collect()
      };
    }, {});
  }
}
