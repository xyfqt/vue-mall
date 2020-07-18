<template>
  <div class="app-container order-detail">
    <div class="order-wrap">
      <div class="address-info">
        <div class="order-status">
          <div class="status"><span>待付款</span><br><span>15分钟后自动关闭</span></div>
          <img src="../../assets/image/icon/mine/pay-order.png" alt="">
        </div>
        <div class="address-user">
          <div class="address-username">徐福记 13625002588</div>
          <div class="address">福建省厦门市思明区汇金国际中心77号22楼下电梯左手边办公室</div>
        </div>
      </div>
      <goods-order :order="goods">
        <template #buttom>
          <div class="lable-value border_1px_top">
            <span>商品总计</span>
            <span>¥58.00</span>
          </div>
          <div class="lable-value">
            <span>需付款</span>
            <span class="red">¥58.00</span>
          </div>
        </template>
      </goods-order>
      <div class="order-info">
        <div class="lable-value">
          <span>交易单号</span>
          <span>ZSQB2019021448950383892</span>
        </div>
        <div class="lable-value">
          <span>下单时间</span>
          <span>2019-07-21  15:12:23</span>
        </div>
      </div>
    </div>
    <div class="btn-opreate">
      <div class="cancel-btn">
        取消订单
      </div>
      <div class="pay-btn">
        去支付
      </div>
    </div>
  </div>
</template>

<script>
  import GoodsOrder from "@/components/GoodsOrder";

  export default {
    name: "OrderDetail",
    components: {
      GoodsOrder
    },
    data() {
      return {
        goods: {shop: 1, goods: [1], status: 1}
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/css/style.scss';

  .order-detail {
    .order-wrap {
      padding: px2rem(20);
      box-sizing: border-box;

      .address-info {
        background: #fff;
        border-radius: px2rem(16);
        margin-bottom: px2rem(20);

        .order-status {
          width: 100%;
          height: px2rem(200);
          background: linear-gradient(90deg, #FF6D87 0%, #FF4365 100%);
          display: flex;
          align-items: center;
          justify-content: space-around;
          color: #fff;
          border-top-left-radius: px2rem(16);
          border-top-right-radius: px2rem(16);

          .status {
            text-align: center;
            font-size: $size14;

            span:first-child {
              font-size: $size16;
            }
          }

          img {
            width: px2rem(180);
            height: px2rem(180);
          }
        }

        .address-user {
          padding: px2rem(24) px2rem(20) px2rem(28) px2rem(20);
          font-size: $size16;
          color: #16171C;
          line-height: 1.5;

          .address {
            font-size: $size14;
            color: #606266;
          }
        }
      }

      .order-info {
        background: #fff;
        padding: 0 px2rem(20);
        border-radius: px2rem(16);
      }

      .lable-value {
        font-size: $size14;
        color: #909399;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: px2rem(75);
        position: relative;

        span.red {
          color: $mainColor;
        }
      }
    }

    .btn-opreate {
      position: fixed;
      bottom: 0;
      display: flex;
      width: 100%;
      height: px2rem(92);
      font-size: px2rem(34);
      color: #606266;
      div{
        flex: 1;
        @include center();
        background: #fff;
      }
      .pay-btn{
        color: #fff;
        background: $mainColor;
      }
    }

  }
</style>
