<template>
  <div class="search-wrap">
    <input type="text" placeholder="搜索商品名或粘贴淘宝标题" v-model.trim="content">
    <i class="iconfont icon-sousuo1"></i>
    <div class="search-btn" @click="search">搜索</div>
    <van-icon name="clear" class="clear-icon"  v-show="content" @click="cancel" />
  </div>
</template>

<script>
  export default {
    name: "SearchComponents",
    props:["item"],
    data() {
      return {
        content:""
      }
    },
    watch:{
      item(val){
        this.content = val;
      }
    },
    methods: {
      search(){
        if(this.content){
          this.$emit("search",true)
          this.$emit("content",this.content)
        }
      },
      cancel(){
        this.content = '';
        this.$emit("search",false)
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import '@/assets/css/style.scss';
    .search-wrap{
      width: calc(100% - 0.5333333rem);
      height: px2rem(64);
      font-size: $size14;
      position: relative;
      padding: px2rem(20);
      padding-bottom: px2rem(12);
      background: #fff;
      input{
        background: #F6F6F6;
        width: 100%;
        height: 100%;
        border-radius: px2rem(29);
        padding-left: px2rem(62);
        padding-right: px2rem(170);
        box-sizing: border-box;
        line-height: normal;
      }
      .iconfont{
        position: absolute;
        top: px2rem(34);
        left: px2rem(36);
        color: #909399;
      }
      .clear-icon{
        position: absolute;
        right: px2rem(150);
        top: 50%;
        transform: translateY(-50%);
        font-size: px2rem(30);
        color: #d0d0d0;
      }
      .search-btn{
        width: px2rem(120);
        border-radius: px2rem(29);
        color: #fff;
        background: $mainColor;
        position: absolute;
        right: px2rem(20);
        top: px2rem(20);
        height: px2rem(64);
        @include center();
      }
  }

</style>
