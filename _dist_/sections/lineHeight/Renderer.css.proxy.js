
const code = ".sample.svelte-7mtjij{font-size:0.8rem;border-bottom:1px solid var(--subtle-color);margin-bottom:8px;padding-bottom:8px}.sample.svelte-7mtjij:last-child{border-bottom:none;padding-bottom:0;margin-bottom:0}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);