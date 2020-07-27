
const code = ".description.svelte-1anpaqd{margin-bottom:var(--common-gutter)}.swatch-left.svelte-1anpaqd,.swatch-right.svelte-1anpaqd{width:32px;height:32px}.swatch-left.svelte-1anpaqd{border-top-left-radius:8px;border-bottom-left-radius:8px}.swatch-right.svelte-1anpaqd{border-top-right-radius:8px;border-bottom-right-radius:8px}.swatch.svelte-1anpaqd{display:inline-block;width:auto;height:32px;background-color:var(--less-subtle-color);border-radius:8px}.swatch-left.svelte-1anpaqd,.swatch-right.svelte-1anpaqd{display:inline-block;background-color:var(--primary-color)}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);