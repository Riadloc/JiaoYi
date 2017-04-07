<template>
  <div class="mine">
    <v-header v-if="userInfo.email" :userInfo="userInfo"></v-header>
    <v-header2 v-if="!userInfo.email"></v-header2>
    <mu-list>
      <template v-for="(item,index) in values">
        <router-link :to="{'collect', params: {index,title: titles[index]}}">
          <mu-list-item :title="titles[index]">
            <i :class="'icon-'+values[index]" class="iconfont" slot="left"></i>
          </mu-list-item>
        </router-link>
        <mu-divider />
      </template>
      <mu-list-item title="设置" @click="goSetting">
        <mu-icon slot="left" value="settings"></mu-icon>
      </mu-list-item>
      <mu-divider />
    </mu-list>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './header/header.vue';
  import header2 from './header/header2.vue';
  import {mapGetters} from 'vuex';
  export default {
    components: {
      'v-header': header,
      'v-header2': header2
    },
    data() {
      return {
        values: ['fabu', 'womaidaode', 'biaoxingfill', 'goods'],
        titles: ['我发布的', '我买到的', '我的收藏', '我的购物车']
      };
    },
    computed: {
      ...mapGetters({
        userInfo: 'getUserInfo'
      })
    },
    methods: {
      goSetting() {
        this.$router.push('/setting');
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .mine
    width 100%

  /*.mu-item-wrapper*/
    /*:last-child*/
      /*margin-top 10px*/
</style>
