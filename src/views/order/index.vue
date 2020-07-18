<template>
  <div class="order-wrap app-container">
    <div class="search-wrap">
      <input type="text" @focus="placeholder = false" v-model.trim="content" @blur="placeholder=true">
      <van-icon name="clear" class="clear-icon" v-show="content" @click="content = ''"/>
      <div class="tipwrap">
        <i class="iconfont icon-sousuo1" v-show="placeholder && !content">搜索商品名</i>
      </div>
    </div>
    <NavTabs :tabData="tabData" @changeTab="selectTab" ref="orderTab" :baseWidth="-10" :fllowScroll="false"
             :class="currentTab == 1 ? 'set-tab-margin' : ''">
      <template #unFllowScroll>
        <div class="order-tip tip-fixed" v-show="currentTab === 1">
          超过15分钟未付款订单将自动取消关闭
        </div>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh" class="refresh-container">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <goods-order v-for="(item,index) in dataList" :key="index" :order="item" :showStatus="true" @click.native="$router.push('/order-detail')">
              <template #buttom v-if="item.status == 1">
                <div class="bottom-order order-price border_1px">
                  共{{item.goods.length}}件商品合计：<span>￥58.00</span>
                </div>
                <div class="bottom-order order-opreate">
                  <div class="order-btn order-cancel">取消订单</div>
                  <div class="order-btn order-pay">去支付</div>
                </div>
              </template>
              <template #buttom v-else-if="item.status == 2 || item.status == 4 || item.status == 5">
                <div class="bottom-order order-price ">
                  共{{item.goods.length}}件商品合计：<span>￥58.00</span>
                </div>
              </template>
              <template #buttom v-else-if="item.status == 3">
                <div class="bottom-order order-price border_1px">
                  共{{item.goods.length}}件商品合计：<span>￥58.00</span>
                </div>
                <div class="bottom-order order-opreate">
                  <div class="order-btn order-cancel">查看物流</div>
                  <div class="order-btn order-pay">确认收货</div>
                </div>
              </template>
            </goods-order>
            <!--            <div class="without-data">-->
            <!--              <img src="../../assets/image/icon/order/no-order.png" alt="">-->
            <!--              <span>暂无订单</span>-->
            <!--            </div>-->
          </van-list>
        </van-pull-refresh>
      </template>
    </NavTabs>
  </div>
</template>

<script>
  import NavTabs from "@/components/NavTabs.vue"
  import GoodsOrder from "@/components/GoodsOrder";

  export default {
    name: "Order",
    components: {
      NavTabs,
      GoodsOrder
    },
    data() {
      return {
        currentTab: 0,
        page: 1,
        tabData: [
          {key: 1, value: "全部"},
          {key: 2, value: "待付款"},
          {key: 3, value: "待发货"},
          {key: 4, value: "待收货"},
          {key: 5, value: "已完成"},
          {key: 6, value: "已关闭"},
        ],
        content: "",
        placeholder: true,
        isLoading: false,
        list: [
          {shop: 1, goods: [1], status: 1}, {shop: 2, goods: [1, 2, 3], status: 1},

          {shop: 1, goods: [1], status: 2}, {shop: 2, goods: [1, 2], status: 2},

          {shop: 1, goods: [1], status: 3}, {shop: 2, goods: [1, 2], status: 3},

          {shop: 1, goods: [1], status: 4}, {shop: 2, goods: [1, 2], status: 4},

          {shop: 1, goods: [1], status: 5}, {shop: 2, goods: [1, 2], status: 5},

          {shop: 1, goods: [1], status: 6}, {shop: 2, goods: [1, 2], status: 6},
        ],
        loading: false,
        finished: false,
      }
    },
    computed: {
      dataList() {
        if (this.currentTab) {
          return this.list.filter(item => item.status == this.currentTab)
        } else {
          return this.list
        }
      }
    },
    methods: {
      selectTab(tab, index) {
        this.list =  [
          {shop: 1, goods: [1], status: 1}, {shop: 2, goods: [1, 2, 3], status: 1},

          {shop: 1, goods: [1], status: 2}, {shop: 2, goods: [1, 2], status: 2},

          {shop: 1, goods: [1], status: 3}, {shop: 2, goods: [1, 2], status: 3},

          {shop: 1, goods: [1], status: 4}, {shop: 2, goods: [1, 2], status: 4},

          {shop: 1, goods: [1], status: 5}, {shop: 2, goods: [1, 2], status: 5},

          {shop: 1, goods: [1], status: 6}, {shop: 2, goods: [1, 2], status: 6},
        ];
        this.finished = false;
        this.currentTab = index;
        let el = this.$refs.orderTab.$el.querySelector(".wrap-tab")
        if(el.scrollTop){
          el.scrollTop = 0
        }
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

          for (let i = 0; i < 10; i++) {
            this.list.push({shop: 1, goods: [1], status: this.currentTab || 1});
          }
          this.loading = false;
          if (this.list.length >= 40) {
            this.finished = true;
          }
        }, 1000);
      },
    }

  }
