/**
 * Created by Alien on 2017/2/26.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

let routes = [
  {
    path: '/index',
    component: require('../components/index'),
    children: [
      {
        path: 'home',
        component: require('../components/home/home'),
        children: [
          {
            path: 'new',
            component: require('../components/home/new')
          },
          {
            path: 'nearby',
            component: require('../components/home/nearby')
          }
        ]
      },
      {
        path: 'panel',
        component: require('../components/panel/panel')
      },
      {
        path: 'message',
        component: require('../components/message/message'),
        meta: { requiresAuth: true }
      },
      {
        path: 'mine',
        component: require('../components/mine/mine')
      }
    ]
  }, {
    name: 'search',
    path: '/search/:cid',
    component: require('../components/search/search')
  }, {
    path: '/login',
    component: require('../components/common/login')
  }, {
    path: '/register',
    component: require('../components/common/register')
  }, {
    path: '/publish',
    component: require('../components/common/publish'),
    meta: { requiresAuth: true }
  }, {
    path: '/qiugou',
    component: require('../components/common/qiugou')
  }, {
    name: 'details',
    path: '/details/:id',
    component: require('../components/common/details')
  }, {
    path: '/region',
    component: require('../components/common/region')
  }, {
    path: '/user',
    component: require('../components/common/user'),
    meta: { requiresAuth: true }
  }, {
    name: 'collect',
    path: '/collect/:id',
    component: require('../components/mine/collect'),
    meta: { requiresAuth: true }
  }, {
    path: '/setting',
    component: require('../components/common/setting')
  }, {
    path: '/about',
    component: require('../components/common/about')
  }, {
    path: '/', redirect: '/index/home/new'
  }
];

let route = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default route;

