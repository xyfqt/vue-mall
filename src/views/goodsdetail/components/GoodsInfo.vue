<template>
  <div class="goods-info">
    <div class="goods-title info-wrap">
      <h1 class="goods-name">男士深海矿物肌活水 150ml</h1>
      <div class="price">
        <span class="discount-price">￥50.00</span>
        <span class="origin-price">原价￥50.00</span>
      </div>
    </div>
    <div class="info-wrap goods-spec">
      <h1>规格选择</h1>
      <van-divider/>
      <goods-spec :data="data"></goods-spec>
    </div>
    <div class="goods-remark info-wrap">
      <h1>说明</h1>
      <van-divider/>
      <div class="remark">
        最晚在9月30号发货。美妆产品，暂不支持退换货，质量有问题包退。
      </div>
    </div>
    <div class="detail">
      <h1 class="title">商品详情</h1>
      <van-divider/>
      <div class="detail-rich_text">
        <img src="http://mwimg.mostonetech.xyz/img/aa2c362e3fa21e074b0152834b4e2516.jpg" alt="">
        <img src="http://mwimg.mostonetech.xyz/img/f7a00dd43dd9bc9c1476acb640d6149d.png" alt="">
        <img src="http://mwimg.mostonetech.xyz/img/730cd7f249d3fb482203c3efdcbbf6da.jpg" alt="">
        <img src="http://mwimg.mostonetech.xyz/img/1128ebf0c5a8c372ed6cdc329af55f5f.jpg" alt="">
      </div>
    </div>
  </div>
</template>
<script>
  import GoodsSpec from "./GoodsSpec";
  export default {
    name: "GoodsInfo",
    props:["data"],
    components:{
      GoodsSpec
    },
    data() {
      return {
        goodsNum: 1,
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/css/style.scss';

  .goods-info {
    .info-wrap {
      padding: px2rem(26) px2rem(32);
      background: #fff;
      box-sizing: border-box;

      h1 {
        margin: 0;
        font-size: $size16;
        font-weight: bold;
      }
    }

    .goods-title {
      line-height: 1.5;

      .price {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .discount-price {
          font-size: px2rem(40);
          color: $mainColor;
        }

        .origin-price {
          color: #909399;
          font-size: $size14;
          text-decoration: line-through;
        }
      }
    }

    .goods-spec{
      margin: px2rem(20) 0;
      h1 {
        padding-bottom: px2rem(26);
      }
    }

    .goods-remark {
      font-size: $size14;
      line-height: 1.5;
      margin-bottom: px2rem(20);

      h1 {
        padding-bottom: px2rem(20);
      }

      .remark {
        color: #606266;
        padding-top: px2rem(26);
      }
    }

    .detail {
      font-size: 0;
      background: #fff;
      h1 {
        margin: 0;
        font-size: $size16;
        font-weight: bold;
        padding: px2rem(26) 0 px2rem(20) px2rem(32);
      }
      .detail-rich_text {
        padding-top: px2rem(20);
        img {
          width: 100%;
        }
      }
    }
  }


</style>
