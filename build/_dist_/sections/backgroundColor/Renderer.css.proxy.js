
const code = ".swatches.svelte-1ri21kq{display:grid;grid-template-columns:repeat(auto-fill, minmax(96px, 1fr));gap:24px 24px}.swatch-wrapper.svelte-1ri21kq{display:flex;flex-direction:column;place-items:center}.swatch.svelte-1ri21kq{border-radius:100%;width:96px;height:96px;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);margin-bottom:8px}em.svelte-1ri21kq{font-style:normal;font-weight:normal;font-weight:600;font-size:0.8rem;color:#999}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);