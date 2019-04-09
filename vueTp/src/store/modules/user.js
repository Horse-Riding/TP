// import $http from '../../common/js/newAxios.js';
// import apis from '../apis';
// let url = apis.apis.organize;
// initial state
// shape: [{ id, quantity }]
let key = 'userInfo';
const state = {
  userInfo: null
};
const getters = {
  getUserStorage() {
    if (!state.userInfo) {
      state.userInfo = JSON.parse(localStorage.getItem(key));
    };
    return state.userInfo;
  }
};
// actions
const actions = {
  
};
// mutations
const mutations = {
  // 设置storage登陆状态
  setStorage(state, value) {
    state.userInfo = value;
    localStorage.setItem(key, JSON.stringify(value));
  },
  // 设置storage取消登录状态
  removeStorage(state) {
    state.userInfo = null;
    localStorage.removeItem(key);
  }
};
export default {
  namespaced: true,
  getters,
  state,
  actions,
  mutations
};
