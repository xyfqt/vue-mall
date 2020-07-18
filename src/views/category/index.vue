<template>
  <div class="category-page app-container">
    <div class="category-list-side">
      <ul>
        <li class="category-item" :class="item == select ? 'active' : ''" v-for="item in list" :key="item" @click="selectItem(item)">
          分类{{item}}
          <i class="line" v-show="item == select"></i>
        </li>
      </ul>
    </div>
    <div class="category-list-item">
      <ul>
        <li class="list-item-wrap" v-for="item in list" :key="item" @click="$router.push('/category-goods')">
          <div class="img-wrap"></div>
          <span>分类{{item}}</span>
        </li>
      </ul>
    </div>

    <navs-bottom :select="1"></navs-bottom>
  </div>
</template>

<script>
  export default {
    name: "CategoryPage",
    data(){
      return {
        select:1,
        list:[1,2,3,4,5,6,7]
      }
    },
    methods:{
      selectItem(item){
        this.select = item;
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import '@/assets/css/style.scss';
  .category-page{
    overflow: hidden;
    display: flex;
    .category-list-side{
      width: px2rem(180);
      max-height: calc(100vh - 1.7333333333rem);
      overflow-y: auto;
      background: #f6f6f6;
      .category-item{
        width: 100%;
        height: px2rem(88);
        @include center();
        font-size: $size14;
        position: relative;
        &.active{
          background: #fff;
          color: $mainColor;
        }
        .line{
          display: inline-block;
          width: px2rem(8);
          height: px2rem(30);
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 0;
          background: $mainColor;
        }
      }
    }
    .category-list-item{
      flex: 1;
      max-height: calc(100vh - 1.7333333333rem);
      overflow-y: auto;
      background: #fff;
      padding-top: px2rem(22);
      box-sizing: border-box;
      .list-item-wrap{
        display: inline-block;
        text-align: center;
        font-size: $size12;
        color: #606266;
        width: 33.3333%;
        margin-bottom: px2rem(30);
        .img-wrap{
          width: px2rem(140);
          height: px2rem(140);
          background: #f6f6f6;
          margin: 0 auto;
          margin-bottom: px2rem(20);
        }
      }
    }
  }

</style>
