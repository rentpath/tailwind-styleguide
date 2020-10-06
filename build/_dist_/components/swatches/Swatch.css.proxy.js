
const code = ".swatch-wrapper.svelte-1kauhb5{display:flex;flex-direction:column;place-items:center;text-align:center}.swatch.svelte-1kauhb5{width:96px;height:96px;margin-bottom:8px}.squircle.svelte-1kauhb5{border-radius:8px}.circle.svelte-1kauhb5{border-radius:100%}.filled.svelte-1kauhb5{background-color:var(--subtle-color)}.fancy.svelte-1kauhb5{box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)}.stroked.svelte-1kauhb5{border-width:1px}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);