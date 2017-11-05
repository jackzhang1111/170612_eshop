<template>
  <div id="wrap">
    <eHeader class="eHeader"></eHeader>
    <eBody class="eBody"></eBody>
    <eFooter class="eFooter"></eFooter>
 </div>
</template>

<script>
  import header from './components/header/header.vue'
  import footer from './components/footer/footer.vue'
  import middle from './components/middle/middle.vue'
  export default{
    components:{
      "eHeader":header,
      "eFooter":footer,
      "eBody":middle
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @rem:23.4rem;
  #wrap{
    position: relative;
    width: 100%;
    height:100%;
    .eHeader{
      position: absolute;
      top:0;
      left:0;
      width: 100%;
      height: 87/@rem;
    }
    .eBody{
      width: 100%;
      padding-top: 87/@rem;
    }
    .eFooter{
      position: absolute;
      left:0;
      bottom: 0 /@rem;
      width: 100%;
      height: 55 /@rem;
    }
  }





</style>

