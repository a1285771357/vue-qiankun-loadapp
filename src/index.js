import MicroAppWithMemoHistory from './MicroAppWithMemoHistory.vue';

// 为组件提供 install 安装方法，供按需引入
MicroAppWithMemoHistory.install = function (Vue) {
    Vue.component('MicroAppWithMemoHistory', MicroAppWithMemoHistory);
}

// 默认导出组件
export default MicroAppWithMemoHistory;