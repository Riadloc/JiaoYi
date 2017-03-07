<template>
  <div id="search">
    <div class="search-area">
      <i class="iconfont icon-fanhui" @click="back"></i>
      <input type="text" class="search-box">
      <a href="#">搜索</a>
    </div>
    <ul class="condition">
      <li>综合</li>
      <li>发布时间</li>
      <li>距离</li>
      <li>价格</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default{
  methods: {
      back: function () {
        this.$router.go(-1);
      }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/styles/base.styl"
  #search
    .search-area
      width 100%
      height auto
      padding-top 8px
      text-align center
      .search-box
        width 80%
        height 25px
        line-height 25px
        border-radius 4px
        border 1px solid #000
    .condition
      display flex
      text-align center
      border-1px(#999)
      &>li
        display inline-block
        line-height 30px
        flex 1
</style>
