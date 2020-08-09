import __SNOWPACK_ENV__ from '/__snowpack__/env.js';
import.meta.env = __SNOWPACK_ENV__;

import App2 from "./App.js";
import {state$} from "./stores/state.js";
const app = new App2({
  target: document.body,
  props: {
    state$
  }
});
export default app;
if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    app.$destroy();
  });
}
