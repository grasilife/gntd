import * as components from "./components";

const install = function(Vue) {
  if (install.installed) {
    return;
  }
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key]);
  });
};

export default {
  install
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(install);
}
