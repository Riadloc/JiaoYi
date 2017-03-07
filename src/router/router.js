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
        component: require('../components/message/message')
      },
      {
        path: 'mine',
        component: require('../components/mine/mine')
      }
    ]
  }, {
    path: '/search',
    name: 'search',
    component: require('../components/search/search')
  }, {
    path: '*', redirect: '/index/home/new'
  }
];

let route = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: 'active'
});

export default route;

