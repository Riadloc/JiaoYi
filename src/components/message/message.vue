<template>
  <div class="message">
    <mu-appbar title="我的消息"></mu-appbar>
    <mu-list>
      <mu-sub-header>最近聊天记录</mu-sub-header>
      <mu-list-item title="留言">
        <mu-avatar src="../../../static/images/avatar-2.png" slot="leftAvatar"/>
        <mu-icon value="chat_bubble" slot="right"/>
      </mu-list-item>
      <mu-list-item title="系统消息">
        <mu-avatar src="../../../static/images/avatar-3.png" slot="leftAvatar"/>
        <mu-icon value="chat_bubble" slot="right"/>
      </mu-list-item>
    </mu-list>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
