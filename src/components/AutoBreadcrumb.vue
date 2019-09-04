<template>
  <Breadcrumb>
    <BreadcrumbItem :to="list[0].router">{{ list[0].title }}</BreadcrumbItem>
    <BreadcrumbItem>{{ list[1].title }}</BreadcrumbItem>
  </Breadcrumb>
</template>
<script>
import routes from "@/routes/index";
import routesMethod from "@/utils/routesMethod";
// import { mapState, mapMutations, mapActions, mapGetters, Store } from "vuex";
export default {
  components: {},
  data() {
    return {
      list: [
        {
          title: "",
          router: ""
        },
        {
          title: "",
          router: ""
        }
      ]
    };
  },
  mounted() {
    this.auto();
  },
  computed: {},
  methods: {
    auto() {
      let pathname = window.location.pathname;
      let pathArray = pathname.split("/");
      let firstRouter = "/" + pathArray[1];
      let DataProcessingMenu = routesMethod(routes);
      for (let i = 0; i < DataProcessingMenu.length; i++) {
        let path = DataProcessingMenu[i].path;
        let title = DataProcessingMenu[i].title;
        if (path == pathname) {
          // 匹配二级面包屑
          this.list[1].title = title;
        }
        if (path == firstRouter) {
          // 匹配一级面包屑
          this.list[0].title = title;
          this.list[0].router = path;
        }
      }
    }
  }
};
</script>

<style scoped></style>
