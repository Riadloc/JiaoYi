<template>
  <div class="panel">
    <mu-flexbox class="list" justify="flex-start" wrap="wrap" :gutter="0">
      <mu-flexbox-item class="list-item" basis="33%" v-for="(item,index) in category">
        <router-link :to="{'search',params:{(index+1)+''}}">
          <div :class="item" style="display: inline-block;width: 4rem;height: 4rem"></div>
          <p class="text">{{title[index]}}</p>
        </router-link>
      </mu-flexbox-item>
    </mu-flexbox>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      category: ['books', 'digital', 'bike', 'commodity', 'service', 'clothes', 'others'],
      title: ['书籍', '电子产品', '车辆', '日用品', '技能服务', '衣物', '其他']
    };
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .panel
    .list
      padding 10px
      :last-child
        flex 0 0 33%!important
      .list-item
        text-align center
        height 0
        padding-bottom 33%
        &>a
          color #000
  .books
    background url("./books.png") no-repeat
    background-size cover
  .digital
    background url("./digital.png") no-repeat
    background-size cover
  .bike
    background url("./bicycle.png") no-repeat
    background-size cover
  .commodity
    background url("./commodity.png") no-repeat
    background-size cover
  .service
    background url("./service.png") no-repeat
    background-size cover
  .clothes
    background url("./clothes.png") no-repeat
    background-size cover
  .others
    background url("./others.png") no-repeat
    background-size cover
</style>
