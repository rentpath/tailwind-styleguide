import cssTree from "/web_modules/css-tree.js";
export function getNodeOfType(type, rule) {
  return cssTree.find(rule, (node) => node.type === type);
}
export function getClassSelector(rule) {
  return getNodeOfType("ClassSelector", rule);
}
export function getDeclarations(rule) {
  return cssTree.findAll(rule, (node) => node.type === "Declaration") || [];
}
export function extractVariant(tailwindPattern, className) {
  const variant = className.match(RegExp(`^([^:]+):.*${tailwindPattern}`));
  if (variant) {
    return variant[1].replace(/\\$/, "");
  } else {
    return null;
  }
}
export function unescapeClassname(className) {
  return className.replace("\\/", "/");
}
