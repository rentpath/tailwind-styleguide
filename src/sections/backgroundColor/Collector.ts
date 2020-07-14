import { GenericCollector } from "../../css/GenericCollector";

export class BackgroundColorCollector extends GenericCollector {
	constructor() {
		super('backgroundColor', /^bg-/, ["background-color"]);
	}
}
