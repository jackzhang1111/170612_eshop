<template>
  <div>
    <div class="header-up">
      <span>狗狗站</span>
      <span>|</span>
      <span>重庆</span>
      <Icon type="arrow-down-b"></Icon>
      <input type="text" disabled="disabled" placeholder="   搜索商品和品牌">
      <span class="icon"></span>
    </div>
    <div class="header-down">
      <ul class="header-list">
        <li><a href="#"><span class="clickColor">首页1</span></a></li>
        <li><a href="#"><span>首页2</span></a></li>
        <li><a href="#"><span>首页3</span></a></li>
        <li><a href="#"><span>首页4</span></a></li>
        <li><a href="#"><span>首页5</span></a></li>
        <li><a href="#"><span>首页6</span></a></li>
        <li><a href="#"><span>首页7</span></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{}
</script>

<style lang="less" rel="stylesheet/less">
  @rem:23.4rem;
  div{
    width: 100%;
    height: 87/@rem;
    .header-up{
      position: relative;
      height: 51/@rem;
      line-height: 51/@rem;
      span{
        color: #898989;
        &:nth-of-type(1){
          margin-left: 10 /@rem;;
        }
      }
      input{
        display: inline-block;
        width: 220 /@rem;
        height: 25 /@rem;
        border-radius: 5%;
        margin-left: 3 /@rem;
      }
      .icon{
        float: right;
        margin-top: 10 /@rem;
        margin-right: 5 /@rem;
        width: 25 /@rem;
        height:25 /@rem;
        background: url("../../img/mydope.png") no-repeat;
        background-size: 100% 100%;
      }
    }
    .header-down{
      position: relative;
      height:35 /@rem;
      .header-list{
        overflow: hidden;
        width: 530 /@rem;
        height: 100%;
        li{
          float: left;
          width: 75 /@rem;
          height: 36 /@rem;
          text-align: center;
          line-height:36 /@rem;
          a{
            span{
              font-size: 14 /@rem;
              color: #898989;
              &.clickColor{
                color: green;
              }
            }
          }
        }
      }
    }
  }
</style>
