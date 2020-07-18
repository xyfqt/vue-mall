<template>
  <div class="index-swiper" :style="{background:`rgba(255,67,101,${1-distance})`}"
       @touchstart.stop="cancelBuble" @touchmove.stop="cancelBuble" @touchend.stop="cancelBuble">
    <div class="swiper-wrap">
      <van-swipe @change="onChange" :autoplay="3000" class="swiper-container">
        <van-swipe-item>
          <div class="index-swiper_item ">
            <img src="http://mwimg.mostonetech.xyz/img/aa2c362e3fa21e074b0152834b4e2516.jpg" alt="">
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="index-swiper_item">
            <img src="http://mwimg.mostonetech.xyz/img/f7a00dd43dd9bc9c1476acb640d6149d.png" alt="">
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="index-swiper_item">
            <img src="http://mwimg.mostonetech.xyz/img/730cd7f249d3fb482203c3efdcbbf6da.jpg" alt="">
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="index-swiper_item">
            <img src="http://mwimg.mostonetech.xyz/img/1128ebf0c5a8c372ed6cdc329af55f5f.jpg" alt="">
          </div>
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">
            <i :class="current == 0 ? 'active' : ''"></i>
            <i :class="current == 1 ? 'active' : ''"></i>
            <i :class="current == 2 ? 'active' : ''"></i>
            <i :class="current == 3 ? 'active' : ''"></i>
          </div>

        </template>
      </van-swipe>
    </div>
  </div>
</template>
<script>
  export default {
    name: "IndexSwiper",
    data() {
      return {
        current: 0,
      };
    },
    props:["distance"],
    methods: {
      onChange(index) {
        this.current = index;
      },
      cancelBuble() {
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/assets/css/style.scss';

  .index-swiper {
    width: 100%;
    height: px2rem(310);
    padding: px2rem(20);
    padding-top: px2rem(10);
    box-sizing: border-box;
    background: $mainColor;

    .custom-indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;

      i {
        display: inline-block;
        background: #fff;
        width: px2rem(10);
        height: px2rem(10);
        border-radius: px2rem(8);
        margin-right: px2rem(12);
        transition: all 0.2s;

        &.active {
          background: $mainColor;
          width: px2rem(26);
        }
      }
    }
  .swiper-wrap,.swiper-container{
    border-radius: px2rem(10);
    overflow: hidden;
  }
    .index-swiper_item {
      width: 100%;
      height: px2rem(280);
      img {
        width: 100%;
      }
    }

  }
</style>
