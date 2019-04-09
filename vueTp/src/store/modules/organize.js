import apis from '../apis';
import axios from 'axios';
const state = {
  // 获取选人员数据
  groups: {},
  // 获取选部门数据
  groupsDepart: {},
  // 所有成员列表
  memberlist: [],
  // 公共-选中的成员对象列表
  checkMemberList: [],
  // 公共-选中的部门对象列表
  checkDepartmentList: [],
  // 公共-单选选中的部门对象
  checkDepartmentListOne: [],
  // 公共-在线成员
  onlinelist: [],
  // 公共-级联查询人员列表
  jilianPeople: [],
  // 公共-级联查询部门数据
  jilianDepartment: [],
  // 组织管理-选部门列表
  selectGroupList: {}
};
// getters
const getters = {
  // 获取选中人的id列表
  sendPool(state) {
    let newArr = [];
    state.checkMemberList.forEach(function(cur) {
      newArr.push(cur.uid);
    });
    // return totalNum;
    return newArr;
  }
};

// actions
const actions = {
  // 保存组织
  setGroup({commit, state}, obj) {
    if (obj === undefined) {
    } else {
      let qs = require('qs');
      // console.log(qs.stringify(obj));
      // console.log(obj);
      axios.post(apis.organize, qs.stringify(obj)).then((data) => {
        // console.log(data.data);
        if (data.data.state === 1) {
          let arrSelectGroupMember = [];
          let isCheck = false;
          let newArr = [];
          state.checkMemberList.forEach(function(cur) {
            newArr.push(cur.userid);
          });
          let reCreatSearchSenderMember = function(group, copy) {
            for (let i in group) {
              isCheck = newArr.find((item) => {
                // console.log(item + '-' + group[i].uid);
                return parseInt(item) === parseInt(group[i].uid);
              });
              // console.log(group);
              if (group[i].uid) {
                copy[i] = {
                  title: group[i].member_name,
                  uid: group[i].uid,
                  // userid: group[i].id,
                  value: group[i].id,
                  checked: isCheck,
                  type: 1
                };
              } else {
                copy[i] = {
                  expand: group[i].parent_id === 0,
                  value: group[i].id,
                  title: group[i].department_name,
                  sort: group[i].sort,
                  children: [],
                  root: group[i].parent_id === 0
                };
                let newChild = [];
                for (let j in group[i].child) {
                  newChild.push(group[i].child[j]);
                } 
                let newMembers = [];
                for (let k in group[i].members) {
                  newChild.push(group[i].members[k]);
                } 
                if ([...newMembers, ...newChild].length > 0) {
                  reCreatSearchSenderMember([...newMembers, ...newChild], copy[i].children);
                }
              }
            }
          };
          reCreatSearchSenderMember(data.data.data, arrSelectGroupMember);
          commit('saveGroup', arrSelectGroupMember);
          let arrSelectGroup = [];
          let reCreatSearchSender = function(group, copy) {
            // console.log(group);
            for (let i in group.length) {
                copy[i] = {
                  value: group[i].groupid,
                  title: group[i].title,
                  children: []
                };
                let newChild = [];
                for (let j in group[i].child) {
                  newChild.push(group[i].child[j]);
                }
                if (newChild.length > 0) {
                  reCreatSearchSender(newChild, copy[i].child);
                }
            }
          };
          reCreatSearchSender(data.data.data, arrSelectGroup);
          commit('saveSelectGroup', arrSelectGroup);
        } else {
          alert('连接失败');
        }
      });
    }
  },
  // 保存组织部门
  setGroupDepartment({commit, state}, obj) {
    if (obj === undefined) {
    } else {
      let qs = require('qs');
      // console.log(qs.stringify(obj));
      axios.post(apis.organize, qs.stringify(obj)).then((data) => {
        // console.log(data);
        if (data.data.state === 1) {
          let arrSelectGroupDepartment = [];
          // let isCheck = false;
          let newArr = [];
          state.checkMemberList.forEach(function(cur) {
            newArr.push(cur.userid);
          });
          let reCreatSearchGroupDepartment = function(group, copy) {
            // console.log(group);
              for (let i in group) {
                  let isSelect = state.checkDepartmentListOne.find(function(item1, index) {
                     return parseInt(item1.id) === parseInt(group[i].id);
                  });
                  let isShowAll = state.checkDepartmentListOne.length > 0;
                  copy[i] = {
                    value: group[i].id,
                    title: group[i].department_name,
                    sort: group[i].sort,
                    expand: isShowAll,
                    children: [],
                    root: group[i].parent_id === 0,
                    selected: !!isSelect
                  };
                  let newChild = [];
                  for (let j in group[i].child) {
                    newChild.push(group[i].child[j]);
                  }
                  if (newChild.length > 0) {
                    reCreatSearchGroupDepartment(newChild, copy[i].children);
                  }
              }
          };
          reCreatSearchGroupDepartment(data.data.data, arrSelectGroupDepartment);
          // console.log(arrSelectGroupDepartment);
          commit('saveGroupDepartment', arrSelectGroupDepartment);
        } else {
          alert('连接失败');
        }
      });
    }
  },
  // 异步获取级联选人员数据
  setJilianPeople({ commit, state }, obj) {
    // console.log(obj);
    let arrSelectMember = [];
    let reCreatSearchSender = function(group, copy) {
      if (group) {
        for (let i in group) {
          if (group[i].uid) {
            copy[i] = {
              value: group[i].uid,
              label: group[i].member_name
            };
          } else {
            copy[i] = {
              value: group[i].id,
              label: group[i].department_name,
              children: [],
              disabled: group[i].child.length === 0 && group[i].members.length === 0
            };
            let newChild = [];
            for (let j in group[i].child) {
              newChild.push(group[i].child[j]);
            } 
            let newMembers = [];
            for (let k in group[i].members) {
              newChild.push(group[i].members[k]);
            } 
            if ([...newChild, ...newMembers].length > 0) {
              reCreatSearchSender([...newChild, ...newMembers], copy[i].children);
            }
          }
        }
      }
    };
    let qs = require('qs');
    // console.log(qs.stringify(obj));
    axios.post(apis.organize, qs.stringify(obj)).then((data) => {
      if (data.data.state === 1) {
        reCreatSearchSender(data.data.data, arrSelectMember);
        commit('saveJilianPeople', arrSelectMember);
      } else {
        alert('连接失败-级联选人员 ！');
      }
    });
  },
  // 异步获取级联选部门数据
  setJilianDepartment({ commit, state }) {
    let arrSelectDepartment = [];
    let reCreatSearchDepartement = function(group, copy) {
      for (let i = 0; i < group.length; i++) {
        if (!group[i].level) {
          copy[i] = {
            value: group[i].id,
            label: group[i].department_name
          };
        } else {
          if (group[i].level.length > 0) {
            copy[i] = {
              value: group[i].id,
              label: group[i].department_name,
              children: []
            };
            reCreatSearchDepartement(group[i].level, copy[i].children);
          }
        }
      }
    };
    // console.log(qs.stringify(obj));
    axios.post(apis.departmentTree).then((data) => {
      if (data.data.state === 1) {
        // console.log('组织数据');
        // console.log(data.data.data);
        reCreatSearchDepartement(data.data.data, arrSelectDepartment);
        commit('saveJilianDepartment', arrSelectDepartment);
      } else {
        alert('链接失败！');
      }
    });
  }
};

