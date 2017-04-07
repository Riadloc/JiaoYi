<template>
<div class="user">
  <appbar title="个人信息"></appbar>
  <div class="content-wrapper">
    <mu-list>
      <mu-sub-header>基本信息</mu-sub-header>
      <mu-list-item title="头像">
        <img :src="userInfo.avatar_url" class="avatar" alt="">
      </mu-list-item>
      <mu-divider />
      <mu-list-item title="昵称">
        <span class="nickname">{{userInfo.nickname}}</span>
      </mu-list-item>
      <mu-divider />
      <mu-list-item title="性别">
        <span class="sex">{{userInfo.sex}}</span>
      </mu-list-item>
      <mu-divider />
      <mu-list-item title="地址">
        <span class="address" v-if="address">{{address}}</span>
        <span class="address" v-if="!address">浙江杭州</span>
      </mu-list-item>
      <mu-divider />
      <mu-list-item title="密码">
        <span class="psw">●●●●●●●●</span>
      </mu-list-item>
      <mu-divider />
    </mu-list>
  </div>
  <div>
    <mu-dialog :open="dialog" title="Dialog">
      确认退出？
      <mu-flat-button slot="actions" @click="cancel" primary label="取消"/>
      <mu-flat-button slot="actions" primary @click="confirm" label="确定"/>
    </mu-dialog>
  </div>
  <div class="logout">
    <mu-raised-button label="退出登录" @click="logout" class="published-button" secondary fullWidth></mu-raised-button>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
import {mapGetters} from 'vuex';
export default {
  data() {
    return {
      dialog: false,
      address: ''
    };
  },
  computed: {
    ...mapGetters({
      userInfo: 'getUserInfo',
      address: 'getUserLocation'
    })
  },
  methods: {
    logout() {
      this.dialog = true;
    },
    cancel() {
      this.dialog = false;
    },
    confirm() {
      this.user = {
        email: '',
        password: '',
        userId: '',
        sex: '',
        nickname: '',
        avatar_url: ''
      };
      window.window.sessionStorage.user = '';
      this.$store.dispatch('setUserInfo', this.user);
      this.dialog = false;
      let redirect = decodeURIComponent(this.$route.query.redirect || '/index/mine');
      this.$router.push({
        path: redirect
      });
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.user
  .content-wrapper
    .nickname,.sex,.address,.avatar,.psw
      position absolute
      top 16px
      left 40%
      font-size 14px
      color #666
    .avatar
      width 30px
      height 30px
      top 10px
      border-radius 50%
  .logout
    position fixed
    bottom 0
    left 0
    width 100%
</style>
