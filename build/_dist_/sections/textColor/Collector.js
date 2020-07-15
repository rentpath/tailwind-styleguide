import {GenericCollector as GenericCollector2} from "../../css/GenericCollector.js";
export class TextColorCollector extends GenericCollector2 {
  constructor() {
    super("textColor", /^text-/, ["color"]);
  }
}
