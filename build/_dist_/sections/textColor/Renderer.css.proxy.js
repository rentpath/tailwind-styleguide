
const code = ".colors.svelte-8mtak1{display:grid;grid-template-columns:repeat(auto-fill, minmax(420px, 1fr));gap:24px 24px}p.svelte-8mtak1{font-size:1.2rem}em.svelte-8mtak1{font-style:normal;font-weight:normal;font-weight:600;font-size:0.8rem;color:#999}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);