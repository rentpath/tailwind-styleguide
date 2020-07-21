import __SNOWPACK_ENV__ from '/tailwind-styleguide/__snowpack__/env.js';
import.meta.env = __SNOWPACK_ENV__;

import {RuleWalker as RuleWalker2} from "../css/RuleWalker.js";
import {BackgroundColorCollector} from "../sections/backgroundColor/Collector.js";
import {TextColorCollector} from "../sections/textColor/Collector.js";
import {Machine, interpret, assign} from "/tailwind-styleguide/web_modules/xstate.js";
import {tailwind} from "../temp.js";
import {BoxShadowCollector} from "../sections/boxShadow/Collector.js";
import {BorderRadiusCollector} from "../sections/borderRadius/Collector.js";
import {LineHeightCollector} from "../sections/lineHeight/Collector.js";
const LOCALSTORAGE_KEY = "parsed_rules";
const ruleWalker = new RuleWalker2([new BackgroundColorCollector(), new TextColorCollector(), new BoxShadowCollector(), new BorderRadiusCollector(), new LineHeightCollector()]);
const initialState = (() => {
  const cache = localStorage.getItem(LOCALSTORAGE_KEY);
  if (import.meta.env.MODE === "development") {
    return {
      initial: "display",
      context: {
        rules: ruleWalker.parseAndCollect(tailwind)
      }
    };
  } else if (cache) {
    return {
      initial: "display",
      context: {
        rules: JSON.parse(cache)
      }
    };
  } else {
    return {
      initial: "greeting",
      context: {}
    };
  }
})();
const windsockMachine = Machine({
  ...initialState,
  id: "windsock",
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
          actions: [assign({
            rules: (_ctx, event) => event.data
          }), (ctx) => {
            localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(ctx.rules));
          }]
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
