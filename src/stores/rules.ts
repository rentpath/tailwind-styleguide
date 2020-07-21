import { RuleWalker } from '../css/RuleWalker';
import { BackgroundColorCollector } from '../sections/backgroundColor/collector';
import { TextColorCollector } from "../sections/textColor/collector";
import { BoxShadowCollector } from '../sections/boxShadow/collector';
import { BorderRadiusCollector } from '../sections/borderRadius/collector';
import { LineHeightCollector } from '../sections/lineHeight/collector';
import { FontSizeCollector } from '../sections/fontSize/collector';

export const ruleWalker = new RuleWalker([
	new BackgroundColorCollector(),
	new TextColorCollector(),
	new BoxShadowCollector(),
	new BorderRadiusCollector(),
	new LineHeightCollector(),
	new FontSizeCollector(),
]);
