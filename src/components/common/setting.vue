<template>
<div class="setting">
  <appbar title="设置"></appbar>
  <div class="content-wrapper">
    <mu-list>
      <mu-list-item title="个人资料设置" @click="goUser"></mu-list-item>
      <mu-divider />
      <mu-list-item title="关于" @click="goAbout"></mu-list-item>
      <mu-divider />
    </mu-list>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  methods: {
    goUser() {
      this.$router.push('/user');
    },
    goAbout() {
      this.$router.push('/about');
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
