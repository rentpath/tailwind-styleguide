import { GenericCollector } from "../../css/GenericCollector";

export class BorderColorCollector extends GenericCollector {
	constructor() {
		super("borderColor", "border-", ["border-color"]);
	}
}
