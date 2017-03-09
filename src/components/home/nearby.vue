<template>
  <div id="nearby">
    <ul class="card-zone">
      <li v-for="food in goods">
        {{ food.pName }}
        <div class="picture">
          <img width="100px" height="100px" :src="food.albumPath" alt="">
        </div>
        <div class="content-wrapper">
          <span class="price">￥{{food.iPrice}}</span><br>
          <span class="description">{{food.pName}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        goods: []
      };
    },
    created() {
      this.$http.post('http://www.imac1.pw/firstpage.php').then((response) => {
        let temp = response.data;
//        console.log(temp);
        this.goods = temp;
      });
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #nearby
    border 1px solid transparent
    background-color RGB(229,229,229)
    .card-zone
      font-size 0
      &>li
        display flex
        width 100%
        height 130px
        margin 10px 0 10px 0
        padding 15px
        background #fff
        .picture
          display inline-block
          flex 0 0 100px
          vertical-align top
        .content-wrapper
          display inline-block
          flex 1
          line-height 30px
          text-align center
          .price
            color red
            font-weight bold
            font-size large
          .description
            line-height 20px
            font-size 14px
            /*font-weight bold*/
</style>
