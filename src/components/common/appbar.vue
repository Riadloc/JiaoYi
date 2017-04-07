<template>
  <div class="appbar">
    <mu-appbar :title="title">
      <i class="iconfont icon-fanhui" slot="left" @click="back"></i>
    </mu-appbar>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'appbar',
  props: {
    title: {
      type: String
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.appbar
  position fixed
  left 0
  top 0
  width 100%
</style>
