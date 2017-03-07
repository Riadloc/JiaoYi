<template>
  <div class="panel">
    <ul class="list">
      <li class="books"></li>
      <li class="digital"></li>
      <li class="bike"></li>
      <li class="commodity"></li>
      <li class="service"></li>
      <li class="askfor"></li>
      <li class="others"></li>
    </ul>
    <!--<mu-flexbox>-->
      <!--<mu-flexbox-item class="books"></mu-flexbox-item>-->
      <!--<mu-flexbox-item class="digital"></mu-flexbox-item>-->
      <!--<mu-flexbox-item class="bike">-->

      <!--</mu-flexbox-item>-->
    <!--</mu-flexbox>-->
  </div>
</template>

<script type="text/ecmascript-6">
export default {

};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/styles/base.styl"
  .panel
    .list
      display flex
      flex-wrap wrap
      &>li
        width 64px
        height 64px
        margin 20px 30px 20px 30px
        &.books
          background url("./books.png")
          add-title('书籍')
        &.digital
          background url("./digital.png")
          add-title('数码')
        &.bike
          background url("./bicycle.png")
          add-title('车辆')
        &.commodity
          background url("./commodity.png")
          add-title('日用品')
        &.service
          background url("./service.png")
          add-title('服务')
        &.askfor
          background url("./askfor.png")
          add-title('求购')
        &.others
          background url("./others.png")
          add-title('其他')
</style>
