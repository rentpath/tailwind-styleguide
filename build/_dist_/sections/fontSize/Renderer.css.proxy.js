
const code = ".sample.svelte-1y1f7yv{border-bottom:1px solid var(--subtle-color);margin-bottom:8px;padding-bottom:8px}.sample.svelte-1y1f7yv:last-child{border-bottom:none;padding-bottom:0;margin-bottom:0}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);