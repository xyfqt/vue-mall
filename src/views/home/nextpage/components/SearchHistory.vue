<template>
  <div class="search-history">
    <div class="search-header" v-show="history.length">
      <span>搜索历史</span>
      <van-icon class="icon" name="delete" @click="clearHistory" />
    </div>
    <ul>
      <li class="search-item" v-for="(item,index) in history" :key="index" @click="search(item)">{{item}}</li>
    </ul>
    <div class="more-history"  v-show="history.length">
      更多搜索历史
      <van-icon name="arrow-down" />
    </div>
  </div>
</template>
<script>

  export default {
    name: "SearchHistory",
    components: {},
    props:{
      history:{
        type:Array,
        default:() => []
      }
    },
    data() {
      return {}
    },
    methods: {
      search(item){
        this.$emit("search",item);
      },
      clearHistory() {
        this.$emit('clear')
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import '@/assets/css/style.scss';


  .search-history {
    width: 100%;
    height: calc(100% - 1.28rem);
    background: #fff;
    padding: 0 px2rem(20);
    box-sizing: border-box;
    .search-header {
      width: 100%;
      height: px2rem(80);
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: $size14;
      font-weight: bold;

      .icon {
        font-weight: normal;
        font-size: px2rem(40);
        color: #666;
      }
    }

    .search-item {
      background: #F6F6F6;
      border-radius: px2rem(30);
      font-size: $size12;
      display: inline-block;
      padding: px2rem(13) px2rem(27);
      margin-right: px2rem(20);
      margin-bottom: px2rem(20);
    }

    .more-history{
      @include center();
      font-size: $size14;
      font-weight: bold;
      margin-top: px2rem(50);
      i{
        margin-left: px2rem(8);
        font-size: px2rem(18);
      }
    }
  }

</style>
