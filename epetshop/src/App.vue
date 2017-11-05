<template>
  <div id="wrap">
    <eHeader class="eHeader"></eHeader>
    <scroller>
      <eBody class="eBody"></eBody>
    </scroller>
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
      background-color: #fff;
      z-index: 1;
    }
    .eBody{
      position: absolute;
      width: 100%;
      top: 88/@rem;
      left:0;
    }
    .eFooter{
      position: absolute;
      left:0;
      bottom: 0 /@rem;
      width: 100%;
      height: 55 /@rem;
      background-color: #fff;
      z-index: 1;
    }
  }





</style>