</script>

<style lang="scss" scoped>
  @import '@/assets/css/style.scss';

  .order-wrap {
    padding: px2rem(20);
    box-sizing: border-box;

    .search-wrap {
      width: 100%;
      height: px2rem(68);
      margin-bottom: px2rem(10);
      font-size: $size14;
      position: relative;

      input {
        background: rgba(0, 0, 0, 0);
        width: 100%;
        height: 100%;
        border-radius: px2rem(8);
        padding-left: px2rem(30);
        padding-right: px2rem(60);
        box-sizing: border-box;
        line-height: normal;
        text-align: center;
        position: relative;
        z-index: 10;
      }

      .clear-icon {
        position: absolute;
        right: px2rem(20);
        top: 50%;
        transform: translateY(-50%);
        font-size: px2rem(30);
        color: #d0d0d0;
        z-index: 120;
      }

      .tipwrap {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        color: #AFB2B9;
        background: #fff;
        border-radius: px2rem(8);
        z-index: 1;
        @include center();

        .iconfont {
          font-size: $size14;

          &:before {
            margin-right: px2rem(8);
          }
        }
      }
    }

    .order-tip {
      height: px2rem(70);
      @include center();
      font-size: $size14;
      color: #FF6533;

      &.tip-fixed {
        width: calc(100% + 0.5333333334rem);
        position: relative;
        z-index: 1000;
        left: -0.266666667rem;
        margin-bottom: px2rem(20);
        background: #FFF5F2;
      }
    }

    .refresh-container {
      padding-bottom: px2rem(20);

      .bottom-order {
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }

      .order-price {
        font-size: $size14;
        color: #606266;
        padding-bottom: px2rem(20);
        width: 100%;

        span {
          font-size: $size16;
          color: #16171C;
        }
      }

      .order-opreate {
        height: px2rem(100);

        .order-btn {
          width: px2rem(180);
          height: px2rem(60);
          border-radius: px2rem(8);
          font-size: $size14;
          margin-left: px2rem(30);
          @include center();

          &.order-cancel {
            background: #F6F6F6;
            color: #606266;
          }

          &.order-pay {
            background: $mainColor;
            color: #fff;
          }
        }
      }
    }

    ::v-deep .tab-wrap {
      height: px2rem(88);
      background: none !important;
      margin-bottom: px2rem(20);

      .select-tab {
        margin-bottom: 0;
        height: 100%;

        li {
          font-size: $size14 !important;
          color: #606266 !important;

          &.active {
            color: $mainColor !important;
          }

          &.border-bottom {
            background: $mainColor !important;
            bottom: 0;
            width: px2rem(40);
            height: px2rem(6);
            border-radius: px2rem(20);
          }
        }
      }
    }

    /*.set-tab-margin ::v-deep .tab-wrap {*/
    /*  margin-bottom: 0!important;*/
    /*}*/

    ::v-deep .navbar-wrap {
      width: calc(100% + 0.5333333334rem);
      position: relative;
      left: -0.266666667rem;
      padding: 0 px2rem(20);
      box-sizing: border-box;

      .wrap-tab {
        height: calc(100vh - 2.3465667rem);
        overflow-y: auto;
      }
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
  }

</style>
