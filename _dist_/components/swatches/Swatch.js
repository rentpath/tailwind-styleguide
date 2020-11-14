import './Swatch.css.proxy.js';
/* src/components/swatches/Swatch.svelte generated by Svelte v3.24.0 */
import {
	SvelteComponent,
	append,
	attr,
	create_component,
	create_slot,
	destroy_component,
	detach,
	element,
	init,
	insert,
	mount_component,
	null_to_empty,
	safe_not_equal,
	set_data,
	space,
	text,
	toggle_class,
	transition_in,
	transition_out,
	update_slot
} from "/web_modules/svelte/internal.js";

import ClassName from "../ClassName.js";

function create_default_slot(ctx) {
	let t0;
	let t1;

	return {
		c() {
			t0 = text(".");
			t1 = text(/*swatch*/ ctx[0]);
		},
		m(target, anchor) {
			insert(target, t0, anchor);
			insert(target, t1, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*swatch*/ 1) set_data(t1, /*swatch*/ ctx[0]);
		},
		d(detaching) {
			if (detaching) detach(t0);
			if (detaching) detach(t1);
		}
	};
}

function create_fragment(ctx) {
	let div1;
	let div0;
	let div0_class_value;
	let t;
	let classname;
	let current;
	const default_slot_template = /*$$slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[7], null);

	classname = new ClassName({
			props: {
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			div1 = element("div");
			div0 = element("div");
			if (default_slot) default_slot.c();
			t = space();
			create_component(classname.$$.fragment);
			attr(div0, "class", div0_class_value = "" + (null_to_empty(`swatch ${/*swatch*/ ctx[0]}`) + " svelte-1kauhb5"));
			toggle_class(div0, "squircle", /*squircle*/ ctx[1]);
			toggle_class(div0, "circle", /*circle*/ ctx[2]);
			toggle_class(div0, "filled", /*filled*/ ctx[3]);
			toggle_class(div0, "fancy", /*fancy*/ ctx[4]);
			toggle_class(div0, "stroked", /*stroked*/ ctx[5]);
			attr(div1, "class", "swatch-wrapper svelte-1kauhb5");
		},
		m(target, anchor) {
			insert(target, div1, anchor);
			append(div1, div0);

			if (default_slot) {
				default_slot.m(div0, null);
			}

			append(div1, t);
			mount_component(classname, div1, null);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 128) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[7], dirty, null, null);
				}
			}

			if (!current || dirty & /*swatch*/ 1 && div0_class_value !== (div0_class_value = "" + (null_to_empty(`swatch ${/*swatch*/ ctx[0]}`) + " svelte-1kauhb5"))) {
				attr(div0, "class", div0_class_value);
			}

			if (dirty & /*swatch, squircle*/ 3) {
				toggle_class(div0, "squircle", /*squircle*/ ctx[1]);
			}

			if (dirty & /*swatch, circle*/ 5) {
				toggle_class(div0, "circle", /*circle*/ ctx[2]);
			}

			if (dirty & /*swatch, filled*/ 9) {
				toggle_class(div0, "filled", /*filled*/ ctx[3]);
			}

			if (dirty & /*swatch, fancy*/ 17) {
				toggle_class(div0, "fancy", /*fancy*/ ctx[4]);
			}

			if (dirty & /*swatch, stroked*/ 33) {
				toggle_class(div0, "stroked", /*stroked*/ ctx[5]);
			}

			const classname_changes = {};

			if (dirty & /*$$scope, swatch*/ 129) {
				classname_changes.$$scope = { dirty, ctx };
			}

			classname.$set(classname_changes);
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			transition_in(classname.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			transition_out(classname.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div1);
			if (default_slot) default_slot.d(detaching);
			destroy_component(classname);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { swatch } = $$props;
	let { squircle = false } = $$props;
	let { circle = false } = $$props;
	let { filled = false } = $$props;
	let { fancy = false } = $$props;
	let { stroked = false } = $$props;
	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$props => {
		if ("swatch" in $$props) $$invalidate(0, swatch = $$props.swatch);
		if ("squircle" in $$props) $$invalidate(1, squircle = $$props.squircle);
		if ("circle" in $$props) $$invalidate(2, circle = $$props.circle);
		if ("filled" in $$props) $$invalidate(3, filled = $$props.filled);
		if ("fancy" in $$props) $$invalidate(4, fancy = $$props.fancy);
		if ("stroked" in $$props) $$invalidate(5, stroked = $$props.stroked);
		if ("$$scope" in $$props) $$invalidate(7, $$scope = $$props.$$scope);
	};

	return [swatch, squircle, circle, filled, fancy, stroked, $$slots, $$scope];
}

class Swatch extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			swatch: 0,
			squircle: 1,
			circle: 2,
			filled: 3,
			fancy: 4,
			stroked: 5
		});
	}
}

export default Swatch;