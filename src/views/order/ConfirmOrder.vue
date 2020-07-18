<template>
  <div class="confirm-order app-container">
    <div class="wrap">
      <div class="take-address">
        <div class="select-address">选择收货地址</div>
        <!--          <div class="address-info">-->
        <!--              <div class="name">徐福记 13625002588</div>-->
        <!--              <div class="address">福建省厦门市思明区汇金国际中心77号22楼下电梯左手边办公室</div>-->
        <!--          </div>-->
        <van-icon class="icon" name="arrow"/>
      </div>
      <goods-order :order="goods">
        <template #buttom>
          <div class="lable-value border_1px_top">
            <span>备注：</span>
            <input type="text" placeholder="选填，60字以内" maxlength="60">
          </div>
          <div class="lable-value border_1px_top">
            <span>运费：</span>
            <span>包邮</span>
          </div>
        </template>
      </goods-order>
    </div>
    <div class="settle">
      <span>合计：<i>￥0</i></span>
      <div class="settle-price">
        <span>共1件商品</span>
        <div class="btn">立即支付</div>
      </div>
    </div>
  </div>
</template>

<script>
  import GoodsOrder from "@/components/GoodsOrder";

  export default {
    name: "ConfirmOrder",
    components: {
      GoodsOrder,
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

  .confirm-order {
    overflow-y: auto;

    .wrap {
      padding: px2rem(20);
      box-sizing: border-box;

      .take-address {
        width: 100%;
        height: px2rem(200);
        background-color: #fff;
        border-radius: px2rem(8);
        padding: px2rem(35) px2rem(20);
        box-sizing: border-box;
        margin-bottom: px2rem(20);
        background-image: url("../../assets/image/icon/order/address-bg.png");
        background-size: 100% 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .icon {
          color: #999;
        }

        .select-address {
          font-size: px2rem(40);
          font-weight: bold;
        }

        .address-info {
          font-size: $size16;
          line-height: 1.5;

          .address {
            font-size: $size14;
            color: #606266;
          }
        }
      }

      .lable-value {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: px2rem(100);
        font-size: $size14;
        color: #16171C;
        position: relative;

        input {
          text-align: right;
          flex: 1;
        }
      }
    }

    .settle {
      width: 100%;
      display: flex;
      align-items: center;
      position: fixed;
      height: px2rem(92);
      justify-content: space-between;
      background: #fff;
      bottom: px2rem(0);
      font-size: px2rem(32);
      color: #606266;
      padding-left: px2rem(32);
      box-sizing: border-box;

      i {
        font-style: normal;
        color: $mainColor;
        margin-right: px2rem(10);
      }

      .settle-price {
        display: flex;
        height: 100%;
        align-items: center;

        span {
          font-size: $size12;
          color: #909399;
          margin-right: px2rem(10);
        }

        .btn {
          width: px2rem(250);
          height: 100%;
          background: $mainColor;
          color: #fff;
          @include center();
        }
      }
    }
  }
</style>
