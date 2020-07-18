<template>
  <div class="category-goods">
    <div class="img-wrap">
      <van-image
        width="100%"
        height="100%"
        lazy-load
        src="http://mwimg.mostonetech.xyz/img/aa2c362e3fa21e074b0152834b4e2516.jpg"
      />
    </div>
    <div class="goods-info">
      <div class="goods-title">
        秋冬新款休闲韩版连裙，潮流服饰，加厚羽绒服。
      </div>
      <div class="goods-price">
        <span>￥50.00 <em>￥80.00</em></span>
        <div class="goods-num">销量：80</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CategoryGoods"
  }

</script>

<style lang="scss" scoped>
  @import '@/assets/css/style.scss';

  .category-goods {
    width: 100%;
    height: px2rem(260);
    background: #fff;
    border-radius: px2rem(16);
    padding: px2rem(20);
    box-sizing: border-box;
    display: flex;

    .img-wrap {
      width: px2rem(220);
      height: px2rem(220);
      border-radius: px2rem(8);
      margin-right:px2rem(30);
      ::v-deep .van-image__img {
        border-radius: px2rem(8);
      }
    }
    .goods-info{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1;
      .goods-title{
        font-size: $size14;
      }
      .goods-price{
        color: #909399;
        font-size: $size12;
        display: flex;
        justify-content: space-between;
        span:first-child{
          color: #E04335;
          font-size: px2rem(36);
          em{
            font-style: normal;
            color: #909399;
            font-size: $size12;
          }
        }
        .goods-num{
          display:flex;
          align-items:flex-end;
          position: relative;
          bottom: px2rem(4);
        }
      }
    }
  }


</style>
