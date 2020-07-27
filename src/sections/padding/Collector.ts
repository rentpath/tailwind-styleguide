import { PropertyCollector } from "../../css/PropertyCollector";

export class PaddingCollector extends PropertyCollector {
	constructor() {
		super("padding", "p-", "padding");
	}
}
