import { GenericCollector } from "../../css/GenericCollector";

export class FontWeightCollector extends GenericCollector {
	constructor() {
		super("fontWeight", "font-", ["font-weight"]);
	}
}
