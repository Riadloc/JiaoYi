<template>
  <div id="search">
    <div class="search-area">
      <i class="iconfont icon-fanhui" @click="back"></i>
      <i class="iconfont icon-sousuo"></i>
      <input type="text" v-model="key" class="search-box">
      <button @click="search">搜索</button>
    </div>
    <ul class="condition">
      <li>综合</li>
      <li>发布时间</li>
      <li>距离</li>
      <li>价格</li>
    </ul>
    <div class="content-wrapper" v-show="!loading">
      <mu-flexbox class="flex-box" wrap="wrap" justify="space-around" :gutter="0">
        <mu-flexbox-item class="flex-box-item" basis="40%" v-for="item in goods">
          <router-link :to="{'details',params: { item.id }}">
            <img class="image" v-lazy="item.albumPath" alt="">
            <p class="description">{{item.description}}</p>
            <p class="price">￥{{item.price}}</p>
          </router-link>
        </mu-flexbox-item>
      </mu-flexbox>
    </div>
    <sync-loader :loading="loading"></sync-loader>
  </div>
</template>

<script type="text/ecmascript-6">
export default{
  data() {
    return {
      cid: '',
      loading: false,
      key: '',
      goods: []
    };
  },
  beforeRouteEnter: (to, from, next) => {
    next((vm) => {
      vm.key = '';
      vm.get();
    });
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    get() {
      this.loading = true;
      this.$http.post('../info/fenlei.php', {
      cid: this.$route.params.cid
    }).then((res) => {
       res = res.data;
       this.goods = res;
       setTimeout(this.loading = false, 500);
    });
//      console.log(this.$route.params.cid);
    },
    search() {
      this.loading = true;
      this.$http.post('../info/search.php', {
        key: this.key
      }).then((res) => {
        this.goods = res.data;
        this.loading = false;
      });
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/styles/base.styl"
  #search
    background #f5f5f5
    .search-area
      position fixed
      display flex
      left 0
      top 0
      width 100%
      padding 8px 0
      text-align center
      background inherit
      .search-box
        width 80%
        height 25px
        line-height 25px
        border-radius 4px
        flex 1 1 80%
        padding 0 5px 0 22px
        font-size 15px
        border .1rem solid rgba(0,0,0,.3)
      .icon-fanhui
        width 30px
        padding-top 4px
      .icon-sousuo
        position absolute
        left 32px
        top 13px
        font-size 18px
      &>button
        background transparent
        border none
        outline none
        font-size 15px
    .condition
      position fixed
      top 41px
      left 0
      width 100%
      display flex
      text-align center
      margin-bottom 4px
      font-size 15px
      color #666
      background inherit
      border-1px(#E5E5E5)
      &>:first-child
        color #000
      &>li
        display inline-block
        line-height 30px
        flex 1
    .content-wrapper
      padding-top 71px
      .flex-box
        font-size 0
        margin-right -10px
        padding-top 10px
        .flex-box-item
          margin 0 10px 10px 0
          background #fff
          text-align center
          max-width 12rem
          box-shadow 0 1px 4px rgba(0,0,0,0.3)
          &>a
            color inherit
            .image
              display block
              width 10.7rem
              height 10.7rem
              margin 0 auto
            .description
              display inline-block
              font-size 14px
              overflow hidden
              width 10.7rem
              white-space nowrap
            .price
              font-size 14px
              color red;
</style>
