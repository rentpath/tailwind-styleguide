import cssTree from "css-tree";

export interface Collection {
	classes: {
		name: string;
		[meta: string]: any;
	}[];
	variants: string[];
}

export interface RuleCollector {
	name: string;
	walk: (className: string, declarations: cssTree.Declaration[]) => boolean;
	collect: () => Collection;
}
