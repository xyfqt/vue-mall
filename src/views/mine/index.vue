<template>
  <div class="mine-page app-container">
    <div class="wrap">
      <div class="user-info">
        <div class="user-avatr">
          <img src="http://mwimg.mostonetech.xyz/img/aa2c362e3fa21e074b0152834b4e2516.jpg" alt="">
        </div>
        <div class="nickname">杰尼龟</div>
      </div>
      <div class="order-info">
        <div class="order-title" @click="$router.push('/order')">
          <span>我的订单</span>
          <van-icon class="icon" name="arrow" />
        </div>
        <ul class="order-type">
          <li class="order-item"
              v-for="(item,index) in list" :key="index"
              @click="$router.push(item.path)">
            <img :src="item.icon">
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>

      <ul class="menu-list">
        <li class="item-wrap"
            v-for="(item,index) in menuList" :key="index"
            @click="$router.push(item.path)">
          <div class="info-wrap">
            <img :src="item.icon">
            <span>{{item.name}}</span>
          </div>
          <van-icon class="icon" name="arrow" />
        </li>
      </ul>
    </div>
    <navs-bottom :select="3"></navs-bottom>
  </div>

</template>

<script>
  export default {
    name: "Mine",
    data(){
      return {
        list: [
          {
            name: '待付款',
            path:'/',
            icon: require("../../assets/image/icon/mine/icon_For_the_payment@2x.png")
          },
          {
            name: '待发货',
            path:'/category',
            icon: require("../../assets/image/icon/mine/icon_To_sendthe_goods@2x.png")
          },
          {
            name: '待收货',
            path:'/shopping-car',
            icon: require("../../assets/image/icon/mine/icon_For_the_goods@2x.png")
          },
          {
            name: '已完成',
            path:'/mine',
            icon: require("../../assets/image/icon/mine/icon_Has_been_completed@2x.png")
          },
        ],
        menuList: [
          {
            name: '地址管理',
            path:'/address',
            icon: require("../../assets/image/icon/mine/icon_address@2x.png")
          },
          {
            name: '联系客服',
            path:'/category',
            icon: require("../../assets/image/icon/mine/icon-Customer_service@2x.png")
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/css/style.scss';

  .mine-page {

    .wrap{
      padding: px2rem(20);
      box-sizing: border-box;
    }
    .user-info {
      width: 100%;
      height: px2rem(220);
      background: url("../../assets/image/icon/mine/background@2x.png");
      background-size: 100% 100%;
      padding-left: px2rem(20);
      box-sizing: border-box;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .user-avatr {
        border: px2rem(4) solid #ffa4b5;
        width: px2rem(120);
        height: px2rem(120);
        border-radius: 50%;

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }

      .nickname {
        color: #fff;
        font-size: px2rem(40);
        margin-left: px2rem(20);
      }
    }

    .order-info {
      width: 100%;
      border-radius: px2rem(15);
      background: #fff;
      padding: 0 px2rem(24);
      box-sizing: border-box;
      margin: px2rem(20) 0;
      .order-title{
        width: 100%;
        height: px2rem(100);
        border-bottom: 1px solid #f4f4f4;
        font-size: $size16;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .icon{
          font-size: px2rem(26);
          color: #888;
          position: relative;
          top: px2rem(5);
        }
      }
      .order-type{
        width: 100%;
        height: px2rem(180);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 px2rem(15);
        box-sizing: border-box;
        .order-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: $size12;
          img {
            width: px2rem(60);
            height: px2rem(60);
            margin-bottom: px2rem(20);
          }
        }
      }
    }

    .menu-list{
      background: #fff;
      width: 100%;
      border-radius: px2rem(15);
      padding: 0 px2rem(24);
      box-sizing: border-box;
      li{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: px2rem(100);
        .info-wrap{
            display: flex;
          align-items: center;
          font-size: $size16;
          img{
            width: px2rem(50);
            height: px2rem(50);
            margin-right: px2rem(20);
          }
        }
        .icon{
          font-size: px2rem(26);
          color: #888;
          position: relative;
          top: px2rem(5);
        }
        &+li{
          border-top: 1px solid #f4f4f4;
        }
      }
    }
  }
</style>
