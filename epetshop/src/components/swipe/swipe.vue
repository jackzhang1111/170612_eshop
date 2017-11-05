<template>
  <div class="CarouselWrap">
    <mt-swipe :auto="2000" >
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
    position: relative;
    width: 100%;
    height:160 /@rem;
    .mint-swipe{
      .mint-swipe-items-wrap{
        img{
          width: 100%;
        }
      }
      .mint-swipe-indicators{
        position: absolute;
        top:130 /@rem;
        left:350 /@rem;
        .mint-swipe-indicator{
          width: 5 /@rem;
          height:5 /@rem;
          background-color: white;
          border-radius: 30%;
          opacity: 1;
          &.is-active{
            width: 15 /@rem;
            transition: .5s width;
          }
        }
      }
    }
  }

</style>
