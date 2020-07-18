<template>
  <div class="shopping-car app-container">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" class="car-goods-wrap">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <car-goods :dataList.sync="list"></car-goods>
      </van-list>
    </van-pull-refresh>

    <div class="settle">
      <van-checkbox v-model="allChecked" checked-color="#FF4365" @click.native="allCheckItem()">全选</van-checkbox>
      <div class="settle-price">
        <span>合计：<i>￥{{allPrice}}</i></span>
        <div class="btn" @click="$router.push('/confirm-order')">结算<span v-if="allGoodsNum">({{allGoodsNum}})</span>
        </div>
      </div>
    </div>
    <!--    <div class="without-data">-->
    <!--      <img src="../../assets/image/icon/order/no-order.png" alt="">-->
    <!--      <span>购物车还是空的哦～</span>-->
    <!--    </div>-->
    <navs-bottom :select="2"></navs-bottom>
  </div>
</template>

<script>
  import CarGoods from "./components/CarGoods";

  export default {
    name: "ShoppingCar",
    components: {
      CarGoods
    },
    data() {
      return {
        list: [
          {shop: 1, allCheck: false, goods: [{name: "女士地表强温宽松羽绒服，女士地表强温", price: 1, num: 1, check: false}]},
          {
            shop: 2,
            allCheck: false,
            goods: [
              {name: "女士地表强温宽松羽绒服，女士地表强温", price: 1, num: 1, check: false}, {
                name: "女士地表强温宽松羽绒服，女士地表强温",
                price: 1,
                num: 1,
                check: false
              }]
          },
        ],
        isLoading: false,
        loading: false,
        finished: false,
        allChecked: false,
        allPrice: 0,
        allGoodsNum: 0,
      }
    },
    watch: {
      list: {
        handler() {
          this.allPrice = 0;
          this.allGoodsNum = 0;
          this.list.map(item => {
            item.goods.map(g => {
              if (g.check) {
                this.allPrice = g.num * g.price + this.allPrice;
                this.allGoodsNum = g.num + this.allGoodsNum;
              }
            })
          });

          let temp = this.list.filter(item => item.allCheck);
          if (temp.length == this.list.length) {
            this.allChecked = true;
          } else {
            this.allChecked = false
          }
        },
        deep: true,
        immediate: true
      }
    },
    methods: {
      allCheckItem() {
        this.list.map(item => {
          item.allCheck = !this.allChecked;
          item.goods.map(g => {
            g.check = !this.allChecked
          })
        })
      },
      onRefresh() {
        // 清空列表数据
        this.finished = false;

        // 重新加载数据
        // 将 loading 设置为 true，表示处于加载状态
        this.loading = true;
        this.onLoad();
      },
      onLoad() {
        setTimeout(() => {
          if (this.isLoading) {
            this.list = [];
            this.isLoading = false;
          }
          let len = this.list.length;
          for (let i = len; i < len + 2; i++) {
            this.list.push({
              shop: i + 1,
              allCheck: false,
              goods: [{name: "女士地表强温宽松羽绒服，女士地表强温", price: 1, num: 1, check: false}]
            });
          }
          this.loading = false;

          if (this.list.length >= 5) {
            this.finished = true;
          }
        }, 1000);
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/css/style.scss';

  .shopping-car {
    overflow-y: auto;
    /*padding-bottom: px2rem(324);*/
    .car-goods-wrap {
      padding: px2rem(20);
      box-sizing: border-box;
      padding-bottom: px2rem(222);
    }

    .without-data {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: $size16;
      color: #909399;

      img {
        width: px2rem(300);
        height: px2rem(300);
        margin-bottom: px2rem(40);
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
      bottom: px2rem(130);
      font-size: px2rem(32);
      color: #606266;
      padding-left: px2rem(32);
      box-sizing: border-box;

      .settle-price {
        display: flex;
        height: 100%;
        align-items: center;

        i {
          font-style: normal;
          color: $mainColor;
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
