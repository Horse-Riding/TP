import Vue from 'vue';
import Router from 'vue-router';

// import iView from 'iview';

// 根路由
import homePage from '@/components/Home';
import login from '@/components/sign/login';
import group from '@/components/home/group/index';
import shops from '@/components/home/shops/index';
import order from '@/components/home/order/index';
import memberCenter from '@/components/home/memberCenter/index';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'r-active',
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      component: homePage,
      children: [
        {
          path: '/',
          redirect: 'group'
        },
        {
          path: '/home/group',
          component: group
        },
        {
          path: '/home/shops',
          component: shops
        },
        {
          path: '/home/order',
          component: order
        },
        {
          path: '/home/memberCenter',
          component: memberCenter
        }
      ]
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
});
