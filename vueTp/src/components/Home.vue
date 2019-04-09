<template>
    <div class="layout">
        <Layout style="height:100%">
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
                <Menu :active-name="menuUrl" theme="dark" width="auto" :class="menuitemClasses">
                    <MenuItem name="/home/group" >
                        <div style="position:absolute;left:0;top:0;width:100%;height: 100%;padding:14px 24px" @click="routeJump('/home/group')">
                            <Icon type="ios-navigate"></Icon>
                            <span>用户管理</span>
                        </div>
                    </MenuItem>
                    <MenuItem name="/home/shops" >
                        <div style="position:absolute;left:0;top:0;width:100%;height: 100%;padding:14px 24px" @click="routeJump('/home/shops')">
                            <Icon type="ios-navigate"></Icon>
                            <span  >商品列表</span>
                        </div>
                    </MenuItem>
                    <MenuItem name="/home/order" >
                        <div style="position:absolute;left:0;top:0;width:100%;height: 100%;padding:14px 24px" @click="routeJump('/home/order')">
                            <Icon type="ios-search"></Icon>
                            <span  >订单列表</span>
                        </div>
                    </MenuItem>
                    <MenuItem name="/home/memberCenter" >
                        <div style="position:absolute;left:0;top:0;width:100%;height: 100%;padding:14px 24px" @click="routeJump('/home/memberCenter')">
                            <Icon type="ios-settings"></Icon>
                            <span  >个人中心</span>
                        </div>
                    </MenuItem>
                </Menu>
            </Sider>
            <Layout style="height: 100%;" >
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
                    <div v-if="$store.state.user.userInfo" class="user-info">{{$store.state.user.userInfo.name}}  <a @click="loginOut()" href="javascript:;">注销</a></div>
                </Header>
                <Content :style="{margin: '0px', background: '#fff'}" class="layout-body" >
                    <keep-alive>
                      <router-view></router-view>
                    </keep-alive>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        data () {
            return {
                isCollapsed: false,
                menuUrl: '',
                user: {
                    name: '马大帅'
                }
            };
        },
        created() {
          // 判断是否用的缓存登陆状态
          // console.log('是否有缓存：' + this.$store.state.user.userInfo);
          if (this.$store.state.user.userInfo === null) {
            if (JSON.parse(localStorage.getItem('userInfo')) !== null) {
              let data = JSON.parse(localStorage.getItem('userInfo'));
              this.loginUser(data);
              // console.log(this.$route.path);
              this.menuUrl = this.$route.path;
            } else {
            }
          };
        },
        computed: {
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ];
            }
        },
        watch: {
          $route: {
            handler(val, oldVal) {
              localStorage.setItem('historyRoute', val.fullPath);
              this.menuUrl = val.path;
              console.log(val.path);
            }
          }
        },
        methods: {
            loginUser(data) {
                // 保存到vuex-storage
                this.$store.commit('user/setStorage', data);
                // this.userId = this.$store.state.user.userInfo.userid;
            },
            // 注销
            loginOut() {
                this.$Modal.confirm({
                    title: '操作提醒',
                    content: '确认要注销吗？',
                    onOk: () => {
                        this.$router.push({
                          path: '/login'
                        });
                    },
                    onCancel: () => {
                        // this.$Message.info('Clicked cancel');
                    }
                });
            },
            // 菜单动画
            collapsedSider () {
                this.$refs.side1.toggleCollapse();
            },
            // 路由跳转
            routeJump(url) {
              this.$router.push({
                path: url
              });
            }
        }
    };
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .ivu-menu-item
        height: 44px
    .layout
        background: #f5f7f9
        position: relative
        border-radius: 0px
        overflow: hidden
        height:100%
        width:100%
        .ivu-layout
            position: relative
            .layout-body 
                position:absolute
                top:65px
                bottom:0px
                left:0px
                right:0px
    .layout-header-bar{
        background: #fff
        box-shadow: 0 1px 1px rgba(0,0,0,.1)
        border-bottom: 1px solid #ddd
    }
    .layout-logo-left{
        width: 90%
        height: 30px
        background: #5b6270
        border-radius: 3px
        margin: 15px auto
    }
    .menu-icon{
        transition: all .3s
    }
    .rotate-icon{
        transform: rotate(-90deg)
    }
    .menu-item span{
        display: inline-block
        overflow: hidden
        width: 69px
        text-overflow: ellipsis
        white-space: nowrap
        vertical-align: bottom
        transition: width .2s ease .2s
    }
    .menu-item i{
        transform: translateX(0px)
        transition: font-size .2s ease, transform .2s ease
        vertical-align: middle
        font-size: 16px
    }
    .collapsed-menu span{
        width: 0px
        transition: width .2s ease
    }
    .collapsed-menu i{
        transform: translateX(5px)
        transition: font-size .2s ease .2s, transform .2s ease .2s
        vertical-align: middle
        font-size: 22px
    }
    .user-info
        float:right
        width:240px
        height:50px
        text-align:right
        padding-right:20px
</style>
