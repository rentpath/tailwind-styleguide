import {tailwind} from "../temp.js";
import {RuleWalker as RuleWalker2} from "../css/RuleWalker.js";
import {BackgroundColorCollector} from "../sections/backgroundColor/Collector.js";
const ruleWalker = new RuleWalker2([new BackgroundColorCollector()]);
export const rules = ruleWalker.parseAndCollect(tailwind);
