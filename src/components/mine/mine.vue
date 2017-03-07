<template>
  <div class="mine">
    <v-header></v-header>
    <div class="divider"></div>
    <div class="list">
      <mu-list>
        <mu-list-item title="我发布的">
          <mu-icon slot="left" value="inbox"></mu-icon>
        </mu-list-item>
        <mu-divider />
        <mu-list-item title="我买到的">
          <mu-icon slot="left" value="send"></mu-icon>
        </mu-list-item>
        <mu-divider />
        <mu-list-item title="我卖出的">
          <mu-icon slot="left" value="drafts"></mu-icon>
        </mu-list-item>
        <mu-divider />
        <mu-list-item title="我收藏的">
          <mu-icon slot="left" value="grade"></mu-icon>
        </mu-list-item>
        <mu-divider />
        <div class="divider"></div>
        <mu-divider />
        <mu-list-item title="设置">
          <mu-icon slot="left" value="settings"></mu-icon>
        </mu-list-item>
        <mu-divider />
      </mu-list>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './header/header.vue';
  export default {
    components: {
      'v-header': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .divider
    width 100%
    height 15px
    background-color RGB(229,229,229)
    border-top 1px solid #e8e8e8
    border-bottom 1px solid #e8e8e8
</style>
