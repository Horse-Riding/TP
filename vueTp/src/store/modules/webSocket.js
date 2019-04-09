
const state = {
  websock: null
};
// getters
const getters = {

};

// actions
const actions = {
  initWebSocket({ commit, state }) {
    // ws地址
    const wsuri = 'http://192.168.11.153:2120';
    state.websock = new WebSocket(wsuri);
    // console.log(new WebSocket(wsuri));
    // 建立连接
    state.websock.onopen = commit('websocketonopen');
    // 连接错误
    state.websock.onerror = commit('websocketonerror');
    // 数据接收
    state.websock.onmessage = commit('websocketonmessage');
    // 关闭连接
    state.websock.onclose = commit('websocketclose');
  }
};
// mutations
const mutations = {

  // 建立连接
  websocketonopen() {
    console.log('WebSocket连接成功');
  },
  // 连接错误
  websocketonerror(e) {
    console.log('WebSocket连接发生错误');
  },
  // 数据接收
  websocketonmessage(e) {
    const redata = JSON.parse(e.data);
    // 注意：长连接我们是后台直接1秒推送一条数据，
    // 但是点击某个列表时，会发送给后台一个标识，后台根据此标识返回相对应的数据，
    // 这个时候数据就只能从一个出口出，所以让后台加了一个键，例如键为1时，是每隔1秒推送的数据，为2时是发送标识后再推送的数据，以作区分
    console.log(redata.value);
  },
  // 关闭连接
  websocketclose(e) {
    console.log('connection closed (' + e.code + ')');
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
