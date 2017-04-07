<template>
<div id="region">
  <appbar title="定位"></appbar>
  <sync-loader :loading="loading"></sync-loader>
  <div class="location-area">
    <p class="label">当前定位</p>
    <div v-if="regions.info" class="location-button">
      <mu-raised-button class="region-button" @click="selectRegion">{{region.city + region.district + region.township + region.street}}</mu-raised-button>
    </div>
    <mu-toast v-if="toast" message="定位失败"/>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex';
export default {
  data() {
    return {
      loading: false,
      toast: false,
      regions: [],
      region: []
    };
  },
  computed: {
  ...mapGetters({
      userInfo: 'getUserInfo'
    })
  },
  created() {
    /* global AMap:true */
    /* eslint no-undef: "error" */
    this.loading = true;
    if (window.window.sessionStorage.address) {
      this.region = window.window.sessionStorage.address;
    }
    let _this = this;
    let geolocation = new AMap.Geolocation({enableHighAccuracy: true});
    geolocation.getCurrentPosition(function (status, res) {
      if (status === 'complete') {
        _this.regions = res;
        _this.region = res.addressComponent;
//        console.log(res);
        _this.loading = false;
        window.window.sessionStorage.address = _this.region;
//        console.log(res.formattedAddress);
      } else {
        _this.showToast();
        _this.loading = false;
      }
    });
  },
  methods: {
    showToast () {
      this.toast = true;
      if (this.toastTimer) clearTimeout(this.toastTimer);
      setTimeout(() => { this.toast = false; }, 2000);
    },
    selectRegion() {
      if (this.userInfo.email) {
        let location = this.region.city + this.region.district;
        this.$store.dispatch('setUserLocation', location);
      }
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
#region
  .location-area
    padding 20px
    .label
      margin-bottom 15px
      font-size 15px
      font-weight bold
    .location-button
      .region-button
        padding 0 5px
</style>
