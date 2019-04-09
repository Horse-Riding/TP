<template>
  <section>
    <section class="register-header">
      <div class="logo"></div>
    </section>
    <section class="register-body">
      <section class="register-wrap">
        <h1>找回密码</h1>
        <section class="form-list">
          <Form ref="userInfo" :model="userInfo" :rules="ruleUserInfo" :label-width="80">
            <FormItem label="用户名" prop="name">
              <Input v-model="userInfo.name" placeholder="请输入您的用户名！"></Input>
            </FormItem>
            <FormItem label="E-mail" prop="mail">
              <Input v-model="userInfo.mail" placeholder="请输入您的邮箱！"></Input>
            </FormItem>
            <FormItem label="手机号" prop="mail">
              <Input v-model="userInfo.bindPhoneNumber" placeholder="请输入您的绑定手机号！"></Input>
            </FormItem>
            <FormItem>
              <Button type="primary" @click="handleSubmit('userInfo')">提交</Button>
              <Button type="ghost" @click="handleReset('userInfo')" style="margin-left: 8px">重置</Button>
              <Button type="ghost" @click="handleLogin()" style="margin-left: 8px">返回登陆</Button>
            </FormItem>
          </Form>
        </section>
      </section>
    </section>
    <section class="register-footer">
      <div class="company-name">中国招标采购导航网</div>
    </section>
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'find-password',
    data () {
      return {
        userInfo: {
          name: '',
          mail: '',
          bindPhoneNumber: ''
        },
        ruleUserInfo: {
          name: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          mail: [
            { required: true, message: '不能为空', trigger: 'blur' },
            { type: 'email', message: '格式不正确', trigger: 'blur' }
          ],
          bindPhoneNumber: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        });
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      },
      handleLogin() {
        // alert('找回密码');
        this.$router.push({
          path: '/login'
        });
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .register-header
    width:100%
    position:absolute
    left:0
    top:0
    background:#fff
    height:60px
    border-bottom:1px solid #dddee1
    .logo
      width:235px
      height:35px
      margin:13px 30px
      background:url(logo.png) left top no-repeat;
  .register-body
    width:100%
    position:absolute
    left:0
    bottom:60px
    top:61px
    overflow:hidden
    .register-wrap
      width:1200px
      position:absolute
      overflow-y:auto
      left: 50%
      top:20px
      bottom:20px
      min-height:500px
      margin-left:-600px
      background: #ffffff
      border-radius:3px
      box-shadow :0 3px 5px rgba(0,0,0,0.2)
      h1
        width:100%
        height:80px
        line-height:80px
        text-align:center
        font-size:22px
        color:#333
        border-bottom:1px solid #dddee1
        margin-bottom:30px
      .form-list
        padding:60px 250px
  .register-footer
    position:absolute
    bottom:0px
    left:0
    right:0
    height:60px
    background:#1c2438
    .company-name
      height:60px
      line-height:60px
      float:right
      margin-right:40px
      color:#e1e1e1
</style>
