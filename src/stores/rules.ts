import { RuleWalker } from '../css/RuleWalker';
import { BackgroundColorCollector } from '../sections/backgroundColor/Collector';
import { TextColorCollector } from "../sections/textColor/Collector";
import { BoxShadowCollector } from '../sections/boxShadow/Collector';
import { BorderRadiusCollector } from '../sections/borderRadius/Collector';
import { LineHeightCollector } from '../sections/lineHeight/Collector';
import { FontSizeCollector } from '../sections/fontSize/Collector';
import { PaddingCollector } from '../sections/padding/Collector';
import { MarginCollector } from '../sections/margin/Collector';
import { WidthCollector } from '../sections/width/Collector';

export const ruleWalker = new RuleWalker([
	new BackgroundColorCollector(),
	new PaddingCollector(),
	new MarginCollector(),
	new WidthCollector(),
	new TextColorCollector(),
	new BoxShadowCollector(),
	new BorderRadiusCollector(),
	new LineHeightCollector(),
	new FontSizeCollector(),
]);
