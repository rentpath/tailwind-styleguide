import { GenericCollector } from "../../css/GenericCollector";

export class BorderRadiusCollector extends GenericCollector {
	constructor() {
		super('borderRadius', 'rounded', [
			"border-radius",
			"border-top-left-radius",
			"border-top-right-radius",
			"border-bottom-left-radius",
			"border-bottom-right-radius"
		]);
	}
}