// mutations
const mutations = {
  // 存取组织数据
  saveGroup (state, gObj) {
    state.groups = Object.assign(gObj).filter(function(item) {
      return item !== 'undefined';
    });
  },
  // 存取组织部门数据
  saveGroupDepartment(state, gObjDepart) {
    state.groupsDepart = Object.assign(gObjDepart).filter(function(item) {
      return item !== 'undefined';
    });
  },
  // 存取在线人员列表
  saveOnline (state, onlineObj) {
    state.onlinelist = onlineObj;
  },
  // 存取选中人员列表
  saveCheckMemberObjects (state, obj) {
    state.checkMemberList = JSON.parse(JSON.stringify(obj));
  },
  // 清除选中人员列表
  clearCheckMemberObjects (state) {
    state.checkMemberList = [];
  },
  // 保存级联数据
  saveJilianPeople(state, obj) {
    state.jilianPeople = obj.filter(function(item) {
      return item !== 'undefined';
    });
  },
  // 保存级联部门数据
  saveJilianDepartment(state, obj) {
    state.jilianDepartment = obj;
  },
  // 保存所有成员数据
  saveAllMember(state, obj) {
    state.memberlist = obj;
  },
  // 保存所有管理者
  saveAllMainMember(state, obj) {
    state.mainMemberList = obj;
  },
  // 保存部门列表
  saveSelectGroup(state, obj) {
    state.selectGroupList = obj;
  },
  // 保存选中部门列表
  saveCheckDepartmentObjects (state, obj) {
    if (obj.type === 2) {
      state.checkDepartmentList = obj.arr;
    } else if (obj.type === 1) {
      state.checkDepartmentList.push(obj.arr);
    }
  },
  // 保存单选选中部门列表
  saveSelectDepartmentObjects (state, obj) {
    state.checkDepartmentListOne = obj.arr;
  },
  // 删除部门操作
  delCheckDepartmentObjects (state, obj) {
    state.checkDepartmentList.splice(state.checkDepartmentList.findIndex(item => item === obj), 1);
  },
  delSelectDepartmentObjects (state, obj) {
    state.checkDepartmentListOne = [];
  },
  // 清空选中部门列表
  clearCheckDepartmentObjects (state, obj) {
    state.checkDepartmentList = [];
  },
  // 删除选中成员操作
  delAllMember(state, obj) {
    state.checkMemberList.splice(obj, 1);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
