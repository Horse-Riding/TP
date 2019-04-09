import axios from '../../common/js/newAxios';
import apis from '../apis';
const state = {
  // ————————消息中心-消息——————————/*/
  // 管理中心-消息tabs当前状态
  currentModule: '',
  // 管理中心-消息-从新编辑类型0默认，1回复，2转发
  reSendType: 0,
  // 管理中心-消息-源消息数组
  yuanMessage: [],
  // 管理中心-消息-回复消息/转发消息内容
  yuanHtml: '',
  // 管理中心-消息-当前未读消息列表
  noSeeMessageList: [],
  // 管理中心-消息-消息详情axios参数
  argMsgDetail: '',
  // 管理中心-消息-消息中心/消息路由状态
  msgCurrentRoute: 1,
  // 管理中心-消息-消息中心-源页面状态--回滚操作使用
  yuanPageState: {},
  // ————————消息中心-审批——————————/*/
  // 管理中心-消息-审批路由状态
  msgCurrentExaminRote: 1,
  // 管理中心-消息-审批-菜单导航选项卡状态
  msgCurrentExaminMenu: 1
};
// getters
const getters = {
  // 获取工作任务消息数目
  msgWorkTask(state) {
    if (state.noSeeMessageList.taskwork === undefined) {
      return {
        's1': 0,
        's2': 0,
        'total': 0
      };
    } else {
      // console.log('查询');
      // console.log(state.noSeeMessageList.taskwork);
      let newObj = {
        's1': state.noSeeMessageList.taskwork[1],
        's2': state.noSeeMessageList.taskwork[2],
        'total': parseInt(state.noSeeMessageList.taskwork[1]) + parseInt(state.noSeeMessageList.taskwork[2])
      };
      // console.log(newObj);
      return newObj;
    }
    // totalNum = state.noSeeMessageList.message[8];
    // return totalNum;
  },
  // 获取会议消息数目
  msgMeeting(state) {
    if (state.noSeeMessageList.message === undefined) {
    } else {
      return (state.noSeeMessageList.message[8]);
    }
    // totalNum = state.noSeeMessageList.message[8];
    // return totalNum;
  },
  // 获取未读消息数目
  msgTotal(state) {
    let totalNum = 0;
    if (state.noSeeMessageList.message === undefined) {
      return 0;
    } else {
      for (let i in state.noSeeMessageList.message) {
        if (parseInt(i) < 8) {
          totalNum += state.noSeeMessageList.message[i];
        }
      }
      return totalNum;
    }
  },
  examinTotal(state) {
    let totalNum = 0;
    // console.log(typeof state.noSeeMessageList.approvalwork === 'object');
    if (typeof state.noSeeMessageList.approvalwork === 'object') {
      for (let i in state.noSeeMessageList.approvalwork[1]) {
        totalNum += state.noSeeMessageList.approvalwork[1][i];
      }
      for (let j in state.noSeeMessageList.approvalwork[4]) {
        totalNum += state.noSeeMessageList.approvalwork[4][j];
      }
    }
    return totalNum;
  }
};

// actions
const actions = {
  // ————————消息中心-消息——————————/*/
  // 获取消息数目列表
  getMsgNumList({commit, state}, params) {
    axios.apost(apis.noSeeMsgList, params).then((data) => {
      // console.log('已刷新消息数目');
      if (data.state === 1) {
        // console.log(data.list);
        commit('saveMsgNumList', data.list);
      }
    });
  }
};

// mutations
const mutations = {
  // ————————消息中心-消息——————————/*/
  // 保存消息中心/消息当前选项卡状态
  savetCurrentModule (state, current) {
    state.currentModule = current;
  },
  // 设置源消息
  saveYuanMessageList(state, contentObj) {
    state.reSendType = contentObj.type;
    state.yuanMessage = contentObj.list;
  },
  // 清空源消息
  clearYuanMessageList(state) {
    state.reSendType = 0;
    state.yuanMessage = [];
    state.yuanHtml = '';
  },
  // 获取回复转发消息内容
  getYuanHtml(state, currentUser) {
    if (state.yuanMessage.length > 0) {
      for (let i = 0; i < state.yuanMessage.length; i++) {
        // 获取附件
        let fujian = '';
        state.yuanMessage[i].attachments.forEach(function(item, index, arr) {
          fujian += ` <a style="color:#017be1" href="${item.file}">${item.name}</a> `;
        });
        // 获取转发内容
        if (state.yuanMessage[i].sender_name) {
          state.yuanHtml += `<div class="yuan-content">
                           <div class="yuan-header">
                             <p><strong>发件人：</strong>${state.yuanMessage[i].sender_name}</p>
                             <p><strong>标题：</strong>${state.yuanMessage[i].title}</p>
                             <p><strong>创建时间：</strong>${state.yuanMessage[i].created}</p>
                             <p><strong>附件：</strong>${fujian}</p>
                           </div>
                           <div class="yuan-body"><strong>消息内容：</strong><br/>
                           ${state.yuanMessage[i].content}
                           </div></div>`;
        } else {
          state.yuanHtml += `<div class="yuan-content">
                           <div class="yuan-header">
                             <p><strong>发件人：</strong>${currentUser}</p>
                             <p><strong>标题：</strong>${state.yuanMessage[i].title}</p>
                             <p><strong>创建时间：</strong>${state.yuanMessage[i].created}</p>
                             <p><strong>附件：</strong>${fujian}</p>
                           </div>
                           <div class="yuan-body"><strong>消息内容：</strong><br/>
                           ${state.yuanMessage[i].content}
                           </div></div>`;
        }
      }
    }
  },
  // 保存未读消息列表
  saveMsgNumList(state, params) {
    // console.log(params);
    state.noSeeMessageList = params;
  },
  // 保存消息详情参数
  saveMsgDetail(state, obj) {
    state.argMsgDetail = obj;
  },
  // 保存 转发/回复 之前的页面状态
  saveMsgYuanPageState(state, obj) {
    state.yuanPageState = obj;
  },
  // ————————消息中心-审批——————————/*/
  // 保存消息中心/审批当前路由状态
  saveCurrentExaminRote (state, current) {
    state.msgCurrentExaminRote = current;
  },
  // 保存消息中心/审批当前选项卡状态
  saveCurrentExaminMenu (state, current) {
    state.msgCurrentExaminMenu = current;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
