<template>
  <Card>
    <el-table
      :data="data"
      border
      stripe
      highlight-current-row
      style="width: 100%"
      @selection-change="selectionChange"
    >
      <el-table-column
        v-for="(item, index) in tableStructureSlot"
        :key="index"
        v-bind="item"
      >
        <template v-if="item.slotState" v-slot:default="scope">
          <slot :name="item.prop" :slotProps="scope"></slot>
        </template>
      </el-table-column>
    </el-table>
    <div class="pageContain">
      <Page
        :total="total"
        :page-size="pageSize"
        :page-size-opts="pageSizeOpts"
        show-total
        show-elevator
        @on-change="pageChange"
        @on-page-size-change="pageSizeChange"
        show-sizer
      />
    </div>
  </Card>
</template>
<script>
// import { mapState, mapMutations, mapActions, mapGetters, Store } from "vuex";
export default {
  components: {},
  props: {
    data: {
      type: Array,
      required: true,
      default: function() {
        return [];
      }
    },
    tableStructure: {
      type: Array,
      required: true,
      default: function() {
        return [];
      }
    },
    total: {
      type: Number,
      required: true,
      default: function() {
        return 0;
      }
    }
  },
  data() {
    return {
      tableStructureSlot: [],
      //   tableStructure: [
      //     {
      //       fixed: true,
      //       type: "selection",
      //       width: "55",
      //       align: "center"
      //     },
      //     {
      //       fixed: true,
      //       label: "序号",
      //       width: "100",
      //       type: "index",
      //       align: "center"
      //     },
      //     {
      //       label: "垃圾名称",
      //       prop: "name",
      //       width: "100",
      //       "min-width": "200",
      //       "show-overflow-tooltip": true,
      //       resizable: true
      //     },
      //     {
      //       label: "垃圾类别",
      //       prop: "type",
      //       width: "100",
      //       "min-width": "200"
      //     },
      //     {
      //       label: "垃圾唯一标识符",
      //       prop: "hash",
      //       width: "200",
      //       "min-width": "200"
      //     },
      //     {
      //       label: "状态",
      //       prop: "state",
      //       width: "100",
      //       "min-width": "200"
      //     },
      //     {
      //       label: "上传时间",
      //       prop: "uploadTime",
      //       "min-width": "200"
      //     },
      //     {
      //       label: "状态更新时间",
      //       prop: "updateTime",
      //       width: "200",
      //       "min-width": "200"
      //     },
      //     {
      //       label: "备注",
      //       prop: "comment",
      //       width: "100",
      //       "min-width": "200"
      //     },
      //     {
      //       label: "操作",
      //       prop: "operation",
      //       width: "100",
      //       "min-width": "200"
      //     }
      //   ],
      ids: [],
      page: 1,
      selectDatas: [],
      pageSize: 10,
      pageSizeOpts: [10, 20, 30, 40]
    };
  },
  mounted() {
    this.getSlot();
  },
  computed: {},
  methods: {
    getSlot() {
      //插槽处理
      let slots = this.$slots;
      let scopedSlots = this.$scopedSlots;
      console.log(slots, scopedSlots, "插槽啊");
      let tableStructureSlot = JSON.parse(JSON.stringify(this.tableStructure));
      //   处理表格节点是否启用插槽
      for (let i = 0; i < tableStructureSlot.length; i++) {
        let prop = tableStructureSlot[i].prop;
        if (scopedSlots[prop] != undefined) {
          // 判断表格对应的行是否有插槽
          //   如果有则加入slotState属性
          tableStructureSlot[i] = Object.assign({}, tableStructureSlot[i], {
            slotState: true
          });
        } else {
          tableStructureSlot[i] = Object.assign({}, tableStructureSlot[i], {
            slotState: false
          });
        }
        this.tableStructureSlot.push(tableStructureSlot[i]);
      }
    },
    selectionChange: function(e) {
      //表格多选
      let ids = [];
      let selectDatas = [];
      for (var i = 0; i < e.length; i++) {
        ids.push(e[i].id);
        selectDatas.push(e[i]);
      }
      this.ids = ids;
      this.selectDatas = selectDatas;
      this.$emit("selection-change", ids, selectDatas);
    },
    tableEdit: function(e) {
      this.editHistory = {
        state: true,
        name: e.row.name
      };
      this.title = "编辑车辆类型";
      this.modalState = true;
      this.newFormCustom = {
        name: e.row.name,
        type: e.row.type,
        railId: e.row.railId
      };
      this.editStateId = e.row.id;
    },
    tableDelete: function(e) {
      let id = e.row.id;
      var thisp = this;
      var currentPage = thisp.page;
      var pageSize = thisp.pageSize;
      this.$store
        .dispatch(
          "page/homePage/platformManagement/indexPage/craneManagement/deleting",
          {
            ids: [id]
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
    },
    pageChange: function(e) {
      //页码改变的回调，返回改变后的页码
      let thisp = this;
      //点击翻页清除多选的行数据,防止误删除
      thisp.ids = [];
      thisp.page = e;
      let pageData = {
        page: thisp.page,
        pageSize: thisp.pageSize
      };
      this.$emit("on-change", pageData);
    },
    pageSizeChange: function(e) {
      // 切换每页条数时的回调，返回切换后的每页条数
      let thisp = this;
      thisp.pageSize = e;
      let pageData = {
        page: thisp.page,
        pageSize: thisp.pageSize
      };
      //点击翻页清除多选的行数据,防止误删除
      thisp.ids = [];
      this.$emit("on-page-size-change", pageData);
    }
  }
};
</script>

<style scoped>
.pageContain {
  width: 100%;
  padding: 20px 0px 0px 0px;
}
</style>
