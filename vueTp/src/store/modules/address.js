import jsonAddress from '../../common/js/address';
const state = {
  // tabs当前状态
  addressData: []
};
// getters
const getters = {
};

// actions
const actions = {
  // 获取地区数据
  getAddressList({commit, state}) {
    commit('saveaddress', jsonAddress);
  }
};

// mutations
const mutations = {
  // 保存地址数据
  saveaddress (state, datajson) {
    state.addressData = datajson;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
