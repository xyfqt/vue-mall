<template>
  <div class="app-container">
    <img src="./../assets/image/404.png" alt="">
    <span>页面找不到了</span>
    <van-button plain type="primary" to="/" style="width:120px;margin-top: 30px">返回首页</van-button>
<!--    <van-button type="primary" to="index">路由跳转</van-button>-->
  </div>
</template>

<script>
  export default {
    name: 'NotFound',
  }
</script>

<style lang="scss" scoped>
  /*@import '@/assets/css/style.scss';*/
  .app-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    text-align: center;
    img {
      margin-top: 20vh;
      width: 100%;
      max-width: 500px;
    }
  }
</style>
