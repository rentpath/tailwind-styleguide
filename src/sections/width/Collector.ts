import { PropertyCollector } from "../../css/PropertyCollector";

export class WidthCollector extends PropertyCollector {
	constructor() {
		super("width", "w-", "width");
	}
}
