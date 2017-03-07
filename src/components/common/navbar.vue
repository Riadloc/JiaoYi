<template>
  <div class="navbar">
  <mu-paper style="width: 100%;">
    <mu-bottom-nav :value="bottomNav" @change="handleChange">
      <mu-bottom-nav-item value="home" title="主页" icon="home"/>
      <mu-bottom-nav-item value="panel" title="分类" icon="apps"/>
      <mu-bottom-nav-item value="message" title="消息" icon="message"/>
      <mu-bottom-nav-item value="mine" title="我的" icon="face"/>
    </mu-bottom-nav>
  </mu-paper>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        bottomNav: 'home',
        bottomNavColor: 'home'
      };
    },
    methods: {
      handleChange (val) {
        this.bottomNav = val;
        this.$emit('transfer', val);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    position relative
    .navbar
      position fixed
      width 100%
      right 0
      bottom 0
</style>
