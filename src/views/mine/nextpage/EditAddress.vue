<template>
  <div class="edit-address app-container">
    <div class="input-wrap border_1px">
      <span class="lable">收件人</span>
      <input type="text" placeholder="姓名">
    </div>
    <div class="input-wrap border_1px">
      <span class="lable">手机号</span>
      <input type="number" placeholder="手机号码或电话号码">
    </div>
    <div class="input-wrap border_1px">
      <span class="lable">地区<span style="opacity: 0">空</span></span>
      <div class="input-left input-area" @click="provinceShow = true">
        <span>{{selectArea || '请选择地区'}}</span>
        <van-icon class="icon" name="arrow" />
      </div>
    </div>
    <div class="input-wrap border_1px">
      <span class="lable text-area">详细地址</span>
      <input type="textarea" placeholder="街道地址">
    </div>
    <div class="input-wrap border_1px">
      <span class="lable">设置默认地址</span>
      <div class="input-left">
        <van-switch v-model="switchChecked" size="20"/>
      </div>
    </div>
    <van-overlay class="mask" :show="provinceShow">
      <van-area
        :area-list="areaList"
        @cancel="provinceShow = false"
        @confirm="selectProvince"
        class="mask-picker"
      />
    </van-overlay>
    <div class="add-btn-wrap">
      <div class="add-btn" @click="$router.go(-1)">
        保存
      </div>
    </div>
  </div>
</template>

<script>
  import area from "@/utils/area";

  export default {
    name: "EditAddress",
    data() {
      return {
        areaList: area,
        provinceShow: false,
        switchChecked: false,
        selectArea:'',
      }
    },
    methods:{
      selectProvince(item) {
        this.provinceShow = false;
        let temp = [];
        for (let city of item) {
          temp.push(city.name);
        }
        this.selectArea = temp.join("/");
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/css/style.scss';

  .edit-address {
    overflow-y: auto;
    padding: 0 px2rem(32);
    padding-bottom: px2rem(130);
    padding-top: px2rem(10);
    box-sizing: border-box;
    background: #fff;

    .input-wrap {
      width: 100%;
      height: px2rem(100);
      display: flex;
      align-items: center;
      justify-content: space-around;
      font-size: $size16;

      .lable {
        margin-right: px2rem(50);
        line-height: 1;
        &.text-area{
          margin-right: px2rem(20);
        }
      }

      input, .input-left {
        flex: 1;
        height: 100%;
        line-height: normal;
        display: flex;
        align-items: center;
      }

      .input-left {
        justify-content: flex-end;
        ::v-deep.van-switch--on {
          background-color: $mainColor;
        }
      }
      .input-area{
        justify-content: space-between;
        .icon{
          position: relative;
          color: #999999;
          top: px2rem(4);
        }
      }
    }

    .mask {
      .mask-picker {
        position: absolute;
        bottom: 0;
        width: 100%;
        ::v-deep .van-picker__cancel{
          color: #999;
        }
        ::v-deep .van-picker__confirm {
          color: $mainColor;
        }
      }
    }

    .add-btn-wrap {
      position: fixed;
      bottom: 0;
      width: 100%;
      /*padding-top: px2rem(10);*/
      padding-bottom: px2rem(32);
      background: #fff;

      .add-btn {
        width: px2rem(686);
        height: px2rem(92);
        color: #fff;
        background: $mainColor;
        border-radius: px2rem(8);
        @include center();
      }
    }

  }
</style>
