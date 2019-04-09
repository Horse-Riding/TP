<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    data() {
      return {
        galleryElements: null
      };
    },
    components: {
    },
    beforeMount() {
    },
    created() {
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  html,body
    height:100%
    width:100%
    #app
      width:100%
      height:100%
</style>
