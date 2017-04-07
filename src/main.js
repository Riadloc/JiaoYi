// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import MuseUI from 'muse-ui';
import axios from 'axios';
import router from './router/router';
import store from './vuex/user';
import VueLazyload from 'vue-lazyload';
import SyncLoader from 'vue-spinner/src/SyncLoader';
import Appbar from './components/common/appbar';

import 'muse-ui/dist/muse-ui.css';
import 'muse-ui/dist/theme-default.css';
import '../static/css/reset.css';
import './common/styles/index.styl';

Vue.use(MuseUI);
Vue.use(axios);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1
});

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.component('appbar', Appbar);
Vue.component('sync-loader', SyncLoader);
Vue.prototype.$http = axios;

if (window.sessionStorage.user) {
  store.dispatch('setUserInfo', JSON.parse(window.sessionStorage.user));
}

// 登录中间验证，页面需要登录而没有登录的情况直接跳转登录
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.userInfo.userId) {
      next();
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    }
  } else {
    next();
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
