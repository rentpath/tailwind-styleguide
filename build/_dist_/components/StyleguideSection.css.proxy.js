
const code = ".styleguide-section.svelte-11ym23w.svelte-11ym23w{display:flex;margin-bottom:var(--section-margin)}.left.svelte-11ym23w.svelte-11ym23w{width:var(--left-column-width);margin-right:var(--common-gutter);position:relative}.sticky.svelte-11ym23w.svelte-11ym23w{position:sticky;top:var(--common-gutter)}.right.svelte-11ym23w.svelte-11ym23w{flex:1}h2.svelte-11ym23w.svelte-11ym23w{font-size:2rem;font-weight:800}em.svelte-11ym23w.svelte-11ym23w{font-style:normal;color:#999}.variants.svelte-11ym23w.svelte-11ym23w{display:flex;flex-wrap:wrap;margin-top:10px}.variants.svelte-11ym23w li.svelte-11ym23w{padding:4px 12px;font-size:0.8rem;margin-right:8px;margin-bottom:8px;background-color:#2a62f5;color:#FFF;font-weight:600;border-radius:12px;border-top-left-radius:0;box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05)}@media(max-width: 768px){.styleguide-section.svelte-11ym23w.svelte-11ym23w{flex-direction:column}.left.svelte-11ym23w.svelte-11ym23w{flex:1;width:auto;margin:0 0 var(--common-gutter) 0}}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);