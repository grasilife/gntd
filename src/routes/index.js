let routes = [
  //管理页面*
  {
    path: "/management",
    name: "management",
    title: "用户管理",
    redirect: "/management/OwnManagement",
    children: [
      {
        path: "/management/OwnManagement",
        name: "OwnManagement",
        title: "个人信息管理",
        component: () => import("@/views/management/OwnManagement.vue")
      },
      // 用户管理
      {
        path: "/management/UserManagement",
        name: "UserManagement",
        title: "用户信息管理",
        component: () => import("@/views/management/UserManagement.vue")
      }
    ]
  },
  //个人管理

  // 运营*
  {
    path: "/operations",
    name: "operations",
    title: "运营",
    redirect: "/operations/ContributionList",
    children: [
      {
        path: "/operations/ContributionList",
        name: "ContributionList",
        title: "贡献榜",
        component: () => import("@/views/operations/ContributionList.vue")
      }
    ]
  },
  //贡献榜

  // 个人数据管理*
  {
    path: "/ownData",
    name: "ownData",
    title: "个人数据",
    redirect: "/ownData/RawData",
    children: [
      //原始数据
      {
        path: "/ownData/RawData",
        name: "ownRawData",
        title: "原始数据",
        component: () => import("@/views/ownData/RawData.vue")
      },
      //数据处理
      {
        path: "/ownData/DataProcessing",
        name: "ownDataProcessing",
        title: "数据处理",
        component: () => import("@/views/ownData/DataProcessing.vue")
      },
      //数据审核
      {
        path: "/ownData/DataAuditing",
        name: "ownDataAuditing",
        title: "数据审核",
        component: () => import("@/views/ownData/DataAuditing.vue")
      },
      // 未通过审核
      {
        path: "/ownData/DataUnapproved",
        name: "ownDataUnapproved",
        title: "数据审核未通过",
        component: () => import("@/views/ownData/DataUnapproved.vue")
      },
      //通过审核
      {
        path: "/ownData/DataApproved",
        name: "ownDataApproved",
        title: "数据审核通过",
        component: () => import("@/views/ownData/DataApproved.vue")
      },
      //上线数据
      {
        path: "/ownData/DataOline",
        name: "ownDataOline",
        title: "上线数据",
        component: () => import("@/views/ownData/DataOline.vue")
      }
    ]
  },

  //用户数据管理*
  {
    path: "/userData",
    name: "userData",
    title: "用户数据",
    redirect: "/userData/RawData",
    children: [
      //原始数据
      {
        path: "/userData/RawData",
        name: "userRawData",
        title: "原始数据",
        component: () => import("@/views/userData/RawData.vue")
      },
      //数据处理
      {
        path: "/userData/DataProcessing",
        name: "userDataProcessing",
        title: "数据处理",
        component: () => import("@/views/userData/DataProcessing.vue")
      },
      //数据审核
      {
        path: "/userData/DataAuditing",
        name: "userDataAuditing",
        title: "数据审核",
        component: () => import("@/views/userData/DataAuditing.vue")
      },
      // 未通过审核
      {
        path: "/userData/DataUnapproved",
        name: "userDataUnapproved",
        title: "数据审核未通过",
        component: () => import("@/views/userData/DataUnapproved.vue")
      },
      //通过审核
      {
        path: "/userData/DataApproved",
        name: "userDataApproved",
        title: "数据审核通过",
        component: () => import("@/views/userData/DataApproved.vue")
      },
      //上线数据
      {
        path: "/userData/DataOline",
        name: "userDataOline",
        title: "上线数据",
        component: () => import("@/views/userData/DataOline.vue")
      }
    ]
  }
];
export default routes;
