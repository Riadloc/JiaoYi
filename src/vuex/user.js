/**
 * Created by Alien on 2017/3/25.
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const userStore = new Vuex.Store({
  state: {
    img_base64: [],
    userInfo: {},
    userLocation: ''
  },
  getters: {
    getUserInfo(state) {
      return state.userInfo;
    },
    getUserLocation(state) {
      return state.userLocation;
    },
    getBase64(state) {
      return state.img_base64;
    }
  },
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
    setUserLocation(state, userLocation) {
      state.userLocation = userLocation;
    },
    setBase64(state, base64) {
      state.img_base64 = base64;
    }
  },
  actions: {
    setUserInfo({ commit }, user) {
      commit('setUserInfo', user);
    },
    setUserLocation({ commit }, location) {
      commit('setUserLocation', location);
    },
    setBase64({ commit }, base64) {
      commit('setBase64', base64);
    }
  }
});

export default userStore;
