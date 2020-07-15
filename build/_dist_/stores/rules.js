import {tailwind} from "../temp.js";
import {RuleWalker as RuleWalker2} from "../css/RuleWalker.js";
import {BackgroundColorCollector} from "../sections/backgroundColor/Collector.js";
import {TextColorCollector} from "../sections/textColor/Collector.js";
const ruleWalker = new RuleWalker2([new BackgroundColorCollector(), new TextColorCollector()]);
export const rules = ruleWalker.parseAndCollect(tailwind);
