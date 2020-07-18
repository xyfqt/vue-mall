<template>
  <div class="second-category app-container" @touchstart.stop="touchStop" @touchmove.stop="touchStop" @touchend.stop="touchStop">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" class="refresh-container" >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <category-goods v-for="item in list" :key="item" class="list-item-goods"></category-goods>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
  import CategoryGoods from "../components/CategoryGoods";

  export default {
    name: "SecondCategory",
    components: {
      CategoryGoods
    },
    data() {
      return {
        list: [1, 2, 3, 4, 5, 6, 7],
        loading: false,
        finished: false,
        isLoading: false,
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
      touchStop(){}
    }
  }

</script>

<style lang="scss" scoped>
  @import '@/assets/css/style.scss';

  .second-category {
    padding: px2rem(18) px2rem(21);
    box-sizing: border-box;
    overflow-y: auto;
    .list-item-goods{
      margin-bottom: px2rem(20);
    }
  }

</style>
