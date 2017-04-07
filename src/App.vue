<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .popup-top
    opacity: .8;
    height: 48px;
    line-height: 48px;
    align-items: center;
    justify-content: center;
    max-width: 375px;
</style>
