import { GenericCollector } from "../../css/GenericCollector";

export class TextColorCollector extends GenericCollector {
	constructor() {
		super('textColor', /^text-/, ["color"]);
	}
}
