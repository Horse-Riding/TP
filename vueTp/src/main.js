import 'vue-event-calendar/dist/style.css';
import Vue from 'vue';
import App from './App';
import router from './router';
import iView from 'iview';
import store from './store';
import ajax from './common/js/newAxios';
import apis from './store/apis';
import Vuex from 'vuex';
import tools from './common/js/tools';
import VueSocketio from 'vue-socket.io';
import col from './common/js/colors';
import publicVariable from './common/js/config';
import 'iview/dist/styles/iview.css';
// 图片预览组件
import preview from 'vue-photo-preview';
import 'vue-photo-preview/dist/skin.css';
// 日历组件

import vueEventCalendar from 'vue-event-calendar';

// 日历组件end
import '../static/common.css';
import '../static/icons.css';
import '../static/recss.css';
import '../static/reiview.css';

Vue.use(VueSocketio, apis.msgSocket);
Vue.use(iView, {
  transfer: true,
  size: 'small'
});
Vue.use(vueEventCalendar, {locale: 'zh'});
Vue.use(preview);
// 全局设置
Vue.prototype.$http = ajax;
// Vue.prototype.$http.defaults.headers['Content-Type'] = 'application/json';
// Vue.prototype.$http.defaults.headers['Access-Control-Allow-Origin'] = '*';
// Vue.prototype.$http.defaults.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT,DELETE';
// Vue.prototype.$http.defaults.headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type';
Vue.prototype.$apis = apis;
Vue.prototype.$tools = tools;
Vue.prototype.$col = col;
Vue.prototype.$pConst = publicVariable;
Vue.config.productionTip = false;

//  路由器登陆拦截
router.beforeEach((to, from, next) => {
  // 判断该路由是否需要登录权限
  if (to.meta.requireAuth) {
    // 通过vuex state获取当前的token是否存在
    if ((store.state.user.userInfo === null || store.state.user.userInfo === {}) && (JSON.parse(localStorage.getItem('userInfo')) === null)) {
      next({
        path: '/login',
        // 将跳转的路由path作为参数，登录成功后跳转到该路由
        query: {redirect: to.fullPath}
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    history: []
  },
  router,
  store,
  Vuex,
  apis,
  methods: {
  // 刷新页面或者从别的页面进入，提取this.history的值
    getPageData: function() {
      // 使用getItem方法的前提是，你再自己需要的地方使用了setItem方法
      this.history = JSON.parse(localStorage.getItem('this.history'));
    }
  },
  // 钩子函数，在实例被创建之后被调用，调用getPageData()
  created: function() {
    this.getPageData();
  },
  components: { App },
  template: '<App/>'
});
