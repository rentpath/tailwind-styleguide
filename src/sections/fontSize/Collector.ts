import { GenericCollector } from "../../css/GenericCollector";

export class FontSizeCollector extends GenericCollector {
	constructor() {
		super('fontSize', "text-", ["font-size"]);
	}
}
