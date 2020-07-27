
const code = "svg.svelte-1mcijn5{width:64px;height:64px;stroke:var(--primary-color);fill:var(--primary-color)}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);