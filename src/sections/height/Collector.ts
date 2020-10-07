import { PropertyCollector } from "../../css/PropertyCollector";

export class HeightCollector extends PropertyCollector {
	constructor() {
		super("height", "h-", "height");
	}
}
