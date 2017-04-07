<template>
  <div id="register">
    <appbar title="免费注册"></appbar>
    <div class="register-area">
      <p class="register">
        <i class="iconfont icon-geren"></i>
        <input name="email" type="text" v-model="loginname" placeholder="邮箱" autocomplete="off">
        <br/>
      </p>
      <p class="register">
        <i class="iconfont icon-geren"></i>
        <input name="email" type="text" v-model="nickname" placeholder="昵称" autocomplete="off">
        <br/>
      </p>
      <p class="register">
        <i class="iconfont icon-mima"></i>
        <input name="passwd" type="password" v-model="password" placeholder="密码">
        <br/>
      </p>
      <p class="register">
        <i class="iconfont icon-mima"></i>
        <input name="passwd" type="password" placeholder="再输一次密码">
      </p>
      <mu-radio label="保密" name="group" nativeValue="保密" v-model="sex"  class="demo-radio"/>
      <mu-radio label="男" name="group" nativeValue="男" v-model="sex" class="demo-radio"/>
      <mu-radio label="女" name="group" nativeValue="女" v-model="sex"  class="demo-radio"/>
    </div>
    <div class="reg-buttons">
      <mu-raised-button label="立即注册" class="reg-register" @click="register" secondary />
    </div>
    <mu-toast v-if="toast" :message="message"/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
          loginname: '',
          nickname: '',
          password: '',
          sex: '保密',
          message: '',
          toast: false
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
      register: function () {
        let _this = this;
        if (this.loginname === '' || this.nickname === '' || this.password === '') {
          this.message = '请填写用户名、昵称或密码！';
          this.toast = true;
          return false;
        }
        /* eslint no-useless-escape: "error" */
        let reg = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        if (!reg.test(this.loginname)) {
          this.message = '用户名格式错误！';
          this.toast = true;
          return false;
        }
        this.$http.post('/info/regis.php', {
            email: this.loginname,
            nickname: this.nickname,
            password: this.password,
            sex: this.sex
        }).then((res) => {
            console.log(res);
            res = res.data;
            if (res.errno === 0) {
              _this.message = '注册成功！';
              _this.toast = true;
              let user = {
                email: _this.loginname,
                userId: res.id,
                sex: _this.sex,
                nickname: _this.nickname,
                avatar_url: '../../../static/images/avatar_default.svg'
              };
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
          _this.message = '登陆失败！';
          _this.toast = true;
        });
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #register
    .register-area
      width 100%
      height 370px
      border 1px solid transparent
      text-align center
      .register
        margin-top 30px
        height 50px
        &>input
          width 80%
          line-height 30px
          border-bottom 1px solid #e5e5e5
          border-radius 6px
          padding-left 10px
          outline none
    .reg-buttons
      text-align center
      .reg-register
        width 80%
</style>
