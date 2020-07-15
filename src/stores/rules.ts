import { tailwind } from "../temp";
import { RuleWalker } from '../css/RuleWalker';

import { BackgroundColorCollector } from '../sections/backgroundColor/Collector';
import { TextColorCollector } from "../sections/textColor/Collector";

const ruleWalker = new RuleWalker([
	new BackgroundColorCollector(),
	new TextColorCollector()
]);

export const rules = ruleWalker.parseAndCollect(tailwind);
