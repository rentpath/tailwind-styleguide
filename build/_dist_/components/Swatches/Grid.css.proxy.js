
const code = ".swatches.svelte-wpnnzx{display:grid;grid-template-columns:repeat(auto-fill, minmax(96px, 1fr));gap:24px 24px}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);