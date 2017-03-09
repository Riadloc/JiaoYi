<template>
  <div class="home">
    <div class="search">
      <div class="field">
        <i class="iconfont icon-saoyisao"></i>
        <i class="iconfont icon-sousuo"></i>
        <router-link :to="{name: 'search'}">
          <input type="text" placeholder="搜索" class="searchfor">
        </router-link>
        <i class="iconfont icon-tianjia" @click="open"></i>
        <mu-popup position="bottom" popupClass="popup-bottom" :open="bottomPop" @close="close">
          <ul class="pop-list">
            <li>售卖</li>
            <li>求购</li>
          </ul>
        </mu-popup>
      </div>
    </div>
    <div class="banner">
      <img src="../../common/images/banner.jpg" alt="" width="100%">
    </div>
    <div class="tab">
      <mu-tabs :value="activeTab" class="view-tabs" @change="handleTabChange">
        <mu-tab value="new" title="新鲜的"/>
        <mu-tab value="nearby" title="附近的"/>
      </mu-tabs>
    </div>
    <div class="view">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        activeTab: 'new',
        bottomPop: false
      };
    },
    created () {
      // 当created函数时监测路由信息,防止页面刷新tab高亮错误
      let tmpArr = this.$route.path.split('/');
      if (tmpArr[2] === 'home') {
        this.handleTabChange(tmpArr[3]);
      }
    },
    // watch函数监测路由的变化,保持tab面板的高亮位置正确
    watch: {
      '$route' (to, from) {
        const path = to.path;
        let tmpArr = path.split('/');
        if (tmpArr[2] === 'home') {
          this.handleTabChange(tmpArr[3]);
        }
      }
    },
    methods: {
      handleTabChange (val) {
        this.activeTab = val;
        this.$router.push({ path: '/index/home/' + val });
      },
      open() {
          this.bottomPop = true;
      },
      close() {
          this.bottomPop = false;
      }
    }
  };

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/styles/base.styl';
  .home
    padding-top 40px
    .search
      position fixed
      top 0
      left 0
      z-index 200
      padding 5px 0 5px 0
      width 100%
      height 40px
      text-align center
      vertical-align middle
      background-color: primaryColorA;
      font-size 0
      .field
        display inline-block
        position relative
        width 80%
        height 30px
        .icon-saoyisao
          position absolute
          left -30px
          bottom 3px
          font-size 25px
        .icon-sousuo
          position absolute
          left 5px
          top 6px
        .searchfor
          padding-left 25px
          border-radius 4px
          border 2px solid #000
          width 100%
          height 90%
          font-size 12px
          -webkit-appearance: none
          -moz-appearance: none
          appearance: none
        .icon-tianjia
          position absolute
          right -30px
          bottom 3px
          font-size 25px
        .popup-bottom
          width 100%
          height 60px
          line-height 60px
          max-width 375px
    .banner
        height auto
        font-size 0
    .tab
      .view-tabs
        background-color #fff
        color #222222
        &>.mu-tab-link
          color rgba(102,102,102,1)
        &>.mu-tab-active
          color #03a9f4
        &>.mu-tab-link-highlight
          background-color #03a9f4
  .popup-bottom
    width 100%
    /*height 60px*/
    line-height 60px
    max-width 375px
    text-align center
    opacity .9
</style>
