<template>
  <div class="contain">
    <div class="nav">
      <!-- <MyLightNav /> -->
    </div>
    <div class="bottom">
      <router-view />
    </div>
  </div>
</template>
<script>
// import MyLightNav from "@/components/MyLightNav";
export default {
  components: {
    // MyLightNav
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
.contain {
  width: 100%;
  height: 100%;
}
.bottom {
  height: calc(100% - 65px);
  width: 100%;
  float: left;
}
.nav {
  width: 100%;
  height: 65px;
  position: relative;
  float: left;
  z-index: 200;
}
</style>
