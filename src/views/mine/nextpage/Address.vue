<template>
  <div class="address app-container">
    <ul>
      <li v-for="item in addressList" :key="item">
        <div class="address-info">
          <div class="address-name">
            <span>徐福福</span>
            <span>13625002588</span>
          </div>
          <div class="address-detail">
            <span><i v-if="item == 1">默认</i>福建省厦门市思明区汇金国际中心77号22楼下电梯左手边办公室</span>
          </div>
        </div>
        <img class="edit" src="../../../assets/image/icon/mine/icon-edit.png" alt="" @click="$router.push('/edit-address')">
        <van-divider class="bottom-line" />
      </li>
    </ul>
    <div class="without-data" v-show="false">
      <img src="../../../assets/image/icon/mine/no-address.png" alt="">
      <span>你还没有添加地址呢～</span>
    </div>
    <div class="add-btn-wrap">
      <div class="add-btn" @click="$router.push('/edit-address')">
        <van-icon class="icon" name="plus"/>
        新建地址
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Address",
    data() {
      return {
        addressList:[1,2,3,4,5,6,7]
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/css/style.scss';

  .address {
    overflow-y: auto;
    padding-bottom: px2rem(130);
    box-sizing: border-box;
    background: #fff;
    ul {
      li {
        width: 100%;
        padding: px2rem(32);
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 0;
        position: relative;
        .address-info {
          line-height: 1.5;
          .address-name {
            font-size: $size16;
            color: #16171C;
            span:nth-child(2){
              margin-left: px2rem(30);
            }
          }
          .address-detail{
            font-size: $size14;
            margin-top: px2rem(6);
            color: #909399;
            i{
              font-style: normal;
              width: px2rem(64);
              height: px2rem(32);
              display: inline-block;
              text-align: center;
              line-height: px2rem(32);
              border-radius: px2rem(5);
              margin-right: px2rem(20);
              color: $mainColor;
              background: rgba(255,67,101,0.05);
              font-size: px2rem(20);
            }

          }
        }
        .edit{
          width: px2rem(40);
          height: px2rem(40);
        }
        .bottom-line{
          position: absolute;
          bottom: 0;
          width: px2rem(686);
        }
      }
    }
    .add-btn-wrap{
      position: fixed;
      bottom: 0;
      width: 100%;
      /*padding-top: px2rem(10);*/
      padding-bottom: px2rem(32);
      background: #fff;
      .add-btn {
        width: px2rem(686);
        height: px2rem(92);
        margin: 0 auto;
        color: #fff;
        background: $mainColor;
        border-radius: px2rem(8);
        @include center();
        .icon {
          position: relative;
          top: px2rem(3);
          margin-right: px2rem(8);
        }
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
