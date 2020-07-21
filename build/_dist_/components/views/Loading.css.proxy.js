
const code = ".wrapper.svelte-18f6w9q{width:100%;height:100%;display:flex;justify-content:center;align-items:center}svg.svelte-18f6w9q{transform:rotate(-90deg)}.bg.svelte-18f6w9q{fill:none;stroke:var(--subtle-color)}.progress.svelte-18f6w9q{fill:none;stroke:var(--primary-color);stroke-linecap:round}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);