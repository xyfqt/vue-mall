<template>
  <div class="goods-swiper">
    <van-swipe @change="onChange" :autoplay="5000" class="swiper-container">
      <van-swipe-item>
        <div class="goods-swiper_item ">
          <img src="http://mwimg.mostonetech.xyz/img/aa2c362e3fa21e074b0152834b4e2516.jpg" alt="">
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="goods-swiper_item">
          <img src="http://mwimg.mostonetech.xyz/img/f7a00dd43dd9bc9c1476acb640d6149d.png" alt="">
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="goods-swiper_item">
          <img src="http://mwimg.mostonetech.xyz/img/730cd7f249d3fb482203c3efdcbbf6da.jpg" alt="">
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="goods-swiper_item">
          <img src="http://mwimg.mostonetech.xyz/img/1128ebf0c5a8c372ed6cdc329af55f5f.jpg" alt="">
        </div>
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">
          {{ current + 1 }}/4
        </div>
      </template>
    </van-swipe>
  </div>
</template>
<script>

  export default {
    name:"GoodsSwiper",
    data() {
      return {
        current: 0,
      };
    },
    methods: {
      onChange(index) {
        this.current = index;
      },
    },
  }

</script>

<style lang="scss" scoped>
  @import '@/assets/css/style.scss';

  .goods-swiper{
    .goods-swiper_item {
      width: 100%;
      height: px2rem(750);
      img {
        width: 100%;
        height: px2rem(750);
      }
    }
    .custom-indicator {
      position: absolute;
      right: px2rem(30);
      bottom: px2rem(30);
      font-size: $size14;
      @include center();
      width: px2rem(80);
      height: px2rem(40);
      color: #fff;
      border-radius: px2rem(44);
      background: rgba(0, 0, 0, 0.6);
    }
  }
</style>
