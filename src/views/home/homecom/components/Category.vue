<template>
  <div class="category">
    <div class="category-item" v-for="item in list" :key="item" @click="$router.push('/category-goods')">
      <div class="img-wrap"></div>
      <span>宝宝奶粉</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: "Category",
    data(){
      return {
        list:[1,2,3,4,5,6]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/css/style.scss";
  .category{
    width: px2rem(686);
    background: #fff;
    border-radius: px2rem(20);
    margin: 0 auto;
    padding-top: px2rem(10);
    .category-item{
      display: inline-block;
      width: px2rem(170);
      height: px2rem(200);
      text-align: center;
      /*padding: px2rem(10) px2rem(26) px2rem(20) px2rem(26);*/
      font-size: $size14;
      color: #606266;
      .img-wrap{
        width: px2rem(120);
        height: px2rem(120);
        background: #f4f4f4;
        margin: 0 auto;
        margin-bottom: px2rem(10);
      }
    }
  }
</style>
