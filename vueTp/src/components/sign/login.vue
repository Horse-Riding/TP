<template>
  <div class="login-content">
    <section class="login-wrapper">
      <h1 class="login-title">导航网客户管理系统</h1>
      <section class="form-wrapper">
        <form>
          <div class="input-item ii1">
            <label class="label">登录名：</label>
            <Input v-model="name" placeholder="请输入用户名" type="text" style="width: 100%"></Input>
          </div>
          <div class="input-item ii2">
            <label class="label">密码：</label>
            <Input v-model="pwd" placeholder="请输入密码" @keyup.enter.native="submitForm()" type="password" style="width: 100%"></Input>
          </div>
          <div class="item submit-box">
            <div class="btn-login"  @click="login()" ></div>
            <Checkbox class="btn-remember" v-model="single">记住密码</Checkbox>
            <a class="btn-retrieve" @click="gotoFindPassword()" href="javascript:;">忘记密码</a>
          </div>
          <div class="item register">
            <a href="javascript:;" class="btn-register" @click="gotoRegister()" >
              新用户注册
            </a>
          </div>
        </form>
      </section>
      <p class="compony-name">星河经纬（北京）资讯有限责任公司</p>
    </section>
    <div class="stars"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Checkbox } from 'iview';
  import startXing from '../../common/js/loginStar';
  export default {
    name: 'login',
    data() {
      return {
        name: '',
        pwd: '',
        single: false,
        error: '',
        // 临时用户数据
        newData: {}
      };
    },
    mounted() {
      this.showLogin = true;
      startXing.startStar();
    },
    computed: {
      user() {
        if (this.$store) {
          return this.$store.state.login.isLogin;
        } else {
          return {};
        }
      }
    },
    methods: {
      login() {
        let params = {
         username: this.name,
         password: this.pwd
        };
        this.$http.apost(this.$apis.login, params).then((data) => {
          if (data.result === 'ok') {
            this.$store.commit('user/setStorage', data.data);
            this.userId = this.$store.state.user.userInfo.id;
            this.$router.push({
              path: '/home/group'
            });
          } else {
            this.$Message.error(data.message);
          }
        });
      }
    },  
    components: {
      Checkbox
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @keyframes rotate
    0%
      transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0)
    100%
      transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(-360deg)
  .stars
    transform: perspective(500px)
    transform-style: preserve-3d
    position: absolute
    bottom: 0
    perspective-origin: 50% 100%
    left: 50%
    animation: rotate 90s infinite linear
    .star
      width: 2px
      height: 2px
      background: #F7F7B6
      position: absolute
      top: 0
      left: 0
      transform-origin: 0 0 -300px
      transform: translate3d(0,0,-300px)
      backface-visibility: hidden
  .snow-container
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 100001
  .login-content
    width: 100%
    height:100%
    position:relative;
    background:url(bg.jpg) #274f93 center center no-repeat
    .login-wrapper
      width:511px
      height:392px
      position:absolute
      left:50%;
      top:50%;
      margin-left:-230px
      margin-top:-186px
      .login-title
        position:absolute
        left:50px
        top:0
        line-height 40px
        color:#ffffff
        font-size:38px
        text-align:center
      .form-wrapper
        position:absolute
        top:32px
        left:0
        padding-left:88px
        padding-top:84px
        width:511px
        height:322px
        background:url(loginbox.png) left top no-repeat
        .input-item
          width:270px
          height:30px
          margin:14px 0
          float:left
          position:relative
          padding-left:68px
          .label
            position:absolute
            left:0
            top:0
            line-height:30px
            color: #ffffff
            font-size:14px
            width:68px
            text-align:right
            font-weight :200
        .item
          width:270px
          height:30px
          padding:2px 0px 12px 0
          float:left
          &.register
            padding-top:15px
            .btn-register
              width:100%
              font-size:18px
              color:#dbffff
              &:hover
                text-decoration: underline
          &.submit-box
            padding-left:68px
            .btn-retrieve
              font-size:12px
              color: #dbffff
              line-height: 22px
              margin-top: 5px
              &:hover
                text-decoration underline
            .btn-login
              width:58px
              height:36px
              background:url(btn-sign.png) left top no-repeat;
              float:left
              margin-right:10px
              cursor:pointer
              &:hover
                background:url(btn-sign-hover.png) left top no-repeat;
            .btn-remember
              color:#dbffff
              line-height:22px
              margin-top:5px
      .compony-name
        position:absolute
        left:114px
        bottom:0px
        color: #ffffff
        font-size:14px
        text-shadow: 0 2px 5px rgba(0,0.0,0,4)
</style>
