<template>
  <div class="demo">
    <h2>📌 简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
  </div>
</template>

<script>
import WButton from "../../../src/components/Button/Button";
import WButtonGroup from "../../../src/components/Button/ButtonGroup";
import WIcon from "../../../src/components/Icon/Icon";
import mixin from "../mixin";
export default {
  name: "demo",
  mixins: [mixin],
  components: {
    WButton,
    WIcon,
    WButtonGroup
  },
  data() {
    return {
    };
  }
};
</script>

<style scoped></style>
