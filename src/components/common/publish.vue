<template>
  <div class="publish">
    <appbar title="发布"></appbar>
    <div class="publish-area">
      <mu-text-field hintText="起个标题" v-model="name"/><br/>
      <mu-text-field hintText="描述一下你的物品" v-model="description" multiLine :rows="4" :rowsMax="4"/><br/>
      <div class="img-list">
        <imageUpload></imageUpload>
      </div>
      <div class="region" @click="selectRegion">
        <i class="iconfont icon-weizhi"></i>
        <span v-if="location">{{location}}</span>
        <span v-else>选择地址</span>
      </div>
      <mu-divider />
      <span>价格</span><mu-text-field hintText="￥0.00" v-model="price"/><br/>
      <mu-divider />
      <span>分类</span><mu-select-field v-model="fenlei" :labelFocusClass="['label-foucs']">
        <mu-menu-item v-for="text,index in list" :value="String(index)" :title="text" />
      </mu-select-field>
      <mu-divider />
    </div>
    <div class="album">
    </div>
    <div class="published">
      <mu-raised-button label="确认发布" @click="publish" class="published-button" primary fullWidth/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import imageUpload from './image-upload';
  import {mapGetters} from 'vuex';
  export default {
    data() {
      return {
        fenlei: '-1',
        price: '',
        name: '',
        description: '',
        list: []
      };
    },
    components: {
      imageUpload
    },
    computed: {
      ...mapGetters({
        location: 'getUserLocation',
        base64: 'getBase64'
      })
    },
    mounted() {
        this.list = ['书籍', '数码', '车辆', '日用品', '服务', '其他'];
    },
    methods: {
      selectRegion() {
        this.$router.push('/region');
      },
      publish() {
        this.$http.post('../info/publish.php', {
          name: this.name,
          description: this.description,
          cid: this.fenlei,
          price: this.price,
          image: this.base64,
          address: this.location
        }).then((res) => {
//          console.log(this.base64);
          console.log(res.data);
        });
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .publish
    height 100%
    .publish-area
      width 85%
      margin 0 auto
      .mu-text-field
        width 70%
        margin 0
        padding-left 20px
        vertical-align middle
      .img-list
        margin 2px 0 10px 0
      .region
        display inline-block
        line-height 40px
    .published
      position fixed
      left 0
      bottom 2px
      width 100%
  .mu-text-field-line
    height 0!important
</style>
