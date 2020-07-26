import cssTree from "/tailwind-styleguide/web_modules/css-tree.js";
import {Observable} from "/tailwind-styleguide/web_modules/rxjs.js";
import {getClassSelector, getDeclarations} from "./ast.js";
const BLOCKING_FACTOR = 250;
export class RuleWalker {
  constructor(collectors) {
    this.collectors = collectors;
    this.rules = [];
  }
  parseAndCollect(css) {
    const parsed = cssTree.parse(css);
    return this.collect(parsed);
  }
  collect(ast2) {
    return new Observable((subscriber) => {
      let index = 0;
      const rules = cssTree.findAll(ast2, (node) => node.type === "Rule");
      const parseNextChunk = () => {
        const chunk = Math.min(rules.length, index + BLOCKING_FACTOR);
        while (index < chunk) {
          const classSelector = getClassSelector(rules[index]);
          if (!classSelector) {
            index++;
            continue;
          }
          const declarations = getDeclarations(rules[index]);
          this.collectors.forEach((collector) => {
            const shouldIncludeRule = collector.walk(classSelector.name, declarations);
            if (shouldIncludeRule) {
              this.rules.push(rules[index]);
            }
          });
          index++;
        }
        if (index >= rules.length) {
          const collection = this.collectors.reduce(function(carry, collector) {
            return {
              ...carry,
              [collector.name]: collector.collect()
            };
          }, {});
          subscriber.next({
            type: "complete",
            parsed: {
              collection,
              rules: this.rules.map((r) => cssTree.generate(r))
            }
          });
          subscriber.complete();
        } else {
          subscriber.next({
            type: "progress",
            percentage: index / rules.length
          });
          setTimeout(parseNextChunk, 0);
        }
      };
      parseNextChunk();
    });
  }
}
