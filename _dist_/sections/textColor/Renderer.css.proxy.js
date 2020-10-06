
const code = ".colors.svelte-grpwa5{display:grid;grid-template-columns:repeat(auto-fill, minmax(420px, 1fr));gap:24px 24px}@media(max-width: 768px){.colors.svelte-grpwa5{grid-template-columns:1fr}}p.svelte-grpwa5{font-size:1.2rem}p.svelte-grpwa5::after{content:\"The quick brown fox jumped over the lazy dog.\"}@media(max-width: 500px){p.svelte-grpwa5::after{content:\"The quick brown fox etc.\"\n\t\t}}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);