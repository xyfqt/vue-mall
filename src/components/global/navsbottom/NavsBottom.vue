<template>
  <div class="navs-bottom border_1px_top">
    <div class="item-wrap"
                 v-for="(item,index) in list" :key="index"
                  @click="$router.replace(item.path)"
                 :class="index == select ? 'active' : '' ">
      <img :src="index == select ? item.lightIcon :item.greyIcon" alt="">
      <span>{{item.name}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: "NavsBottom",
    props: ['select'],
    data() {
      return {
        list: [
          {
            name: '首页',
            path:'/',
            lightIcon: require("../../../assets/image/icon/tab_icon_home_light.png"),
            greyIcon: require("../../../assets/image/icon/tab_icon_home_grey.png")
          },
          {
            name: '分类',
            path:'/category',
            lightIcon: require("../../../assets/image/icon/tab_icon_category_light.png"),
            greyIcon: require("../../../assets/image/icon/tab_icon_category_grey.png")
          },
          {
            name: '购物车',
            path:'/shopping-car',
            lightIcon: require("../../../assets/image/icon/tab_icon_car_light.png"),
            greyIcon: require("../../../assets/image/icon/tab_icon_car_grey.png")
          },
          {
            name: '我的',
            path:'/mine',
            lightIcon: require("../../../assets/image/icon/tab_icon_my_light.png"),
            greyIcon: require("../../../assets/image/icon/tab_icon_my_grey.png")
          },
        ]
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import '@/assets/css/style.scss';

  .navs-bottom {
    position: fixed;
    width: 100%;
    height: px2rem(130);
    background: #fff;
    bottom: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .item-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: px2rem(20);
      color: #606266;

      &.active {
        color: $mainColor;
      }

      img {
        width: px2rem(60);
        height: px2rem(60);
      }
    }
  }
</style>
