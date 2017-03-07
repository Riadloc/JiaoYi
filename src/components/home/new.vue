<template>
  <div id="newitem">
    <ul class="card-zone">
      <template v-for="(item, index) in goods">
        <template v-if="index == 8">
          <li v-for="food in item.foods">
            <div class="picture">
              <img width="100px" height="100px" :src="food.image" alt="">
            </div>
            <div class="content-wrapper">
              <span class="price">￥{{food.price}}</span><br>
              <span class="description">{{food.name}} | {{food.description}}</span>
            </div>
          </li>
        </template>
      </template>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
        return {
            goods: {}
        };
    },
    created() {
        this.$http.get('/api/goods').then((response) => {
            if (response.data.errno === 0) {
                this.goods = response.data.data;
//                console.log(this.goods);
            }
        });
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #newitem
    .card-zone
      font-size 0
      &>li
        display flex
        width 100%
        height 130px
        margin 10px 0 10px 0
        padding 15px
        background #f3f3f3
        .picture
          display inline-block
          flex 0 0 100px
          vertical-align top
        .content-wrapper
          display inline-block
          flex 1
          line-height 50px
          text-align center
          .price
            color red
            font-weight bold
            font-size large
          .description
            line-height 20px
            font-size 14px
            font-weight bold
</style>
