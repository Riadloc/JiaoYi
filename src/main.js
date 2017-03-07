// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import MuseUI from 'muse-ui';
import axios from 'axios';
import router from './router/router';
import VeeValidate from 'vee-validate';
import 'muse-ui/dist/muse-ui.css';
import 'muse-ui/dist/theme-default.css';
import '../static/css/reset.css';

import './common/styles/index.styl';

Vue.use(MuseUI);
Vue.use(axios);
Vue.use(VeeValidate);
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
