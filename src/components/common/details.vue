<template>
<div class="details">
  <appbar title="发布"></appbar>
  <section class="details-header">
    <img src="../../../static/images/avatar_default.svg" alt="" class="avatar">
    <div class="sellerInfo">
      <span style="font-weight: bold">{{info.nickname}}</span>
      <time>
        发布于:{{info.address}}
      </time>
    </div>
    <div class="sellerPrice">￥{{info.price}}</div>
  </section>
  <mu-divider />
  <div class="details-content" v-show="!loading">
    <div class="description">{{info.name}}</div>
    <div class="images" v-for="image in images">
      <img v-lazy="image.img" alt="">
    </div>
  </div>
  <div class="details-ratings" v-show="!loading">
    <h2 class="ratings-label">留言</h2>
    <div class="ratings-wrapper">空空如也！</div>
  </div>
  <div class="details-navbar">
    <mu-raised-button label="收藏" @click="favorite" class="details-button favorites" ></mu-raised-button>
    <mu-raised-button label="加入购物车" @click="shopCar" class="details-button add-cart" secondary ></mu-raised-button>
  </div>
  <sync-loader :loading="loading"></sync-loader>
  <mu-toast v-if="toast" :message="message"/>
</div>
</template>

<script type="text/ecmascript-6">
import {mapGetters} from 'vuex';
export default {
  data() {
    return {
      info: {
        nickname: '',
        price: '',
        description: '',
        id: ''
      },
      images: [],
      loading: false,
      toast: false,
      message: ''
    };
  },
  computed: {
    ...mapGetters({
      userInfo: 'getUserInfo'
    })
  },
  watch: {
    toast(val) {
      if (val) {
        setTimeout(() => {
          this.toast = false;
        }, 1500);
      }
    }
  },
  beforeRouteEnter: (to, from, next) => {
    next((vm) => {
      vm.get();
    });
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    get() {
      this.loading = true;
      this.$http.post('../info/details.php', {
        id: this.$route.params.id
      }).then((res) => {
        this.info = res.data.info;
        this.images = res.data.img;
        this.loading = false;
      });
    },
    favorite() {
      let _this = this;
      this.$http.post('../info/favorite.php', {
        pid: this.$route.params.id,
        userid: this.userInfo.userId,
        type: '2'
      }).then((res) => {
        res = res.data;
        if (res.errno === '-1') {
          _this.message = '你已经收藏过该商品！';
          _this.toast = true;
        } else if (res.errno === '0') {
          _this.message = '收藏成功！';
          _this.toast = true;
        } else {
          _this.message = '收藏失败！';
          _this.toast = true;
        }
      });
    },
    shopCar() {
      let _this = this;
      this.$http.post('../info/favorite.php', {
        pid: this.$route.params.id,
        userid: this.userInfo.userId,
        type: '3'
      }).then((res) => {
        res = res.data;
        if (res.errno === '-1') {
          _this.message = '你已经加入心愿单！';
          _this.toast = true;
        } else if (res.errno === '0') {
          _this.message = '加入成功！';
          _this.toast = true;
        } else {
          _this.message = '加入失败！';
          _this.toast = true;
        }
      });
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .details
    padding-top 56px
    padding-bottom 36px
    .mu-appbar
      position fixed
      left 0
      top 0
    .details-header
      width 100%
      height 50px
      vertical-align middle
      display flex
      padding 5px 15px
      .avatar
        display inline-block
        width 40px
        height 40px
        margin-right 15px
        border-radius 50%
      .sellerInfo
        display inline-block
        flex 1
        font-size 12px
        line-height 20px
        vertical-align middle
        span,time
          display block
      .sellerPrice
        line-height 50px
        text-align right
        color red
    .details-content
      .description
        padding 10px 2px
        font-size 14px
        font-weight 600
        letter-spacing 1px
      .images
        width 100%
        display inline-block
        text-align center
        &>img
          width 98%
    .details-ratings
      border-top 1px solid transparent
      .ratings-label
        margin 10px 0
        padding 10px
        border-left 4px solid #51aded
        background-color #f7f7f7
    .details-navbar
      position fixed
      left 0
      bottom 0
      width 100%
      display flex
      .details-button
        flex 1
</style>
