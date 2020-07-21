
const code = "body{padding:32px;font-size:16px;font-family:\"Raleway\", sans-serif;color:#333}:root{--common-gutter:32px;--left-column-width:320px;--section-margin:64px;--stacking-breakpoint:768px;--primary-color:#2a62f5;--subtle-color:#edf2f7;--less-subtle-color:#e2e8f0}#uploader.svelte-14f1tlk{display:none}.drop-handler.svelte-14f1tlk{width:480px;height:480px;background:red}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);