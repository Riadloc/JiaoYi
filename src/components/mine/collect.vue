<template>
<div class="collect">
  <appbar :title="title"></appbar>
  <ul class="card-zone" v-show="!loading">
    <li v-for="good in goods" @click="linkToDetails(good)" @touchstart="touchStart($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)">
      <div class="picture">
        <img width="128px" height="128px" :src="good.albumPath" alt="">
      </div>
      <div class="content-wrapper">
        <span class="description">{{good.description}}</span>
        <p class="price-line">
          <span class="price">￥{{good.price}}</span>
          <button class="goumai">购买</button>
        </p>
      </div>
    </li>
  </ul>
  <div v-if="!goods" class="blank">
    <img src="./pikachu.svg" alt="空的">
    <span>空空如也！</span>
  </div>
  <sync-loader :loading="loading"></sync-loader>
</div>
</template>

<script type="text/ecmascript-6">
import {mapGetters} from 'vuex';
export default{
  data() {
    return {
      title: '',
      loading: false,
      blank: false,
      goods: [],
      target: undefined,
      start: {}
    };
  },
  computed: {
    ...mapGetters({
      userInfo: 'getUserInfo'
    })
  },
  beforeRouteEnter: (to, from, next) => {
    next((vm) => {
      vm.get();
    });
  },
  methods: {
    get() {
      this.title = this.$route.params.title;
      this.loading = true;
      this.$http.post('../info/collect.php', {
        type: this.$route.params.id,
        userid: this.userInfo.userId
      }).then((res) => {
        res = res.data;
        this.goods = res;
        this.loading = false;
      });
      if (this.$route.params.id === 2) {
        this.tips = true;
      }
    },
    linkToDetails(good) {
      this.$router.push({name: 'details', params: { id: good.id }});
    },
    touchStart(e) {
      this.target = e.currentTarget;
      let touches = e.touches[0];
      this.start = {
        x: touches.pageX,
        y: touches.pageY
      };
    },
    touchMove(e) {
      let touches = e.touches[0];
      let delta = {
        x: touches.pageX - this.start.x,
        y: touches.pageY - this.start.y
      };
      if (Math.abs(delta.x) > Math.abs(delta.y)) {
        e.preventDefault();
      }
    },
    touchEnd(e) {
      let touches = e.changedTouches[0];
      let delta = {
        x: touches.pageX - this.start.x,
        y: touches.pageY - this.start.y
      };
      if (delta.x < -100) {
        let father = this.target.parentNode;
        father.removeChild(this.target);
      }
    },
    handleClose() {
      this.tips = false;
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .collect
    .blank
      font-size 16px
      height 20px
      position absolute
      top 50%
      left 50%
      transform translate(-50%,-50%)
    .card-zone
      &>li
        margin-bottom 0
        padding 0
        .content-wrapper
          padding 15px
          .price-line
            .price
              font-size 1rem
              color red
              display inline-block
              vertical-align middle
            .goumai
              border 1px solid rgba(255,0,0,.3)
              border-radius 2px
              color red
              font-size 14px
              line-height 16px
              float right
              outline none
              background transparent
              margin-top 3px
</style>
