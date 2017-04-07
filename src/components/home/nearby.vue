<template>
  <div id="nearby">
    <ul class="card-zone">
      <li v-for="good in goods" @click="linkToDetails(good)">
        <!--<router-link :to="{name: 'details',params: { id: good.id }}">-->
          <div class="picture">
            <img width="100px" height="100px" v-lazy="good.albumPath" alt="">
          </div>
          <div class="content-wrapper">
            <div class="card-header">
              <img src="../../../static/images/avatar_default.svg" alt="" class="avatar">
              <div class="sellerInfo">
                <span class="nickname">{{good.nickname}}</span>
                <span class="region">{{good.address}}</span>
              </div>
              <span class="price">￥{{good.price}}</span>
            </div>
            <p class="description">{{good.description}}</p>
          </div>
        <!--</router-link>-->
      </li>
    </ul>
    <mu-infinite-scroll :scroller="scroller" :loading="loading" loadingText="加载中..." @load="loadMore"/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        scroller: null,
        goods: [],
        offset: 0,
        loading: false
      };
    },
    created() {
      this.get();
    },
    mounted() {
      this.scroller = document.getElementsByClassName('home')[0];
    },
    beforeRouteLeave: (to, from, next) => {
      if (to.name === 'details') {
        window.window.sessionStorage.scrollTop = document.getElementsByClassName('home')[0].scrollTop;
      }
      next();
    },
    methods: {
      get() {
        this.loading = true;
        this.$http.post('/info/firstpage.php', {
          pageid: (this.offset / 6) + 1,
          type: '1'
        }).then((response) => {
          let temp = response.data;
          for (let i = 0; i < temp.length; i++) {
            this.goods.push(temp[i]);
          }
          this.offset = this.offset + 6;
          this.loading = false;
        });
      },
      linkToDetails(e) {
        this.$router.push({name: 'details', params: { id: e.id }});
      },
      loadMore () {
        if (this.offset <= 40) {
          this.get();
        } else {
          return false;
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #nearby
    background-color #e5e5e5
</style>
