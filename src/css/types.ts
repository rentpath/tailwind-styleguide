import { Rule } from "css-tree";

export interface RuleCollector {
	name: string;
	walk: (rule: Rule) => void;
	collect: () => any;
}
