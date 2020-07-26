import { RuleWalker } from '../css/RuleWalker';
import { BackgroundColorCollector } from '../sections/backgroundColor/collector';
import { TextColorCollector } from "../sections/textColor/collector";
import { BoxShadowCollector } from '../sections/boxShadow/collector';
import { BorderRadiusCollector } from '../sections/borderRadius/collector';
import { LineHeightCollector } from '../sections/lineHeight/collector';
import { FontSizeCollector } from '../sections/fontSize/collector';
import { PaddingCollector } from '../sections/padding/Collector';

export const ruleWalker = new RuleWalker([
	new BackgroundColorCollector(),
	new PaddingCollector(),
	new TextColorCollector(),
	new BoxShadowCollector(),
	new BorderRadiusCollector(),
	new LineHeightCollector(),
	new FontSizeCollector(),
]);
