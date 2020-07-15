
const code = ".styleguide-section.svelte-ia9yfb{display:flex;margin-bottom:var(--section-margin)}.left.svelte-ia9yfb{width:var(--left-column-width);margin-right:var(--common-gutter);position:relative}.sticky.svelte-ia9yfb{position:sticky;top:var(--common-gutter)}.right.svelte-ia9yfb{flex:1}h2.svelte-ia9yfb{font-size:2rem;font-weight:800}em.svelte-ia9yfb{font-style:normal;color:#999}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);