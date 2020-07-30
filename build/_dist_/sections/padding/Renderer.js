import './Renderer.css.proxy.js';
/* src/sections/padding/Renderer.svelte generated by Svelte v3.24.0 */
import {
	SvelteComponent,
	append,
	attr,
	create_component,
	destroy_component,
	detach,
	element,
	init,
	insert,
	mount_component,
	safe_not_equal,
	space,
	text,
	transition_in,
	transition_out
} from "/web_modules/svelte/internal.js";

import StyleguideSection from "../../components/StyleguideSection.js";
import SpacingTable from "../../components/SpacingTable.js";
import ClassName from "../../components/ClassName.js";

function create_default_slot_14(ctx) {
	let t;

	return {
		c() {
			t = text("x");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (37:2) <ClassName>
function create_default_slot_13(ctx) {
	let t;

	return {
		c() {
			t = text("y");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (38:2) <ClassName>
function create_default_slot_12(ctx) {
	let t;

	return {
		c() {
			t = text("t");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (39:2) <ClassName>
function create_default_slot_11(ctx) {
	let t;

	return {
		c() {
			t = text("r");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (40:2) <ClassName>
function create_default_slot_10(ctx) {
	let t;

	return {
		c() {
			t = text("b");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (41:2) <ClassName>
function create_default_slot_9(ctx) {
	let t;

	return {
		c() {
			t = text("l");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (42:2) <ClassName>
function create_default_slot_8(ctx) {
	let t;

	return {
		c() {
			t = text(".p-8");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (44:2) <ClassName>
function create_default_slot_7(ctx) {
	let t;

	return {
		c() {
			t = text(".px-8");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (45:2) <ClassName>
function create_default_slot_6(ctx) {
	let t;

	return {
		c() {
			t = text(".py-8");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (46:2) <ClassName>
function create_default_slot_5(ctx) {
	let t;

	return {
		c() {
			t = text(".pt-8");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (47:2) <ClassName>
function create_default_slot_4(ctx) {
	let t;

	return {
		c() {
			t = text(".pr-8");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (48:2) <ClassName>
function create_default_slot_3(ctx) {
	let t;

	return {
		c() {
			t = text(".pb-8");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (49:2) <ClassName>
function create_default_slot_2(ctx) {
	let t;

	return {
		c() {
			t = text(".pl-8");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (52:1) <SpacingTable {classes} let:measurement={m}>
function create_default_slot_1(ctx) {
	let div1;
	let div0;
	let div1_style_value;

	return {
		c() {
			div1 = element("div");
			div0 = element("div");
			attr(div0, "class", "swatch-fill svelte-rgfx3y");
			attr(div1, "class", "swatch svelte-rgfx3y");
			attr(div1, "style", div1_style_value = `padding-right: ${/*m*/ ctx[2].value + (/*m*/ ctx[2].unit ?? "")}`);
		},
		m(target, anchor) {
			insert(target, div1, anchor);
			append(div1, div0);
		},
		p(ctx, dirty) {
			if (dirty & /*m*/ 4 && div1_style_value !== (div1_style_value = `padding-right: ${/*m*/ ctx[2].value + (/*m*/ ctx[2].unit ?? "")}`)) {
				attr(div1, "style", div1_style_value);
			}
		},
		d(detaching) {
			if (detaching) detach(div1);
		}
	};
}

// (33:0) <StyleguideSection name="Padding" description="Give your components some breathing room." variants={variants}>
function create_default_slot(ctx) {
	let p;
	let t0;
	let classname0;
	let t1;
	let classname1;
	let t2;
	let classname2;
	let t3;
	let classname3;
	let t4;
	let classname4;
	let t5;
	let classname5;
	let t6;
	let classname6;
	let t7;
	let classname7;
	let t8;
	let classname8;
	let t9;
	let classname9;
	let t10;
	let classname10;
	let t11;
	let classname11;
	let t12;
	let classname12;
	let t13;
	let t14;
	let spacingtable;
	let current;

	classname0 = new ClassName({
			props: {
				$$slots: { default: [create_default_slot_14] },
				$$scope: { ctx }
			}
		});

	classname1 = new ClassName({
			props: {
				$$slots: { default: [create_default_slot_13] },
				$$scope: { ctx }
			}
		});

	classname2 = new ClassName({
			props: {
				$$slots: { default: [create_default_slot_12] },
				$$scope: { ctx }
			}
		});

	classname3 = new ClassName({
			props: {
				$$slots: { default: [create_default_slot_11] },
				$$scope: { ctx }
			}
		});

	classname4 = new ClassName({
			props: {
				$$slots: { default: [create_default_slot_10] },
				$$scope: { ctx }
			}
		});

	classname5 = new ClassName({
			props: {
				$$slots: { default: [create_default_slot_9] },
				$$scope: { ctx }
			}
		});

	classname6 = new ClassName({
			props: {
				$$slots: { default: [create_default_slot_8] },
				$$scope: { ctx }
			}
		});

	classname7 = new ClassName({
			props: {
				$$slots: { default: [create_default_slot_7] },
				$$scope: { ctx }
			}
		});

	classname8 = new ClassName({
			props: {
				$$slots: { default: [create_default_slot_6] },
				$$scope: { ctx }
			}
		});

	classname9 = new ClassName({
			props: {
				$$slots: { default: [create_default_slot_5] },
				$$scope: { ctx }
			}
		});

	classname10 = new ClassName({
			props: {
				$$slots: { default: [create_default_slot_4] },
				$$scope: { ctx }
			}
		});

	classname11 = new ClassName({
			props: {
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			}
		});

	classname12 = new ClassName({
			props: {
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			}
		});

	spacingtable = new SpacingTable({
			props: {
				classes: /*classes*/ ctx[0],
				$$slots: {
					default: [
						create_default_slot_1,
						({ measurement: m }) => ({ 2: m }),
						({ measurement: m }) => m ? 4 : 0
					]
				},
				$$scope: { ctx }
			}
		});

	return {
		c() {
			p = element("p");
			t0 = text("All padding options are available in\n\t\t");
			create_component(classname0.$$.fragment);
			t1 = text(",\n\t\t");
			create_component(classname1.$$.fragment);
			t2 = text(",\n\t\t");
			create_component(classname2.$$.fragment);
			t3 = text(",\n\t\t");
			create_component(classname3.$$.fragment);
			t4 = text(",\n\t\t");
			create_component(classname4.$$.fragment);
			t5 = text(", and\n\t\t");
			create_component(classname5.$$.fragment);
			t6 = text(" pseudo-variants. For example,\n\t\t");
			create_component(classname6.$$.fragment);
			t7 = text("\n\t\twould be availble to use as\n\t\t");
			create_component(classname7.$$.fragment);
			t8 = text(",\n\t\t");
			create_component(classname8.$$.fragment);
			t9 = text(",\n\t\t");
			create_component(classname9.$$.fragment);
			t10 = text(",\n\t\t");
			create_component(classname10.$$.fragment);
			t11 = text(",\n\t\t");
			create_component(classname11.$$.fragment);
			t12 = text(",\n\t\t");
			create_component(classname12.$$.fragment);
			t13 = text("\n\t\tvariants as well to control left & right, top & bottom, top, right, bottom, and left paddings respectively.");
			t14 = space();
			create_component(spacingtable.$$.fragment);
			attr(p, "class", "description svelte-rgfx3y");
		},
		m(target, anchor) {
			insert(target, p, anchor);
			append(p, t0);
			mount_component(classname0, p, null);
			append(p, t1);
			mount_component(classname1, p, null);
			append(p, t2);
			mount_component(classname2, p, null);
			append(p, t3);
			mount_component(classname3, p, null);
			append(p, t4);
			mount_component(classname4, p, null);
			append(p, t5);
			mount_component(classname5, p, null);
			append(p, t6);
			mount_component(classname6, p, null);
			append(p, t7);
			mount_component(classname7, p, null);
			append(p, t8);
			mount_component(classname8, p, null);
			append(p, t9);
			mount_component(classname9, p, null);
			append(p, t10);
			mount_component(classname10, p, null);
			append(p, t11);
			mount_component(classname11, p, null);
			append(p, t12);
			mount_component(classname12, p, null);
			append(p, t13);
			insert(target, t14, anchor);
			mount_component(spacingtable, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const classname0_changes = {};

			if (dirty & /*$$scope*/ 8) {
				classname0_changes.$$scope = { dirty, ctx };
			}

			classname0.$set(classname0_changes);
			const classname1_changes = {};

			if (dirty & /*$$scope*/ 8) {
				classname1_changes.$$scope = { dirty, ctx };
			}

			classname1.$set(classname1_changes);
			const classname2_changes = {};

			if (dirty & /*$$scope*/ 8) {
				classname2_changes.$$scope = { dirty, ctx };
			}

			classname2.$set(classname2_changes);
			const classname3_changes = {};

			if (dirty & /*$$scope*/ 8) {
				classname3_changes.$$scope = { dirty, ctx };
			}

			classname3.$set(classname3_changes);
			const classname4_changes = {};

			if (dirty & /*$$scope*/ 8) {
				classname4_changes.$$scope = { dirty, ctx };
			}

			classname4.$set(classname4_changes);
			const classname5_changes = {};

			if (dirty & /*$$scope*/ 8) {
				classname5_changes.$$scope = { dirty, ctx };
			}

			classname5.$set(classname5_changes);
			const classname6_changes = {};

			if (dirty & /*$$scope*/ 8) {
				classname6_changes.$$scope = { dirty, ctx };
			}

			classname6.$set(classname6_changes);
			const classname7_changes = {};

			if (dirty & /*$$scope*/ 8) {
				classname7_changes.$$scope = { dirty, ctx };
			}

			classname7.$set(classname7_changes);
			const classname8_changes = {};

			if (dirty & /*$$scope*/ 8) {
				classname8_changes.$$scope = { dirty, ctx };
			}

			classname8.$set(classname8_changes);
			const classname9_changes = {};

			if (dirty & /*$$scope*/ 8) {
				classname9_changes.$$scope = { dirty, ctx };
			}

			classname9.$set(classname9_changes);
			const classname10_changes = {};

			if (dirty & /*$$scope*/ 8) {
				classname10_changes.$$scope = { dirty, ctx };
			}

			classname10.$set(classname10_changes);
			const classname11_changes = {};

			if (dirty & /*$$scope*/ 8) {
				classname11_changes.$$scope = { dirty, ctx };
			}

			classname11.$set(classname11_changes);
			const classname12_changes = {};

			if (dirty & /*$$scope*/ 8) {
				classname12_changes.$$scope = { dirty, ctx };
			}

			classname12.$set(classname12_changes);
			const spacingtable_changes = {};
			if (dirty & /*classes*/ 1) spacingtable_changes.classes = /*classes*/ ctx[0];

			if (dirty & /*$$scope, m*/ 12) {
				spacingtable_changes.$$scope = { dirty, ctx };
			}

			spacingtable.$set(spacingtable_changes);
		},
		i(local) {
			if (current) return;
			transition_in(classname0.$$.fragment, local);
			transition_in(classname1.$$.fragment, local);
			transition_in(classname2.$$.fragment, local);
			transition_in(classname3.$$.fragment, local);
			transition_in(classname4.$$.fragment, local);
			transition_in(classname5.$$.fragment, local);
			transition_in(classname6.$$.fragment, local);
			transition_in(classname7.$$.fragment, local);
			transition_in(classname8.$$.fragment, local);
			transition_in(classname9.$$.fragment, local);
			transition_in(classname10.$$.fragment, local);
			transition_in(classname11.$$.fragment, local);
			transition_in(classname12.$$.fragment, local);
			transition_in(spacingtable.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(classname0.$$.fragment, local);
			transition_out(classname1.$$.fragment, local);
			transition_out(classname2.$$.fragment, local);
			transition_out(classname3.$$.fragment, local);
			transition_out(classname4.$$.fragment, local);
			transition_out(classname5.$$.fragment, local);
			transition_out(classname6.$$.fragment, local);
			transition_out(classname7.$$.fragment, local);
			transition_out(classname8.$$.fragment, local);
			transition_out(classname9.$$.fragment, local);
			transition_out(classname10.$$.fragment, local);
			transition_out(classname11.$$.fragment, local);
			transition_out(classname12.$$.fragment, local);
			transition_out(spacingtable.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(p);
			destroy_component(classname0);
			destroy_component(classname1);
			destroy_component(classname2);
			destroy_component(classname3);
			destroy_component(classname4);
			destroy_component(classname5);
			destroy_component(classname6);
			destroy_component(classname7);
			destroy_component(classname8);
			destroy_component(classname9);
			destroy_component(classname10);
			destroy_component(classname11);
			destroy_component(classname12);
			if (detaching) detach(t14);
			destroy_component(spacingtable, detaching);
		}
	};
}

function create_fragment(ctx) {
	let styleguidesection;
	let current;

	styleguidesection = new StyleguideSection({
			props: {
				name: "Padding",
				description: "Give your components some breathing room.",
				variants: /*variants*/ ctx[1],
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(styleguidesection.$$.fragment);
		},
		m(target, anchor) {
			mount_component(styleguidesection, target, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			const styleguidesection_changes = {};
			if (dirty & /*variants*/ 2) styleguidesection_changes.variants = /*variants*/ ctx[1];

			if (dirty & /*$$scope, classes*/ 9) {
				styleguidesection_changes.$$scope = { dirty, ctx };
			}

			styleguidesection.$set(styleguidesection_changes);
		},
		i(local) {
			if (current) return;
			transition_in(styleguidesection.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(styleguidesection.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(styleguidesection, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { classes } = $$props;
	let { variants } = $$props;

	$$self.$set = $$props => {
		if ("classes" in $$props) $$invalidate(0, classes = $$props.classes);
		if ("variants" in $$props) $$invalidate(1, variants = $$props.variants);
	};

	return [classes, variants];
}

class Renderer extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { classes: 0, variants: 1 });
	}
}

export default Renderer;