<template>
  <div class="contain">
    <div class="breadcrumb">
      <AutoBreadcrumb> </AutoBreadcrumb>
    </div>
    <div class="tablefilter">
      <SearchFilter :defaultSearch="defaultSearch" :extentSearch="extentSearch">
        <template v-slot:default="slotProps">
          <ul class="container">
            <li class="tablefilterList">
              <Button type="primary" @click="newInfo">新建</Button>
            </li>
            <li class="tablefilterList">
              <Button type="error" @click="deleteInfo">删除</Button>
            </li>
          </ul>
        </template>
      </SearchFilter>
    </div>
    <div class="tableContain">
      <AutoTable
        @selection-change="selectionChange"
        :data="tableData"
        :total="total"
        :tableStructure="tableStructure"
        @on-change="pageChange"
        @on-page-size-change="pageSizeChange"
      >
        <template v-slot:operation="slotProps">
          <el-button size="mini" @click="tableEdit(slotProps)">编辑</el-button>
          <el-button size="mini" type="danger" @click="tableDelete(slotProps)"
            >删除</el-button
          >
        </template>
      </AutoTable>
    </div>
    <AutoModal
      ref="AutoModal"
      :title="autoModelArguments.title"
      :width="autoModelArguments.width"
      :height="autoModelArguments.height"
      :formListData="autoModelArguments.formListData"
      @autoModelOk="autoModalOk"
    ></AutoModal>
  </div>
</template>

