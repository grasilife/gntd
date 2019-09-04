// 扩展 VuePress 应用
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/zh-CN";
import ComponentLibrary from "../../src/install";
import hljs from "highlight.js";
//样式文件,这里我选的是sublime样式，文件里面还有其他样式可供选择
import "highlight.js/styles/color-brewer.css";
import './public/index.scss'
import './public/table.scss'
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  // ...做一些其他的应用级别的优化
  Vue.use(Element, { locale });
  Vue.use(ComponentLibrary);
  Vue.directive("highlight", function(el) {
    let blocks = el.querySelectorAll("pre code");
    blocks.forEach(block => {
      hljs.highlightBlock(block);
    });
  });
};
