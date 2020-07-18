<template>
  <div class="search-page app-container" @touchstart.stop="touchStop" @touchmove.stop="touchStop"
       @touchend.stop="touchStop">
    <search-components @search="search" @content="addHistory" :item="sItem"></search-components>
    <search-history :isSeach="isSearch" :history="history" v-if="!isSearch"
                    @search="searchItem"
                    @clear="clearHistory"></search-history>
    <search-list v-else></search-list>
    <!--    <div class="no-result">-->
    <!--      <div class="no-result-wrap">-->
    <!--        <img src="../../../assets/image/icon/index/no-result.png" alt="">-->
    <!--        <span>暂无搜索结果</span>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<script>
  import SearchHistory from "./components/SearchHistory";
  import SearchComponents from "./components/SearchComponents"
  import SearchList from "./components/SearchList"

  export default {
    name: "IndexSearch",
    components: {
      SearchHistory,
      SearchComponents,
      SearchList
    },
    data() {
      return {
        isSearch: false,
        history: [],
        sItem:""
      }
    },
    created() {
      if (localStorage.getItem("search-his")) {
        this.history = localStorage.getItem("search-his").split(",");
      }
    },
    methods: {
      search(status) {
        this.isSearch = status;
      },
      addHistory(content) {
        if (content) {
          this.history.unshift(content);
          let set = new Set(this.history);
          this.history = Array.from(set);
          localStorage.setItem("search-his", this.history.toString())
        }
      },
      searchItem(item) {
        this.isSearch = true;
        this.sItem = item;
      },
      clearHistory() {
        this.history = [];
        localStorage.setItem("search-his", "")
      },
      touchStop() {

      }
    }
  }

</script>

<style lang="scss" scoped>
  @import '@/assets/css/style.scss';

  .search-page {
    box-sizing: border-box;
    overflow-y: auto;

    .no-result {
      width: 100%;
      height: calc(100vh - 1.28rem);
      display: flex;
      background: #fff;

      .no-result-wrap {
        margin: auto;
        font-size: $size16;
        color: #909399;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        img {
          width: px2rem(300);
          height: px2rem(300);
          margin-bottom: px2rem(40);
        }
      }
    }
  }

</style>
