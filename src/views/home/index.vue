<template>
  <div class="home app-container">
    <div class="search-bar" :style="searchStyle">
      <div class="search" @click="$router.push('/search')">
        <i class="iconfont icon-sousuo1">输入商品名称进行搜索</i>
      </div>
    </div>
    <NavTabs :tabData="tabData" @changeTab="selectTab" :distance="scrolldis" ref="navTabs">
      <template #lislot>
        <li class="tab-item" @click="$router.push('/category')">
          <img v-if="scrolldis > 0.7" src="../../assets/image/icon/index/more-pink.png" alt="">
          <img v-else src="../../assets/image/icon/index/more_white.png" alt="">
        </li>
      </template>
      <template #1>
        <recomand @scroll="lisScroll"></recomand>
      </template>
      <template #2>
        <other-category></other-category>
      </template>
    </NavTabs>
    <navs-bottom :select="0"></navs-bottom>
  </div>
</template>

<script>
  import NavTabs from "@/components/NavTabs.vue"
  import Recomand from "@/views/home/homecom/Recomand.vue"
  import OtherCategory from "@/views/home/homecom/OtherCategory.vue"

  export default {
    name: 'Home',
    components: {
      NavTabs,
      Recomand,
      OtherCategory
    },
    data() {
      return {
        currentTab: 0,
        scrolldis: 0,
        searchStyle: {
          background: "#FF4365"
        },
        tabData: [
          {key: 1, value: "推荐"},
          {key: 2, value: "男装"},
          {key: 3, value: "女装"},
          {key: 4, value: "母婴"},
          {key: 5, value: "美食"},
          {key: 6, value: "美妆"},
        ],
      }
    },
    watch:{
      currentTab(val){
        if(this.$refs.navTabs.$children[val]){
          this.$refs.navTabs.$children[val].$el.scrollTop = 0
        }
      }
    },
    methods: {
      selectTab(tab, index) {
        this.currentTab = index;
        this.scrolldis = index ? 1 : 0
        this.searchStyle.background = `rgba(255, 67, 101,${1 - this.scrolldis})`
      },
      lisScroll(e) {
        if(this.currentTab == 0){
          this.scrolldis = e;
          let opacity = 1 - this.scrolldis;
          this.searchStyle.background = `rgba(255,67,101,${opacity})`
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/css/style.scss';

  .home {
    overflow-y: hidden;
    background: #f6f6f6;
    .search-bar {
      width: 100%;
      height: px2rem(102);
      background: $mainColor;
      overflow: hidden;

      .search {
        width: px2rem(710);
        height: px2rem(64);
        border-radius: px2rem(34);
        border: 1px solid $mainColor;
        margin: 0 auto;
        background: #fff;
        font-size: $size14;
        color: $greyColor;
        @include center();
        font-family: sans-serif;
        margin-top: px2rem(24);

        i {
          font-size: $size14;

          &.icon-sousuo1:before {
            font-size: $size15;
            margin-right: px2rem(10);
          }
        }
      }
    }
    ::v-deep .tab-body:first-child{
      background: $mainColor;
    }
  }
</style>
