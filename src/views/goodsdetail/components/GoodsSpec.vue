<template>
  <div class="goods-spec-wrap">
    <div class="detail-info">
      <h6>颜色</h6>
      <ul>
        <li v-for="(item,index) in data.color.data" :key="index" @click="selectColor(item)"
            :class="data.color.check == item ? 'active' : ''">{{item}}
        </li>
      </ul>
      <h6>尺寸</h6>
      <ul>
        <li v-for="(item,index) in data.spec.data" :key="index" @click="selectSpec(item)"
            :class="data.spec.check == item ? 'active' : ''">{{item}}
        </li>
      </ul>
      <h6>数量</h6>
      <van-stepper v-model="data.goodsNum" integer/>
    </div>
  </div>
</template>
<script>
  export default {
    name: "GoodsSpec",
    props: ["data"],
    methods: {
      selectColor(item) {
        this.data.color.check = item;
      },
      selectSpec(item) {
        this.data.spec.check = item;
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import '@/assets/css/style.scss';

  .goods-spec-wrap {
    .detail-info {
      font-size: $size14;

      h6 {
        font-size: $size14;
        margin: px2rem(20) 0;
      }

      ul {
        margin-bottom: px2rem(20);
        display: flex;
        flex-wrap: wrap;

        li {
          background: #F6F6F6;
          border-radius: px2rem(8);
          width: px2rem(150);
          height: px2rem(70);
          margin-right: px2rem(10);
          margin-bottom: px2rem(20);
          color: #606266;
          box-sizing: border-box;
          @include center();
          &.active{
            color: $mainColor;
            background: rgba(255,67,101,0.04);
            border: 1px solid $mainColor;
          }
        }
      }
    }
  }

</style>
