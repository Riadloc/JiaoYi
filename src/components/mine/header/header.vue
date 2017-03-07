<template>
  <div class="header">
    <div class="content-wrap">
      <div class="avatar">
        <img src="./emoticon.png" alt="头像" width="64" height="64">
      </div>
      <div class="description">
        <span class="username">吃屎不忘拉屎人</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {

};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    background url("./userbg.jpg") no-repeat
    .content-wrap
      padding 24px 12px 18px 12px
      text-align center
      font-size 0
      .avatar
        vertical-align middle
        &>img
          border-radius 32px
          border 2px solid #ff9590
      .description
        padding-top 10px
        .username
          font-size 18px
          font-weight bold
          color: #333333
          background-color transparent
</style>
