<template>
  <div class="goods-order">
    <div class="single-shop-goods">
      <div class="shop-name">
        <div class="shop-left">
          <img src="http://mwimg.mostonetech.xyz/img/aa2c362e3fa21e074b0152834b4e2516.jpg" alt="">
          <span>默往严选{{order.shop}}</span>
        </div>
        <span v-if="showStatus">{{order.status | statusFilter}}</span>
      </div>
      <van-divider/>
      <div class="cell-goods-wrap" v-for="(item,index) in order.goods" :key="index">
        <div class="cell-goods">
          <div class="goods-info">
            <div class="img-wrap">
              <van-image
                width="100%"
                height="100%"
                lazy-load
                src="http://mwimg.mostonetech.xyz/img/aa2c362e3fa21e074b0152834b4e2516.jpg"
              />
            </div>
            <div class="goods-right">
              <div class="goods-title">女士地表强温宽松羽绒服，女士地表强温宽松羽绒女士地表强温宽松羽绒服。</div>
              <div class="goods-spec ">
                <span>颜色：蓝色 尺寸：2Xl</span>
                <span>×1</span>
              </div>
              <div class="goods-price">
                ¥58.00
              </div>
            </div>
          </div>
        </div>
      </div>
      <slot name="buttom"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsOrder",
    props:{
      showStatus:{
        type:Boolean,
        default:false
      },
      order:{
        type:Object,
        default:null
      }
    },
    filters:{
      statusFilter(val){
        const status = {
          1:"待付款",
          2:"待发货",
          3:"待收货",
          4:"已完成",
          5:"已关闭",
        }
        return status[val];
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/css/style.scss';

  .goods-order {
    .single-shop-goods {
      background: #fff;
      width: 100%;
      border-radius: px2rem(10);
      padding: 0 px2rem(20);
      box-sizing: border-box;
      margin-bottom: px2rem(20);

      .shop-name {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: px2rem(100);
        font-size: $size14;
        color: $mainColor;
        .shop-left{
          font-size: $size16;
          color: #16171C;
          @include center()
        }

        img {
          width: px2rem(50);
          height: px2rem(50);
          margin-right: px2rem(20);
        }
      }

      .cell-goods-wrap {
        padding: px2rem(20) 0;

        .cell-goods {
          display: flex;

          .goods-info {
            display: flex;

            .img-wrap {
              width: px2rem(180);
              height: px2rem(180);
              border-radius: px2rem(8);
              margin-right: px2rem(21);

              ::v-deep .van-image__img {
                border-radius: px2rem(8);
              }
            }

            .goods-right {
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              font-size: $size14;
              color: #16171C;

              .goods-title {
                width: px2rem(460);
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
              }

              .goods-spec {
                font-size: $size12;
                color: #909399;
                display: flex;
                align-items: center;
                justify-content: space-between;
              }
            }
          }
        }
      }

      .cell-goods-item + .cell-goods-item {
        margin-top: px2rem(20);
      }
    }
  }
</style>
