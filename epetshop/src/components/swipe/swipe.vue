<template>
  <div class="CarouselWrap">
    <mt-swipe :auto="2000">
      <mt-swipe-item><img src="../../img/Carousel1.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../img/Carousel2.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../img/Carousel3.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../img/Carousel4.jpg" alt=""></mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'mint-ui'
  export default{
    components:{
      Swipe:Swipe,
      SwipeItem:SwipeItem
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @rem: 23.4rem;
  .CarouselWrap{
    width: 100%;
    height:160 /@rem;
    img{
      width: 100%;
      height:100%;
    }
  }

</style>
