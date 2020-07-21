
const code = ".colors.svelte-z6b7gu{display:grid;grid-template-columns:repeat(auto-fill, minmax(420px, 1fr));gap:24px 24px}p.svelte-z6b7gu{font-size:1.2rem}p.svelte-z6b7gu::after{content:\"The quick brown fox jumped over the lazy dog.\"}em.svelte-z6b7gu{font-style:normal;font-weight:normal;font-weight:600;font-size:0.8rem;color:#999}@media(max-width: 500px){p.svelte-z6b7gu::after{content:\"The quick brown fox etc.\"\n\t\t}}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);