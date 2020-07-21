
const code = ".text.svelte-1583b8t{display:grid;grid-template-columns:repeat(2, 1fr);grid-auto-flow:column;gap:16px 16px}p.svelte-1583b8t{font-size:0.9rem;margin-top:4px}@media(max-width: 900px){.text.svelte-1583b8t{display:block}.leading-cell.svelte-1583b8t{margin-bottom:24px}.leading-cell.svelte-1583b8t:last-child{margin:0}}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);