<script>
import AutoModal from "@/components/AutoModal";
import AutoBreadcrumb from "@/components/AutoBreadcrumb";
import AutoTable from "@/components/AutoTable";
import SearchFilter from "@/components/SearchFilter";
import { getTableData } from "@/api/mock/table.js";
// import { mapState } from "vuex";
export default {
  components: {
    AutoBreadcrumb,
    AutoTable,
    SearchFilter,
    AutoModal
  },
  data() {
    return {
      autoModelArguments: {
        title: "新建垃圾分类词条",
        width: "640",
        height: "105",
        formListData: [
          {
            type: "input",
            name: "垃圾名称",
            key: "name2",
            rules: [
              { required: true, message: "请输入垃圾名称", trigger: "blur" }
            ]
          },
          {
            type: "input",
            name: "垃圾名称",
            key: "namewee",
            rules: [
              { required: true, message: "请输入垃圾名称", trigger: "blur" }
            ]
          },
          {
            type: "select",
            name: "垃圾类别",
            key: "type",
            optionList: [
              {
                value: 1,
                label: "可回收物"
              },
              {
                value: 2,
                label: "可回收物2"
              }
            ],
            rules: [
              { required: true, message: "请选择垃圾类别", trigger: "change" }
            ]
          }
        ]
      },
      defaultSearch: {
        name: "垃圾名称",
        key: "name",
        // labelWidth: 80,
        rules: [
          {
            required: true,
            message: "请输入垃圾名称",
            trigger: ["blur", "change"]
          }
        ]
      },
      extentSearch: [
        {
          type: "input",
          name: "垃圾类别",
          key: "type",
          rules: [
            {
              required: true,
              message: "请选择垃圾类别",
              trigger: ["blur", "change"]
            }
          ]
        },
        {
          type: "select",
          name: "垃圾类别",
          key: "type2",
          optionList: [
            {
              value: 1,
              label: "可回收物"
            }
          ],
          rules: [
            {
              required: true,
              message: "请选择垃圾类别",
              trigger: ["blur", "change"]
            }
          ]
        }
      ],

      tableData: [],
      total: 0,
      tableStructure: [
        {
          fixed: "left",
          type: "selection",
          width: "55",
          align: "center"
        },
        {
          fixed: "left",
          label: "序号",
          width: "100",
          type: "index",
          align: "center"
        },
        {
          label: "垃圾名称",
          prop: "name",
          "min-width": "200",
          "show-overflow-tooltip": true,
          resizable: true,
          align: "center"
        },
        {
          label: "垃圾类别",
          prop: "type",
          "min-width": "200",
          align: "center"
        },
        {
          label: "垃圾唯一标识符",
          prop: "hash",
          width: "200",
          "min-width": "200",
          align: "center"
        },
        {
          label: "添加时间",
          prop: "state",
          width: "100",
          "min-width": "200",
          align: "center"
        },
        {
          label: "状态更新时间",
          prop: "updateTime",
          width: "200",
          "min-width": "200",
          align: "center"
        },
        {
          label: "备注",
          prop: "comment",
          "min-width": "200",
          align: "center"
        },
        {
          label: "操作",
          prop: "operation",
          fixed: "right",
          "min-width": "200",
          align: "center"
        }
      ]
    };
  },
  //   computed: {
  //     ...mapState({
  //       list: state =>
  //         state.page.homePage.platformManagement.indexPage.craneManagement.list,
  //       pathWayList: state =>
  //         state.page.homePage.platformManagement.indexPage.pathwayManagement
  //           .allRailList,
  //       total: state =>
  //         state.page.homePage.platformManagement.indexPage.craneManagement.total
  //     })
  //   },
  beforeCreate() {},
  created() {},
  mounted() {
    let data = {
      page: 1,
      pageSize: 10
    };
    this.getTableDataMethod(data);
  },
  methods: {
    autoModalOk(FormCustom) {
      console.log(FormCustom, "表单提交");
    },
    newInfo: function() {
      this.autoModelArguments.title = "新建垃圾分类词条";
      this.$refs.AutoModal.modelOpen();
    },
    tableEdit(e) {
      this.autoModelArguments.title = "编辑垃圾分类词条";
      this.$refs.AutoModal.modelOpen();
      console.log(e, "点击事件");
    },
    deleteInfo: function() {
      var thisp = this;
      var currentPage = thisp.page;
      var pageSize = thisp.pageSize;
      if (thisp.ids.length == 0) {
        this.$Message.error("请点击表格中的多选");
      } else {
        this.$store
          .dispatch(
            "page/homePage/platformManagement/indexPage/craneManagement/deleting",
            {
              ids: thisp.ids
            }
          )
          .then(function(data) {
            if (data.status == "success") {
              thisp.$store.dispatch(
                "page/homePage/platformManagement/indexPage/craneManagement/byPage",
                {
                  currentPage: currentPage,
                  pageSize: pageSize
                }
              );
            }
          });
      }
    },
    pageChange: function(e) {
      //页码改变的回调，返回改变后的页码
      console.log(e, "翻页");
      this.getTableDataMethod(e);
    },
    pageSizeChange: function(e) {
      // 切换每页条数时的回调，返回切换后的每页条数
      console.log(e, "切换条数");
      this.getTableDataMethod(e);
    },
    getTableDataMethod(data) {
      let thisp = this;
      getTableData(data).then(function(res) {
        console.log(res, "mock接口测试");
        if (res.code == 0) {
          thisp.tableData = res.data;
          thisp.total = res.total;
          console.log(thisp.total, "页码");
        } else {
          this.$Message.error("服务错误,请刷新页面");
        }
      });
    },

    selectionChange(ids, selectDatas) {
      console.log(ids, selectDatas, "表格多选");
    }
  }
};
</script>

<style scoped lang="scss">
.contain {
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow: auto;
}

.breadcrumb {
  width: 100%;
  float: left;
  height: 40px;
  padding: 0px 0px 20px 0px;
  box-sizing: border-box;
}

.tablefilter {
  width: 100%;
  float: left;
  background: #fff;
  padding: 28px 0px 0px 0px;
  margin: 0px 0px 10px 0px;
  border-radius: 6px;
  box-sizing: border-box;
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
.tableContain {
  width: 100%;
  height: calc(100% - 50px - 90px);
  float: left;
  background: #fff;
  overflow-x: auto;
  overflow-y: auto;
}

/* 模态框 */
</style>
