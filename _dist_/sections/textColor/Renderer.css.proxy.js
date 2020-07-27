
const code = ".colors.svelte-6248pu{display:grid;grid-template-columns:repeat(auto-fill, minmax(420px, 1fr));gap:24px 24px}p.svelte-6248pu{font-size:1.2rem}p.svelte-6248pu::after{content:\"The quick brown fox jumped over the lazy dog.\"}@media(max-width: 500px){p.svelte-6248pu::after{content:\"The quick brown fox etc.\"\n\t\t}}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);