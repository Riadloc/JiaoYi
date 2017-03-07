<template>
  <div>
    <div class="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <div class="navbar">
        <v-navbar @transfer="getVal"></v-navbar>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import navbar from './common/navbar.vue';
  export default {
    data() {
      return {
        value: 'home'
      };
    },
    methods: {
      getVal (msg) {
        this.value = msg;
        this.$router.push({ path: '/index/' + msg });
      }
    },
    components: {
      'v-navbar': navbar
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    min-height 100%
    padding-bottom 60px
</style>
