<template>
  <div id="register">
    <mu-appbar title="免费注册">
      <i class="iconfont icon-fanhui" slot="left" @click="back"></i>
    </mu-appbar>
    <form class="register-area">
      <i class="iconfont icon-geren"></i>
      <mu-text-field label="用户名" labelFloat/><br/>
      <i class="iconfont icon-mima"></i>
      <mu-text-field label="设置密码" labelFloat/><br/>
      <i class="iconfont icon-mima"></i>
      <mu-text-field label="确认密码" labelFloat/>
    </form>
    <div class="reg-buttons">
      <mu-raised-button label="立即注册" class="reg-register"/>
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
  #register
    .register-area
      width 100%
      height 260px
      text-align center
      .mu-text-field
        width 80%
    .reg-buttons
      text-align center
      .reg-register
        width 80%
</style>
