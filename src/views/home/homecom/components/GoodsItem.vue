<template>
  <div class="goods-item">
    <div class="img-wrap">
      <van-image
        width="100%"
        height="100%"
        lazy-load
        src="http://mwimg.mostonetech.xyz/img/aa2c362e3fa21e074b0152834b4e2516.jpg"
      />
    </div>
    <div class="goods-info">
      <div class="goods-title">女士地表强温宽松羽绒服女士地表强温宽松羽绒服</div>
      <div class="goods-num">销量564</div>
      <div class="goods-price">
        <i class="price">¥50.00</i>
        <i class="line-price">¥80.00</i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodsItem',
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/css/style.scss';

  .goods-item {
    width: px2rem(333);
    height: px2rem(550);
    border-radius: px2rem(8);
    background: #fff;
    display: inline-block;

    .img-wrap {
      width: px2rem(333);
      height: px2rem(333);
      background: #f4f4f4;
      border-radius: px2rem(8);
      ::v-deep .van-image__img{
        border-top-left-radius: px2rem(8);
        border-top-right-radius: px2rem(8);
      }
    }

    .goods-info {
      line-height: 1.5;
      padding: px2rem(14) px2rem(20);

      .goods-title {
        width: 100%;
        height: px2rem(80);
        font-size: $size14;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .goods-num {
        color: #909399;
        font-size: $size12;
        padding: px2rem(10) 0;
      }

      .goods-price i {
        color: #909399;
        font-size: $size12;
        font-style: normal;

        &.price {
          font-size: $size16;
          color: $mainColor;
        }

        &.line-price {
          text-decoration: line-through;
          margin-left: px2rem(12);
        }
      }
    }
  }
</style>
