import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
export default new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "home",
      title: "首页局部",
      component: () => import("@/views/Home.vue"),
      redirect: "/home/video",
      children: []
    },
    //注册*
    {
      path: "/login",
      name: "login",
      title: "登录"
      //   component: () => import("@/views/login/index.vue")
    },
    {
      path: "/register",
      name: "register",
      title: "注册",
      component: () => import("@/views/register/index.vue")
    }
  ]
});
