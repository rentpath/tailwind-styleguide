import {GenericCollector as GenericCollector2} from "../../css/GenericCollector.js";
export class BackgroundColorCollector extends GenericCollector2 {
  constructor() {
    super("backgroundColor", /^bg-/, ["background-color"]);
  }
}
