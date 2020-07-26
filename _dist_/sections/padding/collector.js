import cssTree from "/tailwind-styleguide/web_modules/css-tree.js";
import {extractVariant} from "../../css/ast.js";
export class PaddingCollector {
  constructor() {
    this.name = "Padding";
    this.variants = new Set();
    this.classes = [];
  }
  walk(className, declarations) {
    if (className.match(/^p-/)) {
      const paddingMeasurement = cssTree.find(declarations.filter((n) => n.property === "padding")[0], (d) => d.type === "Dimension" || d.type === "Number");
      this.classes.push({
        name: className,
        measurement: paddingMeasurement.type === "Dimension" ? {
          value: paddingMeasurement.value,
          unit: paddingMeasurement.unit
        } : {
          value: 0,
          unit: void 0
        }
      });
      return true;
    } else {
      const maybeVariant = extractVariant("p-", className);
      if (maybeVariant) {
        this.variants.add(maybeVariant);
      }
    }
    return false;
  }
  collect() {
    return {
      classes: this.classes,
      variants: [...this.variants]
    };
  }
}
