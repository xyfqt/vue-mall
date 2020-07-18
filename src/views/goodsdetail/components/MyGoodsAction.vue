<template>
  <div class="my-goods-action">
    <van-goods-action>
      <van-goods-action-icon icon="wap-home-o" @click="$router.replace('/')"/>
      <van-goods-action-icon icon="cart-o" :badge="badge ? badge : ''" @click="$router.replace('/shopping-car')"/>
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="onClickButton"
      />
      <van-goods-action-button
        type="danger"
        text="立即购买"
        color="#FF4365"
        @click="onClickButton"
      />
    </van-goods-action>
    <van-popup v-model="show" position="bottom" closeable>
      <div class="popup-goods-info">
        <div class="popup-goods-desc">
          <div class="img-wrap">
            <van-image
              width="100%"
              height="100%"
              lazy-load
              src="http://mwimg.mostonetech.xyz/img/aa2c362e3fa21e074b0152834b4e2516.jpg"
            />
          </div>
          <div class="price">
            <div class="price-top">
              <span class="discount-price">￥58.00</span>
              <span class="origin-price">￥80.00</span>
            </div>
            <div class="goods-name">
              女士地表强温宽松羽绒服，女士地表强温宽松羽绒服
            </div>
          </div>

        </div>
        <goods-spec :data="data"></goods-spec>
        <div class="popup-goods-action">
          <van-goods-action>
            <van-goods-action-button
              type="warning"
              text="加入购物车"
              @click="onClickButton"
            />
            <van-goods-action-button
              type="danger"
              text="立即购买"
              color="#FF4365"
              @click="onClickButton"
            />
          </van-goods-action>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script>
  import {Toast} from 'vant';
  import GoodsSpec from "./GoodsSpec";

  export default {
    name: "MyGoodsAction",
    props:["data"],
    components: {
      GoodsSpec
    },
    data() {
      return {
        badge:0,
        show: false,
      }
    },
    methods: {
      onClickIcon() {
        Toast('点击图标');
      },
      onClickButton() {
        Toast.loading({
          duration: 0,
          message: '正在添加...',
          forbidClick: true,
          loadingType: 'spinner',
        });
        this.show = true;
        setTimeout(()=>{
          this.badge = this.badge+this.data.goodsNum;
          Toast('加入成功');
        },1000)
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/css/style.scss';

  ::v-deep .van-goods-action-button {
    border-radius: 0;
    margin: 0;
    height: 100%;
  }

  ::v-deep .van-goods-action-icon__icon {
    font-size: px2rem(40);
  }

  .popup-goods-info {
    padding: px2rem(32);
    padding-bottom: px2rem(10);

    .popup-goods-desc {
      display: flex;
      align-items: flex-end;

      .img-wrap {
        width: px2rem(200);
        height: px2rem(200);
        border-radius: px2rem(8);
        background: #F6F6F6;
        margin-bottom: px2rem(50);
        margin-right: px2rem(20);

        ::v-deep .van-image__img {
          border-radius: px2rem(8);
        }
      }

      .price {
        flex: 1;
        font-size: $size14;
        line-height: 1.5;
        margin-bottom: px2rem(50);
        .discount-price{
          color: $mainColor;
          font-size: $size16;
        }
        .origin-price{
          color: #909399;
          text-decoration: line-through;
          margin-left: px2rem(10);
        }
      }
    }

    .popup-goods-action {
      margin-top: px2rem(60);

      ::v-deep .van-goods-action {
        position: relative;

        .van-goods-action-button--first {
          border-top-left-radius: px2rem(8);
          border-bottom-left-radius: px2rem(8);
          height: px2rem(88);
        }

        .van-goods-action-button--last {
          border-top-right-radius: px2rem(8);
          border-bottom-right-radius: px2rem(8);
          height: px2rem(88);
        }
      }
    }
  }

</style>
