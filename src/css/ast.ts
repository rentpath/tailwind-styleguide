import cssTree from "css-tree";

/**
 * Returns the first node of a given type
 *
 * @param type
 * @param rule
 */
export function getNodeOfType<T extends cssTree.CssNode>(
	type: cssTree.CssNode["type"],
	rule: cssTree.Rule
) {
	return cssTree.find(rule, (node) => node.type === type) as T | null;
}

/**
 * Return the class selector for a rule if it is a class rule
 *
 * @param rule
 */
export function getClassSelector(rule: cssTree.Rule) {
	return getNodeOfType("ClassSelector", rule) as cssTree.ClassSelector | null;
}

/**
 * Get all property declarations for a rule
 * Returns empty array if the rule block is empty
 *
 * @param rule
 */
export function getDeclarations(rule: cssTree.Rule) {
	return (
		cssTree.findAll(rule, (node) => node.type === "Declaration") ?? []
	) as cssTree.Declaration[];
}

/**
 * Given a Tailwind class pattern and a class name to inspect,
 * return any potential variants. E.g (bg-, sm:bg-red-500) => sm
 *
 * @param tailwindPattern
 * @param className
 */
export function extractVariant(tailwindPattern: string, className: string) {
	const variant = className.match(RegExp(`^([^:]+):.*${tailwindPattern}`));

	if (variant) {
		return variant[1].replace(/\\$/, "");
	} else {
		return null;
	}
}

/**
 * Unescapes the escaped version of a CSS classname. For example, will turn
 * The w-5\/12 into w-5/12
 *
 * @param className
 */
export function unescapeClassname(className: string): string {
	/*
	* TODO: Are there other things to un-escape? I didn't bother to check.
	* Probably will just add them as they arise.
	*/
	return className.replace('\\/', '/');
}
