<template>
  <div class="header2">
    <div class="content-wrap2">
      <span class="welcome-text">
        欢迎来到交益！
      </span>
      <div class="login">
        <mu-raised-button label="马上登陆" @click="login" primary/>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      methods: {
          login: function () {
            this.$router.push('/login');
          }
      }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header2
    width 100%
    height 134px
    .content-wrap2
      display flex
      .welcome-text
        display inline-block
        flex 1
        line-height 134px
        text-align center
        font-size 16px
        font-weight bold
      .login
        display inline-block
        flex 1
        line-height 134px
        text-align center
</style>
