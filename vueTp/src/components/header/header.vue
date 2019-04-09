<template>
  <header v-if="rash" class="main-header notextselect">
    <div class="logo"></div>
    <nav>
      <div class="header-nav">
        <router-link v-for="item in getMenus" :key="item.sort"  :to="item.menu_url">{{item.name}}</router-link>
        <Dropdown trigger="click" @on-click="changeMenu" >
          <a v-on:click="toggleUserState" class="header-nav-select-btn">{{getUserName}}<i class="nod"></i></a>
          <DropdownMenu  slot="list" >
            <DropdownItem name="1"><span class="change-pwd" >修改密码</span></DropdownItem>
            <DropdownItem name="2"><span class="close-sys" >退出</span></DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </nav>
  </header>
</template>

<script type="text/ecmascript-6">
   import Bus from '../../common/js/EventBus';
   export default {
      props: {
        menus: Array
      },
      data () {
        return {
          isShowUserState: false,
          rash: true,
          userName: '',
          navs: []
        };
      },
     mounted() {
       // 清除缓存
       Bus.$on('clearLoginDash', data => {
         this.$nextTick(() => {
             // console.log(data);
         });
       });
     },
     computed: {
       getUserName() {
         if (this.$store !== undefined) {
           if (this.$store.state.user.userInfo !== null) {
             return this.$store.state.user.userInfo.member_name;
           }
         }
       },
       getMenus() {
         return this.menus;
       }
     },
     created() {
       // console.log(this.menus);
       this.rash = true;
     },
     methods: {
       // fetchDate() {
       //   this.$store.state.user.userInfo.member_name;
       // },
       toggleUserState: function () {
         this.isShowUserState = !this.isShowUserState;
       },
       changeMenu(name) {
         console.log(name);
         if (name === '1') {
           this.gotoChangePassword();
         } else {
           this.gotoOut();
         }
       },
       gotoOut() {
         console.log(3333);
         this.rash = false;
         this.$destroy();
         // 登出--跳转到登录页
         this.$router.push({
           path: '/login'
         });
         // socket退出登录
         this.$socket.emit('logout', 123);
         // 清空缓存
         this.$store.commit('user/removeStorage');
         localStorage.clear();
       },
       gotoChangePassword() {
         this.$router.push({
           path: '/changePassword'
         });
       }
     }
    };
</script>
<style lang="stylus" rel="stylesheet/stylus" >
  /*header*/
  .main-header
    width:100%
    height:50px
    position:absolute
    left:0
    right:0
    top:0
    background:#2283d4
    z-index:999
    .logo
      float:left
      height:50px
      width:206px
      background:url(../../common/images/logo.png) left top no-repeat
     .header-nav
        position:absolute
        right:0px
        top:0px
       .ivu-select-dropdown
         top:44px!important
         .ivu-dropdown-item
           position:relative
           padding-left:30px
           .change-pwd:after
              content:''
              background: url(../../common/images/icon.png) no-repeat
              background-position:-18px -147px
              width:20px
              height:20px
              position:absolute
              left:10px
              top:8px
              &:hover:after
                background-position:-38px -147px
           .close-sys:after
              content:''
              background: url(../../common/images/icon.png) no-repeat
              background-position:-17px -167px
              width:20px
              height:20px
              position:absolute
              left:10px
              top:9px
              &:hover:after
                background-position:-36px -167px
       a
        float: left
        height: 50px
        display:inline-block
        padding:0 20px
        font-size:14px
        color:#c0e2ff
        text-align:center
        line-height:50px
        border-right:1px solid #017be1
        transition: background-color 0.3s ease
        &:last-child(1)
          border-right:0px
        &:hover,&.r-active
          color: #fff;
        &.header-nav-select-btn
          font-weight:bold
          color:#fff
          i.nod
            position: relative
            height: 0px
            width: 0px
            border-top: 4px solid #fff
            border-left: 4px solid transparent
            border-right: 4px solid transparent
            display:inline-block
            margin:0 5px
            vertical-align: 2px
    .header-nav-select
      position:absolute
      z-index:9999
      right:0px
      top:50px
      width:108px
      overflow:hidden
      -moz-box-shadow: 0px 2px 2px #e1e1e1
      box-shadow: 0px 2px 2px #e1e1e1
      li
        width:108px
        height:24px
        border-bottom:1px solid #dbe0e4
        padding-left:31px
        position:relative
        float:left
        color:#333
        font-size:12px
        background:#fff
        line-height:24px
        cursor:pointer
        text-align:left
        &:hover
          background:#6abafe
          color:#fff
        &:nth-last-child(1)
          border-bottom:0px

</style>
