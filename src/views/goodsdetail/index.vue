<template>
    <div class="goods-detail app-container" @touchstart.stop="touchStop" @touchmove.stop="touchStop" @touchend.stop="touchStop">
      <goods-swiper></goods-swiper>
      <goods-info :data.sync="tempData"></goods-info>
      <my-goods-action :data.sync="tempData"></my-goods-action>
    </div>
</template>
<script>
  import GoodsSwiper from './components/GoodsSwiper'
  import GoodsInfo from './components/GoodsInfo'
  import MyGoodsAction from './components/MyGoodsAction'

  export default {
    name:"GoodsDetail",
    components:{
      GoodsSwiper,
      GoodsInfo,
      MyGoodsAction
    },
    data(){
      return {
        tempData:{
          color:{
            data:['蓝色','绿色'],
            check:"",
          },
          spec:{
            data:['XXL','XL','L','M'],
            check:"",
          },
          goodsNum:0
        }
      }
    },
    methods:{
      touchStop(){}
    }
  }

</script>

<style lang="scss" scoped>
  @import '@/assets/css/style.scss';
  .goods-detail{
    overflow-y: auto;
    padding-bottom: 50px;
    box-sizing: border-box;
  }
</style>
