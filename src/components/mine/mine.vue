<template>
  <div class="mine">
    <v-header2></v-header2>
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
  import header2 from './header/header2.vue';
  export default {
    components: {
      'v-header': header,
      'v-header2': header2
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .mine
    width 100%

  .mu-item-wrapper
    &:nth-last-child(0)
      margin-top 10px
</style>
