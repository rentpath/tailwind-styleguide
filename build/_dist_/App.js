import __SNOWPACK_ENV__ from '/tailwind-styleguide/__snowpack__/env.js';
import.meta.env = __SNOWPACK_ENV__;

import './App.css.proxy.js';
/* src/App.svelte generated by Svelte v3.24.0 */
import {
	HtmlTag,
	SvelteComponent,
	append,
	check_outros,
	create_component,
	destroy_component,
	destroy_each,
	detach,
	element,
	empty,
	group_outros,
	handle_promise,
	init,
	insert,
	mount_component,
	noop,
	safe_not_equal,
	space,
	text,
	transition_in,
	transition_out
} from "/tailwind-styleguide/web_modules/svelte/internal.js";

import { rules } from "./stores/rules.js";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i];
	return child_ctx;
}

// (39:1) {:catch error}
function create_catch_block(ctx) {
	let div;
	let t0;
	let t1_value = /*section*/ ctx[2].sectionName + "";
	let t1;
	let t2;
	let t3;
	let code;
	let pre;
	let t4_value = JSON.stringify(/*error*/ ctx[6], 4, null) + "";
	let t4;
	let t5;

	return {
		c() {
			div = element("div");
			t0 = text("Uh oh! Section ");
			t1 = text(t1_value);
			t2 = text(" not found.");
			t3 = space();
			code = element("code");
			pre = element("pre");
			t4 = text(t4_value);
			t5 = space();
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, t0);
			append(div, t1);
			append(div, t2);
			insert(target, t3, anchor);
			insert(target, code, anchor);
			append(code, pre);
			append(pre, t4);
			insert(target, t5, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div);
			if (detaching) detach(t3);
			if (detaching) detach(code);
			if (detaching) detach(t5);
		}
	};
}

// (37:43)    <svelte:component this={sectionModule.default}
function create_then_block(ctx) {
	let switch_instance;
	let t;
	let current;
	var switch_value = /*sectionModule*/ ctx[5].default;

	function switch_props(ctx) {
		return { props: { meta: /*section*/ ctx[2].meta } };
	}

	if (switch_value) {
		switch_instance = new switch_value(switch_props(ctx));
	}

	return {
		c() {
			if (switch_instance) create_component(switch_instance.$$.fragment);
			t = space();
		},
		m(target, anchor) {
			if (switch_instance) {
				mount_component(switch_instance, target, anchor);
			}

			insert(target, t, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (switch_value !== (switch_value = /*sectionModule*/ ctx[5].default)) {
				if (switch_instance) {
					group_outros();
					const old_component = switch_instance;

					transition_out(old_component.$$.fragment, 1, 0, () => {
						destroy_component(old_component, 1);
					});

					check_outros();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props(ctx));
					create_component(switch_instance.$$.fragment);
					transition_in(switch_instance.$$.fragment, 1);
					mount_component(switch_instance, t.parentNode, t);
				} else {
					switch_instance = null;
				}
			} else if (switch_value) {
				0;
			}
		},
		i(local) {
			if (current) return;
			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
			current = true;
		},
		o(local) {
			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (switch_instance) destroy_component(switch_instance, detaching);
			if (detaching) detach(t);
		}
	};
}

// (1:0) <script>  import { rules }
function create_pending_block(ctx) {
	return {
		c: noop,
		m: noop,
		p: noop,
		i: noop,
		o: noop,
		d: noop
	};
}

// (36:0) {#each sections as section}
function create_each_block(ctx) {
	let await_block_anchor;
	let promise;
	let current;

	let info = {
		ctx,
		current: null,
		token: null,
		pending: create_pending_block,
		then: create_then_block,
		catch: create_catch_block,
		value: 5,
		error: 6,
		blocks: [,,,]
	};

	handle_promise(promise = /*section*/ ctx[2].module, info);

	return {
		c() {
			await_block_anchor = empty();
			info.block.c();
		},
		m(target, anchor) {
			insert(target, await_block_anchor, anchor);
			info.block.m(target, info.anchor = anchor);
			info.mount = () => await_block_anchor.parentNode;
			info.anchor = await_block_anchor;
			current = true;
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;

			{
				const child_ctx = ctx.slice();
				child_ctx[5] = info.resolved;
				info.block.p(child_ctx, dirty);
			}
		},
		i(local) {
			if (current) return;
			transition_in(info.block);
			current = true;
		},
		o(local) {
			for (let i = 0; i < 3; i += 1) {
				const block = info.blocks[i];
				transition_out(block);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) detach(await_block_anchor);
			info.block.d(detaching);
			info.token = null;
			info = null;
		}
	};
}

function create_fragment(ctx) {
	let html_tag;
	let raw_value = `<style type="text/css">${/*displayCSS*/ ctx[0]}</style>` + "";
	let html_anchor;
	let t;
	let each_1_anchor;
	let current;
	let each_value = /*sections*/ ctx[1];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			html_anchor = empty();
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
			html_tag = new HtmlTag(html_anchor);
		},
		m(target, anchor) {
			html_tag.m(raw_value, document.head);
			append(document.head, html_anchor);
			insert(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert(target, each_1_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			if ((!current || dirty & /*displayCSS*/ 1) && raw_value !== (raw_value = `<style type="text/css">${/*displayCSS*/ ctx[0]}</style>` + "")) html_tag.p(raw_value);

			if (dirty & /*sections, JSON*/ 2) {
				each_value = /*sections*/ ctx[1];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			detach(html_anchor);
			if (detaching) html_tag.d();
			if (detaching) detach(t);
			destroy_each(each_blocks, detaching);
			if (detaching) detach(each_1_anchor);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let displayCSS = "";

	const sections = Object.keys(rules).map(sectionName => {
		$$invalidate(0, displayCSS += rules[sectionName].css.join("\n"));

		return {
			...rules[sectionName],
			sectionName,
			module: import(`${import.meta.env.SNOWPACK_PUBLIC_API_URL}/_dist_/sections/${sectionName}/Renderer.js`)
		};
	});

	return [displayCSS, sections];
}

class App extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default App;
