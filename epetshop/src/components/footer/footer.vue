<template>
  <div>
    <ul class="footer-list">
      <li><a href="#" class="cssSprite1"></a></li>
      <li><a href="#" class="cssSprite2"></a></li>
      <li><a href="#" class="cssSprite3"></a></li>
      <li><a href="#" class="cssSprite4"></a></li>
    </ul>
  </div>
</template>

<script>
  export default{}
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../css/common/common";
  @rem:23.4rem;
  div{
    .footer-list{
      height: 55 /@rem;
      overflow: hidden;
      li{
        float: left;
        width: 93 /@rem;
        height: 55 /@rem;
        text-align: center;
        line-height: 90/@rem;
        .cssSprite1{
          .icons();
          background-position: -8/@rem -2/@rem;
        }
        .cssSprite2{
          .icons();
          background-position: -90/@rem -49/@rem;
        }
        .cssSprite3{
          .icons();
          background-position: -90/@rem -95/@rem;
        }
        .cssSprite4{
          .icons();
          background-position: -90/@rem -140/@rem;
        }


      }
    }
  }
</style>
