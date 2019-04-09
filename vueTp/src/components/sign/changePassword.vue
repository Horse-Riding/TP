<template>
  <section>
    <section class="register-header">
      <div class="logo"></div>
    </section>
    <section class="register-body">
      <section class="register-wrap">
        <h1>修改密码</h1>
        <section class="form-list">
          <Form ref="changePassword" :model="changePassword" :rules="ruleChangePassword" :label-width="80">
            <FormItem label="旧密码" prop="name">
              <Input v-model="changePassword.oldPassword" placeholder="请输入原来密码"></Input>
            </FormItem>
            <FormItem label="新密码" prop="mail">
              <Input v-model="changePassword.newPassword" placeholder="请输入新密码"></Input>
            </FormItem>
            <FormItem label="新密码" prop="mail">
              <Input v-model="changePassword.affirmPassword" placeholder="请输入新密码"></Input>
            </FormItem>
            <FormItem>
              <Button type="primary" @click="handleSubmit('changePassword')">提交</Button>
              <Button type="ghost" @click="handleReset('changePassword')" style="margin-left: 8px">重置</Button>
              <Button type="ghost" @click="goHome()" style="margin-left: 8px">返回首页</Button>
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
    name: 'change-password',
    data () {
      return {
        changePassword: {
          oldPassword: '',
          newPassword: '',
          affirmPassword: ''
        },
        ruleChangePassword: {
          oldPassword: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          newPassword: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          affirmPassword: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('验证成功!');
          } else {
            this.$Message.error('验证失败!');
          }
        });
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      },
      goHome() {
        // alert('返回首页');
        this.$router.push({
          path: '/'
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
