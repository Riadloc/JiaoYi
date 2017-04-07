<template>
  <div id="login">
    <appbar title="登录"></appbar>
    <form class="login-area">
      <p class="logon">
        <i class="iconfont icon-geren"></i>
        <input name="email" type="text" v-model="loginname" placeholder="邮箱">
        <br/>
      </p>
      <p class="logon">
        <i class="iconfont icon-mima"></i>
        <input name="passwd" type="password" v-model="password" placeholder="密码">
        <br/>
      </p>
    </form>
    <div class="log-buttons">
      <mu-raised-button label="登录" class="log-login" @click="logon" primary/>
      <router-link to="/register" class="log-register">
        <mu-raised-button label="注册"/>
      </router-link>
    </div>
    <mu-toast v-if="toast" :message="message"/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        loginname: '',
        password: '',
        toast: false,
        message: ''
      };
    },
    watch: {
      toast(val) {
        if (val) {
          setTimeout(() => {
            this.toast = false;
          }, 1500);
        }
      }
    },
    methods: {
      logon: function () {
        let _this = this;
        /* eslint no-useless-escape: "error" */
        let reg = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        if (this.loginname === '' || this.password === '') {
          this.message = '请填写用户名或密码！';
          this.toast = true;
          return false;
        } else if (!reg.test(this.loginname)) {
          this.message = '用户名格式错误！';
          this.toast = true;
          return false;
        }
        this.$http.post('/info/login.php', {
          email: this.loginname,
          password: this.password
        }).then((res) => {
//          console.log(res);
          res = (res.data)[0];
//          console.log(res.errno);
          if (res.errno === 0) {
            let user = {
                email: _this.loginname,
                userId: res.id,
                sex: res.sex,
                nickname: res.nickname,
                avatar_url: '../../../static/images/avatar-1.png'
            };
//            console.log(user);
            window.window.sessionStorage.user = JSON.stringify(user);
            _this.$store.dispatch('setUserInfo', user);
            let redirect = decodeURIComponent(_this.$route.query.redirect || '/index/mine');
            _this.$router.push({
              path: redirect
            });
          } else {
            _this.message = '请重新输入！';
            _this.toast = true;
          }
        }).catch(() => {
          _this.message = '登录失败！';
          _this.toast = true;
        });
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #login
    .login-area
      width 100%
      height 200px
      border 1px solid transparent
      text-align center
      .logon
        margin-top 30px
        height 50px
        &>input
          width 80%
          line-height 30px
          border-bottom 1px solid #e5e5e5
          border-radius 6px
          padding-left 10px
          outline none
    .log-buttons
      display flex
      .log-login
        display inline-block
        flex 1
        margin 0 20px
      .log-register
        display inline-block
        flex 1
        margin 0 20px
        &>button
          width 100%
  .help
    color red
</style>
