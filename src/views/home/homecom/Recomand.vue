<template>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh" class="refresh-container" @scroll.native="lisScroll">
    <div class="recomd-wrap" ref="wrap">
<!--      <div class="backg"></div>-->
      <index-swiper :distance="progress"></index-swiper>
      <div class="goods-wrap">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <goods-item v-for="item in list" :key="item" class="goods" @click.native="$router.push('/goods-detail')"></goods-item>
        </van-list>
      </div>
    </div>
  </van-pull-refresh>
</template>

<script>
  import IndexSwiper from "@/components/IndexSwiper.vue"
  import GoodsItem from "@/views/home/homecom/components/GoodsItem.vue"
  import {Toast} from 'vant';

  export default {
    name: "Recomand",
    components: {
      IndexSwiper,
      GoodsItem
    },
    data() {
      return {
        count: 0,
        isLoading: false,
        htmlFontSize: 0,
        progress:0,
        list:[1,2,3,4,5,6,7],
        loading: false,
        finished: false,
      }
    },
    mounted() {
      let obj = document.querySelector('html');
      try {
        this.htmlFontSize = parseFloat(window.getComputedStyle(obj, null)['fontSize'].replace(/[^\d.]/g, ''))
      }catch (e) {
      }
    },
    methods: {
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
            this.list.push(this.list.length + 1);
          }
          this.loading = false;

          if (this.list.length >= 40) {
            this.finished = true;
          }
        }, 1000);
      },

      lisScroll(e) {
       this.progress =  e.target.scrollTop / (this.htmlFontSize * 4.2666666667)
        this.$emit("scroll",this.progress)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/css/style.scss';

  .refresh-container {
    width: 100%;
    height: 100%;
    overflow-y: auto;

    .recomd-wrap {
      width: 100%;
      min-height: 100%;
      background: #F6F6F6;
      .goods-wrap{
        padding: px2rem(20) px2rem(32) 0 px2rem(12);
        .goods{
          margin-left: px2rem(20);
          margin-bottom: px2rem(20);
        }
      }
    }

    ::v-deep {

      .van-loading__spinner--circular, .van-pull-refresh__text, .van-loading__text {
        color: #fff !important;
      }
      .van-list__loading .van-loading__spinner--circular,.van-list__loading .van-loading__text{
        color: #999999!important;
      }
    }
  }

</style>
