
const code = "body{padding:32px;font-size:16px;font-family:\"Raleway\", sans-serif;color:#333}:root{--common-gutter:32px;--left-column-width:320px;--section-margin:64px}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);