
const code = "table.svelte-1i1mlvh.svelte-1i1mlvh{width:100%}tbody.svelte-1i1mlvh tr.svelte-1i1mlvh{border-bottom:1px solid var(--subtle-color)\n\t}thead.svelte-1i1mlvh td.svelte-1i1mlvh{font-weight:600}td.svelte-1i1mlvh.svelte-1i1mlvh{padding:4px 8px}td.svelte-1i1mlvh.svelte-1i1mlvh:first-child{padding-left:0}.measurement.svelte-1i1mlvh.svelte-1i1mlvh{text-align:right}.unit.svelte-1i1mlvh.svelte-1i1mlvh{font-size:0.8rem;color:#999;display:inline-block;padding-left:4px}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);