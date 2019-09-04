<template>
  <div class="container">
    <el-form
      ref="formCustom"
      :model="formCustom"
      label-position="left"
      label-width="80px"
      :rules="ruleCustom"
      class="container"
    >
      <div class="filterContainer">
        <ul class="container">
          <li class="tablefilterList">
            <div class="formItem">
              <el-form-item
                :prop="defaultSearch.key"
                :label="defaultSearch.name"
              >
                <el-input
                  size="small"
                  type="text"
                  v-model="formCustom.name"
                  :placeholder="'请输入' + defaultSearch.name"
                />
              </el-form-item>
            </div>
          </li>
          <li
            class="tablefilterList"
            v-for="(item, index) in extentSearch"
            :key="index"
          >
            <div class="formItem" v-if="item.type == 'input'">
              <el-form-item :prop="item.key" :label="item.name">
                <el-input
                  size="small"
                  type="text"
                  v-model="formCustom[item.key]"
                  :placeholder="'请输入' + item.name"
                />
              </el-form-item>
            </div>
            <div class="formItem" v-if="item.type == 'select'">
              <el-form-item :prop="item.key" :label="item.name">
                <el-select
                  size="small"
                  v-model="formCustom[item.key]"
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
          <li class="tablefilterList">
            <Button type="primary" @click="searchClick('formCustom')"
              >搜索</Button
            >
          </li>
          <li class="tablefilterList">
            <Button @click="reset('formCustom')">重置</Button>
          </li>
          <!-- <li class="tablefilterList">
            <Button @click="filterSwitch">
              <span>{{ filetrTitle }}</span
              ><Icon type="ios-arrow-up" v-if="!iconState" /><Icon
                type="ios-arrow-down"
                v-if="iconState"
              />
            </Button>
          </li> -->
          <li class="tablefilterListRight">
            <template>
              <slot></slot>
            </template>
          </li>
        </ul>
      </div>
    </el-form>
  </div>
</template>
<script>
// import { mapState, mapMutations, mapActions, mapGetters, Store } from "vuex";
export default {
  components: {},
  props: {
    defaultSearch: {
      type: Object,
      required: true,
      default: function() {
        return {
          name: "名称",
          key: "name",
          labelWidth: "60px"
        };
      }
    },
    extentSearch: {
      type: Array,
      required: false,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      filetrTitle: "展开  ",
      iconState: true,
      editStateId: null,
      formCustom: {},
      ruleCustom: {},
      editHistory: {
        state: false,
        name: ""
      }
    };
  },
  mounted() {
    this.creactDefaultFrom();
    this.creactExtentFrom();
  },
  computed: {},
  methods: {
    creactDefaultFrom() {
      let defaultSearch = this.defaultSearch;
      let key = defaultSearch.key;
      this.$set(this.formCustom, key, "");
      //   this.$set(this.ruleCustom, key, defaultSearch.rules);
      this.ruleCustom[key] = defaultSearch.rules;
    },
    creactExtentFrom() {
      let extentSearch = this.extentSearch;
      for (let i = 0; i < extentSearch.length; i++) {
        let formRes = extentSearch[i];
        let key = formRes.key;
        this.$set(this.formCustom, key, "");
        this.ruleCustom[key] = formRes.rules;
        // this.$set(this.ruleCustom, key, formRes.rules);
      }
    },
    filterSwitch() {
      this.iconState = !this.iconState;
      if (this.iconState == true) {
        this.filetrTitle = "展开  ";
      } else {
        this.filetrTitle = "折叠  ";
      }
    },
    reset(name) {
      this.$refs[name].resetFields();
    },

    searchClick: function(name) {
      var thisp = this;
      this.$refs[name].validate(valid => {
        if (valid) {
          console.log(thisp.$refs, "搜索");
          //   var name = this.formCustom.name;
          //   var currentPage = thisp.page;
          //   var pageSize = thisp.pageSize;
          //   this.$store.dispatch(
          //     "page/homePage/platformManagement/indexPage/craneManagement/byPage",
          //     {
          //       currentPage: currentPage,
          //       pageSize: pageSize,
          //       condition: {
          //         name: name
          //       }
          //     }
          //   );
        }
      });
    }
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  padding: 0px 10px 0px 10px;
}
.filterContainer {
  width: 100%;
  height: 60px;
}
.tablefilterList {
  text-decoration: none;
  list-style: none;
  height: 60px;
  color: #515a6e;
  font-size: 14px;
  padding: 0px 10px 0px 10px;
  float: left;
}
.tablefilterListRight {
  text-decoration: none;
  list-style: none;
  height: 60px;
  color: #515a6e;
  font-size: 14px;
  padding: 0px 10px 0px 10px;
  float: right;
}
.formItem {
  width: 280px;
  float: left;
}
</style>
