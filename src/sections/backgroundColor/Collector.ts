import { GenericCollector } from "../../css/GenericCollector";

export class BackgroundColorCollector extends GenericCollector {
	constructor() {
		super('background', /^bg-/, ["background-color"]);
	}
}
