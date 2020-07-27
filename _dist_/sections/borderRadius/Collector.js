import {GenericCollector as GenericCollector2} from "../../css/GenericCollector.js";
export class BorderRadiusCollector extends GenericCollector2 {
  constructor() {
    super("borderRadius", "rounded", ["border-radius", "border-top-left-radius", "border-top-right-radius", "border-bottom-left-radius", "border-bottom-right-radius"]);
  }
}
