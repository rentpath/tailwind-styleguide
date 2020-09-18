
const code = ".description.svelte-2oluyg{width-bottom:var(--common-gutter)}.swatch.svelte-2oluyg,.swatch-outer.svelte-2oluyg,.swatch-inner.svelte-2oluyg{height:32px}.swatch-outer.svelte-2oluyg,.swatch-inner.svelte-2oluyg{border-top-left-radius:8px;border-bottom-left-radius:8px}.swatch-inner.svelte-2oluyg{border-top-right-radius:8px;border-bottom-right-radius:8px}.swatch.svelte-2oluyg{display:inline-block;width:auto;background-color:var(--less-subtle-color);border-radius:8px;width:850px}.swatch-inner.svelte-2oluyg{display:inline-block;width:100%;background-color:var(--primary-color)}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);