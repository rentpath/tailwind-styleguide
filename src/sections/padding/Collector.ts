import { GenericCollector } from "../../css/GenericCollector";

export class PaddingCollector extends GenericCollector {
	constructor() {
		super("padding", "p[xytrbl]?-\\d+", [
			"padding",
			"padding-top",
			"padding-right",
			"padding-bottom",
			"padding-left",
		]);
	}
}
