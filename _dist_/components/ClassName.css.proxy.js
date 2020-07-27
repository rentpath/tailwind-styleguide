
const code = "em.svelte-1mo47sy{font-style:normal;font-weight:600;font-size:0.8rem;color:#999;text-align:center}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);