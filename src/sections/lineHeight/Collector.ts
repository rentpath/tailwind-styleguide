import { GenericCollector } from "../../css/GenericCollector";

export class LineHeightCollector extends GenericCollector {
	constructor() {
		super("lineHeight", "leading-", ["line-height"]);
	}
}
