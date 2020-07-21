import cssTree from "/tailwind-styleguide/web_modules/css-tree.js";
import {Observable} from "/tailwind-styleguide/web_modules/rxjs.js";
const BLOCKING_FACTOR = 250;
export class RuleWalker {
  constructor(collectors) {
    this.collectors = collectors;
  }
  parseAndCollect(css) {
    const parsed = cssTree.parse(css);
    return this.collect(parsed);
  }
  collect(ast) {
    return new Observable((subscriber) => {
      let index = 0;
      const rules = cssTree.findAll(ast, (node) => node.type === "Rule");
      const parseNextChunk = () => {
        const chunk = Math.min(rules.length, index + BLOCKING_FACTOR);
        while (index < chunk) {
          this.collectors.forEach((collector) => {
            collector.walk(rules[index]);
          });
          index++;
        }
        if (index >= rules.length) {
          const parsed = this.collectors.reduce(function(carry, collector) {
            return {
              ...carry,
              [collector.name]: collector.collect()
            };
          }, {});
          subscriber.next({
            type: "complete",
            parsed
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
