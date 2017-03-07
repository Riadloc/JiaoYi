<template>
  <div id="login">
    <mu-appbar title="登录">
      <i class="iconfont icon-fanhui" slot="left" @click="back"></i>
    </mu-appbar>
    <form class="login-area">
      <i class="iconfont icon-geren"></i>
      <mu-text-field label="用户名" labelFloat/><br/>
      <i class="iconfont icon-mima"></i>
      <mu-text-field label="密码" labelFloat/>
    </form>
    <div class="log-buttons">
      <mu-raised-button label="登录" class="log-login" primary/>
      <router-link to="/register" class="log-register">
        <mu-raised-button label="注册"/>
      </router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
        back: function () {
          this.$router.go(-1);
        }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #login
    .login-area
      width 100%
      height 200px
      text-align center
      .mu-text-field
        width 80%
    .log-buttons
      display flex
      .log-login
        display inline-block
        flex 1
        margin 0 10px 0 10px
      .log-register
        display inline-block
        flex 1
        margin 0 10px 0 10px
        &>button
          width 100%
</style>
