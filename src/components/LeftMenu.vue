<template>
  <div class="nav">
    <Menu
      accordion
      ref="menu"
      :active-name="activeName"
      :open-names="[opneName]"
      width="240px"
      theme="light"
      @on-select="menuClick"
    >
      <Submenu :name="item.name" v-for="(item, index) in menuList" :key="index">
        <template slot="title">
          <Icon type="ios-analytics" />{{ item.title }}
        </template>
        <MenuItem
          :name="itemChildren.name"
          v-for="(itemChildren, indexChildren) in item.children"
          :key="indexChildren"
          :to="itemChildren.path"
          >{{ itemChildren.title }}</MenuItem
        >
      </Submenu>
    </Menu>
  </div>
</template>

<script>
import routes from "@/routes/index";
import routesMethod from "@/utils/routesMethod";
export default {
  components: {},
  data() {
    return {
      menuList: [],
      opneName: "management",
      activeName: "OwnManagement"
    };
  },
  computed: {},
  methods: {
    routerReload() {
      let pathname = window.location.pathname;
      let DataProcessingMenu = routesMethod(routes);
      for (let i = 0; i < DataProcessingMenu.length; i++) {
        let path = DataProcessingMenu[i].path;
        let name = DataProcessingMenu[i].name;
        if (path == pathname) {
          this.$router.push(path);
          let pathArray = path.split("/");
          this.activeName = name;
          this.opneName = pathArray[1];
        }
      }
    },
    filterMenuList() {
      this.menuList = routes;
      // 手动激活展开菜单和激活菜单
      this.$nextTick(function() {
        this.$refs.menu.updateOpened();
        this.$refs.menu.updateActiveName();
      });
    },
    menuClick: function() {}
  },
  beforeCreate() {},
  created() {},
  mounted() {
    this.filterMenuList();
    this.routerReload();
  }
};
</script>

<style scoped>
.nav {
  width: 100%;
  height: 100%;
}
</style>
