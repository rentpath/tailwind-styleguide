
const code = ".description.svelte-wv8a8j{margin-bottom:var(--common-gutter)}.swatch.svelte-wv8a8j{height:32px}.swatch.svelte-wv8a8j{width:auto;background-color:var(--primary-color);border-radius:8px}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);