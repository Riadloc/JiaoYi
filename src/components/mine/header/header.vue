<template>
  <div class="header">
    <div class="content-wrap" @click="goUser">
      <div class="avatar">
        <img :src="userInfo.avatar_url" alt="头像" width="64" height="64">
      </div>
      <div class="description">
        <span class="username">{{userInfo.nickname}}</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    userInfo: {
      type: Object
    }
  },
  methods: {
    goUser() {
      this.$router.push('/user');
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    width 100%
    height 134px
    padding 21px
    background cornflowerblue
    .content-wrap
      text-align center
      font-size 0
      .avatar
        /*vertical-align middle*/
        &>img
          border-radius 32px
          border 2px solid #ff9590
          background-color #fff
      .description
        padding-top 10px
        .username
          font-size 18px
          font-weight bold
          color: #333333
          background-color transparent
</style>
