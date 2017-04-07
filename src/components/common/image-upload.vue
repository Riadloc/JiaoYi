<template>
  <div class="image-area">
    <input class="file" type="file" accept="image/*" @change="imgUpload($event)">
    上传图片
    <img :src="base64" alt="" v-show="show" @click="cancel">
  </div>
</template>

<script type="text/ecmascript-6">
  import '../../assets/js/canvasResize';
  export default {
    data() {
      return {
        base64: '',
        show: false
      };
    },
    /* global canvasResize */
    /* eslint no-undef: "error" */
    methods: {
      imgUpload(e) {
        var _this = this;
        canvasResize(e.target.files[0], {
          crop: false,    // 是否裁剪
          quality: 0.9,   // 压缩质量  0 - 1
          rotate: 0,      // 旋转角度
          callback(res) {
            _this.show = true;
            _this.base64 = res;
            _this.$store.dispatch('setBase64', _this.base64);
//            console.log(res);
          }
        });
      },
      cancel() {
        this.show = false;
        this.base64 = '';
        let file = document.getElementsByClassName('file')[0];
        // for IE, Opera, Safari, Chrome
        if (file.outerHTML) {
          file.outerHTML = file.outerHTML;
        } else { // FF(包括3.5)
          file.value = "";
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .image-area
    position: relative;
    cursor: pointer;
    color: #888;
    background: #fafafa;
    border: 1px solid #ddd;
    border-radius: 4px;
    overflow: hidden;
    display: inline-block;
    width 100px
    height 100px
    line-height 100px
    text-align center
    .file
      position absolute
      top 0
      right 0
      opacity 0
      cursor pointer
    img
      position absolute
      top 0
      right 0
      width 100%
      height 100%
</style>
