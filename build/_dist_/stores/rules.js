import {RuleWalker as RuleWalker2} from "../css/RuleWalker.js";
import {BackgroundColorCollector} from "../sections/backgroundColor/collector.js";
import {TextColorCollector} from "../sections/textColor/collector.js";
import {BoxShadowCollector} from "../sections/boxShadow/collector.js";
import {BorderRadiusCollector} from "../sections/borderRadius/collector.js";
import {LineHeightCollector} from "../sections/lineHeight/collector.js";
import {FontSizeCollector} from "../sections/fontSize/collector.js";
import {PaddingCollector} from "../sections/padding/Collector.js";
export const ruleWalker = new RuleWalker2([new BackgroundColorCollector(), new PaddingCollector(), new TextColorCollector(), new BoxShadowCollector(), new BorderRadiusCollector(), new LineHeightCollector(), new FontSizeCollector()]);
