import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import Cookies from "js-cookie";
import Element from "element-ui";
import iView from "iview";
import "./icons"; // icon
import "element-ui/lib/theme-chalk/index.css";
import "iview/dist/styles/iview.css";
import "@/styles/index.scss";
Vue.config.productionTip = false;

Vue.use(Element, {
  size: Cookies.get("size") || "medium"
});
Vue.use(iView);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
