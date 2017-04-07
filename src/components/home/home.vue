<template>
  <div class="home">
    <div class="search">
      <p @click="getAddress" class="location">
        <span v-if="!address">杭州</span>
        <span v-else>{{address.substr(0,2)}}</span>
      </p>
      <div class="field">
        <i class="iconfont icon-sousuo"></i>
        <router-link :to="{'search',params:{'0'}}">
          <input type="text" placeholder="搜索" class="searchfor">
        </router-link>
      </div>
      <div class="fabu">
        <i class="iconfont icon-jiahao" @click="open"></i>
        <mu-popup position="bottom" popupClass="popup-bottom" :open="bottomPop" @close="close">
          <ul class="pop-list">
            <li @click="publish"><img src="./fabu.png" alt=""><span>发布</span></li>
            <li @click="qiugou"><img src="./qiugou.png" alt=""><span>求购</span></li>
          </ul>
        </mu-popup>
      </div>
    </div>
    <div class="banner">
    </div>
    <div class="occup">
      <div :class="{'tab': true, 'ontop': fix }">
        <mu-tabs :value="activeTab" class="view-tabs" @change="handleTabChange">
          <mu-tab value="new" title="新鲜的"/>
          <mu-tab value="nearby" title="附近的"/>
        </mu-tabs>
      </div>
    </div>
    <div class="view">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <img class="icon-top" v-show="show" @click="goTop" src="./top.svg" alt="顶部">
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex';
  export default {
    data() {
      return {
        activeTab: 'new',
        bottomPop: false,
        fix: false,
        show: false
      };
    },
    computed: {
      ...mapGetters({
        address: 'getUserLocation'
      })
    },
    beforeRouteEnter: (to, from, next) => {
      next((vm) => {
        vm.fix = false;
      });
    },
    created () {
      // 当created函数时监测路由信息,防止页面刷新tab高亮错误
      let tmpArr = this.$route.path.split('/');
      if (tmpArr[2] === 'home') {
        this.handleTabChange(this.activeTab);
      }
    },
    mounted() {
      this.$el.addEventListener('scroll', this.scroll);
    },
    deactivated() {
      this.show = false;
    },
    beforeDestory() {
      this.$el.removeEventListener('scroll', this.scroll);
    },
    // watch函数监测路由的变化,保持tab面板的高亮位置正确
    watch: {
      '$route' (to, from) {
        const path = to.path;
        let tmpArr = path.split('/');
        if (tmpArr[2] === 'home') {
          if (tmpArr[3] !== undefined) {
            this.handleTabChange(tmpArr[3]);
          } else {
            this.handleTabChange(this.activeTab);
          }
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
      },
      scroll() {
        this.fix = this.$el.scrollTop >= document.getElementsByClassName('occup')[0].offsetTop;
        this.show = this.$el.scrollTop > 1000;
      },
      publish() {
        this.close();
        this.$router.push('/publish');
      },
      qiugou() {
        this.close();
        this.$router.push('/qiugou');
      },
      getAddress() {
        this.$router.push('/region');
      },
      goTop() {
        this.$el.scrollTop = 0;
        this.show = false;
      }
    }
  };

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/styles/base.styl';
  .home
    position relative
    top 40px
    left 0
    overflow-y auto
    overflow-x hidden
    height calc(100vh - 96px)
    .search
      position fixed
      top 0
      left 0
      width 100%
      height 40px
      line-height 40px
      font-size 14px
      display flex
      background primaryColorA
      .location
        display inline-block
        width 40px
        text-align center
      .field
        flex 1
        .icon-sousuo
          position absolute
          top 1px
          left 44px
          font-size 16px
        &>a
          .searchfor
            width 100%
            height 26px
            padding-left 22px
            border-radius 10px
      .fabu
        display inline-block
        width 30px
        text-align center
        padding-top 3px
        .icon-jiahao
          font-size 24px
    .banner
      width 100%
      height 50vw
      background url("../../common/images/banner.jpg")
      background-size cover
      font-size 0
    .occup
      width 100%
      height 48px
      clear both
      .tab
        width 100%
        border-1px(#E5E5E5)
        .view-tabs
          background-color #fff
          color #222222
          &>.mu-tab-link
            color rgba(102,102,102,1)
          &>.mu-tab-active
            color #03a9f4
          &>.mu-tab-link-highlight
            height 3px
            background-color #03a9f4
      .ontop
        position fixed
        left 0
        top 40px
        padding-right 2px
    .icon-top
      position fixed
      right 10px
      bottom 80px
      width 48px
      height 48px
      z-index 9999
      transition:all 0.5s ease;
  .popup-bottom
    width 13rem
    /*height 60px*/
    line-height 5rem
    text-align center
    margin-bottom 20px
    background transparent!important
    .pop-list
      &>li
        position relative
        border-radius 50%
        display inline-block
        background #fff
        width 5rem
        margin 0 10px
        &>img
          width 2.5rem
          height 2.5rem
          vertical-align middle
        &>span
          position absolute
          top 3.125rem
          left 1.75rem
          color: #fff
</style>
