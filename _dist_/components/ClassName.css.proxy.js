
const code = "em.svelte-1ttfbrf{font-style:normal;font-weight:600;font-size:0.8rem;color:#999}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);