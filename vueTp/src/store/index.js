import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user';
import organize from './modules/organize';
import address from './modules/address';
import msg from './modules/msg';
import webSocket from './modules/webSocket';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    // 用户模块
    user,
    // 组织模块
    organize,
    // 地址模块
    address,
    // 消息模块
    msg,
    // websocket模块
    webSocket
  }
  // strict: true //严格模式
});
