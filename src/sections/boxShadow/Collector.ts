import { GenericCollector } from "../../css/GenericCollector";

export class BoxShadowCollector extends GenericCollector {
	constructor() {
		super('boxShadow', 'shadow', ["box-shadow"]);
	}
}
