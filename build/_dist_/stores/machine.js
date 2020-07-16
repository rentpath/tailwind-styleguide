import {RuleWalker as RuleWalker2} from "../css/RuleWalker.js";
import {BackgroundColorCollector} from "../sections/backgroundColor/Collector.js";
import {TextColorCollector} from "../sections/textColor/Collector.js";
import {Machine, interpret, assign} from "/tailwind-styleguide/web_modules/xstate.js";
const ruleWalker = new RuleWalker2([new BackgroundColorCollector(), new TextColorCollector()]);
const windsockMachine = Machine({
  id: "windsock",
  initial: "greeting",
  context: {},
  states: {
    greeting: {
      on: {
        PARSE: "parsing"
      }
    },
    parsing: {
      entry: [assign({
        raw: (_ctx, event) => event.raw
      })],
      invoke: {
        src: function(ctx) {
          return Promise.resolve(ruleWalker.parseAndCollect(ctx.raw));
        },
        onDone: {
          target: "display",
          actions: assign({
            rules: (_ctx, event) => event.data
          })
        },
        onError: "greeting"
      }
    },
    display: {
      on: {
        RESET: "greeting"
      }
    }
  }
});
export const windsock = interpret(windsockMachine).start();
