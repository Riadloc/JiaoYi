<template>
  <div class="main">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class="navbar">
      <mu-paper style="width: 100%;">
        <mu-bottom-nav :value="bottomNav" @change="handleChange">
          <mu-bottom-nav-item value="home" title="主页" icon="home"></mu-bottom-nav-item>
          <mu-bottom-nav-item value="panel" title="分类" icon="apps"/>
          <mu-bottom-nav-item value="message" title="消息" icon="message"/>
          <mu-bottom-nav-item value="mine" title="我的" icon="face"/>
        </mu-bottom-nav>
      </mu-paper>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        value: 'home',
        bottomNav: 'home'
      };
    },
    created() {
      let tmpArr = this.$route.path.split('/');
      if (tmpArr[1] === 'index') {
        this.handleChange(tmpArr[2]);
      }
    },
    watch: {
      'route' (to, from) {
        const path = to.path;
        let tmpArr = path.split('/');
        if (tmpArr[1] === 'index') {
          this.handleChange(tmpArr[2]);
        }
      }
    },
    methods: {
      handleChange (val) {
        this.bottomNav = val;
        this.$router.push('/index/' + val);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .main
    padding-bottom 20px
    .navbar
      position fixed
      width 100%
      right 0
      bottom 0
</style>
