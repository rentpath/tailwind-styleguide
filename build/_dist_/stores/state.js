import __SNOWPACK_ENV__ from '/__snowpack__/env.js';
import.meta.env = __SNOWPACK_ENV__;

import {merge, Subject, BehaviorSubject} from "/web_modules/rxjs.js";
import {map, mergeMap, multicast} from "/web_modules/rxjs/operators.js";
import {tailwind} from "../temp.js";
import {ruleWalker} from "./rules.js";
const initialState = (() => {
  return {
    view: "splash"
  };
})();
const parser$ = new Subject();
function transformParsePayload(payload) {
  if (payload.type === "progress") {
    return {
      view: "loading",
      progress: payload.percentage
    };
  } else {
    return {
      view: "display",
      parsed: payload.parsed
    };
  }
}
const parse$ = parser$.pipe(mergeMap((raw) => {
  return ruleWalker.parseAndCollect(raw).pipe(map(transformParsePayload));
}));
export const state$ = new BehaviorSubject(initialState);
const _state$ = merge(parse$).pipe(multicast(() => state$));
_state$.connect();
export function parseWithTailwind() {
  parseWithString(tailwind);
}
export function parseWithString(raw) {
  parser$.next(raw);
}
if (import.meta.env.MODE === "development") {
  parseWithTailwind();
}
