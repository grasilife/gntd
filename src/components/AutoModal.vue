<template>
  <Modal
    v-model="modalState"
    :title="title"
    closable
    scrollable
    @on-visible-change="modelVisibleChange"
    mask
    :width="width"
  >
    <div slot="footer">
      <Button type="text" size="large" @click="modelCancel">取消</Button>
      <Button type="primary" size="large" @click="modelOk">确定</Button>
    </div>
    <div :style="modelSize">
      <el-form
        ref="newFormCustom"
        :model="newFormCustom"
        label-position="left"
        :label-width="80 + 'px'"
        :rules="newRuleCustom"
      >
        <ul>
          <li
            class="formList"
            v-for="(item, index) in formListData"
            :key="index"
          >
            <div class="formItem" v-if="item.type == 'input'">
              <el-form-item :prop="item.key" :label="item.name">
                <el-input
                  size="small"
                  type="text"
                  v-model="newFormCustom[item.key]"
                  :placeholder="'请输入' + item.name"
                />
              </el-form-item>
            </div>
            <div class="formItem" v-if="item.type == 'select'">
              <el-form-item :prop="item.key" :label="item.name">
                <el-select
                  size="small"
                  v-model="newFormCustom[item.key]"
                  :placeholder="'请选择' + item.name"
                >
                  <el-option
                    :value="optionListItem.value"
                    :label="optionListItem.label"
                    v-for="(optionListItem, optionListIndex) in item.optionList"
                    :key="optionListIndex"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>
          </li>
        </ul>
      </el-form>
    </div>
  </Modal>
</template>

<script>
// import { mapState } from "vuex";
export default {
  components: {},
  props: {
    title: {
      type: String,
      required: true,
      default: function() {
        return "";
      }
    },
    width: {
      type: String,
      required: true,
      default: function() {
        return "200";
      }
    },
    height: {
      type: String,
      required: true,
      default: function() {
        return "200";
      }
    },
    formListData: {
      type: Array,
      required: true,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      modelSize: {
        width: "100%",
        height: this.height + "px"
      },
      pathWayList: [],
      editStateId: null,
      newFormCustom: {},
      newRuleCustom: {},
      modalState: false
    };
  },
  methods: {
    creactExtentFrom() {
      let formListData = this.formListData;
      for (let i = 0; i < formListData.length; i++) {
        let formRes = formListData[i];
        let key = formRes.key;
        this.$set(this.newFormCustom, key, "");
        // this.$set(this.newRuleCustom, key, formRes.rules);
        this.newRuleCustom[key] = formRes.rules;
      }
    },
    modelOk: function() {
      let thisp = this;
      let newFormCustom = thisp.newFormCustom;
      console.log(newFormCustom, this.newRuleCustom, "表单");
      this.$refs.newFormCustom.validate(valid => {
        console.log(valid, "huhuhuhuhu");
        if (valid) {
          thisp.$emit("autoModelOk", newFormCustom);
        }
      });
    },
    modelCancel: function() {
      this.modalState = false;
    },
    modelOpen: function() {
      this.modalState = true;
    },
    modelVisibleChange: function(e) {
      if (e == false) {
        this.$refs.newFormCustom.resetFields();
      }
    }
  },
  beforeCreate() {},
  created() {},
  mounted() {
    this.creactExtentFrom();
  }
};
</script>

<style scoped lang="scss">
.formList {
  text-decoration: none;
  list-style: none;
  height: 60px;
  color: #515a6e;
  font-size: 14px;
  padding: 0px 10px 0px 10px;
  float: left;
}
.formItem {
  width: 280px;
  float: left;
}
</style>
