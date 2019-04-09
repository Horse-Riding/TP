<template>
  <div class="member-list">
      <div class="l50" style="border-right:1px solid #ddd;padding:20px" >
        <h4>
         用户列表 
         <div style="float:right">
              <Button @click="model.addMember = true" type="primary">添加</Button>
         </div>     
       </h4>
       <div class="content">
          <br>
          <Table :row-class-name="rowClassName" stripe :columns="userHeader" :data="userList"></Table>
       </div>
      </div>
      <div class="r50">
        <h4>
         用户详情
           <div style="float:right" v-if="memberFromEdit.userId" >
                <Button v-if="!memberEditType" @click="memberEditType = true" type="primary">修改</Button>
                <Button v-if="memberEditType" @click="memberEditType = false" type="primary">查看</Button>
                <Button @click="deleteMember()" type="error">删除</Button>
           </div>     
        </h4>
        <div class="member-detail" v-if="memberFromEdit.userId">
          <Form :model="memberFromEdit" label-position="right" :label-width="60">
              <FormItem label="用户名:">
                  <span v-if="!memberEditType">{{memberFromEdit.userName}}</span>
                  <Input style="width:200px" v-if="memberEditType" v-model="memberFromEdit.userName"></Input>
              </FormItem>
              <FormItem label="姓名:">
                  <span v-if="!memberEditType">{{memberFromEdit.name}}</span>
                  <Input style="width:200px" v-if="memberEditType" v-model="memberFromEdit.name"></Input>
              </FormItem>
              <FormItem label="性别:">
                  <span v-if="!memberEditType">{{memberFromEdit.sex === 0 ? '女' : '男'}}</span>
                  <RadioGroup style="width:200px" v-show="memberEditType" v-model="memberFromEdit.sex">
                      <Radio :label="1">男</Radio>
                      <Radio :label="0">女</Radio>
                  </RadioGroup>
              </FormItem>
              <FormItem label="手机号:">
                  <span v-if="!memberEditType">{{memberFromEdit.phone}}</span>
                  <Input style="width:200px" v-if="memberEditType" v-model="memberFromEdit.phone"></Input>
              </FormItem>
              <FormItem label="职位:">
                  <span v-if="!memberEditType">{{memberFromEdit.work}}</span>
                  <Input style="width:200px" v-if="memberEditType" v-model="memberFromEdit.work"></Input>
              </FormItem>
          </Form>
          <p v-if="memberEditType"><Button @click="editMember()" type="primary">提交修改</Button></p>
        </div>
      </div>
     <!-- 添加员工 -->
     <Modal
          v-model="model.addMember"
          title="添加员工"
          @on-ok="addUser()"
          @on-cancel="model.addMember = false">
          <Form :model="memberFrom" label-position="right" :label-width="60">
              <FormItem label="用户名:">
                  <Input v-model="memberFrom.username"></Input>
              </FormItem>
              <FormItem label="姓名:">
                  <Input v-model="memberFrom.name"></Input>
              </FormItem>
              <FormItem label="性别:">
                  <RadioGroup v-model="memberFrom.sex">
                      <Radio label="1">男</Radio>
                      <Radio label="0">女</Radio>
                  </RadioGroup>
              </FormItem>
              <FormItem label="手机号:">
                  <Input v-model="memberFrom.phone"></Input>
              </FormItem>
              <FormItem label="职位:">
                  <Input v-model="memberFrom.work"></Input>
              </FormItem>
          </Form>
     </Modal>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    data() {
      return {
        model: {
          addMember: false
        },
        currentListId: 0,
        memberFrom: {
          username: '',
          name: '',
          sex: 0,
          phone: '',
          work: '',
          address: ''
        },
        memberFromEdit: {
          username: '',
          name: '',
          sex: '',
          phone: '',
          work: '',
          address: ''
        },
        memberEditType: false,
        userHeader: [
          // {
          //    type: 'selection',
          //    width: 60,
          //    align: 'center'
          // },
          {
              title: '姓名',
              key: 'name',
              render: (h, params) => {
                return h('strong', {
                  style: {
                    cursor: 'pointer'
                  },
                  on: {
                    click: () => {
                       this.currentListId = params.row.userId;
                       this.memberEditType = false;
                       this.getMemberDetail(params.row.userId);
                    }
                  }
                }, params.row.name);
              }
          },
          {
              title: '性别',
              key: 'sex',
              render: (h, params) => {
                return h('div', {
                }, params.row.sex === 0 ? '女' : '男');
              }
          },
          {
              title: '职位',
              key: 'work'
          }
        ],
        userList: []
      };
    },
    created() {
      this.getUserlist();
    },
    computed: {
    },
    methods: {
      // 修改员工
      editMember() {
        console.log(this.memberFromEdit);
        this.$Modal.confirm({
            title: '操作提示',
            content: '<p>确定要修改此用户信息吗？</p>',
            onOk: () => {
                this.$http.apost(this.$apis.useredit, this.memberFromEdit).then((data) => {
                  if (data.result === 'ok') {
                    this.getUserlist();
                    this.memberEditType = false;
                    this.memberFromEdit = {};
                    this.$Message.success(data.message);
                  }
                });
            },
            onCancel: () => {
            }
        });
      },
      // 删除员工
      deleteMember(id) {
        console.log(this.memberFromEdit.userId);
        let params = {
          userId: this.memberFromEdit.userId.toString()
        };
        this.$Modal.confirm({
            title: '操作提示',
            content: '<p>确定要删除此用户信息吗？</p>',
            onOk: () => {
                this.$http.apost(this.$apis.userdelete, params).then((data) => {
                  if (data.result === 'ok') {
                    this.getUserlist();
                    this.memberEditType = false;
                    this.memberFromEdit = {};
                    this.$Message.success(data.message);
                  }
                });
            },
            onCancel: () => {
            }
        });
      },
      // 判断table表选中
      rowClassName(row, index) {
        if (row.userId === this.currentListId) {
          return 'active-message-list';
        } else { 
          return '';
        }
      },
      // 获取员工列表
      getUserlist() {
        this.$http.aget(this.$apis.userlist).then((data) => {
          if (data.result === 'ok') {
            this.userList = data.data;
          } else {
            this.$Message.error(data);
          }
        });
      },
      // 添加员工
      addUser() {
        this.$http.apost(this.$apis.userlist, this.memberFrom).then((data) => {
          if (data.result === 'ok') {
            this.$Message.success(data.message);
            this.getUserlist();
          } else {
            this.$Message.error(data.message);
          }
        });
      },
      // 查看员工详情
      getMemberDetail(id) {
        let params = {
          userId: id.toString()
        };
        this.$http.apost(this.$apis.userdetail, params).then((data) => {
          console.log(data);
          if (data.result === 'ok') {
            this.memberFromEdit = data.data;
            console.log(this.memberDetail);
          }
        });
      }
    },
    components: {
    },
    destroyed() {
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  .member-list
    .l50
      position:absolute
      left:0
      top:0
      width:70%
      bottom:0px
      box-sizing:border-box
      padding:20px
      overflow-y:auto
      border-right:1px solid #d1d1d1
      .active-message-list td
        background: #e8f5f6!important
    .r50
      position:absolute
      right:0
      top:0
      padding:20px
      box-sizing:border-box
      width:30%
      bottom:0px
      overflow-y:auto
      border-right:1px solid #d1d1d1
      .member-detail
        position: absolute
        top: 66px
        border-top:1px solid #ddd
        left:0px
        right:0px
        bottom:10px
        padding: 20px
        overflow-y:auto

</style>
