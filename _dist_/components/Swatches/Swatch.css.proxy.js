
const code = ".swatch-wrapper.svelte-1f7305h{display:flex;flex-direction:column;place-items:center}.swatch.svelte-1f7305h{width:96px;height:96px;margin-bottom:8px}.squircle.svelte-1f7305h{border-radius:8px}.circle.svelte-1f7305h{border-radius:100%}.filled.svelte-1f7305h{background-color:var(--subtle-color)}.fancy.svelte-1f7305h{box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)}.stroked.svelte-1f7305h{border:1px solid var(--less-subtle-color)}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);