<template>
  <div class="car-goods">
    <div class="single-shop-goods" v-for="(item,index) in dataList " :key="index">
      <div class="shop-name">
        <van-checkbox v-model="item.allCheck"  checked-color="#FF4365"  @click.native="allCheck(item.shop,!item.allCheck)"></van-checkbox>
        <img src="http://mwimg.mostonetech.xyz/img/aa2c362e3fa21e074b0152834b4e2516.jpg" alt="">
        <span>默往严选{{item.shop}}</span>
      </div>
      <van-divider />
      <div class="cell-goods-wrap">
          <van-swipe-cell v-for="(g,i) in item.goods" :key="i" class="cell-goods-item">
            <div class="cell-goods">
              <van-checkbox v-model="g.check" checked-color="#FF4365" @change="check(item.shop)"></van-checkbox>
              <div class="goods-info">
                <div class="img-wrap">
                  <van-image
                    width="100%"
                    height="100%"
                    lazy-load
                    src="http://mwimg.mostonetech.xyz/img/aa2c362e3fa21e074b0152834b4e2516.jpg"
                  />
                </div>
                <div class="goods-right">
                    <div class="goods-title">{{g.name}}</div>
                    <div class="goods-spec " :class="device">
                      <span>蓝色 2Xl</span>
                      <van-stepper v-model="g.num" integer/>
                    </div>
                    <div class="goods-price">
                      ¥{{g.price}}.00
                    </div>
                </div>
              </div>
            </div>

            <template #right>
              <div class="delete-button">
                删除
              </div>
<!--              <van-button square text="删除" type="danger" class="delete-button" />-->
            </template>
          </van-swipe-cell>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CarGoods",
    props:['dataList'],
    data() {
      return {
        checked:false,
        goodsNum:1,
        device:''
      }
    },
    watch:{
      dataList:{
        handler(){
          this.$emit("update:dataList",this.dataList)
        },
        deep:true,
        immediate:true
      }
    },
    created() {
      this.device = this.judgeClient();
    },
    methods:{
      allCheck(id,flag){
        console.log("parent-",id)
        this.dataList.filter(item =>item.shop == id).map(item =>{
          item.goods.map(g => {
            g.check = flag;
          })
        })
      },
      check(id){
        this.dataList.filter(item =>item.shop == id).map(item =>{
         let temp = item.goods.filter(g => g.check)
          if(temp.length == item.goods.length){
            item.allCheck = true;
          }else {
            item.allCheck = false
          }
        })
      },
      judgeClient () {
        let u = navigator.userAgent
        let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1   //判断是否是 android终端
        let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)     //判断是否是 iOS终端
        if (isAndroid) {
          return 'Android'
        } else if (isIOS) {
          return 'IOS'
        } else {
          return 'PC'
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/css/style.scss';

  .car-goods {
    .single-shop-goods{
      background: #fff;
      width: 100%;
      border-radius: px2rem(10);
      padding: 0 px2rem(20);
      box-sizing: border-box;
      margin-bottom: px2rem(20);
      .shop-name{
        display: flex;
        align-items: center;
        width: 100%;
        height: px2rem(100);
        font-size: $size16;
        color: #16171C;
        img{
          width: px2rem(50);
          height: px2rem(50);
          margin-left: px2rem(34);
          margin-right: px2rem(20);
        }
      }
      .cell-goods-wrap{
        padding: px2rem(20) 0;
        .cell-goods{
          display: flex;
          .goods-info{
            display: flex;
            .img-wrap{
              width: px2rem(180);
              height: px2rem(180);
              border-radius: px2rem(8);
              margin-left: px2rem(24);
              margin-right:px2rem(21);
              ::v-deep .van-image__img{
                border-radius: px2rem(8);
              }
            }
            .goods-right{
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              font-size: $size14;
              color: #16171C;
              .goods-title{
                width: px2rem(400);
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
              }
              .goods-spec{
                font-size: $size12;
                color: #909399;
                display: flex;
                align-items: center;
                justify-content: space-between;

                ::v-deep .van-stepper{
                  .van-stepper__minus,.van-stepper__minus--disabled, .van-stepper__plus--disabled,.van-stepper__plus{
                    width: px2rem(35);
                    height: px2rem(35);
                    background: #fff;
                    border: 1px solid #C6C6C6;
                    border-radius: 0;
                    &:before{
                      width: px2rem(15);
                    }
                    &:after{
                      height: px2rem(15);
                    }

                  }
                  .van-stepper__input{
                    height: px2rem(35);
                    margin: 0;
                    background: #fff;
                    border-top: 1px solid #C6C6C6;
                    border-bottom: 1px solid #C6C6C6;
                    font-size: $size14;
                  }
                }
                &.Android{
                  ::v-deep .van-stepper .van-stepper__input{
                    padding-top: px2rem(3);
                  }
                }
                &.IOS{
                  ::v-deep .van-stepper .van-stepper__input{
                    /*padding-bottom: px2rem(3);*/
                  }
                }
              }
            }
          }
        }
        .delete-button{
          width: px2rem(130);
          height: 100%;
          background: $mainColor;
          color: #fff;
          margin-left: 1px;
          @include center();
        }
      }
      .cell-goods-item + .cell-goods-item{
        margin-top: px2rem(20);
      }
    }
  }
</style>
