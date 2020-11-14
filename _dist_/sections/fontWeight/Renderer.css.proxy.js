
const code = ".weights.svelte-z95q16{display:grid;grid-template-columns:repeat(auto-fill, minmax(420px, 1fr));gap:24px 24px}@media(max-width: 768px){.colors.svelte-z95q16{grid-template-columns:1fr}}p.svelte-z95q16{font-size:1.2rem;font-family:\"Inter var\", \"system-ui\", -apple-system, \"BlinkMacSystemFont\", \"Segoe UI\", \"Roboto\", \"Helvetica Neue\", \"Arial\", \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\" !important}p.svelte-z95q16::after{content:\"The quick brown fox jumped over the lazy dog.\"}@media(max-width: 500px){p.svelte-z95q16::after{content:\"The quick brown fox etc.\"\n\t\t}}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);