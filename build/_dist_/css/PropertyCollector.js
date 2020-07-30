import cssTree from "/web_modules/css-tree.js";
import {extractVariant} from "./ast.js";
export class PropertyCollector {
  constructor(name, matcher, cssProperty) {
    this.name = name;
    this.matcher = matcher;
    this.cssProperty = cssProperty;
    this.variants = new Set();
    this.classes = [];
  }
  classRegex() {
    return new RegExp(`^${this.matcher}`);
  }
  walk(className, declarations) {
    if (className.match(this.classRegex())) {
      const measurement = cssTree.find(declarations.filter((n) => n.property === this.cssProperty)[0], (d) => d.type === "Dimension" || d.type === "Number" || d.type === "Identifier");
      console.log(className, measurement);
      this.classes.push({
        name: className,
        measurement: (() => {
          switch (measurement.type) {
            case "Dimension":
              return {
                value: measurement.value,
                unit: measurement.unit
              };
            case "Identifier":
              return {
                value: "auto",
                unit: void 0
              };
            case "Number":
              return {
                value: 0,
                unit: void 0
              };
            default:
              throw new Error("Unidentified CSS Property Label for class: " + className);
          }
        })()
      });
      return true;
    } else {
      const maybeVariant = extractVariant(this.matcher, className);
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
