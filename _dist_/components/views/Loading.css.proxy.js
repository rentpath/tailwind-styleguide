
const code = ".wrapper.svelte-uvcm21{width:100%;height:100%;display:flex;justify-content:center;align-items:center}svg.svelte-uvcm21{transform:rotate(-90deg)}.bg.svelte-uvcm21{fill:none;stroke:var(--subtle-color)}.progress.svelte-uvcm21{fill:none;stroke:var(--primary-color);stroke-linecap:round}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);