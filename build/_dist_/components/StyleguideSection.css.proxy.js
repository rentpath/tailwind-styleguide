
const code = ".styleguide-section.svelte-4qtfyd{display:flex;margin-bottom:var(--section-margin)}.left.svelte-4qtfyd{width:var(--left-column-width);margin-right:var(--common-gutter);position:relative}.sticky.svelte-4qtfyd{position:sticky;top:var(--common-gutter)}.right.svelte-4qtfyd{flex:1}h2.svelte-4qtfyd{font-size:2rem;font-weight:800}em.svelte-4qtfyd{font-style:normal;color:#999}@media(max-width: 768px){.styleguide-section.svelte-4qtfyd{flex-direction:column}.left.svelte-4qtfyd{flex:1;width:auto;margin:0 0 var(--common-gutter) 0}}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);