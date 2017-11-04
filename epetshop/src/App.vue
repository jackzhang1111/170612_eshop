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
  import body from './components/body/body.vue'
  export default{
    components:{
      "eHeader":header,
      "eFooter":footer,
      "eBody":body
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @rem:23.4rem;






</style>

