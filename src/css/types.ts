import cssTree from "css-tree";

export interface RuleCollector {
	name: string;
	walk: (rule: cssTree.Rule) => void;
	collect: () => any;
}
