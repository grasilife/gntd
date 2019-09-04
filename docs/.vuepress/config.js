const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  port: 8081,
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Vue CLI",
      description: "🛠️ Vue.js 开发的标准工具"
    },
    "/en/": {
      lang: "en-US",
      title: "Vue CLI",
      description: "🛠️ Standard Tooling for Vue.js Development"
    }
  },
  head: [
    ["link", { rel: "icon", href: "/favicon.png" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/icons/apple-touch-icon-152x152.png` }
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#3eaf7c"
      }
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/icons/msapplication-icon-144x144.png"
      }
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }]
  ],
  plugins: {
    "@vuepress/pwa": {
      serviceWorker: true,
      updatePopup: {
        "/": {
          message: "发现新内容可用",
          buttonText: "刷新"
        },
        "/en/": {
          message: "New content is available.",
          buttonText: "Refresh"
        }
      }
    }
  },
  theme: "@vuepress/theme-vue",
  themeConfig: {
    repo: "vuejs/vue-cli",
    docsDir: "docs",
    docsBranch: "docs",
    editLinks: true,
    sidebarDepth: 3,
    algolia: {
      indexName: "cli_vuejs",
      apiKey: "f6df220f7d246aff64a56300b7f19f21"
    },
    locales: {
      "/": {
        label: "简体中文",
        selectText: "选择语言",
        lastUpdated: "上次编辑时间",
        editLinkText: "在 GitHub 上编辑此页",
        nav: [
          {
            text: "指南",
            link: "/guide/"
          },
          {
            text: "组件",
            link: "/componentsDocs/"
          },
          {
            text: "配置参考",
            link: "/config/"
          },
          {
            text: "插件开发指南",
            items: [
              { text: "插件开发指南", link: "/dev-guide/plugin-dev.md" },
              { text: "UI 插件信息", link: "/dev-guide/ui-info.md" },
              { text: "UI 插件 API", link: "/dev-guide/ui-api.md" },
              { text: "UI 本地化", link: "/dev-guide/ui-localization.md" }
            ]
          },
          {
            text: "插件",
            items: [
              {
                text: "Babel",
                link:
                  "https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-babel/README.md"
              },
              {
                text: "TypeScript",
                link:
                  "https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-typescript/README.md"
              },
              {
                text: "ESLint",
                link:
                  "https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-eslint/README.md"
              },
              {
                text: "PWA",
                link:
                  "https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-pwa/README.md"
              },
              {
                text: "Jest",
                link:
                  "https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-unit-jest/README.md"
              },
              {
                text: "Mocha",
                link:
                  "https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-unit-mocha/README.md"
              },
              {
                text: "Cypress",
                link:
                  "https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-e2e-cypress/README.md"
              },
              {
                text: "Nightwatch",
                link:
                  "https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-e2e-nightwatch/README.md"
              }
            ]
          },
          {
            text: "更新记录",
            link: "https://github.com/vuejs/vue-cli/blob/dev/CHANGELOG.md"
          }
        ],
        sidebar: {

        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "/src")
      }
    }
  }
};
