import { PropertyCollector } from "../../css/PropertyCollector";

export class MarginCollector extends PropertyCollector {
	constructor() {
		super("margin", "m-", "margin");
	}
}
