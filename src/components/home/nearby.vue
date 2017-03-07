<template>
  <div id="nearby">
    <ul>
      <template v-for="(item, index) in goods">
        <template v-if="index == 7">
          <li v-for="food in item.foods">
            <img width="100px" height="70px" :src="food.image" alt="">
            {{food.name}}/{{food.description}}
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

</style>
